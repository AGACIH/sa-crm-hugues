import { contacts } from '../data/contacts.ts';
import { entreprises } from '../data/entreprises.ts';
import { opportunites } from '../data/opportunites.ts';
import { taches } from '../data/taches.ts';
import { activites } from '../data/activites.ts';
import type { EtapeOpportunite } from '../data/types.ts';

/** Les étapes qui composent le pipeline ouvert, dans l'ordre de vente. */
export const ETAPES_OUVERTES: EtapeOpportunite[] = [
  'Nouveau',
  'Qualifié',
  'Proposition',
  'Négociation',
];

function debutDuJour(d = new Date()): Date {
  const j = new Date(d);
  j.setHours(0, 0, 0, 0);
  return j;
}

function memeJour(a: Date, b: Date): boolean {
  return debutDuJour(a).getTime() === debutDuJour(b).getTime();
}

export const opportunitesOuvertes = opportunites.filter((o) =>
  ETAPES_OUVERTES.includes(o.etape),
);

export const opportunitesGagnees = opportunites.filter((o) => o.etape === 'Gagné');

export const tachesAFaire = taches.filter((t) => !t.terminee);

export const tachesEnRetard = tachesAFaire.filter(
  (t) => new Date(t.echeance) < debutDuJour(),
);

export const tachesDuJour = tachesAFaire.filter((t) =>
  memeJour(new Date(t.echeance), new Date()),
);

export const tachesAVenir = tachesAFaire.filter(
  (t) => new Date(t.echeance) > new Date() && !memeJour(new Date(t.echeance), new Date()),
);

export const leadsAQualifier = contacts.filter((c) => c.statut === 'Lead');

export const valeurPipelineOuvert = opportunitesOuvertes.reduce((s, o) => s + o.montant, 0);

export const valeurSignee = opportunitesGagnees.reduce((s, o) => s + o.montant, 0);

/** Valeur cumulée des opportunités par étape — le graphique du tableau de bord. */
export interface BarreEtape {
  etape: EtapeOpportunite;
  montant: number;
  nombre: number;
  miseEnValeur: boolean;
}

export const pipelineParEtape: BarreEtape[] = [...ETAPES_OUVERTES, 'Gagné' as const].map(
  (etape) => {
    const lot = opportunites.filter((o) => o.etape === etape);
    return {
      etape,
      montant: lot.reduce((s, o) => s + o.montant, 0),
      nombre: lot.length,
      // DESIGN.md : seule la barre à mettre en valeur prend --sa-accent.
      miseEnValeur: etape === 'Gagné',
    };
  },
);

/** Les activités les plus récentes d'abord. */
export const activitesRecentes = [...activites].sort(
  (a, b) => Date.parse(b.date) - Date.parse(a.date),
);

/** Compteurs affichés à droite des entrées du menu latéral. */
export const compteursMenu = {
  contacts: contacts.length,
  entreprises: entreprises.length,
  opportunites: opportunitesOuvertes.length,
  taches: tachesEnRetard.length,
};
