import DownloadButton from "../components/DownloadButton/DownloadButton";
import Navbar from "../components/NavbarBack&Logout/NavbarBack&Logout";
import DownloadCard from "../components/DownloadCard/DownloadCard";
import "./DownloadPage.css";

function DownloadPage() {
    return (
      <div className="default-bg">
        <Navbar />
        <div className="container">
          <div className="title-container">
            <h3>ADMIN</h3>
            <h2>Download</h2>
          </div>
          <div className="download">
            <DownloadCard />
            <DownloadCard />
            <DownloadCard />
            <DownloadCard />
          </div>
          <div className="button-container">
            <DownloadButton/>
          </div>
        </div>
          
      </div>
    );
  }
  
  export default DownloadPage;