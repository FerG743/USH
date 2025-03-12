import React from 'react';
import { ServiceCard } from '@/components/Cards/ServiceCard';
import { TrendingUp, Shield, Lock } from 'lucide-react';

export const ServicesSection = () => {
  const services = [
    {
      icon: TrendingUp,
      title: "Wealth Management",
      description: "Sophisticated portfolio strategies designed to preserve and grow significant assets."
    },
    {
      icon: Shield,
      title: "Asset Protection",
      description: "Discreet structures that safeguard wealth across generations and jurisdictions."
    },
    {
      icon: Lock,
      title: "Private Banking",
      description: "Exclusive banking solutions with enhanced privacy and personalized service."
    }
  ];

  return (
    <section className="py-20 md:py-28 border-b border-zinc-800">
      <div className="container mx-auto px-4 md:px-8 lg:px-12">
        <div className="flex flex-col md:flex-row justify-between items-start mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">Elite Financial Services</h2>
          <p className="mt-4 md:mt-0 text-zinc-300 max-w-md">
            Tailored solutions that meet the unique needs of our select clientele with the highest standards of confidentiality.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard 
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;