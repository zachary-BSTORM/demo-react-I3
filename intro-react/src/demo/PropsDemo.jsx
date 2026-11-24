import { useState } from "react";


/* Composant Parent qui transmet l'information*/
export default function PropsDemo() {

    // informations qui descend vers l'enfant
    const [value , setValue] = useState(0)

    // valeur et fonction qui est rendu accessible à l'enfant
    const [valueFromChild,setValueFromChild] = useState("default")

    const increment = () => {
        // prev fait référence à la dernière valeur
        setValue((prev) => prev + 1)
    }
    
    // la fonction s'occupe de la logique dans le parent 
    const updateValue = (username) => {
        setValueFromChild(username)
    }


    return (
        <>
        <div className="card">
        <h1>Props Demo</h1>
        </div>

        {/* Ici lors de l'appel du composant enfant on transmet les éléments*/}
        <Child value={value} action={increment} setUsernameChild={updateValue}/>

        {/* Affichage de la valeur avec l'interpolation */}
        <p>value from child : {valueFromChild}</p>
        </>
    )
}

/* Composant enfant qui reçoit l'information*/
// chaque paramètres qui sera transmis sera un paramètre
function Child({value,action,setUsernameChild}) {

    // déclencher une fonction transmise par un parent sans paramètres
    const actionChild = () => {
        action()
    }


    const [username , setUsername] = useState("test")
    // déclencher une fonction transmise par le parent avec paramètres
    const sendToParent = () => {
        setUsernameChild(username)
        setUsername("")
    }

    return (
        <>
        <div className="card">
            <p>{value}</p>
            <button onClick={() => actionChild()}>+</button>
        </div>

        <div className="card">

            <label>Valeur à envoyer</label>
            {/* l'input est lié à notre valeur avec l'attribut value */}
            {/* onChange : permet d'executer une modification lors d'une modification */}
            {/* event - e  : l'event encapsule la valeur qui peut être accessible au travers de : e.target.value*/}
            <input type="text" value={username} onChange={(e) => setUsername(e.target.value) }/>
            <p>{username}</p>
            
            <button onClick={() => sendToParent() }>envoyer</button>
        </div>
        </>
    )
    
}