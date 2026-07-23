"""
Chunk Parameters Utilities
Tools for calculating and optimizing chunk size, overlap, and context window
"""

from typing import Dict, Optional


class ChunkParameters:
    """Utilities for chunk parameter calculation and optimization"""
    
    # Model context windows
    CONTEXT_WINDOWS = {
        'gpt-3.5-turbo': 4096,
        'gpt-3.5-turbo-16k': 16384,
        'gpt-4': 8192,
        'gpt-4-32k': 32768,
        'gpt-4-turbo': 128000,
        'claude-3-opus': 200000,
        'claude-3-sonnet': 200000,
        'gemini-1.5-pro': 1000000,
    }
    
    @staticmethod
    def calculate_retrieval_budget(
        context_window: int,
        system_prompt_tokens: int = 500,
        query_tokens: int = 500,
        response_buffer: int = 2000,
        overhead: int = 1000
    ) -> int:
        """
        Calculate available tokens for retrieved chunks
        
        Args:
            context_window: Total context window size
            system_prompt_tokens: Tokens for system prompt
            query_tokens: Tokens for user query
            response_buffer: Tokens reserved for response
            overhead: Overhead/safety tokens
            
        Returns:
            Available tokens for chunks
        """
        return (
            context_window 
            - system_prompt_tokens 
            - query_tokens 
            - response_buffer 
            - overhead
        )
    
    @staticmethod
    def optimal_chunk_size(
        context_window: int,
        num_chunks: int = 10,
        system_prompt_tokens: int = 500,
        query_tokens: int = 500,
        response_buffer: int = 2000
    ) -> int:
        """
        Calculate optimal chunk size for given constraints
        
        Args:
            context_window: Model's context window
            num_chunks: Desired number of chunks to retrieve
            system_prompt_tokens: System prompt size
            query_tokens: Query size
            response_buffer: Response size
            
        Returns:
            Recommended chunk size
        """
        budget = ChunkParameters.calculate_retrieval_budget(
            context_window,
            system_prompt_tokens,
            query_tokens,
            response_buffer
        )
        
        optimal_size = budget // num_chunks
        
        # Round to nearest reasonable value
        reasonable_sizes = [256, 512, 1024, 2048, 4096]
        closest = min(reasonable_sizes, key=lambda x: abs(x - optimal_size))
        
        return closest
    
    @staticmethod
    def calculate_overlap_tokens(
        chunk_size: int,
        overlap_ratio: float = 0.2
    ) -> Dict:
        """
        Calculate overlap parameters
        
        Args:
            chunk_size: Size of chunk
            overlap_ratio: Overlap as ratio (0.0-1.0)
            
        Returns:
            Dictionary with overlap information
        """
        overlap_tokens = int(chunk_size * overlap_ratio)
        stride = chunk_size - overlap_tokens
        
        return {
            'chunk_size': chunk_size,
            'overlap_ratio': overlap_ratio,
            'overlap_tokens': overlap_tokens,
            'stride': stride,
            'overlap_percentage': overlap_ratio * 100
        }
    
    @staticmethod
    def calculate_storage_overhead(
        document_size_tokens: int,
        chunk_size: int,
        overlap_ratio: float = 0.0
    ) -> Dict:
        """
        Calculate storage overhead from chunking
        
        Args:
            document_size_tokens: Document size in tokens
            chunk_size: Chunk size
            overlap_ratio: Overlap ratio
            
        Returns:
            Storage metrics
        """
        # Without overlap
        chunks_no_overlap = (document_size_tokens + chunk_size - 1) // chunk_size
        storage_no_overlap = chunks_no_overlap * chunk_size
        
        # With overlap
        stride = chunk_size - int(chunk_size * overlap_ratio)
        chunks_with_overlap = (
            (document_size_tokens - chunk_size) // stride + 1
        ) if stride > 0 else 1
        storage_with_overlap = chunks_with_overlap * chunk_size
        
        overhead_ratio = (
            (storage_with_overlap - storage_no_overlap) / storage_no_overlap
            if storage_no_overlap > 0 else 0
        )
        
        return {
            'document_tokens': document_size_tokens,
            'chunk_size': chunk_size,
            'chunks_no_overlap': chunks_no_overlap,
            'storage_no_overlap': storage_no_overlap,
            'chunks_with_overlap': chunks_with_overlap,
            'storage_with_overlap': storage_with_overlap,
            'overhead_ratio': overhead_ratio,
            'overhead_percentage': overhead_ratio * 100
        }
    
    @staticmethod
    def get_model_context_window(model_name: str) -> Optional[int]:
        """Get context window for a model"""
        return ChunkParameters.CONTEXT_WINDOWS.get(model_name)
    
    @staticmethod
    def recommend_chunk_size(
        document_type: str,
        quality_priority: str = "balanced"
    ) -> Dict:
        """
        Recommend chunk size based on document type and quality priority
        
        Args:
            document_type: Type of document (code, article, legal, etc)
            quality_priority: "speed", "balanced", or "quality"
            
        Returns:
            Recommendation with reasoning
        """
        recommendations = {
            'code': {
                'speed': 256,
                'balanced': 512,
                'quality': 1024
            },
            'article': {
                'speed': 256,
                'balanced': 512,
                'quality': 1024
            },
            'technical': {
                'speed': 512,
                'balanced': 1024,
                'quality': 1024
            },
            'legal': {
                'speed': 512,
                'balanced': 1024,
                'quality': 1024
            },
            'general': {
                'speed': 256,
                'balanced': 512,
                'quality': 1024
            }
        }
        
        doc_type = document_type.lower() if document_type else 'general'
        size = recommendations.get(doc_type, recommendations['general'])[
            quality_priority
        ]
        
        return {
            'recommended_chunk_size': size,
            'document_type': doc_type,
            'quality_priority': quality_priority,
            'reasoning': f"{size} tokens optimal for {doc_type} with {quality_priority} quality"
        }


# Example usage
if __name__ == "__main__":
    # Calculate retrieval budget
    budget = ChunkParameters.calculate_retrieval_budget(128000)
    print(f"Retrieval budget (GPT-4 Turbo): {budget} tokens")
    
    # Calculate optimal chunk size
    optimal = ChunkParameters.optimal_chunk_size(128000, num_chunks=20)
    print(f"Optimal chunk size for 20 chunks: {optimal} tokens")
    
    # Calculate overlap
    overlap = ChunkParameters.calculate_overlap_tokens(512, 0.2)
    print(f"\nOverlap (20%): {overlap['overlap_tokens']} tokens, stride {overlap['stride']}")
    
    # Storage overhead
    storage = ChunkParameters.calculate_storage_overhead(50000, 512, 0.2)
    print(f"\nStorage overhead: {storage['overhead_percentage']:.1f}%")
    
    # Recommendation
    rec = ChunkParameters.recommend_chunk_size("research paper", "quality")
    print(f"\nRecommendation: {rec['recommended_chunk_size']} tokens")
