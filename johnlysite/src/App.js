import "./App.css";

import Navbar from "./components/Navbar";
import Landing from "./components/Landing";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

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
    </div>
  );
}

export default App;
