import React, { useState, useEffect } from "react";
import "./OrderCard.css";
import useAxios from "../../hooks/useAxios";
import { useNavigate } from "react-router-dom";

const OrderCard = ({ user, fetchData }) => {
  const [order, setOrder] = useState(user.order);
  const { putWithAuth } = useAxios();
  const navigate = useNavigate();

  // State to track the current timeout ID
  const [timeoutId, setTimeoutId] = useState(null);

  useEffect(() => {
    // Cleanup the timeout when the component unmounts
    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [timeoutId]);

  const handleOrderChange = (event) => {
    setOrder(event.target.value);

    if (timeoutId) {
      clearTimeout(timeoutId);
    }

    const newTimeoutId = setTimeout(async () => {
      const response = await putWithAuth(`/user/order`, {
        email: user.email,
        order: event.target.value,
      });

      if (!response.isError) {
        alert("Order updated successfully");
        fetchData();
        // navigate("/modify-order");
      } else {
        alert("Error updating order");
      }
    }, 1000);

    setTimeoutId(newTimeoutId);
  };

  return (
    <div className="order-card">
      <div className="order-text">
        <h2>{user.role}</h2>
        <p>{user.department}</p>
      </div>
      <div className="order-card-number">
        <input
          type="number"
          placeholder="0"
          value={order}
          onChange={handleOrderChange}
        ></input>
      </div>
    </div>
  );
};

export default OrderCard;
