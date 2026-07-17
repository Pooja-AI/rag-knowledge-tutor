"""
============================================================
Hybrid Retrieval in RAG - End-to-End Workflow
============================================================

Workflow
--------
1. Load Documents
2. Split Documents into Chunks
3. Generate Dense Embeddings
4. Store Embeddings in Vector Database
5. Build BM25 Sparse Index
6. User submits a query
7. Perform Dense Retrieval
8. Perform Sparse Retrieval
9. Merge & Re-rank Results
10. Construct Prompt
11. Send Context + Question to LLM
12. Generate Final Answer

Hybrid Retrieval combines:
✔ Dense Retrieval (Semantic Search)
✔ Sparse Retrieval (Keyword Search)

This provides both semantic understanding and exact keyword matching.
"""

from langchain_community.document_loaders import DirectoryLoader
from langchain.text_splitter import RecursiveCharacterTextSplitter
from langchain_openai import OpenAIEmbeddings, ChatOpenAI
from langchain_community.vectorstores import FAISS
from langchain_community.retrievers import BM25Retriever
from langchain.retrievers import EnsembleRetriever
from langchain.prompts import ChatPromptTemplate
from langchain.chains.combine_documents import create_stuff_documents_chain

# ==========================================================
# STEP 1 : Load Documents
# ==========================================================

loader = DirectoryLoader("documents/")
documents = loader.load()

print(f"Loaded {len(documents)} documents")

# ==========================================================
# STEP 2 : Split Documents
# ==========================================================

splitter = RecursiveCharacterTextSplitter(
    chunk_size=500,
    chunk_overlap=100
)

chunks = splitter.split_documents(documents)

print(f"Created {len(chunks)} chunks")

# ==========================================================
# STEP 3 : Generate Dense Embeddings
# ==========================================================

embedding_model = OpenAIEmbeddings()

# ==========================================================
# STEP 4 : Store Embeddings in Vector Database
# ==========================================================

vector_db = FAISS.from_documents(
    chunks,
    embedding_model
)

dense_retriever = vector_db.as_retriever(
    search_kwargs={"k": 5}
)

print("Dense Retriever Ready")

# ==========================================================
# STEP 5 : Build Sparse BM25 Index
# ==========================================================

sparse_retriever = BM25Retriever.from_documents(chunks)
sparse_retriever.k = 5

print("Sparse Retriever Ready")

# ==========================================================
# STEP 6 : Create Hybrid Retriever
# ==========================================================

hybrid_retriever = EnsembleRetriever(
    retrievers=[
        dense_retriever,
        sparse_retriever
    ],
    weights=[
        0.5,   # Dense Retrieval Weight
        0.5    # Sparse Retrieval Weight
    ]
)

print("Hybrid Retriever Created")

# ==========================================================
# STEP 7 : User Question
# ==========================================================

question = "How does Kubernetes Horizontal Pod Autoscaler work?"

# ==========================================================
# STEP 8 : Hybrid Retrieval
# ==========================================================

retrieved_docs = hybrid_retriever.invoke(question)

print("\n")
print("=" * 60)
print("Retrieved Documents")
print("=" * 60)

for i, doc in enumerate(retrieved_docs, start=1):

    print(f"\nDocument {i}")
    print("-" * 40)
    print(doc.page_content[:300])

# ==========================================================
# STEP 9 : Prompt Template
# ==========================================================

prompt = ChatPromptTemplate.from_template("""

You are an expert AI assistant.

Answer ONLY using the supplied context.

If the answer is unavailable,
reply with:

"I don't have enough information."

Context:
{context}

Question:
{input}

""")

# ==========================================================
# STEP 10 : Load LLM
# ==========================================================

llm = ChatOpenAI(
    model="gpt-4o-mini",
    temperature=0
)

# ==========================================================
# STEP 11 : Create QA Chain
# ==========================================================

document_chain = create_stuff_documents_chain(
    llm,
    prompt
)

# ==========================================================
# STEP 12 : Generate Final Answer
# ==========================================================

response = document_chain.invoke(
    {
        "context": retrieved_docs,
        "input": question
    }
)

# ==========================================================
# STEP 13 : Display Answer
# ==========================================================

print("\n")
print("=" * 60)
print("FINAL ANSWER")
print("=" * 60)
print(response)

# ==========================================================
# END OF HYBRID RAG PIPELINE
# ==========================================================