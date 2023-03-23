import React, { useState } from "react";
import axios from "axios";

// Create the component
const TextInputWithSubmit = () => {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = async () => {
    try {
      await axios.post("/api/submit", { content: inputValue });
    } catch (error) {
      console.error("Error submitting input:", error);
    }
  };

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        style={{
          boxShadow:
            "0 2px 4px rgba(0, 0, 0, 0.1), 2px 0 4px rgba(0, 0, 0, 0.1), -2px 0 4px rgba(0, 0, 0, 0.1)",
          borderRadius: "4px",
          padding: "8px",
          fontSize: "16px",
          marginRight: "8px",
        }}
      />
      <button
        onClick={handleSubmit}
        style={{
          backgroundColor: "#007BFF",
          color: "white",
          borderRadius: "4px",
          padding: "8px 16px",
          fontSize: "16px",
          cursor: "pointer",
          border: "none",
        }}
      >
        Generate
      </button>
    </div>
  );
};

export default TextInputWithSubmit;
