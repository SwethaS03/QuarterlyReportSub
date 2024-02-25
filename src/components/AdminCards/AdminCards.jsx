import React from 'react';
import "./AdminCards.css";
import addUserIcon from "../../images/addUser.svg";

const AdminCards = () => {

    const handleClick = () => {
        // Handle login logic here
    };

    return (
        <div className="card" onClick={handleClick}>
            <img src= {addUserIcon} alt="AdminCards" className="card-image" />
            <h2 className="card-heading">Add Department</h2>
            <hr className="card-line" />
            <p className="card-description">Add more departments to the existing list of departments.</p>
        </div>
    );
};

export default AdminCards;
