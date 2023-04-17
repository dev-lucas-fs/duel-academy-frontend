import { useState } from "react"


interface Props extends React.HTMLAttributes<HTMLElement> {
    options: Array<string>,
    defaultText?: string,
    handleSelect: (text: string) => void
}

export default function Select(props: Props) {

    const [open, setOpen] = useState(false)
    const [currentText, setCurrentText] = useState(props.defaultText ? props.defaultText : "Choose a game")

    function handleOpen() {
        setOpen(open => !open)
    }

    function handleCurrentText(text: string) {
        setCurrentText(() => text)
        handleOpen()
        props.handleSelect(text)
    }

    return (
        <div className={"select " + (open ? "select__open" : "")}>
            <div className="currentOption" onClick={handleOpen}>
                <span>{currentText}</span>
                <span className="material-icons">keyboard_arrow_down</span>
            </div>

            <ul className="options">
                {
                    props.options.length > 0 
                    ? (
                        props.options.map((game, i) => (
                            <li className="option" key={i} onClick={() => handleCurrentText(game)}>{ game }</li>        
                        ))
                    )
                    : <li className="option" key={-1} onClick={() => handleCurrentText("Game not found")}>Game not found</li>        
                }
            </ul>
        </div>
    )
}