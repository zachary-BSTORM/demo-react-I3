import Header from "../components/Header";

export default function ComponentDemo() {

  return (
    <div className="card">
      <h2>React fonctionne avec un système de composant :</h2>
      <p>Pour créer un composant :</p>
      <ul>
        <li>Dans un nouveau fichier ou en dehors de la fonction qui l'affiche implémenter une fonction qui retourne du jsx</li>
        <pre><code>
          import &#123; useState &#125; from "react";
          import Header from './../components/Header';

          export default function  StateDemo() &#123;

          return ()

          &#125;

        </code></pre>
      </ul>
      <h2>Exemple</h2>
      <Header />
    </div>
  )
}