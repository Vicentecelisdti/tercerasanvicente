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
