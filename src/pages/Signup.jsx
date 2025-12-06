import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaGoogle, FaFacebookF, FaApple } from "react-icons/fa";

export default function Signup() {
  return (
    <section
      className="min-h-screen flex items-center justify-center bg-gray-900 relative overflow-hidden"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=1740&q=80')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Optional overlay for better contrast */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm z-0" />

      {/* Signup Panel */}
      <motion.div
        className="relative z-10 backdrop-blur-xl bg-white/10 border border-white/10 shadow-2xl rounded-2xl p-6 max-w-sm w-full text-white"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-2xl font-extrabold text-center mb-5">
          Sign up to <span className="text-blue-400">DevSync</span>
        </h2>

        <form className="space-y-4 text-sm">
          {["Full Name", "Email", "Password"].map((label, index) => (
            <div key={index}>
              <label className="text-gray-300">{label}</label>
              <motion.input
                type={label === "Password" ? "password" : "text"}
                placeholder={label === "Email" ? "you@example.com" : ""}
                whileFocus={{ scale: 1.03 }}
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="w-full mt-1 p-2.5 rounded-md bg-white/5 border border-white/10 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          ))}

          <motion.button
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 300 }}
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 transition text-white py-2.5 rounded-md font-medium"
          >
            Sign Up
          </motion.button>
        </form>

        {/* Social Buttons */}
        <div className="mt-5 flex flex-col gap-2">
          {[
            { icon: <FaGoogle />, label: "Google" },
            { icon: <FaFacebookF />, label: "Facebook" },
            { icon: <FaApple />, label: "Apple" },
          ].map((social, idx) => (
            <motion.button
              key={idx}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="flex items-center justify-center gap-3 bg-white/10 border border-white/10 rounded-md py-2 hover:bg-white/20 transition"
            >
              {social.icon} Sign up with {social.label}
            </motion.button>
          ))}
        </div>

        <p className="text-center mt-5 text-sm text-gray-300">
          Already registered?{" "}
          <Link to="/login" className="text-blue-400 hover:underline">
            Login here
          </Link>
        </p>
      </motion.div>
    </section>
  );
}
