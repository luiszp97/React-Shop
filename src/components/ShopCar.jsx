import React from "react";
import { useLocalStorage } from "../Hook/useLocalStorage";


import "@styles/shopCar.scss"
import buttonAddCard from "@icons/bt_add_to_cart.svg"

const ShopCar = (props) => {
   const {
        addToCar,
        } = useLocalStorage()

   return(
        <figure>
            <img src={buttonAddCard} alt="car" onClick={()=>addToCar(props.id)} />
        </figure>
    )
}

export {ShopCar};