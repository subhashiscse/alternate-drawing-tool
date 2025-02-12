import React, { useState } from "react";
import { ChromePicker } from "react-color";

const ColorPicker = () => {
  // State to manage the selected color
  const [color, setColor] = useState("#c53b3b");

  // State to manage the visibility of the color picker
  const [showPicker, setShowPicker] = useState(false);

  // Function to handle color change
  const handleColorChange = (newColor) => {
    setColor(newColor.hex);
  };

  return (
    <div style={{ fontFamily: "Arial, sans-serif", textAlign: "center" }}>
      {/* Color Preview Box */}
      <div
        style={{
          width: "25px",
          height: "25px",
          backgroundColor: color,
          border: "2px solid #000",
          borderRadius: "8px",
          cursor: "pointer",
          margin: "10px auto",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "#fff",
          fontSize: "18px",
          fontWeight: "bold",
          textShadow: "1px 1px 3px rgba(0, 0, 0, 0.5)",
        }}
        onClick={() => setShowPicker(!showPicker)}
      >
      </div>
      {showPicker && (
        <div style={{ margin: "20px auto", display: "inline-block" }}>
          <ChromePicker color={color} onChange={handleColorChange} />
        </div>
      )}
    </div>
  );
};

export default ColorPicker;