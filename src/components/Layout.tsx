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
                    <img src={"https://static1.cbrimages.com/wordpress/wp-content/uploads/2022/07/maxresdefaultjpg.jpg"} alt="" />
                    <div className="mask">
                        Get Your Game On! Let’s play Yu-Gi-Oh Tag Force
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