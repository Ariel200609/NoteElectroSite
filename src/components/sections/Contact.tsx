import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, MessageCircle, Clock, Star } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_#3b82f6_1px,transparent_1px)] bg-[length:50px_50px]"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Contáctanos
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Solicita tu presupuesto o consulta sobre nuestros servicios
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
            whileHover={{ y: -10 }}
            className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300"
          >
            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mb-6 mx-auto">
              <Phone className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-4 text-center">WhatsApp</h3>
            <p className="text-gray-300 text-center">+54 9 2923 447567</p>
            <p className="text-blue-300 text-sm text-center mt-2">Respuesta inmediata</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            whileHover={{ y: -10 }}
            className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300"
          >
            <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center mb-6 mx-auto">
              <Mail className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-4 text-center">Email</h3>
            <p className="text-gray-300 text-center">francisco@notelectro.com</p>
            <p className="text-orange-300 text-sm text-center mt-2">Respuesta en 24h</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            whileHover={{ y: -10 }}
            className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300"
          >
            <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center mb-6 mx-auto">
              <MapPin className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-4 text-center">Zona de trabajo</h3>
            <p className="text-gray-300 text-center">Buenos Aires y alrededores</p>
            <p className="text-green-300 text-sm text-center mt-2">Servicio móvil</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            whileHover={{ y: -10 }}
            className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300"
          >
            <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center mb-6 mx-auto">
              <MessageCircle className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-4 text-center">Redes sociales</h3>
            <p className="text-gray-300 text-center">Instagram, Facebook</p>
            <p className="text-purple-300 text-sm text-center mt-2">Síguenos</p>
          </motion.div>
        </div>

        {/* Horarios */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 max-w-2xl mx-auto"
        >
          <div className="flex items-center justify-center mb-6">
            <Clock className="w-8 h-8 text-blue-400 mr-3" />
            <h3 className="text-2xl font-bold text-white">Horarios de atención</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div>
              <p className="text-white font-semibold">Lunes a Viernes</p>
              <p className="text-gray-300">8:00 - 18:00</p>
            </div>
            <div>
              <p className="text-white font-semibold">Sábados</p>
              <p className="text-gray-300">8:00 - 12:00</p>
            </div>
            <div>
              <p className="text-white font-semibold">Emergencias</p>
              <p className="text-orange-400 font-semibold">24/7</p>
            </div>
          </div>
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <motion.a
            href="https://wa.me/5492923447567"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-3 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-semibold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Phone className="w-5 h-5" />
            <span>Contactar por WhatsApp</span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact; 