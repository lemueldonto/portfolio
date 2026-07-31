import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react'
import type { Lang, L } from '../content/site'

const STORAGE_KEY = 'portfolio.lang'

interface LanguageContextValue {
  lang: Lang
  setLang: (lang: Lang) => void
  toggle: () => void
  /** Pick the current-language value out of a bilingual `L<T>`. */
  t: <T>(value: L<T>) => T
}

const LanguageContext = createContext<LanguageContextValue | null>(null)

/** The reader's language, or null when there's no browser to ask. */
function preferredLang(): Lang | null {
  if (typeof window === 'undefined') return null
  try {
    // A manual choice always wins.
    const stored = window.localStorage.getItem(STORAGE_KEY)
    if (stored === 'en' || stored === 'fr') return stored
  } catch {
    /* private mode — fall through to the device language */
  }
  // Otherwise follow the device/browser language: French → fr, else English.
  const nav = window.navigator
  const preferred =
    nav.languages && nav.languages.length ? nav.languages : [nav.language]
  const prefersFrench = preferred.some(
    (l) => typeof l === 'string' && l.toLowerCase().startsWith('fr'),
  )
  return prefersFrench ? 'fr' : 'en'
}

export function LanguageProvider({
  children,
  initialLang = 'en', // what the page was prerendered in
}: {
  children: ReactNode
  initialLang?: Lang
}) {
  // The first render must reproduce the prerendered markup exactly, so it can
  // only use `initialLang` — reading localStorage or navigator.languages here
  // would make a French reader's first render disagree with the English HTML
  // React is hydrating against, and every string on the page would mismatch.
  // The real preference is applied just below, once hydration is done.
  const [lang, setLangState] = useState<Lang>(initialLang)

  useEffect(() => {
    const preferred = preferredLang()
    if (preferred && preferred !== initialLang) setLangState(preferred)
  }, [initialLang])

  const setLang = useCallback((next: Lang) => {
    setLangState(next)
    try {
      window.localStorage.setItem(STORAGE_KEY, next)
    } catch {
      /* ignore storage errors (private mode, etc.) */
    }
  }, [])

  const toggle = useCallback(() => {
    setLangState((prev) => {
      const next = prev === 'en' ? 'fr' : 'en'
      try {
        window.localStorage.setItem(STORAGE_KEY, next)
      } catch {
        /* ignore */
      }
      return next
    })
  }, [])

  useEffect(() => {
    document.documentElement.lang = lang
  }, [lang])

  const value = useMemo<LanguageContextValue>(
    () => ({
      lang,
      setLang,
      toggle,
      t: (v) => v[lang],
    }),
    [lang, setLang, toggle],
  )

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

// eslint-disable-next-line react-refresh/only-export-components
export function useLang(): LanguageContextValue {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLang must be used within a LanguageProvider')
  return ctx
}
