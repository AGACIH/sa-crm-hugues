import Link from 'next/link';
import { notFound } from 'next/navigation';
import EntetePage from '../../../components/EntetePage';
import Panneau from '../../../components/Panneau';
import ListeActivites from '../../../components/ListeActivites';
import { contacts } from '../../../data/contacts';
import { entreprises } from '../../../data/entreprises';
import { opportunites } from '../../../data/opportunites';
import { taches } from '../../../data/taches';
import { activites } from '../../../data/activites';
import { euro, dateCourte, dateRelative, echeanceLisible } from '../../../lib/format';
import type { StatutContact } from '../../../data/types';

const classesStatut: Record<StatutContact, string> = {
  Client: 'badge badge-succes',
  Prospect: 'badge',
  Lead: 'badge badge-attente',
  Inactif: 'badge badge-danger',
};

export function generateStaticParams() {
  return contacts.map((c) => ({ id: c.id }));
}

export default async function FicheContact({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const contact = contacts.find((c) => c.id === id);
  if (!contact) notFound();

  const entreprise = entreprises.find((e) => e.id === contact.entrepriseId);
  const sesOpportunites = opportunites.filter((o) => o.contactId === contact.id);
  const sesTaches = taches.filter((t) => t.contactId === contact.id);
  const sonHistorique = activites
    .filter((a) => a.contactId === contact.id)
    .sort((a, b) => Date.parse(b.date) - Date.parse(a.date));

  return (
    <>
      <p className="fil-ariane">
        <Link href="/contacts" className="fil-ariane-lien">
          ← Tous les contacts
        </Link>
      </p>

      <EntetePage
        titre={`${contact.prenom} ${contact.nom}`}
        sousTitre={`${contact.fonction} · ${entreprise?.nom ?? '—'}`}
        actions={<span className={classesStatut[contact.statut]}>{contact.statut}</span>}
      />

      <div className="grille-fiche">
        <div className="colonne-fiche">
          <Panneau titre="Coordonnées">
            <dl className="fiche-infos">
              <div className="fiche-info">
                <dt>Entreprise</dt>
                <dd>
                  {entreprise?.nom ?? '—'}
                  {entreprise && (
                    <span className="fiche-info-detail">
                      {entreprise.secteur} · {entreprise.ville} · {entreprise.effectif} salariés
                    </span>
                  )}
                </dd>
              </div>
              <div className="fiche-info">
                <dt>Fonction</dt>
                <dd>{contact.fonction}</dd>
              </div>
              <div className="fiche-info">
                <dt>Email</dt>
                <dd>{contact.email}</dd>
              </div>
              <div className="fiche-info">
                <dt>Téléphone</dt>
                <dd>{contact.telephone}</dd>
              </div>
              <div className="fiche-info">
                <dt>Dernière activité</dt>
                <dd>{dateRelative(contact.derniereActivite)}</dd>
              </div>
            </dl>
          </Panneau>

          <Panneau
            titre="Opportunités"
            sousTitre={
              sesOpportunites.length > 0
                ? `${sesOpportunites.length} en cours ou clôturées`
                : undefined
            }
          >
            {sesOpportunites.length === 0 ? (
              <p className="page-vide">Aucune opportunité pour ce contact.</p>
            ) : (
              <ul className="liste-simple">
                {sesOpportunites.map((o) => (
                  <li className="ligne-simple" key={o.id}>
                    <div>
                      <div className="ligne-simple-titre">{o.intitule}</div>
                      <div className="ligne-simple-meta">
                        {o.etape} · clôture prévue le {dateCourte(o.dateCloture)}
                      </div>
                    </div>
                    <span className="ligne-simple-valeur">{euro(o.montant)}</span>
                  </li>
                ))}
              </ul>
            )}
          </Panneau>

          <Panneau titre="Tâches">
            {sesTaches.length === 0 ? (
              <p className="page-vide">Aucune tâche pour ce contact.</p>
            ) : (
              <ul className="liste-simple">
                {sesTaches.map((t) => (
                  <li className="ligne-simple" key={t.id}>
                    <div>
                      <div className="ligne-simple-titre">{t.intitule}</div>
                      <div className="ligne-simple-meta">{t.type}</div>
                    </div>
                    <span className={t.terminee ? 'badge badge-succes' : 'badge'}>
                      {t.terminee ? 'Terminée' : echeanceLisible(t.echeance, true)}
                    </span>
                  </li>
                ))}
              </ul>
            )}
          </Panneau>
        </div>

        <Panneau titre="Historique d'activité">
          {sonHistorique.length === 0 ? (
            <p className="page-vide">Aucune activité enregistrée pour ce contact.</p>
          ) : (
            <ListeActivites activites={sonHistorique} />
          )}
        </Panneau>
      </div>
    </>
  );
}
