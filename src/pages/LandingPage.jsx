import React from 'react';
import Navbar from '../components/common/Navbar';
import Hero from '../components/landing/Hero';
import Features from '../components/landing/Features';
import Testimonials from '../components/landing/Testimonials';
//import CTA from '../components/landing/CTA';
import Footer from '../components/common/Footer';
import FeaturedTemplates from '../components/landing/FeaturedTemplates';
import WhyChoose from '../components/landing/WhyChoose';
import Escrow from '../components/landing/Escrow';
import CallToAction from '../components/landing/CallToAction';

const LandingPage = () => {
  return (
    <div>
      <Navbar />
      <Hero />
 
      <Features />
      <WhyChoose />
      <Testimonials />
      <FeaturedTemplates/>
 
      <Escrow />
      <CallToAction/>
      <Footer />
    </div>
  );
};

export default LandingPage;
