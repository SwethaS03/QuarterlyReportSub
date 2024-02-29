import React from 'react';
import EditCalendarOutlinedIcon from '@mui/icons-material/EditCalendarOutlined';import "./QuarterAdmin.css";
import './QuarterAdmin.css'
const SquareCard = () => {
    return (
        <div className="qadmin-square-card">
            <div className="qadmin-top-left">
                <h2 className="qadmin-quarter-title">Quarter</h2>
                <div className="qadmin-gradient-number">01</div>
            </div>
            <div className='qadmin-month-icon-container'>
                <div className="qadmin-bottom-left">
                    <p className="qadmin-month-range">Jan-Mar</p>
                </div>
                <div className='qadmin-icon-container'>
                    <div className='qadmin-rounded-outline'>
                        <EditCalendarOutlinedIcon style={{ fontSize: '1.5rem', color: 'black'}}/>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default SquareCard;


