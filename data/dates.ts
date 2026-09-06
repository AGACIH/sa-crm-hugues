/**
 * Toutes les dates du jeu d'exemple sont calculées par rapport au jour
 * de génération de la page, pour que le tableau de bord reste vivant.
 */
export function jour(decalage: number, heure = 9, minute = 0): string {
  const d = new Date();
  d.setHours(heure, minute, 0, 0);
  d.setDate(d.getDate() + decalage);
  return d.toISOString();
}

export function mois(decalage: number): string {
  const d = new Date();
  d.setHours(12, 0, 0, 0);
  d.setDate(1);
  d.setMonth(d.getMonth() + decalage);
  return d.toISOString();
}
