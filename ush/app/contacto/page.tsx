// app/contacto/page.tsx
"use client";
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Separator } from '@/components/ui/separator';
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  productInterest: string;
  loanAmount: string;
  message: string;
}

interface FormErrors {
  name: string;
  email: string;
  phone: string;
  message: string;
}

const products = [
  { value: "credito-personal", label: "HUSH Crédito Personal" },
  { value: "microcredito", label: "Microcrédito HUSH" },
  { value: "credito-prendario", label: "Crédito Prendario HUSH" },
  { value: "creditos-pymes", label: "Créditos PyMEs" },
  { value: "prestamos-especializados", label: "Préstamos Especializados" },
  { value: "otros", label: "Otros / Consulta General" }
];

const loanAmounts = [
  { value: "1000-10000", label: "$1,000 - $10,000 MXN" },
  { value: "10000-50000", label: "$10,000 - $50,000 MXN" },
  { value: "50000-100000", label: "$50,000 - $100,000 MXN" },
  { value: "100000-500000", label: "$100,000 - $500,000 MXN" },
  { value: "500000-1000000", label: "$500,000 - $1,000,000 MXN" },
  { value: "1000000-5000000", label: "$1,000,000 - $5,000,000 MXN" },
  { value: "5000000+", label: "Más de $5,000,000 MXN" },
  { value: "no-especificado", label: "No especificado" }
];

export default function ContactoPage() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    company: '',
    productInterest: '',
    loanAmount: '',
    message: ''
  });

  const [formErrors, setFormErrors] = useState<FormErrors>({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 }
  };

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const subtleHover = {
    scale: 1.01,
    transition: { duration: 0.3, ease: "easeInOut" }
  };

  const validateForm = (): boolean => {
    const errors: FormErrors = {
      name: '',
      email: '',
      phone: '',
      message: ''
    };

    let isValid = true;

    if (!formData.name.trim()) {
      errors.name = 'El nombre es requerido';
      isValid = false;
    }

    if (!formData.email.trim()) {
      errors.email = 'El correo electrónico es requerido';
      isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = 'Ingrese un correo electrónico válido';
      isValid = false;
    }

    if (!formData.phone.trim()) {
      errors.phone = 'El teléfono es requerido';
      isValid = false;
    }

    if (!formData.message.trim()) {
      errors.message = 'El mensaje es requerido';
      isValid = false;
    }

    setFormErrors(errors);
    return isValid;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Clear error when user starts typing
    if (formErrors[name as keyof FormErrors]) {
      setFormErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    // Simulate form submission
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        productInterest: '',
        loanAmount: '',
        message: ''
      });
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <main className="py-24 md:py-32">
        <div className="container mx-auto px-4 md:px-8 lg:px-12">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="max-w-2xl mx-auto text-center"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mb-8"
            >
              <CheckCircle className="h-16 w-16 text-green-400 mx-auto" />
            </motion.div>
            
            <h1 className="text-3xl md:text-4xl font-bold mb-6">
              ¡Mensaje Enviado!
            </h1>
            
            <p className="text-lg text-zinc-300 mb-8">
              Gracias por contactarnos. Uno de nuestros asesores especializados se pondrá en contacto contigo en las próximas 24 horas.
            </p>
            
            <motion.div whileHover={subtleHover}>
              <Button 
                onClick={() => setIsSubmitted(false)}
                className="bg-white text-black hover:bg-zinc-200 rounded-none"
              >
                Enviar Otro Mensaje
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </main>
    );
  }

  return (
    <main>
      {/* Hero Section */}
      <section className="py-20 md:py-28 border-b border-zinc-800">
        <div className="container mx-auto px-4 md:px-8 lg:px-12">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={container}
            className="max-w-4xl mx-auto"
          >
            <motion.h1 
              variants={fadeIn}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="text-4xl md:text-5xl font-bold tracking-tight text-center mb-6"
            >
              Contáctanos
            </motion.h1>
            
            <motion.p 
              variants={fadeIn}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
              className="text-xl text-zinc-300 text-center mb-12"
            >
              Estamos aquí para ayudarte con soluciones financieras personalizadas. 
              Conversemos sobre tus necesidades con total confidencialidad.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 md:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            {/* Contact Information */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={container}
              className="lg:col-span-1"
            >
              <motion.h2 
                variants={fadeIn}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="text-2xl font-bold mb-8"
              >
                Información de Contacto
              </motion.h2>
              
              <motion.div 
                variants={fadeIn}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
                className="space-y-6"
              >
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-zinc-900 border border-zinc-800 rounded-lg">
                    <Mail className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-1">Correo Electrónico</h3>
                    <p className="text-zinc-300">contacto@hushfinanciera.com</p>
                    <p className="text-zinc-300">asesores@hushfinanciera.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-zinc-900 border border-zinc-800 rounded-lg">
                    <Phone className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-1">Teléfono</h3>
                    <p className="text-zinc-300">+52 (55) 1234-5678</p>
                    <p className="text-sm text-zinc-400">Lunes a Viernes, 9:00 AM - 6:00 PM</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-zinc-900 border border-zinc-800 rounded-lg">
                    <MapPin className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-1">Oficina Principal</h3>
                    <p className="text-zinc-300">Ciudad de México</p>
                    <p className="text-sm text-zinc-400">Cita previa requerida</p>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                variants={fadeIn}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
                className="mt-12 p-6 bg-zinc-900 border border-zinc-800 rounded-lg"
              >
                <div className="flex items-center mb-4">
                  <AlertCircle className="h-5 w-5 text-blue-400 mr-2" />
                  <h3 className="font-semibold text-white">Compromiso de Privacidad</h3>
                </div>
                <p className="text-sm text-zinc-300 leading-relaxed">
                  Toda la información que compartas con nosotros será tratada con la máxima confidencialidad. 
                  Tu privacidad es nuestra prioridad.
                </p>
              </motion.div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={container}
              className="lg:col-span-2"
            >
              <motion.h2 
                variants={fadeIn}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="text-2xl font-bold mb-8"
              >
                Solicitar Información
              </motion.h2>

              <motion.form 
                onSubmit={handleSubmit}
                variants={fadeIn}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
                className="space-y-6"
              >
                {/* Personal Information */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-sm font-medium text-zinc-100">
                      Nombre Completo *
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Tu nombre completo"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="bg-zinc-800 border-zinc-600 text-zinc-100 h-12 focus:border-zinc-500 placeholder:text-zinc-400 transition-all duration-200 focus:ring-2 focus:ring-zinc-500/50 hover:border-zinc-500"
                    />
                    {formErrors.name && (
                      <p className="text-red-400 text-xs font-medium">{formErrors.name}</p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-sm font-medium text-zinc-100">
                      Correo Electrónico *
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="tu.correo@ejemplo.com"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="bg-zinc-800 border-zinc-600 text-zinc-100 h-12 focus:border-zinc-500 placeholder:text-zinc-400 transition-all duration-200 focus:ring-2 focus:ring-zinc-500/50 hover:border-zinc-500"
                    />
                    {formErrors.email && (
                      <p className="text-red-400 text-xs font-medium">{formErrors.email}</p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-sm font-medium text-zinc-100">
                      Teléfono *
                    </Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="+52 (55) 1234-5678"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="bg-zinc-800 border-zinc-600 text-zinc-100 h-12 focus:border-zinc-500 placeholder:text-zinc-400 transition-all duration-200 focus:ring-2 focus:ring-zinc-500/50 hover:border-zinc-500"
                    />
                    {formErrors.phone && (
                      <p className="text-red-400 text-xs font-medium">{formErrors.phone}</p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="company" className="text-sm font-medium text-zinc-100">
                      Empresa (Opcional)
                    </Label>
                    <Input
                      id="company"
                      name="company"
                      type="text"
                      placeholder="Nombre de tu empresa"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="bg-zinc-800 border-zinc-600 text-zinc-100 h-12 focus:border-zinc-500 placeholder:text-zinc-400 transition-all duration-200 focus:ring-2 focus:ring-zinc-500/50 hover:border-zinc-500"
                    />
                  </div>
                </div>

                <Separator className="bg-zinc-700" />

                {/* Product Interest */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="productInterest" className="text-sm font-medium text-zinc-100">
                      Producto de Interés
                    </Label>
                    <Select value={formData.productInterest} onValueChange={(value) => handleSelectChange('productInterest', value)}>
                      <SelectTrigger className="bg-zinc-800 border-zinc-600 text-zinc-100 h-12 focus:border-zinc-500 transition-all duration-200 hover:border-zinc-500">
                        <SelectValue placeholder="Selecciona un producto" />
                      </SelectTrigger>
                      <SelectContent className="bg-zinc-800 border-zinc-600 text-zinc-100">
                        {products.map((product) => (
                          <SelectItem key={product.value} value={product.value} className="focus:bg-zinc-700 focus:text-zinc-100 hover:bg-zinc-700 transition-colors duration-150">
                            {product.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="loanAmount" className="text-sm font-medium text-zinc-100">
                      Monto Aproximado
                    </Label>
                    <Select value={formData.loanAmount} onValueChange={(value) => handleSelectChange('loanAmount', value)}>
                      <SelectTrigger className="bg-zinc-800 border-zinc-600 text-zinc-100 h-12 focus:border-zinc-500 transition-all duration-200 hover:border-zinc-500">
                        <SelectValue placeholder="Selecciona un rango" />
                      </SelectTrigger>
                      <SelectContent className="bg-zinc-800 border-zinc-600 text-zinc-100">
                        {loanAmounts.map((amount) => (
                          <SelectItem key={amount.value} value={amount.value} className="focus:bg-zinc-700 focus:text-zinc-100 hover:bg-zinc-700 transition-colors duration-150">
                            {amount.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <Label htmlFor="message" className="text-sm font-medium text-zinc-100">
                    Mensaje *
                  </Label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    placeholder="Cuéntanos sobre tus necesidades financieras o cualquier pregunta que tengas..."
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full bg-zinc-800 border border-zinc-600 text-zinc-100 p-3 focus:border-zinc-500 placeholder:text-zinc-400 transition-all duration-200 focus:ring-2 focus:ring-zinc-500/50 hover:border-zinc-500 resize-vertical min-h-[120px] rounded-md"
                  />
                  {formErrors.message && (
                    <p className="text-red-400 text-xs font-medium">{formErrors.message}</p>
                  )}
                </div>

                {/* Submit Button */}
                <div className="pt-4">
                  <motion.div whileHover={subtleHover}>
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-white text-black hover:bg-zinc-200 rounded-none h-12 text-base font-semibold transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <div className="flex items-center">
                          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-black mr-2"></div>
                          Enviando...
                        </div>
                      ) : (
                        <div className="flex items-center justify-center">
                          <Send className="h-4 w-4 mr-2" />
                          Enviar Mensaje
                        </div>
                      )}
                    </Button>
                  </motion.div>
                </div>

                <p className="text-xs text-zinc-400 text-center">
                  Al enviar este formulario, aceptas que HUSH Financiera se ponga en contacto contigo 
                  para brindarte información sobre nuestros productos y servicios. Hush no compartirá tu información con terceros.
                </p>
              </motion.form>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}