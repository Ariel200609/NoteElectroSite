import { motion } from 'framer-motion';
import { Zap } from 'lucide-react';

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
            </div>
            <span className="text-2xl font-bold text-white">
              Note<span className="text-yellow-400">Electro</span>
            </span>
          </motion.div>
        </div>
      </div>
    </motion.header>
  );
};

export default Header; 