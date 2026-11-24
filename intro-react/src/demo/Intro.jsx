
export default function Intro() {

  return (
    <div className="card">
      <h1>React</h1>
      <ul>
        <li className="card">
          <p>Création d'un projet React :</p>
          <p>npm <span>create vite@latest</span></p>
        </li>
        <li className="card">
          <p>Installation des dépendances :</p>
          <p>npm <span>install</span> ou npm <span>i</span></p>
        </li>
        <li className="card">
          <p>Lancer le projet :</p>
          <p>npm run<span>dev</span></p>
        </li>
      </ul>
    </div>
  )
}