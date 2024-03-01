import React from "react";
import "./DownloadButton.css";

const DownloadButton = ({ disabled, yar, quarter, handleClick }) => {
  return (
    <button
      disabled={disabled}
      onClick={handleClick}
      className={disabled ? "button-disabled" : "button"}
    >
      Download
    </button>
  );
};

export default DownloadButton;
