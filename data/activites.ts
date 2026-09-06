import type { Activite } from './types.ts';
import { jour } from './dates.ts';

export const activites: Activite[] = [
  { id: 'a1',  type: 'etape',   auteur: 'Yanis Belkacem', action: 'a déplacé',      cible: 'Migration des données en Négociation', contexte: 'Helio Énergies · 26 000 €',        date: jour(0, 11, 24) },
  { id: 'a2',  type: 'appel',   auteur: 'Marta Ruiz',     action: 'a enregistré',   cible: 'un appel avec Julien Marchand',        contexte: 'Groupe Vallier · 18 min',          date: jour(0, 10, 2) },
  { id: 'a3',  type: 'tache',   auteur: 'Yanis Belkacem', action: 'a terminé',      cible: 'Onboarding Atelier Nomade',            contexte: 'Tâche · Rappel',                   date: jour(0, 9, 10) },
  { id: 'a4',  type: 'contact', auteur: 'Awa Diallo',     action: 'a ajouté',       cible: 'le contact Sofia Neri',                contexte: 'Vela Santé · statut Lead',         date: jour(-1, 17, 32) },
  { id: 'a5',  type: 'reunion', auteur: 'Thomas Lefèvre', action: 'a planifié',     cible: 'une soutenance avec Nadia Cherif',     contexte: 'Helio Énergies · dans 4 jours',    date: jour(-1, 15, 4) },
  { id: 'a6',  type: 'note',    auteur: 'Yanis Belkacem', action: 'a ajouté',       cible: 'une note sur Elsa Vidal',              contexte: 'Remise volume au-delà de 80 licences', date: jour(-1, 11, 48) },
  { id: 'a7',  type: 'email',   auteur: 'Camille Fournier', action: 'a répondu à',  cible: "la proposition espace assurés",        contexte: 'Mercure Assurances · 96 000 €',    date: jour(-1, 11, 24) },
  { id: 'a8',  type: 'appel',   auteur: 'Karim Haddad',   action: 'a enregistré',   cible: 'un appel avec Hugo Lambert',           contexte: 'Brassac Logistique · 24 min',      date: jour(-2, 15, 40) },
  { id: 'a9',  type: 'etape',   auteur: 'Yanis Belkacem', action: 'a déplacé',      cible: 'Supervision des installations en Négociation', contexte: 'Helio Énergies · 110 000 €', date: jour(-2, 9, 15) },
  { id: 'a10', type: 'email',   auteur: 'Marta Ruiz',     action: 'a envoyé',       cible: 'le devis à Léa Bonnet',                contexte: 'Kanto Studio · 22 000 €',          date: jour(-2, 8, 50) },
  { id: 'a11', type: 'reunion', auteur: 'Yanis Belkacem', action: 'a tenu',         cible: 'un atelier avec Sofia Neri',           contexte: 'Vela Santé · 1 h 30',              date: jour(-3, 16, 10) },
  { id: 'a12', type: 'note',    auteur: 'Antoine Delcourt', action: 'a ajouté',     cible: 'une note sur le catalogue',            contexte: 'Lumen Formation · budget confirmé', date: jour(-3, 11, 5) },
  { id: 'a13', type: 'contact', auteur: 'Yanis Belkacem', action: 'a ajouté',       cible: 'le contact Vincent Payet',             contexte: 'Helio Énergies · statut Lead',     date: jour(-4, 17, 30) },
  { id: 'a14', type: 'appel',   auteur: 'Claire Mercier', action: 'a enregistré',   cible: 'un appel avec Paul Rousseau',          contexte: 'Groupe Vallier · 12 min',          date: jour(-4, 10, 5) },
  { id: 'a15', type: 'etape',   auteur: 'Yanis Belkacem', action: 'a gagné',        cible: 'Refonte de la boutique',               contexte: 'Kanto Studio · 35 000 €',          date: jour(-5, 11, 20) },
  { id: 'a16', type: 'email',   auteur: 'Inès Moreau',    action: 'a répondu à',    cible: "la demande d'information",             contexte: 'Cap Horizon Voyages',              date: jour(-5, 14, 22) },
  { id: 'a17', type: 'tache',   auteur: 'Yanis Belkacem', action: 'a terminé',      cible: 'Compte rendu Cap Horizon',             contexte: 'Tâche · E-mail',                   date: jour(-6, 16, 0) },
  { id: 'a18', type: 'reunion', auteur: 'Théo Girard',    action: 'a demandé',      cible: 'une démonstration',                    contexte: 'Novaterre Agro · à planifier',     date: jour(-6, 9, 30) },
  { id: 'a19', type: 'note',    auteur: 'Sarah Benali',   action: 'a ajouté',       cible: 'une note sur le projet réservation',   contexte: 'Cap Horizon Voyages · 58 000 €',   date: jour(-7, 15, 0) },
  { id: 'a20', type: 'appel',   auteur: 'Yanis Belkacem', action: 'a enregistré',   cible: 'un appel avec Vincent Payet',          contexte: 'Helio Énergies · 9 min',           date: jour(-8, 10, 45) },
  { id: 'a21', type: 'tache',   auteur: 'Marta Ruiz',     action: 'a terminé',      cible: 'Cadrage technique Helio',              contexte: 'Tâche · Réunion',                  date: jour(-8, 10, 0) },
  { id: 'a22', type: 'email',   auteur: 'Émilie Roux',    action: 'a demandé',      cible: 'une grille tarifaire',                 contexte: 'Vela Santé',                       date: jour(-9, 13, 15) },
  { id: 'a23', type: 'etape',   auteur: 'Yanis Belkacem', action: 'a gagné',        cible: 'Programme de formation interne',       contexte: 'Mercure Assurances · 28 000 €',    date: jour(-12, 10, 0) },
  { id: 'a24', type: 'etape',   auteur: 'Yanis Belkacem', action: 'a perdu',        cible: 'Traçabilité produits',                 contexte: 'Novaterre Agro · budget reporté',  date: jour(-24, 15, 30) },
];
