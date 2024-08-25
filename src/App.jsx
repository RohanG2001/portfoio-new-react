import { useState, useEffect } from 'react';
import Home from "./components/Home";
import Navbar from "./components/navbar";
import About from "./components/about";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Projects from "./components/projects";
import Footer from "./components/Footer";
import GoToTopButton from "./components/GoToTopButton";
import LoadingScreen from "./components/LoadingScreen"; // Import the LoadingScreen component

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time (e.g., fetching data)
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000); // Adjust the time as needed

    // Cleanup the timeout on component unmount
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isLoading ? (
        <LoadingScreen /> // Show loading screen while loading
      ) : (
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
      )}
    </>
  );
}

export default App;