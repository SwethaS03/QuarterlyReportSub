import React from 'react';
import "./AdminCards.css";
import addUserIcon from "../images/addUser.svg";

const AdminCards = () => {
  
    const handleClick = () => {
        // Handle login logic here
    };

    return (
        <div className="card" onClick={onClick}>
            <img src= {addUserIcon} alt="AdminCards" className="card-image" />
            <h2 className="card-heading">Add User</h2>
            <hr className="card-line" />
            <p className="card-description">Add more users to the already existing list of admins.</p>
        </div>
    );
};

export default AdminCards;
