import type { ComponentType, SVGProps } from 'react'
import { useLang } from '../i18n/LanguageContext'
import { skillGroups, type L } from '../content/site'
import { Section } from './Section'
import { Reveal } from '../components/motion'
import {
  CodeIcon,
  LayersIcon,
  CloudIcon,
  TerminalIcon,
  LayoutIcon,
  ActivityIcon,
  DatabaseIcon,
} from '../components/icons'
import { TechLogo, hasTechLogo } from '../components/TechLogo'

const title: L = { en: 'Skills', fr: 'Compétences' }
const kicker: L = { en: 'The stack', fr: 'La stack' }
const lead: L = {
  en: 'The stack I design, build and operate with — day to day, in production.',
  fr: 'La stack avec laquelle je conçois, construis et opère — au quotidien, en production.',
}

const ICONS: Record<string, ComponentType<SVGProps<SVGSVGElement>>> = {
  languages: CodeIcon,
  backend: LayersIcon,
  cloud: CloudIcon,
  devops: TerminalIcon,
  frontend: LayoutIcon,
  observability: ActivityIcon,
  databases: DatabaseIcon,
}

export function Skills() {
  const { t } = useLang()

  return (
    <Section id="skills" no="04" kicker={kicker} title={title} lead={lead}>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((g, i) => {
          const Icon = ICONS[g.id] ?? CodeIcon
          return (
            <Reveal key={g.id} delay={(i % 3) * 0.05}>
              <div className="surface h-full rounded-2xl p-6">
                <div className="flex items-center gap-2.5">
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-accent/10 text-accent">
                    <Icon className="text-[17px]" />
                  </span>
                  <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-ink/55">
                    {t(g.label)}
                  </span>
                </div>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {g.items.map((item) => {
                    const withLogo = hasTechLogo(item)
                    return (
                      <li
                        key={item}
                        className={`inline-flex items-center gap-1.5 rounded-full bg-ink/[0.05] py-1.5 text-[12.5px] font-medium text-ink/75 ring-1 ring-inset ring-ink/10 transition-colors hover:bg-ink/[0.12] hover:text-ink ${
                          withLogo ? 'pl-2 pr-3' : 'px-3'
                        }`}
                      >
                        {withLogo && (
                          <TechLogo name={item} className="h-3.5 w-3.5 shrink-0" />
                        )}
                        {item}
                      </li>
                    )
                  })}
                </ul>
              </div>
            </Reveal>
          )
        })}
      </div>
    </Section>
  )
}
