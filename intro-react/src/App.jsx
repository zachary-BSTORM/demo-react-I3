import ComponentDemo from "./demo/Composant";
import Intro from "./demo/Intro";
import PropsDemo from "./demo/PropsDemo";
import StateComponentDemo from "./demo/StateDemo";
import Compteur from "./exo/Compteur";
import  ExoCarProps  from './exo/ExoProps';


function App(){

    return (
        <>

        <div className="card">
          <h2>Demonstration</h2>

         <Intro/>

          <ComponentDemo/>

          <StateComponentDemo/>

            <PropsDemo/>
          </div>

          <div className="card">
            <h2>Exercices</h2>

            <Compteur/>

            <ExoCarProps />
          </div>

        </>
    )
}


export default App

