import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "../styles/global.css";

import {Home} from  "../pages/Home"
import {NotFound} from "../pages/NotFound"
import {Layout} from "../container/Layout"
import { Login } from "../container/Login";
import {RecoveryPassword} from "../container/RecoveryPassword";
import {MyOrder} from "../pages/MyOrders.jsx"

const App = ()=>{
    return (
        <BrowserRouter>
            <Layout>
                <Switch>
                    <Route exact path={"/"} component={Home}/>
                    <Route exact path={"/electronics"} component = {Home} />
                    <Route exact path={"/clothing"} component = {Home} />
                    <Route exact path={"/jewelery"} component = {Home} />
                    <Route exact path={"/men"} component = {Home} />
                    <Route exact path={"/women"} component = {Home} />
                    <Route exact path={"/login"} component={Login}/>
                    <Route exact path={"/my-order"} component={MyOrder}/>
                    <Route exact path={"/recovery-password"} component={RecoveryPassword}/>
                    <Route component={NotFound}/>
                </Switch> 
            </Layout>
        </BrowserRouter>
       
    )
}

export default App;