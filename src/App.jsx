import React from "react";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import Projects from "./components/projects/Projects";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="dark:bg-neutral-900 dark:text-white">
      <Navbar />
      <div id="inicio">
        <Home />
      </div>
      <div id="proyectos">
        <Projects />
      </div>
      <div id="contacto">
        <Contact />
      </div>
      <Footer />
    </div>
  );
}

export default App;
