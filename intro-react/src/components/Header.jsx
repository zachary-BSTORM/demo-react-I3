

export default function Header() {

    const styleDiv = {
        backgroundImage: `url('https://cdn.pixabay.com/photo/2022/04/15/07/58/sunset-7133867_1280.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '10vh',
        width: '90%'
    }

    return (
        <div>
            <h2 style={styleDiv}>Titre de la page</h2>
            <p>Bienvenue sur notre site React</p>
        </div>
    )
}


