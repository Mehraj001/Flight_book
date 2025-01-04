
import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import { IoIosSearch } from "react-icons/io";
import { LuArrowRightLeft } from "react-icons/lu";
import { FaPlane } from "react-icons/fa";
import "./FlightSearch.css";
import { useNavigate } from "react-router-dom";

// Define styled-components for results
const FlightResultsContainer = styled.div`
width: 96%;
    max-width: 1034px;
    margin: 257px auto;
    background: rgba(255, 255, 255, 0.9);
    padding: 8px;
    border-radius: 10px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
    margin-left: -189px;
`;

const Title = styled.h2`
  text-align: center;
  color: #333;
  margin-bottom: 20px;
`;

const ResultsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const ResultCard = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  border: 1px solid #ddd;
  border-radius: 8px;
  background: #fff;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
`;

const FlightInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const Airline = styled.p`
  font-size: 18px;
  font-weight: bold;
`;

const Time = styled.p`
  font-size: 14px;
  color: #555;
`;

const Duration = styled.p`
  font-size: 14px;
  color: #555;
`;

const PriceSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

const Price = styled.p`
  font-size: 18px;
  font-weight: bold;
  color: #28a745;
`;

const SelectButton = styled.button`
  margin-top: 10px;
  padding: 10px 15px;
  font-size: 14px;
  color: white;
  background: #ff4771;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background: #ff77a1;
  }
`;

const airports = [
  { code: "DEL", city: "New Delhi", name: "Indira Gandhi International Airport" },
  { code: "HYD", city: "Hyderabad", name: "Rajiv Gandhi International Airport" },
  { code: "BOM", city: "Mumbai", name: "Chhatrapati Shivaji Maharaj International Airport" },
  { code: "BAN", city: "Bangalore", name: "Kempegowda International Airport" },
  { code: "PUN", city: "Pune", name: "Lohegaon Airport" },
  { code: "MAS", city: "Chennai", name: "Chennai International Airport" },
  { code: "KOL", city: "Kolkata", name: "Netaji Subhash Chandra Bose International Airport" },
  { code: "LOK", city: "Lucknow", name: "Chaudhary Charan Singh Airport" },
];

const FlightBook = () => {
  const [fromDropdownOpen, setFromDropdownOpen] = useState(false);
  const [toDropdownOpen, setToDropdownOpen] = useState(false);
  const [fromValue, setFromValue] = useState("");
  const [toValue, setToValue] = useState("");
  const [date, setDate] = useState("");
  const [results, setResults] = useState([]);
  const [error, setError] = useState("");

  const fromDropdownRef = useRef(null);
  const toDropdownRef = useRef(null);

  const navigate = useNavigate();

  const handleSelect = (flight) => {
    navigate("/boarding-pass", { state: { flight } });
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (fromDropdownRef.current && !fromDropdownRef.current.contains(event.target)) {
        setFromDropdownOpen(false);
      }
      if (toDropdownRef.current && !toDropdownRef.current.contains(event.target)) {
        setToDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleSearch = () => {
    if (!fromValue || !toValue || !date) {
      setError("Please fill all fields!");
      return;
    }
    setError("");

    const searchResults = [
      { airline: "SpiceJet", time: "20:08 - 22:08", duration: "2hr-15min", price: "₹7,350" },
      { airline: "IndiGo", time: "21:08 - 23:08", duration: "2hr-15min", price: "₹7,650" },
      { airline: "Akasa Air", time: "14:08 - 16:08", duration: "2hr-15min", price: "₹8,180" },
      { airline: "Vistara", time: "17:08 - 19:08", duration: "2hr-15min", price: "₹8,350" },
    ];
    setResults(searchResults);
  };

  return (
    <div className="flight-search-container">
      <div className="flight-search">
        <h1>Search Flight</h1>
        <div className="search-box">
          <div className="dropdown-container" ref={fromDropdownRef}>
            <input
              type="text"
              placeholder="From"
              value={fromValue}
              onClick={() => setFromDropdownOpen(true)}
              onChange={(e) => setFromValue(e.target.value)}
            />
            {fromDropdownOpen && (
              <ul className="dropdown">
                {airports
                  .filter(
                    (airport) =>
                      airport.city.toLowerCase().includes(fromValue.toLowerCase()) ||
                      airport.code.toLowerCase().includes(fromValue.toLowerCase())
                  )
                  .map((airport) => (
                    <li
                      key={airport.code}
                      onClick={() => {
                        setFromValue(`${airport.code} - ${airport.city}`);
                        setFromDropdownOpen(false);
                      }}
                    >
                      <FaPlane className="flight-icon" />
                      <div>
                        <strong>
                          {airport.code} - {airport.city}
                        </strong>
                        <span>{airport.name}</span>
                      </div>
                    </li>
                  ))}
              </ul>
            )}
          </div>

          <span className="arrow-double">
            <LuArrowRightLeft />
          </span>

          <div className="dropdown-container" ref={toDropdownRef}>
            <input
              type="text"
              placeholder="To"
              value={toValue}
              onClick={() => setToDropdownOpen(true)}
              onChange={(e) => setToValue(e.target.value)}
            />
            {toDropdownOpen && (
              <ul className="dropdown">
                {airports
                  .filter(
                    (airport) =>
                      airport.city.toLowerCase().includes(toValue.toLowerCase()) ||
                      airport.code.toLowerCase().includes(toValue.toLowerCase())
                  )
                  .map((airport) => (
                    <li
                      key={airport.code}
                      onClick={() => {
                        setToValue(`${airport.code} - ${airport.city}`);
                        setToDropdownOpen(false);
                      }}
                    >
                      <FaPlane className="flight-icon" />
                      <div>
                        <strong>
                          {airport.code} - {airport.city}
                        </strong>
                        <span>{airport.name}</span>
                      </div>
                    </li>
                  ))}
              </ul>
            )}
          </div>

          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />

          <button className="icon" onClick={handleSearch}>
            <IoIosSearch />
          </button>
        </div>
        {error && <p className="error">{error}</p>}
      </div>

      {results.length > 0 && (
        <FlightResultsContainer>
          <Title>Available Flights</Title>
          <ResultsContainer>
            {results.map((flight, index) => (
              <ResultCard key={index}>
                <FlightInfo>
                  <Airline>{flight.airline}</Airline>
                  <Time>{flight.time}</Time>
                  <Duration>{flight.duration}</Duration>
                </FlightInfo>
                <PriceSection>
                  <Price>{flight.price}</Price>
                  <SelectButton onClick={() => handleSelect(flight)}>Select</SelectButton>
                </PriceSection>
              </ResultCard>
            ))}
          </ResultsContainer>
        </FlightResultsContainer>
      )}
    </div>
  );
};

export default FlightBook;
