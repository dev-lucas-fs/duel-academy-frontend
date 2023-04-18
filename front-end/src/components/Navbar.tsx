import { Link, useNavigate } from "react-router-dom";
import Container from "./Container";
import { useEffect, useState } from "react";


export default function Navbar() {
    const [toggleMenu, setToggleMenu] = useState({ show: false, path: "" })
    const navigate = useNavigate()
    function navigateTo(path: string) {
        setToggleMenu(toggleMenu => ({ show: false, path }))
    }

    function toggleModal() {
        setToggleMenu(toggleMenu => ({ show: !toggleMenu.show, path: "" }))
    }

    useEffect(() => {
        navigate(toggleMenu.path)
    }, [toggleMenu])

    return (
        <nav className="navbar">
            <Container>
                <div className="logo">
                    <span className="material-icons logo__icon">change_history</span>
                    <span className="logo__text">TG GUIDE</span>
                </div>
                <span className="material-icons navbar__menu" onClick={toggleModal}>menu</span>
            </Container>

            <div className={"navbar__menu__container " + (!toggleMenu.show ? "navbar__menu__container__close" : "")}>
                <div className="mask" onClick={toggleModal}></div>

                <div className="options-container">

                    <h1>Menu</h1>

                    <ul>
                        <li onClick={() => navigateTo("/sign-in")}>
                            <span className="material-icons">person</span>
                                Login
                        </li>
                        <li onClick={() => navigateTo("/")}>
                            <span className="material-icons">style</span>
                                Cards
                        </li>
                        <li onClick={() => navigateTo("/deck-builder")}>
                            <span className="material-icons">construction</span>
                                Deck Builder
                        </li>
                        <li onClick={() => navigateTo("/my-decks")}>
                            <span className="material-icons">dashboard</span>
                                My Deck
                        </li>
                    </ul>
                </div>

            </div>
        </nav>
    )
}