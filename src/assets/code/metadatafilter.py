"""
============================================================
Metadata Filtering in RAG - End-to-End Workflow
============================================================

Workflow
--------
1. Load Documents
2. Add Metadata
3. Split Documents
4. Generate Embeddings
5. Store in Vector Database
6. User asks a question
7. Apply Metadata Filter
8. Retrieve Matching Documents
9. Send Context + Question to LLM
10. Generate Final Answer
"""

from langchain_community.document_loaders import DirectoryLoader
from langchain.text_splitter import RecursiveCharacterTextSplitter
from langchain_openai import OpenAIEmbeddings, ChatOpenAI
from langchain_community.vectorstores import FAISS
from langchain_core.documents import Document
from langchain.prompts import ChatPromptTemplate
from langchain.chains.combine_documents import create_stuff_documents_chain

# ==========================================================
# STEP 1 : Load Documents
# ==========================================================

loader = DirectoryLoader("documents/")
documents = loader.load()

# ==========================================================
# STEP 2 : Add Metadata
# ==========================================================

for doc in documents:

    if "finance" in doc.metadata["source"]:
        doc.metadata["department"] = "Finance"
        doc.metadata["year"] = 2024

    elif "hr" in doc.metadata["source"]:
        doc.metadata["department"] = "HR"
        doc.metadata["year"] = 2023

    elif "legal" in doc.metadata["source"]:
        doc.metadata["department"] = "Legal"
        doc.metadata["year"] = 2024

    else:
        doc.metadata["department"] = "General"
        doc.metadata["year"] = 2022

# ==========================================================
# STEP 3 : Split Documents
# ==========================================================

splitter = RecursiveCharacterTextSplitter(
    chunk_size=500,
    chunk_overlap=100
)

chunks = splitter.split_documents(documents)

# ==========================================================
# STEP 4 : Create Embeddings
# ==========================================================

embedding_model = OpenAIEmbeddings()

# ==========================================================
# STEP 5 : Store into Vector Database
# ==========================================================

vector_db = FAISS.from_documents(
    chunks,
    embedding_model
)

print("Vector Database Created")

# ==========================================================
# STEP 6 : User Question
# ==========================================================

question = "What is the finance budget for 2024?"

# ==========================================================
# STEP 7 : Metadata Filtering
# ==========================================================

retriever = vector_db.as_retriever(
    search_kwargs={
        "k": 5,

        # Metadata Filter
        "filter": {
            "department": "Finance",
            "year": 2024
        }
    }
)

# ==========================================================
# STEP 8 : Retrieve Documents
# ==========================================================

retrieved_docs = retriever.invoke(question)

print("=" * 60)
print("Retrieved Documents")
print("=" * 60)

for i, doc in enumerate(retrieved_docs, start=1):

    print(f"\nDocument {i}")
    print(doc.metadata)
    print(doc.page_content[:250])

# ==========================================================
# STEP 9 : Prompt Template
# ==========================================================

prompt = ChatPromptTemplate.from_template("""

You are an expert assistant.

Answer ONLY using the provided context.

Context:
{context}

Question:
{input}

""")

# ==========================================================
# STEP 10 : Initialize LLM
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
# STEP 12 : Generate Answer
# ==========================================================

response = document_chain.invoke(
    {
        "context": retrieved_docs,
        "input": question
    }
)

print("\n")
print("=" * 60)
print("FINAL ANSWER")
print("=" * 60)
print(response)

# ==========================================================
# END OF PIPELINE
# ==========================================================