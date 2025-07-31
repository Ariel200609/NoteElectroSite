import { motion } from 'framer-motion';
import { Factory, Wrench, Shield, Move, Snowflake } from 'lucide-react';

const services = [
  {
    icon: Factory,
    title: 'Instalaciones industriales',
    description: 'Instalaciones eléctricas completas para industrias, fábricas y plantas de producción con los más altos estándares de seguridad.',
    bgColor: 'bg-blue-500',
    gradientFrom: 'from-blue-500',
    gradientTo: 'to-blue-600',
    bgGradient: 'from-blue-500/20 to-blue-600/20'
  },
  {
    icon: Wrench,
    title: 'Reparaciones eléctricas',
    description: 'Servicio de reparación rápida y eficiente para todo tipo de problemas eléctricos en hogares y empresas.',
    bgColor: 'bg-orange-500',
    gradientFrom: 'from-orange-500',
    gradientTo: 'to-orange-600',
    bgGradient: 'from-orange-500/20 to-orange-600/20'
  },
  {
    icon: Shield,
    title: 'Mantenimiento preventivo',
    description: 'Programas de mantenimiento preventivo para evitar fallas y garantizar el funcionamiento óptimo de sus instalaciones.',
    bgColor: 'bg-green-500',
    gradientFrom: 'from-green-500',
    gradientTo: 'to-green-600',
    bgGradient: 'from-green-500/20 to-green-600/20'
  },
  {
    icon: Move,
    title: 'Movimientos de suelos',
    description: 'Servicios especializados en movimientos de suelos y reubicación de instalaciones eléctricas existentes.',
    bgColor: 'bg-purple-500',
    gradientFrom: 'from-purple-500',
    gradientTo: 'to-purple-600',
    bgGradient: 'from-purple-500/20 to-purple-600/20'
  },
  {
    icon: Snowflake,
    title: 'Aires acondicionados',
    description: 'Instalación, reparación y mantenimiento de sistemas de aire acondicionado residenciales e industriales.',
    bgColor: 'bg-cyan-500',
    gradientFrom: 'from-cyan-500',
    gradientTo: 'to-cyan-600',
    bgGradient: 'from-cyan-500/20 to-cyan-600/20'
  }
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Nuestros <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-orange-600">Servicios</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Soluciones eléctricas integrales para industrias y hogares con la más alta calidad y profesionalismo
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/50 to-white/80 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative bg-white rounded-3xl p-6 lg:p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 group-hover:border-blue-200">
                <div className={`w-16 h-16 lg:w-20 lg:h-20 rounded-2xl bg-gradient-to-r ${service.gradientFrom} ${service.gradientTo} flex items-center justify-center mb-4 lg:mb-6 mx-auto shadow-lg group-hover:shadow-xl transition-shadow duration-300`}>
                  <service.icon className="w-8 h-8 lg:w-10 lg:h-10 text-white" />
                </div>
                <h3 className="text-lg lg:text-xl font-bold text-gray-900 mb-3 lg:mb-4 text-center group-hover:text-blue-600 transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-sm lg:text-base text-gray-600 text-center leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                  {service.description}
                </p>
                
                {/* Hover effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.bgGradient} rounded-3xl opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-blue-600 to-orange-600 rounded-3xl p-8 md:p-12 shadow-2xl">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              ¿Necesitas un presupuesto personalizado?
            </h3>
            <p className="text-white/90 text-lg mb-6 max-w-2xl mx-auto">
              Contáctanos para recibir una propuesta adaptada a tus necesidades específicas
            </p>
            <motion.a
              href="https://wa.me/5492923659973?text=¡Hola!  Vi tu página web y me gustaría consultar sobre un presupuesto para servicios eléctricos. ¿Podrías ayudarme? "
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white text-blue-600 font-semibold py-4 px-8 rounded-full text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Solicitar presupuesto
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services; 