# RAG Cookbook

An interactive reference for end-to-end Retrieval-Augmented Generation patterns — chunking strategies, retrieval methods, query techniques, and advanced architectures.

## Getting Started

```bash
npm install
npm run dev
```

Then open http://localhost:5173

## Build

```bash
npm run build
```

## Project Structure

```
rag-cookbook/
├── index.html
├── vite.config.js
├── package.json
└── src/
    ├── main.jsx          # React entry
    ├── App.jsx           # Main component (all recipes)
    ├── index.css         # Global styles + design tokens
    └── assets/
        └── docs/
            └── rag-foundations.md
```

## Tech Stack

- **React 18** + Vite
- **react-markdown** for rendering docs
- Pure inline styles with CSS variables (dark theme)

## Categories

| Category | Description |
|---|---|
| Foundations | Core RAG patterns (Naive, Semantic, Hybrid, Graph, Agentic) |
| Chunking | Document splitting strategies |
| Retrieval | Vector search, hybrid, metadata filtering, ensemble |
| Query | HyDE, RAG Fusion, multi-query, step-back |
| Advanced | Self-RAG, CRAG, Adaptive, Multimodal, Federated |
