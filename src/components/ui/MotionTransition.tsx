import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface MotionTransitionProps {
  children: ReactNode;
  className?: string;
  position?: "right" | "left" | "top" | "bottom";
}

const MotionTransition = ({ children, className, position = "right" }: MotionTransitionProps) => {
  const positionVariants = {
    right: {
      initial: { x: 100, opacity: 0 },
      animate: { x: 0, opacity: 1 },
      exit: { x: 100, opacity: 0 }
    },
    left: {
      initial: { x: -100, opacity: 0 },
      animate: { x: 0, opacity: 1 },
      exit: { x: -100, opacity: 0 }
    },
    top: {
      initial: { y: -100, opacity: 0 },
      animate: { y: 0, opacity: 1 },
      exit: { y: -100, opacity: 0 }
    },
    bottom: {
      initial: { y: 100, opacity: 0 },
      animate: { y: 0, opacity: 1 },
      exit: { y: 100, opacity: 0 }
    }
  };

  return (
    <motion.div
      initial={positionVariants[position].initial}
      animate={positionVariants[position].animate}
      exit={positionVariants[position].exit}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default MotionTransition; 