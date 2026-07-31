import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import App from './App'
import { LanguageProvider } from './i18n/LanguageContext'
import './index.css'

const container = document.getElementById('root')!

const tree = (
  <StrictMode>
    <LanguageProvider>
      <App />
    </LanguageProvider>
  </StrictMode>
)

// The production build ships prerendered HTML (see scripts/prerender.mjs), so
// attach to it instead of throwing it away. `npm run dev` serves an empty root.
if (container.firstChild) {
  hydrateRoot(container, tree)
} else {
  createRoot(container).render(tree)
}
