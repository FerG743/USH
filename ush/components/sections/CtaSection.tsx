// app/components/sections/CtaSection.tsx
import React from 'react';
import { Button } from '@/components/ui/button';

export const CtaSection = () => {
  return (
    <section className="py-20 md:py-28">
      <div className="container mx-auto px-4 md:px-8 lg:px-12">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">¿Listo para una conversación discreta?</h2>
          <p className="text-zinc-400 mb-8">
          Contáctanos para tener una sesión privada con uno de nuestros asesores senior.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button className="bg-white text-black hover:bg-zinc-200 rounded-none px-8 py-6 text-sm font-medium transition-colors">
              Contáctanos
            </Button>
            <Button variant="outline" className="border-zinc-700 hover:bg-zinc-900 rounded-none px-8 py-6 text-sm font-medium transition-colors">
              Download Brochure
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};