import { useState } from "react";


// Implémenter un compteur 
export default function Compteur() {
    // state valeur qui change grace au DOM virtuel
    const [value , setValue] = useState(0)

    // incrementer : Sans conditions
    const incrementer = () =>{
        setValue((prev) => prev+1)
    }
    
    // décrémenter : pas en dessous de 
    const decrementer = () => {
        if(value > 0){
            setValue((prev) => prev - 1)
        }
    }
    
    // reset : remettre à zéro
    const reset = () => {
        setValue(0)
    }
    
    return(
        <div>
            <p>{value}</p>
            <div>
                <button onClick={() => incrementer()}>+</button>
                <button onClick={() => decrementer()}>-</button>
                <button onClick={() => reset()}>reset</button>
            </div>
        </div>
    )
}