import api from "./api"


export async function signIn({ email, password }: { email: string, password: string }) {
    const { data } = await api.post(`/auth/sign-in`, {
        email, password 
    })
    return data
}

export async function signUp({ username, email, password }: { username: string, email: string, password: string }) {
    const { data } = await api.post(`/auth/sign-up`, {
        email, password, username
    })
    return data
}

