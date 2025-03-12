// app/components/sections/ApproachSection.tsx
import React from 'react';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Users } from 'lucide-react';

interface StatItem {
  value: string;
  label: string;
}
export const ApproachSection = () => {
    const stats: StatItem[] = [
      { value: "94%", label: "Client retention rate over five years" },
      { value: "$2.7B", label: "Assets under management" },
      { value: "24/7", label: "Dedicated advisor availability" },
      { value: "21", label: "Years of excellence" }
    ];
  
    return (
      <section className="py-20 md:py-28 border-b border-zinc-800">
        <div className="container mx-auto px-4 md:px-8 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-8">The Hush Approach</h2>
              <p className="text-zinc-400 mb-6">
                For over two decades, Hush has provided exceptional financial services to a select group of clients who value discretion as much as performance.
              </p>
              <p className="text-zinc-400 mb-8">
                Our team of advisors brings expertise from the world's leading financial institutions, combined with a boutique approach to client relationships.
              </p>
              <Button className="bg-white text-black hover:bg-zinc-200 rounded-none px-6 py-6 text-sm font-medium transition-colors">
                Meet Our Team
                <Users className="ml-2 h-4 w-4" />
              </Button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:mt-12">
              <div>
                <p className="text-5xl font-bold mb-2">{stats[0].value}</p>
                <p className="text-zinc-400">{stats[0].label}</p>
                <Separator className="my-8 bg-zinc-800" />
                <p className="text-5xl font-bold mb-2">{stats[1].value}</p>
                <p className="text-zinc-400">{stats[1].label}</p>
              </div>
              <div className="md:mt-16">
                <p className="text-5xl font-bold mb-2">{stats[2].value}</p>
                <p className="text-zinc-400">{stats[2].label}</p>
                <Separator className="my-8 bg-zinc-800" />
                <p className="text-5xl font-bold mb-2">{stats[3].value}</p>
                <p className="text-zinc-400">{stats[3].label}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };