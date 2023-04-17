import Card from "./Card";


type DeckTypes = {
    deckId: number
    username: string,
    name: string,
    games: Array<string>,
    cards: Array<{
        img: string,
        id: number,
        type: string
    }>
} & React.HTMLAttributes<HTMLInputElement>

const TagForceImgs = [
    "https://i.ibb.co/h7XwNDR/TFSP-Video-Game-JP.webp"
]

export default function Deck(props: DeckTypes) {
    return (
        <div className="community-deck">

            <div className="community-deck__info">
                <div className="community-deck__avatar-container">
                    <img src="https://i.ibb.co/QCjYzcv/marik.png" alt="" />
                </div>

                <h1 className="community-deck__title">{ props.name }</h1>

                <div className="community-deck__games">
                    <img src={TagForceImgs[0]} alt="" />
                </div>

                <h2 className="community-deck__username">{ props.username }</h2>

                <span className="material-icons community-deck__expand">expand</span>
            </div>
            
            <div className={"community-deck__expand-deck"}>
                <div className="community-deck__expand-deck__container">
                    <div className="community-deck__expand-deck__first-row">
                        {
                            props.cards.map((card, i) => (
                                <Card cardId={card.id} url={card.img} />
                            ))
                        }
                    </div>
                </div>
            </div>

        </div>
    )
}