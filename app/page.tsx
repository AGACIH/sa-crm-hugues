import EntetePage from '../components/EntetePage';
import CarteIndicateur from '../components/CarteIndicateur';
import Panneau from '../components/Panneau';
import GraphiquePipeline from '../components/GraphiquePipeline';
import ListeTaches from '../components/ListeTaches';
import ListeActivites from '../components/ListeActivites';
import { contacts } from '../data/contacts';
import { opportunites } from '../data/opportunites';
import { euroCourt } from '../lib/format';
import {
  activitesRecentes,
  leadsAQualifier,
  opportunitesGagnees,
  opportunitesOuvertes,
  pipelineParEtape,
  tachesAVenir,
  tachesDuJour,
  tachesEnRetard,
  valeurPipelineOuvert,
  valeurSignee,
} from '../lib/indicateurs';

export default function Accueil() {
  return (
    <>
      <EntetePage
        titre="Tableau de bord"
        sousTitre="Suivez vos contacts, opportunités et prochaines actions."
        actions={
          <>
            <button type="button" className="bouton-discret">
              <span className="material-symbols-rounded" aria-hidden="true">
                checklist
              </span>
              Mes tâches
            </button>
            <button type="button" className="bouton-discret">
              <span className="material-symbols-rounded" aria-hidden="true">
                view_kanban
              </span>
              Pipeline
            </button>
          </>
        }
      />

      <div className="indicateurs">
        <CarteIndicateur
          libelle="Contacts"
          icone="group"
          valeur={String(contacts.length)}
          tendance={{ texte: `↗ +${leadsAQualifier.length}`, ton: 'hausse' }}
          contexte={`${leadsAQualifier.length} leads à qualifier`}
        />
        <CarteIndicateur
          libelle="Pipeline ouvert"
          icone="payments"
          valeur={euroCourt(valeurPipelineOuvert)}
          tendance={{ texte: '↗ +8 %', ton: 'hausse' }}
          contexte={`${opportunitesOuvertes.length} opportunités actives`}
        />
        <CarteIndicateur
          libelle="Signé"
          icone="task_alt"
          valeur={euroCourt(valeurSignee)}
          tendance={{ texte: `✓ ${opportunitesGagnees.length} affaires`, ton: 'hausse' }}
          contexte={`sur ${opportunites.length} opportunités suivies`}
        />
        <CarteIndicateur
          libelle="Tâches en retard"
          icone="schedule"
          valeur={String(tachesEnRetard.length)}
          tendance={{ texte: '! à traiter', ton: 'alerte' }}
          contexte={`${tachesDuJour.length} prévues aujourd'hui`}
        />
      </div>

      <div className="grille-milieu">
        <Panneau
          titre="Pipeline par étape"
          sousTitre="Valeur des opportunités par étape de vente"
          extra={
            <div className="panneau-extra">
              <div className="panneau-extra-valeur">{euroCourt(valeurPipelineOuvert)}</div>
              <div className="panneau-extra-libelle">en cours</div>
            </div>
          }
        >
          <GraphiquePipeline barres={pipelineParEtape} />
        </Panneau>

        <Panneau titre="Tâches" lien="Tout voir">
          <ListeTaches
            groupes={[
              { titre: 'En retard', taches: tachesEnRetard, ton: 'retard' },
              { titre: "Aujourd'hui", taches: tachesDuJour, ton: 'jour' },
              { titre: 'À venir', taches: tachesAVenir.slice(0, 4), ton: 'avenir' },
            ]}
          />
        </Panneau>
      </div>

      <Panneau titre="Activité récente" lien="Tout l'historique">
        <ListeActivites activites={activitesRecentes.slice(0, 8)} />
      </Panneau>
    </>
  );
}
