import QuarterAdmin from "../components/QuarterAdmin/QuarterAdmin";
import YearDropdown from "../components/YearDropdown/YearDropdown";

//import "../index.css";
function QuarterAdminPage() {
  return (

      <div className="quarter-rep">
        <YearDropdown/>
        <QuarterAdmin />

      </div>
  );
}

export default QuarterAdminPage;