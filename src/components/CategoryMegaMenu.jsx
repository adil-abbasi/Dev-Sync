import React from "react";

const categories = [
  "Web Development", "Mobile Apps", "AI Services", "E‑Commerce",
  "Design & UI/UX", "Game Development", "APIs & SaaS", "Chatbots",
  "Blockchain", "AR/VR", "Data Science", "Fintech", "Healthcare Tech",
  "IoT", "Education", "HR Tech", "CRM Systems", "ERP", "DevOps Tools",
  "Machine Learning", "NLP", "No‑Code Tools",
];

export default function CategoryMegaMenu() {
  return (
    <div className="relative group">
      <button className="text-white hover:text-blue-400 transition">
        Browse Categories
      </button>

      {/* Dropdown */}
      <div className="absolute left-1/2 top-full mt-3 w-[700px] max-w-[90vw]
                      -translate-x-1/2 transform bg-gray-900 border border-gray-700
                      rounded-lg shadow-xl z-50 opacity-0 invisible group-hover:opacity-100
                      group-hover:visible transition-all duration-300">
        <div className="grid grid-cols-3 md:grid-cols-4 gap-4 p-6 text-white">
          {categories.map((cat, index) => (
            <div
              key={index}
              className="p-3 text-sm rounded-md transition-all duration-200
                         hover:bg-blue-600/30 hover:-translate-y-0.5 transform cursor-pointer"
            >
              {cat}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
