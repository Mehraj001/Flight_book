import React, { useState } from 'react';
import './Sidebar.css';
import { HiOutlineChevronDoubleLeft } from "react-icons/hi";
import { HiOutlineChevronDoubleRight } from "react-icons/hi";
import { useNavigate } from 'react-router-dom';

function Sidebar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path); // Navigate to the specified path
  };

  return (
    <div className={`sidebar ${isSidebarOpen ? 'open' : 'closed'}`}>
      <div className="SidearCon">
        <div className="sidebar-toggle" onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
          {isSidebarOpen ? <HiOutlineChevronDoubleRight /> : <HiOutlineChevronDoubleLeft />}
        </div>
        {isSidebarOpen && (
          <ul>
            <li onClick={() => handleNavigation('/')}>Search Flight</li>
            <li onClick={() => handleNavigation('/passenger-details')}>Passenger Details</li>
            <li onClick={() => handleNavigation('/select-seat')}>Select Seat</li>
            <li onClick={() => handleNavigation('/boarding-pass')}>Boarding Pass</li>
            <li onClick={() => handleNavigation('/self-check-in')}>Self Check-in</li>
            <li onClick={() => handleNavigation('/conclusion')}>Conclusion</li>
          </ul>
        )}
      </div>
    </div>
  );
}

export default Sidebar;
