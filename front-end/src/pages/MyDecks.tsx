import { useEffect, useState } from "react";
import DeckList from "../components/DeckList";
import Input from "../components/Input";
import Layout from "../components/Layout";
import useUserDeck from "../hooks/api/useUserDeck";



export default function MyDeck() {
    const [decks, setDecks] = useState([])
    const decksAPI = useUserDeck()

    useEffect(() => {
        async function loadDecks() {
            try {
                const response = await decksAPI.userDeck()
                setDecks(() => response)
            } catch(err) {
                console.log(err)
            }
        }

        loadDecks()
    }, [])
    
    return (
        <Layout title="My Decks">
            <div className="my-deck-page">
                <Input placeholder="Search by deck name"/>
                <hr className="hr"/>
                <DeckList decks={decks} />
            </div>
        </Layout>
    )
}