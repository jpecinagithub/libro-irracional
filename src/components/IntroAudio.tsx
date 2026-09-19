import { useRef, useState } from "react";
import { transcript } from "../data/book";
import { useSpeech } from "../hooks/useSpeech";

type Mode = "mp3" | "live";

export default function IntroAudio() {
  const [mode, setMode] = useState<Mode>("mp3");
  const [showTranscript, setShowTranscript] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);
  const speech = useSpeech(transcript.slice(0, 4000)); // limit for speech synthesis

  return (
    <section id="intro" className="mx-auto max-w-6xl px-6 py-16">
      <div className="rounded-[28px] border border-slate-200 bg-white overflow-hidden shadow-sm">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-0">
          <div className="p-6 md:p-8">
            <p className="text-xs tracking-[0.2em] font-semibold text-amber-600">INTRODUCCIÓN MULTIMEDIA</p>
            <h2 className="font-serif text-3xl mt-2 text-slate-900">Escucha y descarga la introducción</h2>
            <p className="text-sm text-slate-600 mt-3 leading-relaxed">Págs 1–6 completas — “Si el Evangelio no te desconcierta...” · Texto íntegro listo para leer y escuchar.</p>

            <div className="mt-6 inline-flex rounded-full border border-slate-200 p-1 bg-slate-50">
              <button onClick={()=>setMode("mp3")} className={`rounded-full px-4 py-1.5 text-sm font-medium ${mode==="mp3" ? "bg-slate-900 text-white" : "text-slate-600 hover:text-slate-900"}`}>Audio grabado (Piper)</button>
              <button onClick={()=>setMode("live")} className={`rounded-full px-4 py-1.5 text-sm font-medium ${mode==="live" ? "bg-slate-900 text-white" : "text-slate-600 hover:text-slate-900"}`}>Voz del navegador</button>
            </div>

            {mode==="mp3" ? (
              <div className="mt-6">
                <audio ref={audioRef} controls preload="metadata" className="w-full">
                  <source src="/intro.mp3" type="audio/mpeg" />
                  Tu navegador no soporta audio.
                </audio>
                <p className="text-xs text-slate-500 mt-2">Archivo <code className="px-1.5 py-0.5 rounded bg-slate-100 border border-slate-200 text-[11px]">intro.mp3</code> · 9:43 · Piper TTS <span className="font-medium">es_ES-sharvard-medium</span> (MIT, open-source). Sin backend, servido estático por Vercel.</p>
                <div className="flex flex-wrap gap-2 mt-4">
                  <a href="/intro.pdf" download className="inline-flex items-center rounded-full bg-amber-500 px-5 py-2.5 text-sm font-semibold text-white hover:bg-amber-600">Descargar PDF</a>
                  <a href="/intro.mp3" download className="inline-flex items-center rounded-full border border-slate-200 bg-white px-5 py-2.5 text-sm font-medium hover:bg-slate-50">Descargar MP3</a>
                </div>
              </div>
            ) : (
              <div className="mt-6 rounded-2xl border border-slate-200 bg-slate-50 p-5">
                {!speech.isSupported ? (
                  <p className="text-sm text-slate-600">Tu navegador no soporta Web Speech API.</p>
                ) : (
                  <>
                    <div className="flex flex-wrap gap-3 items-center">
                      <select value={speech.voice?.name ?? ""} onChange={e=>{ const v = speech.voices.find(v=>v.name===e.target.value); if(v) speech.setVoice(v);}} className="rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs">
                        {speech.voices.map(v=> <option key={v.name} value={v.name}>{v.name} ({v.lang})</option>)}
                        {speech.voices.length===0 && <option>Cargando voces...</option>}
                      </select>
                      <label className="text-xs text-slate-600 flex items-center gap-2">Velocidad
                        <input type="range" min={0.7} max={1.4} step={0.1} value={speech.rate} onChange={e=>speech.setRate(parseFloat(e.target.value))} />
                        <span className="tabular-nums">{speech.rate.toFixed(1)}x</span>
                      </label>
                    </div>
                    <div className="flex gap-2 mt-4">
                      {!speech.speaking ? (
                        <button onClick={speech.speak} className="rounded-full bg-slate-900 text-white px-5 py-2 text-sm font-medium hover:bg-black">▶ Reproducir</button>
                      ) : speech.paused ? (
                        <button onClick={speech.resume} className="rounded-full bg-slate-900 text-white px-5 py-2 text-sm font-medium">Continuar</button>
                      ) : (
                        <button onClick={speech.pause} className="rounded-full border border-slate-200 bg-white px-5 py-2 text-sm">Pausar</button>
                      )}
                      <button onClick={speech.cancel} className="rounded-full border border-slate-200 bg-white px-5 py-2 text-sm">Detener</button>
                    </div>
                    <p className="text-xs text-slate-500 mt-3">Web Speech API nativa · 100% cliente · sin claves · ideal para cambiar voz/velocidad.</p>
                  </>
                )}
              </div>
            )}

            <button onClick={()=>setShowTranscript(s=>!s)} className="mt-6 text-sm font-medium text-slate-900 underline decoration-slate-300 underline-offset-4">
              {showTranscript ? "Ocultar transcripción" : "Ver transcripción"}
            </button>
            {showTranscript && (
              <div className="mt-4 max-h-[320px] overflow-auto rounded-xl border border-slate-200 bg-slate-50 p-5 text-xs leading-relaxed text-slate-700 whitespace-pre-wrap">
                {transcript}
              </div>
            )}
          </div>

          <div className="bg-slate-50 border-t lg:border-t-0 lg:border-l border-slate-200 p-6 md:p-8">
            <p className="text-xs tracking-[0.18em] font-semibold text-slate-500">PARA LLEVARLO A LA VIDA</p>
            <ul className="mt-4 space-y-3">
              {[
                "¿Qué enseñanza de Jesús he reducido para hacerla compatible con mis criterios?",
                "¿Confundo misterio con contradicción, o fe con ausencia de pensamiento?",
                "¿Qué imagen demasiado pequeña de Dios se está cayendo en mi vida?",
                "¿Hay una palabra del Evangelio que solo comprenderé si comienzo a vivirla?",
              ].map(q=> (
                <li key={q} className="flex gap-3 rounded-xl border border-slate-200 bg-white px-4 py-3">
                  <input type="checkbox" className="mt-1 accent-slate-900" />
                  <span className="text-sm text-slate-700 leading-relaxed">{q}</span>
                </li>
              ))}
            </ul>
            <p className="text-xs text-slate-500 mt-4">Marca las preguntas que quieras llevar a la oración. Se guardan solo en tu navegador (local, sin backend).</p>
          </div>
        </div>
      </div>
    </section>
  );
}
