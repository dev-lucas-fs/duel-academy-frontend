import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    icon?: string
}

export default function Input({ onChange, value, placeholder, icon = "search", name = "", type = "text" }: InputProps) {
    return (
        <div className="input">
            <span className="material-icons">{icon}</span>
            <input type={type} onChange={onChange} value={value} placeholder={placeholder} name={name}/>
        </div>
    )
}