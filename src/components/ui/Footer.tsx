import { motion } from 'framer-motion';
import { Zap } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Logo */}
          <motion.div 
            className="flex items-center space-x-2 mb-6 md:mb-0"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="flex items-center space-x-1">
              <Zap className="w-6 h-6 text-yellow-400" />
            </div>
            <span className="text-2xl font-bold text-white">
              Note<span className="text-yellow-400">Electro</span>
            </span>
          </motion.div>

          {/* Copyright */}
          <div className="text-gray-400 text-center md:text-right">
            <p>© NoteElectro 2025 – Todos los derechos reservados.</p>
            <a 
              href="https://instagram.com/note.electro" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block mt-2 text-white/80 hover:text-white text-sm bg-white/5 hover:bg-white/10 px-3 py-1 rounded-full border border-white/10"
            >
              Creado por: <span className="font-semibold">&lt;byAriel&gt;</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 