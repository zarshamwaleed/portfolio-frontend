import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
// Pages
import Home from "./pages/Home";
import About from "./sections/About";
import Skills from "./sections/skills";
import Project from "./sections/Projects"
import Contact from "./sections/Contact";
import Experience from "./sections/Experience";
import Hero from"./sections/Hero";
import CertificationPage from "./sections/Certificates";
import ReviewPage from "./sections/review";
import BlogPage from "./pages/Blog";
import PrivacyPolicy from "./components/Privacy&Terms";
import ServicesPage from "./sections/Services";

export default function App() {
  return (
    <Router>
      <Navbar />
      
      {/* Ensure no extra margin below pages */}
      <main className="pt-10 pb-0 m-0">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Project />} /> 
          <Route path="/contact" element={<Contact />} /> 
          <Route path="/experience" element={<Experience />} /> 
          <Route path="/hero" element={<Hero />} /> 
          <Route path="/certificates" element={<CertificationPage />} /> 
          <Route path="/reviews" element={<ReviewPage />} /> 
          <Route path="/blog" element={< BlogPage/>} /> 
          <Route path="/privacy&terms" element={< PrivacyPolicy/>} /> 
          <Route path="/services" element={< ServicesPage/>} /> 
        </Routes>
      </main>

      {/* Footer attaches directly after content */}
      <Footer />
    </Router>
  );
}

