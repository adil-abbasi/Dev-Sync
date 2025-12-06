// components/AuthForm.jsx
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function AuthForm({ type = "login", onSubmit }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      className="backdrop-blur-lg bg-white/10 dark:bg-white/5 shadow-2xl border border-white/20 rounded-2xl p-8 w-full max-w-md mx-auto mt-20"
    >
      <h2 className="text-3xl font-bold text-center text-white mb-6">
        {type === "signup" ? "Create Account" : "Welcome Back"}
      </h2>

      <form
        onSubmit={onSubmit}
        className="flex flex-col space-y-4 text-white"
        autoComplete="off"
      >
        {type === "signup" && (
          <input
            type="text"
            placeholder="Full Name"
            className="p-3 rounded-md bg-white/20 placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        )}
        <input
          type="email"
          placeholder="Email Address"
          className="p-3 rounded-md bg-white/20 placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
        <input
          type="password"
          placeholder="Password"
          className="p-3 rounded-md bg-white/20 placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />

        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 transition text-white font-medium py-3 rounded-md"
        >
          {type === "signup" ? "Sign Up" : "Sign In"}
        </button>
      </form>

      <div className="text-center text-sm mt-4 text-white/70">
        {type === "signup" ? (
          <>
            Already have an account?{" "}
            <Link to="/login" className="text-blue-400 hover:underline">
              Sign In
            </Link>
          </>
        ) : (
          <>
            Don’t have an account?{" "}
            <Link to="/signup" className="text-blue-400 hover:underline">
              Sign Up
            </Link>
          </>
        )}
      </div>
    </motion.div>
  );
}
