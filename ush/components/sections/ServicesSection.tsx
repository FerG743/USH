import React from 'react';
import { ServiceCard } from '@/components/Cards/ServiceCard';
import { CreditCard, ArrowDownUp, CircleDollarSign, Handshake, Clock, DollarSign } from 'lucide-react';

export const ServicesSection = () => {
  const services = [
    {
      icon: CreditCard,
      title: "Créditos y Préstamos",
      description: "Soluciones financieras personalizadas para satisfacer tus necesidades con plazos flexibles y tasas competitivas."
    },
    {
      icon: ArrowDownUp,
      title: "Intermediación Crediticia",
      description: "Actuamos como enlace entre acreditantes y acreditados, asegurando los mejores términos para ambas partes."
    },
    {
      icon: CircleDollarSign,
      title: "Consolidación de Deudas",
      description: "Reunificamos tus deudas en una sola cuota manejable, simplificando tu vida financiera."
    },
    {
      icon: Handshake,
      title: "Factoraje de Facturas",
      description: "Adelantamos los cobros de tu negocio para mejorar tu flujo de efectivo con opciones con y sin recurso."
    },
    {
      icon: Clock,
      title: "Financiamiento a Corto Plazo",
      description: "Obtén liquidez inmediata para solventar problemas relacionados con tus ingresos con mínimos requisitos."
    },
    {
      icon: DollarSign,
      title: "Capital de Trabajo",
      description: "Financiamiento para cubrir necesidades operativas de pequeñas empresas, desde insumos hasta salarios."
    }
  ];

  return (
    <section className="py-20 md:py-28 border-b border-zinc-800">
      <div className="container mx-auto px-4 md:px-8 lg:px-12">
        <div className="flex flex-col md:flex-row justify-between items-start mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">Servicios Financieros Elite</h2>
          <p className="mt-4 md:mt-0 text-zinc-300 max-w-md">
            Soluciones adaptadas que satisfacen las necesidades únicas de nuestra selecta clientela con los más altos estándares de confidencialidad.
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