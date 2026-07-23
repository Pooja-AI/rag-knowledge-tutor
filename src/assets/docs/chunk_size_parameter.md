## Introduction
Chunk size is the fundamental parameter that controls how much text each chunk contains, measured in tokens or characters. It directly impacts retrieval quality, cost, processing speed, and storage requirements.

## Why Chunk Size Matters

Chunk size is the most critical chunking parameter because it affects:

1. **Retrieval Quality**: Smaller chunks = higher precision, larger chunks = more context
2. **Cost**: Directly affects API costs, storage, and processing
3. **Performance**: Larger chunks = fewer to process, smaller chunks = more granular
4. **Context**: Balance between relevance and contextual completeness
5. **Storage**: Directly proportional to storage requirements
6. **Latency**: Affects search speed and response time

## Typical Size Ranges

### Micro Chunks (64-128 tokens)
- **Use Case**: Snippet extraction, QA pairs
- **Pros**: Very precise retrieval, good for specific queries
- **Cons**: High fragmentation, loses context, more chunks to store
- **Example**: "What is machine learning?"

### Small Chunks (128-256 tokens)
- **Use Case**: Short documents, high precision needed
- **Pros**: Good precision, reasonable context
- **Cons**: May still be fragmented for complex topics
- **Example**: Product descriptions, FAQs

### Medium Chunks (256-512 tokens)
- **Use Case**: STANDARD APPROACH - most RAG systems use this
- **Pros**: Balanced precision and context, good retrieval quality
- **Cons**: May miss some cross-chunk concepts
- **Example**: Articles, blog posts, documentation

### Large Chunks (512-1024 tokens)
- **Use Case**: Dense technical content, complex concepts
- **Pros**: Good context preservation, fewer chunks
- **Cons**: May include irrelevant information
- **Example**: Research papers, technical guides

### Very Large Chunks (1024-2048 tokens)
- **Use Case**: High-level summaries, document sections
- **Pros**: Comprehensive context, minimal fragmentation
- **Cons**: Poor retrieval precision, may not fit all contexts
- **Example**: Book chapters, comprehensive reports

### Full Document (2048+ tokens)
- **Use Case**: With large context windows, or when minimal context loss needed
- **Pros**: Perfect context, no fragmentation
- **Cons**: Poor retrieval, expensive to process
- **Example**: With 200K token context windows

## Factors Affecting Optimal Chunk Size

### 1. Embedding Model Training
Most embedding models trained on specific lengths:
- **Sentence Transformers**: ~300 tokens optimal
- **OpenAI text-embedding**: ~512 tokens
- **All-MiniLM**: ~256 tokens optimal range
- **Impact**: Using wrong size reduces embedding quality

### 2. Query Specificity
- **Specific Queries**: Need smaller chunks (256-512)
- **Broad Queries**: Can use larger chunks (512-1024)
- **Mixed Queries**: Use medium chunks (512)

### 3. Document Type
```
Code Files:           256-512 (by function)
Research Papers:      512-1024 (by section)
News Articles:        256-512 (by paragraph)
Legal Documents:      512-1024 (by clause)
Books:               512-1024 (by section)
Technical Docs:       256-512 (by concept)
```

### 4. Context Window Size
- **Small Window (4K)**: Must use 256-512 max
- **Medium Window (16K)**: Can use 512-1024
- **Large Window (128K+)**: Can use 1024-2048
- **Massive Window (200K+)**: Can use near full-document

### 5. Retrieval Budget
Tokens available for chunks in context:
```
Total Context: 128,000 tokens
- System Prompt: 500 tokens
- User Query: 300 tokens
- Response Buffer: 2000 tokens
- Overhead: 1000 tokens
= Available for Chunks: 124,200 tokens

With 4 retrieved chunks:
Max Chunk Size: 124,200 / 4 = 31,050 tokens (unrealistic)

With 20 retrieved chunks:
Max Chunk Size: 124,200 / 20 = 6,210 tokens (use 1024-2048 actual)
```

### 6. Cost Sensitivity
- **Cost First**: Use smaller chunks (256)
- **Balanced**: Medium chunks (512)
- **Quality First**: Larger chunks (1024+)

### 7. Latency Requirements
- **Real-time (<100ms)**: Smaller chunks = faster search
- **Normal (<1s)**: Medium chunks
- **Batch (<30s)**: Larger chunks acceptable

## Size Selection Framework

### Step 1: Check Embedding Model
```python
model = "text-embedding-3-small"
# Optimal range: 256-512 tokens
# Training context: 512 tokens
```

### Step 2: Calculate Context Budget
```python
total_context = 128000  # GPT-4 Turbo
system_prompt = 500
query = 500
response = 2000
overhead = 1000
retrieval_budget = total_context - system_prompt - query - response - overhead
# = 123,000 tokens

num_chunks = 10  # Want to retrieve 10 chunks
max_chunk = retrieval_budget / num_chunks
# = 12,300 tokens (too large, use smaller)
```

### Step 3: Consider Document Type
```python
doc_type = "research_paper"
# Research papers typically 512-1024 optimal
# Balances sections with context
```

### Step 4: Start with Baseline
```python
# Recommended baseline: 512 tokens
chunk_size = 512
```

### Step 5: Test and Measure
```python
# Test on representative queries
# Measure:
# - Retrieval precision
# - Context quality
# - Cost per query
# - Processing time
```

### Step 6: Tune Based on Results
```python
if retrieval_too_fragmented:
    chunk_size *= 1.5  # Increase
elif too_much_irrelevant_content:
    chunk_size *= 0.67  # Decrease
else:
    chunk_size_is_good = True
```

## Size and Retrieval Quality Relationship

```
Retrieval Quality
        ↑
    95% │          ╱─────
        │       ╱────
    85% │    ╱─────
        │ ╱────     
    75% │─────
        │
        └─────────────────→ Chunk Size
          256  512  1024  2048

Optimal Range: 256-512 tokens for most applications
Beyond 1024: Diminishing returns, more irrelevant content
```

## Cost Impact

### Example: 10M Documents, avg 5K tokens

```
Chunk Size  Chunks    Storage  Embedding Cost  Retrieval Speed
256         195M      99B      $1,950           Very Fast
512         97M       50B      $975             Fast
1024        48M       25B      $487             Medium
2048        24M       12B      $243             Slow
```

## Best Practices

1. **Start with 512**: Recommended default for most cases
2. **Match Embedding Model**: Use model's training size
3. **Test on Real Data**: Benchmark on your documents
4. **Monitor Metrics**: Track quality, cost, speed
5. **Document Choice**: Record reasoning for selection
6. **Consider Overlap**: Larger chunks + less overlap = cost efficient
7. **Adjust Gradually**: Change 20-30% at a time

## Common Mistakes

### 1. Using Too Large Chunks
**Problem**: 2048-token chunks for short FAQ
**Result**: One chunk per question, poor retrieval
**Solution**: Use 256-512 for short content

### 2. Using Too Small Chunks
**Problem**: 64-token chunks for complex papers
**Result**: Fragmented concepts, low retrieval quality
**Solution**: Use 512-1024 for complex content

### 3. Ignoring Embedding Model
**Problem**: Using 2048-token chunks with model trained on 256
**Result**: Worse embedding quality, poorer retrieval
**Solution**: Match model's training length

### 4. Not Testing
**Problem**: Choosing size theoretically without testing
**Result**: Suboptimal performance on real data
**Solution**: Always benchmark on representative data

## Size by Use Case

### Customer Support FAQ
- Size: 256-512 tokens
- Rationale: Short, independent questions
- Trade-off: Precision over context

### Technical Documentation
- Size: 512-1024 tokens
- Rationale: Concepts span sections
- Trade-off: Balanced approach

### Research Papers
- Size: 512-1024 tokens
- Rationale: Dense content, complex concepts
- Trade-off: Comprehensive but still focused

### Books/Long Form
- Size: 1024-2048 tokens (or parent-child)
- Rationale: Preserve chapter/section structure
- Trade-off: Context over precision

### Code/Programming
- Size: 256-512 tokens
- Rationale: Functions/methods as units
- Trade-off: Functional boundaries

## Monitoring and Adjustment

### Metrics to Track
```python
metrics = {
    'retrieval_precision': 0.85,  # % correct chunks
    'retrieval_recall': 0.92,      # % all relevant found
    'avg_tokens_per_chunk': 512,
    'embeddings_cost': 975,        # per 10M docs
    'search_latency_ms': 45,
    'storage_gb': 50
}
```

### Adjustment Triggers
- Precision < 75%: Reduce chunk size
- Recall < 85%: Increase chunk size
- Cost too high: Reduce chunk size
- Latency high: Reduce chunk size
- Fragmentation: Increase chunk size

## Conclusion

Chunk size is the most impactful parameter in document chunking. The recommended approach is to start with 512 tokens, validate on your actual data and use case, then adjust based on retrieval metrics. Most production systems find 256-512 tokens to be optimal. Always balance between retrieval quality, cost, and performance when selecting chunk size.
