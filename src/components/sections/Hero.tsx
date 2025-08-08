import { motion } from 'framer-motion';
import { ArrowRight, Zap, MessageCircle, Instagram, Phone, Mail } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 flex items-center justify-center relative overflow-hidden pt-20">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_#FFD700_1px,transparent_1px)] bg-[length:50px_50px] animate-pulse opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/10 via-transparent to-black/20"></div>
        {/* Electric glow vignette */}
        <div className="absolute -inset-8 bg-[radial-gradient(circle_at_50%_40%,_rgba(250,204,21,0.12),transparent_60%)]" />
        {/**/}
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
        {/**/}
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-screen">
          {/* Logo Section - Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center lg:items-start justify-center"
          >
            {/* Enhanced Logo animation (subtle and elegant) */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
              whileHover={{
                scale: 1.03,
                rotate: [0, 1.8, -1.8, 1.2, -1.2, 0],
                x: [0, -1.5, 1.5, -1, 1, 0],
                transition: { duration: 0.45, ease: 'easeInOut' }
              }}
              whileTap={{ scale: 0.98 }}
              className="mb-8 will-change-transform"
            >
              <div className="relative">
                {/* Enhanced Logo Container */}
                <div className="bg-gradient-to-br from-white to-gray-100 rounded-full p-10 shadow-2xl hover:shadow-yellow-500/25 transition-shadow duration-500">
                  <div className="relative">
                    {/* Enhanced Circle outline */}
                    <div className="w-44 h-44 border-4 border-black rounded-full flex items-center justify-center bg-gradient-to-br from-white to-gray-50 shadow-inner">
                      {/* Real Logo Image */}
                      <img 
                        src="./LogoNote.png" 
                        alt="NoteElectro Logo" 
                        className="w-32 h-32 object-contain rounded-full"
                      />
                      {/* Electric pulse ring (elegant) */}
                      <motion.div
                        className="pointer-events-none absolute inset-0 rounded-full"
                        initial={{ boxShadow: '0 0 0 0 rgba(250,204,21,0.0)' }}
                        animate={{ boxShadow: [
                          '0 0 0 0 rgba(250,204,21,0.0)',
                          '0 0 36px 8px rgba(250,204,21,0.35)',
                          '0 0 0 0 rgba(250,204,21,0.0)'
                        ]}}
                        transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
                      />
                    </div>
                  </div>
                </div>
                
                {/* Enhanced 3D Shadow effect */}
                <div className="absolute inset-0 bg-black/30 rounded-full blur-xl -z-10 transform translate-y-3"></div>
                <div className="absolute inset-0 bg-yellow-500/10 rounded-full blur-2xl -z-20 transform translate-y-6"></div>
              </div>
            </motion.div>

            {/* Logo Text */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-center lg:text-left"
            >
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4">
                <span className="text-white">Note</span>
                <motion.span
                  className="text-yellow-400"
                  animate={{ opacity: [0.9, 1, 0.85, 1], filter: ['drop-shadow(0 0 0 rgba(250,204,21,0))','drop-shadow(0 0 8px rgba(250,204,21,0.6))','drop-shadow(0 0 0 rgba(250,204,21,0))','drop-shadow(0 0 10px rgba(250,204,21,0.8))'] }}
                  transition={{ duration: 2.5, repeat: Infinity }}
                >
                  Electro
                </motion.span>
              </h1>
            </motion.div>
          </motion.div>

          {/* Text Section - Right Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col justify-center text-center lg:text-left"
          >
            <motion.h2 
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight"
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
              className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto lg:mx-0"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
            >
              Francisco Fernández – Electricista profesional
            </motion.p>

            {/* Enhanced Contact Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="mb-8"
            >
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <h3 className="text-white font-semibold mb-4 text-center lg:text-left">Contacto directo</h3>
                <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                  {/* WhatsApp */}
                  <motion.a
                    href="https://wa.me/5492923447567?text=¡Hola! 👋 Vi tu página web y me gustaría consultar sobre servicios eléctricos. ¿Podrías ayudarme? ⚡"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 bg-green-500 hover:bg-green-600 px-4 py-2 rounded-full text-white font-medium transition-all duration-300 transform hover:scale-105"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <MessageCircle className="w-5 h-5" />
                    <span>WhatsApp</span>
                  </motion.a>

                  {/* Phone */}
                  <motion.a
                    href="tel:+5492923447567"
                    className="flex items-center space-x-2 bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-full text-white font-medium transition-all duration-300 transform hover:scale-105"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Phone className="w-5 h-5" />
                    <span>Llamar</span>
                  </motion.a>

                  {/* Email */}
                  <motion.a
                    href="mailto:francisco@notelectro.com"
                    className="flex items-center space-x-2 bg-orange-500 hover:bg-orange-600 px-4 py-2 rounded-full text-white font-medium transition-all duration-300 transform hover:scale-105"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Mail className="w-5 h-5" />
                    <span>Email</span>
                  </motion.a>
                </div>
              </div>
            </motion.div>

            {/* Social Media Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.4 }}
              className="mb-8"
            >
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <h3 className="text-white font-semibold mb-4 text-center lg:text-left">Síguenos</h3>
                <div className="flex gap-4 justify-center lg:justify-start">
                  {/* Instagram */}
                  <motion.a
                    href="https://instagram.com/note.electro"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Instagram className="w-6 h-6 text-white" />
                  </motion.a>

                  {/* Facebook */}
                  <motion.a
                    href="https://facebook.com/notelectro"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-blue-600 hover:bg-blue-700 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </motion.a>

                  {/* LinkedIn */}
                  {/*<motion.a
                    href="https://linkedin.com/company/notelectro"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-blue-700 hover:bg-blue-800 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </motion.a>*/}
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
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