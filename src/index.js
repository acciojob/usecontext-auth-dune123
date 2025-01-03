import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import AuthContext from "./context/userContext";


ReactDOM.render(
    <AuthContext>
        <App />
    </AuthContext>
, document.getElementById("root"));
