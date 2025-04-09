
export interface BaseProductFeatures {
    id: string;
    title: string;
    tagline: string;
    description: string;
    features: string[];
    requirements?: string[];
  }
  
  export interface CreditProduct extends BaseProductFeatures {
    minAmount: number;
    maxAmount: number;
    minTerm: number;
    maxTerm: number;
    interestRate: number;
    calculation?: string;
  }
  
  export interface FinancialService extends BaseProductFeatures {
    requirements: string[];
  }
  
  // Complete financial products and services data based on HUSH Financiera PDF
  
  export const creditProducts: CreditProduct[] = [
    {
      id: "personal",
      title: "HUSH Crédito Personal",
      tagline: "El apoyo que necesitas, sin necesidad de explicaciones",
      description: "Crédito de libre disposición para hacer frente a obligaciones o emergencias con montos desde $1,000 MXN hasta $500,000 MXN.",
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
      calculation: "C_p = I_n − (g + a %)",
      minAmount: 1000,
      maxAmount: 500000,
      minTerm: 2,
      maxTerm: 96,
      interestRate: 0.18
    },
    {
      id: "micro",
      title: "Microcrédito HUSH",
      tagline: "Rápido y silencioso",
      description: "Crédito para personas con proyectos productivos, micronegocios o actividades comerciales con un monto máximo de 30 mil UDIS.",
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
      minAmount: 1000,
      maxAmount: 250000, // Aproximación de 30 mil UDIS
      minTerm: 1,
      maxTerm: 36,
      interestRate: 0.24
    },
    {
      id: "prenda",
      title: "Crédito Prendario HUSH",
      tagline: "De metales hasta gemas, HUSH redefine el valor de tus cosas",
      description: "Crédito con garantía de un bien inmueble, desde maquinaria hasta la producción de un negocio.",
      features: [
        "Tasas preferenciales desde 15% anual",
        "Valuación profesional por expertos certificados",
        "Hasta el 80% del valor de la prenda",
        "Plazos flexibles de 1 a 24 meses",
        "Seguro incluido para protección total de la prenda",
        "Servicio de custodia en bóvedas de alta seguridad",
        "Derecho de demasía garantizado"
      ],
      requirements: [
        "Identificación oficial vigente",
        "Comprobante de domicilio no mayor a 3 meses",
        "Prenda a evaluar con documentos que acrediten propiedad (si aplica)",
        "Ser mayor de edad"
      ],
      minAmount: 5000,
      maxAmount: 1000000,
      minTerm: 1,
      maxTerm: 24,
      interestRate: 0.15
    },
    {
      id: "pyme",
      title: "Créditos PyMEs",
      tagline: "Financiamiento especializado para pequeñas y medianas empresas",
      description: "Préstamos para personas morales y físicas con actividad empresarial para cubrir necesidades de operación y equipamiento.",
      features: [
        "Montos desde $50,000 MXN hasta $5,000,000 MXN",
        "Tasas competitivas desde 16% anual",
        "Plazos de 6 a 60 meses",
        "Sin penalización por pagos anticipados",
        "Asesoría financiera especializada"
      ],
      requirements: [
        "Antigüedad mínima de 2 años para clientes HUSH, 4 años para nuevos clientes",
        "Ventas anuales mínimas de $2,000,000 MXN",
        "Documentación financiera de los últimos 12 meses",
        "Buen historial crediticio",
        "Garantía hipotecaria, prendaria o aval según evaluación"
      ],
      minAmount: 50000,
      maxAmount: 5000000,
      minTerm: 6,
      maxTerm: 60,
      interestRate: 0.16
    },
    {
      id: "oro",
      title: "Préstamos con Garantía de Oro y Joyas",
      tagline: "Valor seguro para sus piezas más preciadas",
      description: "Préstamos respaldados por metales preciosos y gemas con condiciones exclusivas y valuación por especialistas certificados.",
      features: [
        "Tasas desde 12% anual",
        "Préstamos de hasta el 85% del valor de tasación",
        "Plazos flexibles de 1 a 36 meses",
        "Opción de renovación y ampliación",
        "Seguro de protección incluido",
        "Custodia en bóvedas de máxima seguridad"
      ],
      requirements: [
        "Identificación oficial vigente",
        "Comprobante de domicilio reciente",
        "Certificados de autenticidad o facturas originales (si se poseen)",
        "Ser mayor de edad"
      ],
      minAmount: 5000,
      maxAmount: 2000000,
      minTerm: 1,
      maxTerm: 36,
      interestRate: 0.12
    }
  ];
  
  export const specializedProducts: CreditProduct[] = [
    {
      id: "auto",
      title: "Préstamos con Garantía Automotriz",
      tagline: "Movilidad y liquidez sin sacrificios",
      description: "Préstamos que le permiten utilizar el valor de su vehículo sin perder su uso, con tasas competitivas y trámites simplificados.",
      features: [
        "Préstamos de hasta el 70% del valor comercial del vehículo",
        "Tasas competitivas desde 14.5% anual",
        "Plazos de 12 a 48 meses",
        "Conserva el uso de su vehículo durante todo el plazo",
        "Sin revisión exhaustiva de historial crediticio"
      ],
      requirements: [
        "Vehículo con antigüedad no mayor a 10 años",
        "Factura original",
        "Tarjeta de circulación vigente",
        "Identificación oficial",
        "Comprobante de domicilio"
      ],
      minAmount: 50000,
      maxAmount: 1000000,
      minTerm: 12,
      maxTerm: 48,
      interestRate: 0.145
    },
    {
      id: "emprendedor",
      title: "Créditos para Emprendedores",
      tagline: "Impulsamos tu visión de negocio desde el inicio",
      description: "Apoyo financiero para startups y nuevos proyectos empresariales con condiciones adaptadas a la fase inicial.",
      features: [
        "Financiamiento desde $100,000 MXN hasta $2,000,000 MXN",
        "Tasas preferenciales desde 17% anual",
        "Plazos extendidos de hasta 48 meses",
        "Periodo de gracia opcional de hasta 6 meses",
        "Asesoría financiera y empresarial incluida"
      ],
      requirements: [
        "Plan de negocios detallado y viabilidad demostrada",
        "Proyecciones financieras a 3 años",
        "Aportación mínima del 30% del proyecto",
        "Garantías alternativas",
        "Experiencia comprobable en el sector"
      ],
      minAmount: 100000,
      maxAmount: 2000000,
      minTerm: 12,
      maxTerm: 48,
      interestRate: 0.17
    },
    {
      id: "estacional",
      title: "Financiamiento Estacional",
      tagline: "Liquidez en sincronía con tu ciclo de negocio",
      description: "Soluciones adaptadas a los ciclos de negocio o temporadas de mayor demanda con esquemas de pago flexibles.",
      features: [
        "Líneas de crédito revolventes activadas según temporada",
        "Tasas desde 15% anual adaptadas al ciclo de ventas",
        "Plazos cortos de 3 a 9 meses alineados con la temporada",
        "Anticipo de hasta el 70% de las ventas proyectadas",
        "Sin penalización por pagos anticipados"
      ],
      requirements: [
        "Historial de operación en al menos una temporada previa",
        "Proyección de ventas sustentada",
        "Estados financieros de los últimos 12 meses",
        "Identificación oficial y comprobante de domicilio",
        "Garantía según evaluación"
      ],
      minAmount: 50000,
      maxAmount: 3000000,
      minTerm: 3,
      maxTerm: 9,
      interestRate: 0.15
    },
    {
      id: "tecnologico",
      title: "Préstamos para Compra de Equipo Tecnológico",
      tagline: "Innovación financiada para tu crecimiento digital",
      description: "Financiamiento especializado para la adquisición de equipos y tecnología con condiciones preferentes.",
      features: [
        "Financiamiento de hasta el 100% del valor del equipo",
        "Tasas preferenciales desde 12% anual",
        "Plazos de 12 a 36 meses",
        "Póliza de seguro tecnológico incluida",
        "Opción de actualización tecnológica al 50% del plazo"
      ],
      requirements: [
        "Cotización formal del proveedor autorizado",
        "Comprobante de domicilio comercial",
        "Identificación oficial del solicitante",
        "Comprobantes de ingresos de los últimos 3 meses",
        "Justificación de la inversión tecnológica"
      ],
      minAmount: 20000,
      maxAmount: 1000000,
      minTerm: 12,
      maxTerm: 36,
      interestRate: 0.12
    }
  ];
  
  export const financialServices: FinancialService[] = [
    {
      id: "intermediacion",
      title: "Intermediación Crediticia",
      tagline: "Conectamos capital con oportunidades",
      description: "Actuamos como enlace entre acreditantes y acreditados, asegurando los mejores términos para ambas partes con total transparencia.",
      features: [
        "Evaluación profesional de necesidades financieras",
        "Acceso a una red de inversionistas y prestamistas",
        "Negociación de condiciones óptimas",
        "Acompañamiento durante todo el proceso",
        "Confidencialidad garantizada"
      ],
      requirements: [
        "Documentación financiera completa",
        "Proyecto o necesidad claramente definida",
        "Capacidad de pago demostrable",
        "Entrevista personal con asesor HUSH"
      ]
    },
    {
      id: "consolidacion",
      title: "Consolidación de Deudas",
      tagline: "Simplifica tu vida financiera",
      description: "Reunificamos tus deudas en una sola cuota manejable, simplificando tu vida financiera y mejorando tu flujo de efectivo mensual.",
      features: [
        "Análisis integral de tu situación financiera",
        "Reducción de la tasa efectiva global",
        "Una sola cuota mensual adaptada a tu capacidad",
        "Eliminación de múltiples fechas de pago",
        "Posibilidad de incluir deudas bancarias y no bancarias"
      ],
      requirements: [
        "Historial de pagos de los últimos 6 meses",
        "Comprobantes de ingresos recientes",
        "Identificación oficial y comprobante de domicilio",
        "Estados de cuenta de las deudas a consolidar",
        "Entrevista con asesor financiero HUSH"
      ]
    },
    {
      id: "factoraje",
      title: "Factoraje de Facturas",
      tagline: "Convierte tus cuentas por cobrar en liquidez inmediata",
      description: "Adelantamos los cobros de tu negocio para mejorar tu flujo de efectivo con opciones con y sin recurso según tus necesidades.",
      features: [
        "Anticipos de hasta el 90% del valor de las facturas",
        "Comisiones competitivas desde 1.2% mensual",
        "Evaluación rápida en 48 horas",
        "Opciones de factoraje con y sin recurso",
        "Servicio de cobranza incluido",
        "Confidencialidad en la relación con tus clientes"
      ],
      requirements: [
        "Ser persona física con actividad empresarial o persona moral",
        "Mínimo un año de operaciones",
        "Facturas electrónicas (CFDI) vigentes",
        "Clientes con buena calificación crediticia",
        "Documentación legal y fiscal actualizada"
      ]
    },
    {
      id: "financiamiento-corto",
      title: "Financiamiento a Corto Plazo",
      tagline: "Liquidez inmediata para tus necesidades urgentes",
      description: "Obtén liquidez inmediata para solventar problemas relacionados con tus ingresos con mínimos requisitos y rápida aprobación.",
      features: [
        "Plazos menores a 12 meses",
        "Tasas competitivas para créditos de corto plazo",
        "Mínima documentación requerida",
        "Respuesta en menos de 48 horas",
        "Posibilidad de renovación automática"
      ],
      requirements: [
        "Identificación oficial vigente",
        "Comprobante de domicilio",
        "Comprobante de ingresos reciente",
        "Referencias personales o comerciales"
      ]
    },
    {
      id: "equipos",
      title: "Financiamiento para Equipos y Maquinaria",
      tagline: "Moderniza tu operación sin descapitalizar tu negocio",
      description: "Soluciones de financiamiento refaccionario para la adquisición, rehabilitación y mejora de equipos con plazos extendidos.",
      features: [
        "Financiamiento de hasta el 80% del valor del equipo",
        "Tasas preferenciales desde 14% anual",
        "Plazos extendidos de hasta 60 meses",
        "Periodo de gracia opcional de hasta 6 meses",
        "Garantía limitada a los equipos financiados"
      ],
      requirements: [
        "Estados financieros de los últimos 2 ejercicios",
        "Flujo de efectivo proyectado",
        "Cotización formal de los equipos a adquirir",
        "Plan de negocio que justifique la inversión",
        "Comprobante de domicilio del negocio"
      ]
    },
    {
      id: "capital",
      title: "Capital de Trabajo para Pequeñas Empresas",
      tagline: "Oxígeno financiero para la operación diaria",
      description: "Financiamiento para cubrir necesidades operativas de pequeñas empresas, desde insumos hasta salarios, con evaluación personalizada.",
      features: [
        "Montos desde $100,000 MXN hasta $3,000,000 MXN",
        "Tasas desde 16.5% anual",
        "Plazo máximo de 24 meses (5 años para capital permanente)",
        "Disposiciones revolventes según necesidad",
        "Sin comisiones por apertura para clientes HUSH"
      ],
      requirements: [
        "Antigüedad mínima de 18 meses en operación",
        "Documentación financiera completa",
        "Referencias comerciales verificables",
        "Plan de inversión detallado",
        "Garantía según evaluación"
      ]
    }
  ];