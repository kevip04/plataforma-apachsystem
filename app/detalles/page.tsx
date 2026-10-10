import { CheckCircle2 } from 'lucide-react'
import { Header } from '@/components/Header'
import { services } from '@/lib/services'

export default function DetallesPage() {
  return (
    <main className="min-h-screen bg-[#072b62] text-white">
      <Header current="detalles" />
      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
        <div className="max-w-2xl">
          <p className="font-bold uppercase tracking-[0.18em] text-cyan-300">En detalle</p>
          <h2 className="mt-3 text-4xl font-black tracking-tight text-white sm:text-5xl">Cada servicio, <span className="text-[#ffd514]">explicado a fondo.</span></h2>
          <p className="mt-5 text-lg leading-8 text-blue-100">Conoce a fondo lo que ofrecemos y elige con confianza.</p>
        </div>
        <div className="mt-12 grid gap-8 md:mx-auto md:max-w-3xl">
          {services.map(({ icon: Icon, title, slug, details }) => (
            <article key={slug} id={`detalle-${slug}`} className="scroll-mt-28 rounded-3xl border border-white/10 bg-white/5 p-7">
              <div className="flex items-center gap-4">
                <div className="grid size-12 shrink-0 place-items-center rounded-2xl bg-[#ffd514] text-[#071c3b]"><Icon className="size-6" /></div>
                <h3 className="text-xl font-black text-white">{title}</h3>
              </div>
              <p className="mt-5 leading-7 text-blue-100">{details.intro}</p>
              {details.images ? (
                <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3 lg:grid-cols-4">
                  {details.images.map((img) => (
                    <figure key={img.src} className="overflow-hidden rounded-2xl border border-white/10 bg-white/5">
                      <img src={img.src} alt={img.label} className="aspect-large w-full object-cover" />
                      <figcaption className="px-3 py-2 text-xs font-bold text-blue-100">{img.label}</figcaption>
                    </figure>
                  ))}
                </div>
              ) : null}
              <ul className="mt-5 grid gap-3 text-sm text-blue-100 sm:grid-cols-2">
                {details.features.map((f) => (
                  <li key={f} className="flex gap-2"><CheckCircle2 className="mt-0.5 size-4 shrink-0 text-[#ffd514]" /> <span>{f}</span></li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>
      <footer className="bg-[#04152f] px-5 py-6 text-center text-sm text-blue-200"><p>© ApachSystem · Soluciones informáticas para todos</p></footer>
    </main>
  )
}