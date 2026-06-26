import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 border-b ${scrolled ? 'bg-bg-base/90 backdrop-blur-md border-border-subtle py-2 shadow-lg shadow-black/50' : 'bg-transparent border-transparent py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex-shrink-0 flex items-center cursor-pointer" onClick={() => scrollTo('hero')}>
            <img src="/logos/text_only.png" alt="I3DION" className="h-8 w-auto" />
          </div>
          
          <div className="hidden md:flex space-x-8">
            <button onClick={() => scrollTo('identity')} className="text-gray-300 hover:text-brand-cyan transition-colors text-sm font-medium">Company</button>
            <button onClick={() => scrollTo('services')} className="text-gray-300 hover:text-brand-cyan transition-colors text-sm font-medium">Services</button>
            <button onClick={() => scrollTo('product')} className="text-gray-300 hover:text-brand-cyan transition-colors text-sm font-medium">Product</button>
            <button onClick={() => scrollTo('roadmap')} className="text-gray-300 hover:text-brand-cyan transition-colors text-sm font-medium">Roadmap</button>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <button onClick={() => scrollTo('contact')} className="px-6 py-2 rounded-full bg-brand-cyan/10 text-brand-cyan border border-brand-cyan/30 hover:bg-brand-cyan hover:text-bg-base transition-all duration-300 font-bold text-sm shadow-[0_0_15px_rgba(0,240,255,0.15)] hover:shadow-[0_0_25px_rgba(0,240,255,0.3)]">
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
        <div className="md:hidden bg-bg-elevated border-b border-border-subtle shadow-xl absolute w-full">
          <div className="px-4 pt-4 pb-6 space-y-3">
            <button onClick={() => scrollTo('identity')} className="block w-full text-left py-2 text-base font-bold text-gray-300 hover:text-white">Company</button>
            <button onClick={() => scrollTo('services')} className="block w-full text-left py-2 text-base font-bold text-gray-300 hover:text-white">Services</button>
            <button onClick={() => scrollTo('product')} className="block w-full text-left py-2 text-base font-bold text-gray-300 hover:text-white">Product</button>
            <button onClick={() => scrollTo('roadmap')} className="block w-full text-left py-2 text-base font-bold text-gray-300 hover:text-white">Roadmap</button>
            <button onClick={() => scrollTo('contact')} className="block w-full text-left py-2 text-base font-black text-brand-cyan mt-4 border-t border-border-subtle pt-4">Contact Us</button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
