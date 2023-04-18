import { useState } from "react";

export function useToggle(initialState = false) {
    const [toggle, setToggle] = useState(initialState)

    function handleToggle() {
        setToggle((toggle) => !toggle)
    }

    return {
        toggle,
        handleToggle
    }
}