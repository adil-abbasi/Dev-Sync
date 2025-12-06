import React from "react";
import { Link } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      className="relative min-h-screen pt-[4.5rem] flex flex-col items-center justify-center bg-cover bg-center text-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=1920&q=80')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70 z-0" />

      {/* Content */}
      <div className="relative z-10 max-w-3xl px-4 text-white">
        <motion.h2
          className="mb-6 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Empowering <span className="text-blue-500">Coders & Creators</span>
        </motion.h2>

        <p className="mb-6 text-lg sm:text-xl md:text-2xl text-gray-300">
          <Typewriter
            words={[
              "Buy Ready‑made Software.",
              "Sell Digital Projects.",
              "Hire Top Developers.",
              "Secure AI‑Powered Marketplace.",
            ]}
            loop={0}
            cursor
            cursorStyle="|"
            typeSpeed={28}
            deleteSpeed={18}
            delaySpeed={1800}
          />
        </p>

        <Link
          to="/hire"
          className="mt-4 inline-block rounded-full bg-blue-600 px-8 sm:px-10 py-3.5 sm:py-4 text-base sm:text-lg font-semibold text-white shadow-lg transition hover:bg-blue-700"
        >
          🚀 Hire Now
        </Link>
      </div>
    </section>
  );
}
