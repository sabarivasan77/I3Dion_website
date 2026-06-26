import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-bg-elevated border-t border-border-subtle pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <Link to="/">
              <img src="/LOGOS/LIGHT LOGO.png" alt="I3DION" className="h-10 w-auto mb-6 opacity-90" />
            </Link>
            <p className="text-sm text-gray-400 leading-relaxed">
              Transforming Ideas Into Intelligent Digital Solutions. Driving industrial innovation through spatial computing.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-400 hover:text-brand-cyan transition-colors text-sm">About Us</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-brand-cyan transition-colors text-sm">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Product</h4>
            <ul className="space-y-2">
              <li><Link to="/product" className="text-gray-400 hover:text-brand-cyan transition-colors text-sm">I3DION Spatial</Link></li>
              <li><Link to="/technology" className="text-gray-400 hover:text-brand-cyan transition-colors text-sm">Technology</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Connect</h4>
            <ul className="space-y-2">
              <li><a href="https://www.linkedin.com/company/i3dion/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-brand-cyan transition-colors text-sm">LinkedIn</a></li>
              <li><a href="mailto:i3diontech@gmail.com" className="text-gray-400 hover:text-brand-cyan transition-colors text-sm">i3diontech@gmail.com</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-border-subtle flex flex-col md:flex-row justify-between items-center">
          <p className="text-xs text-gray-500">&copy; {new Date().getFullYear()} I3DION. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
