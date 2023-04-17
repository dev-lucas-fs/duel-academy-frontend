import api from "./api"


export type getCardsType = {
    id: number,
    img: string
}

export async function getCards(name?: string) {
    name = name ? `?name=${name}` : ""

    const { data } = await api.get(`/card${name}`)
    return data
}

export async function getCardById(id: number) {
    const { data } = await api.get(`/card/${id}`)
    return data
}