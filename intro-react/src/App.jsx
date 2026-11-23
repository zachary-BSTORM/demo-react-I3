import { useState } from "react";


function App(){
const [value , setValue] = useState(0)


function increment(){
  setValue((v) => v + 1)
}


  return (
      <>
      <div>
        <h1 style={{backgroundColor:"red"}}>React intro</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime dignissimos, minus culpa, labore quisquam nam voluptatibus magni omnis consectetur sint ullam praesentium illum nesciunt repellat in! Deleniti ipsa distinctio itaque.</p>
      </div>

      <div>
        <h2>{value}</h2>
        <button onClick={() => increment()}>+</button>
      </div>
      
      </>
  )
}


export default App