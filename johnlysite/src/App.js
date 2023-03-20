import "./App.css";

import Navbar from "./components/Navbar";
import Landing from "./components/Landing";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import { useEffect } from "react";

function App() {
  useEffect(() => {
    document.title = "John Ly";
  }, []);

  return (
    <div className="App">
      <Navbar />
      <Landing />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
