import About from "./components/About";
import Contact from "./components/Contact";
import Education from "./components/Education";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import OperatorSection from "./components/OperatorSection";
import Projects from "./components/Projects";
import SectionTimeline from "./components/SectionTimeline";
import Skills from "./components/Skills";

export default function App() {
  return (
    <>
      <Navbar />
      <SectionTimeline />
      <main>
        <Hero />
        <About />
        <OperatorSection />
        <Projects />
        <Skills />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
