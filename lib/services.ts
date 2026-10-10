import { FileText, Globe2, Wrench } from 'lucide-react'

export type Service = {
  icon: typeof Globe2
  title: string
  text: string
  tag: string
  slug: string
  details: {
    intro: string
    features: string[]
    images?: { src: string; label: string }[]
  }
}

export const services: Service[] = [
  {
    icon: Globe2,
    title: 'Alquiler de computadores',
    text: 'Conexión estable, equipos listos y acompañamiento para tus tareas digitales.',
    tag: 'Todos los días',
    slug: 'alquiler',
    details: {
      intro:
        'Usa nuestros equipos por el tiempo que necesites con internet estable, un buen espacio de trabajo y acompañamiento para que avances sin problemas.',
      features: [
        'Equipos listos con Windows y programas actualizados',
        'Internet de alta velocidad para estudiar, trabajar o hacer videollamadas',
        'Alquiler por el tiempo que necesites con tarifas accesibles',
        'Impresión, escaneo y guardado de archivos en el mismo lugar',
      ],
    },
  },
  {
    icon: FileText,
    title: 'Elaboración de documentos',
    text: 'Hojas de vida, cartas, trabajos, impresiones, peticiones, copias, escaneos entre más cosas con acabado profesional.',
    tag: 'Entrega eficaz',
    slug: 'documentos',
    details: {
      intro:
        'Se redacta de la mejor manera las necesidades que se tengan, damos formato e imprimimos tus documentos con una buena presentación y profesional.',
      features: [
        'Hojas de vida, cartas y peticiones',
        'Trabajos, informes y transcripciones',
        'Impresión, copias y escaneo en color y blanco y negro',
        'Entrega impresa, en USB, por correo electrónico o por Whatsapp',
      ],
    },
  },
  {
    icon: Wrench,
    title: 'Mantenimiento y reparación',
    text: 'Diagnóstico, limpieza, optimización y reparación para que tus equipos rindan mejor.',
    tag: 'Servicio técnico',
    slug: 'mantenimiento',
    details: {
      intro:
        'Revisamos, limpiamos y optimizamos tu equipo para que vuelva a rendir como el primer día, con un servicio honesto y transparente.',
      features: [
        'Diagnóstico de software y hardware',
        'Limpieza interna y mantenimiento preventivo',
        'Eliminación de virus y optimización del sistema',
        'Instalación de programas y sistema operativo',
      ],
    },
  },
  {
    icon: Wrench,
    title: 'Venta de computadores, suministros y accesorios informáticos',
    text: 'Venta de computadores revisados en excelente estado a diferentes precios.',
    tag: 'Venta',
    slug: 'venta',
    details: {
      intro:
        'Compra equipos y accesorios revisados, con funcionamiento probado y a precios justos según tu presupuesto.',
      features: [
        'Computadores de escritorio y portátiles revisados',
        'Suministros y accesorios informáticos',
        'Asesoría para elegir según lo que necesitas',
        'Prueba de funcionamiento antes de la entrega',
      ],
      images: [
        { src: '/compu1.jpg', label: 'Computador de escritorio' },
        { src: '/compu2.jpg', label: 'Computadores disponibles' },
        { src: '/compu3.jpg', label: 'Equipos en venta' },
        { src: '/laptop1.jpg', label: 'Portátil en venta' },
        { src: '/baselaptop1.jpg', label: 'Base para portátil' },
        { src: '/usb1.jpg', label: 'Memorias USB' },
        { src: '/mouse1.jpg', label: 'Mouse y accesorios' },
      ],
    },
  },
  {
    icon: Wrench,
    title:
      'Configuración de tu red WiFi, cableado y puntos de red, instalación de diferentes recursos en tu computador personal.',
    text: '',
    tag: 'A domicilio',
    slug: 'redes',
    details: {
      intro:
        'Dejamos tu red y tus equipos configurados para que trabajen rápido y sin caídas, en tu casa o negocio.',
      features: [
        'Configuración de WiFi en casa o negocio',
        'Cableado y puntos de red',
        'Instalación de programas y recursos en tu computador',
        'Asesoría y ajustes a domicilio',
      ],
    },
  },
]