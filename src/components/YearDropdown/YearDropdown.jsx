import React, { useState } from 'react';
import "./YearDropdown.css"; 

const YearDropdown = () => {
    const [selectedYear, setSelectedYear] = useState(null);
    const years = Array.from({ length: 10 }, (_, index) => new Date().getFullYear() - index);

    const handleYearChange = (event) => {
        setSelectedYear(event.target.value);
        
    };

    return(
        <div className="year-dropdown">
            <select
                id="yearSelect"
                value={selectedYear}
                onChange={handleYearChange}
                className='dropdown-select'
            >
                {years.map((year) => (
                    <option key={year} value={year}>
                        {year}
                    </option>
                ))}
            </select>

        </div>
        );
};

export default YearDropdown;
