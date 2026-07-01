import { HashRouter, Routes, Route } from "react-router-dom";
import RECIPES from "./pages/RAGCookbook";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<RECIPES />} />
      </Routes>
    </HashRouter>
  );
}

export default App;