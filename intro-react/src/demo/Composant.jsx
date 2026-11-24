import Header from "../components/Header";

export default function ComponentDemo() {

  return (

    <div className="card">

      <h2>React fonctionne avec un système de composant :</h2>
      
      <p>Pour créer un composant :</p>
      
      <ul>

        <li>
          <p>Dans un nouveau fichier ou en dehors de la fonction qui l'affiche implémenter une fonction qui retourne du jsx</p>
        <pre><code>
          import &#123; useState &#125; from "react";
          import Header from './../components/Header';

          export default function  StateDemo() &#123;

          return ()

          &#125;

        </code></pre>
        </li>
        <li>
          <p>Dans un composant il est possible d'appeler un autre composant </p>
        <pre><code>
          import Header from './../components/Header';

          export default function  Homepage() &#123;

          return (
            < Header />
          )

          &#125;

        </code></pre>
        </li>
      </ul>
      <h2>Exemple</h2>

      <Header />
      
    </div>
  )
}