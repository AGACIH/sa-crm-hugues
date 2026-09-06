/** Mise en forme des nombres et des dates, en français. */

export function euro(montant: number): string {
  return montant.toLocaleString('fr-FR') + ' €';
}

/** 558000 → « 558 k€ » */
export function euroCourt(montant: number): string {
  return Math.round(montant / 1000).toLocaleString('fr-FR') + ' k€';
}

/** 558000 → « 558k » (au-dessus des barres du graphique) */
export function milliers(montant: number): string {
  return Math.round(montant / 1000).toLocaleString('fr-FR') + 'k';
}

export function dateCourte(iso: string): string {
  return new Date(iso).toLocaleDateString('fr-FR', { day: 'numeric', month: 'short' });
}

export function heure(iso: string): string {
  return new Date(iso).toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' });
}

function memeJour(a: Date, b: Date): boolean {
  return (
    a.getFullYear() === b.getFullYear() &&
    a.getMonth() === b.getMonth() &&
    a.getDate() === b.getDate()
  );
}

/** « Auj. 11:24 », « Hier 17:32 », sinon « 3 sept. » */
export function dateRelative(iso: string): string {
  const d = new Date(iso);
  const maintenant = new Date();
  const hier = new Date(maintenant);
  hier.setDate(hier.getDate() - 1);

  if (memeJour(d, maintenant)) return 'Auj. ' + heure(iso);
  if (memeJour(d, hier)) return 'Hier ' + heure(iso);
  return dateCourte(iso);
}

/** Échéance d'une tâche : « Auj. 14:00 », « 3 sept. », « 8 sept. 10:00 » */
export function echeanceLisible(iso: string, avecHeure = false): string {
  const d = new Date(iso);
  if (memeJour(d, new Date())) return 'Auj. ' + heure(iso);
  return avecHeure ? `${dateCourte(iso)} ${heure(iso)}` : dateCourte(iso);
}
