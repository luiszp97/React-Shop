import React from "react";
import "../styles/button.scss"

const Button = (props)=> {
    
    return (
        <button 
            className= {`primary-button ${props.secondClass ? props.secondClass : '' }`}
            onClick={()=> location.pathname = props.pathName}
            type = {`${props.type || "button"}`}
        >
            {props.text}
        </button>
    )
};

export {Button};