"""
Token-based Chunking Implementation
Splits documents by exact token count
"""

from typing import List, Dict, Optional


class TokenBasedChunker:
    """Split documents by token count"""
    
    def __init__(
        self,
        chunk_size: int = 512,
        overlap: int = 0,
        tokenizer: str = "simple"
    ):
        """
        Initialize Token-based Chunker
        
        Args:
            chunk_size: Number of tokens per chunk
            overlap: Number of overlapping tokens
            tokenizer: "simple" or tokenizer function name
        """
        self.chunk_size = chunk_size
        self.overlap = overlap
        self.tokenizer_type = tokenizer
    
    def chunk(self, text: str) -> List[Dict]:
        """
        Split text by token count
        
        Args:
            text: Input text to chunk
            
        Returns:
            List of token-aligned chunks
        """
        # Tokenize
        tokens = self._tokenize(text)
        
        # Create chunks
        chunks = []
        stride = self.chunk_size - self.overlap
        
        for i in range(0, len(tokens), stride):
            end = min(i + self.chunk_size, len(tokens))
            chunk_tokens = tokens[i:end]
            chunk_text = self._detokenize(chunk_tokens)
            
            chunks.append({
                'content': chunk_text,
                'tokens': len(chunk_tokens),
                'start_token': i,
                'end_token': end,
                'chunk_id': len(chunks),
                'has_overlap': i > 0 and i < len(tokens) - self.chunk_size
            })
        
        return chunks
    
    def _tokenize(self, text: str) -> List[str]:
        """Tokenize text"""
        if self.tokenizer_type == "simple":
            # Simple space-based tokenization
            return text.split()
        else:
            # Placeholder for more sophisticated tokenizers
            # In production use: tiktoken, transformers, etc.
            return text.split()
    
    def _detokenize(self, tokens: List[str]) -> str:
        """Convert tokens back to text"""
        return ' '.join(tokens)


# Example usage
if __name__ == "__main__":
    sample_text = """
    Machine learning is a subset of artificial intelligence.
    It enables computers to learn from data without being explicitly programmed.
    Deep learning is a subset of machine learning.
    Neural networks are inspired by biological neural systems.
    """ * 3
    
    chunker = TokenBasedChunker(chunk_size=30, overlap=5)
    chunks = chunker.chunk(sample_text)
    print(f"Token-based chunking: {len(chunks)} chunks")
    for i, chunk in enumerate(chunks[:3]):
        print(f"  Chunk {i}: {chunk['tokens']} tokens")
