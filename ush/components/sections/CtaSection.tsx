// app/components/sections/CtaSection.tsx
import React from 'react';
import { Button } from '@/components/ui/button';

export const CtaSection = () => {
  return (
    <section className="py-20 md:py-28">
      <div className="container mx-auto px-4 md:px-8 lg:px-12">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">Ready for a discreet conversation?</h2>
          <p className="text-zinc-400 mb-8">
            Contact us to schedule a confidential consultation with one of our senior advisors.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button className="bg-white text-black hover:bg-zinc-200 rounded-none px-8 py-6 text-sm font-medium transition-colors">
              Contact Us
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