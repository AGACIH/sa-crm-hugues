import type { BarreEtape } from '../lib/indicateurs';
import { milliers } from '../lib/format';

export default function GraphiquePipeline({ barres }: { barres: BarreEtape[] }) {
  const maximum = Math.max(...barres.map((b) => b.montant), 1);

  return (
    <div className="graphique">
      {barres.map((b) => (
        <div className="graphique-colonne" key={b.etape}>
          <span className="graphique-valeur">{milliers(b.montant)}€</span>
          <div
            className={
              b.miseEnValeur ? 'graphique-barre graphique-barre-accent' : 'graphique-barre'
            }
            style={{ height: `${Math.round((b.montant / maximum) * 100)}%` }}
            role="img"
            aria-label={`${b.etape} : ${milliers(b.montant)} euros, ${b.nombre} opportunités`}
          />
          <div className="graphique-socle">
            <div className="graphique-etiquette">{b.etape}</div>
            <div className="graphique-decompte">
              {b.nombre} opp.
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
