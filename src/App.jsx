import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import LoadingScreen from "./components/LoadingScreen";
import Skills from "./components/Skills";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="bg-black text-white font-sans">
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main>
        <LoadingScreen/>
        <Hero />
        <About />
        <Projects />
        <Skills/>
        <Contact />
        <Footer/>
      </main>
    </div>
  );
}
