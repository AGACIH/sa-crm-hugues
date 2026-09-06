import type { Tache } from '../data/types';
import { contacts } from '../data/contacts';
import { echeanceLisible } from '../lib/format';
import Puce from './Puce';

interface Groupe {
  titre: string;
  taches: Tache[];
  ton: 'retard' | 'jour' | 'avenir';
}

function nomContact(contactId: string): string {
  const c = contacts.find((x) => x.id === contactId);
  return c ? `${c.prenom} ${c.nom}` : 'Contact inconnu';
}

export default function ListeTaches({ groupes }: { groupes: Groupe[] }) {
  return (
    <>
      {groupes.map((g) => (
        <div className="groupe-taches" key={g.titre}>
          <div className="groupe-entete">
            <span
              className={
                g.ton === 'retard' ? 'groupe-pastille groupe-pastille-retard' : 'groupe-pastille'
              }
            />
            {g.titre}
            <span className="groupe-nombre">{g.taches.length}</span>
          </div>

          {g.taches.map((t) => (
            <div className="tache" key={t.id}>
              <span className="tache-case" aria-hidden="true" />
              <div>
                <div className="tache-intitule">{t.intitule}</div>
                <div className="tache-meta">
                  {t.type} · {nomContact(t.contactId)}
                </div>
              </div>
              <span className="tache-echeance">
                <Puce ton={g.ton === 'retard' ? 'alerte' : g.ton === 'jour' ? 'neutre' : 'neutre'}>
                  {echeanceLisible(t.echeance, g.ton === 'avenir')}
                </Puce>
              </span>
            </div>
          ))}
        </div>
      ))}
    </>
  );
}
