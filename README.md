# El mensaje de Cristo es irracional — Web App

Vite + React + Tailwind + Framer Motion · 100% estática · Vercel · Sin backend

## Qué incluye
- **Hero** editorial moderno (B Moderna limpia: blanco/slate, Inter + Fraunces)
- **Reseña** en 3 párrafos + 3 cards (Lógica / Salvación / Vida)
- **Índice** acordeón (Introducción + 10 caps / 3 partes con cita y resumen)
- **Paradojas** carrusel flip
- **Introducción** con descarga PDF (págs 1–6) y panel transcripción
- **Autor** con foto `public/jpecina.jpg`
- **Descargas**: `public/intro.pdf` (págs 1–6)

## Desarrollo
```bash
npm install
npm run dev     # http://localhost:5173
npm run build   # tsc + vite build -> dist/
npm run preview # sirve dist/
```

## Deploy Vercel
```bash
vercel --prod
# o conecta el repo GitHub -> Vercel importa Vite (framework preset: Vite)
```
`vercel.json` ya incluye rewrites y cache para pdf. Sin variables de entorno.

## Imágenes
Placeholders minimal en `public/images/` + prompts en `public/images/prompts.md` para generar 6 ilustraciones SDXL/Flux (open-source) en estilo duotono. Sustituir SVGs por `webp` 800w cuando las generes.
