import React from "react";
import {ProductsList} from "../container/ProductsList"
import { ProductCard } from "../container/ProductCard";
import {useApi} from "../Hook/useApi";
import { NotFound } from "./NotFound";
import { LoadingSkeletor } from "../container/LoadingSkeletor";


const  Home = ()=>{

    const {
        item,
        loading,
        errorApi,
    } = useApi()  

    const data = item;

    const array = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
    


    return(
        <React.Fragment>
            {loading && 
                <ProductsList>
                    {array.map(element => (
                        <LoadingSkeletor
                            key = {element}
                        />
                    ))}
                </ProductsList>
            }
            {(!loading && !!errorApi) && <NotFound/>}
            {!loading &&
            
                <ProductsList>
                {data.map(element => (
                        <ProductCard
                            price = {element.price}
                            className = {"product-img"}
                            description = {element.title}
                            url = {element.images[0]}
                            key = {element.id}
                            id = {element.id}
                            product = {element}
                        />
                ))}   
                        
            
                </ProductsList>
            
            }

    </React.Fragment>
        
    )

};

export{Home}

