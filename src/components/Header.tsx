
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-sm shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <span className="text-2xl font-bold text-bio-navy">Dr. Ratnesh Jain</span>
            </Link>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-bio-gray hover:text-bio-blue hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-bio-blue"
              onClick={toggleMenu}
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
          
          {/* Desktop menu */}
          <nav className="hidden md:flex md:items-center md:space-x-8">
            <Link to="/" className="text-bio-gray hover:text-bio-blue font-medium transition-colors">Home</Link>
            <Link to="/research" className="text-bio-gray hover:text-bio-blue font-medium transition-colors">Research</Link>
            <Link to="/collaborations" className="text-bio-gray hover:text-bio-blue font-medium transition-colors">Collaborations</Link>
            <Link to="/consulting" className="text-bio-gray hover:text-bio-blue font-medium transition-colors">Consulting</Link>
            <Link to="/speaking" className="text-bio-gray hover:text-bio-blue font-medium transition-colors">Speaking</Link>
            <Link to="/contact" className="text-bio-gray hover:text-bio-blue font-medium transition-colors">Contact</Link>
            <Button className="cta-button">Schedule a Consultation</Button>
          </nav>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg rounded-b-lg">
            <Link to="/" className="block px-3 py-2 text-bio-gray hover:text-bio-blue font-medium transition-colors">Home</Link>
            <Link to="/research" className="block px-3 py-2 text-bio-gray hover:text-bio-blue font-medium transition-colors">Research</Link>
            <Link to="/collaborations" className="block px-3 py-2 text-bio-gray hover:text-bio-blue font-medium transition-colors">Collaborations</Link>
            <Link to="/consulting" className="block px-3 py-2 text-bio-gray hover:text-bio-blue font-medium transition-colors">Consulting</Link>
            <Link to="/speaking" className="block px-3 py-2 text-bio-gray hover:text-bio-blue font-medium transition-colors">Speaking</Link>
            <Link to="/contact" className="block px-3 py-2 text-bio-gray hover:text-bio-blue font-medium transition-colors">Contact</Link>
            <div className="mt-4 px-3">
              <Button className="cta-button w-full">Schedule a Consultation</Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
