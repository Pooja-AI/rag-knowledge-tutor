"""
Agentic Chunking Implementation
Uses LLM agent to intelligently determine chunk boundaries
"""

from typing import List, Dict, Optional


class AgenticChunker:
    """Use LLM agent to chunk documents intelligently"""
    
    def __init__(
        self,
        min_chunk_size: int = 100,
        max_chunk_size: int = 2000,
        llm_client=None,
        model: str = "gpt-4"
    ):
        """
        Initialize Agentic Chunker
        
        Args:
            min_chunk_size: Minimum chunk size
            max_chunk_size: Maximum chunk size
            llm_client: LLM client for API calls
            model: Model to use for analysis
        """
        self.min_chunk_size = min_chunk_size
        self.max_chunk_size = max_chunk_size
        self.llm_client = llm_client
        self.model = model
    
    def chunk(self, text: str) -> List[Dict]:
        """
        Use LLM agent to chunk text intelligently
        
        Args:
            text: Input text to chunk
            
        Returns:
            List of intelligently chunked content
        """
        # If no LLM client, use fallback
        if not self.llm_client:
            return self._fallback_chunk(text)
        
        # Query LLM for boundaries
        boundaries = self._get_boundaries_from_llm(text)
        
        # Extract chunks
        chunks = self._extract_chunks(text, boundaries)
        
        return chunks
    
    def _get_boundaries_from_llm(self, text: str) -> List[int]:
        """Query LLM for chunk boundaries"""
        prompt = f"""
        Analyze this text and identify optimal chunk boundaries.
        Each chunk should be 100-2000 characters.
        
        Return a JSON list of sentence positions where chunks should end.
        
        Text:
        {text[:1000]}...
        """
        
        # Placeholder - in production would call actual LLM
        # This would use llm_client.generate(prompt)
        
        # For demo, split at sentence boundaries
        import re
        sentences = re.split(r'(?<=[.!?])\s+', text)
        boundaries = []
        pos = 0
        for i, sent in enumerate(sentences):
            pos += len(sent) + 1
            if pos > self.max_chunk_size:
                boundaries.append(i)
                pos = 0
        
        return boundaries
    
    def _extract_chunks(self, text: str, boundaries: List[int]) -> List[Dict]:
        """Extract chunks at boundaries"""
        import re
        sentences = re.split(r'(?<=[.!?])\s+', text)
        
        chunks = []
        chunk_id = 0
        current_start = 0
        
        for boundary in boundaries:
            if boundary > current_start:
                chunk_sentences = sentences[current_start:boundary + 1]
                chunk_text = ' '.join(chunk_sentences)
                
                if len(chunk_text) >= self.min_chunk_size:
                    chunks.append({
                        'content': chunk_text,
                        'size': len(chunk_text),
                        'sentences': len(chunk_sentences),
                        'chunk_id': chunk_id,
                        'generated_title': self._generate_title(chunk_text)
                    })
                    chunk_id += 1
                
                current_start = boundary + 1
        
        # Add final chunk
        if current_start < len(sentences):
            chunk_text = ' '.join(sentences[current_start:])
            if len(chunk_text) >= self.min_chunk_size:
                chunks.append({
                    'content': chunk_text,
                    'size': len(chunk_text),
                    'sentences': len(sentences) - current_start,
                    'chunk_id': chunk_id,
                    'generated_title': self._generate_title(chunk_text)
                })
        
        return chunks
    
    def _generate_title(self, text: str) -> str:
        """Generate title for chunk (placeholder)"""
        words = text.split()[:5]
        return ' '.join(words) + "..."
    
    def _fallback_chunk(self, text: str) -> List[Dict]:
        """Fallback chunking without LLM"""
        import re
        sentences = re.split(r'(?<=[.!?])\s+', text)
        
        chunks = []
        current_chunk = []
        current_size = 0
        chunk_id = 0
        
        for sent in sentences:
            if current_size + len(sent) > self.max_chunk_size:
                if current_chunk:
                    chunk_text = ' '.join(current_chunk)
                    chunks.append({
                        'content': chunk_text,
                        'size': len(chunk_text),
                        'chunk_id': chunk_id
                    })
                    chunk_id += 1
                current_chunk = [sent]
                current_size = len(sent)
            else:
                current_chunk.append(sent)
                current_size += len(sent)
        
        if current_chunk:
            chunks.append({
                'content': ' '.join(current_chunk),
                'size': current_size,
                'chunk_id': chunk_id
            })
        
        return chunks


# Example usage
if __name__ == "__main__":
    sample_text = """
    Machine learning is transforming industries.
    It enables automated decision making.
    Deep learning uses neural networks.
    These networks are inspired by the brain.
    The results are impressive and accurate.
    """
    
    chunker = AgenticChunker()
    chunks = chunker.chunk(sample_text)
    print(f"Agentic chunking: {len(chunks)} chunks")
    for i, chunk in enumerate(chunks):
        print(f"  Chunk {i}: {chunk['size']} chars")
