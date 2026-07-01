import { BrowserRouter, Routes, Route } from "react-router-dom";
import RECIPES from "./pages/RAGCookbook"


function App() {
  return (
    <BrowserRouter>
      <Routes>
      
        {/* Retrieval-Augmented Generation */}
        <Route path="/" element={<RECIPES />} />
        {/* <Route path="/rag-cookbook" element={<RECIPES />} /> */}
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;