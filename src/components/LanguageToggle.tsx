import { useLang } from '../i18n/LanguageContext'
import type { Lang } from '../content/site'

export function LanguageToggle({ className = '' }: { className?: string }) {
  const { lang, setLang } = useLang()
  const options: Lang[] = ['en', 'fr']

  return (
    <div
      className={`inline-flex items-center gap-0.5 rounded-full bg-white/10 p-1 backdrop-blur-sm ${className}`}
      role="group"
      aria-label="Language"
    >
      {options.map((opt) => (
        <button
          key={opt}
          type="button"
          onClick={() => setLang(opt)}
          aria-pressed={lang === opt}
          className={`rounded-full px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide transition-colors ${
            lang === opt
              ? 'bg-white text-[#04205a]'
              : 'text-white/60 hover:text-white'
          }`}
        >
          {opt}
        </button>
      ))}
    </div>
  )
}
