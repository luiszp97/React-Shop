import React from "react";
import {TotalDateOrder} from "../../components/TotalDateOrder";
import "./orderCard.scss"

const OrderCard = ()=> {
    return(
        <TotalDateOrder
            date = {"09-09-2022"}
            totalOrders = {"6"}
            totalPrice = {"560.00"}
        />
    )
}

export {OrderCard}