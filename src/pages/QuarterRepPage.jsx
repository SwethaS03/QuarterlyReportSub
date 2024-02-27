import QuarterRep from "../components/QuarterRep/QuarterRep";
import YearDropdown from "../components/YearDropdown/YearDropdown";

//import "../index.css";
function QuarterRepPage() {
  return (

      <div className="quarter-rep">
        <YearDropdown/>
        <QuarterRep />

      </div>
  );
}

export default QuarterRepPage;