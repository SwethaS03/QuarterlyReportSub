import React from "react";
import FileUploadOutlinedIcon from "@mui/icons-material/FileUploadOutlined";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";
import "./QuarterRep.css";

const SquareCard = ({ submission }) => {
  const currDate = new Date();
  const isUploadDisabled = currDate < submission.startDate;
  const isDownloadDisabled = submission.objectURL === "";
  return (
    <div className="square-card">
      <div className="top-left">
        <div className="quarter-title">Quarter</div>
        <div className="gradient-number">
          {submission.quarter.toString().padStart(2, "0")}
        </div>
      </div>
      <div className="month-icon-container">
        <div className="bottom-left">
          <p className="month-range">Jan-Mar</p>
        </div>
        <div className="icon-container">
          <button
            disabled={isUploadDisabled}
            className={
              isUploadDisabled
                ? "rounded-outline-disabled"
                : "rounded-outline-enabled"
            }
          >
            <FileUploadOutlinedIcon
              style={{
                fontSize: "1.5rem",
                color: isUploadDisabled ? "grey" : "black",
              }}
            />
          </button>
          <div
            className={
              isDownloadDisabled
                ? "rounded-outline-disabled"
                : "rounded-outline-enabled"
            }
          >
            <FileDownloadOutlinedIcon
              style={{
                fontSize: "1.5rem",
                color: isDownloadDisabled ? "grey" : "black",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SquareCard;
