// app/components/layout/Header.tsx
import React from 'react';
import { Button } from '@/components/ui/button';

export const Header = () => {
  return (
    <header className="py-6 px-4 md:px-8 lg:px-12 border-b border-zinc-800">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold tracking-tighter">HUSH</div>
        <nav className="hidden md:flex space-x-8">
          <a href="#" className="text-sm font-medium hover:text-zinc-300 transition-colors">Services</a>
          <a href="#" className="text-sm font-medium hover:text-zinc-300 transition-colors">Solutions</a>
          <a href="#" className="text-sm font-medium hover:text-zinc-300 transition-colors">About</a>
          <a href="#" className="text-sm font-medium hover:text-zinc-300 transition-colors">Insights</a>
          <a href="#" className="text-sm font-medium hover:text-zinc-300 transition-colors">Contact</a>
        </nav>
        <Button variant="outline" className="hidden md:flex border-zinc-700 hover:bg-zinc-900 transition-colors">
          Client Portal
        </Button>
        <Button variant="ghost" className="md:hidden p-1">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        </Button>
      </div>
    </header>
  );
};
