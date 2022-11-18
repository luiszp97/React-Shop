import React from "react";
import "../styles/priceItem.scss";

const PriceItem = (props)=>{
    return(
        <div>
            <p className="price">{props.price}</p>
            <p className="description">{props.description}</p>
        </div>
    )
};

export {PriceItem}