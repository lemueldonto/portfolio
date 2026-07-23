# HANDOFF — Portfolio Lemuel Donto

> Résumé pour reprendre le travail dans une nouvelle conversation.

## 1. Le projet
- **Qui** : Komlan **Lemuel Donto**, Lead Software Engineer (Dev Lead), systèmes distribués. Basé à Toulouse, cherche du **remote international**.
- **Où** : `c:\git\portfolio` (repo git).
- **Lancer** : `npm install` puis `npm run dev` → http://localhost:5173. Build : `npm run build` (~97 Ko gzip, clean).
- **Stack** : Vite + React 18 + TypeScript + Tailwind CSS + Framer Motion.

## 2. Direction artistique ACTUELLE (validée)
Style **« Frame\* »** (réf. d'un portfolio de photographe que le user adore), **désormais unifié sur tout le site** :
- **Tout le site = UN seul panneau bleu royal arrondi, dans un cadre crème** (`#e8e1d2`). Le cadre entoure l'ensemble (pas seulement le hero) — c'était LE point clé pour la cohérence.
- **Bleu royal profond** + **blanc** (`text-white/xx`, plus les tokens legacy `cream`/`brass`), typo **bold sans-serif** (Space Grotesk), **pills givrés blancs** (`bg-white/10 rounded-full backdrop-blur`) partout, **cartes arrondies** `rounded-2xl/3xl bg-white/[0.03] ring-white/10`.
- **Hero** : portrait du user en grand à droite + effet **fragments tech** (haut de la tête qui explose en cubes bleus) + nom géant **DONTO\*** + nav (Donto\*, liens, pill « Get in touch »).
- ⚠️ **Harmonisation (juil. 2026)** : tout le reste du site (About/Experience/Projects/Skills/Contact) a été **réorganisé** dans le langage du hero — fini l'ancien style « film/HUD » (kickers `font-mono`, accents `brass`, cadres image à coins nets + duotone lourd, points rouille clignotants, chips `rounded-sm` terminal). Le **système de design partagé** vit dans `src/sections/Section.tsx` (`Pill`, `Label`, `Chip`, `Metric`, `Solid`, `Section`) + `src/sections/Hero.tsx` (la référence).
- **⚠️ IMPORTANT — le hero DONNE LE TON mais n'est pas cloné partout.** Rythme voulu **sombre → clair → sombre** pour que le hero garde son impact : **Hero** et **Contact** = ancres bleu profond (blanc) ; **About/Experience/Projects/Skills** = toile **claire** (blanc cassé cool) avec le bleu royal en **encre** + un **accent électrique** (`accent`), cartes blanches (`.surface`). Un site tout-bleu écrasait le hero — c'était l'erreur à ne PAS refaire.
- **Comment c'est câblé** : palette **zonée** par variables CSS dans `src/index.css` — `.zone-light` / `.zone-dark` définissent `--ink` / `--canvas` / `--accent` + la carte `.surface`. Les composants utilisent les tokens Tailwind **`ink` / `canvas` / `accent`** (`text-ink`, `bg-ink/[…]`, `text-canvas`, `bg-accent`) → ils s'inversent tout seuls selon la zone. `App.tsx` : `CANVAS` (fond clair) + wrapper `zone-light` autour du corps ; le bloc « What I'm looking for » (About) et le portrait sont des îlots bleus ; `Contact.tsx` est un `zone-dark` avec `DARK_BAND`. ⚠️ **Toute modif de `tailwind.config.js` exige un redémarrage du `npm run dev`** sinon les utilitaires `ink/canvas/accent` ne sont pas régénérés (piège vécu : texte qui retombe en crème near-white).
- **ThemeToggle retiré** (le hero code le blanc-sur-bleu en dur ; un mode clair global demanderait de rendre le hero theme-aware d'abord). Le composant `ThemeToggle.tsx` existe encore mais n'est plus monté.
- Bilingue **EN/FR** (toggle givré segmenté dans le nav), animations au scroll (Reveal, parallaxe).

## 3. Structure des fichiers (ce qui est UTILISÉ)
- `src/App.tsx` → cadre crème + panneau bleu arrondi contenant : `<Nav>` (overlay) + Hero + About + Experience + Projects + Skills + Contact.
- `src/sections/` : **Nav, Hero, Section** (shell partagé : `Section`, `Chip`, `Metric`), **About, Experience, Projects, Skills, Contact**.
- `src/content/site.ts` → **TOUT le texte + données bilingues** (`personal`, `ui`, `qualities`, `skillGroups`, `experience`, `projects`). C'est le fichier à éditer pour le contenu.
- `src/components/motion.tsx` → `Reveal`, `Parallax`, (`MaskReveal`/`ScrollProgress` non utilisés).
- `src/components/` : `LanguageToggle`, `ThemeToggle`, `icons`, `Portrait` (Portrait non utilisé).
- `src/i18n/LanguageContext.tsx` (EN par défaut). `src/index.css` = **tokens CSS de palette** (dark = bleu ; **light = encore sépia legacy → à refaire en bleu/blanc si on veut un light mode cohérent**).

### Fichiers MORTS (anciens designs, à supprimer au nettoyage)
`src/scene/*`, `src/three/HeroCanvas.tsx`, `src/hud/*`, `src/reel/*`, `src/content/reel.ts`, `src/content/stations.ts`. Pas importés par App, mais typecheckés. `three`/`@react-three/*` en dépendances mais **plus utilisés**.

## 4. Le PORTRAIT (le gros sujet — beaucoup d'itérations)
- **Image du hero** : `public/img/hero.webp` (actuellement = `jaw-1.webp`).
- **⚠️ Piège cache** : le navigateur cache les images à nom identique. Pour changer le hero, **renommer le fichier** (pas juste écraser `character.webp`).
- **Généré via MCP Higgsfield** (`generate_image`, modèle **`nano_banana_pro`**, `medias` role `"image"`) à partir des VRAIES photos du user. Leçon clé : une **régénération** = sosie approximatif ; pour que ça ressemble VRAIMENT, il faut ses **vraies photos en référence**, et pour retoucher un détail, **éditer le job précédent** (passer le `job_id` en media).
- **media_ids de ses vraies photos** (déjà importées dans Higgsfield) :
  - `40c7e20f-53d6-4beb-bd98-609ffa12afd0` = **selfie visage net de face** (bonnet), pleine résolution → **MEILLEURE référence visage**.
  - `183cdadd-...` selfie miroir, `46341e3a-...` + `fd71f3ac-...` photos au fort (chemise bleu clair), `4743bee7`, `cc4622ab`.
- Le hero gagnant a été généré avec `40c7e20f` + `46341e3a` (regard vers le haut, sans barbe, fragments), puis **mâchoire affinée** en éditant le job `52d9a5a0` → `1c41bbaa` = `jaw-1` = `hero.webp`.
- Le user est **noir, twists/vanilles, chaîne + collier de perles, chemise bleu clair sur marcel blanc**. Il veut : ressemblance **exacte**, **sans barbe**, **regard artistique vers le haut**, mâchoire **sèche/carrée**.
- Images des sections dans `public/img/` (générées IA, cinématiques, affichées en **duotone bleu**) : `asiganme-1/2`, `asiganme`, `fintech-1/2`, `fintech`, `gls`, `airfrance`, `systems`, `about`, `contact`, `identity`. Le portrait apparaît aussi dans About (`hero.webp`).

## 5. Fait ✅
- Site cohérent Frame\* bleu encadré, hero visage réel + fragments, **toutes les sections refaites en bold** (titres énormes, pills blancs, cartes propres), bilingue, light/dark, animations, build clean.

## 6. À FAIRE ⏳
1. **Vrais liens** : `personal.linkedin` et `personal.github` dans `site.ts` sont des **suppositions** (`linkedin.com/in/lemueldonto`, `github.com/lemueldonto`) → mettre les vrais.
2. **CV** : déposer `public/cv.pdf` (les boutons « Download CV » pointent dessus).
3. **Déploiement** : Vercel + domaine **lemueldonto.com** (~12 €/an). Nécessite ses comptes (GitHub + Vercel).
4. **Optionnel** : supprimer les fichiers morts (`src/scene/*`, `three/*`, `hud/*`, `reel/*`, `Portrait.tsx`, `ThemeToggle.tsx` non monté) + les deps `three`/`@react-three/*`. Si un mode clair est vraiment voulu un jour, il faut aussi rendre le **Hero** sensible au thème (aujourd'hui blanc-sur-bleu en dur) avant de remonter le ThemeToggle.

## 7. Préférences du user (important)
- Veut **bold / artistique / "wtf" / futuriste**, PAS plat ni classique.
- **Impatient** : préfère qu'on **prenne l'initiative** plutôt que de poser des questions.
- Exige que le personnage lui **ressemble exactement** (→ toujours partir de ses vraies photos).
- Tout le site doit être **cohérent** (hero + sections = même langage).
- Aime le **cadre blanc/crème** autour du site.

## 8. Gotchas techniques
- **HMR parfois bloqué** après gros changements ou modif de `tailwind.config.js` → tuer le port 5173 et relancer `npm run dev`.
- **Vérif visuelle** : Playwright (installé dans le scratchpad) avec flags SwiftShader pour screenshots headless (`--use-gl=angle --use-angle=swiftshader --enable-unsafe-swiftshader`).
- **postimages** : utiliser le **"Direct link"** pleine résolution (les liens `[img]` BBCode sont souvent des **miniatures** basse def → mauvaise ressemblance).
