import type { Activite, TypeActivite } from '../data/types';
import { dateRelative } from '../lib/format';

const icones: Record<TypeActivite, string> = {
  appel: 'call',
  email: 'mail',
  reunion: 'groups',
  note: 'sticky_note_2',
  contact: 'person_add',
  etape: 'sync_alt',
  tache: 'check_circle',
};

export default function ListeActivites({ activites }: { activites: Activite[] }) {
  return (
    <div>
      {activites.map((a) => (
        <div className="activite" key={a.id}>
          <span className="activite-icone">
            <span className="material-symbols-rounded" aria-hidden="true">
              {icones[a.type]}
            </span>
          </span>
          <div>
            <div className="activite-texte">
              <span className="activite-auteur">{a.auteur}</span> {a.action} {a.cible}
            </div>
            <div className="activite-contexte">{a.contexte}</div>
          </div>
          <span className="activite-date">{dateRelative(a.date)}</span>
        </div>
      ))}
    </div>
  );
}
