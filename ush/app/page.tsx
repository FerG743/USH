
import React from 'react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { HeroSection } from '@/components/sections/HeroSection';
import { ServicesSection } from '@/components/sections/ServicesSection';
import { ApproachSection } from '@/components/sections/ApproachSection';
import { TestimonialSection } from '@/components/sections/TestimonialSection';
import { CtaSection } from '@/components/sections/CtaSection';

export default function HushFinanceHomepage() {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      <Header />
      <HeroSection />
      <ServicesSection />
      <ApproachSection />
      <TestimonialSection />
      <CtaSection />
      <Footer />
    </div>
  );
}