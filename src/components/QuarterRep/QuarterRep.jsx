import React from 'react';
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import "./QuarterRep.css";


const SquareCard = () => {
    return (
        <div className="square-card">
            <div className="top-left">
                <div className="quarter-title">Quarter</div>
                <div className="gradient-number">01</div>
            </div>
            <div className='month-icon-container'>
                <div className="bottom-left">
                    <p className="month-range">Jan-Mar</p>
                </div>
                <div className='icon-container'>
                    <div className='rounded-outline'>
                        <FileUploadOutlinedIcon style={{ fontSize: '1.5rem', color: 'black'}}/>
                    </div>
                    <div className='rounded-outline'>
                        <FileDownloadOutlinedIcon style={{ fontSize: '1.5rem', color: 'black' }}/>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default SquareCard;


