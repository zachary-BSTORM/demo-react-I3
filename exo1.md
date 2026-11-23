#### Création d'un composant

- crée un composant avec votre nom prenom et ville en utilisant l'interpolation : { }

- ajouter ( un peu ) de style inline

function App(){
    let nom = "boualem"
    let prenom = "zachary"
    let ville = "nivelles"

    return(
        <>
            <h3 style={{backgroundColor:"red"}}>Bonjour {nom} {prenom} {ville}</h3>

        </>
    )


}