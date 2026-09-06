export default function BarreHaut({ notifications }: { notifications: number }) {
  return (
    <header className="barre-haut">
      <div className="recherche">
        <span className="material-symbols-rounded" aria-hidden="true">
          search
        </span>
        <input
          className="recherche-champ"
          type="search"
          placeholder="Rechercher un contact, une société, une opportunité…"
          aria-label="Recherche globale"
        />
      </div>

      <div className="barre-haut-actions">
        <button type="button" className="bouton-principal">
          <span className="material-symbols-rounded" aria-hidden="true">
            add
          </span>
          <span className="bouton-principal-libelle">Créer</span>
        </button>

        <span className="cloche">
          <span className="material-symbols-rounded" aria-hidden="true">
            notifications
          </span>
          <span className="cloche-pastille">{notifications}</span>
        </span>

        <span className="avatar">HL</span>
      </div>
    </header>
  );
}
