"use client";
import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { ChevronDown, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const products = {
  credits: [
    {
      id: "credito-personal",
      title: "HUSH Crédito Personal",
      tagline: "El apoyo que necesitas, sin necesidad de explicaciones",
      summary: "Libertad para utilizar los fondos con montos desde $1,000 hasta $500,000 MXN.",
      details: "Tasa de interés fija, sin penalización por pagos anticipados, plazos de 2 a 96 meses y opciones de pago flexibles adaptadas a tu ritmo financiero."
    },
    {
      id: "microcredito",
      title: "Microcrédito HUSH",
      tagline: "Rápido y silencioso",
      summary: "Diseñado para emprendedores y micronegocios con montos hasta 30 mil UDIS.",
      details: "Plazo máximo de 3 años, opciones individuales o grupales, y asesoría especializada para maximizar el rendimiento de tu inversión."
    },
    {
      id: "credito-prendario",
      title: "Crédito Prendario HUSH",
      tagline: "De metales hasta gemas, HUSH redefine el valor de tus cosas",
      summary: "Financiamiento usando tus bienes como garantía con tasas competitivas.",
      details: "Valuación profesional, derecho de demasía garantizado, transparencia total en términos y condiciones."
    },
    {
      id: "creditos-pymes",
      title: "Créditos PyMEs",
      tagline: "Financiamiento especializado para pequeñas y medianas empresas",
      summary: "Soluciones adaptadas al ciclo de negocio de tu empresa.",
      details: "Montos y plazos personalizados, opciones para personas físicas y morales, y evaluación especializada considerando el potencial de tu empresa."
    }
   
  ],
  specialized: [
    {
      id: "prestamos-especializados",
      title: "Préstamos Especializados",
      tagline: "Soluciones financieras para casos y necesidades particulares",
      summary: "Productos diseñados para atender necesidades específicas que no se cubren con productos tradicionales.",
      details: "Incluye créditos para emprendedores, financiamiento estacional, préstamos para equipo tecnológico y otras soluciones personalizadas según tu situación particular."
    }
  ]
};

export const ProductsPreviewSection = () => {
  const [selectedTab, setSelectedTab] = React.useState("credits");

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="py-16 border-b border-zinc-800 bg-zinc-950"
    >
      <div className="container mx-auto px-4 md:px-8 lg:px-12">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-col md:flex-row justify-between items-start mb-12"
        >
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-white mb-4 md:mb-0">Productos Financieros</h2>
          <Link href="/contacto" className="text-zinc-300 hover:text-white transition-colors font-medium">
            Hablar con un Asesor →
          </Link>
        </motion.div>

        <Tabs defaultValue="credits" className="w-full" onValueChange={setSelectedTab}>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.3 }}
          >
            <TabsList className="mb-8 bg-zinc-900 mx-auto justify-center">
              <TabsTrigger 
                value="credits" 
                className="data-[state=active]:bg-white data-[state=active]:text-black text-zinc-200 hover:text-white transition-colors"
              >
                Créditos Personales
              </TabsTrigger>
              <TabsTrigger 
                value="specialized" 
                className="data-[state=active]:bg-white data-[state=active]:text-black text-zinc-200 hover:text-white transition-colors"
              >
                Productos Especializados
              </TabsTrigger>
            </TabsList>
          </motion.div>

          <AnimatePresence mode="wait">
            {selectedTab === "credits" && (
              <motion.div
                key="credits"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <div className="space-y-6">
                  {products.credits.map((product, index) => (
                    <motion.div
                      key={product.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.1 * (index + 1) }}
                    >
                      <ProductCard product={product} />
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}

            {selectedTab === "specialized" && (
              <motion.div
                key="specialized"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <div className="space-y-6">
                  {products.specialized.map((product, index) => (
                    <motion.div
                      key={product.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.1 * (index + 1) }}
                    >
                      <ProductCard product={product} />
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </Tabs>
      </div>
    </motion.section>
  );
};

const ProductCard = ({ product }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <motion.div
      layout
      transition={{ duration: 0.3, ease: [0.4, 0.0, 0.2, 1] }}
    >
      <Collapsible 
        className="bg-zinc-900/80 border border-zinc-700 p-6 rounded-sm hover:bg-zinc-900 transition-colors"
        open={isOpen}
        onOpenChange={setIsOpen}
      >
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-xl font-medium text-white">{product.title}</h3>
            <p className="text-zinc-200 italic mt-1 font-medium">"{product.tagline}"</p>
            <p className="text-zinc-100 mt-3 leading-relaxed">{product.summary}</p>
          </div>
          <CollapsibleTrigger asChild>
            <Button variant="ghost" size="sm" className="h-8 w-8 p-0 mt-1 text-zinc-200 hover:text-white hover:bg-zinc-800">
              <motion.div
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.2 }}
              >
                <ChevronDown className="h-4 w-4" />
              </motion.div>
              <span className="sr-only">Toggle</span>
            </Button>
          </CollapsibleTrigger>
        </div>
        
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="mt-4 pt-4 border-t border-zinc-700 overflow-hidden"
              initial={{ opacity: 0, scaleY: 0, transformOrigin: "top" }}
              animate={{ 
                opacity: 1, 
                scaleY: 1,
                transformOrigin: "top"
              }}
              exit={{ 
                opacity: 0, 
                scaleY: 0,
                transformOrigin: "top"
              }}
              transition={{ 
                duration: 0.3,
                ease: [0.4, 0.0, 0.2, 1]
              }}
            >
              <div className="pb-2">
                <p className="text-zinc-100 mb-4 leading-relaxed">{product.details}</p>
                <Link href={`/productos/${product.id}`}>
                  <motion.div 
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Button className="bg-white text-black hover:bg-zinc-200 rounded-none px-4 py-2 text-sm font-medium shadow-lg">
                      Ver Detalles
                      <ChevronRight className="ml-2 h-4 w-4" />
                    </Button>
                  </motion.div>
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </Collapsible>
    </motion.div>
  );
};

interface ProductCardProps {
  product: {
    id: string;
    title: string;
    tagline: string;
    summary: string;
    details: string;
  };
}