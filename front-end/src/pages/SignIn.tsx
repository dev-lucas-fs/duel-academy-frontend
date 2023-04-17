import Layout from "../components/Layout";
import Input from "../components/Input";
import Button from "../components/Button";
import useSignIn from "../hooks/api/useSignIn";
import { useState } from "react";
import useToken from "../hooks/useToken";
import { Link, useNavigate } from "react-router-dom";



export default function SignIn() {
    const redirect = useNavigate()

    const [form, setForm] = useState({
        email: "lucas1@gmail.com",
        password: "123456"
    })
    const signAPI = useSignIn()
    const token = useToken()

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        
        try {
            const response = await signAPI.signIn(form)
            token.saveToken(response.token)
            redirect("/")
        } catch(err) {
            console.log(err)
        }
        
    }

    return (
        <Layout title="Sign In">
            <hr className="hr" />
            <div className="sign-in-page">
                <form onSubmit={handleSubmit}>
                    <Input icon="email" placeholder="Email" value={form.email} onChange={e => setForm(() => ({...form, ...{ email: e.target.value }}))}/>
                    <Input icon="password" placeholder="Password" value={form.password} onChange={e => setForm(() => ({...form, ...{ password: e.target.value }}))}/>
                    <div className="container-button">
                        <Button>
                            Sign In
                        </Button>
                    </div>
                </form>
                <Link to={"/sign-up"}>Create a account</Link>
            </div>
        </Layout>
    )
}