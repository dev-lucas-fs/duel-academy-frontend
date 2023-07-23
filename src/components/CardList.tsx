import { useEffect, useState } from "react";
import { styled } from "styled-components"
import { useToggle } from "../hooks/useToggle";

const card = {
    "id": 34541863, 
    "name": "\"A\" Cell Breeding Device", 
    "desc": "During each of your Standby Phases, put 1 A-Counter on 1 face-up monster your opponent controls.",
    "image_url": "https://images.ygoprodeck.com/images/cards/34541863.jpg"
}

const data = Array.from({ length: 10 }, (v, i) => ({...card, ...{ id: card.id + i}}));

export default function CardList({ cardState, name })
{
    const [card, setCard] = cardState;
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(() => true);
        const timeoutId = setTimeout(() => {
            setLoading(() => false);
        }, 500);

        return () => clearTimeout(timeoutId)
    }, [name]);

    return (
        <Wrapper>
            {
                loading 
                ? Array.from({ length: 4 },(v, i) => <div key={i + 1} className="card card-loading"></div>)
                : data.map(({ id, image_url }, i) => <img key={id + i} className={`card ${id == card ? 'select' : ''}`} src={image_url} onClick={() => setCard(() => id)}/>)                   
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
        aspect-ratio: 6/9;
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

    .select {
        border-color: red;
    }
`;