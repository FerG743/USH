import React from 'react';
import { ServiceCard } from '@/components/Cards/ServiceCard';
import { TrendingUp, Shield, Lock } from 'lucide-react';

export const ServicesSection = () => {
  const services = [
    {
      icon: TrendingUp,
      title: "Financiamiento personalizado",
      description: "Asistencia personalizada durante  la duración del proceso de financiamiento."
    },
    {
      icon: Shield,
      title: "Proteccion del cliente",
      description:  "Estructuras de financiamiento discretas que te protegen ante malos actores."
    },
    {
      icon: Lock,
      title: "Créditos amigables",
      description: "Hush comprende el valor de tus pertenencias, es por eso que nos comprometemos a valuarlas adecuadamente, asimismo ofrecer plazos amigables de financiamiento."
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