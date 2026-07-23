import { useLang } from '../i18n/LanguageContext'
import { experience, type L } from '../content/site'
import { Section, Chip, Metric, Label, Pill } from './Section'
import { Reveal } from '../components/motion'
import { MapPinIcon } from '../components/icons'

const title: L = { en: 'Experience', fr: 'Expérience' }
const kicker: L = { en: 'Trajectory', fr: 'Parcours' }
const lead: L = {
  en: 'Four years building and running distributed systems in production — for a European parcel network and for international air freight.',
  fr: 'Quatre ans à construire et opérer des systèmes distribués en production — pour un réseau de colis européen et pour le fret aérien international.',
}
const whatIDid: L = { en: 'What I did', fr: 'Ce que j’ai fait' }
const now: L = { en: 'Current', fr: 'En poste' }

const IMAGES: Record<string, string> = {
  gls: '/img/gls-bento2.webp',
  airfrance: '/img/af-bento2.webp',
}

export function Experience() {
  const { t } = useLang()

  return (
    <Section id="experience" no="02" kicker={kicker} title={title} lead={lead}>
      <div className="space-y-6 md:space-y-8">
        {experience.map((job) => (
          <Reveal key={job.id}>
            <article className="surface grid overflow-hidden rounded-3xl md:grid-cols-[0.82fr_1.18fr]">
              {/* Visual */}
              <div className="relative min-h-[220px] overflow-hidden md:min-h-full">
                <img
                  src={IMAGES[job.id]}
                  alt=""
                  aria-hidden="true"
                  className="absolute inset-0 h-full w-full object-cover"
                />
                {/* Short top scrim only — keeps the real photos bright and true-color */}
                <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-black/45 to-transparent" />
                <div className="absolute left-5 top-5 flex flex-wrap items-center gap-2">
                  <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-1.5 text-xs font-medium text-white ring-1 ring-inset ring-white/25 backdrop-blur-md">
                    <span className="h-1.5 w-1.5 rounded-full bg-white" /> {job.company}
                  </span>
                  {job.current && (
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-white px-3 py-1 text-[11px] font-semibold text-[#04205a]">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#04205a]" />
                      {t(now)}
                    </span>
                  )}
                </div>
              </div>

              {/* Substance */}
              <div className="p-6 md:p-8 lg:p-9">
                <div className="flex flex-wrap items-center gap-2">
                  <Pill>{t(job.period)}</Pill>
                  <Pill>
                    <MapPinIcon className="text-sm text-ink/60" /> {job.location}
                  </Pill>
                </div>

                <h3 className="mt-5 font-sans text-3xl font-bold leading-[0.95] tracking-tight text-ink md:text-4xl">
                  {t(job.role)}
                </h3>
                <p className="mt-2 text-sm font-medium text-ink/55">
                  {job.company} · {t(job.meta)}
                </p>

                <p className="mt-5 text-[15px] leading-relaxed text-ink/70">{t(job.context)}</p>

                <div className="mt-6 flex flex-wrap gap-2.5">
                  {t(job.impact).map((m, i) => (
                    <Metric key={i}>{m}</Metric>
                  ))}
                </div>

                <div className="mt-8">
                  <Label>{t(whatIDid)}</Label>
                  <ul className="mt-4 space-y-3">
                    {t(job.bullets).map((b, i) => (
                      <li key={i} className="flex gap-3 text-[14.5px] leading-relaxed text-ink/75">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-7 flex flex-wrap gap-2">
                  {job.tags.map((tag) => (
                    <Chip key={tag}>{tag}</Chip>
                  ))}
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
