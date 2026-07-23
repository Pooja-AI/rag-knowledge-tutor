"""
Paragraph Chunking Implementation
Groups complete paragraphs into chunks
"""

from typing import List, Dict
import re


class ParagraphChunker:
    """Split documents by paragraph boundaries"""
    
    def __init__(
        self,
        min_chunk_size: int = 50,
        max_chunk_size: int = 2000,
        paragraph_delimiter: str = "\n\n"
    ):
        """
        Initialize Paragraph Chunker
        
        Args:
            min_chunk_size: Minimum chunk size
            max_chunk_size: Maximum chunk size
            paragraph_delimiter: String that marks paragraph breaks
        """
        self.min_chunk_size = min_chunk_size
        self.max_chunk_size = max_chunk_size
        self.delimiter = paragraph_delimiter
    
    def chunk(self, text: str) -> List[Dict]:
        """
        Split text by paragraph boundaries
        
        Args:
            text: Input text to chunk
            
        Returns:
            List of paragraph-aligned chunks
        """
        # Split into paragraphs
        paragraphs = self._split_paragraphs(text)
        paragraphs = [p.strip() for p in paragraphs if p.strip()]
        
        chunks = []
        current_chunk = []
        current_size = 0
        chunk_id = 0
        
        for para in paragraphs:
            para_size = len(para)
            
            # Check if adding paragraph exceeds limit
            if current_size + para_size > self.max_chunk_size:
                if current_chunk:
                    chunk_text = "\n\n".join(current_chunk)
                    if len(chunk_text) >= self.min_chunk_size:
                        chunks.append({
                            'content': chunk_text,
                            'paragraphs': len(current_chunk),
                            'size': current_size,
                            'chunk_id': chunk_id
                        })
                        chunk_id += 1
                current_chunk = [para]
                current_size = para_size
            else:
                current_chunk.append(para)
                current_size += para_size
        
        # Add remaining
        if current_chunk:
            chunk_text = "\n\n".join(current_chunk)
            if len(chunk_text) >= self.min_chunk_size:
                chunks.append({
                    'content': chunk_text,
                    'paragraphs': len(current_chunk),
                    'size': current_size,
                    'chunk_id': chunk_id
                })
        
        return chunks
    
    def _split_paragraphs(self, text: str) -> List[str]:
        """Split text by paragraph delimiter"""
        return text.split(self.delimiter)


# Example usage
if __name__ == "__main__":
    sample_text = """The company was founded in 1998.

It grew rapidly in the early years.

By 2010, it had 1000 employees.

Market expansion continued globally.

The IPO occurred in 2015."""
    
    chunker = ParagraphChunker()
    chunks = chunker.chunk(sample_text)
    print(f"Paragraph chunking: {len(chunks)} chunks")
    for i, chunk in enumerate(chunks):
        print(f"  Chunk {i}: {chunk['paragraphs']} paragraphs")
