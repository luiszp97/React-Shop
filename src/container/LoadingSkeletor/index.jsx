import React from "react";
import { ProductCard } from "../ProductCard";
import { ProductsList } from "../ProductsList";
import "./loadingSkeletor.scss"

const LoadingSkeletor = () =>{
    return(
        <div className="product-card-loading">
            <div className="img-product-loading"></div>
            <div className= "product-info-loading">

            </div>
        </div>
    )
}

export{LoadingSkeletor}