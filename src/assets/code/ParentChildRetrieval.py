"""
Parent-Child Retrieval using LangChain

Workflow

1. Load Documents
2. Split into Parent Chunks
3. Split Parent Chunks into Child Chunks
4. Store Child Chunks in Vector Store
5. Store Parent Documents in Doc Store
6. Retrieve Child Chunks
7. Return Parent Documents to the LLM
"""

from langchain_openai import OpenAIEmbeddings
from langchain_community.vectorstores import Chroma
from langchain.storage import InMemoryStore
from langchain_text_splitters import RecursiveCharacterTextSplitter
from langchain.retrievers import ParentDocumentRetriever
from langchain_core.documents import Document

# -----------------------------------------
# Step 1 : Load Documents
# -----------------------------------------

documents = [
    Document(
        page_content="""
Artificial Intelligence (AI) is the simulation of human intelligence in machines.
Machine Learning is a subset of AI that enables systems to learn from data.
Deep Learning is a subset of Machine Learning that uses neural networks.
Large Language Models (LLMs) are deep learning models trained on massive text datasets.
Retrieval-Augmented Generation (RAG) combines retrieval systems with LLMs to provide accurate responses.
"""
    )
]

# -----------------------------------------
# Step 2 : Initialize Embedding Model
# -----------------------------------------

embeddings = OpenAIEmbeddings(
    model="text-embedding-3-small"
)

# -----------------------------------------
# Step 3 : Create Vector Store
# -----------------------------------------

vectorstore = Chroma(
    collection_name="parent_child_demo",
    embedding_function=embeddings
)

# -----------------------------------------
# Step 4 : Create Parent & Child Splitters
# -----------------------------------------

parent_splitter = RecursiveCharacterTextSplitter(
    chunk_size=500,
    chunk_overlap=50
)

child_splitter = RecursiveCharacterTextSplitter(
    chunk_size=100,
    chunk_overlap=20
)

# -----------------------------------------
# Step 5 : Create Document Store
# -----------------------------------------

store = InMemoryStore()

# -----------------------------------------
# Step 6 : Create Parent Retriever
# -----------------------------------------

retriever = ParentDocumentRetriever(
    vectorstore=vectorstore,
    docstore=store,
    child_splitter=child_splitter,
    parent_splitter=parent_splitter,
)

# -----------------------------------------
# Step 7 : Add Documents
# -----------------------------------------

retriever.add_documents(documents)

# -----------------------------------------
# Step 8 : User Query
# -----------------------------------------

query = "What is Retrieval-Augmented Generation?"

# -----------------------------------------
# Step 9 : Retrieve Parent Document
# -----------------------------------------

results = retriever.invoke(query)

# -----------------------------------------
# Step 10 : Display Results
# -----------------------------------------

print("\nRetrieved Parent Documents\n")

for i, doc in enumerate(results, start=1):
    print(f"Parent Document {i}")
    print("-" * 60)
    print(doc.page_content)
    print()