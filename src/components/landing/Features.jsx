import React from "react";
import { motion } from "framer-motion";
import { Briefcase, ShieldCheck, ShoppingBag } from "lucide-react";

const FeatureCard = ({ Icon, title, description }) => (
  <motion.div
    className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-xl text-center border border-gray-200 dark:border-gray-700"
    whileHover={{ scale: 1.04, y: -4 }}
    transition={{ duration: 0.35, ease: "easeOut" }}
  >
    <Icon className="w-10 h-10 mx-auto text-blue-600 mb-4" />
    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{title}</h3>
    <p className="text-gray-600 dark:text-gray-300 text-sm">{description}</p>
  </motion.div>
);

export default function Features() {
  return (
    <section id="features" className="py-24 bg-gray-50 dark:bg-black px-6">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white">
          Why Use <span className="text-blue-600">DevSync?</span>
        </h2>
        <p className="mt-4 text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
          A complete ecosystem for building, selling, and collaborating on professional-grade software.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
        <FeatureCard
          Icon={Briefcase}
          title="Hire Top Developers"
          description="Access a vetted global talent pool with skills across AI, Web, Mobile, and DevOps."
        />
        <FeatureCard
          Icon={ShoppingBag}
          title="Buy & Sell Projects"
          description="Find prebuilt solutions or monetize your own — all within a trusted marketplace."
        />
        <FeatureCard
          Icon={ShieldCheck}
          title="Escrow-Powered Security"
          description="Secure transactions, milestone approvals, and instant payouts built in by design."
        />
      </div>
    </section>
  );
}
