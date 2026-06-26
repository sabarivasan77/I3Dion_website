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
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      <HeroCanvas />
      
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-brand-cyan/5 via-bg-base/90 to-bg-base z-0"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full flex flex-col items-center justify-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-5xl flex flex-col items-center"
        >
          <div className="inline-flex items-center px-4 py-1.5 rounded-full border border-brand-cyan/20 bg-brand-cyan/5 text-brand-cyan text-sm font-semibold tracking-wide mb-8 shadow-[0_0_15px_rgba(0,240,255,0.1)]">
            <span className="flex h-2 w-2 rounded-full bg-brand-cyan animate-pulse mr-3"></span>
            Industrial Digital Solutions
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-8 leading-[1.1]">
            Transforming <br className="hidden md:block"/>
            <span className="text-gradient-brand drop-shadow-2xl">Industrial Reality.</span>
          </h1>
          
          <p className="text-lg md:text-2xl text-gray-400 mb-12 max-w-3xl font-light leading-relaxed">
            I3DION engineers premium spatial computing platforms and enterprise software architectures for the modern industrial era.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center w-full sm:w-auto">
            <button onClick={() => scrollTo('product')} className="group relative px-10 py-4 rounded-full bg-gradient-to-r from-brand-indigo to-brand-cyan text-white transition-all duration-300 font-semibold shadow-[0_0_20px_rgba(79,70,229,0.4)] hover:shadow-[0_0_40px_rgba(0,240,255,0.6)] transform hover:-translate-y-1 overflow-hidden">
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>
              <span className="relative z-10">Explore I3DION Spatial</span>
            </button>
            <button onClick={() => scrollTo('contact')} className="px-10 py-4 rounded-full bg-transparent border border-white/20 hover:border-white/40 text-white transition-all duration-300 font-semibold shadow-[0_0_15px_rgba(255,255,255,0.05)] hover:shadow-[0_0_25px_rgba(255,255,255,0.1)] hover:bg-white/5 transform hover:-translate-y-1">
              Get Started
            </button>
          </div>
        </motion.div>
      </div>
      
      <div className="absolute bottom-0 w-full h-40 bg-gradient-to-t from-bg-base to-transparent z-10 pointer-events-none"></div>
    </section>
  );
};

export default Hero;
