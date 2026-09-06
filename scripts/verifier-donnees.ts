/**
 * Vérification de cohérence du jeu de données d'exemple.
 * Lancer avec : npm run verifier
 *
 * Le script échoue (code de sortie 1) dès qu'une incohérence est trouvée :
 * identifiant en double, référence vers un contact ou une entreprise
 * inexistant, opportunité dont le contact n'appartient pas à l'entreprise
 * annoncée, montant négatif, effectif attendu non respecté.
 */
import { entreprises } from '../data/entreprises.ts';
import { contacts } from '../data/contacts.ts';
import { opportunites } from '../data/opportunites.ts';
import { taches } from '../data/taches.ts';
import { activites } from '../data/activites.ts';

const erreurs: string[] = [];

function verifier(condition: boolean, message: string): void {
  if (!condition) erreurs.push(message);
}

function doublons(ids: string[]): string[] {
  const vus = new Set<string>();
  const doubles = new Set<string>();
  for (const id of ids) {
    if (vus.has(id)) doubles.add(id);
    vus.add(id);
  }
  return [...doubles];
}

// 1. Volumes attendus par le cahier des charges de l'atelier
verifier(entreprises.length === 10, `10 entreprises attendues, ${entreprises.length} trouvées`);
verifier(contacts.length === 20, `20 contacts attendus, ${contacts.length} trouvés`);
verifier(opportunites.length === 15, `15 opportunités attendues, ${opportunites.length} trouvées`);
verifier(taches.length === 16, `16 tâches attendues, ${taches.length} trouvées`);
verifier(activites.length === 24, `24 activités attendues, ${activites.length} trouvées`);

// 2. Identifiants uniques
for (const [nom, ids] of [
  ['entreprises', entreprises.map((e) => e.id)],
  ['contacts', contacts.map((c) => c.id)],
  ['opportunités', opportunites.map((o) => o.id)],
  ['tâches', taches.map((t) => t.id)],
  ['activités', activites.map((a) => a.id)],
] as const) {
  const doubles = doublons([...ids]);
  verifier(doubles.length === 0, `identifiants en double dans ${nom} : ${doubles.join(', ')}`);
}

const idEntreprises = new Set(entreprises.map((e) => e.id));
const idContacts = new Set(contacts.map((c) => c.id));
const entrepriseDuContact = new Map(contacts.map((c) => [c.id, c.entrepriseId]));

// 3. Chaque contact pointe vers une entreprise qui existe
for (const c of contacts) {
  verifier(
    idEntreprises.has(c.entrepriseId),
    `contact ${c.id} (${c.prenom} ${c.nom}) → entreprise inconnue « ${c.entrepriseId} »`,
  );
  verifier(c.email.includes('@'), `contact ${c.id} : email invalide « ${c.email} »`);
}

// 4. Chaque opportunité pointe vers un contact ET une entreprise réels,
//    et le contact doit bien appartenir à cette entreprise
for (const o of opportunites) {
  verifier(idContacts.has(o.contactId), `opportunité ${o.id} → contact inconnu « ${o.contactId} »`);
  verifier(idEntreprises.has(o.entrepriseId), `opportunité ${o.id} → entreprise inconnue « ${o.entrepriseId} »`);
  verifier(
    entrepriseDuContact.get(o.contactId) === o.entrepriseId,
    `opportunité ${o.id} : le contact ${o.contactId} n'appartient pas à l'entreprise ${o.entrepriseId}`,
  );
  verifier(o.montant > 0, `opportunité ${o.id} : montant invalide (${o.montant})`);
}

// 5. Chaque tâche pointe vers un contact réel
for (const t of taches) {
  verifier(idContacts.has(t.contactId), `tâche ${t.id} → contact inconnu « ${t.contactId} »`);
  verifier(!Number.isNaN(Date.parse(t.echeance)), `tâche ${t.id} : échéance illisible`);
}

// 6. Aucun texte bouche-trou
const interdits = ['lorem', 'ipsum', 'contact 1', 'entreprise 1', 'à compléter', 'todo'];
const corpus = JSON.stringify({ entreprises, contacts, opportunites, taches, activites }).toLowerCase();
for (const mot of interdits) {
  verifier(!corpus.includes(mot), `texte bouche-trou détecté : « ${mot} »`);
}

// 7. Restitution
if (erreurs.length > 0) {
  console.error('\n  Données incohérentes :\n');
  for (const e of erreurs) console.error('   - ' + e);
  console.error('');
  process.exit(1);
}

console.log(`
  Données vérifiées, tout se tient :
   - ${entreprises.length} entreprises
   - ${contacts.length} contacts, tous rattachés à une entreprise existante
   - ${opportunites.length} opportunités, chacune reliée à un contact et une entreprise cohérents
   - ${taches.length} tâches, toutes reliées à un contact existant
   - ${activites.length} activités
`);
