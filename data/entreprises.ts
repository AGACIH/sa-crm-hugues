import type { Entreprise } from './types.ts';

export const entreprises: Entreprise[] = [
  { id: 'e1',  nom: 'Mercure Assurances',   secteur: 'Assurance',        ville: 'Lyon',        effectif: 480, siteWeb: 'mercure-assurances.fr' },
  { id: 'e2',  nom: 'Groupe Vallier',       secteur: 'BTP',              ville: 'Bordeaux',    effectif: 1250, siteWeb: 'groupe-vallier.fr' },
  { id: 'e3',  nom: 'Helio Énergies',       secteur: 'Énergie',          ville: 'Nantes',      effectif: 210, siteWeb: 'helio-energies.fr' },
  { id: 'e4',  nom: 'Vela Santé',           secteur: 'Santé',            ville: 'Montpellier', effectif: 95,  siteWeb: 'vela-sante.fr' },
  { id: 'e5',  nom: 'Kanto Studio',         secteur: 'Design',           ville: 'Paris',       effectif: 34,  siteWeb: 'kanto-studio.fr' },
  { id: 'e6',  nom: 'Atelier Nomade',       secteur: 'Mobilier',         ville: 'Lille',       effectif: 58,  siteWeb: 'atelier-nomade.fr' },
  { id: 'e7',  nom: 'Brassac Logistique',   secteur: 'Transport',        ville: 'Toulouse',    effectif: 620, siteWeb: 'brassac-logistique.fr' },
  { id: 'e8',  nom: 'Novaterre Agro',       secteur: 'Agroalimentaire',  ville: 'Rennes',      effectif: 340, siteWeb: 'novaterre-agro.fr' },
  { id: 'e9',  nom: 'Lumen Formation',      secteur: 'Formation',        ville: 'Strasbourg',  effectif: 76,  siteWeb: 'lumen-formation.fr' },
  { id: 'e10', nom: 'Cap Horizon Voyages',  secteur: 'Tourisme',         ville: 'Marseille',   effectif: 145, siteWeb: 'cap-horizon.fr' },
];
