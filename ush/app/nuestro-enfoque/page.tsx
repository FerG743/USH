// app/nuestro-enfoque/page.tsx
"use client";
import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ChevronLeft, Shield, Calendar, Users, Award, Eye, Volume2 } from 'lucide-react';
import { motion } from "framer-motion";

export default function NuestroEnfoquePage() {
  // Reusable animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 }
  };

  const slideInLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 }
  };

  const slideInRight = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0 }
  };

  const subtleHover = {
    scale: 1.01,
    transition: { duration: 0.3, ease: "easeInOut" }
  };

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <main>
      {/* Header Section */}
      <section className="py-16 md:py-20 border-b border-zinc-800">
        <div className="container mx-auto px-4 md:px-8 lg:px-12">
          <motion.div 
            className="mb-8"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <Link href="/" className="inline-flex items-center text-zinc-400 hover:text-white transition-colors">
              <ChevronLeft className="mr-2 h-4 w-4" />
              Volver al Inicio
            </Link>
          </motion.div>

          <motion.div 
            className="max-w-4xl"
            initial="hidden"
            animate="visible"
            variants={container}
          >
            <motion.h1 
              variants={fadeIn}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight mb-6"
            >
              Nuestro Enfoque
            </motion.h1>
            
            <motion.div 
              variants={fadeIn}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
              className="mb-6"
            >
              <div className="text-2xl md:text-3xl font-light text-zinc-300 mb-4">
                Silence is the new Luxury.
              </div>
            </motion.div>
            
            <motion.p 
              variants={fadeIn}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
              className="text-xl text-zinc-400 mb-6 max-w-3xl"
            >
              En un mundo donde el ruido aparenta, HUSH Financiera deja en claro que el silencio reina. 
              Naciendo del principio de la discreción, no buscamos la fama ni el ojo del público.
            </motion.p>

            <motion.p 
              variants={fadeIn}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
              className="text-lg text-zinc-300 mb-8 max-w-3xl"
            >
              En HUSH obtiene lo que usted desee, no existe la necesidad del permiso, ni la pregunta.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-20 md:py-28 border-b border-zinc-800">
        <div className="container mx-auto px-4 md:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Mission */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={slideInLeft}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="space-y-6"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-white/10 rounded-lg backdrop-blur-sm">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <span className="text-sm font-medium text-zinc-400 uppercase tracking-wider">
                  Misión
                </span>
              </div>

              <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-6">
                Servicios de Excelencia
              </h2>
              
              <p className="text-lg text-zinc-300 leading-relaxed">
                HUSH Financiera tiene por misión proveer de servicios financieros de excelencia para 
                individuos, grupos y empresas, manteniendo siempre el sumo respeto y discreción.
              </p>
            </motion.div>

            {/* Vision */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={slideInRight}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
              className="space-y-6"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-white/10 rounded-lg backdrop-blur-sm">
                  <Eye className="h-6 w-6 text-white" />
                </div>
                <span className="text-sm font-medium text-zinc-400 uppercase tracking-wider">
                  Visión
                </span>
              </div>

              <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-6">
                La Más Alta Plataforma
              </h2>
              
              <p className="text-lg text-zinc-300 leading-relaxed">
                Excelencia, respeto y discreción. HUSH Financiera aspira a ser la más alta plataforma 
                financiera, ofreciendo soluciones integrales a todos nuestros clientes, sin rodeos.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 md:py-28 border-b border-zinc-800">
        <div className="container mx-auto px-4 md:px-8 lg:px-12">
          <motion.div 
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-6">
              Nuestros Valores
            </h2>
            <p className="text-xl text-zinc-300 max-w-3xl mx-auto">
              Los principios que guían cada decisión y servicio que ofrecemos.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Excelencia */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={slideInLeft}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="bg-gradient-to-br from-zinc-800 to-zinc-900 rounded-2xl p-8 border border-zinc-700"
            >
              <div className="text-center mb-6">
                <div className="p-4 bg-emerald-900/30 rounded-lg mx-auto w-fit mb-4">
                  <Award className="h-8 w-8 text-emerald-400" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Excelencia</h3>
              </div>
              
              <p className="text-zinc-300 text-center leading-relaxed">
                Usted va primero, el trato personal es marca distintiva en HUSH Financiera.
              </p>
            </motion.div>

            {/* Discreción */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeIn}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
              className="bg-gradient-to-br from-zinc-800 to-zinc-900 rounded-2xl p-8 border border-zinc-700"
            >
              <div className="text-center mb-6">
                <div className="p-4 bg-blue-900/30 rounded-lg mx-auto w-fit mb-4">
                  <Shield className="h-8 w-8 text-blue-400" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Discreción</h3>
              </div>
              
              <p className="text-zinc-300 text-center leading-relaxed">
                Sus movimientos, nuestras órdenes. Sin preguntas.
              </p>
            </motion.div>

            {/* Transparencia */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={slideInRight}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.4 }}
              className="bg-gradient-to-br from-zinc-800 to-zinc-900 rounded-2xl p-8 border border-zinc-700"
            >
              <div className="text-center mb-6">
                <div className="p-4 bg-purple-900/30 rounded-lg mx-auto w-fit mb-4">
                  <Eye className="h-8 w-8 text-purple-400" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Transparencia</h3>
              </div>
              
              <p className="text-zinc-300 text-center leading-relaxed">

                Usted es el ojo todo lo ve. En HUSH Financiera no existen secretos, solo aquellos que no le incumben a los demás.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-20 md:py-28 border-b border-zinc-800">
        <div className="container mx-auto px-4 md:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Visual Element - Left side */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={slideInLeft}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="relative"
            >
              <motion.div
                className="bg-gradient-to-br from-zinc-900 to-black rounded-2xl p-8 border border-zinc-700 shadow-2xl"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="text-center mb-8">
                  <div className="text-6xl font-light text-white mb-4">HUSH</div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-zinc-800 rounded-lg">
                    <span className="text-zinc-200">Confidencialidad</span>
                    <span className="text-white font-semibold">Absoluta</span>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-zinc-800 rounded-lg">
                    <span className="text-zinc-200">Servicio</span>
                    <span className="text-white font-semibold">Personalizado</span>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-zinc-800 rounded-lg">
                    <span className="text-zinc-200">Enfoque</span>
                    <span className="text-white font-semibold">Profesional</span>
                  </div>
                </div>
              </motion.div>
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-white/5 rounded-full blur-xl"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-white/3 rounded-full blur-xl"></div>
            </motion.div>

            {/* Content - Right side */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={slideInRight}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
              className="space-y-6"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-white/10 rounded-lg backdrop-blur-sm">
                  <Volume2 className="h-6 w-6 text-white" />
                </div>
                <span className="text-sm font-medium text-zinc-400 uppercase tracking-wider">
                  Filosofía
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-6">
                Discreción ante todo
              </h2>


              <p className="text-lg text-zinc-300 leading-relaxed mb-6">
                En HUSH entendemos que la verdadera sofisticación financiera se basa en la 
                discreción y la confidencialidad. Operamos bajo el principio de que cada 
                cliente merece un servicio completamente personalizado y privado.
              </p>
              
              <p className="text-zinc-400 leading-relaxed mb-8">
                No buscamos la atención pública. Nuestro enfoque 
                se centra en resultados tangibles y relaciones duraderas basadas en la confianza 
                y el profesionalismo.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 md:px-8 lg:px-12">
          <motion.div 
            className="bg-zinc-900 border border-zinc-800 p-8 md:p-12 text-center max-w-4xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <motion.h2 
              className="text-3xl md:text-4xl font-bold mb-6"
              variants={fadeIn}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              Trabajemos Juntos
            </motion.h2>
            
            <motion.p 
              className="text-zinc-300 mb-8 text-lg max-w-2xl mx-auto"
              variants={fadeIn}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
            >
              Descubre cómo nuestro enfoque puede beneficiar tus objetivos financieros. 
              Estamos aquí para brindar soluciones personalizadas y confidenciales.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row justify-center gap-4"
              variants={fadeIn}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
            >
              <motion.div whileHover={subtleHover}>
                <Link href="/contacto">
                  <Button className="bg-white text-black hover:bg-zinc-200 rounded-none px-8 py-6">
                    Solicitar Consulta Privada
                  </Button>
                </Link>
              </motion.div>
              
              <motion.div whileHover={subtleHover}>
                <Link href="/">
                  <Button variant="outline" className="border-zinc-700 hover:bg-zinc-900 rounded-none px-8 py-6">
                    Explorar Servicios
                  </Button>
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}