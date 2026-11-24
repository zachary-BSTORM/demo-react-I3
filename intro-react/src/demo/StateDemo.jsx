import StateDemo from "../components/StateDemo";

export default function StateComponentDemo() {

  return (
    <div>
      <h2>useState : changer une valeur pendant l'execution</h2>
      <p>Il est possible de modifier une valeur afficher en utilisant le hook</p>
      <ul>
        <li><p><span>useState()</span> importé de <span>import &#123; useState &#125; from "react";</span></p></li>
        <li><p>Ensuite le déclarer dans le composant : <span>const [value , setValue] = usestate(valeur par défaut)</span></p></li>
      </ul>
      <h2>Exemple</h2>
      <StateDemo />
    </div>
  )
}