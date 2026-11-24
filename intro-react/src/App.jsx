import ComponentDemo from "./demo/Composant";
import Intro from "./demo/Intro";
import StateComponentDemo from "./demo/StateDemo";


function App(){

    return (
        <>

        <div className="card">
          <h2>Demonstration</h2>

         <Intro/>

          <ComponentDemo/>

          <StateComponentDemo/>

          </div>

          <div className="card">
            <h2>Exercices</h2>


          </div>

        </>
    )
}


export default App