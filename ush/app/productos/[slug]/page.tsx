// app/productos/[slug]/page.tsx
"use client";
import React, { use } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { LoanSimulatorModal } from '@/components/modals/LoanSimulatorModal';
import { Calculator, ChevronLeft, Check, AlertCircle } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import { notFound } from 'next/navigation';
import { motion } from "framer-motion";

// Define the product data similar to your ProductsSection.tsx
const productData = {
  "credito-personal": {
    title: "HUSH Crédito Personal",
    tagline: "El apoyo que necesitas, sin necesidad de explicaciones",
    description: "Crédito de libre disposición para hacer frente a obligaciones o emergencias con montos desde $1,000 MXN hasta $500,000 MXN.",
    details: "El crédito personal es aquel en donde la entidad financiera pone a disposición del cliente una suma de dinero que se podrá usar libremente, sin necesidad de destinarlo al consumo de un bien o asunto específico. Se pueden adquirir montos desde 1,000 hasta 500,000 pesos; los plazos varían desde 2 a 96 meses con pagos realizables de manera mensual, quincenal o semanales dependiendo de la institución.",
    features: [
      "Tasa de interés fija",
      "Sin penalización por pago anticipado",
      "Plazos de 2 a 96 meses",
      "Pagos mensuales, quincenales o semanales"
    ],
    requirements: [
      "Edad mínima de 18 años y máxima de 84 años",
      "Ser persona física",
      "Capacidad de pago o buen historial crediticio",
      "Comprobante de domicilio",
      "Estado de cuenta bancario"
    ],
    faqs: [
      {
        question: "¿Puedo pagar mi crédito personal anticipadamente?",
        answer: "Sí, en HUSH Financiera puedes realizar pagos anticipados o liquidar tu crédito en cualquier momento sin penalizaciones adicionales."
      },
      {
        question: "¿Qué puedo hacer con un crédito personal?",
        answer: "El crédito personal puede utilizarse para cualquier propósito que necesites: consolidar deudas, cubrir gastos médicos, hacer mejoras al hogar, financiar estudios, o cualquier otro objetivo personal."
      },
      {
        question: "¿Cuánto tiempo toma aprobar mi solicitud?",
        answer: "La evaluación inicial se realiza en 24 horas. Una vez aprobado, los fondos pueden estar disponibles en tu cuenta en tan solo 48 horas."
      }
    ],
    alerts: [
      {
        type: "info",
        text: "Es importante evaluar tu capacidad de pago antes de solicitar cualquier crédito. Tu capacidad de pago se calcula restando a tu ingreso neto después de impuestos, tus gastos y el porcentaje destinado al ahorro."
      }
    ]
  },
  "microcredito": {
    title: "Microcrédito HUSH",
    tagline: "Rápido y silencioso",
    description: "Crédito para personas con proyectos productivos, micronegocios o actividades comerciales con un monto máximo de 30 mil UDIS.",
    details: "El microcrédito es un Crédito otorgado a personas de bajos recursos y/o en estado de marginación, destinado al desarrollo de micronegocios, a la promoción de actividades productivas, artesanales, comerciales, de servicios, consumo y vivienda. Los microcréditos pueden ser individuales o grupales, y se pueden destinar a capital de trabajo o inversiones en activos fijos.",
    features: [
      "Monto máximo a 30 mil UDIS",
      "Máximo plazo de 3 años",
      "Opciones individuales o grupales",
      "Modalidad grupal: 8,500 UDIS con plazo máximo de un año"
    ],
    requirements: [
      "Edad mínima de 18 años y máxima de 84 años",
      "Ser persona física",
      "Identificación vigente",
      "Comprobante de ventas",
      "Comprobante de domicilio (si se cuenta con local)",
      "Estado de cuenta bancario"
    ],
    faqs: [
      {
        question: "¿Qué diferencia hay entre microcrédito individual y grupal?",
        answer: "El microcrédito individual se otorga directamente a una persona para su proyecto o negocio. El microcrédito grupal se otorga a un grupo de personas que se avalan entre sí, compartiendo la responsabilidad del pago."
      },
      {
        question: "¿Qué son las UDIS y cómo se convierten a pesos?",
        answer: "Las UDIS (Unidades de Inversión) son unidades de valor que se basan en el incremento de los precios. Su valor en pesos es actualizado y publicado diariamente por el Banco de México."
      }
    ],
    alerts: [
      {
        type: "info",
        text: "En caso de solicitar microcrédito grupal, los requisitos son aplicados a cada solidario, y sus deudas avaladas entre sí."
      }
    ]
  },
  "credito-prendario": {
    title: "Crédito Prendario HUSH",
    tagline: "De metales hasta gemas, HUSH redefine el valor de tus cosas",
    description: "Crédito con garantía de un bien inmueble, desde maquinaria hasta la producción de un negocio.",
    details: "El crédito prendario es aquel crédito que se otorga a cambio de un bien inmueble en garantía, desde maquinaria, hasta la producción de un negocio. Tanto personas físicas como morales pueden acceder a este tipo de créditos. Al momento de venta de la prenda, el cliente como pignorante tiene el derecho a saber el monto de venta y solicitar un porcentaje de ese dinero (Derecho de demasía).",
    features: [
      "Valuación profesional de tu prenda",
      "Tasas competitivas",
      "Derecho de demasía al momento de venta",
      "Transparencia en términos y condiciones"
    ],
    requirements: [
      "Artículo prendario",
      "Identificación oficial",
      "Factura o comprobantes para artículos valiosos",
      "Valuación por especialistas de HUSH"
    ],
    faqs: [
      {
        question: "¿Qué ocurre si no puedo pagar el crédito prendario?",
        answer: "Si no se puede liquidar el crédito en el plazo acordado, la prenda puede pasar a propiedad de HUSH Financiera para su venta. Como cliente, tienes derecho a conocer el monto de venta y reclamar la diferencia entre este monto y tu deuda (derecho de demasía)."
      },
      {
        question: "¿Qué tipo de bienes puedo dejar en prenda?",
        answer: "Puedes dejar como garantía diversos bienes como joyas, metales preciosos, maquinaria, equipo electrónico, vehículos y otros bienes de valor. La aceptación dependerá de la evaluación de nuestros especialistas."
      }
    ],
    alerts: [
      {
        type: "info",
        text: "De acuerdo con la Norma Oficial Mexicana NOM-179-SCFI-2007, las casas de empeño deben tener a la vista el porcentaje del valor de la prenda, las prendas aceptadas, y todos los términos y condiciones aplicables."
      }
    ]
  },
  "creditos-pymes": {
    title: "Créditos PyMEs",
    tagline: "Financiamiento especializado para pequeñas y medianas empresas",
    description: "Préstamos para personas morales y físicas con actividad empresarial para cubrir necesidades de operación y equipamiento.",
    details: "El mercado de crédito a PYMES está conformado por préstamos que las instituciones financieras otorgan a personas morales y personas físicas con actividad empresarial a fin de cubrir sus necesidades específicas de operación y equipamiento. Para ser considerada PYME, una empresa debe encontrarse dentro del umbral definido por la Secretaría de Economía, no ser fideicomiso, y no haber recibido crédito cuyo monto exceda los 50 millones de pesos.",
    features: [
      "Montos adaptados a las necesidades de tu negocio",
      "Plazos que se ajustan a tu ciclo operativo",
      "Opciones para personas físicas y morales"
    ],
    requirements: [
      "Cumplir con los umbrales establecidos por la Secretaría de Economía",
      "No ser fideicomiso",
      "No haber recibido créditos que excedan los 50 millones de pesos",
      "Antigüedad empresarial de al menos 2-4 años",
      "Ventas anuales de al menos $5,000,000 MXN",
      "Buen historial crediticio"
    ],
    faqs: [
      {
        question: "¿Mi empresa califica como PYME?",
        answer: "Las PyMEs se definen según el número de empleados y el nivel de ventas anuales. La Secretaría de Economía establece estos umbrales. Generalmente, microempresas tienen hasta 10 empleados, pequeñas hasta 50 y medianas hasta 250."
      },
      {
        question: "¿Para qué puedo utilizar un crédito PyME?",
        answer: "Los créditos PyME pueden utilizarse para capital de trabajo, adquisición de maquinaria y equipo, expansión de instalaciones, desarrollo de nuevos productos o servicios, entre otros fines relacionados con la operación y crecimiento de tu empresa."
      }
    ],
    alerts: [
      {
        type: "warning",
        text: "Para personas morales, se requiere acta constitutiva y poder notarial del representante de la empresa, ambos con sello de inscripción en el Registro Público y comprobante de domicilio no mayor a 3 meses."
      }
    ]
  },
  "prestamos-especializados": {
    title: "Préstamos Especializados",
    tagline: "Soluciones financieras para casos y necesidades particulares",
    description: "Ofrecemos préstamos especializados para situaciones específicas como garantía automotriz, emprendimientos, necesidades estacionales y adquisición de equipo tecnológico.",
    details: "Los préstamos especializados son productos diseñados para atender necesidades específicas que no se cubren con los productos financieros tradicionales. Estos incluyen préstamos con garantía automotriz, financiamiento para emprendedores, financiamiento estacional y préstamos para adquisición de equipo tecnológico.",
    features: [
      "Condiciones adaptadas al propósito específico del préstamo",
      "Plazos y montos personalizados",
      "Evaluación especializada según el tipo de préstamo",
      "Asesoría profesional según el destino de los fondos"
    ],
    requirements: [
      "Requisitos varían según el tipo de préstamo especializado",
      "Documentación específica según el propósito del financiamiento",
      "En algunos casos, garantías relacionadas con el propósito del préstamo"
    ],
    faqs: [
      {
        question: "¿Qué tipos de préstamos especializados ofrecen?",
        answer: "Ofrecemos préstamos con garantía automotriz, créditos para emprendedores, financiamiento estacional y préstamos para compra de equipo tecnológico, entre otros."
      },
      {
        question: "¿Cómo puedo saber qué tipo de préstamo especializado necesito?",
        answer: "Nuestros asesores pueden evaluar tu situación particular y recomendarte el producto más adecuado para tus necesidades. Contáctanos para una evaluación personalizada."
      }
    ],
    alerts: [
      {
        type: "info",
        text: "Los préstamos especializados requieren una evaluación detallada. Te recomendamos agendar una consulta con nuestros especialistas para analizar tu caso particular."
      }
    ]
  }
};

interface ProductDetailsProps {
  params: {
    slug: string;
  };
}

export default function ProductDetailsPage({ params }: ProductDetailsProps) {
  // Unwrap params using React.use()
  const unwrappedParams = use(params);
  const slug = unwrappedParams.slug;
  
  // Check if product exists
  if (!productData[slug]) {
    notFound();
  }
  
  const product = productData[slug];
  
  // Reusable animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 }
  };
  
  // List item stagger animation
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08
      }
    }
  };
  
  // Subtle hover effect
  const subtleHover = {
    scale: 1.01,
    transition: { duration: 0.3, ease: "easeInOut" }
  };
  
  return (
    <main>
      <section className="py-16 md:py-20 border-b border-zinc-800">
        <div className="container mx-auto px-4 md:px-8 lg:px-12">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="mb-8"
          >
            {/* CHANGED: Link now points to homepage instead of /productos */}
            <Link href="/" className="inline-flex items-center text-zinc-400 hover:text-white transition-colors">
              <ChevronLeft className="mr-2 h-4 w-4" />
              Volver al Inicio
            </Link>
          </motion.div>
          
          <div className="max-w-4xl">
            <motion.h1 
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="text-3xl md:text-5xl font-bold mb-3"
            >
              {product.title}
            </motion.h1>
            
            <motion.p 
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
              className="text-xl text-zinc-400 italic mb-8"
            >
              "{product.tagline}"
            </motion.p>
            
            <motion.p 
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
              className="text-lg text-zinc-300 mb-8"
            >
              {product.description}
            </motion.p>
            
            <motion.div 
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 mb-16"
            >
              <motion.div whileHover={subtleHover}>
                <LoanSimulatorModal 
                  buttonText="Simular Crédito" 
                  buttonVariant="default" 
                  className="bg-white text-black hover:bg-zinc-200 rounded-none"
                />
              </motion.div>
              
              <motion.div whileHover={subtleHover}>
                <Link href="/contacto">
                  <Button variant="outline" className="border-zinc-700 hover:bg-zinc-900 rounded-none">
                    Solicitar Información
                  </Button>
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
      
      <section className="py-16 border-b border-zinc-800">
        <div className="container mx-auto px-4 md:px-8 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeIn}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <h2 className="text-2xl font-bold mb-6">Detalles del Producto</h2>
              <div className="prose prose-zinc prose-invert max-w-none">
                <p>{product.details}</p>
              </div>
              
              {product.alerts && product.alerts.length > 0 && (
                <motion.div 
                  className="mt-8 space-y-4"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={container}
                >
                  {product.alerts.map((alert, index) => (
                    <motion.div 
                      key={index}
                      variants={fadeIn}
                      transition={{ duration: 0.5, ease: "easeOut" }}
                      className={`flex p-4 border rounded-sm ${
                        alert.type === 'warning' ? 'border-amber-700 bg-amber-950/30' : 'border-blue-700 bg-blue-950/30'
                      }`}
                    >
                      <AlertCircle className="h-5 w-5 mr-3 flex-shrink-0 text-zinc-300" />
                      <p className="text-zinc-300 text-sm">{alert.text}</p>
                    </motion.div>
                  ))}
                </motion.div>
              )}
            </motion.div>
            
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeIn}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            >
              <h2 className="text-2xl font-bold mb-6">Características</h2>
              <motion.ul 
                className="space-y-3 mb-8"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={container}
              >
                {product.features.map((feature, index) => (
                  <motion.li 
                    key={index} 
                    className="flex items-start"
                    variants={fadeIn}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                  >
                    <Check className="h-5 w-5 mr-2 text-white" />
                    <span>{feature}</span>
                  </motion.li>
                ))}
              </motion.ul>
              
              <h2 className="text-2xl font-bold mb-6 mt-12">Requisitos</h2>
              <motion.ul 
                className="space-y-3"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={container}
              >
                {product.requirements.map((requirement, index) => (
                  <motion.li 
                    key={index} 
                    className="flex items-start"
                    variants={fadeIn}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                  >
                    <Check className="h-5 w-5 mr-2 text-white" />
                    <span>{requirement}</span>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          </div>
        </div>
      </section>
      
      {product.faqs && product.faqs.length > 0 && (
        <section className="py-16 border-b border-zinc-800">
          <div className="container mx-auto px-4 md:px-8 lg:px-12">
            <motion.h2 
              className="text-2xl font-bold mb-8"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeIn}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              Preguntas Frecuentes
            </motion.h2>
            
            <motion.div 
              className="space-y-8 max-w-3xl"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={container}
            >
              {product.faqs.map((faq, index) => (
                <motion.div 
                  key={index} 
                  className="space-y-2"
                  variants={fadeIn}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                >
                  <h3 className="text-xl font-medium">{faq.question}</h3>
                  <p className="text-zinc-300">{faq.answer}</p>
                  {index < product.faqs.length - 1 && <Separator className="mt-8 bg-zinc-800" />}
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      )}
      
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-8 lg:px-12">
          <motion.div 
            className="bg-zinc-900 border border-zinc-800 p-8 md:p-12 text-center max-w-3xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <motion.h2 
              className="text-2xl font-bold mb-4"
              variants={fadeIn}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              ¿Listo para empezar?
            </motion.h2>
            
            <motion.p 
              className="text-zinc-300 mb-8"
              variants={fadeIn}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
            >
              Contacta a nuestros asesores especializados para conocer más sobre {product.title} y cómo puede adaptarse a tus necesidades específicas.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row justify-center gap-4"
              variants={fadeIn}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
            >
              <motion.div whileHover={subtleHover}>
                <Link href="/contacto">
                  <Button className="bg-white text-black hover:bg-zinc-200 rounded-none">
                    Contactar a un Asesor
                  </Button>
                </Link>
              </motion.div>
              
              <motion.div whileHover={subtleHover}>
                <LoanSimulatorModal 
                  buttonText="Simular Crédito" 
                  buttonVariant="outline" 
                  className="border-zinc-700 hover:bg-zinc-900 rounded-none"
                />
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}