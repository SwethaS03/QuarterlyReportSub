import NavbarLogout from "../components/NavbarLogout/NavbarLogout";
import QuarterRep from "../components/QuarterRep/QuarterRep";
import YearDropdown from "../components/YearDropdown/YearDropdown";
import useAxios from "../hooks/useAxios";
import React, { useEffect, useState } from "react";
import "./QuarterRepPage.css";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "react-toastify";

//import "../index.css";

function QuarterRepPage() {
  const { getWithAuth } = useAxios();
  const [selectedYear, setSelectedYear] = useState(null);
  const [submissions, setSubmissions] = useState([]);
  const [quarters, setQuarters] = useState([]);
  const [userQuarterData, setUserQuarterData] = useState([]);
  const fetchSubmissions = async () => {
    if (selectedYear) {
      const response = await getWithAuth(`/submission/user/${selectedYear}`);

      if (!response.isError) {
        setSubmissions(response.data);
      } else {
          toast.error("Error fetching submissions",
        {
          position:"top-center",
          autoClose: 5000,
          hideProgressBar: true,
          closeOnClick: false,
          pauseOnHover: true,
          newestOnTop: true
        });
      }
    }
  };

  const fetchQuarters = async () => {
    if (selectedYear) {
      const response = await getWithAuth(`/quarter/${selectedYear}`);

      if (!response.isError) {
        setQuarters(response.data);
      } else {
        toast.error("Error fetching submissions",
        {
          position:"top-center",
          autoClose: 5000,
          hideProgressBar: true,
          closeOnClick: false,
          pauseOnHover: true,
          newestOnTop: true
        });
      }
    }
  };

  const fetchHandler = async () => {
    await fetchQuarters();
    await fetchSubmissions();
  };

  const parseSubmissions = () => {
    //should have written join in backend ;-;
    let combinedArray = [];
    for (let i = 0; i < submissions.length; i++) {
      let submission = submissions[i];
      let quarter = quarters.find(
        (quarter) => quarter.quarter === submission.quarter
      );
      let combined = { ...submission, ...quarter };
      combined.startDate = new Date(combined.startDate);
      combined.endDate = new Date(combined.endDate);
      combinedArray.push(combined);
    }

    combinedArray.sort((a, b) => {
      if (a.quarter !== b.quarter) {
        return a.quarter - b.quarter;
      }
      return a.year - b.year;
    });
    setUserQuarterData(combinedArray);
  };

  useEffect(() => {
    parseSubmissions();
  }, [submissions, quarters]);

  useEffect(() => {
    fetchHandler();
  }, [selectedYear]);

  return (
    <div>
      <ToastContainer />
      <NavbarLogout />
      <YearDropdown
        selectedYear={selectedYear}
        setSelectedYear={setSelectedYear}
      />
      <div className="container">
        <div className="admin-title-container">
          <h3 className="rep-h3">QUARTER</h3>
          <h2 className="rep-h2">Selector</h2>
        </div>

        <div className="grid-container">
          {userQuarterData.map((submission, index) => {
            return <QuarterRep key={index} submission={submission} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default QuarterRepPage;
