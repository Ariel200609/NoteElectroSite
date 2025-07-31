import { motion, AnimatePresence } from 'framer-motion';
import { Zap, Menu, X } from 'lucide-react';
import { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    closeMenu();
  };

  return (
    <motion.header 
      className="fixed top-0 left-0 right-0 z-50 bg-gray-900/95 backdrop-blur-sm border-b border-gray-800"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div 
            className="flex items-center space-x-2"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="flex items-center space-x-1">
              <Zap className="w-8 h-8 text-yellow-400" />
            </div>
            <span className="text-2xl font-bold text-white">
              Note<span className="text-yellow-400">Electro</span>
            </span>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-300 hover:text-white transition-colors">Inicio</a>
            <a href="#services" className="text-gray-300 hover:text-white transition-colors">Servicios</a>
            <a href="#about" className="text-gray-300 hover:text-white transition-colors">Sobre mí</a>
            <a href="#work" className="text-gray-300 hover:text-white transition-colors">Trabajos</a>
            <a href="#contact" className="text-gray-300 hover:text-white transition-colors">Contacto</a>
          </nav>

          {/* Mobile menu button */}
          <button 
            className="md:hidden text-white p-2 hover:bg-gray-800 rounded-lg transition-colors"
            onClick={toggleMenu}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.nav
              className="md:hidden mt-4 pb-4 border-t border-gray-800"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex flex-col items-center space-y-4 pt-4">
                <button 
                  onClick={() => scrollToSection('home')}
                  className="text-gray-300 hover:text-white transition-colors py-2 px-4 w-full text-center"
                >
                  Inicio
                </button>
                <button 
                  onClick={() => scrollToSection('services')}
                  className="text-gray-300 hover:text-white transition-colors py-2 px-4 w-full text-center"
                >
                  Servicios
                </button>
                <button 
                  onClick={() => scrollToSection('about')}
                  className="text-gray-300 hover:text-white transition-colors py-2 px-4 w-full text-center"
                >
                  Sobre mí
                </button>
                <button 
                  onClick={() => scrollToSection('work')}
                  className="text-gray-300 hover:text-white transition-colors py-2 px-4 w-full text-center"
                >
                  Trabajos
                </button>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="text-gray-300 hover:text-white transition-colors py-2 px-4 w-full text-center"
                >
                  Contacto
                </button>
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
};

export default Header; 