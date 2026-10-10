import {
  ArrowRight,
  CheckCircle2,
  Clock3,
  FileText,
  Globe2,
  MapPin,
  Menu,
  MonitorCog,
  Network,
  Phone,
  Printer,
  ShieldCheck,
  Sparkles,
  Wrench,
  X,
} from 'lucide-react'

const services = [
  {
    icon: Globe2,
    title: 'Alquiler de computadores',
    text: 'Conexión estable, equipos listos y acompañamiento para tus tareas digitales.',
    tag: 'Todos los días',
  },
  {
    icon: FileText,
    title: 'Elaboración de documentos',
    text: 'Hojas de vida, cartas, trabajos, impresiones, peticiones, copias, escaneos entre más cosas con acabado profesional.',
    tag: 'Entrega eficaz',
  },
  {
    icon: Wrench,
    title: 'Mantenimiento y reparación',
    text: 'Diagnóstico, limpieza, optimización y reparación para que tus equipos rindan mejor.',
    tag: 'Servicio técnico',
  },
  {
    icon: Wrench,
    title: 'Venta de computadores, suministros y accesorios informáticos',
    text: 'Venta de computadores revisados en excelente estado a diferentes precios.',
    tag: 'Venta',
  },
  {
    icon: Wrench,
    title: 'Configuración de tu red WiFi, cableado y puntos de red, instalación de diferentes recursos en tu computador de casa.',
    text: '',
    tag: 'A domicilio',
  }
]

const extras = [
  { icon: Printer, title: 'Papelería e impresiones', text: 'Todo lo necesario para trabajos informáticos' },
  { icon: Network, title: 'Redes informáticas', text: 'Instalación y mantenimiento' },
  { icon: MonitorCog, title: 'Asesoría informática', text: 'Soluciones claras sobre dudas informáticas' },
]

const bannerImg = '/ApachSystem.jpg'

export default function Page() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#072b62] text-white">
      <header className="sticky top-0 z-40 border-b border-white/20 bg-[#061d42]/95 text-white shadow-lg backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 lg:px-8">
          <a href="#inicio" className="flex items-center gap-3" aria-label="ApachSystem inicio">
            <div className="grid size-11 place-items-center rounded-2xl bg-[#ffd514] font-black text-xl text-[#061d42] shadow-md">A</div>
            <div className="leading-none"><p className="font-black tracking-tight">Apach<span className="text-[#ffd514]">System</span></p><p className="mt-1 text-[10px] font-bold uppercase tracking-[0.2em] text-cyan-200">Soluciones informáticas</p></div>
          </a>
          <nav className="hidden items-center gap-8 text-sm font-semibold md:flex" aria-label="Navegación principal">
            <a className="transition hover:text-[#ffd514]" href="#servicios">Servicios</a><a className="transition hover:text-[#ffd514]" href="#variedades">Variedades</a><a className="transition hover:text-[#ffd514]" href="#contacto">Contacto</a>
          </nav>
          <a href="https://wa.me/573158387804" className="hidden rounded-full bg-[#1cc878] px-5 py-2.5 text-sm font-extrabold text-white shadow-lg shadow-emerald-950/30 transition hover:-translate-y-0.5 hover:bg-[#13b467] sm:inline-flex">Escríbenos por WhatsApp</a>
          <button className="rounded-lg p-2 md:hidden" aria-label="Abrir menú"><Menu /></button>
        </div>
      </header>
      
      <section id="inicio" className="relative isolate overflow-hidden border-b border-white/10 bg-[#072b62] pt-8">
        
        <div className="relative">
            <div className="overflow-hidden [mask-image:linear-gradient(to_right,transparent,#000_7%,#000_93%,transparent)] [-webkit-mask-image:linear-gradient(to_right,transparent,#000_7%,#000_93%,transparent)]">
              <div className="flex w-max animate-[marquee_45s_linear_infinite] motion-reduce:animate-none">
                {Array.from({ length: 8 }).map((_, i) => (
                  <div key={i} className="px-3">
                    <img src={bannerImg} alt="Aviso comercial de ApachSystem" className="h-36 w-auto rounded-2xl border-4 border-white/90 object-cover shadow-xl sm:h-48" />
                  </div>
                ))}
              </div>
            </div>
          </div>

        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_10%,rgba(18,180,222,.35),transparent_40%),linear-gradient(120deg,#06214a_20%,#087ca7_100%)]" />
          <div className="mx-auto flex max-w-4xl flex-col items-center px-5 pt-8 pb-16 text-center lg:px-8 lg:pt-10 lg:pb-24">
            <h1 className="text-5xl font-black leading-[0.98] tracking-tight text-white sm:text-6xl lg:text-7xl">Soluciones informáticas <span className="text-[#ffd514]"> que sí funcionan.</span></h1>
            <p className="mx-auto mt-7 max-w-xl text-lg leading-8 text-blue-100">El mejor lugar sobre tecnología, trámites y servicios digitales. Atención cercana a buen precio.</p>
            <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row"><a href="#servicios" className="inline-flex items-center justify-center gap-2 rounded-full bg-[#ffd514] px-7 py-4 font-extrabold text-[#071c3b] shadow-xl shadow-yellow-950/20 transition hover:-translate-y-1">Conoce nuestros servicios <ArrowRight className="size-5" /></a><a href="#contacto" className="inline-flex items-center justify-center gap-2 rounded-full border border-white/35 bg-white/10 px-7 py-4 font-bold text-white transition hover:bg-white/20">Visítanos hoy</a></div>
            <div className="mt-10 flex flex-wrap justify-center gap-x-7 gap-y-3 text-sm font-semibold text-cyan-100"><span className="flex items-center gap-2"><CheckCircle2 className="size-4 text-[#ffd514]" /> Atención personalizada</span><span className="flex items-center gap-2"><CheckCircle2 className="size-4 text-[#ffd514]" /> Soluciones confiables</span></div>
          </div>
        
      </section>

      <section id="servicios" className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28"><div className="max-w-2xl"><p className="font-bold uppercase tracking-[0.18em] text-cyan-300">Lo que hacemos</p><h2 className="mt-3 text-4xl font-black tracking-tight text-white sm:text-5xl">Todo lo que necesitas, <span className="text-[#ffd514]">más cerca.</span></h2><p className="mt-5 text-lg leading-8 text-blue-100">Desde una impresión hasta el mantenimiento de tu computador: resolvemos tus necesidades con experiencia y buena atención.</p></div><div className="mt-12 grid gap-5 md:grid-cols-3">{services.map(({ icon: Icon, title, text, tag }) => <article key={title} className="group rounded-3xl border border-white/10 bg-white p-7 shadow-sm transition hover:-translate-y-2 hover:border-cyan-200 hover:shadow-xl"><div className="flex items-start justify-between"><div className="grid size-14 place-items-center rounded-2xl bg-cyan-50 text-[#0789b2] transition group-hover:bg-[#0789b2] group-hover:text-white"><Icon className="size-7" /></div><span className="rounded-full bg-yellow-50 px-3 py-1 text-xs font-bold text-yellow-700">{tag}</span></div><h3 className="mt-7 text-xl font-extrabold text-[#071c3b]">{title}</h3><p className="mt-3 leading-7 text-slate-600">{text}</p><a href="#contacto" className="mt-6 inline-flex items-center gap-2 text-sm font-extrabold text-[#0789b2]">Solicitar servicio <ArrowRight className="size-4 transition group-hover:translate-x-1" /></a></article>)}</div></section>

      <section id="variedades" className="border-y border-white/10 bg-white/5"><div className="mx-auto max-w-7xl px-5 py-20 lg:px-8"><div className="flex flex-col justify-between gap-6 md:flex-row md:items-end"><div><p className="font-bold uppercase tracking-[0.18em] text-cyan-300">También encuentras</p><h2 className="mt-3 text-4xl font-black tracking-tight text-white">Variedades para tu día</h2></div><p className="max-w-md text-blue-100">Productos electrónicos, papelería, dulces y servicios que hacen más fácil tu rutina.</p></div><div className="mt-10 grid gap-4 md:grid-cols-3">{extras.map(({ icon: Icon, title, text }) => <div key={title} className="flex items-center gap-5 rounded-2xl border border-white/10 bg-white p-5 shadow-sm"><div className="grid size-12 shrink-0 place-items-center rounded-xl bg-[#071c3b] text-[#ffd514]"><Icon className="size-6" /></div><div><h3 className="font-extrabold text-[#071c3b]">{title}</h3><p className="mt-1 text-sm text-slate-500">{text}</p></div></div>)}</div></div></section>

      <section id="contacto" className="bg-[#061d42] text-white"><div className="mx-auto grid max-w-7xl gap-10 px-5 py-20 lg:grid-cols-[1.1fr_0.9fr] lg:px-8"><div><p className="font-bold uppercase tracking-[0.18em] text-cyan-300">Estamos para ayudarte</p><h2 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">Hablemos de lo que necesitas.</h2><p className="mt-5 max-w-lg text-lg leading-8 text-blue-100">Escríbenos o visítanos. Te orientamos con claridad para encontrar la mejor solución.</p><div className="mt-9 flex flex-col gap-5 text-blue-100"><a href="https://wa.me/573158387804" className="flex items-center gap-4 hover:text-white"><span className="grid size-11 place-items-center rounded-full bg-[#1cc878]"><Phone className="size-5" /></span><span><b className="block text-white">WhatsApp y teléfono</b>315 838 7804</span></a><div className="flex items-center gap-4"><span className="grid size-11 place-items-center rounded-full bg-[#087ca7]"><MapPin className="size-5" /></span><span><b className="block text-white">Encuéntranos</b>Calle 11 # 5-30</span></div><div className="flex items-center gap-4"><span className="grid size-11 place-items-center rounded-full bg-[#087ca7]"><Clock3 className="size-5" /></span><span><b className="block text-white">Horario</b>Lun–Vie · 8:00 a.m.–12:00 p.m. · 2:00–6:00 p.m.</span></div></div></div><div className="rounded-3xl bg-white p-7 text-[#071c3b] shadow-2xl sm:p-9"><h3 className="text-2xl font-black">¿Tienes una pregunta?</h3><p className="mt-2 text-slate-600">Cuéntanos brevemente y te contactaremos.</p><form className="mt-7 flex flex-col gap-4"><label className="flex flex-col gap-2 text-sm font-bold">Nombre<input className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 font-normal outline-none ring-[#0798c3] focus:ring-2" placeholder="Tu nombre" /></label><label className="flex flex-col gap-2 text-sm font-bold">¿Cómo podemos ayudarte?<textarea rows={4} className="resize-none rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 font-normal outline-none ring-[#0798c3] focus:ring-2" placeholder="Escribe tu mensaje" /></label><a href="https://wa.me/573158387804" className="mt-2 inline-flex items-center justify-center gap-2 rounded-xl bg-[#1cc878] px-5 py-3.5 font-extrabold text-white transition hover:bg-[#13b467]">Enviar por WhatsApp <ArrowRight className="size-4" /></a></form></div></div></section>
      <footer className="bg-[#04152f] px-5 py-6 text-center text-sm text-blue-200"><p>© 2026 ApachSystem · Soluciones informáticas para todos</p></footer>
    </main>
  )
}
