"use client";
import React from 'react';
import { Button } from '@/components/ui/button';
import { ChevronRight, Calculator } from 'lucide-react';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { LoanSimulator } from '../forms/LoanSimulator';

export const HeroSection = () => {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden border-b border-zinc-800">
      <div className="container mx-auto px-4 md:px-8 lg:px-12 relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight mb-6">
            Discrete wealth management for discerning clients
          </h1>
          <p className="text-lg md:text-xl text-zinc-400 mb-8 max-w-xl">
            Hush provides elite financial services with the utmost privacy and personalized attention for high-net-worth individuals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            {/* All buttons with consistent height and styling */}
            <div className="grid sm:grid-cols-3 gap-4 w-full">
              {/* Schedule Consultation button */}
              <Button 
                variant="default"
                className="bg-white text-black hover:bg-zinc-200 rounded-none h-14 px-6 text-sm font-medium transition-colors flex items-center justify-center"
              >
                Schedule Consultation
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
              
              {/* Loan Calculator button with inline dialog */}
              <Dialog>
                <DialogTrigger asChild>
                  <Button 
                    variant="outline" 
                    className="border-zinc-700 bg-transparent text-white hover:bg-zinc-900 hover:text-white rounded-none h-14 px-6 text-sm font-medium transition-colors flex items-center justify-center"
                  >
                    Calculate Loan
                    <Calculator className="ml-2 h-4 w-4" />
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-md bg-black border-zinc-800 text-white">
                  <DialogHeader>
                    <DialogTitle className="text-white">Loan Simulator</DialogTitle>
                    <DialogDescription className="text-zinc-400">
                      Calculate your potential loan amount based on your income.
                    </DialogDescription>
                  </DialogHeader>
                  <div className="py-4">
                    <LoanSimulator />
                  </div>
                </DialogContent>
              </Dialog>
              
              {/* Our Approach button */}
              <Button 
                variant="outline" 
                className="border-zinc-700 bg-transparent text-white hover:bg-zinc-900 hover:text-white rounded-none h-14 px-6 text-sm font-medium transition-colors flex items-center justify-center"
              >
                Our Approach
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-0 right-0 w-1/2 h-full bg-zinc-900 -z-10 hidden md:block"></div>
    </section>
  );
};

export default HeroSection;