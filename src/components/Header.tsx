export default function Header() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur bg-white/80 border-b border-slate-200">
      <div className="mx-auto max-w-6xl px-6 h-[64px] flex items-center justify-between">
        <a href="#" className="flex items-center gap-3">
          <span className="inline-grid place-items-center size-8 rounded-lg bg-slate-900 text-white text-[11px] font-semibold tracking-widest">IC</span>
          <span className="text-sm font-medium tracking-tight text-slate-900 hidden sm:block">El mensaje de Cristo es irracional</span>
        </a>
        <nav className="hidden md:flex items-center gap-7 text-sm text-slate-600">
          <a href="#resena" className="hover:text-slate-900">Reseña</a>
          <a href="#indice" className="hover:text-slate-900">Índice</a>
          <a href="#intro" className="hover:text-slate-900">Introducción</a>
          <a href="#autor" className="hover:text-slate-900">Autor</a>
          <a href="https://www.amazon.es/dp/B0HJSS7NZM" target="_blank" rel="noreferrer" className="hover:text-slate-900">Comprar</a>
        </nav>
        <div className="flex items-center gap-2">
          <a href="#intro" className="hidden sm:inline-flex items-center rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-900 hover:bg-slate-50">Descargar</a>
          <a href="https://www.amazon.es/dp/B0HJSS7NZM" target="_blank" rel="noreferrer" className="inline-flex items-center rounded-full bg-amber-500 px-4 py-2 text-sm font-medium text-white hover:bg-amber-600">Comprar</a>
        </div>
      </div>
    </header>
  );
}
