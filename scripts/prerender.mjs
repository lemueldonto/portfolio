// ---------------------------------------------------------------------------
// Build-time prerender.
//
// `vite build` alone ships `<div id="root"></div>` — every word of the site is
// painted by JavaScript, so Google, recruiter ATS parsers and LLM assistants
// see an empty page. This script builds a server bundle, renders the app to
// static HTML, and bakes it into dist/index.html. The client then hydrates it.
//
// Run automatically as part of `npm run build`.
// ---------------------------------------------------------------------------

import { build } from 'vite'
import { readFile, writeFile, rm } from 'node:fs/promises'
import { fileURLToPath, pathToFileURL } from 'node:url'
import path from 'node:path'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const ssrOutDir = path.join(root, '.ssr-build')
const indexHtml = path.join(root, 'dist', 'index.html')

const ROOT_DIV = '<div id="root"></div>'

// Build the app for Node so we can execute it outside a browser.
await build({
  root,
  logLevel: 'warn',
  build: {
    ssr: path.join(root, 'src', 'entry-server.tsx'),
    outDir: ssrOutDir,
    emptyOutDir: true,
    target: 'es2020',
  },
})

const { render } = await import(pathToFileURL(path.join(ssrOutDir, 'entry-server.js')).href)

const html = await readFile(indexHtml, 'utf8')
if (!html.includes(ROOT_DIV)) {
  throw new Error(`prerender: could not find ${ROOT_DIV} in dist/index.html`)
}

const markup = render('en')
await writeFile(indexHtml, html.replace(ROOT_DIV, `<div id="root">${markup}</div>`), 'utf8')

await rm(ssrOutDir, { recursive: true, force: true })

// Report the word count — the metric that actually matters here.
const words = markup
  .replace(/<[^>]+>/g, ' ')
  .replace(/&[a-z]+;|&#\d+;/gi, ' ')
  .split(/\s+/)
  .filter(Boolean).length

console.log(`prerendered dist/index.html — ${words} words of crawlable text`)
