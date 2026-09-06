import type { ReactNode } from 'react';

interface Props {
  titre: string;
  sousTitre?: string;
  extra?: ReactNode;
  lien?: string;
  children: ReactNode;
}

export default function Panneau({ titre, sousTitre, extra, lien, children }: Props) {
  return (
    <section className="panneau">
      <div className="panneau-entete">
        <div>
          <h2 className="panneau-titre">{titre}</h2>
          {sousTitre && <p className="panneau-sous-titre">{sousTitre}</p>}
        </div>
        {extra}
        {lien && <span className="panneau-lien">{lien}</span>}
      </div>
      <div className="panneau-corps">{children}</div>
    </section>
  );
}
