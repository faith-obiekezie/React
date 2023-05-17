import React from "react"
import {createBrowserRouter} from "react-router-dom"
import Layout from "../Components/Block/Layout"
import HomePage from "../Pages/HomePage"

export const mainRoute=createBrowserRouter([
    {
        path:"/",
        element: <Layout/>,
        children:[
            {
                // path:"/",
                index:true,
                element: <HomePage/>
            }
        ]
    }
])