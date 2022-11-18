import React from "react";

const TotalDateOrder = (props)=>{
    return(
        <div className="order">
            <p>
                <span>{props.date}</span>
                <span>{props.totalOrders} articles</span>
            </p>
            <p>${props.totalPrice}</p>
        </div>
    )
};

export {TotalDateOrder};