"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Menu, ChevronRight, ChevronDown } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { LoanSimulatorModal } from '@/components/modals/LoanSimulatorModal';

// Links data
const productLinks = [
  { href: '/productos/credito-personal', label: 'Crédito Personal' },
  { href: '/productos/microcredito', label: 'Microcrédito' },
  { href: '/productos/credito-prendario', label: 'Crédito Prendario' },
  { href: '/productos/creditos-pymes', label: 'Créditos PyMEs' },
  { href: '/productos/prestamos-especializados', label: 'Préstamos Especializados' },
];

const serviceLinks = [
  { href: '/servicios/intermediacion-crediticia', label: 'Intermediación Crediticia' },
  { href: '/servicios/consolidacion-deudas', label: 'Consolidación de Deudas' },
  { href: '/servicios/factoraje', label: 'Factoraje de Facturas' },
  { href: '/servicios/financiamiento-corto-plazo', label: 'Financiamiento a Corto Plazo' },
  { href: '/servicios/capital-trabajo', label: 'Capital de Trabajo' },
];

// Custom dropdown component
const NavDropdown = ({ label, links }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className="relative" onMouseEnter={() => setIsOpen(true)} onMouseLeave={() => setIsOpen(false)}>
      <button 
        className="flex items-center px-4 py-2 text-white hover:bg-zinc-800 transition-colors duration-150 text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{label}</span>
        <ChevronDown className="ml-2 h-4 w-4 text-zinc-400" />
      </button>
      
      {isOpen && (
        <div className="absolute left-0 mt-0 w-72 bg-zinc-900 border border-zinc-800 shadow-md z-50">
          <div className="p-4">
            {links.map((link) => (
              <Link 
                key={link.href} 
                href={link.href}
                className="flex items-center p-3 hover:bg-zinc-800 transition-colors duration-150 text-left"
                onClick={() => setIsOpen(false)}
              >
                <span className="text-sm font-medium text-zinc-100">{link.label}</span>
                <ChevronRight className="ml-auto h-4 w-4 text-zinc-400" />
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`border-b border-zinc-800 bg-black text-white sticky top-0 z-50 transition-all duration-200 ${
        scrolled ? "shadow-md" : ""
      }`}
    >
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center group">
            <span className="text-2xl font-bold text-white group-hover:text-zinc-200 transition-colors">HUSH</span>
            <span className="text-xs ml-2 text-zinc-400 group-hover:text-zinc-300 transition-colors">FINANCIERA</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:justify-between flex-1 ml-10">
            <div className="flex items-center space-x-1">
              <NavDropdown label="Productos" links={productLinks} />
              <NavDropdown label="Servicios" links={serviceLinks} />
              
              <Link 
                href="/nosotros" 
                className="px-4 py-2 text-white hover:bg-zinc-800 transition-colors duration-150 text-left"
              >
                Sobre Nosotros
              </Link>
              
              <Link 
                href="/contacto" 
                className="px-4 py-2 text-white hover:bg-zinc-800 transition-colors duration-150 text-left"
              >
                Contacto
              </Link>
            </div>

            <div className="flex items-center gap-3">
              <LoanSimulatorModal 
                buttonText="Simular Crédito" 
                buttonVariant="outline" 
                className="border-zinc-600 hover:bg-zinc-800 hover:border-zinc-500 text-white px-4 py-2 text-sm transition-colors duration-150 text-left" 
              />
              
              <Button 
                variant="default" 
                className="bg-white text-black hover:bg-zinc-200 px-4 py-2 text-sm font-medium transition-colors duration-150 text-left flex items-center"
              >
                Agendar Consulta
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="text-white hover:bg-zinc-800">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-full sm:w-80 p-0 bg-zinc-950 border-zinc-800">
                <div className="flex flex-col h-full">
                  <div className="p-6 border-b border-zinc-800">
                    <Link href="/" className="flex items-center">
                      <span className="text-2xl font-bold text-white">HUSH</span>
                      <span className="text-xs ml-2 text-zinc-400">FINANCIERA</span>
                    </Link>
                  </div>
                  
                  <div className="flex-1 overflow-auto py-6 px-6">
                    <nav className="flex flex-col space-y-8">
                      <div>
                        <h3 className="text-xs uppercase tracking-wider text-zinc-400 font-semibold mb-3">Productos</h3>
                        <ul className="space-y-3">
                          {productLinks.map((link) => (
                            <li key={link.href}>
                              <Link 
                                href={link.href} 
                                className="group flex items-center text-zinc-100 hover:text-white py-1 text-left"
                              >
                                <span>{link.label}</span>
                                <ChevronRight className="ml-auto h-4 w-4 text-zinc-500 group-hover:text-zinc-300" />
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h3 className="text-xs uppercase tracking-wider text-zinc-400 font-semibold mb-3">Servicios</h3>
                        <ul className="space-y-3">
                          {serviceLinks.map((link) => (
                            <li key={link.href}>
                              <Link 
                                href={link.href} 
                                className="group flex items-center text-zinc-100 hover:text-white py-1 text-left"
                              >
                                <span>{link.label}</span>
                                <ChevronRight className="ml-auto h-4 w-4 text-zinc-500 group-hover:text-zinc-300" />
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h3 className="text-xs uppercase tracking-wider text-zinc-400 font-semibold mb-3">Compañía</h3>
                        <ul className="space-y-3">
                          <li>
                            <Link 
                              href="/nosotros" 
                              className="group flex items-center text-zinc-100 hover:text-white py-1 text-left"
                            >
                              <span>Sobre Nosotros</span>
                              <ChevronRight className="ml-auto h-4 w-4 text-zinc-500 group-hover:text-zinc-300" />
                            </Link>
                          </li>
                          <li>
                            <Link 
                              href="/contacto" 
                              className="group flex items-center text-zinc-100 hover:text-white py-1 text-left"
                            >
                              <span>Contacto</span>
                              <ChevronRight className="ml-auto h-4 w-4 text-zinc-500 group-hover:text-zinc-300" />
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </nav>
                  </div>
                  
                  <div className="p-6 border-t border-zinc-800 space-y-4">
                    <LoanSimulatorModal 
                      buttonText="Simular Crédito" 
                      buttonVariant="outline" 
                      className="border-zinc-600 hover:bg-zinc-800 text-white rounded-md w-full text-left flex justify-start"
                      triggerButton={true}
                    />
                    <Button 
                      variant="default" 
                      className="bg-white text-black hover:bg-zinc-200 rounded-md w-full text-left flex justify-start"
                    >
                      Agendar Consulta
                      <ChevronRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;