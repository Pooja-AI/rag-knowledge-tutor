## Introduction
Recursive chunking is a hierarchical approach that splits documents by natural delimiters in order of precedence. It respects document structure by attempting to split at larger boundaries first (paragraphs), then progressively smaller boundaries (sentences, words) only when necessary to meet size constraints.

## How It Works

### Process Flow
1. **Input**: Document and separator hierarchy
2. **Define Separators**: List delimiters in order of precedence
3. **First Split**: Split by largest delimiter (e.g., double newlines)
4. **Size Check**: If chunks too small, merge adjacent chunks
5. **Recursive Refinement**: For oversized chunks, split by next delimiter
6. **Iterative Process**: Repeat until all chunks meet size requirements
7. **Output**: Variable-sized chunks respecting boundaries

### Separator Hierarchy Example
For general text:
```
["\n\n", "\n", " ", ""]  # Paragraphs → Lines → Spaces → Characters
```

For code (Python):
```
["\n\nclass ", "\n\ndef ", "\n\n", "\n", " "]  # Classes → Functions → Paragraphs → Lines → Words
```

For markdown:
```
["# ", "## ", "### ", "\n\n", "\n", " "]  # Headers → Paragraphs → Lines → Words
```

## Algorithm

### Pseudocode
```python
def recursive_split(text, separators, chunk_size, overlap):
    if len(text.encode()) <= chunk_size:
        return [text]
    
    # Try each separator in order
    for separator in separators:
        if separator in text:
            chunks = text.split(separator)
            good_chunks = []
            
            for chunk in chunks:
                if len(chunk.encode()) <= chunk_size:
                    good_chunks.append(chunk)
                else:
                    # Recursively split this oversized chunk
                    sub_chunks = recursive_split(
                        chunk, 
                        separators[separators.index(separator)+1:],
                        chunk_size, 
                        overlap
                    )
                    good_chunks.extend(sub_chunks)
            
            return merge_and_add_overlap(good_chunks, chunk_size, overlap)
    
    # No separator found, force split at chunk_size
    return force_split(text, chunk_size)
```

## Characteristics

### Simplicity: High
- Straightforward logic and implementation
- Relatively easy to customize via separators
- Most RAG systems use this approach

### Computational Cost: Low
- O(n log n) time complexity
- Minimal overhead beyond string operations
- Fast for most documents

### Context Preservation: High
- Respects natural boundaries
- Maintains semantic units
- Rarely splits important phrases

### Flexibility: High
- Customizable separators per document type
- Adapts to different formats
- Easy to extend

### Variable Chunk Sizes: Yes
- Chunks vary based on natural breaks
- Unpredictable sizes but semantically coherent

## Advantages

1. **Boundary Respect**: Honors natural document structure
2. **Semantic Coherence**: Keeps related content together
3. **Flexibility**: Customizable separators for different content types
4. **Simplicity**: Easy to implement and understand
5. **Quality**: Much better retrieval quality than fixed-size
6. **Adaptive**: Works well with diverse document types

## Disadvantages

1. **Variable Sizes**: Chunks can vary significantly
2. **Size Unpredictability**: Difficult to predict exact chunk counts
3. **Separator Dependency**: Quality depends on separator choice
4. **Tuning Required**: May need domain-specific adjustment
5. **Edge Cases**: Some documents may not have expected delimiters

## Use Cases

### Ideal For
- **Books & Articles**: Clear paragraph/sentence structure
- **Technical Documentation**: Hierarchical structure with headers
- **Research Papers**: Well-organized sections
- **News Content**: Lead paragraphs followed by details
- **General Web Content**: Readable, structured text

### Not Ideal For
- **Code Files**: Better with language-specific separators
- **Unstructured Data**: Logs without clear boundaries
- **Mixed Content**: Documents with varying formats

## Parameters

### Chunk Size
- **Target Size**: Desired chunk size in tokens (e.g., 512)
- **Min Size**: Minimum acceptable chunk size (prevents over-fragmentation)
- **Max Size**: Maximum acceptable chunk size (prevents undershoot)

### Separators
- **Order Matters**: Try largest delimiters first
- **Content Type**: Customize for your document type
- **Language-Specific**: Adjust for language and format

### Overlap
- **Typical Range**: 0-20% of chunk size
- **Recommended**: 10-20% for context preservation
- **Calculation**: overlap_tokens = chunk_size × overlap_ratio

## Separator Strategy by Content Type

### Markdown Documents
```python
separators = [
    "\n# ",      # H1 headers
    "\n## ",     # H2 headers
    "\n### ",    # H3 headers
    "\n\n",      # Paragraphs
    "\n",        # Lines
    " ",         # Words
    ""           # Characters
]
```

### Python Code
```python
separators = [
    "\n\nclass ",
    "\n\ndef ",
    "\n\n",
    "\ndef ",
    "\nclass ",
    "\n",
    " ",
    ""
]
```

### JavaScript/TypeScript
```python
separators = [
    "\n\nfunction ",
    "\n\nconst ",
    "\n\nlet ",
    "\n\n",
    "\nfunction ",
    "\nconst ",
    "\nlet ",
    "\n",
    " ",
    ""
]
```

### General Text
```python
separators = [
    "\n\n",  # Paragraphs
    "\n",    # Lines
    " ",     # Words
    ""       # Characters
]
```

## Implementation Details

### Merging Small Chunks
When splits create chunks below minimum size:
```
Chunk 1: 50 tokens (too small)
Chunk 2: 80 tokens (too small)
Result:  Chunk 1+2 = 130 tokens (merged)
```

### Handling Oversized Chunks
When a single "unit" exceeds max size:
1. Try next smaller separator
2. Recursively split the large chunk
3. Proceed to next unit in sequence

### Overlap Addition
For chunks with overlap:
```
Original Chunks:
Chunk 1: tokens 0-512
Chunk 2: tokens 512-1024

With 20% overlap (102 tokens):
Chunk 1: tokens 0-512
Chunk 2: tokens 410-922 (includes 102-token overlap)
Chunk 3: tokens 922-...
```

## Performance Metrics

### Retrieval Quality
- **Precision**: 75-85% (significantly better than fixed-size)
- **Recall**: 95%+ (high coverage)
- **Relevance**: Good semantic alignment

### Efficiency
- **Speed**: <50ms for most documents
- **Storage**: 10-30% more than fixed-size (due to overlap)
- **Predictability**: Semi-predictable chunk counts

## Best Practices

1. **Separator Selection**: Choose separators matching your content structure
2. **Test on Data**: Validate separator choices on actual documents
3. **Add Overlap**: Include 10-20% overlap for context preservation
4. **Document Sizes**: Know expected chunk count and sizes
5. **Monitor Quality**: Track retrieval performance over time
6. **Handle Edge Cases**: Test with unusual or poorly formatted documents
7. **Version Control**: Document separator choices for reproducibility

## Comparison with Alternatives

| Aspect | Recursive | Fixed-size | Semantic |
|--------|-----------|-----------|----------|
| Implementation | Simple | Very Simple | Complex |
| Context Quality | Good | Poor | Excellent |
| Speed | Fast | Very Fast | Slow |
| Cost | Low | Low | High |
| Boundary Quality | Good | Poor | Excellent |
| Customization | High | Low | Medium |

## Common Pitfalls

### 1. Wrong Separator Order
**Problem**: Putting small separators before large ones
**Solution**: Always order from largest to smallest delimiters

### 2. Missing Delimiters
**Problem**: Document type not represented in separators
**Solution**: Add language/format-specific delimiters

### 3. No Overlap
**Problem**: Context lost at chunk boundaries
**Solution**: Add 10-20% overlap

### 4. Poor Merging Strategy
**Problem**: Oversized chunks after merging
**Solution**: Implement size validation before merging

### 5. Insufficient Testing
**Problem**: Good on training data, poor on real data
**Solution**: Test on diverse, representative samples

## When to Use Recursive Chunking

✓ For most RAG applications (recommended default)
✓ For diverse document types
✓ When retrieval quality matters
✓ For structured documents
✓ For general-purpose systems

## Conclusion

Recursive chunking strikes an excellent balance between simplicity and quality. It's the most commonly used strategy in production RAG systems because it respects document structure while remaining easy to implement. By carefully selecting separators for your content type and adding appropriate overlap, you can achieve 75-85% retrieval quality with minimal complexity.
