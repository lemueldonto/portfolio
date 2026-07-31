// ---------------------------------------------------------------------------
// Server entry — used only at build time by scripts/prerender.mjs.
// Renders the whole app to static HTML so the site reads without JavaScript:
// crawlers, ATS parsers and LLM assistants get the full page, not an empty div.
// ---------------------------------------------------------------------------

import { StrictMode } from 'react'
import { renderToString } from 'react-dom/server'
import App from './App'
import { LanguageProvider } from './i18n/LanguageContext'
import type { Lang } from './content/site'

export function render(lang: Lang = 'en'): string {
  return renderToString(
    <StrictMode>
      <LanguageProvider initialLang={lang}>
        <App />
      </LanguageProvider>
    </StrictMode>,
  )
}
