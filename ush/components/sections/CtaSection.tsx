"use client";
import React from 'react';
import { Button } from '@/components/ui/button';
import { motion } from "framer-motion";

export const CtaSection = () => {
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

  return (
    <section className="py-20 md:py-28">
      <div className="container mx-auto px-4 md:px-8 lg:px-12">
        <motion.div 
          className="max-w-3xl mx-auto text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1 }
          }}
        >
          <motion.h2 
            variants={fadeIn}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-3xl md:text-4xl font-bold tracking-tight mb-6"
          >
            ¿Listo para una conversación discreta?
          </motion.h2>
          
          <motion.p 
            variants={fadeIn}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            className="text-zinc-400 mb-8"
          >
            Contáctanos para tener una sesión privada con uno de nuestros asesores senior.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row justify-center gap-4"
            variants={fadeIn}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
          >
            <motion.div whileHover={subtleHover}>
              <Button className="bg-white text-black hover:bg-zinc-200 rounded-none px-8 py-6 text-sm font-medium transition-colors">
                Contáctanos
              </Button>
            </motion.div>
            
            <motion.div whileHover={subtleHover}>
              <Button variant="outline" className="border-zinc-700 hover:bg-zinc-900 rounded-none px-8 py-6 text-sm font-medium transition-colors">
                Download Brochure
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CtaSection;