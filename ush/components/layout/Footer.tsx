import React from 'react';
import Link from 'next/link';
import { Separator } from '@/components/ui/separator';

export const Footer = () => {
  return (
    <footer className="bg-black text-white py-12 md:py-20" aria-labelledby="footer-heading">
      <div className="container mx-auto px-4 md:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-14">
          <div className="md:col-span-2">
            <div className="flex items-baseline mb-6 group">
              <h2 id="footer-heading" className="text-2xl md:text-3xl font-bold tracking-tight">
                HUSH
              </h2>
              <span className="text-sm ml-3 text-zinc-300 font-medium tracking-wider">
                FINANCIERA
              </span>
            </div>
            <p className="text-zinc-300 mb-8 max-w-lg leading-relaxed">
              HUSH Financiera es una SOFOM no regulada que ofrece productos y servicios 
              financieros personalizados con máxima confidencialidad.
            </p>
            <div className="text-sm text-zinc-400 space-y-1">
              <p>© {new Date().getFullYear()} HUSH Financiera</p>
              <p>Todos los derechos reservados</p>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">Productos</h3>
            <nav aria-label="Productos financieros">
              <ul className="space-y-3 text-zinc-300">
                <li>
                  <Link 
                    href="/credito-personal" 
                    className="group flex items-center hover:text-white transition-all duration-300 focus:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black rounded-sm p-1 -m-1"
                  >
                    <span className="relative">
                      Crédito Personal
                      <span className="absolute inset-x-0 -bottom-0.5 h-0.5 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                    </span>
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/microcredito" 
                    className="group flex items-center hover:text-white transition-all duration-300 focus:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black rounded-sm p-1 -m-1"
                  >
                    <span className="relative">
                      Microcrédito
                      <span className="absolute inset-x-0 -bottom-0.5 h-0.5 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                    </span>
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/credito-prendario" 
                    className="group flex items-center hover:text-white transition-all duration-300 focus:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black rounded-sm p-1 -m-1"
                  >
                    <span className="relative">
                      Crédito Prendario
                      <span className="absolute inset-x-0 -bottom-0.5 h-0.5 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                    </span>
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/creditos-pymes" 
                    className="group flex items-center hover:text-white transition-all duration-300 focus:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black rounded-sm p-1 -m-1"
                  >
                    <span className="relative">
                      Créditos PyMEs
                      <span className="absolute inset-x-0 -bottom-0.5 h-0.5 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                    </span>
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/productos-especializados" 
                    className="group flex items-center hover:text-white transition-all duration-300 focus:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black rounded-sm p-1 -m-1"
                  >
                    <span className="relative">
                      Productos Especializados
                      <span className="absolute inset-x-0 -bottom-0.5 h-0.5 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                    </span>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        
        <Separator className="my-10 bg-zinc-800" />
        
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <nav aria-label="Enlaces legales" className="flex flex-wrap gap-6 text-sm">
            <Link 
              href="/terminos-condiciones" 
              className="text-zinc-400 hover:text-white transition-colors duration-300 focus:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black rounded-sm"
            >
              Términos y Condiciones
            </Link>
            <Link 
              href="/politica-privacidad" 
              className="text-zinc-400 hover:text-white transition-colors duration-300 focus:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black rounded-sm"
            >
              Política de Privacidad
            </Link>
            <Link 
              href="/aviso-legal" 
              className="text-zinc-400 hover:text-white transition-colors duration-300 focus:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black rounded-sm"
            >
              Aviso Legal
            </Link>
          </nav>
          
          <div className="text-xs text-zinc-400 space-y-1 lg:text-right">
            <p className="font-medium">HUSH Financiera S.A.P.I. de C.V. SOFOM E.N.R.</p>
            <p>No captamos depósitos del público.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;