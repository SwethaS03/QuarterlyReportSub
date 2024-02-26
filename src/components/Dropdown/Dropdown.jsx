// YearDropdown.jsx

import React, { useState } from 'react';
import "./YearDropdown.css"; // Import the associated CSS file

const YearDropdown = () => {
    const [selectedYear, setSelectedYear] = useState(null);
    const years = Array.from({ length: 10 }, (_, index) => new Date().getFullYear() - index);

    const handleYearChange = (event) => {
        setSelectedYear(event.target.value);
        // You can add additional logic here based on the selected year
    };

    return (
        <div className="year-dropdown">
            <label htmlFor="yearSelect">Select a Year:</label>
            <select
                id="yearSelect"
                value={selectedYear}
                onChange={handleYearChange}
            >
                <option value="" disabled>Select a Year</option>
                {years.map((year) => (
                    <option key={year} value={year}>
                        {year}
                    </option>
                ))}
            </select>
            {selectedYear && (
                <p>You selected: {selectedYear}</p>
            )}
        </div>
    );
};

export default YearDropdown;
