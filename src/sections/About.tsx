import { useLang } from '../i18n/LanguageContext'
import { ui, qualities, type L } from '../content/site'
import { Section, Label } from './Section'
import { Reveal } from '../components/motion'

const title: L = { en: 'About', fr: 'À propos' }
const kicker: L = { en: 'Who I am', fr: 'Qui je suis' }
const lookingFor: L = { en: 'How I work', fr: 'Ma façon de faire' }
const lookingForBody: L = {
  en: 'I own a product end to end — from architecture to production — and I stay accountable until it runs, at scale, for real users.',
  fr: 'Je porte un produit de bout en bout — de l’architecture à la mise en production — et je reste responsable jusqu’à ce qu’il tourne, à l’échelle, pour de vrais utilisateurs.',
}
const strengths: L = { en: 'What I bring', fr: 'Ce que j’apporte' }

// Deep royal-blue accent block — brings the hero's tone into the light body.
const BLUE_BLOCK =
  'radial-gradient(120% 120% at 15% 20%, #0a2f7f 0%, #06225f 55%, #04193f 100%)'

export function About() {
  const { t } = useLang()
  const body = t(ui.about.body)

  return (
    <Section id="about" no="01" kicker={kicker} title={title}>
      <div className="grid gap-12 md:grid-cols-[1.35fr_0.65fr] md:gap-14">
        {/* Left — the narrative */}
        <div>
          <Reveal>
            <p className="text-2xl font-medium leading-snug text-ink md:text-[2rem]">
              {body[0]}
            </p>
          </Reveal>

          <Reveal delay={0.05}>
            <div className="mt-6 space-y-4">
              {body.slice(1).map((p, i) => (
                <p key={i} className="text-[15px] leading-relaxed text-ink/65 md:text-base">
                  {p}
                </p>
              ))}
            </div>
          </Reveal>

          {/* Stats — white frosted cards */}
          <Reveal delay={0.1}>
            <dl className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {ui.stats.map((s) => (
                <div key={s.value} className="surface rounded-2xl p-4">
                  <dt className="font-sans text-4xl font-bold tracking-tight text-ink md:text-5xl">
                    {s.value}
                  </dt>
                  <dd className="mt-2 text-[11px] font-medium leading-tight text-ink/50">
                    {t(s.label)}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>

          {/* Looking for — deep-blue accent block (dark zone island) */}
          <Reveal delay={0.1}>
            <div
              className="zone-dark mt-8 overflow-hidden rounded-3xl p-7 shadow-[0_24px_60px_-30px_rgba(6,24,70,0.6)] md:p-9"
              style={{ background: BLUE_BLOCK }}
            >
              <Label>{t(lookingFor)}</Label>
              <p className="mt-4 text-xl font-semibold leading-snug text-ink md:text-2xl">
                {t(lookingForBody)}
              </p>
            </div>
          </Reveal>

          {/* Strengths — quality cards */}
          <div className="mt-12">
            <Label>{t(strengths)}</Label>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {qualities.map((q, i) => (
                <Reveal key={q.id} delay={(i % 2) * 0.05}>
                  <div className="surface group h-full rounded-2xl p-5 transition-transform hover:-translate-y-0.5">
                    <span className="font-sans text-2xl font-bold text-accent/70">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <h4 className="mt-2 font-sans text-lg font-bold text-ink">{t(q.title)}</h4>
                    <p className="mt-2 text-sm leading-relaxed text-ink/65">{t(q.body)}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>

        {/* Right — portrait + facts, sticky */}
        <Reveal delay={0.1}>
          <div className="md:sticky md:top-8">
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl shadow-[0_24px_60px_-28px_rgba(6,24,70,0.5)] ring-1 ring-inset ring-ink/10">
              <img
                src="/img/about-diploma.webp"
                alt="Diplôme d’ingénieur — Komlan Lemuel Donto, École Polytechnique Universitaire, Université Côte d’Azur"
                className="h-full w-full object-cover object-center"
              />
            </div>

            <div className="mt-4 space-y-4">
              <div className="surface rounded-2xl p-6">
                <Label>{t(ui.education.kicker)}</Label>
                {/* Diploma leads; the school is highlighted (accent) as support. */}
                <p className="mt-3 font-sans text-lg font-bold leading-tight text-ink">
                  {t(ui.education.degree)}
                </p>
                {(() => {
                  const [school, ...rest] = t(ui.education.school).split(' · ')
                  return (
                    <p className="mt-2.5 text-sm leading-snug">
                      <span className="font-semibold text-accent">{school}</span>
                      {rest.length > 0 && (
                        <span className="text-ink/55"> · {rest.join(' · ')}</span>
                      )}
                    </p>
                  )
                })()}
                <p className="mt-1.5 text-[12px] text-ink/45">{t(ui.education.period)}</p>
              </div>

              <div className="surface rounded-2xl p-6">
                <Label>{t(ui.languages.kicker)}</Label>
                <ul className="mt-4 space-y-3">
                  {ui.languages.items.map((l) => (
                    <li key={t(l.name)} className="flex items-center justify-between gap-3 text-sm">
                      <span className="font-medium text-ink/85">{t(l.name)}</span>
                      <span className="rounded-full bg-ink/[0.07] px-3 py-1 text-[11px] font-medium text-ink/70 ring-1 ring-inset ring-ink/10">
                        {t(l.level)}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  )
}
