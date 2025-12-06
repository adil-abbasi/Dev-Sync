// src/components/PrimaryButton.jsx
import React from "react";

const PrimaryButton = ({ text, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded transition-all duration-300"
    >
      {text}
    </button>
  );
};

export default PrimaryButton;
