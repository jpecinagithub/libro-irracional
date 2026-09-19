import { motion } from "framer-motion";
import { book } from "../data/book";

const cards = [
  { k: "Lógica", t: "Una lógica que no es la nuestra", d: "Dios no cabe en nuestra cabeza, pero puede habitar nuestra vida. Misterio que ilumina, no contradicción." },
  { k: "Salvación", t: "El escándalo de la salvación", d: "Herida, Cruz y gracia que precede. Dios vence dejándose herir y nos busca: «¿Dónde estás?»" },
  { k: "Vida", t: "Vivir según lo imposible", d: "Resurrección, fuerza en la debilidad y vida sobrenatural en lo ordinario." },
];

export default function Resena() {
  return (
    <section id="resena" className="mx-auto max-w-6xl px-6 py-16">
      <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-10 items-start">
        <div>
          <p className="text-xs tracking-[0.2em] text-amber-600 font-semibold">RESEÑA</p>
          <h2 className="font-serif text-3xl md:text-4xl leading-tight mt-2 text-slate-900">Si no te desconcierta, quizá no lo has entendido</h2>
          <div className="mt-6 space-y-4 text-[15px] leading-relaxed text-slate-600">
            {book.reseña.map((p,i)=> <p key={i}>{p}</p>)}
          </div>
          <blockquote className="mt-8 rounded-2xl border border-amber-200 bg-amber-50/60 px-6 py-5">
            <p className="text-sm italic leading-relaxed text-slate-700">“{book.quote.text}”</p>
            <p className="text-xs text-slate-500 mt-2">{book.quote.source}</p>
          </blockquote>
        </div>

        <motion.div initial={{ opacity:0, y:8 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ duration:0.5 }} className="grid gap-4">
          {cards.map(c=> (
            <div key={c.k} className="rounded-2xl border border-slate-200 bg-slate-50/60 p-6">
              <p className="text-[11px] tracking-[0.18em] font-semibold text-amber-600">{c.k.toUpperCase()}</p>
              <h3 className="font-medium text-slate-900 mt-1">{c.t}</h3>
              <p className="text-sm text-slate-600 mt-2 leading-relaxed">{c.d}</p>
            </div>
          ))}
          <div className="rounded-2xl bg-slate-900 text-white p-6">
            <p className="text-sm leading-relaxed text-slate-200">“Quizá el mensaje de Cristo solo empieza a ser comprendido cuando dejamos de considerarlo evidente.”</p>
            <p className="text-xs text-slate-400 mt-2">— Introducción, p. 6</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
