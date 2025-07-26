import React from 'react';
import { FaFacebook, FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Brand */}
        <div>
          <h3 className="text-2xl font-bold text-white mb-4">DevSync.</h3>
          <p className="text-gray-400 text-sm">
            Empowering developers to build, share, and grow through AI-enhanced collaboration.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-3">Company</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-blue-400">About</a></li>
            <li><a href="#" className="hover:text-blue-400">Careers</a></li>
            <li><a href="#" className="hover:text-blue-400">Contact</a></li>
            <li><a href="#" className="hover:text-blue-400">Blog</a></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-3">Platform</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-blue-400">Hire Developers</a></li>
            <li><a href="#" className="hover:text-blue-400">Buy Projects</a></li>
            <li><a href="#" className="hover:text-blue-400">Sell Projects</a></li>
            <li><a href="#" className="hover:text-blue-400">Analytics</a></li>
          </ul>
        </div>

        {/* Social & Contact */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-3">Connect</h4>
          <div className="flex space-x-4 text-xl mb-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500"><FaFacebook /></a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400"><FaTwitter /></a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-300"><FaLinkedin /></a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300"><FaGithub /></a>
          </div>
          <p className="text-sm text-gray-400">Email: support@devsync.com</p>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} DevSync. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
