import React from "react";
import "@styles/header.scss"

import logo from  "@logos/logo_yard_sale.svg";
import iconMenu  from "@icons/icon_menu.svg";
import shoppingCardNotification from  "@icons/icon_shopping_cart_notification.svg"

const Header = ()=> {
    return(
        <nav className="navbar">
            <img src={iconMenu} alt="menu" className="menu"/>
            <div className="left">
                <img src={logo} alt="logo" className="nav-logo"/>
                <ul>
                    <li>
                        <a href="/">All</a>
                    </li>
                    <li>
                        <a href="/clothing">Clothes</a>
                    </li>
                    <li>
                            <a href="/electronics">Electronics</a>
                    </li>
                    <li>
                        <a href="/men">Men's</a>
                    </li>
                    <li>
                        <a href="/women">Women's</a>
                    </li>
                    <li>
                        <a href="/">Others</a>
                    </li>
                </ul>
            </div>
            <div className="right">
                <a href="/" className="email">Correo@example.com</a>
                <img src={shoppingCardNotification} alt="card" onClick={()=>location.pathname = "/my-order"}/>
            </div>
        </nav>
    )
};


export {Header}