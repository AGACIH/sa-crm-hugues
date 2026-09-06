import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import './globals.css';
import MenuLateral from '../components/MenuLateral';
import BarreHaut from '../components/BarreHaut';
import { compteursMenu } from '../lib/indicateurs';

export const metadata: Metadata = {
  title: 'Sa CRM — Espace commercial',
  description: 'CRM de démonstration construit pendant l’atelier Sa CRM.',
};

const entrees = [
  { href: '/', intitule: 'Accueil', icone: 'dashboard' },
  { href: '/contacts', intitule: 'Contacts', icone: 'group', compteur: compteursMenu.contacts },
  { href: '/entreprises', intitule: 'Entreprises', icone: 'apartment', compteur: compteursMenu.entreprises },
  { href: '/opportunites', intitule: 'Opportunités', icone: 'work', compteur: compteursMenu.opportunites },
  { href: '/taches', intitule: 'Tâches', icone: 'task_alt', compteur: compteursMenu.taches, alerte: true },
];

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="fr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@500;600;700;800&family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@20..48,400,0..1,0&display=swap"
        />
      </head>
      <body>
        <div className="appli">
          <MenuLateral entrees={entrees} />
          <div className="zone-principale">
            <BarreHaut notifications={compteursMenu.taches + 1} />
            <main className="contenu">{children}</main>
          </div>
        </div>
      </body>
    </html>
  );
}
