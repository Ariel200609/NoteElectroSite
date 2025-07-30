import { motion } from 'framer-motion';
import { Zap, Plug } from 'lucide-react';

const Header = () => {
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
              <Plug className="w-6 h-6 text-black" />
            </div>
            <span className="text-2xl font-bold text-white">
              Note<span className="text-yellow-400">Electro</span>
            </span>
          </motion.div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-300 hover:text-white transition-colors">Inicio</a>
            <a href="#services" className="text-gray-300 hover:text-white transition-colors">Servicios</a>
            <a href="#about" className="text-gray-300 hover:text-white transition-colors">Sobre mí</a>
            <a href="#work" className="text-gray-300 hover:text-white transition-colors">Trabajos</a>
            <a href="#contact" className="text-gray-300 hover:text-white transition-colors">Contacto</a>
          </nav>

          {/* Mobile menu button */}
          <button className="md:hidden text-white">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </motion.header>
  );
};

export default Header; 