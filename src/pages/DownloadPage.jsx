import DownloadButton from "../components/DownloadButton/DownloadButton";
import Navbar from "../components/NavbarBack&Logout/NavbarBack&Logout";
import DownloadCard from "../components/DownloadCard/DownloadCard";
import "./DownloadPage.css";

function DownloadPage() {
    return (
      <div className="default-bg">
        <Navbar />
        <div className="download-page--container">
          <div className="download-page-title-container">
            <h3 className='download-page-h3'>ADMIN</h3>
            <h2 className='download-page-h2'>Download</h2>
          </div>
          <div className="download">
            <DownloadCard />
            <DownloadCard />
            <DownloadCard />
            <DownloadCard />
          </div>
          <div className="download-page-button-container">
            <DownloadButton/>
          </div>
        </div>
          
      </div>
    );
  }
  
  export default DownloadPage;