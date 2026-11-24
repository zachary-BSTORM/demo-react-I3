import { useState } from "react";


export default function Container () {

    const [cards , setCards] = useState([])
    const [cardClicked , setCardClicked] = useState([
        {
            id : 1,
            name : ""
        }
    ])

    const cardCicked = (id) => {
        setCardClicked((prev) => prev.map((e) => e.id == id ? ({name : "" }) : e))
        verification()
    }

    const generate = () => {

    }

    const verification = () => {
        if ( cardCicked[0].name === cardCicked[1]){

        }else {
            resetCard()
        }
    }

    const resetCard = () => {
        cards.forEach((c) => c.visible = false )
    }

}


function ListCard (listCard,clicked) {

    return(
        {listCard.map((e) => <Card Card={e/>)}
    )
}

function Card (Card,clicked) {

    return(
        <div>

        </div>
    )
}