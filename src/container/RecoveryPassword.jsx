import React from "react";
import "../styles/RecoveryPassword.scss"

import { Button } from "../components/Button";

const RecoveryPassword = () =>{
    return(
            <div className="login">
            <div className="form-container">
                <img src="./logos/logo_yard_sale.svg" alt="logo" className="logo"/>
                <h1 className="title">Email has been sent!</h1>
                <p className="subtitle"> Please check your inbox for instructions on how to reset the password</p>
            <div className="email-image">
                <img src="./icons/email.svg" alt="email"/>
            </div>
            <Button
                text = {"Login"}
                pathName = {'/login'}
                type = {'button'}
                secondClass = {'login-button'}
            />
            <p className="resend">
                <span>Did't recive the email?</span>
                <a href="/">Resend</a>
            </p>
        </div>
    </div> 
      

    )
};

export {RecoveryPassword}