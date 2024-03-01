import Reactm, { useState } from "react";
import FileUploadOutlinedIcon from "@mui/icons-material/FileUploadOutlined";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";
import "./QuarterRep.css";
import useAxios from "../../hooks/useAxios";
import { saveAs } from "file-saver";
import Modal from "react-modal";
import { useNavigate } from "react-router-dom";
import { formatDateString } from "../../utils/utils";

const SquareCard = ({ submission }) => {
  const { getFileWithAuth, putFileWithAuth } = useAxios();
  const navigate = useNavigate();
  const currDate = new Date();
  const isUploadDisabled = currDate < submission.startDate;
  const isDownloadDisabled = submission.objectURL === "";

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedFiles, setSelectedFiles] = useState([]);

  const handleFileChange = (event) => {
    setSelectedFiles(event.target.files);
  };

  const handleUpload = async () => {
    const formData = new FormData();
    for (let i = 0; i < selectedFiles.length; i++) {
      formData.append("files", selectedFiles[i]);
    }
    const response = await putFileWithAuth(
      `/submission/${submission.uuid}`,
      formData
    );

    if (!response.isError) {
      setIsModalOpen(false);
      alert("Files uploaded successfully");
      navigate("/");
    } else {
      alert("Error uploading files");
    }
  };

  const downloadSubmission = async () => {
    const response = await getFileWithAuth(
      `/submission/download/${submission.uuid}`
    );

    if (!response.isError) {
      const fileBuffer = response.data;
      if (fileBuffer) {
        const blob = new Blob([fileBuffer]);
        saveAs(
          blob,
          submission.objectURL.split("/").pop() ?? "downloaded_file.pdf"
        );
      } else {
        alert("Submission not found");
      }
    } else {
      alert("Error downloading submission");
    }
  };

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
          <p className="month-range">
            {formatDateString(submission.startDate, submission.endDate)}
          </p>
        </div>
        <div className="icon-container">
          <button
            onClick={() => setIsModalOpen(true)}
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
          <button
            disabled={isDownloadDisabled}
            onClick={downloadSubmission}
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
          </button>
          <Modal
            isOpen={isModalOpen}
            onRequestClose={() => setIsModalOpen(false)}
          >
            <h2>Select Files</h2>
            <input
              type="file"
              accept="application/pdf"
              multiple
              onChange={handleFileChange}
            />
            <button onClick={handleUpload}>Upload</button>
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default SquareCard;
