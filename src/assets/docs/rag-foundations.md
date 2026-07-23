## Introduction
Retrieval-Augmented Generation (RAG) is an AI framework that combines information retrieval with large language model generation. Instead of relying solely on the model's parametric memory, RAG fetches relevant documents at query time and injects them as context.

## Core Components

### 1. Document Ingestion
- Load raw documents (PDFs, HTML, plain text)
- Split into manageable chunks
- Generate vector embeddings
- Store in a vector database

### 2. Retrieval
- Embed the user query
- Search for semantically similar chunks
- Return top-K results

### 3. Generation
- Inject retrieved chunks into the LLM prompt
- Generate a grounded, context-aware answer

## Why RAG?

| Problem | RAG Solution |
|---|---|
| Knowledge cutoff | Retrieve fresh data |
| Hallucinations | Ground answers in retrieved facts |
| Domain specificity | Index proprietary documents |
| Cost | Cheaper than full fine-tuning |

## Key Metrics

- **Precision** – Are retrieved chunks relevant?
- **Recall** – Are all relevant chunks retrieved?
- **Faithfulness** – Does the answer match the context?
- **Answer Relevance** – Does the answer address the question?

## Embedding Models

Popular choices:
- `text-embedding-3-small` (OpenAI) — fast, cheap
- `text-embedding-3-large` (OpenAI) — higher quality
- `BAAI/bge-large-en` — open-source
- `nomic-embed-text` — open-source, long context

## Vector Databases

| DB | Best For |
|---|---|
| Pinecone | Managed, production scale |
| Weaviate | Hybrid search built-in |
| ChromaDB | Local development |
| pgvector | Postgres-native |
| FAISS | In-memory, research |

## Chunking Strategies

1. **Fixed** — Simple, fast, ignores semantics
2. **Recursive** — Respects paragraph/sentence boundaries
3. **Semantic** — Groups by meaning
4. **Hierarchical** — Parent + child chunks

## Further Reading

- [LangChain RAG Docs](https://python.langchain.com/docs/use_cases/question_answering/)
- [LlamaIndex Guides](https://docs.llamaindex.ai/)
- [Pinecone Learn](https://www.pinecone.io/learn/)
