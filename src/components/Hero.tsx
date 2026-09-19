import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="mx-auto max-w-6xl px-6 pt-12 pb-10 md:pt-20 md:pb-16">
      <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-10 items-center">
        <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <p className="text-xs tracking-[0.2em] text-amber-600 font-semibold">JON PECIÑA ITURBE</p>
          <h1 className="font-serif text-[42px] md:text-[56px] leading-[0.95] tracking-tight text-slate-900 mt-3">
            El mensaje de <span className="italic font-light">Cristo</span><br /> es irracional
          </h1>
          <p className="text-lg md:text-xl text-slate-600 mt-4 leading-relaxed">
            La lógica sobrenatural del Evangelio — un libro que quiere <span className="text-slate-900 font-medium">desconcertarte</span> para reencontrarte con Cristo.
          </p>
          <div className="flex flex-wrap gap-3 mt-8">
            <a href="/intro.pdf" download className="inline-flex items-center gap-2 rounded-full bg-amber-500 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-amber-600">
              <span className="size-2 rounded-full bg-white/90" /> Descargar introducción (PDF)
            </a>
            <a href="#intro" className="inline-flex items-center rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-medium text-slate-900 hover:bg-slate-50">
              Escuchar introducción ▶
            </a>
          </div>
          <p className="text-xs text-slate-500 mt-3">PDF págs 1–6 · Audio 9:43 · Piper TTS open-source + Web Speech</p>
          <div className="flex items-center gap-2 mt-6 text-xs text-slate-500">
            <span className="h-px w-6 bg-slate-200" /> 10 capítulos · 3 partes · Para quien cree conocer a Cristo
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.08 }}
          className="relative"
        >
          <div className="aspect-[4/5] rounded-[28px] border border-slate-200 bg-gradient-to-br from-slate-50 to-white p-6 shadow-sm overflow-hidden">
            {/* abstract book cover */}
            <div className="h-full w-full rounded-2xl border border-slate-200 bg-white p-8 flex flex-col">
              <p className="text-[11px] tracking-[0.2em] text-amber-600 font-semibold">LA LÓGICA SOBRENATURAL</p>
              <h3 className="font-serif text-3xl leading-none mt-3 text-slate-900">El mensaje<br />de Cristo<br /><span className="italic font-light text-slate-700">es irracional</span></h3>
              <div className="mt-6 h-px bg-slate-200" />
              <p className="text-sm text-slate-600 mt-4 leading-relaxed">Si el Evangelio no te desconcierta, quizá no lo has entendido todavía.</p>
              {/* cross geometry */}
              <div className="mt-auto flex justify-center">
                <div className="relative size-28">
                  <div className="absolute left-1/2 top-0 h-full w-[2px] -translate-x-1/2 bg-slate-900/90" />
                  <div className="absolute left-0 top-[38%] h-[2px] w-full bg-slate-900/90" />
                  <div className="absolute inset-0 grid place-items-center">
                    <div className="size-20 rounded-full border border-amber-400/40 bg-amber-400/10 blur-[1px]" />
                  </div>
                </div>
              </div>
              <p className="text-center text-xs tracking-wide text-slate-500 mt-4">JON PECIÑA ITURBE</p>
            </div>
          </div>
          <div className="absolute -bottom-4 -right-2 hidden md:flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 shadow-sm text-xs text-slate-600">
            <span className="size-2 rounded-full bg-emerald-500" /> Lectura 5 min · Audio 9 min
          </div>
        </motion.div>
      </div>
    </section>
  );
}
