import React from 'react';
import "./OrderCard.css";

const OrderCard = () => {
    const handleClick = () => {
        // Handle login logic here
    };

    return (
        
        <div className="card">
            <div className="text">
                <h2>Admin</h2>
                <p>Principal</p>
            </div>
            <div className="card-number">
                <input type='number' placeholder='0' ></input>
            </div>
        </div>
        
    );
};

export default OrderCard;