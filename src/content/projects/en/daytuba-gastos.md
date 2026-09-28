---
id: daytuba-gastos
locale: en
order: 3
title: DaytubaGastos
tagline: Spending per pay period, without surprises
problem: >-
  In Panama the pay period is not every fifteen days: the payday moves. Most
  expense apps start from a fixed interval, so their totals never match what
  actually happened by the end of the month.
highlights:
  - You set your own payday dates instead of being handed a fixed interval.
  - It keeps personal money apart from group money, because the two need to be reported differently.
  - Closing a pay period generates a PDF with the detail and the balance, ready to send or file.
  - 50 tests cover the cases that break the calendar, which is exactly where these apps go wrong.
  - Deployed on Vercel with Supabase; migrations apply themselves on every build.
status: "No demo: personal instance"
stack:
  - Next.js 16
  - TypeScript
  - Prisma 7
  - PostgreSQL
  - Supabase
  - vitest
image: /projects/daytuba-gastos.png
# 537x589 en una caja de 792x519: con `cover` se agranda 1.47x.
imageFit: contain
repo: https://github.com/Jesus41844/DaytubaGastos
footnote: >-
  There is deliberately no public demo: the deployed copy is my own personal
  instance, with my data in it, and I am not opening that up. The source is
  complete and deploys on its own.
---
