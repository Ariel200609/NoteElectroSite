import { motion } from 'framer-motion';
import { Award, Clock, Shield, Zap, Star } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-orange-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative">
              <div className="w-full h-96 bg-gradient-to-br from-blue-600 via-blue-500 to-orange-500 rounded-3xl relative overflow-hidden shadow-2xl">
                {/* Animated background */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-orange-500/20"></div>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,_#ffffff_1px,transparent_1px)] bg-[length:20px_20px] opacity-20"></div>
                
                {/* Content overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-white">
                    <motion.div 
                      className="w-32 h-32 bg-white/20 rounded-full mx-auto mb-6 flex items-center justify-center backdrop-blur-sm border border-white/30"
                      animate={{ 
                        scale: [1, 1.05, 1],
                        rotate: [0, 5, 0]
                      }}
                      transition={{ 
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    >
                      <Zap className="w-16 h-16 text-white" />
                    </motion.div>
                    <p className="text-xl font-semibold mb-2">Francisco Fernández</p>
                    <p className="text-sm opacity-90">Electricista Profesional</p>
                  </div>
                </div>
              </div>
              
              {/* Floating badge */}
              <motion.div 
                className="absolute -bottom-6 -right-6 w-28 h-28 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center shadow-xl"
                animate={{ 
                  y: [0, -10, 0],
                  rotate: [0, 5, 0]
                }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <Award className="w-12 h-12 text-white" />
              </motion.div>

              {/* Stats badges */}
              <div className="absolute -top-4 -left-4 bg-white rounded-2xl p-4 shadow-lg border border-gray-100">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">15+</div>
                  <div className="text-xs text-gray-600">Años</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Sobre <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-orange-600">mí</span>
            </h2>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Francisco Fernández, más de 15 años de experiencia en electricidad industrial y domiciliaria. 
              Trabajo seguro, rápido y responsable.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <motion.div 
                className="flex items-center space-x-4 p-4 bg-gradient-to-r from-blue-50 to-blue-100 rounded-2xl border border-blue-200"
                whileHover={{ scale: 1.02, x: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">15+ Años</h4>
                  <p className="text-gray-600 text-sm">De experiencia</p>
                </div>
              </motion.div>

              <motion.div 
                className="flex items-center space-x-4 p-4 bg-gradient-to-r from-orange-50 to-orange-100 rounded-2xl border border-orange-200"
                whileHover={{ scale: 1.02, x: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl flex items-center justify-center shadow-lg">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Trabajo Seguro</h4>
                  <p className="text-gray-600 text-sm">Certificaciones</p>
                </div>
              </motion.div>

              <motion.div 
                className="flex items-center space-x-4 p-4 bg-gradient-to-r from-green-50 to-green-100 rounded-2xl border border-green-200"
                whileHover={{ scale: 1.02, x: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-xl flex items-center justify-center shadow-lg">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Rápido</h4>
                  <p className="text-gray-600 text-sm">Servicio eficiente</p>
                </div>
              </motion.div>

              <motion.div 
                className="flex items-center space-x-4 p-4 bg-gradient-to-r from-purple-50 to-purple-100 rounded-2xl border border-purple-200"
                whileHover={{ scale: 1.02, x: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                  <Star className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Responsable</h4>
                  <p className="text-gray-600 text-sm">Compromiso total</p>
                </div>
              </motion.div>
            </div>

            <motion.button
              className="bg-gradient-to-r from-blue-600 to-orange-600 hover:from-blue-700 hover:to-orange-700 text-white font-semibold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Conocer más
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About; 