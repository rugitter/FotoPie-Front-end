import { useState } from "react";
import { createImage } from "../../axiosRequest/api/createImage";
import Image from "mui-image";

// Create the component
const TextInputWithSubmit = () => {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = async () => {
    try {
      const response = await createImage({
        prompt: inputValue,
      });

      const url_1 = response.data.url_1;
      const url_2 = response.data.url_2;
      const url_3 = response.data.url_3;
      const url_4 = response.data.url_4;
    } catch (error) {
      console.error("Error submitting input:", error);
    }
  };

  return (
    <div className="container">
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
      <Image src={url_1} alt="image" />
      <Image src="`${url_2}`" alt="" />
      <Image src="`${url_3}`" alt="" />
      <Image src="`${url_4}`" alt="" />
    </div>
  );
};

export default TextInputWithSubmit;
