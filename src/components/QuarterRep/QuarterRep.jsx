import Reactm, { useState } from "react";
import FileUploadOutlinedIcon from "@mui/icons-material/FileUploadOutlined";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";
import "./QuarterRep.css";
import useAxios from "../../hooks/useAxios";
import { saveAs } from "file-saver";
import Modal from "react-modal";
import { useNavigate } from "react-router-dom";
import { formatDateString } from "../../utils/utils";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SquareCard = ({ submission }) => {
  const { getFileWithAuth, putFileWithAuth } = useAxios();
  const navigate = useNavigate();
  const currDate = new Date();
  const isUploadDisabled = currDate < submission.startDate;
  const isDownloadDisabled = submission.objectURL === "";

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [uploadedFileNames, setUploadedFileNames] = useState([]);

  const handleFileChange = (event) => {
    const files = Array.from(event.target.files);
    handleFiles(files);
  };

  const handleFiles = (files) => {
    setSelectedFiles((prevSelectedFiles) => [...prevSelectedFiles, ...files]);
    const fileNames = files.map((file) => file.name);
    setUploadedFileNames((prevFileNames) => [...prevFileNames, ...fileNames]);
  };
  const handleDrop = (event) => {
    event.preventDefault();
    const files = Array.from(event.dataTransfer.files);
    handleFiles(files);
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };
  const handleUpload = async () => {
    const formData = new FormData();
    const uploadToastId = toast.info("Uploading...", {
      position: "top-center",
      autoClose: false, // Keep toast open until process is done
      hideProgressBar: true,
      closeOnClick: false,
      pauseOnHover: true,
      newestOnTop: true,
    });
    selectedFiles.forEach((file) => {
      formData.append("files", file);
    });
    
    const response = await putFileWithAuth(
      `/submission/${submission.uuid}`,
      formData
    );

    if (!response.isError) {
      setIsModalOpen(false);
      toast.update(uploadToastId, {
        render: "Files uploaded successfully!",
        type: "success",
        autoClose: 5000,
        newestOnTop: true,
      });
      setSelectedFiles([]);
      setUploadedFileNames([]);
    } else {
      toast.update(uploadToastId, {
        render: "Error uploading files!",
        type: "error",
        autoClose: 5000,
        newestOnTop: true,
      });
    }
  };

  const downloadSubmission = async () => {
    const downloadToastId = toast.info("Downloading...", {
      position: "top-center",
      autoClose: false, // Keep toast open until process is done
      hideProgressBar: true,
      closeOnClick: false,
      pauseOnHover: true,
      newestOnTop: true,
    });
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
        toast.update(downloadToastId, {
          render: "Submission downloaded successfully!",
          type: "success",
          autoClose: 5000,
        });
      } else {
        toast.update(downloadToastId, {
          render: "Submission not found!",
          type: "error",
          autoClose: 5000,
        });
      }
    } else {
      toast.update(downloadToastId, {
        render: "Error downloading submission",
        type: "error",
        autoClose: 5000,
      });
    }
  };

  return (
    <div className="square-card">
      <ToastContainer stacked />
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
        <div
          className="icon-container"
          onDrop={handleDrop}
          onDragOver={handleDragOver}
        >
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
            onAfterClose={() => {
              setSelectedFiles([]);
              setUploadedFileNames([]);
            }}
            onRequestClose={() => {
              setIsModalOpen(false);
              setSelectedFiles([]);
              setUploadedFileNames([]);
            }}
            className="custom-modal"
          >
            <h2>Select Files</h2>
            <input
              type="file"
              accept="application/pdf"
              multiple
              onChange={handleFileChange}
            />
            <div>
              <h3>Uploaded Files:</h3>
              <ul>
                {uploadedFileNames.map((fileName, index) => (
                  <li key={index}>
                    {fileName}{" "}
                    <button
                      onClick={() => {
                        setSelectedFiles((prevSelectedFiles) =>
                          prevSelectedFiles.filter(
                            (_, fileIndex) => fileIndex !== index
                          )
                        );
                        setUploadedFileNames((prevFileNames) =>
                          prevFileNames.filter(
                            (_, fileIndex) => fileIndex !== index
                          )
                        );
                      }}
                    >
                      Remove
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            <button
              onClick={handleUpload}
              disabled={selectedFiles.length === 0}
            >
              Upload
            </button>
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default SquareCard;
