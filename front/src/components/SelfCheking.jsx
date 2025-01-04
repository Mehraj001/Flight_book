
// import React, { useState, useRef } from "react";
// import Sidebar from "./Sidebar";

// const SelfCheking = () => {
//   const [verify, setVerify] = useState(false); // To toggle the webcam
//   const videoRef = useRef(null); // Reference to the video element

//   // Function to start the webcam
//   const startCamera = async () => {
//     try {
//       const stream = await navigator.mediaDevices.getUserMedia({ video: true });
//       videoRef.current.srcObject = stream;
//     } catch (error) {
//       console.error("Error accessing webcam:", error);
//     }
//   };

//   // Stop the webcam when needed
//   const stopCamera = () => {
//     const stream = videoRef.current.srcObject;
//     if (stream) {
//       const tracks = stream.getTracks();
//       tracks.forEach((track) => track.stop());
//       videoRef.current.srcObject = null;
//     }
//   };

//   // Handle Verify button click
//   const handleButtonClick = () => {
//     setVerify(true);
//     startCamera();
//   };

//   // Handle Stop Webcam button
//   const handleStopWebcam = () => {
//     stopCamera();
//     setVerify(false);
//   };

//   return (
//     <div className="flight-search-container">
//       <Sidebar />
//       <div className="flight-search">
//         <div>
//           <h1>One Last Step to Fly</h1>
//           <div className="verify">
//             {!verify ? (
//               <button id="show-button" className="hbhb" onClick={handleButtonClick}>
//                 Verify 
//               </button>
//             ) : (
//               <div>
//                 <h2>Verify Passenger</h2>
//                 <video
//                   ref={videoRef}
//                   autoPlay
//                   style={{
//                     width: "100%",
//                     maxWidth: "400px",
//                     border: "2px solid #ccc",
//                     borderRadius: "8px",
//                     marginTop: "20px",
//                   }}
//                 ></video>
//                 <br />
//                 <button id="show-button" className="hbhb" onClick={handleStopWebcam}>
//                   Close
//                 </button>
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SelfCheking;




import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom"; // Use useNavigate instead of useHistory
import Sidebar from "./Sidebar";

const SelfCheking = () => {
  const [verify, setVerify] = useState(false); // To toggle the webcam
  const [showPopup, setShowPopup] = useState(false); // To show the popup
  const videoRef = useRef(null); // Reference to the video element
  const navigate = useNavigate(); // React Router Hook (for navigation)

  // Function to start the webcam
  const startCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      videoRef.current.srcObject = stream;
    } catch (error) {
      console.error("Error accessing webcam:", error);
    }
  };

  // Stop the webcam when needed
  const stopCamera = () => {
    const stream = videoRef.current.srcObject;
    if (stream) {
      const tracks = stream.getTracks();
      tracks.forEach((track) => track.stop());
      videoRef.current.srcObject = null;
    }
  };

  // Handle Verify button click
  const handleButtonClick = () => {
    setVerify(true);
    startCamera();

    // Set a timer to show the popup after 5 seconds and stop the webcam
    setTimeout(() => {
      setShowPopup(true); // Show popup
      stopCamera(); // Stop webcam when popup is shown
    }, 3000); // 5000 milliseconds = 5 seconds
  };

  // Handle Stop Webcam button
  const handleStopWebcam = () => {
    stopCamera();
    setVerify(false);
  };

  // Redirect to the ticket download page
  const handleDownloadClick = () => {
    navigate("/boarding-pass");  // Redirects to "/ticket-download" page
  };

  return (
    <div className="flight-search-container">
      <Sidebar />
      <div className="flight-search">
        <div>
          <h1>One Last Step to Fly</h1>
          <div className="verify">
            {!verify ? (
              <button id="show-button" className="hbhb" onClick={handleButtonClick}>
                Verify
              </button>
            ) : (
              <div>
                <h2>Verify Passenger</h2>
                <video
                  ref={videoRef}
                  autoPlay
                  style={{
                    width: "100%",
                    maxWidth: "400px",
                    border: "2px solid #ccc",
                    borderRadius: "8px",
                    marginTop: "20px",
                  }}
                ></video>
                <br />
                <button id="show-button" className="hbhb" onClick={handleStopWebcam}>
                  Close
                </button>
              </div>
            )}
          </div>

          {/* Popup after 5 seconds */}
          {showPopup && (
            <div className="popup">
              <div className="popup-content">
                <h2>You successfully booked the ticket!</h2>
                <p>Now download your ticket.</p>
                <button onClick={handleDownloadClick}>Download Ticket</button> {/* Button to trigger download */}
                <button onClick={() => setShowPopup(false)}>Close</button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SelfCheking;
