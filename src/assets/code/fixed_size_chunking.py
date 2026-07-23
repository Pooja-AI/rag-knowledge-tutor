"""
Fixed-size Chunking Implementation
Splits documents into uniform chunks of fixed size (characters or tokens)
"""

from typing import List, Dict, Optional


class FixedSizeChunker:
    """Split documents into fixed-size chunks"""
    
    def __init__(self, chunk_size: int = 512, unit: str = "char"):
        """
        Initialize Fixed-Size Chunker
        
        Args:
            chunk_size: Size of each chunk (characters or tokens)
            unit: "char" for character-based, "token" for token-based
        """
        self.chunk_size = chunk_size
        self.unit = unit
        
    def chunk(self, text: str) -> List[Dict]:
        """
        Split text into fixed-size chunks
        
        Args:
            text: Input text to chunk
            
        Returns:
            List of chunk dictionaries with content and metadata
        """
        if self.unit == "char":
            return self._chunk_by_char(text)
        elif self.unit == "token":
            return self._chunk_by_token(text)
        else:
            raise ValueError(f"Unknown unit: {self.unit}")
    
    def _chunk_by_char(self, text: str) -> List[Dict]:
        """Split by character count"""
        chunks = []
        for i in range(0, len(text), self.chunk_size):
            chunk_text = text[i:i + self.chunk_size]
            chunks.append({
                'content': chunk_text,
                'start_pos': i,
                'end_pos': i + len(chunk_text),
                'size': len(chunk_text),
                'chunk_id': len(chunks)
            })
        return chunks
    
    def _chunk_by_token(self, text: str) -> List[Dict]:
        """Split by approximate token count"""
        words = text.split()
        chunks = []
        current_chunk = []
        current_tokens = 0
        chunk_id = 0
        
        for word in words:
            word_tokens = max(1, len(word) // 4)
            if current_tokens + word_tokens > self.chunk_size:
                if current_chunk:
                    chunk_text = ' '.join(current_chunk)
                    chunks.append({
                        'content': chunk_text,
                        'tokens': current_tokens,
                        'words': len(current_chunk),
                        'chunk_id': chunk_id
                    })
                    chunk_id += 1
                current_chunk = [word]
                current_tokens = word_tokens
            else:
                current_chunk.append(word)
                current_tokens += word_tokens
        
        if current_chunk:
            chunk_text = ' '.join(current_chunk)
            chunks.append({
                'content': chunk_text,
                'tokens': current_tokens,
                'words': len(current_chunk),
                'chunk_id': chunk_id
            })
        
        return chunks


# Example usage
if __name__ == "__main__":
    sample_text = """
    Machine learning is a subset of artificial intelligence.
    It enables computers to learn from data without being explicitly programmed.
    Deep learning is a subset of machine learning that uses neural networks.
    """ * 5
    
    # Character-based chunking
    chunker = FixedSizeChunker(chunk_size=100, unit="char")
    chunks = chunker.chunk(sample_text)
    print(f"Character-based: {len(chunks)} chunks")
    
    # Token-based chunking
    chunker = FixedSizeChunker(chunk_size=50, unit="token")
    chunks = chunker.chunk(sample_text)
    print(f"Token-based: {len(chunks)} chunks")
