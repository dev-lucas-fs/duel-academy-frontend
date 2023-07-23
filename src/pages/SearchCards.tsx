import { styled } from "styled-components";
import Navbar from "../components/Navbar";
import { useEffect, useState } from "react";
import CardList from "../components/CardList";
import Input from "../components/Input";




export default function SearchCards()
{
    const [name, setName] = useState();
    const [id, setId] = useState(0)

    
    return (
        <Wrapper>
            <Navbar />

            <div className="row">
                <div className="search">
                    <h1>Procurar cartas</h1>
                    <Input placeholder="Procure pelo nome" value={name} onChange={(e) => setName( () => e.target.value )} />
                    <hr />
                    <CardList cardState={[id, setId]} name={name}/>
                </div>
                <div className="info">

                </div>
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

