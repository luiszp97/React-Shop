import React from "react";
import "../styles/notFound.scss";
import { Button } from "../components/Button";

const NotFound = ()=> {
    return(
        <div className="notFound-Container">
            <div className="contain-container">
                <img className="notFound-img" src="/src/styles/assets/error-404.png" alt="Not Found 404" />
                <h2>Whooops</h2>
                <p className="error-msg">Lo sentimos, no hemos podido encontrar la pagina que buscas</p>
                <Button
                    text = {'Go Back'}
                    pathName = {"/"}  
                />
                {/* <button className="back-btn" onClick={()=>location.pathname = "/"}>Go Back</button> */}
            </div>            
        </div>
    )
}

export {NotFound}