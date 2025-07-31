import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const projects = [
  {
    title: 'Energía Solar',
    description: 'Instalación de sistemas de energía solar',
    image: './EnergiaSolar.png',
    category: 'Industrial'
  },
  {
    title: 'Refrigeración',
    description: 'Mantenimiento y reparación de sistemas de refrigeración',
    image: './refrigeracion.png',
    category: 'Comercial'
  },
  {
    title: 'Riegos Artificial',
    description: 'Instalación de riegos artificiales',
    image: './riegosArtificiales.png',
    category: 'Residencial'
  },
  {
    title: 'Hasta el Minimo Detalle',
    description: 'Programa de mantenimiento para empresa logística',
    image: './detalles.png',
    category: 'Mantenimiento'
  },
  {
    title: 'Movimiento de Suelos',
    description: 'Reubicación de instalaciones eléctricas existentes',
    image: './moviminetosSuelo.png',
    category: 'Movimiento'
  },
  {
    title: 'Sistema de Emergencia',
    description: 'Instalación de sistema de emergencia para hospital',
    image: './urgencia.jpg',
    category: 'Emergencia'
  }
];

const Work = () => {
  return (
    <section id="work" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Projects */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Nuestros <span className="text-blue-600">Trabajos</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Proyectos destacados y trabajos realizados
          </p>
        </motion.div>

        {/* Project Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <div className="h-48 bg-gradient-to-br from-blue-500 to-orange-500 relative overflow-hidden">
                {project.image.includes('moviminetosSuelo') || project.image.includes('urgencia') || project.image.includes('detalles') || project.image.includes('riegosArtificiales') || project.image.includes('refrigeracion') || project.image.includes('EnergiaSolar') ? (
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      console.log('Error loading image:', project.image);
                      (e.target as HTMLImageElement).style.display = 'none';
                    }}
                  />
                ) : (
                  <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                    <div className="text-center text-white">
                      <div className="w-16 h-16 bg-white/20 rounded-full mx-auto mb-2 flex items-center justify-center">
                        <Star className="w-8 h-8" />
                      </div>
                      <p className="text-sm opacity-90">{project.category}</p>
                    </div>
                  </div>
                )}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600">
                  {project.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Client Logos */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-8">
            Empresas que confían en nosotros
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            {[
              './cliente (1).png',
              './cliente (2).png',
              './cliente (3).png',
              './cliente (4).png',
              './cliente (5).png',
              './cliente (6).png',
              './cliente (7).png',
              './cliente (8).png',
            ].map((image, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="h-24 bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200"
              >
                <img 
                  src={image} 
                  alt={`Cliente ${index + 2}`}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    console.log('Error loading client image:', image);
                    (e.target as HTMLImageElement).style.display = 'none';
                  }}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Work; 