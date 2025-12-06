import React from 'react';
import { motion } from 'framer-motion';
import { FadeSection } from './FadeSection';

const WhyChoose = () => (
  <FadeSection title="Why Choose DevSync Developers?">
    <p className="text-gray-300 max-w-3xl mx-auto mb-8">
      Our developers are hand‑picked, tested and certified through DevSync’s rigorous evaluation
      system. We ensure every contributor is skilled, communicative, and delivery‑focused.
    </p>

    <div className="grid md:grid-cols-3 gap-6">
      {['✅ Verified Skills', '🚀 Fast Turnaround', '🌐 Global Talent'].map((text, i) => (
        <motion.div
          key={text}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ delay: i * 0.2, duration: 0.6 }}
          className="bg-gray-800 dark:bg-gray-700 rounded-xl p-6 shadow-lg text-center"
        >
          <h3 className="text-xl font-semibold text-blue-400 mb-2">{text}</h3>
          <p className="text-sm text-gray-400">
            {text === '✅ Verified Skills'
              ? 'Each developer is vetted for practical coding expertise.'
              : text === '🚀 Fast Turnaround'
              ? 'Projects are delivered on time with agile tracking.'
              : 'Work with professionals around the globe.'}
          </p>
        </motion.div>
      ))}
    </div>
  </FadeSection>
);

export default WhyChoose;
