import api from './api';

export async function getCards(name: string) {
    let url = "/cards";

    if(name !== "")
        url += `?name=${name}`

    const response = await api.get(url);
    return response.data;
}
