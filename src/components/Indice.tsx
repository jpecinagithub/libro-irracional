import { useState } from "react";
import { book } from "../data/book";

export default function Indice() {
  const [open, setOpen] = useState<string | null>("Primera parte — Una lógica que no es la nuestra");
  return (
    <section id="indice" className="mx-auto max-w-6xl px-6 py-16">
      <div className="flex items-end justify-between gap-4">
        <div>
          <p className="text-xs tracking-[0.2em] font-semibold text-amber-600">ÍNDICE</p>
          <h2 className="font-serif text-3xl mt-2 text-slate-900">10 capítulos en 3 partes</h2>
          <p className="text-sm text-slate-500 mt-2">Toca cada parte para expandir los capítulos · Cita + resumen de 1 línea</p>
        </div>
        <a href="/intro.pdf" download className="hidden md:inline-flex rounded-full border border-slate-200 px-4 py-2 text-sm hover:bg-slate-50">Descargar introducción</a>
      </div>

      <div className="mt-8 grid gap-4">
        {book.indice.map((part)=> (
          <div key={part.part} className="rounded-2xl border border-slate-200 bg-white overflow-hidden">
            <button onClick={()=> setOpen(o=> o===part.part? null : part.part)} className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left hover:bg-slate-50">
              <div>
                <p className="text-sm font-semibold text-slate-900">{part.part}</p>
                <p className="text-xs text-slate-500">págs {part.pages} · {part.chapters.length} capítulo{part.chapters.length>1?"s":""}</p>
              </div>
              <span className={`size-8 grid place-items-center rounded-full border text-sm transition ${open===part.part ? "bg-slate-900 text-white border-slate-900" : "bg-white border-slate-200"}`}>{open===part.part ? "−" : "+"}</span>
            </button>
            {open===part.part && (
              <div className="px-6 pb-6 grid gap-3">
                {part.chapters.map(c=> (
                  <div key={c.n+c.title} className="rounded-xl border border-slate-200 bg-slate-50/70 px-5 py-4">
                    <div className="flex gap-3">
                      <span className="shrink-0 size-7 grid place-items-center rounded-full bg-white border border-slate-200 text-xs font-semibold text-slate-700">{c.n}</span>
                      <div className="min-w-0">
                        <p className="text-sm font-medium text-slate-900 leading-tight">{c.title}</p>
                        <p className="text-xs italic text-slate-600 mt-1">{c.quote}</p>
                        <p className="text-xs text-slate-500 mt-2 leading-relaxed">{c.summary}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="mt-6 rounded-2xl border border-slate-200 bg-slate-50 px-6 py-5">
        <p className="text-sm text-slate-700"><span className="font-medium">Bibliografía extensa</span> · Dei Verbum, Fides et ratio, Gaudium et spes, Catecismo, Benedicto XVI, Juan Pablo II, Teresa de Lisieux, Jacques Philippe… <span className="text-slate-500">— págs 94–97</span></p>
      </div>
    </section>
  );
}
