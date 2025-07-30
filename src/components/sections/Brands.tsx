import { motion } from 'framer-motion';
import { Zap, Shield, Award } from 'lucide-react';

const brands = [
  { name: 'Siemens', logo: '/api/placeholder/120/60', category: 'Industrial' },
  { name: 'Schneider Electric', logo: '/api/placeholder/120/60', category: 'Automation' },
  { name: 'ABB', logo: '/api/placeholder/120/60', category: 'Power' },
  { name: 'Eaton', logo: '/api/placeholder/120/60', category: 'Electrical' },
  { name: 'Legrand', logo: '/api/placeholder/120/60', category: 'Residential' },
  { name: 'Hager', logo: '/api/placeholder/120/60', category: 'Commercial' },
  { name: 'Schneider', logo: '/api/placeholder/120/60', category: 'Industrial' },
  { name: 'Siemens', logo: '/api/placeholder/120/60', category: 'Automation' },
  { name: 'ABB', logo: '/api/placeholder/120/60', category: 'Power' },
  { name: 'Eaton', logo: '/api/placeholder/120/60', category: 'Electrical' },
  { name: 'Legrand', logo: '/api/placeholder/120/60', category: 'Residential' },
  { name: 'Hager', logo: '/api/placeholder/120/60', category: 'Commercial' },
];

const Brands = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-gray-50 to-blue-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-72 h-72 bg-yellow-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center space-x-4 mb-6">
            <Shield className="w-8 h-8 text-yellow-500" />
            <Award className="w-8 h-8 text-blue-500" />
            <Zap className="w-8 h-8 text-yellow-500" />
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Acá lo importante es la{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-blue-600">
              calidad
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Trabajamos con las mejores marcas del mercado para garantizar la máxima calidad y durabilidad en todos nuestros proyectos
          </p>
        </motion.div>

        {/* Brands Carousel */}
        <div className="relative">
          {/* Gradient overlays for smooth fade effect */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-gray-50 to-transparent z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-gray-50 to-transparent z-10"></div>
          
          {/* Carousel Container */}
          <div className="overflow-hidden">
            <motion.div
              className="flex space-x-12"
              animate={{
                x: [0, -50 * brands.length]
              }}
              transition={{
                duration: 30,
                repeat: Infinity,
                ease: "linear"
              }}
            >
              {/* First set of brands */}
              {brands.map((brand, index) => (
                <motion.div
                  key={`first-${index}`}
                  className="flex-shrink-0"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 min-w-[200px]">
                    <div className="h-16 bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg flex items-center justify-center mb-3">
                      <div className="text-center">
                        <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mx-auto mb-2">
                          <Zap className="w-6 h-6 text-white" />
                        </div>
                        <p className="text-sm font-semibold text-gray-700">{brand.name}</p>
                      </div>
                    </div>
                    <p className="text-xs text-gray-500 text-center">{brand.category}</p>
                  </div>
                </motion.div>
              ))}
              
              {/* Duplicate set for seamless loop */}
              {brands.map((brand, index) => (
                <motion.div
                  key={`second-${index}`}
                  className="flex-shrink-0"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 min-w-[200px]">
                    <div className="h-16 bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg flex items-center justify-center mb-3">
                      <div className="text-center">
                        <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mx-auto mb-2">
                          <Zap className="w-6 h-6 text-white" />
                        </div>
                        <p className="text-sm font-semibold text-gray-700">{brand.name}</p>
                      </div>
                    </div>
                    <p className="text-xs text-gray-500 text-center">{brand.category}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Quality indicators */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16"
        >
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Garantía</h3>
            <p className="text-gray-600">Todos nuestros trabajos incluyen garantía completa</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Award className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Certificaciones</h3>
            <p className="text-gray-600">Técnicos certificados y autorizados</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Zap className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Calidad Premium</h3>
            <p className="text-gray-600">Materiales de primera línea en todos los proyectos</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Brands; 