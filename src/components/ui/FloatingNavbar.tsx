import { motion, AnimatePresence } from 'framer-motion';
import { itemsNavbar } from '../../data/navbar';
import MotionTransition from './MotionTransition';
import { useState, useEffect } from 'react';

const FloatingNavbar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Mostrar navbar cuando se hace scroll hacia arriba o está en la parte superior
      if (currentScrollY < lastScrollY || currentScrollY < 100) {
        setIsVisible(true);
      } 
      // Ocultar navbar cuando se hace scroll hacia abajo y no está en la parte superior
      else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId.replace('#', ''));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -50, opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="fixed z-40 flex flex-col items-center justify-center w-full top-4"
        >
          <nav>
            <div className="flex items-center justify-center gap-2 px-2 py-2 rounded-full bg-gray-900/90 backdrop-blur-md border border-gray-700 shadow-2xl shadow-yellow-400/20">
              {itemsNavbar.map((item) => {
                const IconComponent = item.icon;
                return (
                  <motion.div
                    key={item.id}
                    className="px-4 py-2 transition duration-300 rounded-full cursor-pointer text-gray-300 hover:text-yellow-400 hover:bg-yellow-400/10"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => scrollToSection(item.link)}
                  >
                    <IconComponent className="w-5 h-5" />
                  </motion.div>
                );
              })}
            </div>
          </nav>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default FloatingNavbar; 