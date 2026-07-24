import { useLang } from '../i18n/LanguageContext'
import type { L } from '../content/site'
import { LanguageToggle } from '../components/LanguageToggle'

const getInTouch: L = { en: 'Get in touch', fr: 'Me contacter' }

const links: { id: string; label: L }[] = [
  { id: 'about', label: { en: 'About', fr: 'À propos' } },
  { id: 'experience', label: { en: 'Experience', fr: 'Expérience' } },
  { id: 'projects', label: { en: 'Projects', fr: 'Projets' } },
  { id: 'contact', label: { en: 'Contact', fr: 'Contact' } },
]

/** Single top bar for the whole framed panel — overlays the hero. */
export function Nav() {
  const { t } = useLang()

  return (
    <header className="absolute inset-x-0 top-0 z-40 px-6 pt-6 text-white md:px-10 md:pt-7">
      <div className="flex items-center justify-between gap-2 sm:gap-4">
        <a href="#top" className="flex items-center gap-2 font-sans text-lg font-bold tracking-tight sm:gap-2.5 sm:text-2xl">
          <svg viewBox="0 0 64 64" className="h-8 w-8 shrink-0" aria-hidden="true">
            <defs>
              <linearGradient id="navAst" gradientUnits="userSpaceOnUse" x1="35" y1="22" x2="50" y2="42">
                <stop offset="0" stopColor="#8fb0ff" />
                <stop offset="1" stopColor="#3567f5" />
              </linearGradient>
            </defs>
            <g fill="none" stroke="currentColor" strokeWidth="4.8" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 16 V48 H27" />
              <path d="M31.5 16 V48" />
              <path d="M31.5 16 H36 C49.5 16 53 23.5 53 32 C53 40.5 49.5 48 36 48 H31.5" />
            </g>
            <g transform="translate(42,32) scale(0.4)">
              <g stroke="url(#navAst)" strokeWidth="5" strokeLinecap="round">
                <line x1="0" y1="0" x2="0" y2="-16" />
                <line x1="0" y1="0" x2="0" y2="16" />
                <line x1="0" y1="0" x2="-15.6" y2="-9" />
                <line x1="0" y1="0" x2="15.6" y2="9" />
                <line x1="0" y1="0" x2="-15.6" y2="9" />
                <line x1="0" y1="0" x2="15.6" y2="-9" />
              </g>
              <g fill="url(#navAst)">
                <circle cx="0" cy="-16" r="5" />
                <circle cx="0" cy="16" r="5" />
                <circle cx="-15.6" cy="-9" r="5" />
                <circle cx="15.6" cy="9" r="5" />
                <circle cx="-15.6" cy="9" r="5" />
                <circle cx="15.6" cy="-9" r="5" />
              </g>
              <circle cx="0" cy="0" r="6.6" fill="#eaf1ff" />
            </g>
          </svg>
          <span>Donto<span className="text-white/55">*</span></span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              className="text-sm font-medium text-white/90 transition-colors hover:text-white"
            >
              {t(l.label)}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <LanguageToggle />
          <a
            href="#contact"
            className="inline-flex shrink-0 items-center gap-1.5 whitespace-nowrap rounded-full bg-white px-3.5 py-2 text-[13px] font-semibold text-[#04205a] transition-transform hover:-translate-y-0.5 sm:gap-2 sm:px-5 sm:py-2.5 sm:text-sm"
          >
            {t(getInTouch)} <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </header>
  )
}
