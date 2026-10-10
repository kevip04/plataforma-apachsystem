import { Menu } from 'lucide-react'

type HeaderProps = {
  current?: 'inicio' | 'servicios' | 'variedades' | 'contacto' | 'detalles'
}

const navLinks = [
  { href: '/#servicios', label: 'Servicios', id: 'servicios' },
  { href: '/#variedades', label: 'Variedades', id: 'variedades' },
  { href: '/#contacto', label: 'Contacto', id: 'contacto' },
  { href: '/detalles', label: 'En detalle', id: 'detalles' },
] as const

export function Header({ current }: HeaderProps) {
  return (
    <header className="sticky top-0 z-40 border-b border-white/20 bg-[#061d42]/95 text-white shadow-lg backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 lg:px-8">
        <a href="/#inicio" className="flex items-center gap-3" aria-label="ApachSystem inicio">
          <div className="grid size-11 place-items-center rounded-2xl bg-[#ffd514] font-black text-xl text-[#061d42] shadow-md">A</div>
          <div className="leading-none"><p className="font-black tracking-tight">Apach<span className="text-[#ffd514]">System</span></p><p className="mt-1 text-[10px] font-bold uppercase tracking-[0.2em] text-cyan-200">Soluciones informáticas</p></div>
        </a>
        <nav className="hidden items-center gap-8 text-sm font-semibold md:flex" aria-label="Navegación principal">
          {navLinks.map(({ href, label, id }) => (
            <a
              key={id}
              href={href}
              className={`transition hover:text-[#ffd514] ${current === id ? 'text-[#ffd514]' : ''}`}
            >
              {label}
            </a>
          ))}
        </nav>
        <a href="https://wa.me/573158387804" className="hidden rounded-full bg-[#1cc878] px-5 py-2.5 text-sm font-extrabold text-white shadow-lg shadow-emerald-950/30 transition hover:-translate-y-0.5 hover:bg-[#13b467] sm:inline-flex">Escríbenos por WhatsApp</a>
        <button className="rounded-lg p-2 md:hidden" aria-label="Abrir menú"><Menu /></button>
      </div>
    </header>
  )
}