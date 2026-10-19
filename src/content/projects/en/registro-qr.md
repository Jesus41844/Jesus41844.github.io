---
id: registro-qr
locale: en
order: 5
title: QR Check-in
tagline: Who was there, not just who signed up
problem: >-
  An attendance certificate is only worth something if it tells the truth. At
  an event with several checkpoints, the sign-up list does not say who went
  through each one, and that is exactly the question that decides who gets one.
highlights:
  - Imports the sign-up list from CSV or Excel, detects the columns on its own and lets you fix the mapping before saving.
  - Every attendee gets a QR code, and on the day of the event it is scanned with a phone camera at each checkpoint.
  - If someone was already checked in at that point, it says so instead of counting them twice.
  - Each event sets how many checkpoints are required, and the PDF certificate is only issued to people who meet it.
  - Sign-in is with Google, but only for coordinators an administrator has activated, with roles and permissions.
status: Used at EurusConf
stack:
  - JavaScript
  - Firebase Auth
  - Firestore
  - html5-qrcode
  - jsPDF
image: /projects/registro-qr.jpg
imageCaption: three real screens, on a phone
repo: https://github.com/Jesus41844/Inscripcion_EurusConf
footnote: >-
  There is no public demo because it works with a real event's registration
  data and access is limited to coordinators. Using it for another event only
  takes connecting it to your own Firebase project.
---
