import ModifyButton from "../components/ModifyButton/ModifyButton";
import Navbar from "../components/NavbarBack&Logout/NavbarBack&Logout";
import OrderCard from "../components/OrderCard/OrderCard";
import "./ModifyOrderPage.css";

function ModifyPage() {
    return (
      <div className="default-bg">
        <Navbar />
        <div className="modify-order-container">
          <div className="title-container">
            <h3>ADMIN</h3>
            <h2>Modify User Order</h2>
          </div>
          <div className="order">
            <OrderCard />
            <OrderCard />
            <OrderCard />
            <OrderCard />
          </div>
          <div className="button-container">
            <ModifyButton/>
          </div>
        </div>
          
      </div>
    );
  }
  
  export default ModifyPage;