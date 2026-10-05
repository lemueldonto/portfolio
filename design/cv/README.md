# CV — Komlan Lemuel Donto (EN + FR)

Les sources `.docx` d'origine sont perdues : **ces fichiers HTML sont désormais la source du CV**.
On modifie le HTML, on régénère les PDF, on les dépose dans `public/` (les boutons
« Download CV » du site pointent sur `/cv-en.pdf` et `/cv-fr.pdf`).

| Fichier | Rôle |
|---|---|
| `cv-en.html` | CV anglais → `public/cv-en.pdf` |
| `cv-fr.html` | CV français → `public/cv-fr.pdf` |
| `cv.css` | Mise en page commune (A4, typo, couleurs du site) |

Le contenu reprend `src/content/site.ts` (source du site) en version condensée. Si tu changes
une expérience sur le site, reporte-la ici à la main : rien n'est synchronisé automatiquement.

## Régénérer les PDF

Connexion internet nécessaire : les polices (Space Grotesk, JetBrains Mono) viennent de Google
Fonts. Sans réseau, Chrome remplace par une police système et le PDF part à la poubelle.

```powershell
$chrome = "$env:LOCALAPPDATA\Google\Chrome\Application\chrome.exe"
# Edge marche aussi : "${env:ProgramFiles(x86)}\Microsoft\Edge\Application\msedge.exe"
$repo = "C:\Users\250950286\Documents\Lemuel\Documents\git\portfolio"   # à adapter
foreach ($l in "en", "fr") {
  & $chrome --headless=new --disable-gpu --no-first-run `
    --user-data-dir="$env:TEMP\cv-print-profile" `
    --no-pdf-header-footer --virtual-time-budget=15000 `
    --print-to-pdf="$repo\public\cv-$l.pdf" `
    "file:///$($repo -replace '\\','/')/design/cv/cv-$l.html" | Out-Null
}
```

`| Out-Null` fait attendre PowerShell la fin de chaque Chrome : sans lui, les deux impressions
partent en même temps sur le même profil et `cv-fr.pdf` n'est pas régénéré.

`--virtual-time-budget` laisse le temps aux polices de se charger avant l'impression ;
`--user-data-dir` évite d'entrer en conflit avec un Chrome déjà ouvert.

Aperçu écran : ouvre le HTML dans le navigateur, la page est dessinée comme une feuille A4
(794 × 1123 px). Pour une capture : mêmes options + `--window-size=794,1123 --screenshot=apercu.png`.

## À vérifier après chaque régénération

1. **Une page par langue.** Le contenu tient sur une page avec ~1 cm de marge en bas. Si
   tu ajoutes une ligne, le dernier bloc (Langues) bascule seul en page 2 : raccourcis une
   puce plutôt que de réduire la police (8,8 pt, c'est déjà le plancher confortable).
2. **Les polices sont embarquées** : dans le PDF, Fichier → Propriétés → Polices doit lister
   Space Grotesk et JetBrains Mono.
3. **Le texte se sélectionne et se copie dans l'ordre** (nom → contact → profil → expériences…).
   C'est ce que lisent les ATS.

## Règles de mise en page (ne pas casser)

Elles sont aussi commentées en tête de `cv.css` :

- **Une seule colonne, l'ordre du HTML = l'ordre de lecture.** Pas de sidebar.
- **Aucun `position: absolute/relative`.** Chrome peint les blocs positionnés en dernier : leur
  texte part à la fin du PDF et l'ATS lit les puces séparées de leur poste.
- **Pas de `letter-spacing` positif.** Les extracteurs de texte prennent un interlettrage large
  pour des espaces (« E X P É R I E N C E »).
- **Pas d'italique** : Space Grotesk n'en a pas, le navigateur en fabriquerait un faux.
- **Une balise `<link>` Google Fonts par graisse.** Une requête multi-graisses renvoie la police
  variable, que Chrome n'embarque qu'en glyphes Type 3 (mauvais pour les ATS et certaines
  visionneuses) ; une graisse seule renvoie un TrueType statique, embarqué proprement.
- En français, espace insécable (`&nbsp;`) avant `:` et `;` et dans les nombres (`350&nbsp;000`).

## Choix de contenu

- **Téléphone** : repris de l'ancien CV (+33 6 28 06 98 73), comme l'adresse e-mail.
- **Asiganme et Novi** : section « Personal Projects / Projets personnels », après l'expérience,
  sans titre de fondateur.
- **Licence (Institut Africain d'Informatique, 2017–2019)** : absente de l'ancien CV, ajoutée
  sans ville ni intitulé exact. À compléter si besoin.
