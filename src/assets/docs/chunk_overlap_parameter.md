## Introduction
Chunk overlap is the amount of redundant content between adjacent chunks. It's typically expressed as a percentage of chunk size (e.g., 20% overlap means 102 tokens overlap in a 512-token chunk). Overlap preserves context across chunk boundaries and prevents information loss at split points.

## How Overlap Works

### Example
```
Document: [0 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15...]

Chunk Size: 8 tokens, No Overlap (Stride = 8):
Chunk 1: [0 1 2 3 4 5 6 7]
Chunk 2: [8 9 10 11 12 13 14 15]  ← Gap! Token 7-8 boundary loses context

Chunk Size: 8 tokens, 50% Overlap (Stride = 4):
Chunk 1: [0 1 2 3 4 5 6 7]
Chunk 2:       [4 5 6 7 8 9 10 11]  ← Includes tokens 4-7 again
Chunk 3:             [8 9 10 11 12 13 14 15]

Benefit: Queries spanning boundaries (e.g., about tokens 7-8) 
         now found in BOTH chunk 1 and chunk 2
```

## Why Overlap Matters

### Problem: Information Lost at Boundaries
```
Text: "Machine learning enables data analysis.
       Traditional methods were slower."

Chunk 1 (no overlap): "Machine learning enables data analysis."
Chunk 2 (no overlap): "Traditional methods were slower."

Issue: Comparison between ML and traditional methods
       is split across boundary
       Relevant chunk may not be retrieved
```

### Solution: Overlap Preserves Context
```
Chunk 1 (with overlap): "Machine learning enables data analysis."
Chunk 2 (with overlap): "enables data analysis. Traditional methods were slower."

Now: Full context spans both chunks
     "enables data analysis" appears in both
     Comparison is captured in chunk 2
```

## Overlap Percentages and Trade-offs

### 0% Overlap (No Overlap)
- **Cost**: Minimal storage and processing
- **Context**: No boundary redundancy
- **Use Case**: Cost-critical, independent chunks
- **Issue**: Boundary context loss (worst case)

### 10% Overlap
- **Size Example**: 512 tokens × 10% = 51 token overlap
- **Cost**: Minimal overhead (+10%)
- **Context**: Light boundary context
- **Use Case**: Budget-conscious, lower context needs
- **Trade-off**: Risk of boundary information loss

### 20% Overlap (RECOMMENDED)
- **Size Example**: 512 tokens × 20% = 102 token overlap
- **Cost**: Reasonable (+20%)
- **Context**: Good boundary context preservation
- **Use Case**: Most production systems use this
- **Trade-off**: Balanced cost vs. quality

### 33% Overlap
- **Size Example**: 512 tokens × 33% = 171 token overlap
- **Cost**: Moderate (+33%)
- **Context**: Strong boundary context
- **Use Case**: Important information near boundaries
- **Trade-off**: Higher cost for better quality

### 50% Overlap
- **Size Example**: 512 tokens × 50% = 256 token overlap
- **Cost**: High (+50%), effectively double coverage
- **Context**: Maximum boundary context
- **Use Case**: Critical applications, complex documents
- **Trade-off**: High cost for maximum coverage

## Calculation

### Formula
```
Overlap Tokens = Chunk Size × (Overlap Ratio / 100)

Stride (Step Size) = Chunk Size - Overlap Tokens

Example:
Chunk Size: 512
Overlap Ratio: 20%
Overlap Tokens: 512 × 0.20 = 102.4 ≈ 102
Stride: 512 - 102 = 410
```

### Stride Relationship
```
Stride = Chunk Size - Overlap
Or: Overlap = Chunk Size - Stride

If Stride < Chunk Size: Creates overlap
If Stride = Chunk Size: No overlap
If Stride > Chunk Size: Creates gaps (bad)
```

## When Overlap Helps

### Boundary-Critical Information
```
Text: "Python is a language. Important for data science."
             └─ Split point likely here

Chunk 1 (no overlap): "Python is a language."
Chunk 2 (no overlap): "Important for data science."

Problem: Connection lost

Chunk 1 (20% overlap): "Python is a language."
Chunk 2 (20% overlap): "is a language. Important for data science."

Solution: "Important for" now connects Python to data science
```

### Named Entities Across Boundaries
```
Text: "Machine learning algorithms enable...
       ML has applications in..."

Chunk 1: "Machine learning algorithms enable..."
Chunk 2 (no overlap): "ML has applications in..." (loses "Machine learning" context)
Chunk 2 (with overlap): "algorithms enable... ML has applications in..." (preserves context)
```

### Multi-Sentence Concepts
```
Text: "Deep learning requires large datasets.
       Training takes weeks.
       The results are worth it."

Chunk 1 (no overlap): "Deep learning requires large datasets. Training takes weeks."
Chunk 2 (no overlap): "The results are worth it." (detached from context)

Chunk 1 (20% overlap): First two sentences
Chunk 2 (20% overlap): Last two sentences plus first one

Result: "Training takes weeks" in both chunks, maintains continuity
```

## Overlap by Content Type

### News Articles (Topic Often Isolated)
- Recommended: 10-15% overlap
- Rationale: Most topics self-contained
- Reasoning: Paragraphs typically independent

### Technical Documentation (Concepts Build)
- Recommended: 20-30% overlap
- Rationale: Each concept builds on previous
- Reasoning: May reference earlier sections

### Research Papers (Dense, Cross-referencing)
- Recommended: 30-40% overlap
- Rationale: High concept density, frequent references
- Reasoning: Complex material needs context

### Code (Modular, Self-contained)
- Recommended: 0-10% overlap
- Rationale: Functions are independent
- Reasoning: Less benefit from overlap

### Legal Documents (Precise Dependencies)
- Recommended: 30-50% overlap
- Rationale: Clauses reference other clauses
- Reasoning: Maximum accuracy needed

## Storage Impact

### Example: 100,000-token document with 512-token chunks

```
Without Overlap:
Chunks: 100,000 / 512 = ~195 chunks
Storage: 195 × 512 = 99,840 tokens
Embeddings: 195

10% Overlap:
Chunks: 100,000 / (512 × 0.9) = ~217 chunks
Storage: 217 × 512 = 111,104 tokens (+11%)
Embeddings: 217 (+11%)

20% Overlap:
Chunks: 100,000 / (512 × 0.8) = ~244 chunks
Storage: 244 × 512 = 124,928 tokens (+25%)
Embeddings: 244 (+25%)

50% Overlap:
Chunks: 100,000 / (512 × 0.5) = ~390 chunks
Storage: 390 × 512 = 199,680 tokens (+100%)
Embeddings: 390 (+100%)
```

## Cost Analysis

### Monthly Cost Increase (10M Documents, 5K tokens each)

```
Model: text-embedding-3-small ($0.02 per 1M)

No Overlap:
Chunks: ~97.7M
Cost: ~$1,954

10% Overlap:
Chunks: ~108M
Cost: ~$2,160 (Delta: +$206, +10.5%)

20% Overlap:
Chunks: ~122M
Cost: ~$2,440 (Delta: +$486, +24.9%)

50% Overlap:
Chunks: ~195M
Cost: ~$3,900 (Delta: +$1,946, +99.5%)
```

## Selection Strategy

### Step 1: Assess Boundary Risk
- High risk of information loss: Use higher overlap (30-50%)
- Medium risk: Use standard (20%)
- Low risk: Use lower overlap (10%)

### Step 2: Check Budget
- Cost-critical: Use 10% or 0%
- Balanced: Use 20% (recommended)
- Quality-critical: Use 30-50%

### Step 3: Content Type
Use recommended ranges by content type (see previous section)

### Step 4: Test and Measure
```python
for overlap_ratio in [0, 10, 20, 30, 50]:
    chunks = create_chunks(doc, overlap=overlap_ratio)
    quality = evaluate_retrieval(chunks, test_queries)
    cost = calculate_cost(chunks)
    print(f"Overlap: {overlap_ratio}% - Quality: {quality}, Cost: {cost}")
```

### Step 5: Choose Optimal
Select overlap that best balances quality and cost for your needs.

## Implementation

### Creating Overlap
```python
# Stride-based approach
chunk_size = 512
overlap_ratio = 0.20
overlap_tokens = int(chunk_size * overlap_ratio)
stride = chunk_size - overlap_tokens  # 410

chunks = []
pos = 0
while pos < len(tokens):
    end = min(pos + chunk_size, len(tokens))
    chunks.append(tokens[pos:end])
    pos += stride
```

### Deduplication During Retrieval
```python
# When retrieving overlapping chunks, deduplicate
retrieved_chunks = retrieve(query, top_k=5)
deduplicated = []

for chunk in retrieved_chunks:
    # Check if we already have similar content
    if not already_have_chunk(chunk.content):
        deduplicated.append(chunk)

return deduplicated
```

## Best Practices

1. **Start with 20%**: Recommended baseline for most systems
2. **Test on Your Data**: Validate on actual use cases
3. **Monitor Quality**: Track retrieval metrics
4. **Consider Content**: Adjust based on document type
5. **Track Costs**: Monitor embedding and storage costs
6. **Document Choice**: Record overlap settings used
7. **Adjust Gradually**: Change 5-10% at a time

## When to Increase Overlap

- Retrieval quality < 75%
- Many boundary-spanning queries
- Critical accuracy needed
- Complex, interconnected content
- Dense technical material

## When to Decrease Overlap

- Cost is primary concern
- Chunk quality high without overlap
- Independent content sections
- Storage is limited
- Real-time latency critical

## Monitoring Metrics

```python
metrics = {
    'boundary_spanning_queries': 0.15,  # % of queries span boundaries
    'retrieval_with_overlap': 0.88,
    'retrieval_without_overlap': 0.81,
    'quality_improvement': 0.07,        # 7% improvement from overlap
    'storage_overhead': 0.20,           # 20% extra storage
    'cost_per_improvement': 7.0         # Cost per % quality improvement
}
```

## Conclusion

Chunk overlap is a cost-effective way to improve retrieval quality by preserving context across chunk boundaries. The recommended 20% overlap provides a good balance for most systems. Adjust based on your content type, quality requirements, and budget constraints. Higher overlap (30-50%) is beneficial for complex, interconnected content where boundary information is critical.
