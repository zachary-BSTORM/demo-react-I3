
// le parent contient les car et les transmets à un enfant 
// chaque vehicule est affiché avec une instance du composant
// on transmet le vehicule à l'enfant en une fois
// bonus : le parent possède une liste de style et peut les transmettre à l'enfant
export function ExoCarProps() {

    let carList = [
        {
           marque : "",
            image : "",
            couleur : "",
            année : "",
            prix : "" ,
            description : "" 
        }
    ]

    let styleCar = [
        {
            backgroundColor : "red"
        }
    ]

    return(
        <>
        
            <child  car={carList[0]} />
        </>
    )
    
}