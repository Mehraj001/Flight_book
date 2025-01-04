// server.js
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");


// Initialize Express app
const app = express();
const port = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json({ limit: "50mb" })); // Increase limit to 50mb (adjust as needed)
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));

// MongoDB connection URI
const mongoURI =`mongodb://localhost:27017/myapp` ;

// Connect to MongoDB using Mongoose
mongoose.connect(mongoURI)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err);
  });

// Define a Mongoose schema for form data
const formSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  image: String, // Base64 image string
});

// Create a Mongoose model from the schema
const FormData = mongoose.model("FormData", formSchema);

// Handle the POST request to submit form data
app.post("/submit-form", async (req, res) => {
  try {
    const { formData } = req.body; // The form data from the frontend

    // Loop through each form entry (person) and save it to MongoDB
    for (const person of formData) {
      // Create a new document for each person
      const newFormData = new FormData({
        firstName: person.firstName,
        lastName: person.lastName,
        email: person.email,
        image: person.image, // Base64 string for the image
      });

      // Save the document to MongoDB
      await newFormData.save();
    }

    res.status(200).json({ message: "Form data received and saved to MongoDB!" });
  } catch (error) {
    console.error("Error saving form data:", error);
    res.status(500).json({ message: "Failed to save form data to MongoDB" });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
