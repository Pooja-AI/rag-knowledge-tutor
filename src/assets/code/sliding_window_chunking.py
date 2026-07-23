"""
Sliding Window Chunking Implementation
Creates overlapping chunks using a sliding window approach
"""

from typing import List, Dict


class SlidingWindowChunker:
    """Split documents using sliding window with overlap"""
    
    def __init__(
        self,
        window_size: int = 512,
        stride: int = 256
    ):
        """
        Initialize Sliding Window Chunker
        
        Args:
            window_size: Size of each window/chunk
            stride: Number of tokens to move forward (creates overlap)
        """
        self.window_size = window_size
        self.stride = stride
        self.overlap = window_size - stride
    
    def chunk(self, text: str) -> List[Dict]:
        """
        Split text using sliding window
        
        Args:
            text: Input text to chunk
            
        Returns:
            List of overlapping chunks
        """
        # Tokenize
        tokens = text.split()
        
        chunks = []
        position = 0
        chunk_id = 0
        
        while position < len(tokens):
            end = min(position + self.window_size, len(tokens))
            chunk_tokens = tokens[position:end]
            chunk_text = ' '.join(chunk_tokens)
            
            chunks.append({
                'content': chunk_text,
                'tokens': len(chunk_tokens),
                'start_pos': position,
                'end_pos': end,
                'overlap': self.overlap,
                'chunk_id': chunk_id
            })
            
            chunk_id += 1
            position += self.stride
        
        return chunks
    
    def get_overlap_info(self) -> Dict:
        """Get overlap information"""
        overlap_ratio = (self.overlap / self.window_size) * 100
        return {
            'window_size': self.window_size,
            'stride': self.stride,
            'overlap_tokens': self.overlap,
            'overlap_ratio': overlap_ratio
        }


# Example usage
if __name__ == "__main__":
    sample_text = """
    Machine learning is transforming technology.
    It enables automated decision making systems.
    Deep learning uses neural networks.
    These networks process data hierarchically.
    Applications span many industries.
    """ * 5
    
    # 50% overlap
    chunker = SlidingWindowChunker(window_size=20, stride=10)
    chunks = chunker.chunk(sample_text)
    print(f"Sliding window (50% overlap): {len(chunks)} chunks")
    print(f"Overlap info: {chunker.get_overlap_info()}")
    
    # 20% overlap
    chunker = SlidingWindowChunker(window_size=20, stride=16)
    chunks = chunker.chunk(sample_text)
    print(f"\nSliding window (20% overlap): {len(chunks)} chunks")
    print(f"Overlap info: {chunker.get_overlap_info()}")
