// components/sections/ServicesHighlightSection.tsx
"use client";
import React from 'react';
import { CreditCard, ArrowDownUp, CircleDollarSign } from 'lucide-react';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import Link from 'next/link';
import { motion, AnimatePresence } from "framer-motion";

const services = [
  {
    icon: <CreditCard className="h-8 w-8" />,
    title: "Créditos y Préstamos",
    summary: "Soluciones financieras personalizadas con plazos flexibles y tasas competitivas.",
    details: "Ofrecemos créditos personales, microcréditos, créditos prendarios y más opciones adaptadas a tus necesidades específicas. Contamos con plazos desde 2 hasta 96 meses y montos desde $1,000 hasta $500,000 MXN.",
    link: "/productos" // Changed from "/servicios/creditos-prestamos" to point to the products page
  },
  {
    icon: <ArrowDownUp className="h-8 w-8" />,
    title: "Intermediación Crediticia",
    summary: "Conectamos acreditantes y acreditados con los mejores términos para ambas partes.",
    details: "Nuestro servicio de intermediación facilita el encuentro entre quienes necesitan financiamiento y quienes pueden proporcionarlo, asegurando condiciones favorables para todos los involucrados mediante un proceso profesional y transparente.",
    link: "/servicios" // Changed to main services page
  },
  {
    icon: <CircleDollarSign className="h-8 w-8" />,
    title: "Consolidación de Deudas",
    summary: "Simplifica tu vida financiera reunificando tus deudas en una sola cuota manejable.",
    details: "Analizamos tu situación financiera actual y te ofrecemos soluciones para reunificar tus deudas, reduciendo el estrés financiero y mejorando tu flujo de efectivo mensual con una sola cuota adaptada a tu capacidad de pago.",
    link: "/servicios" // Changed to main services page
  },
];

export const ServicesHighlightSection = () => {
  return (
    <section className="py-16 border-b border-zinc-800">
      <div className="container mx-auto px-4 md:px-8 lg:px-12">
        <div className="flex flex-col md:flex-row justify-between items-start mb-12">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-white mb-4 md:mb-0">Servicios Financieros Elite</h2>
          <Link href="/servicios" className="text-zinc-400 hover:text-white transition-colors">
            Ver todos los servicios →
          </Link>
        </div>
        
        <div className="space-y-6">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

// Extracted to a separate component for cleaner code
const ServiceCard = ({ service, index }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.1 * (index + 1) }}
    >
      <Collapsible 
        className="bg-zinc-900 border border-zinc-800 p-4 rounded-sm"
        open={isOpen}
        onOpenChange={setIsOpen}
      >
        <div className="flex items-start">
          <motion.div 
            className="mr-4 text-white"
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            {service.icon}
          </motion.div>
          <div className="flex-1">
            <div className="flex justify-between items-center">
              <h3 className="text-xl font-medium">{service.title}</h3>
              <CollapsibleTrigger asChild>
                <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
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
            <p className="text-zinc-400 mt-1">{service.summary}</p>
          </div>
        </div>
        <CollapsibleContent className="mt-4 pt-4 border-t border-zinc-800">
          <AnimatePresence>
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <p className="text-zinc-300 mb-4">{service.details}</p>
              <div className="mt-4">
                <Link href={service.link}>
                  <motion.div whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                    <Button variant="link" className="p-0 h-auto text-white">
                      Más información →
                    </Button>
                  </motion.div>
                </Link>
              </div>
            </motion.div>
          </AnimatePresence>
        </CollapsibleContent>
      </Collapsible>
    </motion.div>
  );
};

export default ServicesHighlightSection;