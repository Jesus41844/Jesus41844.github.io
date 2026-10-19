---
id: registro-qr
locale: es
order: 5
title: Registro con QR
tagline: Quién estuvo, no solo quién se inscribió
problem: >-
  Un certificado de asistencia solo vale si dice la verdad. En un evento con
  varios puntos de control, la lista de inscritos no dice quién pasó por cada
  uno, y esa es justo la pregunta que decide a quién se le entrega.
highlights:
  - Importa la lista de inscritos desde CSV o Excel, detecta las columnas por su cuenta y deja corregir el mapeo antes de guardar.
  - Cada inscrito recibe su código QR, y el día del evento se escanea con la cámara del teléfono en cada punto de control.
  - Si una persona ya quedó registrada en ese punto, lo avisa en vez de contarla dos veces.
  - Cada evento define cuántos puntos de control hacen falta, y el certificado en PDF solo se emite a quien los cumple.
  - Se entra con Google, pero solo los coordinadores que activa un administrador, con roles y permisos.
status: Se usó en EurusConf
stack:
  - JavaScript
  - Firebase Auth
  - Firestore
  - html5-qrcode
  - jsPDF
repo: https://github.com/Jesus41844/Inscripcion_EurusConf
footnote: >-
  No tiene demo pública porque trabaja con los datos de inscripción de un
  evento real y el acceso es solo para coordinadores. Para usarlo en otro
  evento basta con conectarlo a un proyecto de Firebase propio.
---
