import React from "react";
import {PriceItem} from "../components/PriceItem";
import {ImageProduct} from "../components/ImageProduct";
import {ShopCar} from "../components/ShopCar"
import "../styles/productCard.scss"


const ProductCard = (props)=>{
  
    return(
        <div className="product-card">
            
                <ImageProduct
                    url = {props.url}
                    className = {props.className}
                    id = {props.id}
                    
                />
                <div className="product-info">
                    <PriceItem
                        price={`${props.price}$`}
                        description ={props.description}
                       
                    />
                    <ShopCar
                        id = {props.product}
                    />
                </div>
        </div>
    )
};

export {ProductCard}