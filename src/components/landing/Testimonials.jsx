import React from "react";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const testimonials = [
  {
    name: "Ayesha",
    feedback: "DevSync made it super easy to find a final year project!",
    title: "CS Student",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    rating: 5,
  },
  {
    name: "Hassan",
    feedback: "Sold my LMS project within 2 weeks. Great platform!",
    title: "Freelancer",
    avatar: "https://randomuser.me/api/portraits/men/46.jpg",
    rating: 4,
  },
  {
    name: "Sara",
    feedback: "Smooth UI, solid features, and real project exposure.",
    title: "DevSync Beta Tester",
    avatar: "https://randomuser.me/api/portraits/women/65.jpg",
    rating: 5,
  },
];

const renderStars = (count) => {
  return (
    <div className="flex justify-center mb-2 text-yellow-400">
      {Array.from({ length: 5 }).map((_, i) => (
        <span key={i}>{i < count ? "★" : "☆"}</span>
      ))}
    </div>
  );
};

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="py-24 bg-gray-50 dark:bg-gray-900 px-6"
    >
      <div className="text-center mb-16">
        <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white">
          What Our Users Say
        </h2>
        <p className="mt-4 text-gray-600 dark:text-gray-400">
          Hear directly from the DevSync community.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {testimonials.map((t, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.2, duration: 0.5 }}
            className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 text-center"
          >
            <img
              src={t.avatar}
              alt={t.name}
              className="mx-auto mb-4 w-16 h-16 rounded-full object-cover shadow-md"
            />

            {renderStars(t.rating)}

            <p className="text-lg italic text-gray-800 dark:text-gray-200 mb-4">
              “{t.feedback}”
            </p>

            <h4 className="text-xl font-semibold text-blue-600 dark:text-blue-400 flex items-center justify-center gap-2">
              {t.name}
              <CheckCircle className="w-4 h-4 text-green-500" title="Verified User" />
            </h4>
            <p className="text-sm text-gray-500 dark:text-gray-400">{t.title}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
