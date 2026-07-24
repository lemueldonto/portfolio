import { useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { useReducedMotion } from 'framer-motion'
import { useLang } from '../i18n/LanguageContext'
import { projects, type L } from '../content/site'
import { Section, Chip, Label, Pill } from './Section'
import { Reveal } from '../components/motion'
import { ArrowUpRight } from '../components/icons'

const title: L = { en: 'Projects', fr: 'Projets' }
const kicker: L = { en: 'Selected work', fr: 'Projets choisis' }
const lead: L = {
  en: 'Founder at heart, engineer in execution. I start a lot — I only keep what reaches production. Here are two.',
  fr: 'Fondateur dans l’âme, ingénieur dans l’exécution. Je lance beaucoup, je ne retiens que ce qui atteint la production. En voici deux.',
}
const theProblem: L = { en: 'The problem', fr: 'Le problème' }
const whatIBuilt: L = { en: 'What I built', fr: 'Ce que j’ai construit' }
const status: L = { en: 'Status', fr: 'État' }

const PHOTOS: Record<string, string[]> = {
  asiganme: [
    '/img/asiganme-1.webp', // film — West-African market (opener)
    '/img/Image2.png', // buyer app — home & categories
    '/img/Image1.png', // buyer app — AI shopping assistant
    '/img/Image3.jpg', // buyer app — product page
    '/img/asiganme-2.webp', // film — shopping on the app (interlude)
    '/img/Image4.png', // buyer app — offer / negotiation
    '/img/Image5.png', // buyer app — payment (PayPal)
    '/img/Image6.png', // buyer app — order confirmed
    '/img/Image9.png', // seller web app — dashboard
    '/img/Image7.jpg', // admin web app — AI moderation
  ],
  fintech: [
    '/img/novi-1.webp', // onboarding — brand + value prop (real)
    '/img/novi-2.webp', // home — quick actions & borrowing capacity (real)
    '/img/novi-3.webp', // home — how it works & social proof (real)
    '/img/novi-5.webp', // simulate a loan
    '/img/novi-6.webp', // offer summary
    '/img/novi-7.webp', // funds released
    '/img/novi-8.webp', // repayment schedule
  ],
}

const Chevron = ({ dir }: { dir: 'left' | 'right' }) => (
  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d={dir === 'left' ? 'm15 18-6-6 6-6' : 'm9 18 6-6-6-6'} />
  </svg>
)

/**
 * Auto-advancing filmstrip carousel — each image keeps its natural ratio,
 * pauses on hover / when the lightbox is open, and opens a full-screen viewer
 * on click. Respects prefers-reduced-motion.
 */
function Carousel({ images }: { images: string[] }) {
  const ref = useRef<HTMLDivElement>(null)
  const reduce = useReducedMotion()
  const [open, setOpen] = useState<number | null>(null)

  const step = (dir: 1 | -1) => {
    const el = ref.current
    if (!el) return
    const kids = Array.from(el.children) as HTMLElement[]
    if (dir === 1) {
      const next = kids.find((k) => k.offsetLeft > el.scrollLeft + 4)
      if (!next || el.scrollLeft + el.clientWidth >= el.scrollWidth - 8) {
        el.scrollTo({ left: 0, behavior: 'smooth' })
      } else {
        el.scrollTo({ left: next.offsetLeft, behavior: 'smooth' })
      }
    } else {
      const prev = [...kids].reverse().find((k) => k.offsetLeft < el.scrollLeft - 4)
      el.scrollTo({ left: prev ? prev.offsetLeft : 0, behavior: 'smooth' })
    }
  }

  // Auto-advance (paused on hover or while the lightbox is open).
  useEffect(() => {
    if (reduce || open !== null) return
    const el = ref.current
    if (!el) return
    let paused = false
    const enter = () => (paused = true)
    const leave = () => (paused = false)
    el.addEventListener('pointerenter', enter)
    el.addEventListener('pointerleave', leave)
    const id = window.setInterval(() => {
      if (!paused) step(1)
    }, 3000)
    return () => {
      window.clearInterval(id)
      el.removeEventListener('pointerenter', enter)
      el.removeEventListener('pointerleave', leave)
    }
  }, [reduce, open])

  // Lightbox: keyboard nav + scroll lock.
  useEffect(() => {
    if (open === null) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(null)
      else if (e.key === 'ArrowRight') setOpen((i) => (i === null ? null : (i + 1) % images.length))
      else if (e.key === 'ArrowLeft') setOpen((i) => (i === null ? null : (i - 1 + images.length) % images.length))
    }
    window.addEventListener('keydown', onKey)
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = prev
    }
  }, [open, images.length])

  return (
    <div className="relative mt-7">
      <div
        ref={ref}
        className="flex gap-3 overflow-x-auto scroll-smooth pb-1 snap-x snap-mandatory [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {images.map((src, k) => (
          <button
            key={k}
            type="button"
            onClick={() => setOpen(k)}
            aria-label="Agrandir l’image"
            className="shrink-0 cursor-zoom-in snap-start overflow-hidden rounded-2xl ring-1 ring-inset ring-ink/10 transition hover:ring-ink/25"
          >
            <img
              src={src}
              alt=""
              aria-hidden="true"
              className="h-[270px] w-auto bg-ink/[0.04] object-cover md:h-[330px]"
            />
          </button>
        ))}
      </div>

      {images.length > 2 && (
        <>
          <button
            type="button"
            aria-label="Précédent"
            onClick={() => step(-1)}
            className="absolute left-2 top-1/2 hidden -translate-y-1/2 rounded-full bg-white/85 p-2 text-ink shadow-lg ring-1 ring-inset ring-ink/10 backdrop-blur transition hover:bg-white md:block"
          >
            <Chevron dir="left" />
          </button>
          <button
            type="button"
            aria-label="Suivant"
            onClick={() => step(1)}
            className="absolute right-2 top-1/2 hidden -translate-y-1/2 rounded-full bg-white/85 p-2 text-ink shadow-lg ring-1 ring-inset ring-ink/10 backdrop-blur transition hover:bg-white md:block"
          >
            <Chevron dir="right" />
          </button>
        </>
      )}

      {open !== null &&
        createPortal(
          <div
            className="fixed inset-0 z-[60] flex items-center justify-center bg-black/85 p-4 backdrop-blur-sm sm:p-8"
            onClick={() => setOpen(null)}
          >
          <img
            src={images[open]}
            alt=""
            onClick={(e) => e.stopPropagation()}
            className="max-h-[88vh] max-w-[92vw] rounded-xl object-contain shadow-2xl"
          />
          <button
            type="button"
            aria-label="Fermer"
            onClick={() => setOpen(null)}
            className="absolute right-4 top-4 rounded-full bg-white/10 p-2 text-white ring-1 ring-inset ring-white/25 backdrop-blur transition hover:bg-white/20"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M6 6 18 18M18 6 6 18" />
            </svg>
          </button>
          {images.length > 1 && (
            <>
              <button
                type="button"
                aria-label="Précédent"
                onClick={(e) => {
                  e.stopPropagation()
                  setOpen((i) => (i === null ? null : (i - 1 + images.length) % images.length))
                }}
                className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-2.5 text-white ring-1 ring-inset ring-white/25 backdrop-blur transition hover:bg-white/20 sm:left-6"
              >
                <Chevron dir="left" />
              </button>
              <button
                type="button"
                aria-label="Suivant"
                onClick={(e) => {
                  e.stopPropagation()
                  setOpen((i) => (i === null ? null : (i + 1) % images.length))
                }}
                className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-2.5 text-white ring-1 ring-inset ring-white/25 backdrop-blur transition hover:bg-white/20 sm:right-6"
              >
                <Chevron dir="right" />
              </button>
              <div className="absolute bottom-5 left-1/2 -translate-x-1/2 rounded-full bg-white/10 px-3 py-1 text-[12px] font-medium text-white/80 ring-1 ring-inset ring-white/20 backdrop-blur">
                {open + 1} / {images.length}
              </div>
            </>
          )}
        </div>,
        document.body,
      )}
    </div>
  )
}

export function Projects() {
  const { t } = useLang()

  return (
    <Section id="projects" no="03" kicker={kicker} title={title} lead={lead}>
      <div className="space-y-6 md:space-y-8">
        {projects.map((p, i) => (
          <Reveal key={p.id}>
            <article className="surface overflow-hidden rounded-3xl p-6 md:p-8 lg:p-10">
              {/* Header */}
              <div className="flex flex-wrap items-start justify-between gap-x-6 gap-y-4">
                <div>
                  <div className="flex flex-wrap items-center gap-2">
                    <Pill dot>
                      <span className="tabular-nums text-ink/50">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                    </Pill>
                    <Pill>{t(p.period)}</Pill>
                  </div>
                  <h3 className="mt-4 font-sans text-4xl font-bold uppercase leading-[0.9] tracking-[-0.02em] text-ink md:text-5xl">
                    {p.name}
                  </h3>
                  <p className="mt-2 text-base text-ink/65">{t(p.tagline)}</p>
                </div>
                {p.links.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {p.links.map((l) => (
                      <a
                        key={l.url}
                        href={l.url}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 rounded-full bg-ink px-4 py-2 text-[13px] font-semibold text-canvas transition-transform hover:-translate-y-0.5"
                      >
                        {l.label}
                        <ArrowUpRight className="text-sm" />
                      </a>
                    ))}
                  </div>
                )}
              </div>

              {/* Visuals — scrollable carousel of previews */}
              <Carousel images={PHOTOS[p.id] ?? []} />

              {/* Detail */}
              <div className="mt-8 grid gap-8 md:grid-cols-2 md:gap-12">
                <div>
                  <Label>{t(theProblem)}</Label>
                  <p className="mt-4 text-[15px] leading-relaxed text-ink/75">{t(p.problem)}</p>
                  <div className="mt-6">
                    <Label>{t(status)}</Label>
                    <p className="mt-3 text-[13px] font-medium leading-relaxed text-ink/60">
                      {t(p.status)}
                    </p>
                  </div>
                </div>
                <div>
                  <Label>{t(whatIBuilt)}</Label>
                  <ul className="mt-4 space-y-3">
                    {t(p.bullets).map((b, bi) => (
                      <li key={bi} className="flex gap-3 text-[14.5px] leading-relaxed text-ink/75">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-8 flex flex-wrap gap-2">
                {p.tags.map((tag) => (
                  <Chip key={tag}>{tag}</Chip>
                ))}
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
