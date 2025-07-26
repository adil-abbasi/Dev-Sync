import React from 'react';

const CTA = () => {
  return (
    <section id="cta" className="py-20 bg-indigo-700 text-white text-center px-6">
      <h2 className="text-4xl font-bold mb-4">Ready to launch your next project?</h2>
      <p className="text-xl mb-6">Join DevSync and showcase your talent to the world.</p>
      <a 
        href="/login" 
        className="bg-white text-indigo-700 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition"
      >
        Login / Sign Up
      </a>
    </section>
  );
};

export default CTA;
