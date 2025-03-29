
import React from 'react';
import { Link } from 'react-router-dom';
import { Linkedin, Mail, Phone, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-bio-navy text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-xl font-bold mb-4">Dr. Ratnesh Jain</h3>
            <p className="mb-4 text-gray-300">
              Biopharmaceutical innovator, academic leader, and industry consultant specializing in advanced drug delivery systems and biotechnology.
            </p>
            <div className="flex space-x-4">
              <a href="https://linkedin.com/" className="text-gray-300 hover:text-white transition-colors">
                <Linkedin size={20} />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a href="https://twitter.com/" className="text-gray-300 hover:text-white transition-colors">
                <Twitter size={20} />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="mailto:contact@example.com" className="text-gray-300 hover:text-white transition-colors">
                <Mail size={20} />
                <span className="sr-only">Email</span>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/research" className="text-gray-300 hover:text-white transition-colors">Research</Link></li>
              <li><Link to="/collaborations" className="text-gray-300 hover:text-white transition-colors">Collaborations</Link></li>
              <li><Link to="/consulting" className="text-gray-300 hover:text-white transition-colors">Consulting</Link></li>
              <li><Link to="/speaking" className="text-gray-300 hover:text-white transition-colors">Speaking</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-lg mb-4">Contact</h4>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2">
                <Mail size={16} />
                <span className="text-gray-300">contact@example.com</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone size={16} />
                <span className="text-gray-300">+1 (123) 456-7890</span>
              </li>
              <li>
                <Link to="/contact" className="inline-flex items-center mt-4 text-white bg-bio-teal hover:bg-bio-blue px-4 py-2 rounded transition-colors">
                  Contact Me
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-700 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Dr. Ratnesh Jain. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
