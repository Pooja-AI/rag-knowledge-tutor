## Introduction
Token-based chunking splits documents by precise token count using a language model's tokenizer. It provides LLM-aware chunking that guarantees chunks fit within specific token budgets and aligns with how models process text.

## How It Works

### Process Flow
1. **Select Tokenizer**: Choose tokenizer matching target LLM
2. **Tokenize Document**: Convert entire text to token sequence
3. **Split by Count**: Divide tokens into fixed chunks (e.g., 512 tokens)
4. **Decode Chunks**: Convert token sequences back to text
5. **Clean Boundaries**: Fix incomplete words at chunk edges
6. **Add Overlap**: Optionally add token-level overlap
7. **Output**: Token-aligned chunks with exact counts

### Token Distribution Example
```
Text: "Machine learning is transforming industries"
GPT Tokens: ["Machine", " learning", " is", " transform", "ing", " industries"]
            [1, 1, 1, 1, 1, 1] = 6 tokens total

Claude Tokens: ["Machine", " learning", " is", " transforming", " industries"]
               [1, 1, 1, 2, 1] = 6 tokens total

Different tokenizers produce different token counts!
```

## Characteristics

### Simplicity: Medium
- Requires tokenizer library
- Straightforward splitting logic
- More complex than character-based

### Computational Cost: Medium
- Tokenization overhead
- O(n) complexity
- Reasonable performance

### Context Preservation: Good
- Better than fixed-size chars
- Predictable boundaries
- Respects word boundaries

### Flexibility: Medium
- Works with any model's tokenizer
- Can customize for specific LLMs
- Limited by tokenizer options

### Variable Chunk Sizes: No
- Fixed token counts
- Variable character/word lengths

## Advantages

1. **LLM-Aware**: Matches how models process text
2. **Precise Control**: Guarantees token limits
3. **API Compatible**: Perfect for LLM APIs with token limits
4. **Predictable**: Exactly 512 tokens, never more
5. **Model-Specific**: Can optimize for particular models
6. **Boundary Respect**: Maintains word boundaries

## Disadvantages

1. **Tokenizer Dependency**: Requires tokenizer for each model
2. **Complexity**: More complex than character-based
3. **Mid-word Splits**: Can still split at char boundaries (rare)
4. **Different Models**: Same text = different token counts
5. **Computational Cost**: Tokenization adds overhead
6. **Not Semantic**: Ignores semantic boundaries

## Use Cases

### Ideal For
- **Production RAG**: When API limits are strict
- **Cost Optimization**: Precise token budgeting
- **Multi-Model**: Supporting multiple LLMs
- **Token-Budget Systems**: Applications with token constraints
- **API Integration**: Direct LLM API usage

### Not Ideal For
- **Semantic Quality**: No semantic awareness
- **Offline Processing**: Heavy tokenization overhead
- **Simple Systems**: Overkill for basic needs

## Parameters

### Chunk Size
- **Typical Range**: 256-1024 tokens
- **Small (128-256)**: High precision retrieval
- **Medium (256-512)**: Balanced approach (recommended)
- **Large (512-1024)**: More context per chunk

### Overlap
- **Typical Range**: 20-100 tokens
- **Percentage**: 5-20% overlap ratio
- **Purpose**: Bridge chunk boundaries

### Tokenizer Selection
- **OpenAI**: tiktoken (GPT models)
- **Anthropic**: claude tokenizer
- **Hugging Face**: transformers library
- **Google**: sentence-piece

## Common Tokenizers

### tiktoken (OpenAI)
```python
import tiktoken
enc = tiktoken.encoding_for_model("gpt-3.5-turbo")
tokens = enc.encode("Hello world")
```

### transformers (Hugging Face)
```python
from transformers import AutoTokenizer
tokenizer = AutoTokenizer.from_pretrained("bert-base-uncased")
tokens = tokenizer.encode("Hello world")
```

### Anthropic Claude
```python
# Uses similar encoding to GPT
# Approximately 4 chars per token average
```

## Token Counting Comparison

Same text, different models:
```
Text: "Machine learning enables artificial intelligence applications"

OpenAI GPT-3.5:   ["Machine", " learning", " enables", " artificial", " intelligence", " applications"] = 6 tokens
OpenAI GPT-4:     ["Machine", " learning", " enables", " artificial", " intelligence", " applications"] = 6 tokens
Claude 3:         ["Machine", " learning", " enables", " artificial", " intelligence", " applications"] = 6 tokens

But for technical content:
"ValueError: index out of range"
GPT-3.5:          ["ValueError", ":", " index", " out", " of", " range"] = 6 tokens
Claude 3:         ["ValueError", ":", " index", " out", " of", " range"] = 6 tokens
```

## Implementation Details

### Character to Token Ratio
- **English**: ~4 characters per token (average)
- **Code**: ~3-4 characters per token
- **Technical**: ~3-5 characters per token
- **Asian Languages**: ~1-2 characters per token

### Boundary Cleaning
When splitting at token boundaries, may get:
```
Original: "Machine learning is transformative"
Split at token 2: "Machine learning[INCOMPLETE: is tran]"
Cleaned: "Machine learning"  # Remove incomplete token
```

### Overlap Implementation
```
Chunk 1: tokens[0:512]
Chunk 2: tokens[410:922]  # 102 tokens overlap (20%)
Chunk 3: tokens[820:1332]
...
```

## Performance Metrics

### Accuracy
- **Token Precision**: 100% (exact token counts)
- **Boundary Accuracy**: 95%+ (respects word boundaries)
- **API Compliance**: 100% (guaranteed fit)

### Efficiency
- **Speed**: 10-50ms for 50K token document
- **Memory**: Minimal (token stream only)
- **Storage**: Predictable

## Comparison with Other Strategies

| Aspect | Token-based | Fixed-char | Semantic |
|--------|------------|-----------|----------|
| LLM-Aware | Excellent | Poor | Medium |
| Speed | Medium | Very Fast | Slow |
| Precision | Good | Poor | Excellent |
| Control | High | Medium | Low |
| Complexity | Medium | Low | High |

## Cost Analysis

### Tokenization Overhead
- **Small docs**: <1ms
- **Medium docs**: 10-50ms
- **Large docs**: 100-500ms
- **Total**: Usually <2% of processing time

### Storage
- **Token Stream Cache**: ~2 bytes per token
- **10M token corpus**: ~20MB cache
- **Manageable**: Reasonable storage footprint

## Best Practices

1. **Choose Model-Specific Tokenizer**: Match your LLM
2. **Test Token Counts**: Verify on sample documents
3. **Add Overlap**: Include 20% overlap for context
4. **Cache Tokens**: Avoid retokenizing same content
5. **Monitor Boundaries**: Ensure quality of split points
6. **Document Settings**: Record tokenizer version and settings
7. **Version Control**: Update if tokenizer changes

## When to Use Token-Based Chunking

✓ For LLM API integration
✓ When token budgets are strict
✓ For multi-model systems
✓ Production systems with cost tracking
✓ When integration with APIs matters

✗ For semantic quality focus
✗ Offline processing without tokenizer
✗ Simple prototypes
✗ When character boundaries matter

## Advanced Considerations

### Model-Specific Optimization
- Different models tokenize differently
- Create chunks for specific LLMs
- No "universal" tokens

### Tokenizer Versioning
- Tokenizers change across versions
- GPT-3 vs GPT-4 tokenizers differ slightly
- Document exact tokenizer version used

### Hybrid Approach
Combine token-based with other strategies:
- Token-based splitting
- Then verify semantic coherence
- Best of both worlds

## Conclusion

Token-based chunking is essential for production RAG systems that interface with LLM APIs. By using the exact tokenizer of your target model, you ensure chunks fit perfectly within context windows and API limits. While not semantically optimized, token-based chunking provides precise control and is the recommended approach for most production systems.
