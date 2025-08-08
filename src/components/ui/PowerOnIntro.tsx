import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const PowerOnIntro = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(false), 2200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed inset-0 z-[70] bg-black"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Subtle background gradient and grid */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black" />
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_50%_50%,_#facc15_1px,transparent_1px)] bg-[length:40px_40px]" />
          </div>

          {/* Center content */}
          <div className="relative h-full w-full flex items-center justify-center">
            {/* Glow pulse */}
            <motion.div
              className="absolute w-72 h-72 rounded-full bg-yellow-400/10 blur-3xl"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: [0.9, 1.05, 1], opacity: [0.2, 0.4, 0.25] }}
              transition={{ duration: 2, ease: 'easeInOut' }}
            />

            {/* Logo badge */}
            <motion.div
              className="relative w-48 h-48 rounded-full bg-white/10 border border-white/20 backdrop-blur flex items-center justify-center shadow-2xl"
              initial={{ scale: 0.7, opacity: 0 }}
              animate={{ scale: [0.7, 1.05, 1], opacity: [0, 1, 1] }}
              transition={{ duration: 0.9, ease: 'easeOut' }}
            >
              {/* Spinning ring */}
              <motion.div
                className="absolute inset-0 rounded-full border-2 border-yellow-400/30"
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
              />
              {/* Inner ring */}
              <motion.div
                className="absolute inset-[12px] rounded-full border border-white/20"
                animate={{ rotate: -360 }}
                transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
              />
              <img
                src="./LogoNote.png"
                alt="NoteElectro Logo"
                className="w-28 h-28 object-contain rounded-full"
              />
            </motion.div>

            {/* Lightning flash */}
            <motion.svg
              width="220"
              height="220"
              viewBox="0 0 220 220"
              className="absolute"
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 1, 0, 1, 0] }}
              transition={{ times: [0, 0.2, 0.35, 0.5, 0.7], duration: 1.2, ease: 'easeInOut' }}
            >
              <motion.path
                d="M120 20 L80 110 H120 L100 200 L160 100 H120 Z"
                fill="#facc15"
                stroke="#fde68a"
                strokeWidth="6"
                filter="url(#glow)"
              />
              <defs>
                <filter id="glow">
                  <feGaussianBlur stdDeviation="4" result="coloredBlur" />
                  <feMerge>
                    <feMergeNode in="coloredBlur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>
            </motion.svg>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PowerOnIntro;

