import React from "react";
import "../styles/Login.scss"

import { Button } from "../components/Button";
import { Input } from "../components/Inputs";


const Login = ()=> {
    return(

        <div class="login">
        <div class="form-container">
            <img src="./logos/logo_yard_sale.svg" alt="logo" class="logo"/>
            <form action="/" class="form">
                <label for="email" class="label">Email address</label>
                <Input
                    type= {"text"}
                    id = {"email"}
                    placeholder = {"example@example.com"}
                    secondClass = {"input-email"}
                />
                <label for="new-password" class="label">Password</label>
                <Input
                    type= {"password"}
                    id = {"password"}
                    placeholder = {"*********"}
                    secondClass = {"input-password"}
                />
                <Button
                    text = {"Log in"}
                    type = {"submit"}
                    secondClass = {"login-button"}
                    pathName = {"/"}

                />
                <a href="/">Forgot my password</a>
                <Button
                    text = {"Sign up"}
                    type = {'button'}
                    secondClass = {"sign-button"}
                    pathName = {"/"}

                />
            </form>
        </div>
    </div>    
    )
}

export {Login}