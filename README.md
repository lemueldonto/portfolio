# Lemuel Donto — Portfolio · "THE REEL"

A cinematic **35mm film-reel** portfolio for Komlan Lemuel Donto — Lead Software Engineer.
The site is a **film you page through, frame by frame** — each shot is a chapter of the story:

`01 Who I am` → `02 Now — GLS (real-time, ~350K parcels/day)` → `03 Track record — Air France`
→ `04–05 Ventures — Asiganme & Fintech` → `06 The stack` → `07 Contact`.

Full-bleed AI-generated cinematic stills, warm 35 mm film grade, grain, editorial serif
(Fraunces) + monospace HUD, and a **sprocket-holed filmstrip** navigator. Bilingual EN / FR.

**Navigate:** filmstrip thumbnails · `‹ ›` arrows · **arrow keys** · **scroll / swipe** · drag.

**Stack:** Vite · React · TypeScript · Framer Motion · Tailwind CSS. No WebGL — light & fast
(~93 kB gzip JS).

---

## 🚀 Quick start

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # type-check + production build to dist/
npm run preview  # preview the production build
```

---

## ✅ Before going live — fill these in

Placeholders are flagged in [`src/content/site.ts`](src/content/site.ts):

| What | Where | Notes |
|------|-------|-------|
| **Photo** | `public/portrait.jpg` | Optional; used if you add it to a frame. |
| **CV (PDF)** | `public/cv.pdf` | Powers the "Download CV" buttons. |
| **LinkedIn** | `personal.linkedin` | Currently a guess — confirm. |
| **GitHub** | `personal.github` | Currently a guess — confirm. |
| **Project previews** | `ProjectFrame` slots in the venture frames | Reserved "footage" placeholders — drop real media (see below). |
| **OG image** | `public/og-image.png` | Social-share preview (regenerate any time). |

---

## 🧩 Structure

```
src/
  content/
    site.ts      # ALL text + data, bilingual (EN/FR)
    reel.ts      # the ordered chapters (kicker, title, logline, image, refId)
  reel/
    ReelFrame.tsx   # a full-bleed cinematic chapter + editorial detail panel
    Filmstrip.tsx   # sprocket-holed thumbnail navigator
    Perforations.tsx# 35mm film edges
    ReelChrome.tsx  # top/bottom HUD (name, frame counter, telemetry, timecode)
  hud/            # Grain, Telemetry
  stations/ProjectFrame.tsx   # reserved project-media "footage" frames
  components/     # LanguageToggle, Portrait, icons
  App.tsx         # the reel controller (nav + transitions)
```

### Cinematic imagery
Per-chapter stills are **AI-generated** (Higgsfield · `soul_location`, warm 35 mm grade) and live
in `public/img/<chapter-id>.webp`. Swap any file to change a shot; regenerate any time.

### Dropping real project media
Venture frames reserve `ProjectFrame` slots
([`src/stations/ProjectFrame.tsx`](src/stations/ProjectFrame.tsx)). Replace the placeholder body
with an `<img>` or a looping `<video autoplay muted loop>` — the film frame + labels stay.

### Editing the story
Reorder / retitle chapters in `src/content/reel.ts`; deep content (bullets, skills, stats) lives in
`src/content/site.ts`. Palette, grain and fonts: `tailwind.config.js`, `src/index.css`, `index.html`.

Respects `prefers-reduced-motion`; responsive (frames scroll vertically on mobile, swipe to move).

---

## ☁️ Deploy (Vercel)

1. Push to GitHub.
2. [vercel.com](https://vercel.com) → **Add New Project** → import (auto-detects Vite).
3. Add domain **lemueldonto.com** in Project → Settings → Domains; point DNS as instructed.

Fully static — no server or env vars.
