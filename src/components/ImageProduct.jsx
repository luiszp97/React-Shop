import React from "react";

const ImageProduct = (props)=>{
    return(
        <img 
            src={`${props.url}`}
            alt="" 
            className={props.className}
            onClick = {()=>location.pathname = `/product/${props.id}`}
            />
    )
};

export {ImageProduct}