
import React from 'react';
import Sidebar from './Sidebar'; // Import Sidebar
import './FlightSearch.css';
import FlightBook from './FlightBook';

function FlightSearch() {
  return (
    <div className="flight-search-container">
      <Sidebar /> 
      <div className="flight-search">
        <FlightBook/>
      </div>
    </div>
  );
}

export default FlightSearch;
