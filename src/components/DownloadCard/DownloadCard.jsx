import React from "react";
import "./DownloadCard.css";

const DownloadCard = ({ download }) => {
  return (
    <div className="download-card">
      <div className="text">
        <h2>{download.user.role}</h2>
        <p>{download.user.department}</p>
      </div>
      <p
        className={
          download.status === "SUBMITTED"
            ? "card-status-success"
            : "card-status-pending"
        }
      >
        {download.status === "NOT_STARTED" ? "Not Started" : download.status}
      </p>
    </div>
  );
};

export default DownloadCard;
