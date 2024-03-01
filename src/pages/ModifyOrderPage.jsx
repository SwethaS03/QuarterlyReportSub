import ModifyButton from "../components/ModifyButton/ModifyButton";
import Navbar from "../components/NavbarBack&Logout/NavbarBack&Logout";
import OrderCard from "../components/OrderCard/OrderCard";
import useAxios from "../hooks/useAxios";
import "./ModifyOrderPage.css";
import React, { useState, useEffect } from "react";
function ModifyPage() {
  const { getWithAuth } = useAxios();
  const [users, setUsers] = useState([]);
  const fetchData = async () => {
    const response = await getWithAuth("/user/order");
    if (!response.isError) {
      setUsers(response.data);
    } else {
      alert("Error fetching data");
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="default-bg">
      <Navbar />
      <div className="modify-order-container">
        <div className="modify-order-title-container">
          <h3 className="modify-order-h3">ADMIN</h3>
          <h2 className="modify-order-h2">Modify User Order</h2>
        </div>
        <div className="modify-order-cards">
          {users.map((user, index) => (
            <OrderCard user={user} key={index} fetchData={fetchData} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ModifyPage;
