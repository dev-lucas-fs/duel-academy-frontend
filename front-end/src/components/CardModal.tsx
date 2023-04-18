import React, { useEffect, useState } from "react"
import Select from "./Select"
import ObtainInfo from "./ObtainInfo"
import useCard from "../hooks/api/useCard"

interface CardModalType extends React.HTMLAttributes<HTMLElement> {
    modalState: any
}

export default function CardModal( props : CardModalType ) {

    const [modalState, setModalState] = props.modalState
    const [cardData, setCardData] = useState<{ img: string, name: string, description: string, boosters: Array<{ name: string, img: string, unlock: string }> }>()
    const cardAPI = useCard()

    useEffect(() => {
        if(modalState.show) {
            const response = cardAPI.card(modalState.cardId)
            response.then((data) => {
                setCardData(() => data)
            })
        }
    }, [modalState])

    function toggleShow() {
        setModalState(() => ({ show: false,  cardId: modalState.cardId}))
    }

    return (
        <div className={"card-modal " + (modalState.show ? "card-modal-show" : "")}>
            <div className="mask" onClick={toggleShow}></div>
            <div className="card-modal__content">
                {
                    cardData && (
                        <>
                            <div className="card-modal__content__card">
                                <img src={cardData.img} alt="" />

                                <h1>{ cardData.name }</h1>

                                <p>{ cardData.description }</p>

                            </div>

                            <div className="howtoobtain__header__container">
                                <div className="howtoobtain__header">
                                    How to obtain
                                </div>
                            </div>

                            <div className="howtoobtain__list">
                                {
                                    cardData.boosters.map(el => (
                                        <ObtainInfo img={el.img} unlock={el.unlock} name={el.name} />
                                    ))
                                }
                            </div>
                        </>
                    )
                }

            </div>
        </div>
    )
}