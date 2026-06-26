import { Menu, X } from 'lucide-react';
import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollTo = (id) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed w-full z-50 bg-bg-base/80 backdrop-blur-lg border-b border-border-subtle transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex-shrink-0 flex items-center cursor-pointer" onClick={() => scrollTo('hero')}>
            <img src="/LOGOS/TEXT ONLY.png" alt="I3DION" className="h-8 w-auto" />
          </div>
          
          <div className="hidden md:flex space-x-8">
            <button onClick={() => scrollTo('about')} className="text-gray-300 hover:text-white transition-colors text-sm font-medium">About</button>
            <button onClick={() => scrollTo('product')} className="text-gray-300 hover:text-white transition-colors text-sm font-medium">I3DION Spatial</button>
            <button onClick={() => scrollTo('technology')} className="text-gray-300 hover:text-white transition-colors text-sm font-medium">Technology</button>
            <button onClick={() => scrollTo('features')} className="text-gray-300 hover:text-white transition-colors text-sm font-medium">Features</button>
            <button onClick={() => scrollTo('roadmap')} className="text-gray-300 hover:text-white transition-colors text-sm font-medium">Roadmap</button>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <button onClick={() => scrollTo('contact')} className="px-6 py-2 rounded-full bg-brand-indigo/10 text-brand-cyan border border-brand-cyan/30 hover:bg-brand-cyan hover:text-bg-base transition-all duration-300 font-medium text-sm shadow-[0_0_15px_rgba(0,240,255,0.2)] hover:shadow-[0_0_25px_rgba(0,240,255,0.4)]">
              Contact Us
            </button>
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
            <button onClick={() => scrollTo('about')} className="block w-full text-left px-3 py-2 text-base font-medium text-gray-300 hover:text-white">About</button>
            <button onClick={() => scrollTo('product')} className="block w-full text-left px-3 py-2 text-base font-medium text-gray-300 hover:text-white">Product</button>
            <button onClick={() => scrollTo('technology')} className="block w-full text-left px-3 py-2 text-base font-medium text-gray-300 hover:text-white">Technology</button>
            <button onClick={() => scrollTo('features')} className="block w-full text-left px-3 py-2 text-base font-medium text-gray-300 hover:text-white">Features</button>
            <button onClick={() => scrollTo('roadmap')} className="block w-full text-left px-3 py-2 text-base font-medium text-gray-300 hover:text-white">Roadmap</button>
            <button onClick={() => scrollTo('contact')} className="block w-full text-left px-3 py-2 text-base font-medium text-brand-cyan">Contact Us</button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
