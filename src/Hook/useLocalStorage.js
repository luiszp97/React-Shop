import React from "react";

const useLocalStorage = ()=>{
    const [state, setState]= React.useState([]); 
     
    const localCard = localStorage.getItem("save");
    let parsedItem;
    console.log(state)

    React.useEffect(()=>{
        if(!localCard){

            localStorage.setItem("save", JSON.stringify([]))
            
    
        } else {
    
            // parsedItem = JSON.parse(localCard)
            // setState(parsedItem)
    
        }
    
    },[])

   
   
     const addToCar = (element)=>{

       
        setState([...state])
        

        // const stringifyElement = JSON.stringify(element);
        // const hola = JSON.stringify(...state);

        // localStorage.setItem("save", stringifyElement)


     }

    return({
       state,
       addToCar
    })

}

export {useLocalStorage}
