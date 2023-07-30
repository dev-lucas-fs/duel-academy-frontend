import { getCards } from "../../services/cardApi"

export default function useCards()
{
    return (name?: string) => getCards(name)
}