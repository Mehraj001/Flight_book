
import React, { useState } from "react";
import "./Selectshett.css";
import Sidebar from './Sidebar';
import { Link } from "react-router-dom";

const SeatSelection = () => {
  const [selectedSeats, setSelectedSeats] = useState([]);

  const rows = 12;
  const cols = 6;
  const seatLetters = ["A", "B", "C", "D", "E", "F"]; 

  const handleSeatClick = (seatNumber) => {
    
    if (selectedSeats.includes(seatNumber)) {
      setSelectedSeats(selectedSeats.filter((seat) => seat !== seatNumber));
    } else {
     
      if (selectedSeats.length === 2) {
        setSelectedSeats([seatNumber]); 
      } else {
        setSelectedSeats((prevSeats) => [...prevSeats, seatNumber]);
      }
    }
  };

  return (
    <div className="flight-search-container">
      <Sidebar />
      <div className="flight-search">
        <div className="link">
          <button className="btn">
            <Link to={'/passenger-details'}>Previous</Link>
          </button>
          <button className="btn">
            <Link to={'/self-check-in'}>Next</Link>
          </button>
        </div>
        <div className="seat-map">
          {Array.from({ length: rows }).map((_, rowIndex) => (
            <div key={rowIndex} className="seat-row">
              {seatLetters.map((letter) => {
                const seatNumber = `${rowIndex + 1}${letter}`;
                return (
                  <div
                    key={seatNumber}
                    className={`seat ${selectedSeats.includes(seatNumber) ? "selected" : ""}`}
                    onClick={() => handleSeatClick(seatNumber)}
                  >
                    {seatNumber}
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SeatSelection;
