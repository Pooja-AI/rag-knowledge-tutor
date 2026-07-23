"""
Semantic Search using LangChain + ChromaDB

Workflow

1. Load Documents
2. Generate Embeddings
3. Store Embeddings in ChromaDB
4. Convert User Query into Embedding
5. Perform Similarity Search
6. Return Top-K Documents
"""

from langchain_core.documents import Document
from langchain_openai import OpenAIEmbeddings
from langchain_community.vectorstores import Chroma

# ---------------------------------------------------
# Step 1 : Load Documents
# ---------------------------------------------------

documents = [

    Document(
        page_content="""
        Artificial Intelligence enables machines to perform
        tasks requiring human intelligence such as reasoning,
        learning, and decision making.
        """
    ),

    Document(
        page_content="""
        Machine Learning is a subset of Artificial Intelligence
        that enables computers to learn from data.
        """
    ),

    Document(
        page_content="""
        Deep Learning uses multi-layer neural networks to
        solve complex problems.
        """
    ),

    Document(
        page_content="""
        Cats are domestic animals commonly kept as pets.
        """
    )

]

# ---------------------------------------------------
# Step 2 : Initialize Embedding Model
# ---------------------------------------------------

embeddings = OpenAIEmbeddings(
    model="text-embedding-3-small"
)

# ---------------------------------------------------
# Step 3 : Store Embeddings in ChromaDB
# ---------------------------------------------------

vectorstore = Chroma.from_documents(
    documents=documents,
    embedding=embeddings,
    collection_name="semantic_search_demo"
)

# ---------------------------------------------------
# Step 4 : User Query
# ---------------------------------------------------

query = "Explain Artificial Intelligence"

# ---------------------------------------------------
# Step 5 : Semantic Search
# ---------------------------------------------------

results = vectorstore.similarity_search(
    query=query,
    k=3
)

# ---------------------------------------------------
# Step 6 : Display Retrieved Documents
# ---------------------------------------------------

print("\nTop Retrieved Documents\n")

for i, doc in enumerate(results, start=1):

    print(f"Document {i}")
    print("-" * 50)
    print(doc.page_content.strip())
    print()