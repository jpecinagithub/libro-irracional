import { useState } from "react";
import { transcript } from "../data/book";

export default function IntroAudio() {
  const [showTranscript, setShowTranscript] = useState(false);

  return (
    <section id="intro" className="mx-auto max-w-6xl px-6 py-16">
      <div className="rounded-[28px] border border-slate-200 bg-white overflow-hidden shadow-sm">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-0">
          <div className="p-6 md:p-8">
            <p className="text-xs tracking-[0.2em] font-semibold text-amber-600">INTRODUCCIÓN</p>
            <h2 className="font-serif text-3xl mt-2 text-slate-900">Descarga la introducción</h2>
            <p className="text-sm text-slate-600 mt-3 leading-relaxed">Págs 1–6 completas — “Si el Evangelio no te desconcierta...” · Texto íntegro listo para leer.</p>

            <div className="mt-6">
              <a href="/intro.pdf" download className="inline-flex items-center gap-2 rounded-full bg-amber-500 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-amber-600">
                <span className="size-2 rounded-full bg-white/90" /> Descargar introducción (PDF)
              </a>
              <p className="text-xs text-slate-500 mt-3">PDF págs 1–6 · Listo para imprimir y compartir</p>
            </div>
          </div>

          <div className="bg-slate-50 border-t lg:border-t-0 lg:border-l border-slate-200 p-6 md:p-8">
            <p className="text-xs tracking-[0.18em] font-semibold text-slate-500">TRANSCRIPCIÓN</p>
            <p className="text-sm text-slate-600 mt-2 leading-relaxed">Texto íntegro de la introducción (págs 1–6).</p>
            <button onClick={()=>setShowTranscript(s=>!s)} className="mt-4 inline-flex items-center rounded-full bg-slate-900 px-5 py-2 text-sm font-medium text-white hover:bg-black">
              {showTranscript ? "Ocultar transcripción" : "Ver transcripción"}
            </button>
            {showTranscript ? (
              <div className="mt-4 max-h-[420px] overflow-auto rounded-xl border border-slate-200 bg-white p-5 text-xs leading-relaxed text-slate-700 whitespace-pre-wrap">
                {transcript}
              </div>
            ) : (
              <p className="text-xs text-slate-500 mt-4">Pulsa el botón para ver el texto completo.</p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
