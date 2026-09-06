import EntetePage from '../../components/EntetePage';
import TableauContacts from '../../components/TableauContacts';
import type { LigneContact } from '../../components/TableauContacts';
import type { StatutContact } from '../../data/types';
import { contacts } from '../../data/contacts';
import { entreprises } from '../../data/entreprises';
import { dateRelative } from '../../lib/format';

const STATUTS: StatutContact[] = ['Client', 'Prospect', 'Lead', 'Inactif'];

export default function PageContacts() {
  const nomEntreprise = new Map(entreprises.map((e) => [e.id, e.nom]));

  // Les dates sont mises en forme ici, côté serveur, pour que la liste
  // interactive ne reçoive que du texte déjà prêt à afficher.
  const lignes: LigneContact[] = contacts.map((c) => ({
    id: c.id,
    nom: `${c.prenom} ${c.nom}`,
    entreprise: nomEntreprise.get(c.entrepriseId) ?? '—',
    entrepriseId: c.entrepriseId,
    fonction: c.fonction,
    email: c.email,
    statut: c.statut,
    derniereActivite: dateRelative(c.derniereActivite),
  }));

  return (
    <>
      <EntetePage
        titre="Contacts"
        sousTitre={`${contacts.length} contacts suivis, répartis sur ${entreprises.length} entreprises.`}
      />

      <section className="panneau">
        <div className="panneau-corps">
          <TableauContacts
            lignes={lignes}
            entreprises={entreprises.map((e) => ({ id: e.id, nom: e.nom }))}
            statuts={STATUTS}
          />
        </div>
      </section>
    </>
  );
}
