import React from 'react';
import Link from 'next/link';
import { Separator } from '@/components/ui/separator';

export const Footer = () => {
  return (
    <footer className="bg-black text-white py-12 md:py-20">
      <div className="container mx-auto px-4 md:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
          <div className="md:col-span-2">
            <div className="flex items-center mb-6">
              <h2 className="text-2xl font-bold">HUSH</h2>
              <span className="text-xs ml-2 text-zinc-500">FINANCIERA</span>
            </div>
            <p className="text-zinc-400 mb-6 max-w-md">
              HUSH Financiera es una SOFOM no regulada que ofrece productos y servicios financieros personalizados con máxima confidencialidad.
            </p>
            <div className="text-sm text-zinc-500">
              <p>© {new Date().getFullYear()} HUSH Financiera</p>
              <p>Todos los derechos reservados</p>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-4">Productos</h3>
            <ul className="space-y-2 text-zinc-400">
              <li><Link href="#" className="hover:text-white transition-colors">Crédito Personal</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Microcrédito</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Crédito Prendario</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Créditos PyMEs</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Productos Especializados</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-4">Servicios</h3>
            <ul className="space-y-2 text-zinc-400">
              <li><Link href="#" className="hover:text-white transition-colors">Intermediación Crediticia</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Consolidación de Deudas</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Factoraje de Facturas</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Financiamiento a Corto Plazo</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Capital de Trabajo</Link></li>
            </ul>
          </div>
        </div>
        
        <Separator className="my-8 bg-zinc-900" />
        
        <div className="flex flex-col md:flex-row md:items-center justify-between text-sm text-zinc-500">
          <div className="flex space-x-6 mb-4 md:mb-0">
            <Link href="#" className="hover:text-white transition-colors">Términos y Condiciones</Link>
            <Link href="#" className="hover:text-white transition-colors">Política de Privacidad</Link>
            <Link href="#" className="hover:text-white transition-colors">Aviso Legal</Link>
          </div>
          
          <div className="text-xs">
            <p>HUSH Financiera S.A.P.I. de C.V. SOFOM E.N.R.</p>
            <p>No captamos depósitos del público.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;