import React from 'react';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Users, Calculator, Shield, Clock } from 'lucide-react';

interface StatItem {
  value: string;
  label: string;
  icon?: React.ReactNode;
}

export const ApproachSection = () => {
  const stats: StatItem[] = [
    { 
      value: "10-20%", 
      label: "Ahorro mensual realista para una salud financiera sostenible", 
      icon: <Calculator className="h-6 w-6 text-white/80" />
    },
    { 
      value: "3-6", 
      label: "Meses de gastos como fondo de emergencia óptimo y alcanzable", 
      icon: <Shield className="h-6 w-6 text-white/80" />
    },
    { 
      value: "30%", 
      label: "Máximo recomendado de ingresos para pagos de préstamos", 
      icon: <Clock className="h-6 w-6 text-white/80" />
    },
    { 
      value: "24/7", 
      label: "Disponibilidad de analistas y asesoría financiera personalizada", 
      icon: <Users className="h-6 w-6 text-white/80" />
    }
  ];

  return (
    <section className="py-20 md:py-28 border-b border-zinc-800">
      <div className="container mx-auto px-4 md:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-8">El Enfoque Hush</h2>
            <p className="text-zinc-400 mb-6">
              En Hush, creemos en objetivos financieros realistas y alcanzables. Nuestro enfoque se basa en crear planes personalizados que se adapten a tu situación actual y tus metas futuras.
            </p>
            <p className="text-zinc-400 mb-8">
              Nuestro equipo de analistas financieros brinda un enfoque boutique a las relaciones con nuestros clientes, equilibrando la ambición con la responsabilidad para construir una salud financiera duradera.
            </p>
            <Button className="bg-white text-black hover:bg-zinc-200 rounded-none px-6 py-6 text-sm font-medium transition-colors">
              Conoce Nuestro Equipo
              <Users className="ml-2 h-4 w-4" />
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:mt-12">
            <div>
              <div className="flex items-center gap-2 mb-2">
                {stats[0].icon}
                <p className="text-5xl font-bold">{stats[0].value}</p>
              </div>
              <p className="text-zinc-400">{stats[0].label}</p>
              <Separator className="my-8 bg-zinc-800" />
              <div className="flex items-center gap-2 mb-2">
                {stats[1].icon}
                <p className="text-5xl font-bold">{stats[1].value}</p>
              </div>
              <p className="text-zinc-400">{stats[1].label}</p>
            </div>
            <div className="md:mt-16">
              <div className="flex items-center gap-2 mb-2">
                {stats[2].icon}
                <p className="text-5xl font-bold">{stats[2].value}</p>
              </div>
              <p className="text-zinc-400">{stats[2].label}</p>
              <Separator className="my-8 bg-zinc-800" />
              <div className="flex items-center gap-2 mb-2">
                {stats[3].icon}
                <p className="text-5xl font-bold">{stats[3].value}</p>
              </div>
              <p className="text-zinc-400">{stats[3].label}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};