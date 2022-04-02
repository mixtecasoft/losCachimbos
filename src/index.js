import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { HelmetProvider } from "react-helmet-async";
import App from "./App";
import store from "./redux/store";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

const client = new ApolloClient({
   uri: "https://allowed-tortoise-45.hasura.app/v1/graphql",
   cache: new InMemoryCache(),
});

ReactDOM.render(
   <React.StrictMode>
      <HelmetProvider>
         <ApolloProvider client={client}>
            <Provider store={store}>
               <BrowserRouter>
                  <App />
               </BrowserRouter>
            </Provider>
         </ApolloProvider>
      </HelmetProvider>
   </React.StrictMode>,
   document.getElementById("root")
);
