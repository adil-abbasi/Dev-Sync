import React from 'react';
import { Link } from 'react-router-dom';
import {
  FiMoon, FiSun
} from 'react-icons/fi';

const Header = ({ darkMode, setDarkMode, categoryCards }) => (
  <header className="flex justify-between items-center px-10 py-6 shadow-md bg-black/70 sticky top-0 z-50 backdrop-blur">
    <h1 className="text-2xl font-bold tracking-wider">
      DevSync<span className="text-blue-400">.</span>
    </h1>

    {/* ---------- NAV ---------- */}
    <nav className="relative space-x-6 text-sm md:text-base flex items-center">
      <Link to="/"          className="hover:text-blue-400 transition">Home</Link>
      <Link to="/dashboard" className="hover:text-blue-400 transition">Dashboard</Link>
      <Link to="/sell"      className="hover:text-blue-400 transition">Business/Sell</Link>
      <Link to="/analytics" className="hover:text-blue-400 transition">Analytics</Link>

      {/* ----- Mega‑menu ----- */}
      <div className="relative group">
        <button className="hover:text-blue-400 transition">Browse Categories</button>
        <div className="absolute left-1/2 transform -translate-x-1/2 mt-3 w-[700px] max-w-[90vw] bg-gray-800
                        border border-gray-700 rounded-lg shadow-lg opacity-0 group-hover:opacity-100
                        invisible group-hover:visible transition-all duration-300 z-50">
          <div className="p-6 grid grid-cols-3 md:grid-cols-4 gap-4">
            {categoryCards.map((cat) => (
              <div key={cat}
                   className="p-3 rounded-md text-sm hover:bg-blue-600/30 hover:-translate-y-0.5 transform
                              transition duration-200 cursor-pointer">
                {cat}
              </div>
            ))}
          </div>
        </div>
      </div>

      <Link to="/login"    className="hover:text-blue-400 transition">Login</Link>
      <Link to="/register" className="hover:text-blue-400 transition">Sign&nbsp;Up</Link>
    </nav>

    {/* DARK/LIGHT toggle */}
    <button
      onClick={() => setDarkMode(!darkMode)}
      className="ml-4 p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition"
      aria-label="Toggle dark mode"
    >
      {darkMode ? <FiSun /> : <FiMoon />}
    </button>
  </header>
);

export default Header;
