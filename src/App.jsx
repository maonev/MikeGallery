import { Routes, Route, ScrollRestoration } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { AboutPage } from "./pages/About/AboutPage";
import { WorkPage } from "./pages/Work/WorkPage";
import { ExperiencePage } from "./pages/Experience/ExperiencePage";
import { HomePage } from "./pages/Home/HomePage";

function App() {
  return (
    <div className="min-h-screen bg-dark">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/work" element={<WorkPage />} />
        <Route path="/experience" element={<ExperiencePage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
