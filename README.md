# CryptoBrief — Prototype « Newsletter-first »

Prototype statique (HTML/CSS/JS, sans dépendance) du concept 3 : la newsletter
est le produit principal, le site est sa vitrine.

## Pages
- `index.html` — hero d'inscription, aperçu d'un numéro, archives, articles, CTA final
- `newsletter.html` — un numéro complet consultable (modèle partageable)
- `article.html` — un article d'exemple avec CTA d'abonnement intégré

## Design
- Palette claire épurée : fond `#faf9f7`, encre `#16130f`, accent orange `#e8622c`
- Typo Inter (Google Fonts)
- Responsive mobile-first, formulaire d'inscription en 3 endroits
- Toast de confirmation JS (simulation, pas de backend)

## Ouvrir
Ouvrir `index.html` dans un navigateur, ou servir le dossier :
`python3 -m http.server 8000`

## Prochaines étapes possibles
- Brancher un vrai service d'envoi (Mailchimp, Brevo, Buttondown…)
- Générateur de site statique (Astro, Eleventy) pour les archives
- Pages mentions légales / confidentialité
