---
id: verificador-hackathon
locale: en
order: 6
title: Hackathon Verifier
tagline: An agent that watches the rules and never decides alone
problem: >-
  In a 24-hour hackathon with twelve teams, nobody can keep checking that
  everyone follows the rules and works on the challenge they picked. Check only
  at the end, and there is nothing left to fix.
highlights:
  - "Every 30 minutes it checks the teams' GitHub repositories against exact rules, with no AI involved: declared challenge, cap per challenge, unauthorized challenge changes, and empty repositories or missing PRs at the deadline."
  - "In two windows during the event, an AI model judges whether the work matches the challenge: meets it, does not, or unclear, with the reason and links to the commits."
  - 'A "does not meet" with no commits to back it up becomes "unclear": the agent does not accuse without evidence.'
  - It only alerts. Cases reach the organizer on Telegram with buttons to authorize or not, and a person makes the call.
  - Gemini as the main model and OpenRouter as fallback. If GitHub or the models fail two checks in a row, it sends an alert.
  - Team content is fenced off and the model is told not to follow instructions written inside it.
  - 63 automated tests.
status: Used at Hackathon-FISC · 63 tests
stack:
  - Python
  - Pydantic AI
  - python-telegram-bot
  - SQLite
  - GitHub API
  - pytest
image: /projects/verificador-hackathon.jpg
imageCaption: real screenshots of the bot on Telegram, during the event
footnote: >-
  The repository is private, so there is no link to the code and no demo. The
  agent ran for the full 24 hours of the event, and its job was to alert the
  organizer on Telegram.
---
