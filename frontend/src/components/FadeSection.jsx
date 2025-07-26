import React from 'react';
import { motion } from 'framer-motion';

export const FadeSection = ({ children, title, dark = false }) => (
  <motion.section
    initial={{ opacity: 0, y: 60 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.25 }}
    transition={{ duration: 0.6 }}
    className={`${dark ? 'bg-gray-900' : 'bg-gray-950'} py-20 text-center`}
  >
    <h2 className="text-4xl font-bold mb-10">
      {title.includes(' ') ? (
        <>
          {title.split(' ')[0]}{' '}
          <span className="text-blue-400">
            {title.split(' ').slice(1).join(' ')}
          </span>
        </>
      ) : (
        title
      )}
    </h2>
    {children}
  </motion.section>
);

export const Card = ({ text }) => (
  <motion.div
    whileHover={{ scale: 0.98, y: 2 }}
    transition={{ type: 'spring', stiffness: 250 }}
    className="bg-gray-800 dark:bg-gray-700 text-white rounded-xl p-6 text-center shadow-md"
  >
    <h4 className="text-xl font-semibold">{text}</h4>
  </motion.div>
);
