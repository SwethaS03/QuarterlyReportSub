import React from "react";
import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";
import "./NavbarLogout.css";
import psg from "/images/psg.svg";
import { useNavigate } from "react-router";
const NavbarLogout = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    // Add your logout logic here
    localStorage.removeItem("AUTH_TOKEN");
    localStorage.removeItem("USER");
    navigate("/login");
  };

  return (
    <div className="navbar">
      <div className="navbar-title">
        <img className="psg-image-navbar" src={psg} alt="psgLogo" />
        <p className="outer-text">
          Quarterly Report <span className="inner-text">Submission</span>
        </p>
      </div>
      <div className="navbar-button-container">
        <button className="navbar-logout-button" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </div>
  );
};

export default NavbarLogout;
