import type { Opportunite } from './types.ts';
import { jour } from './dates.ts';

export const opportunites: Opportunite[] = [
  { id: 'o1',  intitule: "Refonte de l'espace assurés",    contactId: 'c1',  entrepriseId: 'e1',  montant: 96000,  etape: 'Négociation', dateCloture: jour(18) },
  { id: 'o2',  intitule: 'Plateforme de suivi de flotte',  contactId: 'c2',  entrepriseId: 'e7',  montant: 64000,  etape: 'Proposition', dateCloture: jour(32) },
  { id: 'o3',  intitule: 'Portail chantiers',              contactId: 'c3',  entrepriseId: 'e2',  montant: 45000,  etape: 'Qualifié',    dateCloture: jour(54) },
  { id: 'o4',  intitule: 'Programme de formation interne', contactId: 'c4',  entrepriseId: 'e1',  montant: 28000,  etape: 'Gagné',       dateCloture: jour(-12) },
  { id: 'o5',  intitule: 'Outil de qualification',         contactId: 'c5',  entrepriseId: 'e8',  montant: 18000,  etape: 'Nouveau',     dateCloture: jour(75) },
  { id: 'o6',  intitule: 'Espace patients Vela',           contactId: 'c6',  entrepriseId: 'e4',  montant: 72000,  etape: 'Proposition', dateCloture: jour(27) },
  { id: 'o7',  intitule: 'SIRH — module entretiens',       contactId: 'c7',  entrepriseId: 'e2',  montant: 39000,  etape: 'Gagné',       dateCloture: jour(-5) },
  { id: 'o8',  intitule: 'Supervision des installations',  contactId: 'c8',  entrepriseId: 'e3',  montant: 110000, etape: 'Négociation', dateCloture: jour(21) },
  { id: 'o9',  intitule: 'Refonte du site vitrine',        contactId: 'c9',  entrepriseId: 'e5',  montant: 22000,  etape: 'Qualifié',    dateCloture: jour(48) },
  { id: 'o10', intitule: 'Connecteur e-commerce',          contactId: 'c10', entrepriseId: 'e6',  montant: 31000,  etape: 'Gagné',       dateCloture: jour(-19) },
  { id: 'o11', intitule: 'Catalogue de formations',        contactId: 'c11', entrepriseId: 'e9',  montant: 47000,  etape: 'Proposition', dateCloture: jour(36) },
  { id: 'o12', intitule: 'Application de réservation',     contactId: 'c12', entrepriseId: 'e10', montant: 58000,  etape: 'Nouveau',     dateCloture: jour(82) },
  { id: 'o13', intitule: 'Migration des données',          contactId: 'c13', entrepriseId: 'e3',  montant: 26000,  etape: 'Qualifié',    dateCloture: jour(60) },
  { id: 'o14', intitule: 'Traçabilité produits',           contactId: 'c14', entrepriseId: 'e8',  montant: 83000,  etape: 'Perdu',       dateCloture: jour(-24) },
  { id: 'o15', intitule: 'Refonte de la boutique',         contactId: 'c17', entrepriseId: 'e5',  montant: 35000,  etape: 'Gagné',       dateCloture: jour(-2) },
];
