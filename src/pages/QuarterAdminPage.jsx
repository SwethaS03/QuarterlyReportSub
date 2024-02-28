import QuarterAdmin from "../components/QuarterAdmin/QuarterAdmin";
import YearDropdown from "../components/YearDropdown/YearDropdown";
import NavbarLogout from "../components/NavbarLogout/NavbarLogout";
import "./QuarterAdminPage.css";

//import "../index.css";
function QuarterAdminPage() {
  return (

      <div >
        <Navbar />
        <YearDropdown />
        <div className="container">
          <div className="admin-title-container">
            <h3>QUARTER</h3>
            <h2>Selector</h2>
          </div>
          
          <div className="grid-container">
              <QuarterAdmin />
              <QuarterAdmin />
              <QuarterAdmin />
              <QuarterAdmin />
          </div>
          
        </div>
          
      </div>
  );
}

export default QuarterAdminPage;