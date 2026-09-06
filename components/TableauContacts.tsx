'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import type { StatutContact } from '../data/types';

export interface LigneContact {
  id: string;
  nom: string;
  entreprise: string;
  entrepriseId: string;
  fonction: string;
  email: string;
  statut: StatutContact;
  derniereActivite: string;
}

const classesStatut: Record<StatutContact, string> = {
  Client: 'badge badge-succes',
  Prospect: 'badge',
  Lead: 'badge badge-attente',
  Inactif: 'badge badge-danger',
};

/** Ignore les accents et la casse pour que « lea » trouve « Léa ». */
function normaliser(texte: string): string {
  return texte
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase();
}

interface Props {
  lignes: LigneContact[];
  entreprises: { id: string; nom: string }[];
  statuts: StatutContact[];
}

export default function TableauContacts({ lignes, entreprises, statuts }: Props) {
  const [recherche, setRecherche] = useState('');
  const [statut, setStatut] = useState('tous');
  const [entreprise, setEntreprise] = useState('toutes');

  const resultats = useMemo(() => {
    const terme = normaliser(recherche.trim());
    return lignes.filter((l) => {
      if (statut !== 'tous' && l.statut !== statut) return false;
      if (entreprise !== 'toutes' && l.entrepriseId !== entreprise) return false;
      if (terme === '') return true;
      return normaliser(`${l.nom} ${l.entreprise} ${l.fonction} ${l.email}`).includes(terme);
    });
  }, [lignes, recherche, statut, entreprise]);

  const filtreActif = recherche.trim() !== '' || statut !== 'tous' || entreprise !== 'toutes';

  function toutEffacer() {
    setRecherche('');
    setStatut('tous');
    setEntreprise('toutes');
  }

  return (
    <>
      <div className="filtres">
        <div className="recherche recherche-large">
          <span className="material-symbols-rounded" aria-hidden="true">
            search
          </span>
          <input
            className="recherche-champ"
            type="search"
            value={recherche}
            onChange={(e) => setRecherche(e.target.value)}
            placeholder="Rechercher un nom, une entreprise, une fonction…"
            aria-label="Rechercher un contact"
          />
        </div>

        <label className="filtre">
          <span className="filtre-libelle">Statut</span>
          <select
            className="filtre-champ"
            value={statut}
            onChange={(e) => setStatut(e.target.value)}
          >
            <option value="tous">Tous</option>
            {statuts.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </label>

        <label className="filtre">
          <span className="filtre-libelle">Entreprise</span>
          <select
            className="filtre-champ"
            value={entreprise}
            onChange={(e) => setEntreprise(e.target.value)}
          >
            <option value="toutes">Toutes</option>
            {entreprises.map((e) => (
              <option key={e.id} value={e.id}>
                {e.nom}
              </option>
            ))}
          </select>
        </label>

        <span className="filtres-decompte">
          {resultats.length} sur {lignes.length}
        </span>
      </div>

      {resultats.length === 0 ? (
        <div className="etat-vide">
          <span className="material-symbols-rounded etat-vide-icone" aria-hidden="true">
            search_off
          </span>
          <p className="etat-vide-titre">Aucun contact ne correspond</p>
          <p className="etat-vide-texte">
            Essayez un autre nom, ou élargissez les filtres Statut et Entreprise.
          </p>
          <button type="button" className="bouton-discret" onClick={toutEffacer}>
            Effacer la recherche et les filtres
          </button>
        </div>
      ) : (
        <div className="tableau-cadre">
          <table className="tableau">
            <thead>
              <tr>
                <th scope="col">Nom</th>
                <th scope="col">Entreprise</th>
                <th scope="col">Fonction</th>
                <th scope="col">Email</th>
                <th scope="col">Statut</th>
                <th scope="col">Dernière activité</th>
              </tr>
            </thead>
            <tbody>
              {resultats.map((l) => (
                <tr key={l.id} className="tableau-ligne">
                  <td>
                    <Link href={`/contacts/${l.id}`} className="tableau-lien">
                      {l.nom}
                    </Link>
                  </td>
                  <td>{l.entreprise}</td>
                  <td className="cellule-discrete">{l.fonction}</td>
                  <td className="cellule-discrete">{l.email}</td>
                  <td>
                    <span className={classesStatut[l.statut]}>{l.statut}</span>
                  </td>
                  <td className="cellule-discrete">{l.derniereActivite}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {filtreActif && resultats.length > 0 && (
        <p className="filtres-rappel">
          Filtres actifs —{' '}
          <button type="button" className="lien-bouton" onClick={toutEffacer}>
            tout afficher
          </button>
        </p>
      )}
    </>
  );
}
