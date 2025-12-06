import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { FiSearch, FiFilter, FiUser } from "react-icons/fi";
import axios from "axios";

export default function Marketplace() {
  const [projects, setProjects] = useState([]);
  const [search, setSearch] = useState("");
  const [showFilters, setShowFilters] = useState(false);
  const [sortOption, setSortOption] = useState("Newest");
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const filterTimeoutRef = useRef(null);
  const navigate = useNavigate();

  // ✅ Check for token and fetch projects
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) setIsSignedIn(true);

    axios
      .get("http://localhost:5000/api/projects")
      .then((res) => setProjects(res.data))
      .catch((err) => console.error(err));
  }, []);

  const handleLogin = () => {
    window.location.href = "http://localhost:5000/auth/google"; // Redirect to backend Google auth
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsSignedIn(false);
    navigate("/"); // Optional: go back to home
  };

  const filteredProjects = [...projects]
    .filter((project) =>
      project.title.toLowerCase().includes(search.toLowerCase())
    )
    .sort((a, b) => {
      if (sortOption === "Price Low") return a.budget - b.budget;
      if (sortOption === "Price High") return b.budget - a.budget;
      return 0;
    });

  return (
    <section className="min-h-screen bg-gray-100 dark:bg-gray-900 py-20 px-6 transition-colors">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white">
            DevSync Marketplace
          </h2>
          <div className="relative">
            {!isSignedIn ? (
              <button
                onClick={handleLogin}
                className="bg-blue-600 text-white px-5 py-2 rounded-full hover:bg-blue-700"
              >
                Sign in with Google
              </button>
            ) : (
              <div
                className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center cursor-pointer"
                onMouseEnter={() => setShowProfileMenu(true)}
                onMouseLeave={() => setTimeout(() => setShowProfileMenu(false), 1000)}
              >
                <FiUser className="text-xl" />
                {showProfileMenu && (
                  <motion.div
                    className="absolute right-0 mt-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-md shadow-lg w-48 z-50"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    <ul className="p-2 text-sm text-gray-700 dark:text-white">
                      <li className="hover:bg-gray-100 dark:hover:bg-gray-700 rounded px-3 py-2 cursor-pointer">
                        Account Settings
                      </li>
                      <li className="hover:bg-gray-100 dark:hover:bg-gray-700 rounded px-3 py-2 cursor-pointer">
                        Analytics
                      </li>
                      <li
                        className="hover:bg-gray-100 dark:hover:bg-gray-700 rounded px-3 py-2 cursor-pointer"
                        onClick={handleLogout}
                      >
                        Logout
                      </li>
                    </ul>
                  </motion.div>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Search + Filter */}
        <div className="flex justify-between items-center gap-4 mb-10 relative">
          {/* Search Icon */}
          <div className="relative group">
            <FiSearch className="text-2xl text-gray-600 dark:text-white cursor-pointer" />
            <input
              type="text"
              placeholder="Search..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="absolute top-0 left-0 w-48 opacity-0 group-hover:opacity-100 p-2 pl-10 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-sm transition-opacity duration-300"
            />
          </div>

          {/* Filter Icon */}
          <div
            className="relative"
            onMouseEnter={() => {
              if (filterTimeoutRef.current) clearTimeout(filterTimeoutRef.current);
              setShowFilters(true);
            }}
            onMouseLeave={() => {
              filterTimeoutRef.current = setTimeout(() => {
                setShowFilters(false);
              }, 1000);
            }}
          >
            <FiFilter className="text-2xl text-gray-600 dark:text-white cursor-pointer" />
            {showFilters && (
              <motion.div
                className="absolute left-0 mt-3 bg-white dark:bg-gray-800 shadow-lg border border-gray-200 dark:border-gray-700 rounded-md w-48 p-2 z-50"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2 }}
              >
                <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 mb-2">
                  Sort By
                </p>
                {["Newest", "Oldest", "Price Low", "Price High"].map((option) => (
                  <button
                    key={option}
                    onClick={() => {
                      setSortOption(option);
                      setShowFilters(false);
                    }}
                    className={`w-full text-left text-sm px-3 py-2 rounded hover:bg-blue-100 dark:hover:bg-gray-700 ${
                      sortOption === option
                        ? "bg-blue-200 font-medium dark:bg-blue-600 text-white"
                        : ""
                    }`}
                  >
                    {option}
                  </button>
                ))}
              </motion.div>
            )}
          </div>
        </div>

        {/* Project Cards */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project, index) => (
              <motion.div
                key={project._id || index}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden hover:shadow-2xl transition-all duration-300"
                whileHover={{ scale: 1.03 }}
              >
                <div className="flex items-center justify-center text-5xl py-6 bg-blue-50 dark:bg-gray-700">
                  📦
                </div>
                <div className="p-5">
                  <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                    {project.title}
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">
                    Category: {project.category}
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-3 line-clamp-3">
                    {project.description}
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-blue-600 font-bold text-lg">
                      ${project.budget}
                    </span>
                    <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
                      View
                    </button>
                  </div>
                </div>
              </motion.div>
            ))
          ) : (
            <motion.div className="col-span-full text-center text-gray-500 dark:text-gray-400">
              <p className="text-lg">🔍 No projects found matching your search.</p>
            </motion.div>
          )}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <h3 className="text-2xl font-bold mb-3 text-gray-800 dark:text-white">
            Got a project to share?
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mb-5">
            Start monetizing your creation on{" "}
            <span className="text-blue-600 font-medium">DevSync</span> today.
          </p>
          <Link
            to="/submit-project"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-full font-medium hover:bg-blue-700 transition"
          >
            🚀 Post Your Project
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
