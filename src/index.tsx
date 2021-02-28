import React from "react"
import ReactDOM from "react-dom"
import { GlobalStyles } from "twin.macro"
import App from "./components/App"
import "./index.css"
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client"

const client = new ApolloClient({
    uri: "http://localhost:8080",
    cache: new InMemoryCache()
})

ReactDOM.render(
    <React.StrictMode>
        <ApolloProvider client={client}>
            <GlobalStyles/>
            <App/>
        </ApolloProvider>
    </React.StrictMode>,
    document.getElementById("root")
)