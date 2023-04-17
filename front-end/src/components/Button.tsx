import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export default function Button(props: InputProps) {
    return (
        <button className="button">
            { props.children }
        </button>
    )
}