import type { Tache } from './types.ts';
import { jour } from './dates.ts';

export const taches: Tache[] = [
  // En retard
  { id: 't1',  intitule: 'Rappeler Camille Fournier',          type: 'Appel',   contactId: 'c1',  echeance: jour(-3, 10, 0),  terminee: false },
  { id: 't2',  intitule: 'Envoyer la proposition logistique',  type: 'E-mail',  contactId: 'c2',  echeance: jour(-2, 17, 0),  terminee: false },
  { id: 't3',  intitule: 'Relancer Paul Rousseau',             type: 'Relance', contactId: 'c3',  echeance: jour(-4, 9, 30),  terminee: false },

  // Aujourd'hui
  { id: 't4',  intitule: 'Révision tarifaire Mercure',         type: 'Réunion', contactId: 'c4',  echeance: jour(0, 14, 0),   terminee: false },
  { id: 't5',  intitule: 'Appel de qualification Théo Girard', type: 'Appel',   contactId: 'c5',  echeance: jour(0, 16, 30),  terminee: false },
  { id: 't6',  intitule: 'Préparer la démo Vela Santé',        type: 'Rappel',  contactId: 'c6',  echeance: jour(0, 18, 0),   terminee: false },

  // À venir
  { id: 't7',  intitule: 'Atelier besoins Groupe Vallier',     type: 'Réunion', contactId: 'c7',  echeance: jour(2, 10, 0),   terminee: false },
  { id: 't8',  intitule: 'Soutenance Helio Énergies',          type: 'Réunion', contactId: 'c8',  echeance: jour(4, 9, 30),   terminee: false },
  { id: 't9',  intitule: 'Relance devis Kanto Studio',         type: 'Relance', contactId: 'c9',  echeance: jour(5, 11, 0),   terminee: false },
  { id: 't10', intitule: 'Point mensuel Atelier Nomade',       type: 'Réunion', contactId: 'c10', echeance: jour(8, 15, 0),   terminee: false },
  { id: 't11', intitule: 'Envoyer le catalogue Lumen',         type: 'E-mail',  contactId: 'c11', echeance: jour(11, 9, 0),   terminee: false },

  // Terminées
  { id: 't12', intitule: 'Compte rendu Cap Horizon',           type: 'E-mail',  contactId: 'c12', echeance: jour(-6, 16, 0),  terminee: true },
  { id: 't13', intitule: 'Cadrage technique Helio',            type: 'Réunion', contactId: 'c13', echeance: jour(-8, 10, 0),  terminee: true },
  { id: 't14', intitule: 'Audit qualité Novaterre',            type: 'Rappel',  contactId: 'c14', echeance: jour(-9, 14, 30), terminee: true },
  { id: 't15', intitule: 'Appel de suivi Brassac',             type: 'Appel',   contactId: 'c15', echeance: jour(-11, 11, 0), terminee: true },
  { id: 't16', intitule: 'Onboarding Atelier Nomade',          type: 'Rappel',  contactId: 'c18', echeance: jour(-1, 9, 10),  terminee: true },
];
