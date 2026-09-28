---
id: daytuba-org
locale: en
order: 1
title: Daytuba ORG
tagline: Your whole university week in one place
problem: >-
  University tasks live in the WhatsApp group, in the professor's announcement
  and in a notebook. None of the three answers "what is due this week?", and
  none of them answers "who is free on Thursday?".
highlights:
  - Brings tasks, projects, calendar, class schedule and the deadlines already sitting in Moodle together, instead of five separate places.
  - Own sessions stored in the database with httpOnly cookies, no third-party identity service.
  - Moodle credentials are encrypted with AES-256-GCM, never left as plain text in the database.
  - Attached PDFs are served by checking session and ownership on every request, not only at upload time.
  - "Docker Compose (web + PostgreSQL 17): it comes up on any machine with one command."
  - 23 automated tests; CI runs the suite, type checking and lint.
status: Live demo · 23 tests
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
