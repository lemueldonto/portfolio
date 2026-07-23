import { useLang } from '../i18n/LanguageContext'
import { personal, ui, type L } from '../content/site'
import { Section, Label, Pill, Solid } from './Section'
import { Reveal } from '../components/motion'
import { MailIcon, DownloadIcon, LinkedinIcon, GithubIcon, MapPinIcon } from '../components/icons'

const title: L = { en: 'Contact', fr: 'Contact' }
const kicker: L = { en: 'Say hello', fr: 'Dites bonjour' }
const statement: L = {
  en: 'Let’s build something together.',
  fr: 'Construisons quelque chose ensemble.',
}

// Deep royal-blue closing anchor — echoes the hero, bookends the page.
const DARK_BAND =
  'radial-gradient(110% 90% at 82% 12%, #06327f 0%, #04256a 52%, #021a50 100%)'

export function Contact() {
  const { t, lang } = useLang()

  return (
    <div className="zone-dark relative text-ink" style={{ background: DARK_BAND }}>
      <Section id="contact" no="05" kicker={kicker} title={title}>
        <Reveal>
          <p className="max-w-3xl font-sans text-4xl font-bold leading-[0.95] tracking-[-0.02em] text-ink md:text-6xl">
            {t(statement)}
          </p>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-ink/65 md:text-lg">
            {t(ui.contact.lead)}
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <Solid href={`mailto:${personal.email}`}>
              <MailIcon className="text-lg" /> {t(ui.cta.emailMe)}
            </Solid>
            <a
              href={personal.cv[lang]}
              download
              className="inline-flex items-center gap-2 rounded-full bg-ink/[0.06] px-6 py-3.5 text-base font-medium text-ink ring-1 ring-inset ring-ink/20 transition-colors hover:bg-ink/[0.12]"
            >
              <DownloadIcon className="text-lg" /> {t(ui.cta.downloadCv)}
            </a>
          </div>
        </Reveal>

        {/* Info cards */}
        <div className="mt-12 grid gap-4 sm:grid-cols-3">
          <div className="surface rounded-2xl p-6">
            <Label>Email</Label>
            <a
              href={`mailto:${personal.email}`}
              className="mt-3 block text-sm font-medium text-ink/85 transition-colors hover:text-ink"
            >
              {personal.email}
            </a>
          </div>
          <div className="surface rounded-2xl p-6">
            <Label>Profiles</Label>
            <div className="mt-3 flex items-center gap-3">
              <a
                href={personal.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-ink/[0.08] text-lg text-ink ring-1 ring-inset ring-ink/15 transition-colors hover:bg-ink/[0.18]"
              >
                <LinkedinIcon />
              </a>
              <a
                href={personal.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-ink/[0.08] text-lg text-ink ring-1 ring-inset ring-ink/15 transition-colors hover:bg-ink/[0.18]"
              >
                <GithubIcon />
              </a>
            </div>
          </div>
          <div className="surface rounded-2xl p-6">
            <Label>Based in</Label>
            <p className="mt-3 flex items-center gap-1.5 text-sm font-medium text-ink/85">
              <MapPinIcon className="text-base text-ink/60" /> {personal.location}
            </p>
            <div className="mt-3">
              <Pill dot>{t(ui.hero.availability)}</Pill>
            </div>
          </div>
        </div>
      </Section>

      <footer className="border-t border-ink/10 px-6 py-8 md:px-10">
        <div className="mx-auto max-w-6xl">
          <span className="text-[13px] font-medium text-ink/50">© 2026 · {personal.fullName}</span>
        </div>
      </footer>
    </div>
  )
}
