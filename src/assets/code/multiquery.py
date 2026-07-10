from langchain_openai import ChatOpenAI, OpenAIEmbeddings
from langchain_community.vectorstores import FAISS
from langchain.retrievers.multi_query import MultiQueryRetriever
from langchain_core.prompts import ChatPromptTemplate
from langchain.chains.combine_documents import create_stuff_documents_chain

# ---------------------------------------
# Step 1: Load LLM
# ---------------------------------------

llm = ChatOpenAI(
    model="gpt-4o-mini",
    temperature=0
)

# ---------------------------------------
# Step 2: Load Embedding Model
# ---------------------------------------

embeddings = OpenAIEmbeddings()

# ---------------------------------------
# Step 3: Load Vector Database
# ---------------------------------------

vector_db = FAISS.load_local(
    "faiss_index",
    embeddings,
    allow_dangerous_deserialization=True
)

# ---------------------------------------
# Step 4: Create Base Retriever
# ---------------------------------------

base_retriever = vector_db.as_retriever(
    search_kwargs={"k": 5}
)

# ---------------------------------------
# Step 5: Create Multi-Query Retriever
# ---------------------------------------

multi_query_retriever = MultiQueryRetriever.from_llm(
    retriever=base_retriever,
    llm=llm
)

# ---------------------------------------
# Step 6: User Question
# ---------------------------------------

question = "How can I reduce latency in Kubernetes?"

# ---------------------------------------
# Step 7: Retrieve Documents
# ---------------------------------------

documents = multi_query_retriever.invoke(question)

print("Retrieved Documents")
print("=" * 50)

for i, doc in enumerate(documents, 1):
    print(f"\nDocument {i}")
    print(doc.page_content[:300])

# ---------------------------------------
# Step 8: Prompt Template
# ---------------------------------------

prompt = ChatPromptTemplate.from_template("""
Answer the question only using the provided context.

Context:
{context}

Question:
{input}
""")

# ---------------------------------------
# Step 9: Create QA Chain
# ---------------------------------------

document_chain = create_stuff_documents_chain(
    llm,
    prompt
)

# ---------------------------------------
# Step 10: Generate Answer
# ---------------------------------------

answer = document_chain.invoke({
    "context": documents,
    "input": question
})

print("\nFinal Answer")
print("=" * 50)
print(answer)