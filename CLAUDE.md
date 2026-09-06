# Sa CRM — règles du projet

Ce fichier est la mémoire du projet. À relire au début de chaque demande.

## Qui fait quoi

Hugues n'est pas technicien. Il décide, valide et approuve — je fais toute la
technique. Je ne lui demande jamais de taper une commande, d'ouvrir un fichier
ou de corriger du code. Je ne lui demande que des décisions, des validations et
des autorisations.

Je réponds **toujours en français simple, sans terme technique**.

## La règle qui compte le plus

**Toujours lancer l'application et vérifier la page moi-même avant de dire
qu'une étape est terminée.**

Concrètement, avant chaque « c'est fait » :

1. lancer la vérification technique (`npm run build`) et corriger jusqu'à ce
   qu'elle passe ;
2. démarrer l'application (`npm start`), ouvrir la page concernée, et lire
   réellement ce qu'elle renvoie ;
3. vérifier que les chiffres et les noms attendus sont bien là — pas une page
   vide, pas une page d'erreur, pas des zéros ;
4. arrêter le serveur ;
5. seulement ensuite, dire ce que j'ai fait **et ce que j'ai vu**.

Une annonce n'est pas une preuve. Si je n'ai pas ouvert la page, je ne dis pas
que c'est terminé.

## Choix techniques — à ne pas changer

- **Next.js 15 (App Router) + TypeScript**, prêt pour une mise en ligne Vercel.
- **Aucune base de données, aucun serveur** : les données d'exemple vivent dans
  `data/`, en TypeScript.
- **Le moins de dépendances possible.** Aujourd'hui : `next`, `react`,
  `react-dom` seulement. **Aucune nouvelle dépendance sans demander à Hugues** —
  y compris pour un graphique, une icône ou une mise en forme de date.
- Composants en **composants serveur** par défaut. `'use client'` seulement
  quand c'est indispensable (aujourd'hui : le menu latéral, pour l'élément actif).

## Règles visuelles — non négociables

- **Toutes** les couleurs, tailles, espacements et rayons viennent de
  `app/tokens.css`. **Aucune valeur en dur** dans le CSS ou le JSX.
  Si une valeur manque, demander plutôt qu'inventer.
- Les intentions de design sont décrites dans le dépôt public
  `https://github.com/AGACIH/crm-workshop-formation` (dossier `assets/`),
  fichier `DESIGN.md`. Le relire avant de construire un écran.
- Les images de `assets/maquettes/` sont des **références visuelles**, pas du
  code à recopier, et elles montrent la cible finale du produit — pas le
  périmètre de l'étape en cours.
- Le bleu de marque sert aux actions et à l'élément actif, **jamais en fond de
  page**. Le cyan `--sa-accent` uniquement sur un élément à mettre en valeur.
- Un seul bouton principal par écran ; tous les autres sont discrets.
- Focus clavier toujours visible : `box-shadow: var(--sa-ring)`.

## Données d'exemple

Réalistes, en français, entreprises crédibles. **Jamais de « Lorem ipsum », jamais
de « Contact 1 »**. Volumes fixés par l'atelier :

| Fichier | Contenu |
|---|---|
| `data/entreprises.ts` | 10 entreprises |
| `data/contacts.ts` | 20 contacts |
| `data/opportunites.ts` | 15 opportunités |
| `data/taches.ts` | 16 tâches |
| `data/activites.ts` | 24 activités |

Chaque opportunité pointe vers un contact **et** une entreprise qui existent, et
le contact appartient bien à cette entreprise.

**Après toute modification des données, lancer `npm run verifier`.** Le script
`scripts/verifier-donnees.ts` contrôle les volumes, l'unicité des identifiants,
toutes les références croisées et l'absence de texte bouche-trou. S'il signale
quelque chose, corriger avant de continuer.

Les dates sont calculées par rapport au jour courant (`data/dates.ts`), pour que
le tableau de bord reste vivant.

## État de l'atelier

- **Étape 4 — faite.** Socle, données, menu latéral, barre supérieure et page
  Accueil (4 indicateurs, graphique du pipeline, tâches, activité récente).
  Les pages Contacts, Entreprises, Opportunités et Tâches sont volontairement
  des pages vides avec leur seul titre.
- **Étape 6 — à venir.** Page Contacts : liste, recherche, filtres, fiche
  détaillée. À construire **sur un brouillon**, avec demande de publication et
  relecture critique. Ne jamais publier sans l'accord explicite de Hugues.

## Commandes du projet

```
npm run verifier   # cohérence des données d'exemple
npm run build      # vérification technique
npm start          # démarre l'application (port 3000)
```
