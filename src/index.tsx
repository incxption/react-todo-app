import React from "react"
import ReactDOM from "react-dom"
import { GlobalStyles } from "twin.macro"
import App from "./components/App"
import "./index.css"
//import GlobalStylesComponent from "./components/GlobalStyles"

ReactDOM.render(
    <React.StrictMode>
        <GlobalStyles/>
        <App/>
    </React.StrictMode>,
    document.getElementById("root")
)