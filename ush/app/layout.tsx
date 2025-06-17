// app/layout.tsx
import React from 'react';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Navbar } from '@/components/layout/navbar';
import { Footer } from '@/components/layout/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'HUSH Finance | Servicios Financieros',
  description: 'HUSH Financiera es una SOFOM no regulada que ofrece productos y servicios financieros con el más alto nivel de confidencialidad y personalización.',
  keywords: 'crédito personal, microcrédito, crédito prendario, factoraje, financiamiento, SOFOM, servicios financieros',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={`${inter.className} bg-black text-white min-h-screen flex flex-col`}>
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}