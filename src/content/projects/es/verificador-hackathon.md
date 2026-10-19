---
id: verificador-hackathon
locale: es
order: 6
title: Verificador del Hackathon
tagline: Un agente que vigila las reglas y no decide solo
problem: >-
  En un hackatón de 24 horas con doce equipos nadie puede revisar a cada rato
  que todos sigan las reglas y trabajen en el reto que eligieron. Si se revisa
  solo al final, ya no queda nada que corregir.
highlights:
  - "Cada 30 minutos revisa los repositorios de los equipos en GitHub con reglas exactas, sin IA: reto declarado, cupo por reto, cambios de reto sin autorizar y repositorios vacíos o sin PR a la hora límite."
  - "En dos ventanas del evento, un modelo de IA evalúa si el trabajo corresponde al reto: cumple, no cumple o dudoso, con la razón y enlaces a los commits."
  - "Un «no cumple» sin commits que lo prueben pasa a «dudoso»: el agente no acusa sin evidencia."
  - Solo avisa. Los casos llegan al organizador por Telegram con botones para autorizar o no, y la decisión la toma una persona.
  - Gemini como modelo principal y OpenRouter de respaldo. Si GitHub o los modelos fallan dos revisiones seguidas, manda una alerta.
  - El contenido de los equipos va delimitado y se le indica al modelo que no obedezca instrucciones escritas ahí.
  - 63 tests automatizados.
status: Se usó en el Hackathon-FISC · 63 tests
stack:
  - Python
  - Pydantic AI
  - python-telegram-bot
  - SQLite
  - API de GitHub
  - pytest
image: /projects/verificador-hackathon.jpg
imageCaption: capturas reales del bot en Telegram, durante el evento
footnote: >-
  El repositorio es privado, así que no hay enlace al código ni demo. El agente
  corrió durante las 24 horas del evento y su trabajo era avisar al organizador
  por Telegram.
---
