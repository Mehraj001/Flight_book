


import Sidebar from './Sidebar';
import React, { useState } from "react";
import Webcam from "react-webcam";
import axios from "axios"; // For making HTTP requests
import "./FormWithWebcam.css";
import logo from '../assets/images.jpg';
import { useNavigate } from "react-router-dom";
const FormWithWebcam = () => {
  const [formData, setFormData] = useState([
    { firstName: "", lastName: "", email: "", image: null, showWebcam: false },
    { firstName: "", lastName: "", email: "", image: null, showWebcam: false },
  ]);
  const webcamRef = React.useRef(null);
 const navigate = useNavigate();
  const handleChange = (index, field, value) => {
    const updatedFormData = [...formData];
    updatedFormData[index][field] = value;
    setFormData(updatedFormData);
  };

  const capture = (index) => {
    const imageSrc = webcamRef.current.getScreenshot();
    const updatedFormData = [...formData];
    updatedFormData[index].image = imageSrc;
    updatedFormData[index].showWebcam = false;
    setFormData(updatedFormData);
  };

  const toggleWebcam = (index) => {
    const updatedFormData = [...formData];
    updatedFormData[index].showWebcam = !updatedFormData[index].showWebcam;
    setFormData(updatedFormData);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const formPayload = {
      formData: formData, // Send the form data with base64 image strings
    };

    try {
      const response = await axios.post("http://localhost:5000/submit-form", formPayload);
      console.log(response.data);
      alert("Form submitted successfully!");
      navigate("/select-seat");
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Form submission failed!");
    }
  };

  return (
    <div className="flight-search-container">
      <Sidebar />
      <div className="flight-search">
        <div className="form-container">
          <img src={logo} alt="Logo" className="form-logo" />
          <h2>Enter Details</h2>

          <form onSubmit={handleSubmit}>
            {formData.map((person, index) => (
              <div key={index}>
                <div className="person">
                  <h2>{`Person ${index + 1}`}</h2>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label>First Name *</label>
                    <input
                      type="text"
                      value={person.firstName}
                      placeholder="First name"
                      onChange={(e) => handleChange(index, "firstName", e.target.value)}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label>Last Name *</label>
                    <input
                      type="text"
                      value={person.lastName}
                      placeholder="Last name"
                      onChange={(e) => handleChange(index, "lastName", e.target.value)}
                      required
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label>Email Address *</label>
                  <input
                    type="email"
                    value={person.email}
                    placeholder="Email Address"
                    onChange={(e) => handleChange(index, "email", e.target.value)}
                    required
                  />
                </div>

                <div className="webcam-container">
                  <label>Capture your face from different angles</label>
                  {!person.showWebcam ? (
                    <>
                      {person.image ? (
                        <img
                          src={person.image}
                          alt="Captured"
                          style={{
                            width: "76%",
                            borderRadius: "10px",
                            border: "1px solid #ccc",
                            marginBottom: "10px",
                          }}
                        />
                      ) : (
                        <img
                          src="https://i.gifer.com/embedded/download/SOtA.gif"
                          alt="Default"
                          style={{
                            width: "76%",
                            borderRadius: "10px",
                            border: "1px solid #ccc",
                            marginBottom: "10px",
                          }}
                        />
                      )}
                      <button
                        type="button"
                        onClick={() => toggleWebcam(index)}
                        className="capture-btn"
                      >
                        {person.image ? "Retake Photo" : "Open Webcam"}
                      </button>
                    </>
                  ) : (
                    <>
                      <Webcam
                        audio={false}
                        ref={webcamRef}
                        screenshotFormat="image/jpeg"
                        style={{
                          width: "100%",
                          borderRadius: "10px",
                          border: "1px solid #ccc",
                          marginBottom: "10px",
                        }}
                      />
                      <button
                        type="button"
                        onClick={() => capture(index)}
                        className="capture-btn"
                      >
                        Capture Photo
                      </button>
                    </>
                  )}
                </div>
              </div>
            ))}

            <button type="submit" className="submit-btn">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FormWithWebcam;

