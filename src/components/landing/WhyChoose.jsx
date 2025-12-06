// src/components/landing/WhyChoose.jsx

import React from "react";
import { motion } from "framer-motion";
import FadeSection from "./FadeSection";

export default function WhyChoose() {
  const cards = [
    {
      title: "✅ Verified Skills",
      desc: "Each developer is vetted for real‑world coding expertise.",
    },
    {
      title: "🚀 Fast Turnaround",
      desc: "Projects delivered on time with agile tracking.",
    },
    {
      title: "🌐 Global Talent",
      desc: "Work with professionals around the globe.",
    },
  ];

  return (
    <FadeSection title="Why Choose DevSync Developers?">
      <p className="mx-auto mb-8 max-w-3xl text-gray-300 text-lg">
        Our developers are hand‑picked, tested and certified through DevSync’s rigorous evaluation system.
      </p>
      <div className="grid gap-6 md:grid-cols-3">
        {cards.map(({ title, desc }, i) => (
          <motion.div
            key={title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: i * 0.2, duration: 0.6 }}
            className="rounded-xl bg-gray-800 dark:bg-gray-700 p-6 text-center shadow-xl border border-gray-700 hover:border-blue-500 transition"
          >
            <h3 className="mb-3 text-xl font-semibold text-blue-400">
              {title}
            </h3>
            <p className="text-sm text-gray-400">{desc}</p>
          </motion.div>
        ))}
      </div>
    </FadeSection>
  );
}
