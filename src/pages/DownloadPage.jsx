import DownloadButton from "../components/DownloadButton/DownloadButton";
import Navbar from "../components/NavbarBack&Logout/NavbarBack&Logout";
import DownloadCard from "../components/DownloadCard/DownloadCard";
import "./DownloadPage.css";
import { useParams } from "react-router-dom";
import useAxios from "../hooks/useAxios";
import React, { useState, useEffect } from "react";
import { saveAs } from "file-saver";

function DownloadPage() {
  const { getWithAuth, getFileWithAuth } = useAxios();
  const [downloads, setDownloads] = useState([]);
  const { year, quarter } = useParams();
  const [downloadButtonDisabled, setDownloadButtonDisabled] = useState(true);
  const fetchData = async () => {
    const response = await getWithAuth(`/submission/${year}/${quarter}`);
    if (!response.isError) {
      setDownloads(response.data);
    } else {
      alert("Error fetching data");
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    if (downloads.length > 0) {
      const hasPendingStatus = downloads.some(
        (item) => item.status === "PENDING"
      );
      setDownloadButtonDisabled(hasPendingStatus);
    }
  }, [downloads]);

  const handleDownload = async () => {
    const response = await getFileWithAuth(
      `/submission/download/all/${year}/${quarter}`
    );
    const fileName = `Report_${year}_Quarter${quarter}_consolidated.pdf`;
    if (!response.isError) {
      const fileBuffer = response.data;
      if (fileBuffer) {
        const blob = new Blob([fileBuffer]);
        saveAs(blob, fileName);
      } else {
        alert("Submission not found");
      }
    }
    if (!response.isError) {
      setDownloads(response.data);
    } else {
      alert("Error fetching data");
    }
  };

  return (
    <div className="default-bg">
      <Navbar />
      <div className="download-page-container">
        <div className="download-page-title-container">
          <h3 className="download-page-h3">ADMIN</h3>
          <h2 className="download-page-h2">Download</h2>
        </div>
        <div className="download">
          {downloads.length > 0 &&
            downloads.map((download, index) => (
              <DownloadCard download={download} key={index} />
            ))}
        </div>
        <div className="download-page-button-container">
          <button
            disabled={downloadButtonDisabled}
            onClick={handleDownload}
            className={downloadButtonDisabled ? "button-disabled" : "button"}
          >
            Download
          </button>
        </div>
      </div>
    </div>
  );
}

export default DownloadPage;
