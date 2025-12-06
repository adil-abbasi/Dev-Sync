import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaGoogle, FaFacebookF, FaApple } from "react-icons/fa";

export default function LoginModal({ onClose, onSwitchToSignup, onSuccess }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const validateEmail = (email) => /^[^\s@]+@(?:gmail|yahoo|outlook)\.com$/.test(email);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    if (!validateEmail(email)) {
      return setError("Only @gmail.com, @yahoo.com, or @outlook.com emails are allowed.");
    }
    if (!password || password.length < 6) {
      return setError("Password must be at least 6 characters.");
    }

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      onClose();
      if (onSuccess) onSuccess();
    }, 1500);
  };

  const handleGoogleLogin = () => {
    window.location.href = "http://localhost:5000/auth/google";
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm px-4">
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="w-full max-w-sm rounded-2xl border border-white/10 bg-white/10 backdrop-blur-2xl p-6 text-white shadow-lg relative"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-white text-xl hover:text-red-400"
        >
          ×
        </button>

        <h2 className="text-2xl font-bold mb-4 text-center">
          Login to <span className="text-blue-400">DevSync</span>
        </h2>

        {/* Email/Password Form */}
        <form onSubmit={handleSubmit} className="space-y-4 text-sm">
          <div>
            <label className="block mb-1">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 rounded-md bg-white/5 border border-white/10 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="yourname@gmail.com"
              required
            />
          </div>

          <div>
            <label className="block mb-1">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 rounded-md bg-white/5 border border-white/10 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter password"
              required
            />
          </div>

          {error && <p className="text-red-400 text-sm">{error}</p>}

          <motion.button
            type="submit"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            disabled={loading}
            className="w-full bg-blue-600 py-2.5 rounded-md font-medium transition hover:bg-blue-700 disabled:opacity-50"
          >
            {loading ? "Logging in..." : "Login"}
          </motion.button>
        </form>

        {/* Divider */}
        <div className="text-center text-sm mt-4 text-gray-300">or</div>

        {/* Social Login Buttons */}
        <div className="mt-4 flex flex-col gap-2">
          {/* Google Login */}
          <motion.button
            whileTap={{ scale: 0.97 }}
            onClick={handleGoogleLogin}
            className="flex items-center justify-center gap-3 py-2 bg-white/10 hover:bg-white/20 border border-white/10 rounded-md transition"
          >
            <FaGoogle /> Continue with Google
          </motion.button>

          {/* Facebook/Apple (Disabled for now) */}
          {[
            { name: "Facebook", Icon: FaFacebookF },
            { name: "Apple", Icon: FaApple },
          ].map(({ name, Icon }, i) => (
            <button
              key={i}
              disabled
              title={`${name} login coming soon`}
              className="flex items-center justify-center gap-3 py-2 bg-white/5 text-white/50 border border-white/10 rounded-md cursor-not-allowed"
            >
              <Icon /> Continue with {name}
            </button>
          ))}
        </div>

        {/* Switch to Signup */}
        <p className="text-center text-sm mt-5">
          Don’t have an account?{" "}
          <button
            onClick={onSwitchToSignup}
            className="text-blue-400 hover:underline"
          >
            Sign up here
          </button>
        </p>
      </motion.div>
    </div>
  );
}
