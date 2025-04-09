// components/sections/EnhancedProductsSection.tsx
"use client";
import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  CreditCard, Store, Gem, Briefcase, Car, Users, Calendar, 
  Laptop, ArrowDownUp, CircleDollarSign, Handshake, Clock, DollarSign, Info, LucideIcon
} from 'lucide-react';
import { LoanSimulatorModal } from '@/components/modals/LoanSimulatorModal';
import { creditProducts, specializedProducts, financialServices, CreditProduct, FinancialService } from '@/app/data/ProductsData';
import { motion } from 'framer-motion';

// Icon mapping for products and services
const iconMap: Record<string, LucideIcon> = {
  "personal": CreditCard,
  "micro": Store,
  "prenda": Gem,
  "pyme": Briefcase,
  "oro": Gem,
  "auto": Car,
  "emprendedor": Users,
  "estacional": Calendar,
  "tecnologico": Laptop,
  "intermediacion": ArrowDownUp,
  "consolidacion": CircleDollarSign,
  "factoraje": Handshake,
  "financiamiento-corto": Clock,
  "equipos": Briefcase,
  "capital": DollarSign
};

type TabType = 'creditos' | 'especializados' | 'servicios';

export const EnhancedProductsSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabType>('creditos');

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  // Function to render product cards
  const renderProductCards = (products: (CreditProduct | FinancialService)[]) => {
    return (
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 gap-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {products.map((product) => {
          const ProductIcon = iconMap[product.id] || Info;
          
          return (
            <motion.div key={product.id} variants={itemVariants}>
              <Card className="bg-zinc-900 border-zinc-800 text-white h-full">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <ProductIcon className="h-6 w-6" />
                      <CardTitle>{product.title}</CardTitle>
                    </div>
                    {product.id === "personal" && (
                      <Badge className="bg-white text-black hover:bg-zinc-200">Popular</Badge>
                    )}
                  </div>
                  <CardDescription className="text-zinc-400 font-medium italic">
                    "{product.tagline}"
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="mb-4 text-zinc-300">{product.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold mb-2 text-zinc-400">Características:</h4>
                    <ul className="space-y-1 text-zinc-300">
                      {product.features.map((feature, index) => (
                        <li key={index} className="flex items-start">
                          <span className="text-white mr-2">•</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  {product.requirements && (
                    <div>
                      <h4 className="text-sm font-semibold mb-2 text-zinc-400">Requisitos:</h4>
                      <ul className="space-y-1 text-zinc-300">
                        {product.requirements.map((req, index) => (
                          <li key={index} className="flex items-start">
                            <span className="text-white mr-2">•</span>
                            <span>{req}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </CardContent>
                <CardFooter className="flex justify-between border-t border-zinc-800 pt-4">
                  <Button variant="outline" className="border-zinc-700 hover:bg-zinc-800">
                    Más Información
                  </Button>
                  {["creditos", "especializados"].includes(activeTab) && (
                    <LoanSimulatorModal 
                      buttonText="Simular Crédito" 
                      buttonVariant="default" 
                      className="bg-white text-black hover:bg-zinc-200" 
                    />
                  )}
                </CardFooter>
              </Card>
            </motion.div>
          );
        })}
      </motion.div>
    );
  };

  return (
    <section className="py-20 md:py-28 border-b border-zinc-800 bg-zinc-950">
      <div className="container mx-auto px-4 md:px-8 lg:px-12">
        <motion.div 
          className="max-w-3xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">Nuestros Productos y Servicios</h2>
          <p className="text-zinc-400">
            En HUSH Financiera ofrecemos soluciones diseñadas para satisfacer tus necesidades específicas con la máxima discreción y profesionalismo. Como SOFOM no regulada, brindamos flexibilidad y atención personalizada.
          </p>
        </motion.div>

        <Tabs defaultValue="creditos" className="w-full" onValueChange={(value) => setActiveTab(value as TabType)}>
          <div className="flex justify-center mb-8">
            <TabsList className="bg-zinc-900">
              <TabsTrigger value="creditos" className="data-[state=active]:bg-white data-[state=active]:text-black">
                Créditos y Préstamos
              </TabsTrigger>
              <TabsTrigger value="especializados" className="data-[state=active]:bg-white data-[state=active]:text-black">
                Productos Especializados
              </TabsTrigger>
              <TabsTrigger value="servicios" className="data-[state=active]:bg-white data-[state=active]:text-black">
                Servicios Financieros
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="creditos">
            {renderProductCards(creditProducts)}
          </TabsContent>

          <TabsContent value="especializados">
            {renderProductCards(specializedProducts)}
          </TabsContent>

          <TabsContent value="servicios">
            {renderProductCards(financialServices)}
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default EnhancedProductsSection;