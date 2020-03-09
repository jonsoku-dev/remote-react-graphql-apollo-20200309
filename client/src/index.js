import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

// Apollo
import { apollo } from "./apollo";
import { ApolloProvider } from "react-apollo";

ReactDOM.render(
  <ApolloProvider client={apollo}>
    <App />
  </ApolloProvider>,
  document.getElementById("root")
);
