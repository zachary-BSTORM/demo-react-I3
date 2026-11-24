
// le parent contient les car et les transmets à un enfant 
// chaque vehicule est affiché avec une instance du composant
// on transmet le vehicule à l'enfant en une fois
// bonus : le parent possède une liste de style et peut les transmettre à l'enfant
export default function ExoCarProps() {

    let carList = [
    {
        marque: "Audi A3",
        image: "https://encrypted-tbn3.gstatic.com/licensed-image?q=tbn:ANd9GcSBojvpPpsbEzuBmuc5uUVAOMD5qEYgdHRrzzvsmqjqsPd7HXfGtKTcd7SSe6yUYdPDbXKfAlP2CJJN8Lw",
        couleur: "Gris",
        année: "2024",
        prix: "31 500 €",
        description: "Berline compacte sobre, confortable et bien équipée pour la route comme en ville."
    },
    {
        marque: "Peugeot 208",
        image: "https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcS_Pp8yhxoPaEAdZbi2260O5yGevJ0NshbZJm1OJvt7qOBCIXm9bIGcItg0sRBjmz2SxZGfJU1e0dxkAy0",
        couleur: "Bleu",
        année: "2023",
        prix: "26 900 €",
        description: "Citadine agile, moderne et adaptée aux trajets quotidiens."
    },
    {
        marque: "Renault Kadjar",
        image: "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcSuJdk8vGc-XWAJDMUSWWpH85HK5MwNJVMNyZb6S874Cy4zx_YUNL9ZIOgnTrKJ9GRff8sAnZixKcXiF-g",
        couleur: "Noir",
        année: "2022",
        prix: "21 400 €",
        description: "SUV familial spacieux avec une position de conduite surélevée et un bon volume de coffre."
    },
    {
        marque: "Renault Twingo",
        image: "https://encrypted-tbn3.gstatic.com/licensed-image?q=tbn:ANd9GcSfXMJf7peEzpcwMiJLplx7BmniwDp97ahAQgRE646QUmvWLs6kRVZ6vh5GqqLfxwrDAslkdnQVQvryOXY",
        couleur: "Blanc",
        année: "2023",
        prix: "14 800 €",
        description: "Micro-citadine très maniable avec un petit rayon de braquage, idéale en ville."
    },
    {
        marque: "Peugeot RCZ",
        image: "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcRpAwVflSRa8o2iD1BWLlqPsTUS0fdQzm6UJxFh5hwpWUKnoOjDfL2Xjg-U7r68cBZpEfb4Wtlw04hAr-0",
        couleur: "Rouge",
        année: "2023",
        prix: "34 000 €",
        description: "Coupé sportif au design profilé offrant une conduite dynamique."
    },
    {
        marque: "Volkswagen Golf",
        image: "https://encrypted-tbn3.gstatic.com/licensed-image?q=tbn:ANd9GcRltmWtbjA0H8q5GkRg0ldL_U2-bXUXbTYA3UwoZ_jz24ze2ZBd2-gn6Tzlpo9CX2ND37jfErKRGs9Yzkw",
        couleur: "Gris",
        année: "2024",
        prix: "29 800 €",
        description: "Compacte polyvalente réputée pour son confort et sa tenue de route."
    },
    {
        marque: "Toyota Yaris Cross",
        image: "https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcRx2J2HOtldRWtH11qyuimuT8LVyTWRh7FTgLBFaYESqM5YMwtgV48lvBYUDhNIYAN0MZKKY9jJ4YBkb1I",
        couleur: "Vert",
        année: "2024",
        prix: "27 600 €",
        description: "Petit SUV pratique et économique pour un usage mixte ville et route."
    },
    {
        marque: "BMW Série 3 Touring",
        image: "https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcQ2gJs_JfQ62fC7YfqishOpSGLbh4c3xTYUh_srHWVTWYMRPkUGQGE2r0j3y7Pu6U9s9C_xoHxUX3Ks6tg",
        couleur: "Bleu",
        année: "2023",
        prix: "44 900 €",
        description: "Break routier dynamique combinant châssis équilibré et habitacle soigné."
    },
    {
        marque: "Hyundai Tucson",
        image: "https://encrypted-tbn3.gstatic.com/licensed-image?q=tbn:ANd9GcTuZG05OfmxLrCUleQ0IxC9hIfUdfNYJUslVX9psWpPbCOiqumoTTYPPH0NT2ZMD52JLReaxW0GapiqM1U",
        couleur: "Gris",
        année: "2024",
        prix: "35 200 €",
        description: "SUV familial moderne offrant beaucoup d'espace intérieur et un bon confort."
    },
    {
        marque: "Mazda MX-5",
        image: "https://encrypted-tbn3.gstatic.com/licensed-image?q=tbn:ANd9GcR8FPvRpBc9FjBJWlE7W-SRaHvZ3MflpyNjDcQTUK54FuL6zXiWHTaiFE-dv9cUn-UibU9veTFFGGKD3ME",
        couleur: "Rouge",
        année: "2022",
        prix: "30 400 €",
        description: "Roadster léger pensé pour le plaisir de conduite."
    }
    ];
    
    let styleCar = [
    {
        backgroundColor: "#6c757d",
        color: "#ffffff",
        border: "2px solid #495057",
        borderRadius: "8px",
        padding: "12px"
    },
    {
        backgroundColor: "#2563eb",
        color: "#ffffff",
        border: "2px solid #1d4ed8",
        borderRadius: "8px",
        padding: "12px"
    },
    {
        backgroundColor: "#1f2937",
        color: "#f9fafb",
        border: "2px solid #111827",
        borderRadius: "8px",
        padding: "12px"
    },
    {
        backgroundColor: "#f8fafc",
        color: "#0f172a",
        border: "2px solid #cbd5e1",
        borderRadius: "8px",
        padding: "12px"
    },
    {
        backgroundColor: "red",
        color: "#ffffff",
        border: "2px solid #b91c1c",
        borderRadius: "8px",
        padding: "12px"
    },
    {
        backgroundColor: "#9ca3af",
        color: "#111827",
        border: "2px solid #6b7280",
        borderRadius: "8px",
        padding: "12px"
    },
    {
        backgroundColor: "#16a34a",
        color: "#ffffff",
        border: "2px solid #15803d",
        borderRadius: "8px",
        padding: "12px"
    },
    {
        backgroundColor: "#1e3a8a",
        color: "#ffffff",
        border: "2px solid #172554",
        borderRadius: "8px",
        padding: "12px"
    },
    {
        backgroundColor: "#4b5563",
        color: "#ffffff",
        border: "2px solid #374151",
        borderRadius: "8px",
        padding: "12px"
    },
    {
        backgroundColor: "#dc2626",
        color: "#ffffff",
        border: "2px solid #991b1b",
        borderRadius: "8px",
        padding: "12px"
    }
    ];

    return(
        <>
            <h1>Car</h1>

            
            {
            carList.map((c,index) => 

            <CarCard 
            key={index} 
            car={c} 
            style={styleCar[index]}
            />

            )
            }

        </>
    )
    
}


function CarCard({car,style}) {
    return(
            <li>
                <div style={style}>
                    <h2>marque : {car.marque}</h2>
                    <p>couleur : {car.color}</p>
                    <p>année : {car.annee}</p>
                    <p>prix : {car.prix}</p>
                    <p>{car.description}</p>
                </div>
                <img src={car.image} alt={car.brand} width={'200px'}/>

            </li>
    )
}
