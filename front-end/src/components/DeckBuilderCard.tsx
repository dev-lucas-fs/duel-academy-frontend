import { CardType } from "../pages/DeckBuilder";
import Card from "./Card";



interface Props extends React.HTMLAttributes<HTMLElement> {
    addCardOnDeck: () => void,
    removeCardOnDeck: () => void
    card: CardType,
}


export default function DeckBuilderCard({ card, addCardOnDeck, removeCardOnDeck }: Props) {

    const imageLength = ["","https://i.ibb.co/Ry9S3X5/2-cards.webp", "https://i.ibb.co/2yYtzxp/3-cards.webp"]

    return (
        <div className="deck-builder-card">

            <div className="image-container">
                <Card url={card.card.img} cardId={card.card.id}/>
                <img className="image-length" src={imageLength[card.length - 1]} alt="" />
            </div>

            <div className="add-remove-container">

                <button onClick={addCardOnDeck}>
                    <span className="material-icons">add</span>
                </button>
                
                <button onClick={removeCardOnDeck}>
                    <span className="material-icons">remove</span>
                </button>

            </div>

        </div>
    )
}