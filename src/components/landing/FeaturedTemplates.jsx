import React from "react";
import { motion } from "framer-motion";
import { Globe, Smartphone, BrainCircuit, Gamepad2 } from "lucide-react";

const templates = [
  { title: "React SaaS Starter", tag: "Web", price: "$49", icon: <Globe className="w-5 h-5 mr-2" /> },
  { title: "Flutter Grocery App", tag: "Mobile", price: "$39", icon: <Smartphone className="w-5 h-5 mr-2" /> },
  { title: "NextJS Blog Kit", tag: "Web", price: "$29", icon: <Globe className="w-5 h-5 mr-2" /> },
  { title: "LSTM Stock Predictor", tag: "AI", price: "$59", icon: <BrainCircuit className="w-5 h-5 mr-2" /> },
  { title: "ThreeJS Portfolio", tag: "Web", price: "$24", icon: <Globe className="w-5 h-5 mr-2" /> },
  { title: "Unity Endless Runner", tag: "Game", price: "$44", icon: <Gamepad2 className="w-5 h-5 mr-2" /> },
];

export default function FeaturedTemplates() {
  return (
    <section className="bg-gray-950 py-24 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-center text-4xl md:text-5xl font-bold mb-4">
          Featured <span className="text-blue-500">AI Templates</span>
        </h2>
        <p className="mx-auto mb-14 max-w-3xl text-center text-gray-400">
          Premium codebases enhanced with AI — ideal for startups, MVPs, and production-ready builds.
        </p>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {templates.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="rounded-xl border border-gray-800 bg-gray-900 p-6 shadow-lg
                         hover:shadow-blue-700/40 transition duration-300 ease-in-out"
            >
              <div className="mb-4 flex items-center justify-between">
                <div className="flex items-center text-sm font-medium text-blue-400 bg-blue-600/10 px-3 py-1 rounded-full">
                  {item.icon}
                  {item.tag}
                </div>
                <span className="text-blue-400 font-bold text-lg">{item.price}</span>
              </div>

              <h3 className="mb-2 text-xl font-semibold text-white">{item.title}</h3>
              <p className="text-sm text-gray-400">
                Includes AI‑generated docs, clean architecture, and scalable boilerplate.
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
