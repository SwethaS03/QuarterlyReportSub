import QuarterAdmin from "../components/QuarterAdmin/QuarterAdmin";
import YearDropdown from "../components/YearDropdown/YearDropdown";
import Navbar from "../components/NavbarBack&Logout/NavbarBack&Logout";


//import "../index.css";
function QuarterAdminPage() {
  return (

      <div className="default-bg">
        <Navbar />
        <div className="container">
          <div className="title-container">
            <h3>QUARTER</h3>
            <h2>Selector</h2>
          </div>
          <div className="grid-container">
            <div className="grid-item">1</div>
            <div className="grid-item">2</div>
            <div className="grid-item">3</div>
            <div className="grid-item">4</div>
          </div>
        </div>
          
      </div>
  );
}

export default QuarterAdminPage;