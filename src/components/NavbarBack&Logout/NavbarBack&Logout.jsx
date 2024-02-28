import React from "react";
import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";
import "./NavbarBack&Logout.css";
import psg from "/images/psg.svg";
const NavbarBackAndLogout = () => {
  const handleLogout = () => {
    // Add your logout logic here
    localStorage.removeItem("AUTH_TOKEN");
    localStorage.removeItem("USER");
    navigate("/login");
  };

  return (
    <div className="navbar">
      <div className="title">
        <img className="psg-image" src={psg} alt="psgLogo" />
        <p className="outer-text">
          Quarterly Report <span className="inner-text">Submission</span>
        </p>
      </div>
      <div className="icon-button-container">
        <div className="rounded-outline">
          <ArrowBackOutlinedIcon style={{ fontSize: "1.7rem" }} />
        </div>

        <button className="logout-button" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </div>
  );
};

export default NavbarBackAndLogout;
