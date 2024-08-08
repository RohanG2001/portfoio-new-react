import Home from "./components/Home";
import Navbar from "./components/navbar";
import About from "./components/about";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Projects from "./components/projects";
import Footer from "./components/Footer";
import GoToTopButton from "./components/GoToTopButton";


function App() {

  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
      <GoToTopButton />
    </>
  )
}

export default App
