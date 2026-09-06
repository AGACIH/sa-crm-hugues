import type { ReactNode } from 'react';

export default function EntetePage({
  titre,
  sousTitre,
  actions,
}: {
  titre: string;
  sousTitre?: string;
  actions?: ReactNode;
}) {
  return (
    <div className="entete">
      <div>
        <h1 className="entete-titre">{titre}</h1>
        {sousTitre && <p className="entete-sous-titre">{sousTitre}</p>}
      </div>
      {actions && <div className="entete-actions">{actions}</div>}
    </div>
  );
}
