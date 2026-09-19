# Design Spec — Web App "El mensaje de Cristo es irracional"

**Date:** 2026-09-19  
**Author:** OpenCode (Muse Spark)  
**Status:** Approved (B Moderna limpia + dual audio)  
**Stack:** Vite + React (TS) + Tailwind CSS + Framer Motion — 100% static, Vercel

---

## 1. Context & Goal

Crear una web app sencilla, fácil de entender y desplegable en Vercel (sin backend) para presentar el libro de autor **Jon Peciña Iturbe — *El mensaje de Cristo es irracional. La lógica sobrenatural del Evangelio*** (PDF 97 págs, 10 caps, 3 partes).

Requisitos del usuario:
- Reseña del libro
- Índice navegable
- Breve CV + foto del autor (foto `jpecina.jpg` ya disponible, biografía pendiente de entrega)
- Descarga de Introducción (págs 1-6) en PDF
- Audio de la Introducción con TTS open-source
- Experiencia visual atractiva con imágenes relacionadas
- Estética **B Moderna limpia** (blanco, slate, Inter, aire, cards minimal)

Lectura del libro completada: tesis central = lógica evangélica desborda la razón sin contradecirla; sobrenatural, no absurda. Estructura en 3 partes.

---

## 2. Architecture

### 2.1 Topology
```
Vite + React TS + Tailwind + Framer Motion (SPA single-page scroll)
  public/
    intro.pdf          -> extract pág 1-6 via pdf-lib build script
    intro.mp3          -> Piper TTS es_ES-sharvard-medium (MIT) pre-generado
    jpecina.jpg        -> foto autor
    images/*.svg|webp  -> 6 ilustraciones (ver §5)
  src/
    App.tsx
    components/ Hero, Reseña, Indice, IntroAudio, Autor, Footer, ParadoxCarousel
    data/book.ts       -> strings reseña, índice tipado, citas
    hooks/useSpeech.ts -> Web Speech API wrapper
    scripts/extractIntro.ts (node, build-time)
```

- Sin backend, sin API keys. Todo estático servido por Vercel.
- Audio dual: `<audio>` para `intro.mp3` + Web Speech API como lector en vivo (selector voz/velocidad). Ambos 100% cliente.

### 2.2 Data Flow
- `book.ts` contiene índice tipado (Partes → Capítulos con título, cita, resumen 2 líneas). Reseña hardcodeada (3 párrafos).
- `Indice` renderiza acordeón; estado local `openPart`.
- `IntroAudio` tiene dos modos: mode=`static` (audio element) / `live` (speechSynthesis). Toggle UI.
- PDF descargable via `<a download href="/intro.pdf">`.

---

## 3. Components

| Component | Responsibility | Key Props |
|-----------|---------------|-----------|
| **Hero** | Portada abstracta, título, subtítulo, CTAs a #intro y #reseña | — |
| **Reseña** | 3 párrafos + 3 cards iconográficas (Lógica / Salvación / Vida) | `reseña: string[]` |
| **Indice** | Acordeón por partes, 10 caps, cita bíblica, resumen expandible | `indice: IndicePart[]` |
| **ParadoxCarousel** | Carrusel flip "Felices los que lloran → explicación" | `paradojas[]` |
| **IntroAudio** | Dual audio, waveform placeholder, transcript colapsable, descargas | `transcript, mp3Url, pdfUrl` |
| **Autor** | Foto circular, CV breve (placeholder hasta entrega), LinkedIn | `foto, bio` |
| **Footer** | Bibliografía breve, copyright | — |

Navegación por anclas + header sticky con links.

---

## 4. Visual Design — B Moderna limpia

- **Palette:** `bg-white` / `bg-slate-50`, `text-slate-900`, `border-slate-200`, acento `amber-500` solo en CTAs/bordes sutiles. Nada de crema granulada.
- **Typography:** `Inter` (body, 400/500) + `Instrument Serif` o `Fraunces` para títulos. Tamaños generosos, leading relajado.
- **Layout:** max-w-6xl centrado, secciones con `py-20`, cards `rounded-2xl border shadow-sm`, mucho whitespace.
- **Motion:** Framer Motion `fadeIn` suave al scroll (stagger 80ms), sin parallax pesado. Respetar `prefers-reduced-motion`.
- **Responsive:** mobile-first, header hamburguesa, grid 1→3 cols.
- **Accesibilidad:** contrast AAA, aria-labels en reproductor, focus rings.

---

## 5. Images & Visual Experience

6 ilustraciones estilo **minimal vector / duotono suave** (no óleo clásico para encajar en B):
1. Hero — cruz de luz geométrica sobre fondo blanco
2. Bienaventuranzas — monte minimal con siluetas
3. Libertad — puertas abiertas / laberinto que se abre
4. Herida — jardín abstracto con grieta de luz
5. Cruz — manos que sostienen luz en oscuridad (Kolbe)
6. Resurrección — sepulcro vacío amanecer minimal

Generación: SVGs artesanales + prompts para futura generación con Stable Diffusion XL / Flux (open-source). Prompts archivados en `public/images/prompts.md`. Inicialmente SVGs estáticos para no bloquear deploy.

Ideas UX atractivas adicionales:
- Paradox flip cards
- Preguntas "Para llevarlo a la vida" con checkbox localStorage
- Toggle modo noche/sepia
- Cita destacada animada por sección
- Micro-interacción "¿Dónde estás?" (Gén 3,9) con input efímero

---

## 6. PDF & Audio Pipeline

### PDF
- Script `scripts/extractIntro.ts` usa `pdf-lib` para leer `El mensaje...pdf`, copiar págs 0-5 (1-6), guardar `public/intro.pdf`. Ejecutado en `prebuild`.

### Audio
- **Piper TTS** (`es_ES-sharvard-medium`, MIT): `piper --model es_ES-sharvard-medium --output_file public/intro.mp3 < public/intro.txt`
- `intro.txt` extraído de `intro.pdf` via `pdfjs` o copiado manual del transcript.
- Fallback: si Piper no disponible en CI, usar `edge-tts` o commit placeholder silencioso; Web Speech cubre reproducción.
- Dual UI: pestañas "Audio grabado" (mp3) / "Voz del navegador" (speechSynthesis con selector `getVoices().filter(v=>v.lang.includes('es'))`, rate 0.8-1.2, play/pause/cancel).

---

## 7. Deployment

- `vite build` -> `dist/` estático.
- `vercel.json` sin rewrites (SPA con hash anchors no necesita SPA fallback más que `rewrites: [{source:"/(.*)",destination:"/index.html"}]` opcional).
- `npm run preview` local verify. Lighthouse target: Performance >95, Accessibility >95.

---

## 8. Testing & Validation

- Manual: comprobar descarga PDF, reproducción mp3, Web Speech en Chrome/Edge/Safari.
- Responsivo 375/768/1280.
- Verificar foto `jpecina.jpg` carga y CV placeholder.

---

## 9. Open Questions / Pending

- Biografía breve del autor pendiente de entrega por usuario. Placeholder actual: 2 párrafos genéricos coherentes con perfil LinkedIn (Finance Manager Surexport + formación Universidad Pontificia Comillas + autor teológico). Se reemplazará sin tocar layout.
- Si Piper no está en entorno build, audio se generará local y se commiteará.

---

## 10. Self-Review

- Placeholders: ninguno crítico, solo bio pendiente explícito.
- Consistencia: arquitectura estática concuerda con requisito "No va a tener back. Va a ser desplegado en Vercel."
- Scope: enfocado, una sola web app, no descomposición necesaria.
- Ambigüedad: estética B clara, dual audio confirmado, rango intro 1-6 confirmado.

---

**Aprobado por usuario:** Sí (B + dual) — 2026-09-19. Siguiente paso: `writing-plans` → implementación.
