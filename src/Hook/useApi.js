import React from "react";

const useApi= () =>{
    
    const [errorApi , setErrorApi] = React.useState(false);
    const [loading, setLoading]= React.useState(true);
    const [item, setItem]= React.useState([]);
    const [state, setState] = React.useState(true)

    
React.useEffect(()=>{

    const baseUrl = "https://api.escuelajs.co/api/v1/products?limit=15&offset=1";

    if(location.pathname === "/"){
        data("?limit=15");   
    } else if (location.pathname === "/electronics"){
        data("/category/electronics")
    } else if (location.pathname === "/clothing"){
        data("/categogy/clothing")
    } else if(location.pathname === "jewelery"){
        data("/category/jewelery")
    } else if (location.pathname === "/men"){
        data("/category/man's clothing")
    }else if(location.pathname === "/women"){
        data("/category/women's clothing")
    }   

   

    async function data (endPoint){
        try {
            const res = await fetch(`${baseUrl}`);
            const data = await res.json();

            console.log(data)            
            setItem(data);
            setLoading(false);
            
            if(data.length === 0){
                console.log("error")
                setErrorApi(true)
            }
            
            setState(false)
            
        } catch (error) {

            setLoading(false);
            setErrorApi(true);
            setState(false)

            
            
        }
        
    };
    
},[])

async function ShoppingCarPost (id){
    try {
        const res = await fetch("https://fakestoreapi.com/carts", {
            method:"POST",
            body:JSON.stringify(
                {
                    userId:1,
                    date:"2022-02-03",
                    products:[{productId:id,quantity:1}]
                }
            )
        });
        const data =  await res.json()
        console.log(res)

        ShoppingCarGet()
        

    } catch (error) {
        console.log(error)
    }
};

async function ShoppingCarGet(){
    try {
        const res = await fetch("https://fakestoreapi.com/users")
        const data = await res.json()

        console.log("siu",data)

    } catch (error) {
        console.log(error)
    }
}


    return({
             item,
             loading,
             errorApi,
             ShoppingCarPost,
             ShoppingCarGet,
            })
}

export{useApi}