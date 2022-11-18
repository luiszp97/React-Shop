import React from "react";
import { OrderCard } from "../container/OrderCard";
import { ShoppingCard } from "../container/ShoppingCard";
import "../styles/myOrder.scss"

const MyOrder = ()=> {
    return(
        <div className="my-order"> 
        <div className="my-order-container">
            <h1 className="title">My order</h1>
            <div className="my-order-content">
                <OrderCard/>
            </div>
            <ShoppingCard/>
            <ShoppingCard/>
            <ShoppingCard/>
            <ShoppingCard/>
        </div>
    </div>
    )
}

export {MyOrder}