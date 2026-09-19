import Autor from "./components/Autor";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Indice from "./components/Indice";
import IntroAudio from "./components/IntroAudio";
import Resena from "./components/Resena";

export default function App() {
  return (
    <div className="min-h-dvh bg-white text-slate-900 selection:bg-amber-200">
      <Header />
      <main>
        <Hero />
        <div className="mx-auto max-w-6xl px-6">
          <div className="h-px bg-slate-200" />
        </div>
        <Resena />
        <Indice />
        <IntroAudio />
        <Autor />
        <section className="mx-auto max-w-6xl px-6">
          <div className="rounded-[24px] border border-slate-200 bg-slate-50 px-6 py-8 md:px-8">
            <h3 className="font-serif text-xl text-slate-900">¿Te ha desconcertado?</h3>
            <p className="text-sm text-slate-600 mt-2 leading-relaxed max-w-3xl">
              Este libro no quiere darte respuestas prefabricadas, sino abrir una puerta. Si quieres seguir leyendo, descarga la introducción completa en PDF. El resto —herida, Cruz, gracia, Resurrección— te espera en las páginas siguientes.
            </p>
            <div className="flex flex-wrap gap-3 mt-6">
              <a href="/intro.pdf" download className="rounded-full bg-slate-900 text-white px-6 py-3 text-sm font-medium hover:bg-black">Descargar introducción</a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
