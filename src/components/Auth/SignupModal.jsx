import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaGoogle, FaFacebookF, FaApple } from "react-icons/fa";

export default function SignupModal({ onClose, onSwitchToLogin }) {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const allowedDomains = ["gmail.com", "yahoo.com", "outlook.com"];

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError("");
  };

  const isValidEmail = (email) => {
    const pattern = /^[^\s@]+@[^\s@]+\.(com)$/i;
    const domain = email.split("@")[1];
    return pattern.test(email) && allowedDomains.includes(domain);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.password) {
      return setError("Please fill in all fields.");
    }
    if (!isValidEmail(form.email)) {
      return setError("please recheck.");
    }

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      alert("Account created successfully!");
      onClose();
    }, 1500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="relative w-full max-w-md rounded-2xl bg-black/80 border border-white/10 p-6 text-white shadow-xl backdrop-blur-xl"
      >
        <button
          onClick={onClose}
          className="absolute top-2 right-3 text-gray-300 hover:text-red-500 text-xl"
        >
          &times;
        </button>

        <h2 className="text-2xl font-bold text-center mb-5">
          Create Account on <span className="text-blue-400">DevSync</span>
        </h2>

        <form className="space-y-4 text-sm" onSubmit={handleSubmit}>
          <div>
            <label className="text-gray-300">Full Name</label>
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="John Doe"
              className="w-full mt-1 p-3 rounded-md bg-white/5 border border-white/10 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="text-gray-300">Email</label>
            <input
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="you@gmail.com"
              className="w-full mt-1 p-3 rounded-md bg-white/5 border border-white/10 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="text-gray-300">Password</label>
            <input
              name="password"
              type="password"
              value={form.password}
              onChange={handleChange}
              className="w-full mt-1 p-3 rounded-md bg-white/5 border border-white/10 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {error && (
            <div className="text-red-400 text-sm text-center -mt-2">
              {error}
            </div>
          )}

          <motion.button
            type="submit"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            disabled={loading}
            className={`w-full py-2 rounded-md font-medium transition ${
              loading
                ? "bg-blue-800 cursor-not-allowed"
                : "bg-blue-600 hover:bg-blue-700"
            }`}
          >
            {loading ? "Creating Account..." : "Sign Up"}
          </motion.button>
        </form>

        <div className="mt-5 flex flex-col gap-2">
          {[FaGoogle, FaFacebookF, FaApple].map((Icon, idx) => (
            <button
              key={idx}
              className="flex items-center justify-center gap-3 bg-white/10 hover:bg-white/20 border border-white/10 rounded-md py-2 transition"
              onClick={() =>
                alert(`Redirecting to ${["Google", "Facebook", "Apple"][idx]}...`)
              }
            >
              <Icon /> Sign up with {["Google", "Facebook", "Apple"][idx]}
            </button>
          ))}
        </div>

        <p className="mt-4 text-sm text-center text-gray-400">
          Already have an account?{" "}
          <button
            onClick={onSwitchToLogin}
            className="text-blue-400 hover:underline transition"
          >
            Login here
          </button>
        </p>
      </motion.div>
    </div>
  );
}
