export type StatutContact = 'Client' | 'Prospect' | 'Lead' | 'Inactif';

export type EtapeOpportunite =
  | 'Nouveau'
  | 'Qualifié'
  | 'Proposition'
  | 'Négociation'
  | 'Gagné'
  | 'Perdu';

export type TypeTache = 'Appel' | 'E-mail' | 'Réunion' | 'Relance' | 'Rappel';

export type TypeActivite =
  | 'appel'
  | 'email'
  | 'reunion'
  | 'note'
  | 'contact'
  | 'etape'
  | 'tache';

export interface Entreprise {
  id: string;
  nom: string;
  secteur: string;
  ville: string;
  effectif: number;
  siteWeb: string;
}

export interface Contact {
  id: string;
  prenom: string;
  nom: string;
  entrepriseId: string;
  fonction: string;
  email: string;
  telephone: string;
  statut: StatutContact;
  derniereActivite: string;
}

export interface Opportunite {
  id: string;
  intitule: string;
  contactId: string;
  entrepriseId: string;
  montant: number;
  etape: EtapeOpportunite;
  dateCloture: string;
}

export interface Tache {
  id: string;
  intitule: string;
  type: TypeTache;
  contactId: string;
  echeance: string;
  terminee: boolean;
}

export interface Activite {
  id: string;
  type: TypeActivite;
  auteur: string;
  action: string;
  cible: string;
  contexte: string;
  date: string;
  /** Contact concerné par l'activité — alimente son historique sur sa fiche. */
  contactId: string;
}
