
import React from 'react';
import { Link } from 'react-router-dom';
import { Linkedin, Mail, Phone, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-bio-light-blue/10 text-bio-navy border-t border-bio-light-blue/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-xl font-bold mb-4">Dr. Ratnesh Jain</h3>
            <p className="mb-4 text-bio-gray">
              Biopharmaceutical innovator, academic leader, and industry consultant specializing in advanced drug delivery systems and biotechnology.
            </p>
            <div className="flex space-x-4">
              <a href="https://linkedin.com/" className="text-bio-gray hover:text-bio-blue transition-colors">
                <Linkedin size={20} />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a href="https://twitter.com/" className="text-bio-gray hover:text-bio-blue transition-colors">
                <Twitter size={20} />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="mailto:contact@example.com" className="text-bio-gray hover:text-bio-blue transition-colors">
                <Mail size={20} />
                <span className="sr-only">Email</span>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-bio-gray hover:text-bio-blue transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-bio-gray hover:text-bio-blue transition-colors">About</Link></li>
              <li><Link to="/research" className="text-bio-gray hover:text-bio-blue transition-colors">Research</Link></li>
              <li><Link to="/collaborations" className="text-bio-gray hover:text-bio-blue transition-colors">Collaborations</Link></li>
              <li><Link to="/consulting" className="text-bio-gray hover:text-bio-blue transition-colors">Consulting</Link></li>
              <li><Link to="/startups" className="text-bio-gray hover:text-bio-blue transition-colors">Startups</Link></li>
              <li><Link to="/speaking" className="text-bio-gray hover:text-bio-blue transition-colors">Speaking</Link></li>
              <li><Link to="/media" className="text-bio-gray hover:text-bio-blue transition-colors">Media</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-lg mb-4">Contact</h4>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2">
                <Mail size={16} className="text-bio-blue" />
                <span className="text-bio-gray">contact@example.com</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone size={16} className="text-bio-blue" />
                <span className="text-bio-gray">+1 (123) 456-7890</span>
              </li>
              <li>
                <Link to="/contact" className="inline-flex items-center mt-4 text-white bg-bio-teal hover:bg-bio-blue px-4 py-2 rounded transition-colors">
                  Contact Me
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-bio-light-blue/20 text-center text-bio-gray">
          <p>&copy; {new Date().getFullYear()} Dr. Ratnesh Jain. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
