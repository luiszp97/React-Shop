import React from "react";
import "../styles/productsList.scss"

const ProductsList =(props)=>{
    console.log(props)
    return(
        <section className="main-container">
            <div className="cards-container">
                {props.children}
            </div>
        </section>
    )
}

export {ProductsList}