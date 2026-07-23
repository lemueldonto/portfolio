import { useEffect, useState } from 'react'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
import { useLang } from '../i18n/LanguageContext'
import { personal, type L } from '../content/site'

const BLUE = '#031e58' // deep royal navy — matches the portrait's studio background
const PANEL_BG =
  'radial-gradient(125% 110% at 70% 34%, #06327f 0%, #04256a 52%, #021a50 100%)'

const intro: L = {
  en: 'Real-time. Distributed. In production. From architecture to the team that ships it.',
  fr: 'Temps réel. Distribué. En production. De l’architecture à l’équipe qui livre.',
}

// Science epigraphs that quietly cycle where the role tag used to sit.
const quotes: { text: L; author: string }[] = [
  {
    text: {
      en: 'We are made of star-stuff.',
      fr: 'Nous sommes de la poussière d’étoiles.',
    },
    author: 'Carl Sagan',
  },
  {
    text: {
      en: 'What I cannot create, I do not understand.',
      fr: 'Ce que je ne peux créer, je ne le comprends pas.',
    },
    author: 'Richard Feynman',
  },
  {
    text: {
      en: 'Nothing in life is to be feared, only understood.',
      fr: 'Rien dans la vie n’est à craindre, tout est à comprendre.',
    },
    author: 'Marie Curie',
  },
  {
    text: {
      en: 'The important thing is not to stop questioning.',
      fr: 'L’important est de ne jamais cesser de questionner.',
    },
    author: 'Albert Einstein',
  },
  {
    text: {
      en: 'Look up at the stars, not down at your feet.',
      fr: 'Regardez les étoiles, pas vos pieds.',
    },
    author: 'Stephen Hawking',
  },
]

const EASE = [0.22, 1, 0.36, 1] as const

/** Right-aligned science epigraph that fades from one quote to the next. */
function ScienceQuote() {
  const { t } = useLang()
  const reduce = useReducedMotion()
  const [i, setI] = useState(0)

  useEffect(() => {
    if (reduce) return
    const id = setInterval(() => setI((n) => (n + 1) % quotes.length), 5000)
    return () => clearInterval(id)
  }, [reduce])

  const q = quotes[i]
  return (
    <div className="block max-w-[46%] text-right sm:max-w-[260px]">
      <AnimatePresence mode="wait">
        <motion.p
          key={i}
          initial={reduce ? { opacity: 1 } : { opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          exit={reduce ? { opacity: 1 } : { opacity: 0, y: -6 }}
          transition={{ duration: 0.5, ease: EASE }}
          className="text-[11px] font-medium italic leading-snug text-white/85 sm:text-[13px]"
        >
          “{t(q.text)}”
          <span className="mt-1.5 block text-[10px] font-semibold not-italic uppercase tracking-[0.14em] text-white/45">
            {q.author}
          </span>
        </motion.p>
      </AnimatePresence>
    </div>
  )
}

/** Full-bleed hero inside the global framed panel (nav overlays from App). */
export function Hero() {
  const { t } = useLang()

  return (
    <section id="top" className="relative flex min-h-[100svh] flex-col overflow-hidden text-white" style={{ background: PANEL_BG }}>
      {/* Character */}
      <motion.img
        src="/img/hero-clean.webp"
        alt="Portrait of Lemuel Donto"
        initial={{ opacity: 0, scale: 1.06 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.1, ease: EASE }}
        className="absolute inset-y-0 right-0 h-full w-full object-cover object-[46%_20%] md:w-[56%] md:object-[42%_30%]"
      />
      {/* Blue wash so the type stays legible over the image */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background: `linear-gradient(90deg, ${BLUE} 6%, ${BLUE}d0 32%, transparent 58%), linear-gradient(0deg, #021b4a 2%, transparent 26%)`,
        }}
      />

      {/* Intro + © (top spacing clears the overlaid nav) */}
      <div className="relative z-10 flex flex-1 flex-col justify-start px-6 pt-[19vh] md:justify-center md:px-10 md:pt-24">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: EASE }}
          className="max-w-xs text-[15px] font-medium leading-relaxed text-white/90 md:max-w-sm md:text-base"
        >
          {t(intro)}
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-10 font-sans text-2xl font-bold text-white md:text-3xl"
        >
          © Lead Software Engineer
        </motion.p>
      </div>

      {/* Giant name + tags */}
      <div className="relative z-10">
        <div className="flex items-end justify-between px-6 md:px-10">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/12 px-4 py-1.5 text-xs font-medium text-white backdrop-blur-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-white" /> {personal.displayName}
          </span>
          <ScienceQuote />
        </div>
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: EASE }}
          className="select-none px-3 text-center font-sans font-bold leading-[0.78] tracking-[-0.03em] text-white"
          style={{ fontSize: 'clamp(5rem, 27vw, 26rem)' }}
        >
          DONTO<span className="align-top text-[0.42em] text-white/70">*</span>
        </motion.h1>
      </div>
    </section>
  )
}
