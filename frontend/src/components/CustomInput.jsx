// src/components/CustomInput.jsx
import React from "react";

const CustomInput = ({ label, type = "text", placeholder, value, onChange }) => {
  return (
    <div className="mb-4">
      <label className="block text-sm text-gray-300 mb-1">{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="w-full px-4 py-2 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:border-blue-500 text-white"
      />
    </div>
  );
};

export default CustomInput;
