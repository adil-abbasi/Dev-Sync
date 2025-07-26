import React from "react";
import { Link } from "react-router-dom";

const CallToAction = () => (
  <section className="py-20 bg-white text-gray-900 text-center">
    <h2 className="text-3xl md:text-4xl font-bold mb-4">
      Join <span className="text-blue-600">DevSync</span> Today
    </h2>
    <p className="mb-6 text-lg text-gray-600">
      Whether you're a dev or a startup founder, <span className="text-blue-600">DevSync</span> is the bridge to your next success.
    </p>
    <Link
      to="/LoginModal "
      className="bg-blue-600 text-white px-6 py-3 rounded-full font-semibold shadow-md hover:bg-blue-700 transition"
    >
      Get Started Now
    </Link>
  </section>
);

export default CallToAction;
