import Puce from './Puce';

interface Props {
  libelle: string;
  icone: string;
  valeur: string;
  tendance?: { texte: string; ton: 'hausse' | 'alerte' | 'neutre' };
  contexte: string;
}

export default function CarteIndicateur({ libelle, icone, valeur, tendance, contexte }: Props) {
  return (
    <article className="indicateur">
      <span className="indicateur-libelle">
        <span className="material-symbols-rounded" aria-hidden="true">
          {icone}
        </span>
        {libelle}
      </span>

      <div className="indicateur-ligne">
        <span className="indicateur-valeur">{valeur}</span>
        {tendance && <Puce ton={tendance.ton}>{tendance.texte}</Puce>}
      </div>

      <span className="indicateur-contexte">{contexte}</span>
    </article>
  );
}
