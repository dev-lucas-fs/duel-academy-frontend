import useCardModal from "../hooks/useCardModal"

interface CardProps extends React.HTMLAttributes<HTMLElement> {
    url: string,
    cardId: number
}

export default function Card(props: CardProps) {

    const { modal, handleCardModal } = useCardModal(props.cardId)

    return (
        <>
            <div className="card" onClick={handleCardModal}>
                <img src={props.url} alt="Yu-Gi-Oh! Card Art" />
            </div>
            {
                modal
            }
        </>
    )
}