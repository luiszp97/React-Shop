import React from "react";

import {Header} from "../components/Header"

const Layout = ({children})=> {
    return(
        <div className="Layout">
        {location.pathname !== "/login" && (
            <Header/>
        )}
            {children}
        </div>
    )
}

export {Layout}