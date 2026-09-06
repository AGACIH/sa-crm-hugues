'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface Entree {
  href: string;
  intitule: string;
  icone: string;
  compteur?: number;
  alerte?: boolean;
}

export default function MenuLateral({ entrees }: { entrees: Entree[] }) {
  const chemin = usePathname();

  return (
    <nav className="menu" aria-label="Navigation principale">
      <div className="menu-marque">
        <span className="menu-logo">Sa</span>
        <span>
          <span className="menu-marque-nom">CRM</span>
          <br />
          <span className="menu-marque-sous">Espace commercial</span>
        </span>
      </div>

      <span className="menu-section">Pilotage</span>

      <ul className="menu-liste">
        {entrees.map((e) => {
          const actif = chemin === e.href;
          return (
            <li key={e.href}>
              <Link
                href={e.href}
                className="menu-lien"
                aria-current={actif ? 'page' : undefined}
              >
                <span className="material-symbols-rounded" aria-hidden="true">
                  {e.icone}
                </span>
                <span className="menu-lien-intitule">{e.intitule}</span>
                {e.compteur !== undefined && (
                  <span
                    className={
                      e.alerte && !actif ? 'menu-compteur menu-compteur-alerte' : 'menu-compteur'
                    }
                  >
                    {e.compteur}
                  </span>
                )}
              </Link>
            </li>
          );
        })}
      </ul>

      <div className="menu-bas">
        <Link href="/" className="menu-lien">
          <span className="material-symbols-rounded" aria-hidden="true">
            settings
          </span>
          <span className="menu-lien-intitule">Paramètres</span>
        </Link>
        <div className="menu-utilisateur">
          <span className="avatar avatar-grand">HL</span>
          <span>
            <span className="menu-utilisateur-nom">Hugues Laine</span>
            <br />
            <span className="menu-utilisateur-role">Responsable commercial</span>
          </span>
        </div>
      </div>
    </nav>
  );
}
