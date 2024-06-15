import React from 'react';
import Navbar from './components/navbar/Navbar';
import Home from './components/home/Home';
import Projects from './components/projects/Projects';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import { Element } from 'react-scroll';

function App() {
  return (
    <div className="dark:bg-neutral-900 dark:text-white">
      <Navbar />
      <Element name="inicio" className="element">
        <Home />
      </Element>
      <Element name="proyectos" className="element">
        <Projects />
      </Element>
      <Element name="contacto" className="element">
        <Contact />
      </Element>
      <Footer />
    </div>
  );
}

export default App;
