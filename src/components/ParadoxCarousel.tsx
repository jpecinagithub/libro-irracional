import { useState } from "react";
import { book } from "../data/book";
import { motion, AnimatePresence } from "framer-motion";

export default function ParadoxCarousel() {
  const [i, setI] = useState(0);
  const p = book.paradojas[i];
  return (
    <div className="mx-auto max-w-6xl px-6">
      <div className="rounded-[24px] border border-slate-200 bg-white p-6 md:p-8 flex flex-col md:flex-row items-center gap-6">
        <div className="flex-1 w-full">
          <p className="text-xs tracking-[0.2em] font-semibold text-amber-600">PARADOJAS — ¿IRRACIONAL?</p>
          <AnimatePresence mode="wait">
            <motion.div key={i} initial={{ opacity:0, y:8 }} animate={{ opacity:1, y:0 }} exit={{ opacity:0, y:-8 }} transition={{ duration:0.35 }}>
              <h3 className="font-serif text-2xl mt-2 text-slate-900">{p.front}</h3>
              <p className="text-sm text-slate-600 mt-3 leading-relaxed">{p.back}</p>
            </motion.div>
          </AnimatePresence>
          <div className="flex gap-2 mt-6">
            {book.paradojas.map((_,idx)=> (
              <button key={idx} onClick={()=>setI(idx)} className={`h-1.5 rounded-full transition-all ${idx===i ? "w-8 bg-slate-900" : "w-4 bg-slate-200"}`} aria-label={`Ver ${idx+1}`} />
            ))}
          </div>
        </div>
        <div className="flex gap-2">
          <button onClick={()=>setI((i-1+book.paradojas.length)%book.paradojas.length)} className="size-10 grid place-items-center rounded-full border border-slate-200 hover:bg-slate-50">‹</button>
          <button onClick={()=>setI((i+1)%book.paradojas.length)} className="size-10 grid place-items-center rounded-full bg-slate-900 text-white hover:bg-black">›</button>
        </div>
      </div>
    </div>
  );
}
