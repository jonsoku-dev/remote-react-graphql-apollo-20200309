import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
// Apollo
import { apollo } from "./apollo";
import { ApolloProvider } from "react-apollo";
// Toast
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

ReactDOM.render(
  <ApolloProvider client={apollo}>
    <App />
    <ToastContainer autoClose={6000} draggable position={"bottom-center"} />
  </ApolloProvider>,
  document.getElementById("root")
);
