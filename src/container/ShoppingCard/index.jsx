import React from "react";
import { ImageProduct } from "../../components/ImageProduct";
import "./shoppingCard.scss"


const ShoppingCard = (props)=> {
    return(
        <div className="shopping-card">
            <figure>
                <ImageProduct
                    url = {"https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"}
                    className = {props.className}
                />
            </figure>
            <p>Bike</p>
            <p>30,00$</p>
        </div>
    )
}

export {ShoppingCard}