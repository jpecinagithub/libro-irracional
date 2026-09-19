export default function Footer() {
  return (
    <footer className="border-t border-slate-200 mt-8">
      <div className="mx-auto max-w-6xl px-6 py-10">
        <div className="flex flex-col md:flex-row justify-between gap-6">
          <div>
            <p className="text-sm font-medium text-slate-900">El mensaje de Cristo es irracional</p>
            <p className="text-xs text-slate-500 mt-1">© 2026 Jon Peciña Iturbe — La lógica sobrenatural del Evangelio</p>
            <p className="text-xs text-slate-500 mt-2 max-w-[560px] leading-relaxed">Stack: Vite + React + Tailwind + Framer Motion · Sin backend · Despliegue Vercel · Imágenes: SVG minimal + prompts SDXL.</p>
          </div>
          <div className="flex gap-2 self-start">
            <a href="/intro.pdf" download className="rounded-full border border-slate-200 px-4 py-2 text-xs font-medium hover:bg-slate-50">PDF Introducción</a>
            <a href="#indice" className="rounded-full bg-slate-900 text-white px-4 py-2 text-xs font-medium hover:bg-black">Volver al índice</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
