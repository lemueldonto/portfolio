# Carte de visite — Lemuel Donto · piste B1 « Arête »

Dérivée du design system du portfolio : recto clair encre navy, arête bleu électrique
portant l'URL, verso bleu roi avec la phrase du hero et le QR vers le portfolio.

## Contenu du dossier

| Fichier | Rôle |
|---|---|
| `carte-visite-b1.pdf` | **Le fichier à envoyer à l'imprimeur.** 2 pages : p.1 recto, p.2 verso. |
| `carte-b1-print.html` | La source. C'est elle qu'on modifie, le PDF se régénère (commande plus bas). |
| `apercu-b1.png` | Aperçu écran des deux faces (fond perdu compris). |
| `pistes-b1-b2-b3.html` | Les trois exécutions comparées — archive de la décision. |

## Spécifications du fichier

- **Format fini** : 85 × 55 mm (standard européen), paysage.
- **Page PDF** : 91 × 61 mm — soit **3 mm de fond perdu** sur chaque bord.
- **Pas de traits de coupe** : le fond perdu seul, c'est ce qu'attendent la plupart des
  imprimeurs en ligne. Si le tien les exige, dis-le-moi, je régénère avec.
- **Zone de sécurité** : aucun texte à moins de 4 mm du trait de coupe. Respectée.
- **Vectoriel**, polices embarquées (Space Grotesk, Fraunces, JetBrains Mono).
  Rien à vectoriser, rien à joindre.
- **Espace colorimétrique : RVB.** Voir ci-dessous.

## Couleurs

| Rôle | HEX | Où |
|---|---|---|
| Papier | `#f7f9fd` | fond du recto, panneau du QR |
| Encre navy | `#0f1e52` | nom, monogramme, modules du QR |
| Bleu électrique (accent) | `#2a5cf0` | arête, filet, rôle, pastille du monogramme |
| Bleu roi | `#04123a` | fond du verso |

Le PDF sort en **RVB** (Chrome ne produit pas de CMJN). Deux options :

1. **Impression en ligne** (Onlineprinters, Pixartprinting, MOO…) : ils convertissent
   eux-mêmes, le RVB passe sans problème. C'est le chemin normal ici.
2. **Imprimeur traditionnel** : demande une conversion en **CMJN profil PSO Coated v3 /
   FOGRA51** et **une épreuve contractuelle** avant tirage. Les deux bleus sont profonds
   et saturés — c'est exactement le type de teinte qui dérive à la conversion, donc on
   valide sur épreuve, pas sur écran.

Équivalences Pantone **approximatives**, à confirmer sur nuancier physique et non depuis
ce fichier : accent ≈ *2727 C*, bleu roi ≈ *2767 C*. Ne pas les imposer sans contrôle.

## Papier et finition

- **400 g couché mat** — c'est le minimum pour que la carte ait de la tenue en main.
- Optionnel : **vernis sélectif brillant sur l'arête bleue** du recto. Elle accroche la
  lumière quand la carte bouge, le reste reste mat. C'est le geste qui justifie la carte.
- Éviter le pelliculage brillant intégral : il tue le contraste du navy sur le verso.

## QR code

Encode `https://lemueldonto.com`. Version 2, correction d'erreur M, **module de 0,45 mm**
à la taille actuelle (15 mm). **Ne pas le réduire sous 12 mm** : en dessous, le module
passe sous 0,36 mm et le taux de lecture chute sur une impression standard.

Scanne-le depuis le PDF avant d'envoyer en production — c'est la seule chose qu'on ne
peut plus corriger après tirage.

## Régénérer le PDF après modification du HTML

```powershell
& "$env:LOCALAPPDATA\Google\Chrome\Application\chrome.exe" `
  --headless=new --disable-gpu --no-sandbox `
  --user-data-dir="$env:TEMP\chrome-print-profile" --no-first-run `
  --no-pdf-header-footer --virtual-time-budget=15000 `
  --print-to-pdf="C:\git\portfolio\design\carte-visite\carte-visite-b1.pdf" `
  "file:///C:/git/portfolio/design/carte-visite/carte-b1-print.html"
```

Les polices sont chargées depuis Google Fonts : **connexion internet nécessaire** au
moment de la génération, sinon Chrome remplace par une police système et le PDF est bon
à jeter. Vérifier l'aperçu après chaque régénération.

## Reste à trancher

- **Téléphone** — absent du portfolio, donc **absent de la carte**. Le bloc est prêt dans
  `carte-b1-print.html` (commentaire `TÉLÉPHONE`) : décommenter, mettre le numéro,
  régénérer. Le verso a la place pour une quatrième ligne.
- **« J'architecture »** — repris tel quel du portfolio, mais le verbe *architecturer*
  n'existe pas vraiment en français ; c'est un anglicisme. Sur un site ça passe pour une
  signature, sur un objet imprimé ça ne se corrige plus. Alternative : *« Je conçois des
  systèmes distribués — et je pilote les équipes qui les livrent. »* Ton appel.
- **GitHub** — pas sur la carte (mail + LinkedIn + QR). À ajouter si tu la donnes surtout
  en contexte technique.
