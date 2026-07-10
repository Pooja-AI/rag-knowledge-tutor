"""
============================================================
Sparse Retrieval in RAG - End-to-End Workflow
============================================================

Workflow
--------
1. Load Documents
2. Split Documents
3. Build Sparse Index (BM25)
4. User submits a query
5. Tokenize Query
6. BM25 Scores Documents
7. Retrieve Top-K Relevant Documents
8. Construct Prompt
9. Send Context + Question to LLM
10. Generate Final Answer

Sparse Retrieval uses keyword matching instead of vector embeddings.
It is ideal for exact keyword, acronym, code, product ID,
and legal document retrieval.
"""

from langchain_community.document_loaders import DirectoryLoader
from langchain.text_splitter import RecursiveCharacterTextSplitter
from langchain_core.documents import Document
from langchain_community.retrievers import BM25Retriever
from langchain_openai import ChatOpenAI
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
# STEP 3 : Create BM25 Retriever
# ==========================================================

bm25_retriever = BM25Retriever.from_documents(chunks)

# Number of documents to retrieve
bm25_retriever.k = 5

print("BM25 Index Created")

# ==========================================================
# STEP 4 : User Question
# ==========================================================

question = "What is the Kubernetes Horizontal Pod Autoscaler?"

# ==========================================================
# STEP 5 : Retrieve Documents
# ==========================================================

retrieved_docs = bm25_retriever.invoke(question)

print("\n")
print("=" * 60)
print("Retrieved Documents")
print("=" * 60)

for i, doc in enumerate(retrieved_docs, start=1):

    print(f"\nDocument {i}")
    print("-" * 40)
    print(doc.page_content[:300])

# ==========================================================
# STEP 6 : Prompt Template
# ==========================================================

prompt = ChatPromptTemplate.from_template("""

You are an expert AI assistant.

Answer the user's question ONLY using the supplied context.

If the answer does not exist in the context,
reply with:

"I don't have enough information."

Context:
{context}

Question:
{input}

""")

# ==========================================================
# STEP 7 : Load LLM
# ==========================================================

llm = ChatOpenAI(
    model="gpt-4o-mini",
    temperature=0
)

# ==========================================================
# STEP 8 : Create QA Chain
# ==========================================================

document_chain = create_stuff_documents_chain(
    llm,
    prompt
)

# ==========================================================
# STEP 9 : Generate Answer
# ==========================================================

response = document_chain.invoke(
    {
        "context": retrieved_docs,
        "input": question
    }
)

# ==========================================================
# STEP 10 : Display Answer
# ==========================================================

print("\n")
print("=" * 60)
print("FINAL ANSWER")
print("=" * 60)
print(response)

# ==========================================================
# END OF SPARSE RAG PIPELINE
# ==========================================================