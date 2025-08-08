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
          {/* Logo Image */}
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
                
                                 {/* Logo overlay */}
                 <div className="absolute inset-0 flex items-center justify-center">
                   <motion.div 
                     className="w-48 h-48 bg-white/20 rounded-full mx-auto flex items-center justify-center backdrop-blur-sm border border-white/30"
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
                     <img 
                       src="./LogoNote.png" 
                       alt="Note Electro Logo" 
                       className="w-32 h-32 object-contain rounded-full"
                     />
                   </motion.div>
                   
                   {/* Additional decorative elements */}
                   <div className="absolute inset-0">
                     {/* Rotating rings around logo */}
                     <motion.div 
                       className="absolute inset-0 border-2 border-white/20 rounded-full"
                       animate={{ rotate: 360 }}
                       transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                     />
                     <motion.div 
                       className="absolute inset-0 border border-white/10 rounded-full"
                       style={{ margin: '20px' }}
                       animate={{ rotate: -360 }}
                       transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                     />
                     
                     {/* Floating particles */}
                     <motion.div 
                       className="absolute top-1/4 left-1/4 w-2 h-2 bg-yellow-400 rounded-full"
                       animate={{ 
                         y: [0, -20, 0],
                         opacity: [0.5, 1, 0.5]
                       }}
                       transition={{ duration: 3, repeat: Infinity }}
                     />
                     <motion.div 
                       className="absolute top-3/4 right-1/4 w-1.5 h-1.5 bg-blue-400 rounded-full"
                       animate={{ 
                         y: [0, 15, 0],
                         opacity: [0.5, 1, 0.5]
                       }}
                       transition={{ duration: 2.5, repeat: Infinity, delay: 1 }}
                     />
                     <motion.div 
                       className="absolute bottom-1/4 left-3/4 w-1 h-1 bg-orange-400 rounded-full"
                       animate={{ 
                         x: [0, 10, 0],
                         opacity: [0.5, 1, 0.5]
                       }}
                       transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                     />
                   </div>
                   
                   {/* Text overlay */}
                   <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center">
                     <motion.p 
                       className="text-white/80 text-sm font-medium"
                       animate={{ opacity: [0.5, 1, 0.5] }}
                       transition={{ duration: 2, repeat: Infinity }}
                     >
                       Francisco Fernández
                     </motion.p>
                     <motion.p 
                       className="text-white/60 text-xs"
                       animate={{ opacity: [0.3, 0.8, 0.3] }}
                       transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                     >
                       Electricista Profesional
                     </motion.p>
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

               {/* Additional floating elements */}
               <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl p-4 shadow-lg border border-gray-100">
                 <div className="text-center">
                   <div className="text-2xl font-bold text-orange-600">500+</div>
                   <div className="text-xs text-gray-600">Proyectos</div>
                 </div>
               </div>

               {/* Service badges */}
               <div className="absolute top-1/2 -right-8 transform -translate-y-1/2 bg-white rounded-2xl p-3 shadow-lg border border-gray-100">
                 <div className="text-center">
                   <div className="w-8 h-8 bg-green-500 rounded-full mx-auto mb-1 flex items-center justify-center">
                     <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                       <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                     </svg>
                   </div>
                   <div className="text-xs text-gray-600">Garantía</div>
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
               Trabajo seguro, rápido y responsable. Especializado en instalaciones eléctricas, mantenimiento 
               preventivo, reparaciones de emergencia y proyectos de iluminación LED.
             </p>

             {/* Additional info cards */}
             <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
               <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-4 rounded-xl border border-blue-200">
                 <h4 className="font-bold text-blue-800 mb-2">Instalaciones</h4>
                 <p className="text-blue-700 text-sm">Residenciales, comerciales e industriales</p>
               </div>
               <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-4 rounded-xl border border-orange-200">
                 <h4 className="font-bold text-orange-800 mb-2">Mantenimiento</h4>
                 <p className="text-orange-700 text-sm">Preventivo y correctivo</p>
               </div>
               <div className="bg-gradient-to-br from-green-50 to-green-100 p-4 rounded-xl border border-green-200">
                 <h4 className="font-bold text-green-800 mb-2">Emergencias</h4>
                 <p className="text-green-700 text-sm">Servicio 24/7 disponible</p>
               </div>
             </div>

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

                                      <div className="flex justify-center sm:justify-start">
               <motion.button
                 className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-semibold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105"
                 whileHover={{ scale: 1.05, y: -2 }}
                 whileTap={{ scale: 0.95 }}
                 onClick={() => {
                   document.getElementById('work')?.scrollIntoView({ 
                     behavior: 'smooth' 
                   });
                 }}
               >
                 Ver trabajos
               </motion.button>
             </div>

             {/* Certifications and achievements */}
             <div className="mt-12 p-6 bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl border border-gray-200">
               <h3 className="text-2xl font-bold text-gray-900 mb-4">Certificaciones y Logros</h3>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                 <div className="flex items-center space-x-3">
                   <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                     <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                       <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                     </svg>
                   </div>
                   <span className="text-gray-700">Certificación en Seguridad Eléctrica</span>
                 </div>
                 <div className="flex items-center space-x-3">
                   <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                     <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                       <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                     </svg>
                   </div>
                   <span className="text-gray-700">Más de 500 proyectos completados</span>
                 </div>
                 <div className="flex items-center space-x-3">
                   <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                     <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                       <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                     </svg>
                   </div>
                   <span className="text-gray-700">Especialista en Energías Renovables</span>
                 </div>
                 <div className="flex items-center space-x-3">
                   <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                     <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                       <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                     </svg>
                   </div>
                   <span className="text-gray-700">Garantía de 2 años en todos los trabajos</span>
                 </div>
               </div>
             </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About; 