---
id: horarios-greb
locale: en
order: 2
title: Schedules
tagline: When is everyone free?
problem: >-
  Finding a time that works for a group of twenty people means cross-referencing
  twenty class schedules, most of them in PDF. Nobody did it, so meetings
  ended up agreed blindly and half the group never showed up.
highlights:
  - "Each member uploads their schedule as a PDF or a screenshot, and the app answers the only question that really matters: which slot has everyone free at the same time."
  - Optical character recognition runs in the browser, so a schedule screenshot never leaves the device.
  - Blocks separated by less than five minutes get merged, because a two-minute gap between classes is a real break, not free time.
  - Each group's data stays isolated from the others even when they share an installation, so it works for any group, not just one.
  - 67 automated tests.
status: Live demo · 67 tests
stack:
  - Python
  - FastAPI
  - pdfplumber
  - JavaScript
  - pytest
repo: https://github.com/Jesus41844/Horarios_GREB
demo: https://horarios-greb.vercel.app
footnote: >-
  The repository and the demo still carry the name of the first group this was
  built for. The app does not depend on it: every group's data is kept
  separate.
---
