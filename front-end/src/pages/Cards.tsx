import { useEffect, useState } from "react";
import Card from "../components/Card";
import Input from "../components/Input";
import Layout from "../components/Layout";
import useCards from "../hooks/api/useCards";
import { getCardsType } from "../services/cardAPI";



export default function Cards() {

    const [cardName, setCardName] = useState("")
    const [cards, setCards] = useState<Array<getCardsType>>([])
    const cardsAPI = useCards()

    useEffect(() => {  
        async function getCards() {
            try {
                const cards = await cardsAPI.cards(cardName)
                setCards(() => cards)
            } catch(err) {
                console.log(err)
            }
        }

        getCards()
    }, [cardName])

    return (
        <Layout title="Choose your card">
            
            <div className="cards-page">
                <Input onChange={e => setCardName(() => e.target.value)} value={cardName} placeholder="Search by card name"/>

                <hr className="hr"/>

                <div className="cards-list">
                    {
                        cards.map(card => (
                            <Card url={card.img} cardId={card.id}/>
                        ))
                    }
                </div>

            </div>

        </Layout>
    )
}