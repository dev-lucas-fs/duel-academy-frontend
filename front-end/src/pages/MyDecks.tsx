import { useEffect, useState } from "react";
import DeckList from "../components/DeckList";
import Input from "../components/Input";
import Layout from "../components/Layout";
import useUserDeck from "../hooks/api/useUserDeck";
import { useNavigate } from "react-router-dom";



export default function MyDeck() {
    const [decks, setDecks] = useState([])
    const decksAPI = useUserDeck()
    const navigate = useNavigate()

    useEffect(() => {
        async function loadDecks() {
            try {
                if(decksAPI.tokenError === "No Token") {
                    alert("You need a account")
                    navigate("/sign-in")
                }

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
                <hr className="hr"/>
                <DeckList decks={decks} />
            </div>
        </Layout>
    )
}