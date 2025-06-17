// app/page.tsx
import React from 'react';
import { HeroSection } from '@/components/sections/HeroSection';
import { ServicesHighlightSection } from '@/components/sections/ServicesHighlightSection';
import { ProductsPreviewSection } from '@/components/sections/ProductsPreviewSection';
import { CtaSection } from '@/components/sections/CtaSection';

export default function Home() {
  return (
    <main>
      <HeroSection />
      <ProductsPreviewSection />
      <CtaSection />
    </main>
  );
}