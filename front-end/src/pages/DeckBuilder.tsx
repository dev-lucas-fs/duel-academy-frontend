import { useEffect, useRef, useState } from "react";
import DeckBuilderCard from "../components/DeckBuilderCard";
import Input from "../components/Input";
import Layout from "../components/Layout";
import Select from "../components/Select";
import useCards from "../hooks/api/useCards";
import { getCardsType } from "../services/cardAPI";
import useSaveDeck from "../hooks/api/useSaveDeck";

export type CardType = {
    card: { name: string, type: string, img: string, id: number },
    length: number
}

const EXTRA_DECK_TYPES = [
    "Fusion",
    "Synchron",
    "XYZ",
]

export default function DeckBuilder() {
    const [deckName, setDeckName] = useState("")
    const [collectionDeckSelect, setCollectionDeckSelect] = useState(0);
    const [decks, setDecks] = useState<Array<Array<CardType>>>([[], [], []])
    const [filter, setFilter] = useState({ name: "" })
    const [disabled, setDisabled] = useState(false)
    const cardsAPI = useCards()
    const saveDeckAPI = useSaveDeck()

    async function saveDeck(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
        const cards = [...decks[1], ...decks[2]].reduce((prev, curr) => {
            for(let i = 0; i < curr.length; i++)
                prev.push(curr.card.id)
            return prev
        }, [])
        try {
            if(deckName.trim() !== "") {
                const response = await saveDeckAPI.saveDeck({ cards, name: deckName })

                if(response !== "No Token")
                    alert("Sucesso")
                else
                    alert("Algo deu errado")
            }
            
        } catch(err) {
            console.log(err)
        }
    }

    function addCardOnDeck({ card, length }: CardType) {
        let targetDeck = decks[1]

        if(EXTRA_DECK_TYPES.includes(card.type))
            targetDeck = decks[2]
        
        if(targetDeck.filter(d => d.card.id === card.id).length === 0)
            targetDeck.push({ card, length })
        
        if(length < 3) 
            targetDeck = targetDeck.map(c => c.card.id === card.id ? {card, length: ++c.length} : c)
        
        setDecks(() => [...decks])      
    }

    function removeCardOnDeck({ card }: CardType) {
        let targetDeck = 1

        if(EXTRA_DECK_TYPES.includes(card.type))
            targetDeck = 2
        
        decks[targetDeck] = decks[targetDeck].map(c => c.card.id === card.id ? {card, length: --c.length} : c).filter(c => c.length !== 0)

        setDecks(() => [...decks])    
    }

    useEffect(() => {
        async function getCards() {
            try {
                const cards = await cardsAPI.cards(filter.name)
                const collection = cards.map(card => ({ card, length: 0 }))
                setDecks((decks) => [collection, decks[1], decks[2]])
            } catch(err) {
                console.log(err)
            }
        }
        getCards()
    }, [filter])

    return (
        <Layout title="Deck Builder">
            <div className="deck-builder">
                <div className="deck-builder__filter">

                    <Input value={filter.name} onChange={e => setFilter(filter => ({...filter, ...{ name: e.target.value }}))} />
                    <Input icon="save" value={deckName} onChange={e => setDeckName(deckName => e.target.value)} placeholder="Deck Name"/>
                    <button disabled={saveDeckAPI.saveDeckLoading} onClick={saveDeck} className="save-button">
                        <span className="material-icons">save</span>
                    </button>

                    <div className="deck-builder__collection-deck">
                        {
                            ["Collection", "Main Deck", "Extra Deck"].map((el, i) => (
                                <div onClick={() => setCollectionDeckSelect(() => i)} className={"collection-deck__option " + (i === collectionDeckSelect ? "selected" : "")}>
                                    { el }
                                </div>
                            ))
                        }
                    </div>

                </div>

                <hr className="hr" />

                <div className="cards-list">
                    {
                       decks[collectionDeckSelect].map((card, i) => (
                            <DeckBuilderCard 
                                card={card}
                                addCardOnDeck={() => addCardOnDeck(card)}
                                removeCardOnDeck={() => removeCardOnDeck(card)}
                            />
                        ))
                    }
                </div>
            </div>
        </Layout>
    )
}