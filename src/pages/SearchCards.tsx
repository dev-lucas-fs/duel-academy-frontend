import { styled } from "styled-components";
import Navbar from "../components/Navbar";
import { useEffect, useState } from "react";
import CardList from "../components/CardList";
import Input from "../components/Input";
import CardInfoModal from "../components/Modal/CardInfoModal";

export const defaultCard = {
    "id": -1, 
    "name": "\"A\" Cell Breeding Device", 
    "desc": "During each of your Standby Phases, put 1 A-Counter on 1 face-up monster your opponent controls.",
    "image_url": "https://images.ygoprodeck.com/images/cards/34541863.jpg",
    "packs": [
        {
            "name": "Anti Effect",
            "image_url": "https://ms.yugipedia.com//3/3f/Anti_Effect-Booster-GX02-Localized.png",
            "rarity": "UR",
            "desc": "Players can unlock this pack by having at least 80% of the cards from First Effect Monster, Step Up Spell・Trap and Step Up fusion."
        }
    ]
}


export default function SearchCards()
{
    const [name, setName] = useState("");
    const [selectedCard, setSelectedCard] = useState(defaultCard);
    const [cards, setCards] = useState([]);
    const [modalState, setModalState] = useState(true);
    

    return (
        <Wrapper>
            <Navbar />

            <div className="row">
                <div className="search">
                    <h1>Procurar cartas</h1>
                    <Input placeholder="Procure pelo nome" value={name} onChange={(e) => setName( () => e.target.value )} />
                    <hr />
                    <CardList showModal={() => setModalState(!modalState)} selectedCardState={[selectedCard, setSelectedCard]} cardsState={[cards, setCards]} name={name}/>
                </div>
                <div className="info">
                    
                </div>
                <CardInfoModal card={selectedCard} modalState={[modalState, setModalState]}/>
            </div>

        </Wrapper>
    );
}

const Wrapper = styled.div`
    width: 100%;
    min-height: 100vh;
    background-color: ${props => props.theme.primary};
 
    .row {
        display: flex;
        margin: 0 auto;
        padding: 20px;
        width: 100%;
        max-width: 900px;
        .search {
            width: 100%;
            display: flex;
            flex-direction: column;
            gap: 15px;

            h1 {
                font-size: 2.2em;
                font-weight: bold;
                color: ${props => props.theme.white};
            }

            hr {
                border: 1px solid ${props => props.theme.tertiary};
                width: 100%;
            }
        }

        @media (max-width: 600px) {
            .info {
                display: none;
            }
        }
    }

`

