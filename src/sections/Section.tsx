import type { ReactNode } from 'react'
import { useLang } from '../i18n/LanguageContext'
import type { L } from '../content/site'
import { Reveal } from '../components/motion'
import { TechLogo, hasTechLogo } from '../components/TechLogo'

/**
 * Frosted pill — the hero's signature chip, tokenized so it reads as blue-ink
 * on light zones and white on dark anchor zones (hero / contact).
 */
export function Pill({
  children,
  dot = false,
  className = '',
}: {
  children: ReactNode
  dot?: boolean
  className?: string
}) {
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full bg-ink/[0.06] px-4 py-1.5 text-xs font-medium text-ink ring-1 ring-inset ring-ink/10 backdrop-blur-sm ${className}`}
    >
      {dot && <span className="h-1.5 w-1.5 rounded-full bg-accent" />}
      {children}
    </span>
  )
}

/** Small label above a block — a hairline + wide-tracked caption. */
export function Label({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-ink/50">
      <span className="h-px w-5 bg-ink/25" />
      {children}
    </span>
  )
}

/** Tag pill — shows the tech's brand logo when the label maps to one. */
export function Chip({ children }: { children: ReactNode }) {
  const withLogo = typeof children === 'string' && hasTechLogo(children)
  return (
    <span
      className={`inline-flex items-center rounded-full bg-ink/[0.05] py-1.5 text-[12.5px] font-medium text-ink/75 ring-1 ring-inset ring-ink/10 transition-colors hover:bg-ink/10 hover:text-ink ${
        withLogo ? 'gap-1.5 pl-2 pr-3.5' : 'px-3.5'
      }`}
    >
      {withLogo && <TechLogo name={children} className="h-3.5 w-3.5 shrink-0" />}
      {children}
    </span>
  )
}

/** Scannable key figure — a slightly stronger frosted pill. */
export function Metric({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full bg-ink/[0.07] px-4 py-2 text-[13px] font-semibold text-ink ring-1 ring-inset ring-ink/12 backdrop-blur-sm">
      {children}
    </span>
  )
}

/** Solid call-to-action — ink fill, canvas-colored text (inverts per zone). */
export function Solid({
  children,
  href,
  download,
  className = '',
}: {
  children: ReactNode
  href: string
  download?: boolean
  className?: string
}) {
  return (
    <a
      href={href}
      download={download}
      className={`inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3.5 text-base font-semibold text-canvas transition-transform hover:-translate-y-0.5 ${className}`}
    >
      {children}
    </a>
  )
}

interface SectionProps {
  id: string
  no: string
  title: L
  /** Short phrase shown in the frosted pill above the giant title. */
  kicker?: L
  lead?: L
  children: ReactNode
}

/** Shared section shell: frosted pill kicker → monumental title → optional lead. */
export function Section({ id, no, title, kicker, lead, children }: SectionProps) {
  const { t } = useLang()
  return (
    <section id={id} className="relative px-6 py-20 md:px-10 md:py-28">
      <div className="mx-auto max-w-6xl">
        <Reveal className="mb-12 md:mb-16">
          <Pill dot>
            <span className="tabular-nums text-ink/50">{no}</span>
            {kicker && <span className="text-ink">{t(kicker)}</span>}
          </Pill>
          <h2 className="mt-6 font-sans text-6xl font-bold uppercase leading-[0.82] tracking-[-0.03em] text-ink sm:text-7xl md:text-8xl">
            {t(title)}
          </h2>
          {lead && (
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-ink/65 md:text-lg">
              {t(lead)}
            </p>
          )}
        </Reveal>
        {children}
      </div>
    </section>
  )
}
