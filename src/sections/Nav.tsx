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
      <div className="flex items-center justify-between gap-4">
        <a href="#top" className="font-sans text-2xl font-bold tracking-tight">
          Donto<span className="text-white/55">*</span>
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

        <div className="flex items-center gap-3">
          <LanguageToggle className="hidden sm:inline-flex" />
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-[#04205a] transition-transform hover:-translate-y-0.5"
          >
            {t(getInTouch)} <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </header>
  )
}
