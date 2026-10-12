export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  description: string;
  tags: string[];
  githubUrl?: string;
  demoUrl?: string;
  highlightBadge?: string;
}

export const PORTFOLIO_DATA = {
  personal: {
    name: "Bruno Rodrigo Alberto Hidalgo",
    shortName: "Bruno Hidalgo",
    title: "Estudiante de Ingeniería en Sistemas & Desarrollador de Software",
    bio: "Enfocado en el desarrollo de aplicaciones web funcionales, mantenibles y de alto rendimiento. Experiencia en arquitecturas frontend y backend, integración de APIs y metodologías ágiles.",
    location: "Santa Cruz de la Sierra, Bolivia",
    email: "brunohidalgo763@gmail.com",
    phone: "+591 76320659",
    whatsappUrl: "https://wa.me/59176320659?text=Hola%20Bruno,%20vi%20tu%20portafolio%20y%20me%20gustar%C3%ADa%20conversar%20contigo.",
    linkedinUrl: "https://www.linkedin.com/in/bruno-hidalgo-196017310",
    githubUrl: "https://github.com/Livio763",
    cvPdfUrl: "/BrunoHidalgoCV.pdf",
    university: "Universidad Autónoma Gabriel René Moreno (UAGRM)",
    statusText: "Disponible para proyectos",
  },

  skills: {
    frontend: ["Next.js", "React"],
    backend: ["PHP / Laravel", "NestJS", "Spring Boot"],
    databases: ["MySQL", "PostgreSQL", "SQLite"],
    deployment: ["Vercel", "Supabase", "Azure"],
    tools: ["Git"],
    methodologies: ["Scrum", "PUDS"]
  },

  projects: [
    {
      id: "proyecto-gia",
      title: "Proyecto GIA — Guía de Incubación",
      subtitle: "2do Lugar en InnovaHack 2025 (CAINCO & Unión Europea) • ChildFund Bolivia",
      category: "Web & Micro-learning",
      description: "Plataforma orientada a jóvenes emprendedores desarrollada bajo presión en la hackathon InnovaHack. Arquitectura backend completa en Laravel, interfaz responsiva y asistencia nativa con Groq AI para resolución inmediata de consultas.",
      tags: ["PHP", "Laravel", "MySQL", "Tailwind CSS", "Groq AI", "REST API"],
      githubUrl: "https://github.com/Livio763/InnovaHack",
      highlightBadge: "2do Lugar Hackathon"
    },
    {
      id: "varortrack",
      title: "Sistema de Gestión Varortrack",
      subtitle: "Proyecto Universitario • Metodología PUDS",
      category: "Full Stack",
      description: "Sistema para la administración operativa de talleres mecánicos. Gestión de órdenes de reparación, seguimiento de técnicos y control de stock de repuestos en tiempo real con normalización relacional de datos.",
      tags: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase", "PostgreSQL", "Vercel"],
      githubUrl: "https://github.com/Livio763",
      highlightBadge: "Liderazgo Técnico"
    },
    {
      id: "simulador-sir",
      title: "Simulador Epidemiológico SIR — Santa Cruz",
      subtitle: "Modelado Numérico & Algoritmos",
      category: "Simulación de Datos",
      description: "Aplicación interactiva que modela numéricamente la dinámica de transmisión epidemiológica (Susceptibles, Infectados, Recuperados) en tiempo real con parámetros de contagio y recuperación ajustables.",
      tags: ["JavaScript", "Algoritmos", "Visualización", "Matemáticas"],
      githubUrl: "https://github.com/Livio763/Simulaci-n-Modelo-SIR-en-Santa-Cruz",
      highlightBadge: "Matemática Aplicada"
    }
  ] as Project[],

  timeline: [
    {
      period: "2025",
      role: "2do Lugar InnovaHack & Proyecto GIA",
      organization: "Innova Santa Cruz (CAINCO y Unión Europea) / ChildFund Bolivia",
      type: "Logro & Proyecto",
      description: "Desarrollo contrarreloj de la plataforma de micro-learning 'GIA' con asistencia de IA nativa, obteniendo el 2do lugar en la competencia por su impacto social y solidez técnica.",
      tags: ["Laravel", "Groq AI", "MySQL", "Scrum"]
    },
    {
      period: "2023 — Presente",
      role: "Ingeniería en Sistemas",
      organization: "Universidad Autónoma Gabriel René Moreno (UAGRM)",
      type: "Educación",
      description: "Formación en ciencias de la computación, arquitectura de software, bases de datos relacionales, estructuras de datos y metodologías de ingeniería.",
      tags: ["Bases de Datos", "Algoritmia", "PUDS"]
    },
    {
      period: "2021 — 2022",
      role: "Administrador de Inventario",
      organization: "Makro Parque",
      type: "Laboral",
      description: "Control logístico y operativo de inventario, auditorías de existencias y gestión estructurada de registros en Excel.",
      tags: ["Administración", "Control de Stock"]
    }
  ]
};
