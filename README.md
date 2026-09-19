# El mensaje de Cristo es irracional — Web App

Vite + React + Tailwind + Framer Motion · 100% estática · Vercel · Sin backend

## Qué incluye
- **Hero** editorial moderno (B Moderna limpia: blanco/slate, Inter + Fraunces)
- **Reseña** en 3 párrafos + 3 cards (Lógica / Salvación / Vida)
- **Índice** acordeón (Introducción + 10 caps / 3 partes con cita y resumen)
- **Paradojas** carrusel flip
- **Introducción multimedia** dual: `intro.mp3` (Piper TTS open-source `es_ES-sharvard-medium`) + **Web Speech API** (voz del navegador, selector voz/velocidad)
- **Autor** con foto `public/jpecina.jpg` + placeholder bio (reemplazar cuando entregues la breve)
- **Descargas**: `public/intro.pdf` (págs 1–6) y `public/intro.mp3` (9:43, 5 MB)

## Desarrollo
```bash
npm install
npm run dev     # http://localhost:5173
npm run build   # tsc + vite build -> dist/
npm run preview # sirve dist/
```

## Audio — generación open-source (Piper, MIT)
Modelo `es_ES-sharvard-medium` de rhasspy/piper-voices (76 MB, GPL-3.0/MIT).
```bash
# 1. descargar modelo (una vez)
# https://huggingface.co/rhasspy/piper-voices/resolve/main/es/es_ES/sharvard/medium/es_ES-sharvard-medium.onnx
# y .onnx.json

# 2. extraer texto de intro.pdf -> public/intro.txt (ya hecho)
# 3. generar wav y mp3
piper -m es_ES-sharvard-medium.onnx --output_file public/intro.wav --input_file public/intro.txt
ffmpeg -y -i public/intro.wav -codec:a libmp3lame -qscale:a 2 public/intro.mp3
```
Alternativa web nativa sin generar: Web Speech API (`src/hooks/useSpeech.ts`).

## Deploy Vercel
```bash
vercel --prod
# o conecta el repo GitHub -> Vercel importa Vite (framework preset: Vite)
```
`vercel.json` ya incluye rewrites y cache para mp3/pdf. Sin variables de entorno.

## Pendiente usuario
- Reemplazar placeholder bio en `src/components/Autor.tsx` cuando entregues la breve biografía.
- `public/intro.pdf` y `public/intro.mp3` ya generados — commiteados y copiados a `dist/`.

## Imágenes
Placeholders minimal en `public/images/` + prompts en `public/images/prompts.md` para generar 6 ilustraciones SDXL/Flux (open-source) en estilo duotono. Sustituir SVGs por `webp` 800w cuando las generes.
