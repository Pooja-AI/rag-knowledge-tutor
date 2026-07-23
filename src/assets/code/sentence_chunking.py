"""
Sentence Chunking Implementation
Groups complete sentences into chunks
"""

from typing import List, Dict
import re


class SentenceChunker:
    """Split documents by sentence boundaries"""
    
    def __init__(
        self,
        target_sentences: int = 3,
        max_chunk_size: int = 2000
    ):
        """
        Initialize Sentence Chunker
        
        Args:
            target_sentences: Target sentences per chunk
            max_chunk_size: Maximum chunk size in characters
        """
        self.target_sentences = target_sentences
        self.max_chunk_size = max_chunk_size
    
    def chunk(self, text: str) -> List[Dict]:
        """
        Split text into sentence-based chunks
        
        Args:
            text: Input text to chunk
            
        Returns:
            List of sentence-aligned chunks
        """
        sentences = self._split_sentences(text)
        chunks = []
        current_chunk = []
        current_size = 0
        chunk_id = 0
        
        for sentence in sentences:
            sentence = sentence.strip()
            if not sentence:
                continue
            
            sentence_size = len(sentence)
            
            # Check if adding sentence exceeds limit
            if current_size + sentence_size > self.max_chunk_size:
                if current_chunk:
                    chunks.append({
                        'content': ' '.join(current_chunk),
                        'sentences': len(current_chunk),
                        'size': current_size,
                        'chunk_id': chunk_id
                    })
                    chunk_id += 1
                current_chunk = [sentence]
                current_size = sentence_size
            else:
                current_chunk.append(sentence)
                current_size += sentence_size + 1  # +1 for space
                
                # Split if reached target
                if len(current_chunk) >= self.target_sentences:
                    chunks.append({
                        'content': ' '.join(current_chunk),
                        'sentences': len(current_chunk),
                        'size': current_size,
                        'chunk_id': chunk_id
                    })
                    chunk_id += 1
                    current_chunk = []
                    current_size = 0
        
        # Add remaining
        if current_chunk:
            chunks.append({
                'content': ' '.join(current_chunk),
                'sentences': len(current_chunk),
                'size': current_size,
                'chunk_id': chunk_id
            })
        
        return chunks
    
    def _split_sentences(self, text: str) -> List[str]:
        """Split text into sentences"""
        # Simple sentence splitting on periods, exclamation, question marks
        sentences = re.split(r'(?<=[.!?])\s+', text)
        return sentences


# Example usage
if __name__ == "__main__":
    sample_text = """
    The company was founded in 1998. It grew rapidly.
    By 2010, it had 1000 employees. Market expansion continued.
    The IPO occurred in 2015. Revenue increased significantly.
    """
    
    chunker = SentenceChunker(target_sentences=2)
    chunks = chunker.chunk(sample_text)
    print(f"Sentence chunking: {len(chunks)} chunks")
    for i, chunk in enumerate(chunks):
        print(f"  Chunk {i}: {chunk['sentences']} sentences")
