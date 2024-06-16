import React, { useState } from 'react';
import { Link as ScrollLink, animateScroll as scroll, Element } from 'react-scroll';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [theme, setTheme] = useState(() => {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return "dark";
    }
    return "light";
  });

  const handleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const menuClasses = `w-full block flex-grow sm:flex sm:items-center sm:w-auto ${isMenuOpen ? '' : 'hidden'} ${theme === 'dark' ? 'dark:bg-neutral-900 dark:text-white' : ''}`;

  return (
    <nav className={`bg-teal-500 shadow-lg w-full z-10 fixed top-0 ${theme === 'dark' ? 'dark:bg-neutral-900 dark:text-white' : ''}`}>
      <div className="max-w-screen-lg mx-auto px-6">
        <div className="flex items-center justify-between flex-wrap py-6">
          <div className="flex items-center flex-shrink-0 text-white">
            <span className="font-semibold text-3xl tracking-tight text-white">Mi Portfolio</span>
          </div>
          <div className="block sm:hidden">
            <button
              id="boton"
              className="flex items-center px-4 text-teal-200 hover:text-white hover:border-white"
              onClick={handleMenu}
            >
              <svg
                className="fill-current h-4 w-4"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Menu</title>
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
              </svg>
            </button>
          </div>
          <div id="menu" className={menuClasses}>
            <div className="text-xl sm:flex-grow flex flex-col sm:flex-row items-start sm:justify-end">
              <ScrollLink
                to="inicio"
                spy={true}
                smooth={true}
                duration={500}
                activeClass="active"
                className="block mt-4 sm:mt-0 sm:mr-4 text-teal-200 cursor-pointer"
                onClick={closeMenu}
              >
                Inicio
              </ScrollLink>
              <ScrollLink
                to="proyectos"
                spy={true}
                smooth={true}
                duration={500}
                activeClass="active"
                className="block mt-4 sm:mt-0 sm:mr-4 text-teal-200 cursor-pointer"
                onClick={closeMenu}
              >
                Proyectos
              </ScrollLink>
              <ScrollLink
                to="contacto"
                spy={true}
                smooth={true}
                duration={500}
                activeClass="active"
                className="block mt-4 sm:mt-0 text-teal-200 cursor-pointer"
                onClick={closeMenu}
              >
                Contacto
              </ScrollLink>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
