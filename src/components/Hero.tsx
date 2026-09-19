import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="mx-auto max-w-6xl px-6 pt-12 pb-10 md:pt-20 md:pb-16">
      <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-3xl">
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
        </div>
        <div className="flex items-center gap-2 mt-6 text-xs text-slate-500">
          <span className="h-px w-6 bg-slate-200" /> 10 capítulos · 3 partes · Para quien cree conocer a Cristo
        </div>
      </motion.div>
    </section>
  );
}
