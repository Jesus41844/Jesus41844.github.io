---
id: daytuba-org
locale: es
order: 1
title: Daytuba ORG
tagline: La semana universitaria en un solo lugar
problem: >-
  Las tareas de la universidad viven en el grupo de WhatsApp, en el aviso del
  profesor y en una libreta. Ninguna de las tres responde «¿qué vence esta
  semana?», y menos todavía «¿quién tiene tiempo el jueves?».
highlights:
  - Reúne tareas, proyectos, calendario, horario y las entregas que ya están en Moodle, sin ir a buscarlas en cinco sitios.
  - Sesiones propias guardadas en base de datos con cookies httpOnly, sin depender de un servicio de identidad externo.
  - Las credenciales de Moodle se guardan cifradas con AES-256-GCM, no en texto plano en la base de datos.
  - Los PDF adjuntos se sirven comprobando sesión y propiedad en cada petición, no solo al subirlos.
  - "Docker Compose (web + PostgreSQL 17): se levanta en cualquier máquina con un comando."
  - 23 tests automatizados; CI con pruebas, comprobación de tipos y lint.
stack:
  - Next.js 16
  - React 19
  - TypeScript
  - PostgreSQL
  - Drizzle ORM
  - Docker
repo: https://github.com/Jesus41844/Daytuba_ORG
demo: https://daytuba-org.vercel.app
---
