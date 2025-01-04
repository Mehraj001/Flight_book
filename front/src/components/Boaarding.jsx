
import Sidebar from './Sidebar';
import React, { useState } from "react";
import { jsPDF } from "jspdf";
import "./SelfCheaking.css";
import { Link } from 'react-router-dom';

const BoardingPass = () => {
  const [showModal, setShowModal] = useState(false);

  const handleButtonClick = () => {
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
  };
  
  const handlePrint = () => {
    const doc = new jsPDF();
    // Customize PDF content
    doc.setFontSize(16);
    doc.text("Boarding Pass Issued (Final Approval Pending)", 10, 20);
    doc.setFontSize(12);
    doc.text("Flight: 6E 6182", 10, 40);
    doc.text("Gate: A 21", 10, 50);
    doc.text("Boarding Time: 1500", 10, 60);
    doc.text("Boarding: Zone 1", 10, 70);
    doc.text("Date: Undefined", 10, 80);
    doc.text("Seq: 0102", 10, 90);
    doc.text("Departure: 1555 Hrs", 10, 100);
    doc.text("PNR: KV4FXW", 10, 110);
    doc.text("Services: NIL", 10, 120);
    doc.text(
      "Gate is subject to change and will close 25 minutes prior to departure.",
      10,
      140
    );

    // Save the PDF
    doc.save("BoardingPass.pdf");
  };

  return (
    
    <div className="flight-search-container">
        <Sidebar />
        <div className="flight-search">
          <h1>Collect Your Boarding Pass</h1>
        <div>
         <button id="show-button" onClick={handleButtonClick}>
        Show Boarding Pass 1
       </button>
       <button id="show-button" onClick={handleButtonClick}>
        Show Boarding Pass 2
       </button>
      {showModal && (
        <div id="modal-overlay">
          <div id="modal-content">
            <div id="boarding-pass">
              <h2>Boarding Pass Issued (Final Approval Pending)</h2>
              <div id="details">
                
                <div id="left-section">
                
                  <p>
                    <strong>Flight:</strong> 6E 6182
                  </p>
                  <p>
                    <strong>Gate:</strong> A 21
                  </p>
                  <p>
                    <strong>Boarding Time:</strong> 1500
                  </p>
                  <p>
                    <strong>Boarding:</strong> Zone 1
                  </p>
                  <p>
                    <strong>Date:</strong> Undefined
                  </p>
                  <p>
                    <strong>Seq:</strong> 0102
                  </p>
                  </div>
             
              
                <div id="right-section">
                  <p>
                    <strong>Departure:</strong> 1555 Hrs
                  </p>
                  <p>
                    <strong>PNR:</strong> KV4FXW
                  </p>
                  <p>
                    <strong>Services:</strong> NIL
                  </p>

                  {/* Add the image in place of the QR code */}
                  <div className="qrcode">
                    <img
                      src="https://via.placeholder.com/100" // Replace with your QR image URL
                      alt="QR Code"
                      className="qr-image"
                    />
                  </div>
                </div>
              </div>
              <button id="print-button" onClick={handlePrint}>
                Print as PDF
              </button>
              <button id="close-button" onClick={handleClose}>
                Close
              </button>
            </div>
          </div>
        </div>
        
      )}
      <div className="belowBtn">
      <button id="show-button" className='hbhb' >
        <Link to={`/self-check-in`}>Check in</Link>
       </button>
       <button id="show-button" className='hbhb' >
        <Link to={`/select-seat`}>Previous</Link>
       </button>
      </div>
       
    </div>
    </div>
    </div>
  );
};

export default BoardingPass;

