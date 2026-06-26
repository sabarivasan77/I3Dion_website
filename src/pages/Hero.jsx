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
    <section id="hero" className="relative min-h-[100vh] flex items-center justify-center pt-20 overflow-hidden">
      <HeroCanvas />
      
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-bg-base/40 via-bg-base/90 to-bg-base z-0"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full flex flex-col items-center justify-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-5xl flex flex-col items-center"
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter mb-8 leading-[1.1]">
            Empowering the <br className="hidden md:block"/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan to-brand-indigo drop-shadow-2xl">Digital Industrial Era.</span>
          </h1>
          
          <p className="text-lg md:text-2xl text-gray-400 mb-12 max-w-3xl font-light leading-relaxed">
            I3DION is a global technology company engineering scalable enterprise software, immersive spatial visualization, and applied digital transformation solutions.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center w-full sm:w-auto">
            <button onClick={() => scrollTo('contact')} className="group relative px-10 py-4 rounded-full bg-gradient-to-r from-brand-indigo to-brand-cyan text-white transition-all duration-300 font-bold shadow-[0_0_20px_rgba(79,70,229,0.4)] hover:shadow-[0_0_40px_rgba(0,240,255,0.6)] transform hover:-translate-y-1 overflow-hidden">
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>
              <span className="relative z-10">Partner with I3DION</span>
            </button>
            <button onClick={() => scrollTo('services')} className="px-10 py-4 rounded-full bg-transparent border border-white/20 hover:border-white/40 text-white transition-all duration-300 font-bold shadow-[0_0_15px_rgba(255,255,255,0.05)] hover:shadow-[0_0_25px_rgba(255,255,255,0.1)] hover:bg-white/5 transform hover:-translate-y-1">
              Explore Our Expertise
            </button>
          </div>
        </motion.div>
      </div>
      
      <div className="absolute bottom-0 w-full h-40 bg-gradient-to-t from-bg-base to-transparent z-10 pointer-events-none"></div>
    </section>
  );
};

export default Hero;
