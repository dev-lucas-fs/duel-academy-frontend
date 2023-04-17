import Navbar from "./Navbar"
import Container from "./Container"


interface Props extends React.HTMLAttributes<HTMLElement> {
    title?: string
}

export default function Layout({ title, children } : Props) {

    return (
        <div className="layout">
            <Navbar />
            <Container className="layout__container">
                <div className="sponsor">
                    <img src={"https://i.ibb.co/LrMNxQ9/tag-force-3-bg.jpg"} alt="" />
                    <div className="mask">
                        Get Your Game On! Let’s play Yu-Gi-Oh Tag Force 3
                    </div>
                </div>

                <h1 className="layout__title">
                    { title }
                </h1>

                <div className="layout__content">
                    { children }
                </div>
            </Container>
        </div>
    )
}