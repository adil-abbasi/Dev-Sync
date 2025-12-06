import React from 'react';
import { FaFacebook, FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Brand */}
        <div>
          <h3 className="text-2xl font-bold text-white mb-4">DevSync.</h3>
          <p className="text-gray-400 text-sm leading-relaxed">
            Empowering developers to build, share, and grow through AI-enhanced collaboration.
          </p>
        </div>

        {/* Company Links */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-3">Company</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="/about" className="hover:text-blue-400">About</a></li>
            <li><a href="/careers" className="hover:text-blue-400">Careers</a></li>
            <li><a href="/contact" className="hover:text-blue-400">Contact</a></li>
            <li><a href="/blog" className="hover:text-blue-400">Blog</a></li>
          </ul>
        </div>

        {/* Platform Links */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-3">Platform</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="/hire" className="hover:text-blue-400">Hire Developers</a></li>
            <li><a href="/marketplace/buy" className="hover:text-blue-400">Buy Projects</a></li>
            <li><a href="/marketplace/sell" className="hover:text-blue-400">Sell Projects</a></li>
            <li><a href="/analytics" className="hover:text-blue-400">Analytics</a></li>
          </ul>
        </div>

        {/* Social & Contact */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-3">Connect</h4>
          <div className="flex space-x-4 text-xl mb-4">
            <a href="https://facebook.com/devsync" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">
              <FaFacebook />
            </a>
            <a href="https://twitter.com/devsync" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
              <FaTwitter />
            </a>
            <a href="https://linkedin.com/company/devsync" target="_blank" rel="noopener noreferrer" className="hover:text-blue-300">
              <FaLinkedin />
            </a>
            <a href="https://github.com/devsync" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
              <FaGithub />
            </a>
          </div>
          <p className="text-sm text-gray-400">
            Email: <a href="mailto:support@devsync.com" className="hover:text-white">support@devsync.com</a>
          </p>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} DevSync. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
