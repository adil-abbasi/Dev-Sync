import React from "react";
import { motion } from "framer-motion";

export default function FadeSection({ title, children, dark = false }) {
  return (
    <motion.section
      className={`${dark ? "bg-gray-900" : "bg-gray-950"} py-20 text-center px-6`}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="mb-10 text-4xl font-bold">
        {title.split(" ")[0]}{" "}
        <span className="text-blue-400">{title.split(" ").slice(1).join(" ")}</span>
      </h2>
      {children}
    </motion.section>
  );
}
