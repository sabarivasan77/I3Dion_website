import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-bg-base/80 backdrop-blur-lg border-b border-border-subtle transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex-shrink-0 flex items-center">
            <Link to="/">
              <img src="/LOGOS/TEXT ONLY.png" alt="I3DION" className="h-8 w-auto" />
            </Link>
          </div>
          
          <div className="hidden md:flex space-x-8">
            <Link to="/about" className="text-gray-300 hover:text-white transition-colors text-sm font-medium">About</Link>
            <Link to="/product" className="text-gray-300 hover:text-white transition-colors text-sm font-medium">Product</Link>
            <Link to="/technology" className="text-gray-300 hover:text-white transition-colors text-sm font-medium">Technology</Link>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <Link to="/contact" className="text-gray-300 hover:text-white transition-colors text-sm font-medium mr-4">Contact</Link>
            <Link to="/product" className="px-6 py-2 rounded-full bg-brand-indigo/10 text-brand-cyan border border-brand-cyan/30 hover:bg-brand-cyan hover:text-bg-base transition-all duration-300 font-medium text-sm shadow-[0_0_15px_rgba(0,240,255,0.2)] hover:shadow-[0_0_25px_rgba(0,240,255,0.4)]">
              Get Started
            </Link>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-300 hover:text-white">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-bg-elevated border-b border-border-subtle">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/about" className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-white" onClick={() => setIsOpen(false)}>About</Link>
            <Link to="/product" className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-white" onClick={() => setIsOpen(false)}>Product</Link>
            <Link to="/technology" className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-white" onClick={() => setIsOpen(false)}>Technology</Link>
            <Link to="/contact" className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-white" onClick={() => setIsOpen(false)}>Contact</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
