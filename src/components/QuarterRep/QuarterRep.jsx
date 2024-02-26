import React from 'react';
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import "./QuarterRep.css";

// const QuarterRep = () => {

//     return (
//         <div className="card">
//             <div className='card-content'>
//                 <h2 className="card-title">Quarter</h2>
//                 <p className="card-number">01</p>
//                 <p className="card-description">Jan-Mar 2023</p>
//             </div>
//             <div className="card-actions">
//                 <IconButton aria-label="upload">
//                     <FileUploadOutlinedIcon />
//                 </IconButton>
//                 <IconButton aria-label="download">
//                     <FileDownloadOutlinedIcon />
//                 </IconButton>
//             </div>
//         </div>
//     );
// };

const SquareCard = () => {
    return (
        <div className="square-card">
            <div className="top-left">
                <h2 className="title">Quarter</h2>
                <div className="gradient-number">01</div>
            </div>
            <div className="bottom-left">
                <p className="month-range">Jan-Mar</p>
            </div>
            <div className="bottom-right">
                <span className="icon">📥</span>
                <span className="icon">📤</span>
            </div>
        </div>
    );
};

export default SquareCard;

// export default QuarterRep;


// const SquareCard = () => {
//   return (
//     <div className="square-card">
//       <div className="title">Title</div>
//       <div className="number">123</div>
//       <div className="month-range">January - March</div>
//       <div className="icons">
//          <IconButton aria-label="upload">
//                      <FileUploadOutlinedIcon />
//         </IconButton>
//         <IconButton aria-label="download">
//                      <FileDownloadOutlinedIcon />
//         </IconButton>
//       </div>
//     </div>
//   );
// };

// export default SquareCard;
