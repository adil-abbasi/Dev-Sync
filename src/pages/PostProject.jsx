import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import LoginModal from "../components/Auth/LoginModal";
import { Typewriter } from "react-simple-typewriter";
import { FaUpload } from "react-icons/fa";
import axios from "axios";

export default function PostProject({ isAuthenticated, onLoginSuccess }) {
  const [showLogin, setShowLogin] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [budget, setBudget] = useState("");
  const [category, setCategory] = useState("");
  const [titleCount, setTitleCount] = useState(0);
  const [descCount, setDescCount] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) {
      setShowLogin(true);
    }
  }, [isAuthenticated]);

  const handleLoginComplete = () => {
    setShowLogin(false);
    if (onLoginSuccess) onLoginSuccess();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("http://localhost:5000/api/projects", {
        title,
        description,
        budget,
        category,
      });

      console.log("✅ Project posted:", res.data);
      alert("Project posted successfully!");
      navigate("/marketplace");
    } catch (error) {
      console.error("❌ Error posting project:", error);
      alert("Failed to post project.");
    }
  };

  return (
    <div
      className="min-h-screen text-white px-4 py-12 bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1535223289827-42f1e9919769?auto=format&fit=crop&w=1920&q=80')",
      }}
    >
      {showLogin && (
        <LoginModal
          onClose={() => setShowLogin(false)}
          onSuccess={handleLoginComplete}
        />
      )}

      {!showLogin && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-7xl mx-auto">
          {/* LEFT: Info Panel */}
          <div className="relative pt-2">
            <h1 className="text-4xl font-extrabold text-white mb-4">
              Why Choose <span className="text-white">DevSync</span>?
            </h1>
            <div className="mt-6 p-6 text-2xl font-medium bg-black/30 backdrop-blur-lg rounded-2xl border border-white/10 shadow-lg">
              <Typewriter
                words={[
                  "Connect with top developers globally.",
                  "Let DevSync manage your projects.",
                  "End-to-end support for your success.",
                  "SEO optimized project listings.",
                  "AI matches you with ideal talent."
                ]}
                loop={true}
                cursor
                cursorStyle="|"
                typeSpeed={50}
                deleteSpeed={30}
                delaySpeed={1500}
              />
            </div>
          </div>

          {/* RIGHT: Form Panel */}
          <div className="bg-black/40 backdrop-blur-2xl p-8 rounded-2xl shadow-2xl border border-white/10">
            <h2 className="text-3xl font-extrabold text-white mb-6">
              📝 Post Your Project on <span className="text-blue-400">DevSync</span>
            </h2>

            <form className="space-y-5" onSubmit={handleSubmit}>
              <div className="transition transform hover:-translate-y-1">
                <label className="block mb-1 font-semibold text-white">
                  Project Title <span className="text-sm text-gray-300">({titleCount}/80)</span>
                </label>
                <input
                  type="text"
                  maxLength={80}
                  value={title}
                  onChange={(e) => {
                    setTitle(e.target.value);
                    setTitleCount(e.target.value.length);
                  }}
                  placeholder="Enter project title"
                  className="w-full p-3 rounded-lg bg-white/30 text-black border border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="transition transform hover:-translate-y-1">
                <label className="block mb-1 font-semibold text-white">
                  Description <span className="text-sm text-gray-300">({descCount}/3000)</span>
                </label>
                <textarea
                  rows="5"
                  maxLength={3000}
                  value={description}
                  onChange={(e) => {
                    setDescription(e.target.value);
                    setDescCount(e.target.value.length);
                  }}
                  placeholder="Enter project description..."
                  className="w-full p-3 rounded-lg bg-white/30 text-black border border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="transition transform hover:-translate-y-1">
                <label className="block mb-1 font-semibold text-white">Budget ($)</label>
                <input
                  type="number"
                  value={budget}
                  onChange={(e) => setBudget(e.target.value)}
                  placeholder="Enter budget"
                  className="w-full p-3 rounded-lg bg-white/30 text-black border border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* File Uploads — not yet handled */}
              <div className="transition transform hover:-translate-y-1">
                <label className="block mb-1 font-semibold text-white">Category</label>
                <input
                  list="categories"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  placeholder="e.g. Web Development"
                  className="w-full p-3 rounded-lg bg-white/30 text-black border border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <datalist id="categories">
                  <option value="Web Development" />
                  <option value="AI & ML" />
                  <option value="Blockchain" />
                  <option value="Mobile Apps" />
                  <option value="Game Development" />
                  <option value="Cybersecurity" />
                  <option value="E-commerce" />
                  <option value="Data Science" />
                </datalist>
              </div>

              <div className="flex items-center space-x-2 mt-4">
                <input type="checkbox" id="allowDevsync" className="w-5 h-5" />
                <label htmlFor="allowDevsync" className="font-medium text-white">
                  Allow <span className="text-blue-400 font-bold">DevSync</span> to manage deals for me
                </label>
              </div>

              <button
                type="submit"
                className="mt-6 w-full bg-blue-600 hover:bg-blue-700 transition text-white py-3 rounded-lg font-semibold shadow-md"
              >
                🚀 Post Project
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
