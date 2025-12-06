// components/Testimonials.jsx
import React from "react";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Ali Khan",
    role: "Full-Stack Developer",
    quote: "DevSync made it easy to get real paid freelance work within days!",
    avatar: "https://i.pravatar.cc/150?img=1",
  },
  {
    name: "Sara Malik",
    role: "Startup Founder",
    quote: "I hired my entire MVP team through DevSync in under a week.",
    avatar: "https://i.pravatar.cc/150?img=2",
  },
  {
    name: "John Doe",
    role: "Project Manager",
    quote: "The escrow-based hiring model gave us full confidence. Amazing platform!",
    avatar: "https://i.pravatar.cc/150?img=3",
  },
];

const Testimonials = () => (
  <section className="py-24 bg-gray-950 text-white">
    <div className="max-w-6xl mx-auto px-6">
      <h2 className="text-4xl md:text-5xl font-bold mb-10 text-center">What Users Say</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {testimonials.map((user, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: idx * 0.2, duration: 0.5 }}
            className="bg-gray-800 p-6 rounded-xl shadow-md"
          >
            <div className="flex items-center gap-4 mb-4">
              <img
                src={user.avatar}
                alt={user.name}
                className="w-12 h-12 rounded-full"
              />
              <div>
                <h4 className="text-lg font-semibold">{user.name}</h4>
                <p className="text-sm text-gray-400">{user.role}</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm italic">“{user.quote}”</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Testimonials;
