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
  {
    id: 1,
    imageSrc: "/optica_cosmovision.jpg",
    title: "Óptica CosmoVisión",
    subtitle: "10% de descuento para Socios Cooperadores.",
    description: "Obtén un 10% de descuento en productos y servicios seleccionados presentando tu calidad de Socio Cooperador vigente.",
    discountText: "10% OFF",
    benefit: "Los Socios Cooperadores vigentes de la Tercera Compañía de Bomberos pueden acceder a un 10% de descuento en productos y servicios seleccionados de Óptica CosmoVisión.",
    requirements: [
      "Ser Socio Cooperador vigente.",
      "Mantener las cuotas al día.",
      "Presentar la identificación correspondiente al momento de solicitar el beneficio."
    ],
    conditions: "El beneficio es personal e intransferible. Algunas promociones o servicios específicos podrían no ser acumulables con otros descuentos vigentes del establecimiento."
  },
  {
    id: 2,
    imageSrc: "/farmacia.jpg",
    title: "Farmacia San Vicente",
    subtitle: "15% de descuento en medicamentos.",
    description: "Descuento en medicamentos de venta directa y recetados en farmacias locales adheridas.",
    discountText: "15% OFF",
    benefit: "Acceso preferencial a 15% de descuento en insumos médicos y farmacia general.",
    requirements: [
      "Ser Socio Cooperador vigente.",
      "Presentar identificación física o digital de Socio."
    ],
    conditions: "No acumulable con convenios de salud ni promociones semanales."
  },
  {
    id: 3,
    imageSrc: "/gimnasio.jpg",
    title: "Gimnasio Fit Life",
    subtitle: "20% OFF en matrícula y planes mensuales.",
    description: "Precios especiales en membresías semestrales y entrenamiento guiado.",
    discountText: "20% OFF",
    benefit: "20% de rebaja en la mensualidad del plan pase libre y entrenamiento funcional.",
    requirements: [
      "Ser Socio Cooperador con aporte al día.",
      "Acreditar identidad en recepción."
    ],
    conditions: "Válido para planes trimestrales, semestrales o anuales."
  },
  {
    id: 4,
    imageSrc: "/servicentro.jpg",
    title: "Servicentro Ruta 66",
    subtitle: "Descuento en mantenciones y lavados.",
    description: "Tarifas preferenciales en cambio de aceite, alineación y lavado de vehículos.",
    discountText: "CONVENIO",
    benefit: "Descuento en servicios mecánicos preventivos y lavado automotriz.",
    requirements: [
      "Presentar acreditación de Socio Cooperador de la 3ª Compañía."
    ],
    conditions: "Aplica en sucursal San Vicente de Tagua Tagua."
  },
  {
    id: 5,
    imageSrc: "/restaurant.jpg",
    title: "Restaurante La Tagua",
    subtitle: "12% de descuento en consumo presencial.",
    description: "Disfruta de la mejor gastronomía local con un descuento especial para ti y tu familia.",
    discountText: "12% OFF",
    benefit: "12% de descuento en la cuenta total de consumo en el establecimiento.",
    requirements: [
      "Ser Socio Cooperador activo.",
      "Solicitar la aplicación del convenio antes de la emisión de la cuenta."
    ],
    conditions: "Válido de lunes a viernes en horario almuerzo y cena."
  }
];

export const newsData: NewsItem[] = [
  {
    id: 1,
    title: "Capacitación en Rescate Vehicular Pesado",
    category: "Capacitación",
    date: "28 Julio, 2026",
    excerpt: "Jornada técnica de extricación y estabilización de vehículos pesados con la ANB."
  },
  {
    id: 2,
    title: "Postulaciones Brigada Juvenil 2026",
    category: "Comunidad",
    date: "15 Julio, 2026",
    excerpt: "Formación inicial en valores, disciplina y liderazgo para jóvenes de la comuna."
  },
  {
    id: 3,
    title: "Nuevas Herramientas para Emergencias",
    category: "Material Mayor",
    date: "02 Julio, 2026",
    excerpt: "Equipamiento de mitigación y motobombas incorporadas a la unidad BX-3."
  }
];

export const faqData: FaqItem[] = [
  {
    q: "¿Qué es un Socio Cooperador?",
    a: "Es una persona que realiza un aporte económico voluntario y periódico para apoyar el funcionamiento de la Tercera Compañía de Bomberos de San Vicente de Tagua Tagua."
  },
  {
    q: "¿Cómo puedo inscribirme?",
    a: "Puedes completar el formulario de inscripción disponible en esta página. Una vez enviada la solicitud, nos pondremos en contacto contigo para finalizar el proceso."
  },
  {
    q: "¿Cuál es el valor del aporte?",
    a: "El aporte mensual es voluntario y puede variar según las modalidades disponibles al momento de la inscripción."
  },
  {
    q: "¿Cómo accedo a los convenios?",
    a: "Solo debes mantener tu calidad de Socio Cooperador vigente y presentar la identificación correspondiente cuando utilices un beneficio."
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
