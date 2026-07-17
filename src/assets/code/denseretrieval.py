"""
============================================================
Dense Retrieval in RAG - End-to-End Workflow
============================================================

Workflow
--------
1. Load Documents
2. Split Documents into Chunks
3. Generate Embeddings
4. Store Embeddings in a Vector Database
5. User submits a query
6. Generate Query Embedding
7. Perform Vector Similarity Search
8. Retrieve Top-K Relevant Documents
9. Construct Prompt
10. Send Context + Question to LLM
11. Generate Final Answer

Dense Retrieval uses semantic embeddings instead of
keyword matching, making it effective for understanding
synonyms, paraphrases, and natural language queries.
"""

from langchain_community.document_loaders import DirectoryLoader
from langchain.text_splitter import RecursiveCharacterTextSplitter
from langchain_openai import OpenAIEmbeddings, ChatOpenAI
from langchain_community.vectorstores import FAISS
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
# STEP 3 : Initialize Embedding Model
# ==========================================================

embedding_model = OpenAIEmbeddings()

# ==========================================================
# STEP 4 : Generate Embeddings & Store in Vector Database
# ==========================================================

vector_db = FAISS.from_documents(
    documents=chunks,
    embedding=embedding_model
)

print("Vector Database Created Successfully")

# ==========================================================
# STEP 5 : Create Retriever
# ==========================================================

retriever = vector_db.as_retriever(
    search_kwargs={
        "k": 5
    }
)

# ==========================================================
# STEP 6 : User Question
# ==========================================================

question = "How does Kubernetes Horizontal Pod Autoscaler work?"

# ==========================================================
# STEP 7 : Generate Query Embedding + Retrieve Documents
# ==========================================================

retrieved_docs = retriever.invoke(question)

print("\n")
print("=" * 60)
print("Retrieved Documents")
print("=" * 60)

for i, doc in enumerate(retrieved_docs, start=1):
    print(f"\nDocument {i}")
    print("-" * 40)
    print(doc.page_content[:300])

# ==========================================================
# STEP 8 : Prompt Template
# ==========================================================

prompt = ChatPromptTemplate.from_template("""

You are an expert AI assistant.

Answer ONLY using the supplied context.

If the answer cannot be found,
respond with:

"I don't have enough information."

Context:
{context}

Question:
{input}

""")

# ==========================================================
# STEP 9 : Initialize LLM
# ==========================================================

llm = ChatOpenAI(
    model="gpt-4o-mini",
    temperature=0
)

# ==========================================================
# STEP 10 : Create Document Chain
# ==========================================================

document_chain = create_stuff_documents_chain(
    llm,
    prompt
)

# ==========================================================
# STEP 11 : Generate Final Answer
# ==========================================================

response = document_chain.invoke(
    {
        "context": retrieved_docs,
        "input": question
    }
)

# ==========================================================
# STEP 12 : Display Final Answer
# ==========================================================

print("\n")
print("=" * 60)
print("FINAL ANSWER")
print("=" * 60)

print(response)

# ==========================================================
# END OF DENSE RETRIEVAL PIPELINE
# ==========================================================