import React from "react";
import { FiArrowUp } from "react-icons/fi";
import useScrollTop from "../hooks/useScrollTop";

export default function ScrollToTop() {
  const show = useScrollTop(400);
  if (!show) return null;

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="fixed bottom-6 right-6 z-50 rounded-full bg-blue-500 p-3
                 text-white shadow-lg transition hover:bg-blue-600"
      aria-label="Scroll to top"
    >
      <FiArrowUp size={20} />
    </button>
  );
}
