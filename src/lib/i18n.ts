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
  /** Zona horaria, tal como aparece en un horario impreso. */
  zone: string;
  skip: string;
  navProjects: string;
  navExperience: string;
  navAbout: string;
  navContact: string;
  navLang: string;
  heroBadge: string;
  heroEyebrow: string;
  heroHeadline: string;
  heroSub: string;
  ctaEmail: string;
  ctaLinkedin: string;
  ctaGithub: string;
  gridCaption: string;
  gridFree: string;
  gridNote: string;
  projectsLabel: string;
  projectsIntro: string;
  demo: string;
  code: string;
  noDemo: string;
  experienceLabel: string;
  experienceIntro: string;
  aboutLabel: string;
  shotCaption: string;
  noShot: string;
  stackLabel: string;
  techLabel: string;
  contactLabel: string;
  contactBody: string;
  langSwitch: string;
  footerNote: string;
}

export const copy: Record<Locale, Copy> = {
  es: {
    htmlLang: 'es',
    name: 'Jesús de Gracia',
    role: 'Desarrollador de software',
    location: 'Panamá',
    zone: 'UTC−5',
    skip: 'Saltar al contenido',
    navProjects: 'Proyectos',
    navExperience: 'Experiencia',
    navAbout: 'Sobre mí',
    navContact: 'Contacto',
    navLang: 'English',
    heroBadge: 'En busca de una pasantía',
    heroEyebrow: 'Cuatro aplicaciones · una misma pregunta',
    heroHeadline: 'Software para cuando la realidad no encaja en el papel.',
    heroSub:
      'Cada proyecto aquí nació de un supuesto que resultó falso: que la quincena dura quince días, que un hueco de cinco minutos es tiempo libre, que las tareas de la semana caben en un mensaje. Escribo software que modela la realidad en lugar del calendario ideal.',
    ctaEmail: 'Escríbeme',
    ctaLinkedin: 'LinkedIn',
    ctaGithub: 'GitHub',
    gridCaption:
      'Una semana tipo. Cada color es una aplicación; los espacios en blanco son lo que queda libre.',
    gridFree: 'Libre',
    gridNote:
      'Cuando veinte personas cruzan sus horarios, alguien tiene que señalar la franja que sí funciona. Eso fue lo primero que programé.',
    projectsLabel: 'Proyectos · 04',
    projectsIntro:
      'Cuatro aplicaciones que están en uso, no ejercicios de clase. Dos se pueden abrir ahora mismo.',
    demo: 'Abrir la app',
    code: 'Código',
    noDemo: 'Sin demo pública',
    experienceLabel: 'Experiencia · 04',
    experienceIntro:
      'Dos de estas herramientas las construí para las organizaciones donde tengo cargo. Y dos de los cargos no son un trabajo: es dirigir una agrupación y organizar un congreso.',
    aboutLabel: 'Sobre mí',
    shotCaption: 'captura real',
    noShot: 'sin captura',
    stackLabel: 'Con qué está hecho',
    techLabel: 'Tecnologías',
    contactLabel: 'Contacto',
    contactBody:
      'Si estás armando un equipo y necesitas a alguien que entienda de sistemas y de gente, escríbeme. Respondo siempre.',
    langSwitch: 'Español',
    footerNote: 'Astro · MIT',
  },
  en: {
    htmlLang: 'en',
    name: 'Jesús de Gracia',
    role: 'Software developer',
    location: 'Panama',
    zone: 'UTC−5',
    skip: 'Skip to content',
    navProjects: 'Projects',
    navExperience: 'Experience',
    navAbout: 'About',
    navContact: 'Contact',
    navLang: 'Español',
    heroBadge: 'Looking for an internship',
    heroEyebrow: 'Four applications · the same question',
    heroHeadline: 'Software for when reality does not fit on paper.',
    heroSub:
      'Every project here started from an assumption that turned out to be false: that a pay period lasts fifteen days, that a five-minute gap is free time, that the week’s tasks fit in one message. I write software that models reality instead of the ideal calendar.',
    ctaEmail: 'Email me',
    ctaLinkedin: 'LinkedIn',
    ctaGithub: 'GitHub',
    gridCaption:
      'A typical week. Each color is an application; the empty cells are what is left free.',
    gridFree: 'Free',
    gridNote:
      'When twenty people cross their timetables, someone has to point at the slot that actually works. That was the first thing I programmed.',
    projectsLabel: 'Projects · 04',
    projectsIntro:
      'Four applications that are actually in use, not class exercises. Two of them are live right now.',
    demo: 'Open the app',
    code: 'Code',
    noDemo: 'No public demo',
    experienceLabel: 'Experience · 04',
    experienceIntro:
      'Two of these tools I built for the organizations where I hold a position. And two of the entries below are not jobs: running a student group and organizing a congress.',
    aboutLabel: 'About',
    shotCaption: 'real screenshot',
    noShot: 'no screenshot',
    stackLabel: 'Built with',
    techLabel: 'Technologies',
    contactLabel: 'Contact',
    contactBody:
      'If you are assembling a team and need someone who understands systems and people, get in touch. I always reply.',
    langSwitch: 'Español',
    footerNote: 'Astro · MIT',
  },
};

export const links = {
  github: 'https://github.com/Jesus41844',
  githubHandle: 'github.com/Jesus41844',
  linkedin: 'https://www.linkedin.com/in/jesus-de-gracia-a1750a230/',
  linkedinHandle: 'in/jesus-de-gracia-a1750a230',
  /** Vacio hasta que Jesus mande el correo: sin el, el CTA de email no sale. */
  email: '',
} as const;

/** Nombres largos de los dias, para el texto que solo lee el lector de pantalla. */
export const weekDayFull: Record<Locale, string[]> = {
  es: ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes'],
  en: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
};

/** Etiqueta del encabezado de la columna de horas. */
export const weekHourLabel: Record<Locale, string> = {
  es: 'Hora',
  en: 'Hour',
};
