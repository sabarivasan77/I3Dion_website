const Footer = () => {
  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-bg-elevated pt-16 pb-8 border-t border-border-subtle relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-12">
          <div className="flex items-center cursor-pointer group" onClick={() => scrollTo('hero')}>
            <img src="/logos/light_logo.png" alt="I3DION" className="h-8 w-auto opacity-70 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
          
          <div className="flex flex-wrap justify-center gap-8">
            <button onClick={() => scrollTo('identity')} className="text-gray-400 hover:text-brand-cyan transition-colors text-sm font-medium">Company</button>
            <button onClick={() => scrollTo('product')} className="text-gray-400 hover:text-brand-cyan transition-colors text-sm font-medium">I3DION Spatial</button>
            <button onClick={() => scrollTo('contact')} className="text-gray-400 hover:text-brand-cyan transition-colors text-sm font-medium">Contact</button>
            <a href="https://www.linkedin.com/company/i3dion/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-brand-cyan transition-colors text-sm font-medium">LinkedIn</a>
          </div>
        </div>
        
        <div className="pt-8 border-t border-border-subtle flex flex-col md:flex-row justify-between items-center text-center gap-4">
          <p className="text-xs text-gray-600 font-medium tracking-wide">
            &copy; {new Date().getFullYear()} I3DION. All rights reserved.
          </p>
          <p className="text-xs text-gray-600 font-medium tracking-wide">
            Industrial Digital Transformation.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
