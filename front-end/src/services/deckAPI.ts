import api from "./api"


export async function saveDeck({ cards, name, token }: { token: string, cards: Array<number>, name: string }) {
    const { data } = await api.post(`/decks`, {
        cards, name 
    }, { headers: {
        "Authorization": `Bearer ${token}`
    } })

    return data
}

export async function getUserDecks(token: string) {
    const { data } = await api.get(`/decks`, { 
        headers: {
        "Authorization": `Bearer ${token}`
    }})

    return data
}

