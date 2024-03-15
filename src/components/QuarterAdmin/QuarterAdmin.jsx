import React, { useState } from "react";
import EditCalendarOutlinedIcon from "@mui/icons-material/EditCalendarOutlined";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";
import "./QuarterAdmin.css";
import "./QuarterAdmin.css";
import { formatDateString } from "../../utils/utils";
import { useActionData, useNavigate } from "react-router-dom";
import DatePickerModal from "../DatePickerModal/DatepickerModal";
import useAxios from "../../hooks/useAxios";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "react-toastify";

const SquareCard = ({ quarter }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();
  const { putWithAuth } = useAxios();

  const handleDateChange = async (date) => {
    const response = await putWithAuth(`/quarter/update`, {
      endDate: date,
      quarter: quarter.quarter,
      year: quarter.year,
    });

    if (!response.isError) {
      toast.success("Quarter Updated successfully",
        {
          position:"top-center",
          autoClose: 5000,
          hideProgressBar: true,
          closeOnClick: false,
          pauseOnHover: true,
          newestOnTop: true
        });
    } else {
      toast.error("Error Updating Quarter",
        {
          position:"top-center",
          autoClose: 5000,
          hideProgressBar: true,
          closeOnClick: false,
          pauseOnHover: true,
          newestOnTop: true
        });
    }
  };
  return (
    <div className="qadmin-square-card">
      <ToastContainer stacked />
      <DatePickerModal
        setShowModal={setIsModalOpen}
        isOpen={isModalOpen}
        handleUpdateDate={handleDateChange}
        initialDate={quarter.endDate}
        closeModal={() => setIsModalOpen(false)}
      />
      <div className="qadmin-top-left">
        <h2 className="qadmin-quarter-title">Quarter</h2>
        <div className="qadmin-gradient-number">
          {quarter.quarter.toString().padStart(2, "0")}
        </div>
      </div>
      <div className="qadmin-month-icon-container">
        <div className="qadmin-bottom-left">
          <p className="qadmin-month-range">
            {formatDateString(quarter.startDate, quarter.endDate)}
          </p>
        </div>
        <div className="qadmin-icon-container">
          <button
            onClick={() => {
              setIsModalOpen(true);
            }}
            className="qadmin-rounded-outline"
          >
            <EditCalendarOutlinedIcon
              style={{ fontSize: "1.5rem", color: "black" }}
            />
          </button>
          <button
            onClick={() => {
              navigate(`/download/${quarter.year}/${quarter.quarter}`);
            }}
            className={"rounded-outline-enabled"}
          >
            <FileDownloadOutlinedIcon
              style={{
                fontSize: "1.5rem",
                color: "black",
              }}
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SquareCard;
