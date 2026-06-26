const Footer = () => {
  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-bg-elevated border-t border-border-subtle pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-12">
          <div className="flex items-center cursor-pointer" onClick={() => scrollTo('hero')}>
            <img src="/LOGOS/LIGHT LOGO.png" alt="I3DION" className="h-8 w-auto opacity-90" />
          </div>
          
          <div className="flex flex-wrap justify-center gap-6">
            <button onClick={() => scrollTo('product')} className="text-gray-400 hover:text-brand-cyan transition-colors text-sm">I3DION Spatial</button>
            <a href="https://www.linkedin.com/company/i3dion/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-brand-cyan transition-colors text-sm">LinkedIn</a>
            <a href="mailto:i3diontech@gmail.com" className="text-gray-400 hover:text-brand-cyan transition-colors text-sm">i3diontech@gmail.com</a>
          </div>
        </div>
        
        <div className="pt-8 border-t border-border-subtle flex justify-center items-center text-center">
          <p className="text-xs text-gray-500">&copy; {new Date().getFullYear()} I3DION. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
