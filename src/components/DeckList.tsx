import Deck from "./Deck"




type DeckListTypes = {
    decks: Array<{
        id: number
        username: string,
        name: string,
        games: Array<string>,
        cards: Array<{
            img: string,
            id: number,
            type: string
        }>
    }>
} & React.HTMLAttributes<HTMLInputElement>



export default function DeckList(props: DeckListTypes) {
    return (
        <div className="deck-list">
            {
                props.decks.map(deck => (
                    <Deck games={deck.games} deckId={deck.id} username={deck.username} name={deck.name} cards={deck.cards}/>
                ))
            }
        </div>
    )
}
