"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Menu, ChevronRight, ChevronDown } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { motion } from "framer-motion";

// Links data
const productLinks = [
  { href: '/productos/credito-personal', label: 'Crédito Personal' },
  { href: '/productos/microcredito', label: 'Microcrédito' },
  { href: '/productos/credito-prendario', label: 'Crédito Prendario' },
  { href: '/productos/creditos-pymes', label: 'Créditos PyMEs' },
  { href: '/productos/prestamos-especializados', label: 'Préstamos Especializados' },
];

// Custom dropdown component
const NavDropdown = ({ label, links }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className="relative group">
      <button 
        className="group flex items-center px-4 py-2 text-white hover:bg-zinc-800/50 transition-all duration-300 ease-out text-left rounded-lg hover:shadow-lg hover:shadow-zinc-900/20"
        onMouseEnter={() => setIsOpen(true)}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="group-hover:text-zinc-100 transition-colors duration-300">{label}</span>
        <ChevronDown className={`ml-2 h-4 w-4 text-zinc-400 group-hover:text-zinc-300 transition-all duration-300 ease-out ${isOpen ? 'rotate-180 scale-110' : 'rotate-0'}`} />
      </button>
      
      <div 
        className={`absolute left-0 mt-2 w-72 bg-zinc-900/95 backdrop-blur-xl border border-zinc-800/50 shadow-2xl shadow-black/30 z-50 rounded-xl overflow-hidden transition-all duration-300 ease-out ${
          isOpen 
            ? 'opacity-100 translate-y-0 scale-100' 
            : 'opacity-0 translate-y-2 scale-95 pointer-events-none'
        }`}
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
      >
        <div className="p-2">
          {links.map((link, index) => (
            <Link 
              key={link.href} 
              href={link.href}
              className="group flex items-center p-3 hover:bg-zinc-800/70 transition-all duration-300 ease-out text-left rounded-lg transform hover:translate-x-1 hover:shadow-lg hover:shadow-zinc-900/10"
              onClick={() => setIsOpen(false)}
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <span className="text-sm font-medium text-zinc-100 group-hover:text-white transition-colors duration-300">{link.label}</span>
              <ChevronRight className="ml-auto h-4 w-4 text-zinc-400 group-hover:text-zinc-300 group-hover:translate-x-1 transition-all duration-300 ease-out" />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  // Same fade animation variants as hero section
  const fadeIn = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 }
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header 
      initial="hidden"
      animate="visible"
      variants={fadeIn}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`border-b border-zinc-800/50 bg-black/90 backdrop-blur-xl text-white sticky top-0 z-50 transition-all duration-500 ease-out ${
        scrolled ? "shadow-2xl shadow-black/20 bg-black/95 border-zinc-700/50" : ""
      }`}
    >
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          >
            <Link href="/" className="flex items-center group">
              <span className="text-2xl font-bold text-white group-hover:text-zinc-200 transition-all duration-300 ease-out transform group-hover:scale-105">HUSH</span>
              <span className="text-xs ml-2 text-zinc-400 group-hover:text-zinc-300 transition-all duration-300 ease-out transform group-hover:translate-x-1">FINANCIERA</span>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <motion.div 
            className="hidden md:flex md:items-center flex-1 ml-10"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          >
            <div className="flex items-center space-x-10">
              <NavDropdown label="Productos" links={productLinks} />
              <Link 
                href="/contacto" 
                className="group px-4 py-2 text-white hover:bg-zinc-800/50 transition-all duration-300 ease-out text-left rounded-lg hover:shadow-lg hover:shadow-zinc-900/20 transform hover:translate-y-[-1px]"
              >
                <span className="group-hover:text-zinc-100 transition-colors duration-300">Contacto</span>
              </Link>
            </div>
          </motion.div>

          {/* Mobile Navigation */}
          <motion.div 
            className="md:hidden"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
          >
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="text-white hover:bg-zinc-800/50 transition-all duration-300 ease-out transform hover:scale-110 hover:shadow-lg hover:shadow-zinc-900/20 rounded-lg">
                  <Menu className="h-6 w-6 transition-transform duration-300 ease-out" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-full sm:w-80 p-0 bg-zinc-950/95 backdrop-blur-xl border-zinc-800/50">
                <div className="flex flex-col h-full">
                  <div className="p-6 border-b border-zinc-800/50">
                    <Link href="/" className="flex items-center group">
                      <span className="text-2xl font-bold text-white group-hover:text-zinc-200 transition-all duration-300 ease-out transform group-hover:scale-105">HUSH</span>
                      <span className="text-xs ml-2 text-zinc-400 group-hover:text-zinc-300 transition-all duration-300 ease-out">FINANCIERA</span>
                    </Link>
                  </div>
                  
                  <div className="flex-1 overflow-auto py-6 px-6">
                    <nav className="flex flex-col space-y-8">
                      <div>
                        <h3 className="text-xs uppercase tracking-wider text-zinc-400 font-semibold mb-3 animate-pulse">Productos</h3>
                        <ul className="space-y-3">
                          {productLinks.map((link, index) => (
                            <li key={link.href} style={{ animationDelay: `${index * 100}ms` }}>
                              <Link 
                                href={link.href} 
                                className="group flex items-center text-zinc-100 hover:text-white py-3 px-3 text-left rounded-lg hover:bg-zinc-800/50 transition-all duration-300 ease-out transform hover:translate-x-2 hover:shadow-lg hover:shadow-zinc-900/10"
                              >
                                <span className="transition-colors duration-300">{link.label}</span>
                                <ChevronRight className="ml-auto h-4 w-4 text-zinc-500 group-hover:text-zinc-300 group-hover:translate-x-1 transition-all duration-300 ease-out" />
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h3 className="text-xs uppercase tracking-wider text-zinc-400 font-semibold mb-3">Navegación</h3>
                        <ul className="space-y-3">
                          <li>
                            <Link 
                              href="/contacto" 
                              className="group flex items-center text-zinc-100 hover:text-white py-3 px-3 text-left rounded-lg hover:bg-zinc-800/50 transition-all duration-300 ease-out transform hover:translate-x-2 hover:shadow-lg hover:shadow-zinc-900/10"
                            >
                              <span className="transition-colors duration-300">Contacto</span>
                              <ChevronRight className="ml-auto h-4 w-4 text-zinc-500 group-hover:text-zinc-300 group-hover:translate-x-1 transition-all duration-300 ease-out" />
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </nav>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </motion.div>
        </div>
      </div>
    </motion.header>
  );
};

export default Navbar;