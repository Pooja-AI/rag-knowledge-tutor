"""
Recursive Chunking Implementation
Splits documents hierarchically by natural delimiters
"""

from typing import List, Dict, Optional


class RecursiveChunker:
    """Split documents recursively by delimiters"""
    
    def __init__(
        self,
        separators: Optional[List[str]] = None,
        chunk_size: int = 512,
        overlap: int = 0,
        min_chunk_size: int = 50
    ):
        """
        Initialize Recursive Chunker
        
        Args:
            separators: List of delimiters to try in order
            chunk_size: Target chunk size in tokens/chars
            overlap: Number of overlapping tokens/chars
            min_chunk_size: Minimum chunk size
        """
        self.separators = separators or ["\n\n", "\n", " ", ""]
        self.chunk_size = chunk_size
        self.overlap = overlap
        self.min_chunk_size = min_chunk_size
        
    def chunk(self, text: str) -> List[Dict]:
        """
        Recursively split text by delimiters
        
        Args:
            text: Input text to chunk
            
        Returns:
            List of chunk dictionaries
        """
        chunks = self._recursive_split(text, self.separators)
        
        # Merge small chunks
        chunks = self._merge_small_chunks(chunks)
        
        # Add overlap if specified
        if self.overlap > 0:
            chunks = self._add_overlap(chunks)
        
        # Add metadata
        for i, chunk in enumerate(chunks):
            chunk['chunk_id'] = i
            chunk['size'] = len(chunk['content'])
        
        return chunks
    
    def _recursive_split(
        self, 
        text: str, 
        separators: List[str],
        depth: int = 0
    ) -> List[Dict]:
        """Recursively split text"""
        if len(text) <= self.chunk_size:
            return [{'content': text}]
        
        if not separators:
            # Force split if no separator left
            return self._force_split(text)
        
        separator = separators[0]
        remaining_separators = separators[1:]
        
        if separator in text:
            splits = text.split(separator)
            chunks = []
            
            for split in splits:
                if len(split) <= self.chunk_size:
                    chunks.append({'content': split})
                else:
                    # Recursively split this part
                    sub_chunks = self._recursive_split(
                        split, remaining_separators, depth + 1
                    )
                    chunks.extend(sub_chunks)
            
            return chunks
        else:
            # Separator not found, try next
            return self._recursive_split(text, remaining_separators, depth + 1)
    
    def _force_split(self, text: str) -> List[Dict]:
        """Force split by size when no separator found"""
        chunks = []
        for i in range(0, len(text), self.chunk_size):
            chunks.append({
                'content': text[i:i + self.chunk_size]
            })
        return chunks
    
    def _merge_small_chunks(self, chunks: List[Dict]) -> List[Dict]:
        """Merge chunks smaller than min_chunk_size"""
        if not chunks:
            return []
        
        merged = []
        current = chunks[0]
        
        for chunk in chunks[1:]:
            if len(current['content']) < self.min_chunk_size:
                current['content'] += '\n' + chunk['content']
            else:
                merged.append(current)
                current = chunk
        
        merged.append(current)
        return merged
    
    def _add_overlap(self, chunks: List[Dict]) -> List[Dict]:
        """Add overlap between chunks"""
        if len(chunks) <= 1:
            return chunks
        
        overlapped = []
        for i, chunk in enumerate(chunks):
            content = chunk['content']
            
            if i > 0:
                prev_content = chunks[i-1]['content']
                overlap_content = prev_content[-self.overlap:]
                content = overlap_content + content
            
            overlapped.append({'content': content})
        
        return overlapped


# Example usage
if __name__ == "__main__":
    sample_text = """
Section One

This is the first section with detailed content.
It has multiple paragraphs that explore the topic.

Section Two

This is the second section with different information.
It builds on concepts from the first section.

Subsection Two-A

A more detailed part of section two.
Contains specific examples and details.
"""
    
    chunker = RecursiveChunker(
        chunk_size=100,
        overlap=20,
        min_chunk_size=30
    )
    chunks = chunker.chunk(sample_text)
    print(f"Recursive chunking: {len(chunks)} chunks created")
    for i, chunk in enumerate(chunks):
        print(f"  Chunk {i}: {len(chunk['content'])} chars")
