# Image Open Graph — `public/og-image.png`

Aperçu affiché quand on partage lemueldonto.com (LinkedIn, Slack, X…). Source : `og-image.html`
(1200 × 630 px, rendu ×2 → PNG 2400 × 1260, ratio 1,91:1 attendu par LinkedIn).

## Régénérer

Connexion internet nécessaire (polices Google Fonts).

```powershell
$chrome = "$env:LOCALAPPDATA\Google\Chrome\Application\chrome.exe"
$repo = "C:\Users\250950286\Documents\Lemuel\Documents\git\portfolio"   # à adapter
& $chrome --headless=new --disable-gpu --no-first-run `
  --user-data-dir="$env:TEMP\og-shot-profile" --hide-scrollbars `
  --window-size=1200,630 --force-device-scale-factor=2 --virtual-time-budget=10000 `
  --screenshot="$repo\public\og-image.png" `
  "file:///$($repo -replace '\','/')/design/og/og-image.html"
```

Après déploiement, LinkedIn garde l'ancien aperçu en cache : forcer le rafraîchissement avec
le Post Inspector (https://www.linkedin.com/post-inspector/) sur `https://lemueldonto.com`.
