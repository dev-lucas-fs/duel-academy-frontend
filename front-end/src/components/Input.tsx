import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    icon?: string
}

export default function Input({ onChange, value, placeholder, icon = "search", name = "" }: InputProps) {
    return (
        <div className="input">
            <span className="material-icons">{icon}</span>
            <input onChange={onChange} value={value} type="text" placeholder={placeholder} name={name}/>
        </div>
    )
}