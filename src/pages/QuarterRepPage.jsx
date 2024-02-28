import NavbarLogout from "../components/NavbarLogout/NavbarLogout";
import QuarterRep from "../components/QuarterRep/QuarterRep";
import YearDropdown from "../components/YearDropdown/YearDropdown";

import "./QuarterRepPage.css";

//import "../index.css";
function QuarterRepPage() {
  return (

      <div >
        <NavbarLogout />
        <YearDropdown />
        <div className="container">
          <div className="admin-title-container">
            <h3>QUARTER</h3>
            <h2>Selector</h2>
          </div>
          
          <div className="grid-container">
              <QuarterRep />
              <QuarterRep />
              <QuarterRep />
              <QuarterRep />
          </div>
          
        </div>
          
      </div>
  );
}

export default QuarterRepPage;