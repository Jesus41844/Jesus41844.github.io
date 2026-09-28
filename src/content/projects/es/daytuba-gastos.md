---
id: daytuba-gastos
locale: es
order: 3
title: DaytubaGastos
tagline: Gastar por quincena, sin sorpresas
problem: >-
  En Panamá la quincena no es cada quince días: la fecha de cobro se mueve.
  Las aplicaciones de gastos parten de intervalos fijos, así que sus totales
  nunca cuadran con la realidad de fin de mes.
highlights:
  - El usuario define sus propias fechas de cobro en vez de aceptar un intervalo fijo.
  - Separa el dinero personal del de la agrupación, porque no se rinden igual.
  - Al cerrar la quincena genera el PDF con el detalle y el balance, listo para enviar o archivar.
  - 50 tests cubren los casos que rompen el calendario, que es justo donde estas aplicaciones fallan.
  - Despliegue en Vercel con Supabase; las migraciones se aplican solas en cada build.
stack:
  - Next.js 16
  - TypeScript
  - Prisma 7
  - PostgreSQL
  - Supabase
  - vitest
repo: https://github.com/Jesus41844/DaytubaGastos
demo: https://daytuba-gastos.vercel.app
---
