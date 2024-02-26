import React from 'react';
import "./AdminCards.css";
import AdminCardData from "../../constants/AdminCardConstants.json";
import { useNavigate } from "react-router-dom";

const AdminCards = () => {
    // const navigate = useNavigate() 
    // const handleClick = (navigateTo) => {
    //     // Handle login logic here
    //     navigate(navigateTo)
    // };

    // {AdminCardData.map((cardData, index) => {
    //     return(
    //         <div key={index} className="card" onClick={() => {
    //             // Handle login logic here
    //             // navigate(cardData.navigate)
    //         }}>
    //            <img src= {cardData.ImageURL} alt="AdminCards" className="card-image" />
    //            <h2 className="card-heading">{cardData.title}</h2>
    //            <hr className="card-line" />
    //            <p className="card-description">{cardData.description}</p>
    //        </div>
    //     );
    // })}
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
      

    
    // return (
    //     <div className="card">
    //         <img src= {addUserIcon} alt="AdminCards" className="card-image" />
    //         <h2 className="card-heading">Add Department</h2>
    //         <hr className="card-line" />
    //         <p className="card-description">Add more departments to the existing list of departments.</p>
    //     </div>
    // );
};

export default AdminCards;
