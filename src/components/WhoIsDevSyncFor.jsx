import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FadeSection } from './FadeSection';

const cards = [
  {
    title: 'Startup Founders',
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6l4 2" />
    ),
    desc: 'Launch MVPs faster with ready‑to‑go templates, hire devs on‑demand, and scale with peace of mind via escrow.',
    link: '/hire',
    cta: '🚀 Build with DevSync',
  },
  {
    title: 'Developers',
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7h18M3 12h18M3 17h18" />
    ),
    desc: 'Sell your projects, land high‑trust gigs, and earn instantly with escrow‑backed payouts.',
    link: '/sell',
    cta: '💼 Start Selling',
  },
  {
    title: 'Agencies & Product Teams',
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5V4H2v16h5m10 0v-6h-4v6" />
    ),
    desc: 'Use our vetted dev network to scale projects, find niche AI talent, or integrate prebuilt tools.',
    link: '/dashboard',
    cta: '🧠 Explore AI Tools',
  },
];

const WhoIsFor = () => (
  <FadeSection title="Who is DevSync For?">
    <p className="text-gray-300 max-w-3xl mx-auto mb-12">
      DevSync is designed for every kind of tech builder — whether you&apos;re launching your first
      startup, scaling an agency, or freelancing full‑time.
    </p>

    <div className="grid md:grid-cols-3 gap-8">
      {cards.map(({ title, icon, desc, link, cta }) => (
        <motion.div
          key={title}
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
          className="bg-gray-800 rounded-xl p-6 shadow-xl text-left"
        >
          <div className="flex items-center gap-4 mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {icon}
            </svg>
            <h3 className="text-xl font-semibold">{title}</h3>
          </div>
          <p className="text-gray-400 mb-4">{desc}</p>
          <Link to={link} className="text-blue-400 hover:underline text-sm font-medium">
            {cta}
          </Link>
        </motion.div>
      ))}
    </div>
  </FadeSection>
);

export default WhoIsFor;
