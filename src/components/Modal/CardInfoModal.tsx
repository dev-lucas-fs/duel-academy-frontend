import { styled } from "styled-components";
import Modal from "./Modal";





export default function CardInfoModal({ modalState, card })
{
    const { name, description, img, boosters } = card;
    
    return (
        <Modal modalState={modalState}>
            <Wrapper>
                <div className="card-container">
                    <img src={img}/>
                    <div className="text-container">
                        <h2 className="title"> { name } </h2>
                        <p className="desc">
                            { description }
                        </p>
                    </div>
                </div>
                <hr />
                <div className="booster-pack-container">
                    <h2 className="title">BOOSTER PACKS</h2>
                    <ul className="packs">
                        {
                            boosters.map((pack, i) => (
                                <li key={i + 1} className="pack">
                                    <img src={pack.img}/>
                                    <div className="text-container">
                                        <h2 className="title">{ pack.name }</h2>
                                        <p className="desc">
                                            { pack.unlock }
                                        </p>
                                    </div>
                                </li>                             
                            ))
                        }
                    </ul>
                </div>
            </Wrapper>
        </Modal>
    );
}

const Wrapper = styled.div`
    width: 100%;
    max-width: 500px;
    margin: 0 auto;
    border-radius: 5px;
    padding: 20px;
    background-color: ${props => props.theme.white};

    .card-container {
        display: flex;
        
        img {
            width: calc(100% / 3);
            max-width: 120px;
            object-fit: cover;
        }
        gap: 10px;
        padding: 0 0 10px 0;
    }

    hr {
        border-bottom: 2px solid ${props => props.theme.tertiary};
        background-color: transparent;
        outline: transparent;
        border-radius: 5px;
    }

    .text-container {
        display: flex;
        flex-direction: column;
        gap: 5px;
    }

    .title {
        color: ${props => props.theme.primary};
        font-size: 1.6em;
        font-weight: 900;
    }

    .desc {
        color: ${props => props.theme.secondary};
        font-size: 1.4em;
        font-weight: 400;
    }

    .booster-pack-container {
        width: 100%;
        
        .title {
            text-align: center;
            padding: 10px 0;
            font-size: 1.8em;
        }
        
        .packs {
            display: flex;
            flex-direction: column;
            gap: 10px;
        }

        .pack:nth-child(n + 2) {
            border-top: 2px solid ${props => props.theme.tertiary};
            padding-top: 10px;
        }

        .pack {
            display: flex;
            img {
                width: 80px;
            }
            gap: 10px;

            .title {
                font-weight: 600;
                text-align: start;
                padding: 0;
            }
        }

    }

`