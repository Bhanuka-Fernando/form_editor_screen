import React from "react";

const Welcome = ({ welcomeData }) => {
  return (
    <div className="welcome-page">
      <h2>Welcome Screen</h2>
      <p><strong>Title:</strong> {welcomeData.title || "No title provided"}</p>
      <p><strong>Description:</strong> {welcomeData.description || "No description provided"}</p>
      <p>
        <strong>Image:</strong>{" "}
        {welcomeData.image ? (
          <img src={welcomeData.image} alt="Welcome" style={{ maxWidth: "200px" }} />
        ) : (
          "No image URL provided"
        )}
      </p>
    </div>
  );
};

export default Welcome;
