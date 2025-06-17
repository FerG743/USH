// components/sections/HeroSection.tsx
"use client";
import React from 'react';
import { Button } from '@/components/ui/button';
import { ChevronRight, Calculator, Shield } from 'lucide-react';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import LoanSimulator from '../forms/LoanSimulator';
import { motion } from "framer-motion";

export const HeroSection = () => {
  // More subtle fade animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 }
  };
  
  // Refined hover effect - subtle scale with smooth easing
  const subtleHover = {
    scale: 1.01,
    transition: { duration: 0.3, ease: "easeInOut" }
  };

  return (
    <section className="relative py-24 md:py-32 overflow-hidden border-b border-zinc-800">
      <div className="container mx-auto px-4 md:px-8 lg:px-12 relative z-10">
        <div className="max-w-3xl">
          <motion.h1 
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight mb-6"
          >
            El silencio es el nuevo lujo
          </motion.h1>
          
          <motion.p 
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            className="text-lg md:text-xl text-zinc-400 mb-8 max-w-xl"
          >
            HUSH Financiera provee servicios y productos financieros con el más alto nivel de confidencialidad y personalización para nuestros clientes.
          </motion.p>
          
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <div className="grid sm:grid-cols-3 gap-4 w-full">
              <Dialog>
                <DialogTrigger asChild>
                  <motion.div whileHover={subtleHover}>
                    <Button 
                      variant="outline" 
                      className="border-zinc-700 bg-transparent text-white hover:bg-zinc-900 hover:text-white rounded-none h-14 px-6 text-sm font-medium transition-colors flex items-center justify-center w-full"
                    >
                      Simular Crédito
                      <Calculator className="ml-2 h-4 w-4" />
                    </Button>
                  </motion.div>
                </DialogTrigger>
                <DialogContent className="sm:max-w-3xl md:max-w-4xl lg:max-w-5xl xl:max-w-6xl bg-black border-zinc-800 text-white">
                  <DialogHeader>
                    <DialogTitle className="text-white">Simulador de Crédito</DialogTitle>
                    <DialogDescription className="text-zinc-400">
                      Calcula tu préstamo potencial basado en tus ingresos mensuales.
                    </DialogDescription>
                  </DialogHeader>
                  <div className="py-4">
                    <LoanSimulator />
                  </div>
                </DialogContent>
              </Dialog>
              <motion.div whileHover={subtleHover}>
                <Button 
                  variant="outline" 
                  className="border-zinc-700 bg-transparent text-white hover:bg-zinc-900 hover:text-white rounded-none h-14 px-6 text-sm font-medium transition-colors flex items-center justify-center w-full"
                >
                  Nuestro Enfoque
                  <Shield className="ml-2 h-4 w-4" />
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Refined background slide-in animation */}
      <motion.div 
        className="absolute top-0 right-0 w-1/2 h-full bg-zinc-900 -z-10 hidden md:block"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      />
      
      {/* More subtle floating elements */}
      <motion.div 
        className="absolute top-1/4 right-1/3 w-16 h-16 rounded-full bg-white/5 -z-5 hidden md:block"
        animate={{ y: [0, 10, 0], opacity: [0.2, 0.3, 0.2] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        className="absolute bottom-1/3 right-1/4 w-24 h-24 rounded-full bg-white/3 -z-5 hidden md:block"
        animate={{ y: [0, -10, 0], opacity: [0.15, 0.25, 0.15] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />
    </section>
  );
};

export default HeroSection;