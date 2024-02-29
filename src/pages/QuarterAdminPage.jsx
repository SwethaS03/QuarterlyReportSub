import QuarterAdmin from "../components/QuarterAdmin/QuarterAdmin";
import YearDropdown from "../components/YearDropdown/YearDropdown";
import NavbarLogout from "../components/NavbarLogout/NavbarLogout";
import "./QuarterAdminPage.css";

//import "../index.css";
function QuarterAdminPage() {
  return (

      <div >
        <NavbarLogout />
        <YearDropdown />
        <div className="adm-container">
          <div className="adm-title-container">
            <h3 className="adm-h3">QUARTER</h3>
            <h2 className="adm-h2">Selector</h2>
          </div>
          
          <div className="adm-grid-container">
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