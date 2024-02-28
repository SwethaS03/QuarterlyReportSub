import React from 'react';
import EditCalendarOutlinedIcon from '@mui/icons-material/EditCalendarOutlined';import "./QuarterAdmin.css";

const SquareCard = () => {
    return (
        <div className="square-card">
            <div className="top-left">
                <h2 className="quarter-title">Quarter</h2>
                <div className="gradient-number">01</div>
            </div>
            <div className='month-icon-container'>
                <div className="bottom-left">
                    <p className="month-range">Jan-Mar</p>
                </div>
                <div className='icon-container'>
                    <div className='rounded-outline'>
                        <EditCalendarOutlinedIcon style={{ fontSize: '1.5rem', color: 'black'}}/>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default SquareCard;


