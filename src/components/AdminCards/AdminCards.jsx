import React from 'react';
import "./AdminCards.css";
import AdminCardData from "../../constants/AdminCardConstants.json";
import { useNavigate } from "react-router-dom";

const AdminCards = () => {

    return (
        <div className="cards-container">
            {AdminCardData.map((cardData, index) => {
                return(
                    <div key={index} className="card" >
                    <img src= {cardData.ImageURL} alt="AdminCards" className="card-image" />
                    <h2 className="card-heading">{cardData.title}</h2>
                    <hr className="card-line" />
                    <p className="card-description">{cardData.description}</p>
                </div>
                );
            })}
        </div>
        )

};

export default AdminCards;
