import ModifyButton from "../components/ModifyButton/ModifyButton";
import Navbar from "../components/NavbarBack&Logout/NavbarBack&Logout";
import OrderCard from "../components/OrderCard/OrderCard";
import "./ModifyOrderPage.css";

function ModifyPage() {
    return (
      <div className="default-bg">
        <Navbar />
        <div className="modify-order-container">
          <div className="modify-order-title-container">
            <h3 className='modify-order-h3'>ADMIN</h3>
            <h2 className='modify-order-h2'>Modify User Order</h2>
          </div>
          <div className="modify-order-cards">
            <OrderCard />
            <OrderCard />
            <OrderCard />
            <OrderCard />
          </div>
          <div className="modify-order-button-container">
            <ModifyButton/>
          </div>
        </div>
          
      </div>
    );
  }
  
  export default ModifyPage;