import { motion } from 'framer-motion';
import { Zap } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Logo */}
          <motion.div 
            className="flex items-center space-x-2 mb-4 md:mb-0"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="flex items-center space-x-1">
              <Zap className="w-6 h-6 text-yellow-400" />
            </div>
            <span className="text-xl font-bold text-white">
              Note<span className="text-yellow-400">Electro</span>
            </span>
          </motion.div>

          {/* Copyright */}
          <div className="text-center md:text-right">
            <p className="text-gray-400 text-sm">
              © NoteElectro 2025 – Todos los derechos reservados.
            </p>
            <p className="text-gray-500 text-xs mt-1">
              Francisco Fernández - Electricista profesional
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 