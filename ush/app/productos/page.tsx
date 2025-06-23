"use client";
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const allProducts = [
  { 
    slug: 'credito-personal', 
    title: 'HUSH Crédito Personal', 
    tagline: 'El apoyo que necesitas, sin necesidad de explicaciones',
    description: 'Crédito de libre disposición para hacer frente a obligaciones o emergencias con montos desde $1,000 MXN hasta $500,000 MXN.'
  },
  { 
    slug: 'microcredito', 
    title: 'Microcrédito HUSH', 
    tagline: 'Rápido y silencioso',
    description: 'Crédito para personas con proyectos productivos, micronegocios o actividades comerciales con un monto máximo de 30 mil UDIS.'
  },
  { 
    slug: 'credito-prendario', 
    title: 'Crédito Prendario HUSH', 
    tagline: 'De metales hasta gemas, HUSH redefine el valor de tus cosas',
    description: 'Crédito con garantía de un bien inmueble, desde maquinaria hasta la producción de un negocio.'
  },
  { 
    slug: 'creditos-pymes', 
    title: 'Créditos PyMEs', 
    tagline: 'Financiamiento especializado para pequeñas y medianas empresas',
    description: 'Préstamos para personas morales y físicas con actividad empresarial para cubrir necesidades de operación y equipamiento.'
  }
];

export default function ProductosPage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <main className="py-16 md:py-20 bg-zinc-950">
      <div className="container mx-auto px-4 md:px-8 lg:px-12">
        {/* Breadcrumb */}
        <motion.div 
          className="mb-8"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <Link href="/" className="inline-flex items-center text-zinc-400 hover:text-white transition-colors">
            <ChevronLeft className="mr-2 h-4 w-4" />
            Volver al inicio
          </Link>
        </motion.div>

        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6">
            Nuestros Créditos
          </h1>
          <p className="text-xl text-zinc-300 max-w-3xl mx-auto leading-relaxed">
            Descubre nuestra gama completa de productos crediticios diseñados para satisfacer 
            todas tus necesidades financieras con la máxima discreción y profesionalismo.
          </p>
        </motion.div>

        {/* Products Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {allProducts.map((product, index) => (
            <motion.div key={product.slug} variants={itemVariants}>
              <Link href={`/productos/${product.slug}`}>
                <motion.div 
                  className="bg-zinc-900/80 border border-zinc-700 p-8 rounded-sm hover:bg-zinc-900 hover:border-zinc-600 transition-all duration-300 h-full group"
                  whileHover={{ y: -5, scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="flex items-start justify-between mb-4">
                    <span className="text-xs font-medium text-zinc-400 uppercase tracking-wider">
                      Crédito
                    </span>
                    <ChevronRight className="h-5 w-5 text-zinc-400 group-hover:text-white group-hover:translate-x-1 transition-all duration-200" />
                  </div>
                  
                  <h3 className="text-2xl font-semibold text-white mb-3 group-hover:text-zinc-100 transition-colors">
                    {product.title}
                  </h3>
                  
                  <p className="text-zinc-200 italic leading-relaxed mb-4 font-medium">
                    "{product.tagline}"
                  </p>
                  
                  <p className="text-zinc-300 leading-relaxed mb-6">
                    {product.description}
                  </p>
                  
                  <div className="pt-4 border-t border-zinc-800">
                    <span className="text-sm text-zinc-400 group-hover:text-zinc-300 transition-colors font-medium">
                      Ver detalles →
                    </span>
                  </div>
                </motion.div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div 
          className="text-center mt-20 pt-16 border-t border-zinc-800"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
            ¿No encuentras lo que buscas?
          </h3>
          <p className="text-zinc-300 mb-8 max-w-2xl mx-auto">
            En HUSH Financiera creamos soluciones personalizadas. Contáctanos y 
            diseñaremos el producto financiero perfecto para tu situación específica.
          </p>
          <motion.button 
            className="bg-white text-black px-8 py-4 rounded-lg font-semibold text-lg hover:bg-zinc-200 transition-colors shadow-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Solicitar Consulta Personalizada
          </motion.button>
        </motion.div>
      </div>
    </main>
  );
}