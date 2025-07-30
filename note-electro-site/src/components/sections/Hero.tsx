import { motion } from 'framer-motion';
import { ArrowRight, Zap, Plug } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 flex items-center justify-center relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_#FFD700_1px,transparent_1px)] bg-[length:50px_50px] animate-pulse opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/10 via-transparent to-black/20"></div>
      </div>

      {/* Floating elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ 
            y: [0, -20, 0],
            rotate: [0, 5, 0]
          }}
          transition={{ 
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-20 left-20 w-32 h-32 bg-yellow-500/20 rounded-full blur-xl"
        />
        <motion.div
          animate={{ 
            y: [0, 20, 0],
            rotate: [0, -5, 0]
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-20 right-20 w-40 h-40 bg-black/20 rounded-full blur-xl"
        />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto"
        >
          {/* 3D Logo animation */}
          <motion.div
            initial={{ scale: 0, rotateY: 0 }}
            animate={{ scale: 1, rotateY: 360 }}
            transition={{ duration: 1.2, delay: 0.2 }}
            className="flex items-center justify-center mb-8"
          >
            <div className="relative">
              {/* 3D Logo Container */}
              <div className="bg-white rounded-full p-8 shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
                <div className="relative">
                  {/* Circle outline */}
                  <div className="w-32 h-32 border-4 border-black rounded-full flex items-center justify-center bg-white">
                    {/* Lightning bolt */}
                    <Zap className="w-16 h-16 text-yellow-400 absolute z-10" />
                    {/* Plug */}
                    <Plug className="w-12 h-12 text-black absolute z-20" />
                  </div>
                </div>
              </div>
              
              {/* 3D Shadow effect */}
              <div className="absolute inset-0 bg-black/20 rounded-full blur-xl -z-10 transform translate-y-2"></div>
            </div>
          </motion.div>

          {/* Logo Text */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mb-8"
          >
            <h1 className="text-6xl md:text-8xl font-bold text-white mb-4">
              <span className="text-white">NOTE</span>
              <span className="text-yellow-400">ELECTRO</span>
            </h1>
          </motion.div>

          <motion.h2 
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            Soluciones eléctricas{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-500">
              profesionales
            </span>{' '}
            para industrias y hogares
          </motion.h2>

          <motion.p 
            className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
          >
            Francisco Fernández – Electricista profesional
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.button
              className="bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-black font-bold py-4 px-8 rounded-full text-lg flex items-center space-x-3 transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-yellow-500/25"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Solicitá tu presupuesto</span>
              <ArrowRight className="w-5 h-5" />
            </motion.button>

            <motion.a
              href="#services"
              className="text-white/80 hover:text-white font-medium py-4 px-8 rounded-full border border-white/20 hover:bg-white/10 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
            >
              Ver servicios
            </motion.a>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 max-w-2xl mx-auto"
          >
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-400 mb-2">15+</div>
              <div className="text-gray-400">Años de experiencia</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-400 mb-2">500+</div>
              <div className="text-gray-400">Proyectos completados</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-400 mb-2">100%</div>
              <div className="text-gray-400">Clientes satisfechos</div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-yellow-400/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-yellow-400/50 rounded-full mt-2 animate-bounce"></div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero; 