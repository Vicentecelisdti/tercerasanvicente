export interface NewsItem {
  id: number;
  title: string;
  category: string;
  date: string;
  excerpt: string;
}

export interface FaqItem {
  q: string;
  a: string;
}

export interface ConvenioItem {
  id: number;
  imageSrc: string;
  title: string;
  subtitle: string;
  description: string;
  discountText: string;
  benefit: string;
  requirements: string[];
  conditions: string;
}

export const conveniosData: ConvenioItem[] = [
  /*
  {
    id: 1,
    imageSrc: "/Cosmovision.webp",
    title: "Óptica Cosmovisión",
    subtitle: "10% de descuento para socios y núcleo familiar.",
    description: "Descuento aplicable en lentes recetados, marcos, cristales y exámenes visuales presentando credencial vigente.",
    discountText: "10% OFF",
    benefit: "10% de descuento en lentes recetados y marcos para el socio cooperador y su grupo familiar directo.",
    requirements: [
      "Presentar carnet de identidad del socio.",
      "Acreditar parentesco directo para grupo familiar."
    ],
    conditions: "Mantener su pago mensual al día."
  },
  {
    id: 2,
    imageSrc: "/picaldelrey.webp",
    title: "Pica del Rey",
    subtitle: "20% de descuento sin mínimo de compra para socios.",
    description: "Válido en consumo local en horario de atención de 11 AM a 11 PM.",
    discountText: "20% OFF",
    benefit: "20% de descuento en toda la carta, sin requerir monto mínimo de consumo.",
    requirements: [
      "Presentar carnet de identidad del socio."
    ],
    conditions: "Mantener su pago mensual al día."
  },
  {
    id: 3,
    imageSrc: "/cumbre.svg",
    title: "Preuniversitario CUMBRE",
    subtitle: "30% de descuento en arancel para socios y núcleo familiar.",
    description: "Prepárate para la PAES con un arancel preferencial en planes de estudio seleccionados.",
    discountText: "30% OFF",
    benefit: "Descuento del 30% en el arancel mensual para el socio y su núcleo familiar directo.",
    requirements: [
      "Presentar carnet de identidad del socio.",
      "Acreditar parentesco directo para grupo familiar."
    ],
    conditions: "Mantener su pago mensual al día."
  },
  {
    id: 4,
    imageSrc: "/oviedo.webp",
    title: "Ferretería Ovideo",
    subtitle: "3% dcto. para socios.",
    description: "Descuento en herramientas, materiales y artículos de ferretería en general.",
    discountText: "3% OFF",
    benefit: "3% de rebaja directa sobre el total de tu boleta en compras presenciales.",
    requirements: [
      "Presentar carnet de identidad del socio."
    ],
    conditions: "Mantener su pago mensual al día."
  },
  {
    id: 5,
    imageSrc: "/sebi.webp",
    title: "Entretenciones Sebi",
    subtitle: "10% dcto en arriendo de juegos inflables, mecánicos, miniarcade, taca taca",
    description: "Equipamiento premium para celebraciones y eventos infantiles.",
    discountText: "10% OFF",
    benefit: "10% de descuento en el valor de arriendo diario de juegos inflables, mecánicos y miniarcades.",
    requirements: [
      "Presentar carnet de identidad del socio."
    ],
    conditions: "Mantener su pago mensual al día."
  },
  {
    id: 6,
    imageSrc: "",
    title: "Rhino SPA",
    subtitle: "Descuentos preferentes en mantención, recarga y revisión de extintores.",
    description: "Servicios de seguridad contra incendios certificados y garantizados.",
    discountText: "PREFERENTE",
    benefit: "Acceso a tarifas rebajadas en mantención periódica de extintores domiciliarios y comerciales.",
    requirements: [
      "Presentar carnet de identidad del socio."
    ],
    conditions: "Mantener su pago mensual al día."
  },
  {
    id: 7,
    imageSrc: "/parabrisas.webp",
    title: "Parabrisas Bastian",
    subtitle: "Descuentos preferentes en reparación y instalación de parabrisas.",
    description: "Soluciones de vidrios automotrices con personal técnico calificado.",
    discountText: "PREFERENTE",
    benefit: "Tarifas con descuento especial en reparación de fisuras e instalación de parabrisas de vehículos.",
    requirements: [
      "Presentar carnet de identidad del socio."
    ],
    conditions: "Mantener su pago mensual al día."
  }*/
];


export const faqData: FaqItem[] = [
  {
    q: "¿Qué es un Socio Cooperador?",
    a: "Es una persona que realiza un aporte económico mensual a través de un mandato PAC Banco de Chile, para apoyar el funcionamiento de la Tercera Compañía de Bomberos de San Vicente de Tagua Tagua."
  },
  {
    q: "¿Cómo puedo inscribirme?",
    a: "Para inscribirte debes acercarte a nuestro cuartel, rellenar el mandato de socio cooperador, definir el monto mensual y firmar el formulario de incorporación."
  },
  {
    q: "¿Cuál es el valor del aporte?",
    a: "El aporte mensual lo defines tú, desde un monto mínimo de $3.500."
  },
  {
    q: "¿Cómo accedo a los convenios?",
    a: "Al inscribirte como socio cooperador automaticamente pasas a nuestro registro general de socios cooperadores, presentando tu carnet de identidad al momento de utilizar un convenio es suficiente para acceder al beneficio."
  },
  {
    q: "¿Los convenios cambian?",
    a: "Sí. Constantemente buscamos incorporar nuevos convenios con empresas y comercios locales para entregar más beneficios a nuestros Socios Cooperadores."
  },
  {
    q: "¿Puedo dejar de ser Socio Cooperador?",
    a: "Sí. Puedes solicitar la cancelación de tu aporte en cualquier momento contactándote con nuestra Compañía."
  }
];
