export const locales = ['es', 'en'] as const;
export type Locale = (typeof locales)[number];

export const otherLocale: Record<Locale, Locale> = {
  es: 'en',
  en: 'es',
};

interface Copy {
  htmlLang: string;
  name: string;
  role: string;
  location: string;
  summary: string;
  ctaRepo: string;
  ctaLinkedin: string;
  navProjects: string;
  navExperience: string;
  navStack: string;
  navContact: string;
  projectsTitle: string;
  projectsIntro: string;
  demo: string;
  code: string;
  experienceTitle: string;
  experienceIntro: string;
  stackTitle: string;
  stackIntro: string;
  contactTitle: string;
  contactBody: string;
  langSwitch: string;
  current: string;
  footerNote: string;
}

export const copy: Record<Locale, Copy> = {
  es: {
    htmlLang: 'es',
    name: 'Jesús de Gracia',
    role: 'Desarrollador de software',
    location: 'Panamá, Panamá',
    summary:
      'Estudiante de Ingeniería en Sistemas Computacionales en la UTP. Construyo software que resuelve problemas concretos de personas y organizaciones cercanas a mí: una agrupación estudiantil, un laboratorio de producción, una quincena de gastos.',
    ctaRepo: 'Ver código en GitHub',
    ctaLinkedin: 'Conectar en LinkedIn',
    navProjects: 'Proyectos',
    navExperience: 'Experiencia',
    navStack: 'Tecnologías',
    navContact: 'Contacto',
    projectsTitle: 'Proyectos',
    projectsIntro:
      'Cuatro aplicaciones que están en uso, no ejercicios de clase. Tres se pueden abrir ahora mismo.',
    demo: 'Abrir la app',
    code: 'Código',
    experienceTitle: 'Experiencia y cargos',
    experienceIntro:
      'Dos de estas herramientas las construí para las organizaciones donde tengo cargo.',
    stackTitle: 'Tecnologías',
    stackIntro: 'Lo que uso a diario.',
    contactTitle: 'Contacto',
    contactBody:
      'Si estás armando un equipo y necesitas a alguien que entienda de sistemas y de gente, escríbeme. Respondo siempre.',
    langSwitch: 'English',
    current: 'actualidad',
    footerNote: 'Hecho con Astro. Código con licencia MIT.',
  },
  en: {
    htmlLang: 'en',
    name: 'Jesús de Gracia',
    role: 'Software developer',
    location: 'Panama City, Panama',
    summary:
      'Systems engineering student at UTP. I build software that solves concrete problems for the people and organizations closest to me: a student group a few steps away, a small production lab, a two-week pay period.',
    ctaRepo: 'View code on GitHub',
    ctaLinkedin: 'Connect on LinkedIn',
    navProjects: 'Projects',
    navExperience: 'Experience',
    navStack: 'Stack',
    navContact: 'Contact',
    projectsTitle: 'Projects',
    projectsIntro:
      'Four applications that are actually in use, not class exercises. Three of them are live right now.',
    demo: 'Open the app',
    code: 'Code',
    experienceTitle: 'Experience',
    experienceIntro:
      'Two of these tools I built for the organizations where I hold a position.',
    stackTitle: 'Stack',
    stackIntro: 'What I use daily.',
    contactTitle: 'Contact',
    contactBody:
      "If you're assembling a team and need someone who understands systems and people, get in touch. I always reply.",
    langSwitch: 'Español',
    current: 'present',
    footerNote: 'Built with Astro. Code under the MIT license.',
  },
};

export const links = {
  github: 'https://github.com/Jesus41844',
  linkedin: 'https://www.linkedin.com/in/jesus-de-gracia-a1750a230/',
} as const;
