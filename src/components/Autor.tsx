export default function Autor() {
  return (
    <section id="autor" className="mx-auto max-w-6xl px-6 py-16">
      <div className="rounded-[28px] border border-slate-200 bg-white p-6 md:p-8 overflow-hidden">
        <div className="grid md:grid-cols-[220px_1fr] gap-8 items-start">
          <div className="justify-self-start">
            <div className="size-[180px] md:size-[200px] rounded-[24px] overflow-hidden border border-slate-200 bg-slate-50">
              <img src="/jpecina.jpg" alt="Jon Peciña Iturbe" className="h-full w-full object-cover" />
            </div>
            <div className="mt-4 flex gap-2">
              <span className="inline-flex items-center rounded-full bg-amber-50 border border-amber-200 px-3 py-1.5 text-xs font-medium text-amber-700">Autor</span>
            </div>
          </div>
          <div>
            <p className="text-xs tracking-[0.2em] font-semibold text-amber-600">EL AUTOR</p>
            <h2 className="font-serif text-3xl mt-2 text-slate-900">Jon Peciña Iturbe</h2>
            <p className="text-sm text-slate-500 mt-1">Finance Manager · Experiencia internacional Perú y Países Bajos · Autor de “El mensaje de Cristo es irracional”</p>

            <div className="mt-5 space-y-4 text-[15px] leading-relaxed text-slate-600">
              <p>
                <strong className="text-slate-900">Jon Peciña Iturbe</strong> es Finance Manager con experiencia internacional en Perú y Países Bajos. Ingeniero de formación, combina su trayectoria en empresa con una reflexión sostenida sobre fe, cultura y tecnología.
              </p>
              <p>
                En sus escritos aborda temas como inteligencia artificial, educación, literatura y el sentido del trabajo. Lector apasionado y observador atento de la vida cotidiana.
              </p>
              <p>
                En <em>El mensaje de Cristo es irracional</em> presenta una pregunta incómoda que recorre todo el libro: ¿nos hemos acostumbrado demasiado a Cristo? Con un estilo accesible, apoyado en el Catecismo, la Escritura y autores como Benedicto XVI, Juan Pablo II o Jacques Philippe, invita a redescubrir la lógica sobrenatural que entra en la historia y abre las puertas a una vida que no podemos darnos a nosotros mismos.
              </p>
            </div>

            <blockquote className="mt-6 border-l-2 border-amber-500 pl-4 text-sm italic text-slate-700">
              “Nadie vive así en los asuntos decisivos. No comprendemos de antemano todo lo que implicará amar… Hay verdades que solo se muestran cuando comenzamos a vivir de acuerdo con ellas.”
              <span className="not-italic text-slate-500"> — cap. 1, p. 11</span>
            </blockquote>
          </div>
        </div>

        <div className="mt-8 grid md:grid-cols-3 gap-4">
          {[
            { k: "Temas", v: "Misterio, Bienaventuranzas, libertad, pecado, Cruz, gracia, Resurrección, inhabitación" },
            { k: "Fuentes", v: "Dei Verbum · Fides et ratio · Gaudium et spes · Catecismo · Historia de un alma" },
            { k: "Para quién", v: "Quien cree conocer a Cristo y quiere dejarse desconcertar de nuevo" },
          ].map(c=> (
            <div key={c.k} className="rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4">
              <p className="text-xs tracking-[0.16em] font-semibold text-slate-500">{c.k.toUpperCase()}</p>
              <p className="text-sm text-slate-700 mt-2 leading-relaxed">{c.v}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
