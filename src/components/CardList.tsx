import { useEffect, useState } from "react";
import { styled } from "styled-components"
import useCards from "../hooks/Api/useCards";

export default function CardList({ selectedCardState, cardsState, name, showModal })
{
    const [cards, setCards] = cardsState;
    const [selectedCard, setSelectedCard] = selectedCardState;
    const [loading, setLoading] = useState(true);
    const card = useCards()

    async function getCard(name: string)
    {
        try {
            const cards = await card(name);
            setCards(() => cards)
        } catch(err) {
            console.log("request Erro")
            setCards(() => []);
        }

        setLoading(false);
    } 

    useEffect(() => {
        setLoading(true);
        const timeoutId = setTimeout(() => {
            getCard(name);
        }, 1000);

        return () => clearTimeout(timeoutId)
    }, [name]);

    function handleClick(i: number)
    {
        setSelectedCard(() => cards[i])
        showModal();
    }

    return (
        <Wrapper>
            {
                loading 
                ? Array.from({ length: 4 },(v, i) => <div key={i + 1} className="card card-loading"></div>)
                : cards.map(({ id, img }, i: number) => <img key={id} className={`card`} src={img} onClick={() => handleClick(i)}/>)                   
            }
        </Wrapper>
    )
}

const Wrapper = styled.div`
    width: 100%;
    display: flex;
    gap: 10px;
    flex-wrap: wrap;

    .card {
        width: calc((100% - 10px * 3) / 4);
        border: 1px solid transparent;
        cursor: pointer;
        object-fit: cover;
    }

    .card-loading {
        position: relative;
        overflow: hidden;
        background-color: #edecec;
        aspect-ratio: 2/3;
        border-radius: 0;
        &::after {
            position: absolute;
            top: 0;
            right: 0;
            bottom: 0;
            left: 0;
            transform: translateX(-100%);
            background: linear-gradient(90deg, rgba(200, 200, 200, 0) 0, rgba(200, 200, 200, 0.2) 20%, rgba(200, 200, 200, 0.5) 60%, rgba(200, 200, 200, 0));
            animation: shimmer 1s infinite;
            content: '';
        }
    }

    @media (min-width: 500px) {
        .card {
            width: calc((100% - 10px * 4) / 5);
        }
    }

    @media (min-width: 600px) {
        .card {
            width: calc((100% - 10px * 5) / 6);
        }
    }
`;