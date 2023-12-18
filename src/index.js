import React from "react";
import ReactDOM from "react-dom/client";
import GlobalStyles from "~/components/GlobalStyles";
import App from "./App";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <GlobalStyles>
    <App />
  </GlobalStyles>
);
reportWebVitals();
