import { useState } from "react";
import CardModal from "../components/CardModal";


export default function useCardModal(cardId: number) {
    const [modal, setModal] = useState({ show: false, cardId: cardId})
    async function handleCardModal() {
        setModal(() => ({ show: !modal.show, cardId: cardId}))
    }

    return { handleCardModal, modal: <CardModal modalState={[modal, setModal]} /> }
}