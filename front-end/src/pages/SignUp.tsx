import Layout from "../components/Layout";
import Input from "../components/Input";
import Button from "../components/Button";
import useSignUp from "../hooks/api/useSignUp";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";



export default function SignUp() {
    const redirect = useNavigate()

    const [form, setForm] = useState({
        username: "",
        email: "",
        password: ""
    })
    const signAPI = useSignUp()

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        
        try {
            const response = await signAPI.signUp(form)
            redirect("/sign-in")
        } catch(err) {
            alert("Ocorreu algum erro")
            console.log(err)
        }
        
    }
    return (
        <Layout title="Sign Up">
            <hr className="hr" />
            <div className="sign-up-page">
                <form onSubmit={handleSubmit}>
                    <Input icon="person" placeholder="Username" name="username" value={form.username} onChange={e => setForm(() => ({...form, ...{ username: e.target.value }}))}/>
                    <Input icon="email" placeholder="Email" name="email" value={form.email} onChange={e => setForm(() => ({...form, ...{ email: e.target.value }}))}/>
                    <Input type="password" icon="password" placeholder="Password" name="password" value={form.password} onChange={e => setForm(() => ({...form, ...{ password: e.target.value }}))}/>
                    <div className="container-button">
                        <Button>
                            Sign Up
                        </Button>
                    </div>
                </form>
                <Link to={"/sign-in"}>Already have a account?</Link>
            </div>
        </Layout>
    )
}