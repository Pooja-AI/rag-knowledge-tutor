"""
Semantic Chunking Implementation
Groups text by semantic similarity using embeddings
"""

from typing import List, Dict, Optional
import numpy as np
from sklearn.metrics.pairwise import cosine_similarity


class SemanticChunker:
    """Split documents based on semantic similarity"""
    
    def __init__(
        self,
        similarity_threshold: float = 0.6,
        min_chunk_size: int = 100,
        max_chunk_size: int = 2000
    ):
        """
        Initialize Semantic Chunker
        
        Args:
            similarity_threshold: Similarity cutoff for boundaries
            min_chunk_size: Minimum chunk size
            max_chunk_size: Maximum chunk size
        """
        self.threshold = similarity_threshold
        self.min_chunk_size = min_chunk_size
        self.max_chunk_size = max_chunk_size
    
    def chunk(
        self, 
        text: str,
        embeddings: Optional[List[List[float]]] = None
    ) -> List[Dict]:
        """
        Split text based on semantic similarity
        
        Args:
            text: Input text to chunk
            embeddings: Pre-computed embeddings (optional)
            
        Returns:
            List of semantically coherent chunks
        """
        # Split into sentences
        sentences = self._split_sentences(text)
        
        if len(sentences) < 2:
            return [{'content': text, 'chunk_id': 0}]
        
        # Get or generate embeddings
        if embeddings is None:
            embeddings = self._get_embeddings(sentences)
        
        # Calculate similarities
        similarities = self._calculate_similarities(embeddings)
        
        # Identify boundaries
        boundaries = self._identify_boundaries(similarities)
        
        # Create chunks
        chunks = self._create_chunks(sentences, boundaries)
        
        return chunks
    
    def _split_sentences(self, text: str) -> List[str]:
        """Split text into sentences"""
        import re
        # Simple sentence splitting
        sentences = re.split(r'(?<=[.!?])\s+', text)
        return [s.strip() for s in sentences if s.strip()]
    
    def _get_embeddings(self, sentences: List[str]) -> List[List[float]]:
        """Generate embeddings for sentences"""
        # Placeholder - in production use actual embedding model
        # Example: OpenAI, HuggingFace, etc.
        embeddings = []
        for sentence in sentences:
            # Simple embedding: one-hot encoding words (placeholder)
            words = sentence.lower().split()
            embedding = [len(sentence) / 100] + [len(w) for w in words[:10]]
            embedding = embedding + [0] * (11 - len(embedding))
            embeddings.append(embedding[:11])
        return embeddings
    
    def _calculate_similarities(
        self, 
        embeddings: List[List[float]]
    ) -> List[float]:
        """Calculate cosine similarity between consecutive sentences"""
        similarities = []
        for i in range(len(embeddings) - 1):
            sim = cosine_similarity(
                [embeddings[i]], 
                [embeddings[i + 1]]
            )[0][0]
            similarities.append(sim)
        return similarities
    
    def _identify_boundaries(self, similarities: List[float]) -> List[int]:
        """Identify chunk boundaries where similarity drops"""
        boundaries = [0]
        for i, sim in enumerate(similarities):
            if sim < self.threshold:
                boundaries.append(i + 1)
        boundaries.append(len(similarities) + 1)
        return list(set(boundaries))
    
    def _create_chunks(
        self, 
        sentences: List[str],
        boundaries: List[int]
    ) -> List[Dict]:
        """Create chunks from boundaries"""
        boundaries = sorted(boundaries)
        chunks = []
        chunk_id = 0
        
        for i in range(len(boundaries) - 1):
            start = boundaries[i]
            end = boundaries[i + 1]
            chunk_sentences = sentences[start:end]
            chunk_text = ' '.join(chunk_sentences)
            
            # Skip if too small
            if len(chunk_text) < self.min_chunk_size:
                continue
            
            # Split if too large
            if len(chunk_text) > self.max_chunk_size:
                sub_chunks = self._split_large_chunk(chunk_text)
                for sub_chunk in sub_chunks:
                    chunks.append({
                        'content': sub_chunk,
                        'chunk_id': chunk_id
                    })
                    chunk_id += 1
            else:
                chunks.append({
                    'content': chunk_text,
                    'chunk_id': chunk_id
                })
                chunk_id += 1
        
        return chunks
    
    def _split_large_chunk(self, text: str, max_size: int = None) -> List[str]:
        """Split oversized chunk"""
        max_size = max_size or self.max_chunk_size
        sentences = self._split_sentences(text)
        
        chunks = []
        current = []
        current_size = 0
        
        for sent in sentences:
            if current_size + len(sent) > max_size:
                if current:
                    chunks.append(' '.join(current))
                current = [sent]
                current_size = len(sent)
            else:
                current.append(sent)
                current_size += len(sent)
        
        if current:
            chunks.append(' '.join(current))
        
        return chunks


# Example usage
if __name__ == "__main__":
    sample_text = """
    Machine learning is transforming industries.
    It enables automated decision making.
    Deep learning uses neural networks.
    These networks process data hierarchically.
    The weather today is sunny.
    Tomorrow might bring rain.
    Weather patterns are changing.
    """
    
    chunker = SemanticChunker(similarity_threshold=0.6)
    chunks = chunker.chunk(sample_text)
    print(f"Semantic chunking: {len(chunks)} chunks created")
    for i, chunk in enumerate(chunks):
        print(f"  Chunk {i}: {chunk['content'][:50]}...")
