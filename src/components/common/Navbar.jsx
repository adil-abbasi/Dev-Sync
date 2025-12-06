import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FiMoon, FiSun } from "react-icons/fi";
import CategoryMegaMenu from "../landing/CategoryMegaMenu";
import LoginModal from "../Auth/LoginModal";
import SignupModal from "../Auth/SignupModal";

export default function Navbar({ dark, toggleDark }) {
  const { pathname } = useLocation();
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);

  const navItems = [
    { label: "Home", to: "/" },
    { label: "Marketplace", to: "/marketplace" },
    { label: "Analytics", to: "/analytics" },
  ];

  // Lock scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = showLogin || showSignup ? "hidden" : "auto";
  }, [showLogin, showSignup]);

  const handleSwitchToSignup = () => {
    setShowLogin(false);
    setShowSignup(true);
  };

  return (
    <>
      <header className="fixed top-0 z-50 w-full h-20 bg-black/90 shadow-md backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          {/* Brand */}
          <Link to="/" className="text-2xl font-bold tracking-wider text-white">
            DevSync<span className="text-blue-400">.</span>
          </Link>

          {/* Nav Links */}
          <nav className="hidden md:flex items-center space-x-6 text-sm lg:text-base">
            {navItems.map(({ label, to }) => (
              <Link
                key={label}
                to={to}
                className={`transition hover:text-blue-400 ${
                  pathname === to ? "text-blue-400" : "text-white"
                }`}
              >
                {label}
              </Link>
            ))}

            {/* Category Dropdown */}
            <div className="hidden lg:block">
              <CategoryMegaMenu />
            </div>

            {/* Login Trigger Only */}
            <button
              onClick={() => setShowLogin(true)}
              className="text-white hover:text-blue-400 transition"
            >
              Login
            </button>
          </nav>

          {/* CTA + Dark Toggle */}
          <div className="flex items-center space-x-4">
            <Link
              to="/post"
              className="hidden md:inline-block rounded-full bg-blue-600 px-5 py-2 text-sm font-semibold text-white shadow hover:bg-blue-700 transition"
            >
              + Post a Project
            </Link>

            <button
              onClick={toggleDark}
              className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition"
              aria-label="Toggle dark mode"
            >
              {dark ? <FiSun className="text-white" /> : <FiMoon className="text-white" />}
            </button>
          </div>
        </div>
      </header>

      {/* LOGIN & SIGNUP MODALS */}
      {showLogin && (
        <LoginModal
          onClose={() => setShowLogin(false)}
          onSwitchToSignup={handleSwitchToSignup}
        />
      )}
      {showSignup && (
        <SignupModal
          onClose={() => setShowSignup(false)}
        />
      )}
    </>
  );
}
