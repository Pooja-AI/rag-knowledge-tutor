import { useState, useRef, useEffect } from "react";
import Ragfoundation from "../assets/docs/rag-foundations.md?raw";
import MultiQueryRetrieval from "../assets/docs/multi-query-retrieval.md?raw";
import MultiQuery from "../assets/code/multiquery.py?raw";
import MetadataFiltering from "../assets/code/metadatafilter.py?raw";
import MetadataFilteringDoc from "../assets/docs/metadata-filtering.md?raw";
import SparseRetrieval from "../assets/docs/Sparse_Retrieval.md?raw";
import SparseRetrievalCode from "../assets/code/sparseretrieval.py?raw";
import DenseRetrieval from "../assets/docs/dense_retrieval.md?raw";
import DenseRetrievalCode from "../assets/code/denseretrieval.py?raw";
import HybridSearchCode from "../assets/code/HybridSearch.py?raw";
import HybridSearchDoc from "../assets/docs/hybrid_search.md?raw";
import SemanticSearchDoc from "../assets/docs/semantic_search.md?raw";
import SemanticSearchCode from "../assets/code/semanticsearch.py?raw";
import ParentChildRetrievalDoc from "../assets/docs/ParentChildRetrieval.md?raw";
import ParentChildRetrievalCode from "../assets/code/ParentChildRetrieval.py?raw";
import WhyChunkingDoc from "../assets/docs/why_chunking.md?raw";
import FixedSizeChunkingDoc from "../assets/docs/fixed_size_chunking.md?raw";
import FixedSizeChunkingCode from "../assets/code/fixed_size_chunking.py?raw";
import RecursiveChunkingDoc from "../assets/docs/recursive_chunking.md?raw";
import RecursiveChunkingCode from "../assets/code/recursive_chunking.py?raw";
import SemanticChunkingDoc from "../assets/docs/semantic_chunking.md?raw";
import SemanticChunkingCode from "../assets/code/semantic_chunking.py?raw";
import TokenBasedChunkingDoc from "../assets/docs/token_based_chunking.md?raw";
import TokenBasedChunkingCode from "../assets/code/token_based_chunking.py?raw";
import SentenceChunkingDoc from "../assets/docs/sentence_chunking.md?raw";
import SentenceChunkingCode from "../assets/code/sentence_chunking.py?raw";
import ParagraphChunkingDoc from "../assets/docs/paragraph_chunking.md?raw";
import ParagraphChunkingCode from "../assets/code/paragraph_chunking.py?raw";
import ParentChildChunkingDoc from "../assets/docs/parent_child_chunking.md?raw";
import ParentChildChunkingCode from "../assets/code/parent_child_chunking.py?raw";
import SlidingWindowChunkingDoc from "../assets/docs/sliding_window_chunking.md?raw";
import SlidingWindowChunkingCode from "../assets/code/sliding_window_chunking.py?raw";
import AgenticChunkingDoc from "../assets/docs/agentic_chunking.md?raw";
import AgenticChunkingCode from "../assets/code/agentic_chunking.py?raw";
import ChunkSizeParameterDoc from "../assets/docs/chunk_size_parameter.md?raw";
import ChunkSizeParameterCode from "../assets/code/chunk_parameters.py?raw";
import ChunkOverLapParameter from "../assets/docs/chunk_overlap_parameter.md?raw";
import ContextWindowParameter from "../assets/docs/context_window_parameter.md?raw";





import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";



const RECIPES = [


// 1. WHY CHUNKING?
{
  id: "why-chunking",
  category: "Chunking",
  title: "Why Chunking?",
  difficulty: "Beginner",
  time: "~5 min",

  description:
    "Understand the importance and benefits of document chunking in RAG systems. Learn why splitting documents optimizes retrieval, reduces costs, and improves performance.",

  tags: ["chunking", "rag", "fundamentals"],

  concept: WhyChunkingDoc,
  
  steps: [
    {
      label: "Context Window Limits",
      icon: "📊",
      detail: "LLMs have finite context windows; large documents need splitting."
    },
    {
      label: "Retrieval Relevance",
      icon: "🎯",
      detail: "Smaller chunks improve search relevance and ranking accuracy."
    },
    {
      label: "Cost Optimization",
      icon: "💰",
      detail: "Reduce token usage by retrieving only relevant chunks."
    },
    {
      label: "Processing Speed",
      icon: "⚡",
      detail: "Faster embeddings and retrieval with smaller text units."
    },
    {
      label: "Semantic Coherence",
      icon: "🧠",
      detail: "Maintain meaning and context within each chunk boundary."
    }
  ],

  code: ""
},

// 2. FIXED-SIZE CHUNKING
{
  id: "fixed-size-chunking",
  category: "Chunking",
  title: "Fixed-size Chunking",
  difficulty: "Beginner",
  time: "~10 min",

  description:
    "Split documents into uniform chunks of N tokens or characters. Simple and predictable, but may break mid-sentence and lose contextual information.",

  tags: ["chunking", "fixed-size", "basic", "rag"],

  concept: FixedSizeChunkingDoc,
  
  steps: [
    {
      label: "Input Text",
      icon: "📝",
      detail: "Load document or text content."
    },
    {
      label: "Define Chunk Size",
      icon: "📏",
      detail: "Set chunk size in tokens or characters (e.g., 512 tokens)."
    },
    {
      label: "Split Sequentially",
      icon: "✂️",
      detail: "Divide text into equal-sized segments."
    },
    {
      label: "Handle Boundaries",
      icon: "🔗",
      detail: "Manage chunk boundaries (may split mid-word/sentence)."
    },
    {
      label: "Add Metadata",
      icon: "🏷️",
      detail: "Tag chunks with source, position, and index."
    }
  ],

  code: FixedSizeChunkingCode
},

// 3. RECURSIVE CHUNKING
{
  id: "recursive-chunking",
  category: "Chunking",
  title: "Recursive Chunking",
  difficulty: "Intermediate",
  time: "~15 min",

  description:
    "Recursively splits documents by natural delimiters (paragraphs, sentences, words). Preserves semantic boundaries while respecting size constraints.",

  tags: ["chunking", "recursive", "delimiters", "rag"],

  concept: RecursiveChunkingDoc,
  
  steps: [
    {
      label: "Input Document",
      icon: "📄",
      detail: "Load document to be split."
    },
    {
      label: "Define Separators",
      icon: "📋",
      detail: "Specify hierarchical delimiters (paragraphs, sentences, words)."
    },
    {
      label: "First-Level Split",
      icon: "✂️",
      detail: "Split by largest delimiter (e.g., double newlines)."
    },
    {
      label: "Merge if Needed",
      icon: "🔗",
      detail: "Combine small chunks to meet size requirements."
    },
    {
      label: "Recursive Refinement",
      icon: "🔄",
      detail: "For oversized chunks, split by next smaller delimiter."
    },
    {
      label: "Finalize Chunks",
      icon: "✅",
      detail: "Output chunks within size constraints."
    }
  ],

  code: RecursiveChunkingCode
},

// 4. SEMANTIC CHUNKING
{
  id: "semantic-chunking",
  category: "Chunking",
  title: "Semantic Chunking",
  difficulty: "Advanced",
  time: "~25 min",

  description:
    "Groups text by semantic similarity using embeddings. Dynamically determines chunk boundaries based on content meaning rather than fixed delimiters.",

  tags: ["chunking", "semantic", "embeddings", "rag", "advanced"],

  concept: SemanticChunkingDoc,
  
  steps: [
    {
      label: "Load Document",
      icon: "📥",
      detail: "Prepare text to be chunked."
    },
    {
      label: "Split into Sentences",
      icon: "📝",
      detail: "Break document into individual sentences."
    },
    {
      label: "Generate Embeddings",
      icon: "🧠",
      detail: "Embed each sentence using embedding model."
    },
    {
      label: "Calculate Similarity",
      icon: "📊",
      detail: "Compute cosine similarity between consecutive sentences."
    },
    {
      label: "Identify Breakpoints",
      icon: "🔍",
      detail: "Detect low-similarity boundaries as chunk breaks."
    },
    {
      label: "Create Chunks",
      icon: "✂️",
      detail: "Group semantically similar sentences together."
    },
    {
      label: "Validate Chunks",
      icon: "✅",
      detail: "Ensure chunks meet size and coherence requirements."
    }
  ],

  code: SemanticChunkingCode
},

// 5. TOKEN-BASED CHUNKING
{
  id: "token-based-chunking",
  category: "Chunking",
  title: "Token-based Chunking",
  difficulty: "Intermediate",
  time: "~15 min",

  description:
    "Splits documents by exact token count using a model tokenizer. Provides precise control over chunk sizes relative to specific LLM context windows.",

  tags: ["chunking", "tokens", "llm-aware", "rag"],

  concept: TokenBasedChunkingDoc,
  
  steps: [
    {
      label: "Select Tokenizer",
      icon: "🔧",
      detail: "Choose tokenizer matching target LLM (GPT, Claude, etc)."
    },
    {
      label: "Load Document",
      icon: "📄",
      detail: "Prepare text content for tokenization."
    },
    {
      label: "Tokenize Full Text",
      icon: "🔢",
      detail: "Convert entire document to token sequence."
    },
    {
      label: "Split by Token Count",
      icon: "✂️",
      detail: "Divide tokens into fixed-size chunks (e.g., 512 tokens)."
    },
    {
      label: "Decode Chunks",
      icon: "📝",
      detail: "Convert token sequences back to text."
    },
    {
      label: "Handle Boundaries",
      icon: "🔗",
      detail: "Clean up incomplete words at chunk edges."
    },
    {
      label: "Add Overlap",
      icon: "📌",
      detail: "Optionally add token-level overlap between chunks."
    }
  ],

  code: TokenBasedChunkingCode
},

// 6. SENTENCE CHUNKING
{
  id: "sentence-chunking",
  category: "Chunking",
  title: "Sentence Chunking",
  difficulty: "Beginner",
  time: "~10 min",

  description:
    "Breaks documents at sentence boundaries. Each chunk is one or more complete sentences, maintaining natural language flow and readability.",

  tags: ["chunking", "sentence", "nlp", "rag"],

  concept: SentenceChunkingDoc,
  
  steps: [
    {
      label: "Input Text",
      icon: "📝",
      detail: "Load document content."
    },
    {
      label: "Detect Sentences",
      icon: "🔍",
      detail: "Identify sentence boundaries using NLP library."
    },
    {
      label: "Group Sentences",
      icon: "📦",
      detail: "Combine consecutive sentences until size threshold."
    },
    {
      label: "Handle Edge Cases",
      icon: "⚙️",
      detail: "Manage abbreviations, decimals, and special punctuation."
    },
    {
      label: "Validate Chunks",
      icon: "✅",
      detail: "Ensure each chunk contains complete sentences."
    }
  ],

  code: SentenceChunkingCode
},

// 7. PARAGRAPH CHUNKING
{
  id: "paragraph-chunking",
  category: "Chunking",
  title: "Paragraph Chunking",
  difficulty: "Beginner",
  time: "~8 min",

  description:
    "Groups complete paragraphs as chunks. Preserves document structure and semantic units, though chunks may vary significantly in size.",

  tags: ["chunking", "paragraph", "structure", "rag"],

  concept: ParagraphChunkingDoc,
  
  steps: [
    {
      label: "Input Document",
      icon: "📄",
      detail: "Load formatted document with clear paragraphs."
    },
    {
      label: "Identify Paragraphs",
      icon: "🔍",
      detail: "Detect paragraph boundaries (blank lines, indentation)."
    },
    {
      label: "Combine Paragraphs",
      icon: "🔗",
      detail: "Group small paragraphs to meet size requirements."
    },
    {
      label: "Split Oversized Chunks",
      icon: "✂️",
      detail: "For large paragraphs, split at sentence level."
    },
    {
      label: "Preserve Structure",
      icon: "🏗️",
      detail: "Maintain original formatting and hierarchy."
    }
  ],

  code: ParagraphChunkingCode
},

// 8. SLIDING WINDOW CHUNKING
{
  id: "sliding-window-chunking",
  category: "Chunking",
  title: "Sliding Window Chunking",
  difficult: "Intermediate",
  time: "~15 min",

  description:
    "Creates overlapping chunks using a sliding window approach. Maintains context across chunk boundaries and prevents information loss at split points.",

  tags: ["chunking", "sliding-window", "overlap", "rag"],

  concept: SlidingWindowChunkingDoc,
  
  steps: [
    {
      label: "Tokenize Document",
      icon: "🔢",
      detail: "Convert text to tokens or units."
    },
    {
      label: "Define Window Size",
      icon: "📏",
      detail: "Set chunk size (e.g., 512 tokens)."
    },
    {
      label: "Define Stride",
      icon: "🔄",
      detail: "Set step size for window movement (usually < chunk size)."
    },
    {
      label: "Create First Chunk",
      icon: "✂️",
      detail: "Extract first window of tokens."
    },
    {
      label: "Slide Window",
      icon: "➡️",
      detail: "Move window by stride amount and create next chunk."
    },
    {
      label: "Handle End",
      icon: "🔚",
      detail: "Manage final partial chunks."
    },
    {
      label: "Add Metadata",
      icon: "🏷️",
      detail: "Tag each chunk with position and context."
    }
  ],

  code: SlidingWindowChunkingCode
},

// 9. PARENT-CHILD CHUNKING
{
  id: "parent-child-chunking",
  category: "Chunking",
  title: "Parent-Child Chunking",
  difficulty: "Advanced",
  time: "~25 min",

  description:
    "Creates hierarchical chunks with parent summaries and child detail chunks. Enables flexible retrieval at different granularity levels.",

  tags: ["chunking", "hierarchical", "parent-child", "rag", "advanced"],

  concept: ParentChildChunkingDoc,
  
  steps: [
    {
      label: "Input Document",
      icon: "📄",
      detail: "Load document for hierarchical chunking."
    },
    {
      label: "Create Child Chunks",
      icon: "👶",
      detail: "Split into detailed chunks using base strategy."
    },
    {
      label: "Group into Parents",
      icon: "👨",
      detail: "Combine child chunks into larger parent units."
    },
    {
      label: "Generate Parent Summaries",
      icon: "✍️",
      detail: "Create concise summaries of parent content."
    },
    {
      label: "Create Hierarchy",
      icon: "🌳",
      detail: "Establish parent-child relationships and links."
    },
    {
      label: "Index Both Levels",
      icon: "🗂️",
      detail: "Store both parent and child chunks with references."
    },
    {
      label: "Implement Retrieval",
      icon: "🔍",
      detail: "Enable retrieval at child or parent level based on query."
    }
  ],

  code: ParentChildChunkingCode
},

// 10. AGENTIC CHUNKING
{
  id: "agentic-chunking",
  category: "Chunking",
  title: "Agentic Chunking",
  difficulty: "Advanced",
  time: "~30 min",

  description:
    "Uses an LLM agent to intelligently determine chunk boundaries based on content meaning. Provides context-aware, adaptive chunking for complex documents.",

  tags: ["chunking", "agentic", "llm-driven", "ai", "advanced"],

  concept: AgenticChunkingDoc,
  
  steps: [
    {
      label: "Load Document",
      icon: "📄",
      detail: "Prepare document for agentic analysis."
    },
    {
      label: "Define Instructions",
      icon: "📝",
      detail: "Create prompts guiding chunk boundary decisions."
    },
    {
      label: "Send to LLM Agent",
      icon: "🤖",
      detail: "Query LLM to identify logical chunk boundaries."
    },
    {
      label: "LLM Analyzes Content",
      icon: "🧠",
      detail: "Agent reads and understands semantic structure."
    },
    {
      label: "Identify Breakpoints",
      icon: "🎯",
      detail: "Agent proposes where chunks should logically end."
    },
    {
      label: "Extract Chunks",
      icon: "✂️",
      detail: "Split document at agent-identified boundaries."
    },
    {
      label: "Generate Summaries",
      icon: "📋",
      detail: "Create titles/summaries for each chunk."
    },
    {
      label: "Validate & Store",
      icon: "✅",
      detail: "Validate chunks and store with metadata."
    }
  ],

  code: AgenticChunkingCode
},

// 11. CHUNK SIZE
{
  id: "chunk-size",
  category: "Chunking",
  title: "Chunk Size",
  difficulty: "Beginner",
  time: "~10 min",

  description:
    "Understand chunk size - the fundamental parameter controlling how much text each chunk contains. Learn optimal sizes for different scenarios and models.",

  tags: ["chunking", "parameters", "optimization", "rag"],

  concept: ChunkSizeParameterDoc,
  
  steps: [
    {
      label: "Define Requirements",
      icon: "📋",
      detail: "Determine context window and quality needs."
    },
    {
      label: "Model Context Limit",
      icon: "🎯",
      detail: "Check target LLM's context window size."
    },
    {
      label: "Calculate Safety Margin",
      icon: "🛡️",
      detail: "Reserve tokens for prompt, response, overhead."
    },
    {
      label: "Determine Retrieval Budget",
      icon: "💰",
      detail: "Estimate tokens for retrieved chunks in prompt."
    },
    {
      label: "Set Chunk Size",
      icon: "📏",
      detail: "Configure chunk size (typically 256-2048 tokens)."
    },
    {
      label: "Test & Adjust",
      icon: "🔧",
      detail: "Evaluate retrieval quality and performance."
    }
  ],

  code: ChunkSizeParameterCode
},

// 12. CHUNK OVERLAP
{
  id: "chunk-overlap",
  category: "Chunking",
  title: "Chunk Overlap",
  difficulty: "Intermediate",
  time: "~12 min",

  description:
    "Understand chunk overlap - duplicating tokens between adjacent chunks to preserve context across boundaries and prevent information loss.",

  tags: ["chunking", "overlap", "parameters", "rag"],

  concept: ChunkOverLapParameter,
  
  steps: [
    {
      label: "Analyze Break Risk",
      icon: "⚠️",
      detail: "Identify risk of context loss at chunk boundaries."
    },
    {
      label: "Define Overlap Ratio",
      icon: "📊",
      detail: "Decide overlap percentage (typically 10-20%)."
    },
    {
      label: "Calculate Overlap Size",
      icon: "🔢",
      detail: "Convert percentage to token/character count."
    },
    {
      label: "Implement Overlapping",
      icon: "🔗",
      detail: "Configure chunking algorithm with overlap."
    },
    {
      label: "Test Boundary Quality",
      icon: "✅",
      detail: "Validate that boundaries preserve context."
    },
    {
      label: "Monitor Storage Impact",
      icon: "💾",
      detail: "Track increased storage from overlaps."
    }
  ],

  code: ""
},

// 13. CONTEXT WINDOW
{
  id: "context-window",
  category: "Chunking",
  title: "Context Window",
  difficulty: "Intermediate",
  time: "~15 min",

  description:
    "Understand context window - the maximum tokens an LLM can process. Learn how it constrains chunk size and influences chunking strategy.",

  tags: ["chunking", "context-window", "llm", "parameters"],

  concept: ContextWindowParameter,
  
  steps: [
    {
      label: "Identify Target LLM",
      icon: "🤖",
      detail: "Choose which model(s) you're using."
    },
    {
      label: "Check Context Size",
      icon: "📊",
      detail: "Look up model's total context window."
    },
    {
      label: "Allocate for Prompt",
      icon: "💬",
      detail: "Reserve tokens for system prompt (~200-500)."
    },
    {
      label: "Reserve for Response",
      icon: "📝",
      detail: "Allocate tokens for LLM response (~500-2000)."
    },
    {
      label: "Calculate Retrieval Budget",
      icon: "🔍",
      detail: "Remaining tokens available for retrieved chunks."
    },
    {
      label: "Size Chunks Accordingly",
      icon: "📏",
      detail: "Set chunk size based on retrieval budget."
    }
  ],

  code: ""
},

{
  id: "multi-query-retrieval",
  category: "Retrieval",
  title: "Multi-Query Retrieval",
  difficulty: "Advanced",
  time: "~25 min",

  description:
    "Improves retrieval performance by generating multiple query variations and merging results from each.",

  tags: ["query", "retrieval", "expansion", "rag"],

  concept: MultiQueryRetrieval,
  steps: [
    {
      label: "Input Query",
      icon: "⌨️",
      detail: "User provides the original query."
    },
    {
      label: "Query Expansion",
      icon: "🔀",
      detail: "Generate multiple paraphrased queries."
    },
    {
      label: "Parallel Retrieval",
      icon: "🔍",
      detail: "Run search for each query variant."
    },
    {
      label: "Merge Results",
      icon: "🧩",
      detail: "Combine retrieved documents."
    },
    {
      label: "Deduplication",
      icon: "🧹",
      detail: "Remove duplicate documents."
    }
  ],

  code: MultiQuery
},
{
    id: "hybrid-search",
    category: "Retrieval",
    title: "Hybrid Search",
    difficulty: "Intermediate",
    time: "~30 min",
    description: "Combine dense semantic vectors with sparse BM25 keyword search, then re-rank. Handles both conceptual and exact-match queries.",
    tags: ["BM25", "reranking", "fusion"],
    concept: HybridSearchDoc,
    steps: [
      { label: "Dense Embed", icon: "🔢", detail: "Embed all chunks with a dense model for semantic search." },
      { label: "Build BM25 Index", icon: "🔑", detail: "Build a sparse BM25 index over the same corpus for keyword matching." },
      { label: "Dual Retrieval", icon: "⚡", detail: "Run both dense (vector) and sparse (BM25) retrieval in parallel." },
      { label: "Reciprocal Rank Fusion", icon: "🔀", detail: "Merge result lists using RRF: score = Σ 1/(k + rank_i) where k=60." },
      { label: "Cross-Encoder Rerank", icon: "🏆", detail: "Pass top-20 fused results through a cross-encoder to get a final top-5." },
      { label: "Generate", icon: "✨", detail: "Use reranked top-5 as context for the LLM." },
    ],
    code: HybridSearchCode
  },
  {
  id: "semantic-search",
  category: "Retrieval",
  title: "Semantic Search",
  difficulty: "Intermediate",
  time: "~20 min",
  description:
    "Retrieves documents based on meaning rather than exact keyword matching.",

  tags: [
    "semantic-search",
    "embeddings",
    "retrieval"
  ],
  concept:SemanticSearchDoc,

  steps: [
    {
      label: "Generate Embeddings",
      icon: "🧠",
      detail:
        "Encode documents and queries into semantic vectors."
    },
    {
      label: "Vector Search",
      icon: "🔍",
      detail:
        "Search nearest neighbors in vector space."
    },
    {
      label: "Retrieve Context",
      icon: "📚",
      detail:
        "Collect semantically relevant chunks."
    },
    {
      label: "Pass to LLM",
      icon: "✨",
      detail:
        "Use retrieved context during generation."
    }
  ],

  code:SemanticSearchCode
},
{
  id: "metadata-filtering",
  category: "Retrieval",
  title: "Metadata Filtering",
  difficulty: "Advanced",
  time: "~20 min",
  description:
    "Restrict retrieval results using metadata such as department, date, author, source, or access level.",

  tags: [
    "metadata",
    "filters",
    "enterprise-rag",
    "retrieval"
  ],
  concept: MetadataFilteringDoc,
  steps: [
    {
      label: "Attach Metadata",
      icon: "🏷️",
      detail:
        "Store metadata with every document chunk."
    },
    {
      label: "Apply Filters",
      icon: "🔒",
      detail:
        "Filter retrieval by attributes."
    },
    {
      label: "Vector Search",
      icon: "🔍",
      detail:
        "Search only within filtered documents."
    },
    {
      label: "Generate Answer",
      icon: "✨",
      detail:
        "Return answers using filtered context."
    }
  ],

  code: MetadataFiltering
},
{
  id: "sparse-retrieval",
  category: "Retrieval",
  title: "Sparse Retrieval (BM25)",
  difficulty: "Beginner",
  time: "~20 min",

  description:
    "Retrieves documents using keyword matching and statistical term weighting such as BM25 or TF-IDF.",

  tags: ["bm25", "tfidf", "keyword", "retrieval"],

  concept: SparseRetrieval,

  steps: [
    {
      label: "Input Query",
      icon: "⌨️",
      detail: "User submits a text query."
    },
    {
      label: "Tokenization",
      icon: "✂️",
      detail: "Split query into searchable keywords."
    },
    {
      label: "Keyword Search",
      icon: "🔍",
      detail: "Search inverted index using BM25 or TF-IDF."
    },
    {
      label: "Ranking",
      icon: "📊",
      detail: "Score documents based on keyword relevance."
    },
    {
      label: "Return Results",
      icon: "📄",
      detail: "Return the highest-ranked documents."
    }
  ],

  code: SparseRetrievalCode
},
{
  id: "dense-retrieval",
  category: "Retrieval",
  title: "Dense Retrieval",
  difficulty: "Intermediate",
  time: "~25 min",

  description:
    "Uses vector embeddings to retrieve semantically similar documents.",

  tags: ["embeddings", "vector", "semantic", "retrieval"],

  concept: DenseRetrieval,

  steps: [
    {
      label: "Input Query",
      icon: "⌨️",
      detail: "Receive user query."
    },
    {
      label: "Embedding Generation",
      icon: "🧠",
      detail: "Convert query into a dense vector."
    },
    {
      label: "Vector Search",
      icon: "📍",
      detail: "Search nearest document vectors."
    },
    {
      label: "Similarity Ranking",
      icon: "📊",
      detail: "Rank by cosine similarity or dot product."
    },
    {
      label: "Return Documents",
      icon: "📄",
      detail: "Provide the most similar documents."
    }
  ],

  code: DenseRetrievalCode
},
{
  id: "parent-child-retrieval",
  category: "Retrieval",
  title: "Parent-Child Retrieval",
  difficulty: "Advanced",
  time: "~30 min",
  description:
    "Store small child chunks for retrieval while returning larger parent documents for richer context and better answer generation.",

  tags: [
    "parent-child",
    "retrieval",
    "context",
    "enterprise-rag"
  ],
  concept:ParentChildRetrievalDoc,

  steps: [
    {
      label: "Split Parent Documents",
      icon: "📚",
      detail:
        "Break documents into large parent chunks."
    },
    {
      label: "Create Child Chunks",
      icon: "📄",
      detail:
        "Further split parent chunks into smaller retrievable chunks."
    },
    {
      label: "Generate Embeddings",
      icon: "🔢",
      detail:
        "Create embeddings for child chunks."
    },
    {
      label: "Store Relationships",
      icon: "🔗",
      detail:
        "Maintain mapping between child and parent documents."
    },
    {
      label: "Retrieve Child Chunks",
      icon: "🔍",
      detail:
        "Perform retrieval on child chunks."
    },
    {
      label: "Return Parent Context",
      icon: "✨",
      detail:
        "Fetch parent documents before sending to the LLM."
    }
  ],

  code: ParentChildRetrievalCode
},
{
  id: "contextual-compression",
  category: "Retrieval",
  title: "Contextual Compression Retrieval",
  difficulty: "Advanced",
  time: "~25 min",
  description:
    "Compress retrieved documents to keep only the information relevant to the user query before sending it to the LLM.",

  tags: [
    "compression",
    "retrieval",
    "rag",
    "cost-optimization"
  ],
  concept:"",

  steps: [
    {
      label: "Retrieve Documents",
      icon: "🔍",
      detail:
        "Fetch top-K relevant documents."
    },
    {
      label: "Apply Compression",
      icon: "🗜️",
      detail:
        "Extract only query-relevant sentences."
    },
    {
      label: "Remove Noise",
      icon: "✂️",
      detail:
        "Discard unrelated content."
    },
    {
      label: "Build Context",
      icon: "📚",
      detail:
        "Create a compact context window."
    },
    {
      label: "Generate Answer",
      icon: "✨",
      detail:
        "Send compressed context to the LLM."
    }
  ],

  code: "",
},
{
  id: "self-query-retrieval",
  category: "Retrieval",
  title: "Self Query Retrieval",
  difficulty: "Expert",
  time: "~30 min",
  description:
    "Use an LLM to automatically generate metadata filters and retrieval queries.",

  tags: [
    "metadata",
    "self-query",
    "retrieval",
    "enterprise-rag"
  ],
  concept:"",

  steps: [
    {
      label: "Analyze Query",
      icon: "🧠",
      detail:
        "Understand user intent."
    },
    {
      label: "Extract Filters",
      icon: "🏷️",
      detail:
        "Identify metadata constraints."
    },
    {
      label: "Build Search Query",
      icon: "🔍",
      detail:
        "Generate optimized retrieval query."
    },
    {
      label: "Apply Filters",
      icon: "🔒",
      detail:
        "Limit retrieval scope."
    },
    {
      label: "Retrieve Documents",
      icon: "📚",
      detail:
        "Search matching documents."
    },
    {
      label: "Generate Answer",
      icon: "✨",
      detail:
        "Provide grounded response."
    }
  ],

  code: ""
},

{
  id: "recursive-retrieval",
  category: "Retrieval",
  title: "Recursive Retrieval",
  difficulty: "Expert",
  time: "~35 min",
  description:
    "Retrieve documents iteratively until sufficient context is collected.",

  tags: [
    "recursive",
    "retrieval",
    "multi-hop",
    "rag"
  ],
  concept:"",

  steps: [
    {
      label: "Initial Retrieval",
      icon: "🔍",
      detail:
        "Retrieve initial documents."
    },
    {
      label: "Analyze Context",
      icon: "🧠",
      detail:
        "Determine missing information."
    },
    {
      label: "Generate Follow-up Query",
      icon: "❓",
      detail:
        "Create additional retrieval queries."
    },
    {
      label: "Retrieve Again",
      icon: "🔄",
      detail:
        "Search for supporting evidence."
    },
    {
      label: "Merge Context",
      icon: "📚",
      detail:
        "Combine all retrieved information."
    },
    {
      label: "Generate Answer",
      icon: "✨",
      detail:
        "Produce final response."
    }
  ],

  code: ""
},

{
  id: "knowledge-graph-retrieval",
  category: "Retrieval",
  title: "Knowledge Graph Retrieval",
  difficulty: "Expert",
  time: "~45 min",
  description:
    "Retrieve information using entities and relationships stored in a knowledge graph.",
  concept:"",

  tags: [
    "graph-rag",
    "knowledge-graph",
    "neo4j",
    "retrieval"
  ],

  steps: [
    {
      label: "Extract Entities",
      icon: "🏷️",
      detail:
        "Identify entities from documents."
    },
    {
      label: "Build Graph",
      icon: "🕸️",
      detail:
        "Create relationships between entities."
    },
    {
      label: "Store Graph",
      icon: "🗄️",
      detail:
        "Save in Neo4j or graph database."
    },
    {
      label: "Traverse Graph",
      icon: "🔍",
      detail:
        "Find relevant relationships."
    },
    {
      label: "Retrieve Context",
      icon: "📚",
      detail:
        "Collect graph-connected knowledge."
    },
    {
      label: "Generate Answer",
      icon: "✨",
      detail:
        "Use graph context for generation."
    }
  ],

  code:""
},

{
  id: "agentic-retrieval",
  category: "Retrieval",
  title: "Agentic Retrieval",
  difficulty: "Expert",
  time: "~50 min",
  description:
    "Use multiple AI agents to plan, retrieve, validate, and synthesize information before generating an answer.",

  tags: [
    "agentic-ai",
    "retrieval",
    "multi-agent",
    "rag"
  ],
  concept:"",

  steps: [
    {
      label: "Plan Retrieval",
      icon: "🧠",
      detail:
        "Planner agent decides strategy."
    },
    {
      label: "Knowledge Search",
      icon: "📚",
      detail:
        "Retriever agent queries vector stores."
    },
    {
      label: "Web Search",
      icon: "🌐",
      detail:
        "Search agent gathers external information."
    },
    {
      label: "Validate Results",
      icon: "✅",
      detail:
        "Critic agent verifies relevance."
    },
    {
      label: "Merge Evidence",
      icon: "🔗",
      detail:
        "Combine validated information."
    },
    {
      label: "Generate Response",
      icon: "✨",
      detail:
        "Final agent produces answer."
    }
  ],

  code:""
},

{
  id: "ensemble-retrieval",
  category: "Retrieval",
  title: "Ensemble Retrieval",
  difficulty: "Expert",
  time: "~40 min",
  description:
    "Combine multiple retrievers such as BM25, vector search, and graph search to maximize recall.",

  tags: [
    "ensemble",
    "hybrid",
    "retrieval",
    "enterprise-rag"
  ],
  concept:"",

  steps: [
    {
      label: "BM25 Search",
      icon: "🔤",
      detail:
        "Perform keyword retrieval."
    },
    {
      label: "Vector Search",
      icon: "🔍",
      detail:
        "Perform semantic retrieval."
    },
    {
      label: "Graph Search",
      icon: "🕸️",
      detail:
        "Retrieve graph relationships."
    },
    {
      label: "Merge Results",
      icon: "🔗",
      detail:
        "Combine retrieved documents."
    },
    {
      label: "Rerank Results",
      icon: "📊",
      detail:
        "Improve ranking quality."
    },
    {
      label: "Generate Answer",
      icon: "✨",
      detail:
        "Pass ranked context to the LLM."
    }
  ],

  code: ""
},


{
  id: "multi-vector-retrieval",
  category: "Retrieval",
  title: "Multi Vector Retrieval",
  difficulty: "Expert",
  time: "~35 min",
  description:
    "Store multiple vector representations for the same document such as summaries, questions, and chunks to improve retrieval quality.",

  tags: [
    "multi-vector",
    "retrieval",
    "rag",
    "embeddings"
  ],
  concept:"",

  steps: [
    {
      label: "Generate Chunk Embeddings",
      icon: "📄",
      detail:
        "Create embeddings for document chunks."
    },
    {
      label: "Generate Summary Embeddings",
      icon: "📝",
      detail:
        "Create embeddings from document summaries."
    },
    {
      label: "Generate Question Embeddings",
      icon: "❓",
      detail:
        "Generate likely user questions."
    },
    {
      label: "Store All Vectors",
      icon: "🗄️",
      detail:
        "Maintain multiple vector representations."
    },
    {
      label: "Retrieve",
      icon: "🔍",
      detail:
        "Search across all representations."
    },
    {
      label: "Merge Results",
      icon: "✨",
      detail:
        "Combine retrieved documents."
    }
  ],

  code:""
},

  
  
];

const CATEGORIES = ["All", "Foundations","Chunking","Embeddings", "Retrieval", "Query", "Advanced"];
const DIFFICULTIES = { Beginner: "#0F6E56", Intermediate: "#185FA5", Advanced: "#993C1D" };
const DIFFICULTY_BG = { Beginner: "#E1F5EE", Intermediate: "#E6F1FB", Advanced: "#FAECE7" };

function StepFlow({ steps }) {
  const [active, setActive] = useState(null);
  return (
    <div style={{ marginTop: 16 }}>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 8, alignItems: "center" }}>
        {steps.map((step, i) => (
          <div key={i} style={{ display: "flex", alignItems: "center", gap: 6 }}>
            <button
              onClick={() => setActive(active === i ? null : i)}
              style={{
                display: "flex", alignItems: "center", gap: 6, padding: "6px 12px",
                borderRadius: 20, border: active === i ? "1.5px solid #185FA5" : "0.5px solid var(--color-border-tertiary)",
                background: active === i ? "#E6F1FB" : "var(--color-background-primary)",
                color: active === i ? "#185FA5" : "var(--color-text-primary)",
                cursor: "pointer", fontSize: 13, fontWeight: active === i ? 500 : 400,
                transition: "all 0.15s",
              }}
            >
              <span>{step.icon}</span>
              <span>{step.label}</span>
            </button>
            {i < steps.length - 1 && (
              <span style={{ color: "var(--color-text-tertiary)", fontSize: 12 }}>→</span>
            )}
          </div>
        ))}
      </div>
      {active !== null && (
        <div style={{
          marginTop: 10, padding: "10px 14px", borderRadius: 8,
          background: "var(--color-background-secondary)",
          border: "0.5px solid var(--color-border-tertiary)",
          fontSize: 13, color: "var(--color-text-secondary)", lineHeight: 1.6,
        }}>
          <span style={{ fontWeight: 500, color: "var(--color-text-primary)" }}>{steps[active].label}: </span>
          {steps[active].detail}
        </div>
      )}
    </div>
  );
}


function ContentViewer({ content }) {
  return (
    <div className="prose max-w-none h-[75vh] overflow-y-auto p-6">
      <ReactMarkdown remarkPlugins={[remarkGfm]}>
        {content}
      </ReactMarkdown>
    </div>
  );
}

function CodeBlock({ code }) {
  const [copied, setCopied] = useState(false);
  const copy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  };
  return (
    <div style={{ position: "relative", marginTop: 16 }}>
      <button
        onClick={copy}
        style={{
          position: "absolute", top: 8, right: 8, padding: "4px 10px",
          borderRadius: 6, border: "0.5px solid var(--color-border-secondary)",
          background: "var(--color-background-secondary)", cursor: "pointer",
          fontSize: 12, color: "var(--color-text-secondary)", zIndex: 1,
        }}
      >
        {copied ? "✓ Copied" : "Copy"}
      </button>
      <pre style={{
        margin: 0, padding: "14px 16px", borderRadius: 10, overflowX: "auto",
        background: "var(--color-background-secondary)",
        border: "0.5px solid var(--color-border-tertiary)",
        fontSize: 12, lineHeight: 1.65, fontFamily: "var(--font-mono)",
        color: "var(--color-text-primary)", whiteSpace: "pre",
      }}>
        <code>{code}</code>
      </pre>
    </div>
  );
}

function RecipeCard({ recipe, onSelect, selected }) {
  return (
    <div
      onClick={() => onSelect(recipe)}
      style={{
        padding: "16px 18px", borderRadius: 12, cursor: "pointer",
        border: selected ? "1.5px solid #185FA5" : "0.5px solid var(--color-border-tertiary)",
        background: selected ? "#061320" : "var(--color-background-primary)",
        transition: "all 0.15s",
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 6 }}>
        <span style={{ fontSize: 13, color: "var(--color-text-secondary)", fontWeight: 400 }}>
          {recipe.category}
        </span>
        <span style={{
          fontSize: 11, padding: "2px 8px", borderRadius: 20, fontWeight: 500,
          background: DIFFICULTY_BG[recipe.difficulty], color: DIFFICULTIES[recipe.difficulty],
        }}>
          {recipe.difficulty}
        </span>
      </div>
      <div style={{ fontWeight: 500, fontSize: 15, marginBottom: 4, color: "var(--color-text-primary)" }}>
        {recipe.title}
      </div>
      <div style={{ fontSize: 13, color: "var(--color-text-secondary)", lineHeight: 1.5 }}>
        {recipe.description}
      </div>
      <div style={{ marginTop: 10, display: "flex", gap: 6, flexWrap: "wrap" }}>
        {recipe.tags.map((t) => (
          <span key={t} style={{
            fontSize: 11, padding: "2px 8px", borderRadius: 20,
            background: "var(--color-background-tertiary)",
            color: "var(--color-text-secondary)", border: "0.5px solid var(--color-border-tertiary)",
          }}>
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}

function RecipeDetail({ recipe }) {
  const [tab, setTab] = useState("steps");
  return (
    <div style={{ padding: "24px", borderRadius: 14, background: "var(--color-background-primary)", border: "0.5px solid var(--color-border-tertiary)" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 4 }}>
        <div>
          <span style={{ fontSize: 12, color: "var(--color-text-tertiary)" }}>{recipe.category}</span>
          <h2 style={{ margin: "4px 0 6px", fontSize: 22, fontWeight: 500 }}>{recipe.title}</h2>
        </div>
        <div style={{ display: "flex", gap: 8, alignItems: "center", paddingTop: 4 }}>
          <span style={{
            fontSize: 12, padding: "3px 10px", borderRadius: 20, fontWeight: 500,
            background: DIFFICULTY_BG[recipe.difficulty], color: DIFFICULTIES[recipe.difficulty],
          }}>{recipe.difficulty}</span>
          <span style={{ fontSize: 12, color: "var(--color-text-tertiary)" }}>⏱ {recipe.time}</span>
        </div>
      </div>
      <p style={{ margin: "0 0 20px", color: "var(--color-text-secondary)", fontSize: 14, lineHeight: 1.6 }}>
        {recipe.description}
      </p>

      <div style={{ display: "flex", gap: 4, marginBottom: 18, borderBottom: "0.5px solid var(--color-border-tertiary)", paddingBottom: 0 }}>
        {["steps", "code", "concept"].map((t) => (
          <button
            key={t}
            onClick={() => setTab(t)}
            style={{
              padding: "8px 16px", border: "none", background: "none", cursor: "pointer",
              fontSize: 14, fontWeight: tab === t ? 500 : 400,
              color: tab === t ? "var(--color-text-primary)" : "var(--color-text-secondary)",
              borderBottom: tab === t ? "2px solid #185FA5" : "2px solid transparent",
              marginBottom: -1, transition: "all 0.12s",
            }}
          >
            {t === "steps" ? "Pipeline Steps" : t === "code" ? "Code" : "Concept"}
          </button>
        ))}
      </div>
      
      {tab === "steps" && <StepFlow steps={recipe.steps} />}
      {tab === "code" && <CodeBlock code={recipe.code} />}
      {tab === "concept" && <ContentViewer content={recipe.concept} />}
    </div>
  );
}

function Sidebar({ recipes, selected, onSelect, category, setCategory, search, setSearch }) {
  const filtered = recipes.filter((r) => {
    const matchCat = category === "All" || r.category === category;
    const matchSearch = r.title.toLowerCase().includes(search.toLowerCase()) ||
      r.tags.some((t) => t.toLowerCase().includes(search.toLowerCase()));
    return matchCat && matchSearch;
  });

  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100%", gap: 0 }}>
      <div style={{ padding: "0 0 16px" }}>
        <input
          type="text"
          placeholder="Search recipes…"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{
            width: "100%", boxSizing: "border-box", padding: "8px 12px",
            borderRadius: 8, border: "0.5px solid var(--color-border-secondary)",
            background: "var(--color-background-secondary)",
            color: "var(--color-text-primary)", fontSize: 13,
          }}
        />
      </div>
      <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginBottom: 16 }}>
        {CATEGORIES.map((c) => (
          <button
            key={c}
            onClick={() => setCategory(c)}
            style={{
              padding: "4px 12px", borderRadius: 20, fontSize: 12, cursor: "pointer",
              border: category === c ? "1.5px solid #185FA5" : "0.5px solid var(--color-border-tertiary)",
              background: category === c ? "#E6F1FB" : "var(--color-background-primary)",
              color: category === c ? "#185FA5" : "var(--color-text-secondary)",
              fontWeight: category === c ? 500 : 400,
            }}
          >
            {c}
          </button>
        ))}
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 10, overflowY: "auto", flex: 1 }}>
        {filtered.length === 0 ? (
          <div style={{ color: "var(--color-text-tertiary)", fontSize: 13, padding: "12px 0" }}>No recipes found.</div>
        ) : filtered.map((r) => (
          <RecipeCard key={r.id} recipe={r} onSelect={onSelect} selected={selected?.id === r.id} />
        ))}
      </div>
    </div>
  );
}

function Header() {
  return (
    <div style={{
      padding: "20px 32px 16px",
      borderBottom: "0.5px solid var(--color-border-tertiary)",
      display: "flex", alignItems: "center", gap: 16,
    }}>
      <div style={{
        width: 40, height: 40, borderRadius: 10,
        background: "#E6F1FB", display: "flex", alignItems: "center", justifyContent: "center",
        fontSize: 20,
      }}>
        📚
      </div>
      <div>
        <h1 style={{ margin: 0, fontSize: 20, fontWeight: 500, letterSpacing: "-0.3px" }}>RAG Cookbook</h1>
        <p style={{ margin: 0, fontSize: 13, color: "var(--color-text-secondary)" }}>
          End-to-end retrieval-augmented generation recipes
        </p>
      </div>
      <div style={{ marginLeft: "auto", display: "flex", gap: 20 }}>
        {[
          { label: "Recipes", value: RECIPES.length },
          { label: "Patterns", value: CATEGORIES.length - 1 },
        ].map(({ label, value }) => (
          <div key={label} style={{ textAlign: "center" }}>
            <div style={{ fontSize: 18, fontWeight: 500 }}>{value}</div>
            <div style={{ fontSize: 11, color: "var(--color-text-tertiary)" }}>{label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function App() {
  const [selected, setSelected] = useState(RECIPES[0]);
  const [category, setCategory] = useState("All");
  const [search, setSearch] = useState("");

  return (
    <div style={{
      display: "flex", flexDirection: "column",
      height: "100vh", fontFamily: "var(--font-sans, system-ui, sans-serif)",
      // background: "var(--color-background-tertiary, radial-gradient(circle at top, #0f172a, #020617);)",
      background: "var(--color-background-tertiary, radial-gradient(circle at top, #0f172a, #020617);)",
      color: "var(--color-text-primary)",
    }}>
      <Header />
      <div style={{ display: "flex", flex: 1, overflow: "hidden" }}>
        <div style={{
          width: 320, minWidth: 260, padding: "20px 20px",
          borderRight: "0.5px solid var(--color-border-tertiary)",
          background: "var(--color-background-primary)",
          overflowY: "auto",
        }}>
          <Sidebar
            recipes={RECIPES}
            selected={selected}
            onSelect={setSelected}
            category={category}
            setCategory={setCategory}
            search={search}
            setSearch={setSearch}
          />
        </div>
        <div style={{ flex: 1, overflowY: "auto", padding: "24px 28px" }}>
          {selected ? (
            <RecipeDetail recipe={selected} />
          ) : (
            <div style={{ color: "var(--color-text-tertiary)", padding: 40, textAlign: "center" }}>
              Select a recipe to get started
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
