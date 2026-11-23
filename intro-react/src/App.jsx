import { useState } from "react";





function App(){
const [value , setValue] = useState(0)
const [visibility , setVisibility] = useState(false)

function increment(){
  setValue((v) => v + 1)
}

function toggleVisibility() {

  setVisibility(!visibility)
}



  return (
      <>

   
      <div className="bg-lightgrey">
          <div>
          <h1 style={{backgroundColor:"red"}}>React intro</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime dignissimos, minus culpa, labore quisquam nam voluptatibus magni omnis consectetur sint ullam praesentium illum nesciunt repellat in! Deleniti ipsa distinctio itaque.</p>
        </div>
        <h2>{value}</h2>
        <button onClick={() => increment()}>+</button>
      </div>

      <div>
        <button onClick={() => toggleVisibility()}></button>
        {visibility ? <Card/> : null}
      </div>

      </>
  )
}

function Card(){

    return(
        <>
          <div>
            <h2>titre </h2>
            <img src="./assets/react.svg" alt="image" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In deserunt eaque soluta vel magnam quaerat, aperiam similique assumenda voluptate veritatis delectus maxime exercitationem repellat blanditiis facere eum odit! Deleniti, neque.</p>
          </div>
        </>
    )

}


export default App