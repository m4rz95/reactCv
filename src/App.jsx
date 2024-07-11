import "./App.css";
import Home from "./pages/Home";
import Experience from "./components/Experience";
import DetailPortfolio from "./pages/DetailPortfolio";
import PageNotFound from "./pages/PageNotFound";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/portfolio/:id" element={<DetailPortfolio />} />
        <Route path="/page-not-found" element={<PageNotFound />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
