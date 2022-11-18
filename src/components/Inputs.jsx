import React from "react";
import "../styles/input.scss"

const Input = ({
    type,
    id,
    placeholder,
    secondClass
}) => {
    return(
        <input 
            type={type}
            id= {id}
            placeholder = {placeholder}
            className = {`input ${secondClass ? secondClass : ''}`}
        />
    )
}

export {Input}