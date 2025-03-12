// app/components/sections/TestimonialSection.tsx
import React from 'react';
import { Separator } from '@/components/ui/separator';

export const TestimonialSection = () => {
  return (
    <section className="py-20 md:py-28 border-b border-zinc-800 bg-zinc-950">
      <div className="container mx-auto px-4 md:px-8 lg:px-12">
        <div className="max-w-3xl mx-auto text-center">
          <svg className="w-12 h-12 mx-auto mb-6 text-zinc-700" fill="currentColor" viewBox="0 0 24 24">
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
          </svg>
          <p className="text-xl md:text-2xl font-medium mb-8 leading-relaxed">
            "Hush has redefined what I expect from a financial advisor. Their attention to detail and commitment to privacy have made them an invaluable partner in managing my family's wealth for over a decade."
          </p>
          <div className="inline-flex items-center">
            <Separator orientation="vertical" className="h-8 mr-4 bg-zinc-800" />
            <p className="text-sm font-medium">Private Client, Family Office</p>
          </div>
        </div>
      </div>
    </section>
  );
};
