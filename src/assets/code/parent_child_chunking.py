"""
Parent-Child Chunking Implementation
Creates hierarchical chunks with parent summaries and child details
"""

from typing import List, Dict, Optional


class ParentChildChunker:
    """Create hierarchical parent-child chunks"""
    
    def __init__(
        self,
        child_chunk_size: int = 256,
        children_per_parent: int = 4,
        min_parent_size: int = 100
    ):
        """
        Initialize Parent-Child Chunker
        
        Args:
            child_chunk_size: Size of detail chunks
            children_per_parent: How many children per parent
            min_parent_size: Minimum parent summary size
        """
        self.child_chunk_size = child_chunk_size
        self.children_per_parent = children_per_parent
        self.min_parent_size = min_parent_size
    
    def chunk(
        self, 
        text: str,
        create_summaries: bool = True
    ) -> Dict:
        """
        Create hierarchical chunks
        
        Args:
            text: Input text to chunk
            create_summaries: Whether to create parent summaries
            
        Returns:
            Dictionary with parents and children
        """
        # Create child chunks
        children = self._create_children(text)
        
        # Create parent chunks
        parents = self._create_parents(children, create_summaries)
        
        return {
            'parents': parents,
            'children': children,
            'hierarchy': self._create_hierarchy(parents, children)
        }
    
    def _create_children(self, text: str) -> List[Dict]:
        """Create child chunks"""
        words = text.split()
        children = []
        child_id = 0
        
        current_chunk = []
        current_size = 0
        
        for word in words:
            if current_size >= self.child_chunk_size:
                if current_chunk:
                    children.append({
                        'id': f'child_{child_id}',
                        'content': ' '.join(current_chunk),
                        'size': current_size,
                        'position': child_id
                    })
                    child_id += 1
                current_chunk = [word]
                current_size = len(word)
            else:
                current_chunk.append(word)
                current_size += len(word) + 1
        
        if current_chunk:
            children.append({
                'id': f'child_{child_id}',
                'content': ' '.join(current_chunk),
                'size': current_size,
                'position': child_id
            })
        
        return children
    
    def _create_parents(
        self, 
        children: List[Dict],
        create_summaries: bool = True
    ) -> List[Dict]:
        """Create parent chunks from children"""
        parents = []
        parent_id = 0
        
        for i in range(0, len(children), self.children_per_parent):
            child_group = children[i:i + self.children_per_parent]
            
            # Combine children
            combined_content = ' '.join([c['content'] for c in child_group])
            
            # Create summary (placeholder)
            summary = self._create_summary(combined_content) if create_summaries else ""
            
            parents.append({
                'id': f'parent_{parent_id}',
                'content': combined_content,
                'summary': summary,
                'children_ids': [c['id'] for c in child_group],
                'children_count': len(child_group),
                'size': len(combined_content)
            })
            
            parent_id += 1
        
        return parents
    
    def _create_summary(self, text: str) -> str:
        """Create summary of text (placeholder)"""
        # In production, use LLM or extractive summarization
        words = text.split()
        summary_words = words[:min(len(words) // 3, 50)]
        return ' '.join(summary_words) + "..."
    
    def _create_hierarchy(
        self,
        parents: List[Dict],
        children: List[Dict]
    ) -> Dict:
        """Create hierarchy mapping"""
        hierarchy = {}
        for parent in parents:
            hierarchy[parent['id']] = {
                'children': parent['children_ids'],
                'content_size': parent['size']
            }
        return hierarchy


# Example usage
if __name__ == "__main__":
    sample_text = """
    Machine learning enables automated decision making.
    It encompasses supervised and unsupervised learning.
    Deep learning uses neural networks for complex tasks.
    Convolutional networks process images effectively.
    Recurrent networks handle sequential data.
    Transformers revolutionized natural language processing.
    """ * 3
    
    chunker = ParentChildChunker(child_chunk_size=30, children_per_parent=2)
    result = chunker.chunk(sample_text)
    
    print(f"Created {len(result['parents'])} parents")
    print(f"Created {len(result['children'])} children")
    for parent in result['parents']:
        print(f"  Parent {parent['id']}: {parent['children_count']} children")
