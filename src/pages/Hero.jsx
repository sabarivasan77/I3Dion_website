import { motion } from 'framer-motion';
import HeroCanvas from '../components/HeroCanvas';

const Hero = () => {
  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-[100vh] flex items-center pt-20 overflow-hidden">
      <HeroCanvas />
      
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-brand-cyan/5 via-bg-base/90 to-bg-base z-0"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="max-w-4xl mx-auto text-center md:text-left md:mx-0">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="inline-flex items-center px-4 py-1.5 rounded-full border border-brand-cyan/20 bg-brand-cyan/5 text-brand-cyan text-sm font-semibold tracking-wide mb-8">
              <span className="flex h-2 w-2 rounded-full bg-brand-cyan animate-pulse mr-3"></span>
              Industrial Digital Solutions
            </div>
            
            <h1 className="text-6xl md:text-8xl font-bold tracking-tighter mb-8 leading-[1.1]">
              Transforming <br className="hidden md:block"/>
              <span className="text-gradient-brand">Industrial Reality.</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-2xl font-light leading-relaxed mx-auto md:mx-0">
              I3DION engineers premium spatial computing platforms and enterprise software architectures for the modern industrial era.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-5 justify-center md:justify-start">
              <button onClick={() => scrollTo('product')} className="px-10 py-4 rounded-full bg-brand-indigo hover:bg-brand-indigo/90 text-white transition-all font-semibold flex items-center justify-center shadow-[0_0_30px_rgba(79,70,229,0.3)] hover:shadow-[0_0_40px_rgba(79,70,229,0.5)] transform hover:-translate-y-1">
                Explore I3DION Spatial
              </button>
              <button onClick={() => scrollTo('contact')} className="px-10 py-4 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-white transition-all font-semibold flex items-center justify-center backdrop-blur-sm">
                Get Started
              </button>
            </div>
          </motion.div>
        </div>
      </div>
      
      <div className="absolute bottom-0 w-full h-40 bg-gradient-to-t from-bg-base to-transparent z-10 pointer-events-none"></div>
    </section>
  );
};

export default Hero;
