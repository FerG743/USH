import React from 'react';
import { LucideIcon } from 'lucide-react';
import Link from 'next/link';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ icon: Icon, title, description }) => {
  return (
    <div className="bg-zinc-900 border border-zinc-800 p-8 h-full hover:border-zinc-700 transition-colors">
      <div className="flex flex-col h-full">
        <div className="mb-6">
          <Icon className="h-8 w-8 text-white opacity-90" />
        </div>
        <h3 className="text-xl font-semibold mb-4 text-white">{title}</h3>
        <p className="text-zinc-300 mb-6">{description}</p>
        <div className="mt-auto">
          <Link 
            href="#" 
            className="text-white flex items-center text-sm font-medium group"
          >
            Learn more{' '}
            <span className="ml-2 transition-transform group-hover:translate-x-1">→</span>
          </Link>
        </div>
      </div>
    </div>
  );
};