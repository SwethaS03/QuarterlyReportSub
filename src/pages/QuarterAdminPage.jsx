import QuarterAdmin from "../components/QuarterAdmin/QuarterAdmin";
import YearDropdown from "../components/YearDropdown/YearDropdown";
import NavbarLogout from "../components/NavbarLogout/NavbarLogout";
import NavbarBackAndLogout from "../components/NavbarBack&Logout/NavbarBack&Logout";
import "./QuarterAdminPage.css";
import React, { useEffect, useState } from "react";
import useAxios from "../hooks/useAxios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

//import "../index.css";
function QuarterAdminPage() {
  const [selectedYear, setSelectedYear] = useState(null);
  const [quarters, setQuarters] = useState([]);
  const { getWithAuth } = useAxios();
  const fetchQuarters = async () => {
    if (selectedYear) {
      const response = await getWithAuth(`/quarter/${selectedYear}`);

      if (!response.isError) {
        setQuarters(response.data);
      } else {
        toast.error("Error fetching Quarters", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: true,
          closeOnClick: false,
          pauseOnHover: true,
          newestOnTop: true,
        });
      }
    }
  };

  useEffect(() => {
    fetchQuarters();
  }, [selectedYear]);

  return (
    <div>
      <ToastContainer stacked />
      <NavbarBackAndLogout />
      <YearDropdown
        selectedYear={selectedYear}
        setSelectedYear={setSelectedYear}
      />
      <div className="adm-container">
        <div className="adm-title-container">
          <h3 className="adm-h3">QUARTER</h3>
          <h2 className="adm-h2">Selector</h2>
        </div>

        <div className="adm-grid-container">
          {quarters.map((quarter, index) => (
            <QuarterAdmin quarter={quarter} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default QuarterAdminPage;
