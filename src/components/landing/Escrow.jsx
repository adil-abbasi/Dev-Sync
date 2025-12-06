import React from "react";
import { motion } from "framer-motion";

const features = [
  {
    title: "Secure Payments",
    icon: "🔐",
    desc: "Your money is only released when you’re fully satisfied with the delivered project."
  },
  {
    title: "Transparency",
    icon: "🔍",
    desc: "Track each step of your project with milestones, updates, and clear communication."
  },
  {
    title: "Instant Payouts",
    icon: "⚡",
    desc: "Sellers receive payment instantly once the client confirms delivery."
  }
];

export default function Escrow() {
  return (
    <section className="py-24 bg-gray-950 text-white text-center">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          How <span className="text-blue-500">DevSync</span> Ensures Safe Payments
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto mb-14 text-base md:text-lg">
          With our built-in escrow system, your payments are protected, secure, and only released once work is complete.
        </p>

        <div className="grid gap-8 md:grid-cols-3">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ delay: i * 0.2, duration: 0.5 }}
              className="bg-gray-800 hover:border-blue-500 hover:shadow-xl transition rounded-2xl border border-gray-700 p-8"
            >
              <div className="text-4xl mb-4">{f.icon}</div>
              <h3 className="text-xl font-semibold text-blue-400 mb-3">{f.title}</h3>
              <p className="text-sm text-gray-300 leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
