import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  CreditCard, Store, Gem, Briefcase, Car, Users, Calendar, 
  Laptop, ArrowDownUp, CircleDollarSign, Handshake, Clock, DollarSign, 
  ChevronRight, TrendingUp, Shield, Zap, Info, LucideIcon
} from 'lucide-react';
import { creditProducts, specializedProducts, financialServices, CreditProduct, FinancialService } from '@/app/data/ProductsData';

// Function to convert product ID to slug format
const getProductSlug = (productId: string): string => {
  const slugMap: Record<string, string> = {
    "personal": "credito-personal",
    "micro": "microcredito", 
    "prenda": "credito-prendario",
    "pyme": "creditos-pymes",
    "oro": "prestamos-oro-joyas",
    "auto": "prestamos-garantia-automotriz",
    "emprendedor": "creditos-emprendedores",
    "estacional": "financiamiento-estacional",
    "tecnologico": "prestamos-equipo-tecnologico",
    "intermediacion": "intermediacion-crediticia",
    "consolidacion": "consolidacion-deudas", 
    "factoraje": "factoraje-facturas",
    "financiamiento-corto": "financiamiento-corto-plazo",
    "equipos": "financiamiento-equipos-maquinaria",
    "capital": "capital-trabajo-empresas"
  };
  
  return slugMap[productId] || productId;
};
const iconMap: Record<string, LucideIcon> = {
  "personal": CreditCard,
  "micro": Store,
  "prenda": Gem,
  "pyme": Briefcase,
  "oro": Gem,
  "auto": Car,
  "emprendedor": Users,
  "estacional": Calendar,
  "tecnologico": Laptop,
  "intermediacion": ArrowDownUp,
  "consolidacion": CircleDollarSign,
  "factoraje": Handshake,
  "financiamiento-corto": Clock,
  "equipos": Briefcase,
  "capital": DollarSign
};

// Function to get highlight text for each product
const getHighlight = (product: CreditProduct | FinancialService): string => {
  if ('maxAmount' in product) {
    if (product.maxAmount >= 1000000) {
      return `Hasta $${(product.maxAmount / 1000000).toFixed(1)}M MXN`;
    }
    return `Hasta $${(product.maxAmount / 1000).toFixed(0)}K MXN`;
  }
  
  // Fallback highlights for services
  const highlights: Record<string, string> = {
    "intermediacion": "Red de inversionistas",
    "consolidacion": "Una sola cuota",
    "factoraje": "Hasta 90% anticipo",
    "financiamiento-corto": "Menos de 48 hrs",
    "equipos": "Hasta 80% del valor",
    "capital": "Hasta $3M MXN"
  };
  
  return highlights[product.id] || "Condiciones especiales";
};

// Combine all products with category information
const allProducts = [
  ...creditProducts.map(product => ({
    ...product,
    category: "Créditos",
    icon: iconMap[product.id] || Info,
    highlight: getHighlight(product)
  })),
  ...specializedProducts.map(product => ({
    ...product,
    category: "Especializados", 
    icon: iconMap[product.id] || Info,
    highlight: getHighlight(product)
  })),
  ...financialServices.map(product => ({
    ...product,
    category: "Servicios",
    icon: iconMap[product.id] || Info,
    highlight: getHighlight(product)
  }))
];

const AllProductsSection = () => {
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
    <section className="py-20 md:py-28 bg-zinc-950">
      <div className="container mx-auto px-4 md:px-8 lg:px-12">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6">
            Todos Nuestros Productos
          </h1>
          <p className="text-xl text-zinc-300 max-w-3xl mx-auto leading-relaxed">
            Descubre nuestra gama completa de soluciones financieras diseñadas para satisfacer 
            cada una de tus necesidades con la máxima discreción y profesionalismo.
          </p>
        </motion.div>

        {/* Products Grid with Z-Pattern */}
        <motion.div 
          className="space-y-16"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {allProducts.map((product, index) => {
            const Icon = product.icon;
            const isEven = index % 2 === 0;
            
            return (
              <motion.div
                key={product.id}
                variants={itemVariants}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center ${
                  isEven ? '' : 'lg:grid-flow-col-dense'
                }`}
              >
                {/* Content */}
                <div className={`space-y-6 ${isEven ? '' : 'lg:col-start-2'}`}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-white/10 rounded-lg backdrop-blur-sm">
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <span className="text-sm font-medium text-zinc-400 uppercase tracking-wider">
                      {product.category}
                    </span>
                  </div>
                  
                  <h3 className="text-2xl md:text-3xl font-bold text-white leading-tight">
                    {product.title}
                  </h3>
                  
                  <p className="text-lg text-zinc-200 italic font-medium">
                    "{product.tagline}"
                  </p>
                  
                  <p className="text-zinc-300 leading-relaxed text-lg">
                    {product.description}
                  </p>
                  
                  <div className="flex items-center justify-between pt-4">
                    <div className="flex items-center gap-2">
                      <TrendingUp className="h-5 w-5 text-green-400" />
                      <span className="text-green-400 font-semibold">
                        {product.highlight}
                      </span>
                    </div>
                    
                    <Link href={`/productos/${getProductSlug(product.id)}`}>
                      <motion.button
                        className="flex items-center gap-2 text-white hover:text-zinc-300 transition-colors group"
                        whileHover={{ x: 5 }}
                        transition={{ duration: 0.2 }}
                      >
                        <span className="font-medium">Ver detalles</span>
                        <ChevronRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                      </motion.button>
                    </Link>
                  </div>
                </div>

                {/* Visual Element */}
                <div className={`${isEven ? '' : 'lg:col-start-1 lg:row-start-1'}`}>
                  <motion.div
                    className="relative"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="bg-gradient-to-br from-zinc-800 to-zinc-900 rounded-2xl p-8 border border-zinc-700 shadow-2xl">
                      <div className="flex items-center justify-between mb-6">
                        <div className="p-4 bg-white rounded-xl">
                          <Icon className="h-8 w-8 text-black" />
                        </div>
                        <div className="flex items-center gap-2 text-green-400">
                          <Shield className="h-5 w-5" />
                          <span className="text-sm font-medium">SOFOM</span>
                        </div>
                      </div>
                      
                      <div className="space-y-4">
                        <div className="flex items-center gap-3">
                          <Zap className="h-5 w-5 text-yellow-400" />
                          <span className="text-white font-medium">Aprobación Rápida</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <Shield className="h-5 w-5 text-blue-400" />
                          <span className="text-white font-medium">Máxima Discreción</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <TrendingUp className="h-5 w-5 text-green-400" />
                          <span className="text-white font-medium">Tasas Competitivas</span>
                        </div>
                      </div>
                      
                      <div className="mt-6 pt-6 border-t border-zinc-600">
                        <div className="text-center">
                          <div className="text-2xl font-bold text-white mb-1">
                            {product.highlight}
                          </div>
                          <div className="text-sm text-zinc-400">
                            Condiciones especiales
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Decorative elements */}
                    <div className="absolute -top-4 -right-4 w-24 h-24 bg-white/5 rounded-full blur-xl"></div>
                    <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-white/3 rounded-full blur-xl"></div>
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* CTA Section */}
        <motion.div 
          className="text-center mt-20 pt-16 border-t border-zinc-800"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
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
    </section>
  );
};

export default AllProductsSection;