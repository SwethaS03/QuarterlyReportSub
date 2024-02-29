import LoginCard from "../components/LoginCard/LoginCard";
import React from "react";
import psg from "/images/psg-logo-name.svg";
import background from "/images/vector.svg";

import "./LoginPage.css";

function LoginPage({ onLogin }) {
  return (
    <div className="default-bg">
      <div className="login-parent-container">         

        <div className="login-left-cotainer">
        <img className="login-psg-image" src={psg}></img>
            <LoginCard onLogin={onLogin} />
        </div>
        <div className="login-right-cotainer">
          <img className="login-vector-img" src={background}></img>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;

