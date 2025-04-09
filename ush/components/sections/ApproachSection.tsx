"use client";
import React from 'react';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Users, Calculator, Shield, Clock, Info } from 'lucide-react';
import { motion } from "framer-motion";

interface StatItem {
  value: string;
  label: string;
  icon?: React.ReactNode;
}

export const ApproachSection = () => {
  // Reusable animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 }
  };
  
  // Subtle hover effect
  const subtleHover = {
    scale: 1.01,
    transition: { duration: 0.3, ease: "easeInOut" }
  };
  
  // Stats item staggered reveal
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const stats: StatItem[] = [
    { 
      value: "SOFOM", 
      label: "Sociedad Financiera de Objeto Múltiple no regulada", 
      icon: <Info className="h-6 w-6 text-white/80" />
    },
    { 
      value: "30%", 
      label: "Capacidad de pago recomendada para créditos personales", 
      icon: <Calculator className="h-6 w-6 text-white/80" />
    },
    { 
      value: "Flexible", 
      label: "Plazos adaptados a tus necesidades desde 2 hasta 96 meses", 
      icon: <Clock className="h-6 w-6 text-white/80" />
    },
    { 
      value: "Discreción", 
      label: "Confidencialidad total en todos nuestros servicios", 
      icon: <Shield className="h-6 w-6 text-white/80" />
    }
  ];

  return (
    <section className="py-20 md:py-28 border-b border-zinc-800">
      <div className="container mx-auto px-4 md:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <motion.h2 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="text-3xl md:text-4xl font-bold tracking-tight mb-8"
            >
              El Enfoque HUSH
            </motion.h2>
            
            <motion.p 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
              className="text-zinc-400 mb-6"
            >
              En HUSH Financiera, ofrecemos productos y servicios separados en categorías principales: Préstamos, Servicios Financieros y Productos Especializados.
            </motion.p>
            
            <motion.p 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
              className="text-zinc-400 mb-6"
            >
              Como SOFOM no regulada, brindamos soluciones financieras flexibles adaptadas a las necesidades específicas de nuestros clientes, siempre manteniendo la máxima discreción.
            </motion.p>
            
            <motion.p 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
              className="text-zinc-400 mb-8"
            >
              Nuestro equipo de analistas financieros evalúa cada caso individualmente, considerando tu situación actual y ofreciendo las mejores opciones para tu salud financiera.
            </motion.p>
            
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
              whileHover={subtleHover}
            >
              <Button className="bg-white text-black hover:bg-zinc-200 rounded-none px-6 py-6 text-sm font-medium transition-colors">
                Conoce Nuestro Equipo
                <Users className="ml-2 h-4 w-4" />
              </Button>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-8 md:mt-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={container}
          >
            <div>
              <motion.div 
                variants={fadeIn}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                <div className="flex items-center gap-2 mb-2">
                  {stats[0].icon}
                  <p className="text-4xl font-bold">{stats[0].value}</p>
                </div>
                <p className="text-zinc-400">{stats[0].label}</p>
                <Separator className="my-8 bg-zinc-800" />
              </motion.div>
              
              <motion.div 
                variants={fadeIn}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                <div className="flex items-center gap-2 mb-2">
                  {stats[1].icon}
                  <p className="text-4xl font-bold">{stats[1].value}</p>
                </div>
                <p className="text-zinc-400">{stats[1].label}</p>
              </motion.div>
            </div>
            
            <div className="md:mt-16">
              <motion.div 
                variants={fadeIn}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                <div className="flex items-center gap-2 mb-2">
                  {stats[2].icon}
                  <p className="text-4xl font-bold">{stats[2].value}</p>
                </div>
                <p className="text-zinc-400">{stats[2].label}</p>
                <Separator className="my-8 bg-zinc-800" />
              </motion.div>
              
              <motion.div 
                variants={fadeIn}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                <div className="flex items-center gap-2 mb-2">
                  {stats[3].icon}
                  <p className="text-4xl font-bold">{stats[3].value}</p>
                </div>
                <p className="text-zinc-400">{stats[3].label}</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ApproachSection;