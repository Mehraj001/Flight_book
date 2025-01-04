
import React, { useState } from "react";
import ReactPlayer from "react-player";

const DecisionTreeWithVideo = () => {
  const [showVideo, setShowVideo] = useState(true);
  const [currentNode, setCurrentNode] = useState("start");

  const decisionTree = {
    start: {
      question: "Do you enjoy outdoor activities?",
      yes: "natureActivity",
      no: "indoorActivity",
    },
    natureActivity: {
      question: "Do you like exploring forests?",
      yes: "forestHike",
      no: "beachVisit",
    },
    indoorActivity: {
      question: "Do you enjoy creative hobbies?",
      yes: "artsCrafts",
      no: "boardGames",
    },
    forestHike: {
      question: "Would you like to learn survival skills during the hike?",
      yes: "survivalCourse",
      no: "scenicHike",
    },
    beachVisit: { result: "Relax by the beach and enjoy the waves!" },
    artsCrafts: {
      question: "Would you prefer painting or crafting?",
      yes: "paintingSession",
      no: "craftWorkshop",
    },
    boardGames: { result: "Have a fun board game night with friends!" },
    survivalCourse: { result: "Enroll in a survival course for an adventurous experience!" },
    scenicHike: { result: "Enjoy a peaceful and scenic hike!" },
    paintingSession: { result: "Join a relaxing painting session!" },
    craftWorkshop: { result: "Participate in an engaging craft workshop!" },
  };

  const handleAnswer = (answer) => {
    if (decisionTree[currentNode][answer]) {
      setCurrentNode(decisionTree[currentNode][answer]);
    }
  };

  const restartTree = () => {
    setCurrentNode("start");
    setShowVideo(true);
  };

  return (
    <div style={styles.container}>
      {showVideo ? (
        <div style={styles.videoSection}>
          <h2 style={styles.header}>Welcome to Decision Trees</h2>
          <p style={styles.description}>
            Watch this video to learn how decision trees help us make logical decisions.
          </p>
          <ReactPlayer
            url="https://www.youtube.com/watch?v=7VeUPuFGJHk" // Replace with an actual educational video URL
            controls
            width="100%"
            height="400px"
          />
          <button style={styles.actionButton} onClick={() => setShowVideo(false)}>
            Start Exploring
          </button>
        </div>
      ) : (
        <div style={styles.interactiveSection}>
          {decisionTree[currentNode].question ? (
            <div>
              <h2 style={styles.question}>{decisionTree[currentNode].question}</h2>
              <div style={styles.buttonGroup}>
                <button
                  style={styles.actionButton}
                  onClick={() => handleAnswer("yes")}
                >
                  Yes
                </button>
                <button
                  style={styles.actionButton}
                  onClick={() => handleAnswer("no")}
                >
                  No
                </button>
              </div>
            </div>
          ) : (
            <div>
              <h2 style={styles.result}>{decisionTree[currentNode].result}</h2>
              <button style={styles.actionButton} onClick={restartTree}>
                Restart Decision Tree
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

const styles = {
  container: {
    fontFamily: "Arial, sans-serif",
    margin: "0",
    padding: "20px",
    backgroundColor: "#f9f9f9",
    color: "#333",
    textAlign: "center",
  },
  videoSection: {
    backgroundColor: "#ffffff",
    margin: "20px auto",
    padding: "20px",
    borderRadius: "8px",
    maxWidth: "700px",
    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
  },
  header: {
    fontSize: "28px",
    color: "#007bff",
  },
  description: {
    margin: "10px 0 20px",
    fontSize: "16px",
    color: "#555",
  },
  interactiveSection: {
    backgroundColor: "#ffffff",
    margin: "20px auto",
    padding: "20px",
    borderRadius: "8px",
    maxWidth: "600px",
    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
  },
  question: {
    fontSize: "24px",
    color: "#007bff",
    marginBottom: "20px",
  },
  buttonGroup: {
    display: "flex",
    justifyContent: "center",
    gap: "10px",
  },
  actionButton: {
    padding: "10px 20px",
    backgroundColor: "#007bff",
    color: "white",
    border: "none",
    borderRadius: "5px",
    fontSize: "16px",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
  },
  actionButtonHover: {
    backgroundColor: "#0056b3",
  },
  result: {
    fontSize: "22px",
    color: "#28a745",
    marginBottom: "20px",
  },
};

export default DecisionTreeWithVideo;
