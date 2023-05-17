import React from "react"
import Header from "./Header"
import Picture from "../Component/picture"
import {Outlet} from "react-router-dom"
import Footer from "./Footer"

const Layout=()=>{
    return(
        <div>
            <Picture/>
            <Outlet/>
            <Footer/>
        </div>
    )
}

export default Layout