import { motion } from 'framer-motion';
import { Target, Lightbulb } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-32 bg-bg-elevated border-t border-border-subtle relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Company Story */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-sm font-bold text-gray-500 tracking-[0.2em] uppercase mb-4">The Story</h2>
            <h3 className="text-3xl md:text-5xl font-bold mb-6">Built for the Industrial Future.</h3>
            <p className="text-gray-400 text-lg font-light leading-relaxed mb-6">
              I3DION was founded on a singular realization: industrial enterprises are producing incredibly complex physical products, but lack the software architecture to effectively visualize and interact with them in the digital space.
            </p>
            <p className="text-gray-400 text-lg font-light leading-relaxed">
              We bridge this gap. By combining high-performance spatial computing with robust enterprise software, we build platforms that allow companies to seamlessly integrate their physical operations into intelligent digital environments.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-brand-cyan/20 blur-[100px] rounded-full z-0"></div>
            <div className="glass-card p-10 relative z-10 border-brand-cyan/20">
              <h4 className="text-2xl font-bold text-white mb-4">Leadership</h4>
              <h5 className="text-lg text-brand-cyan mb-1">Sabarivasan G</h5>
              <p className="text-xs text-gray-400 uppercase tracking-widest font-semibold mb-6">Founder & Technology Entrepreneur</p>
              <p className="text-gray-300 font-light leading-relaxed">
                Focused on industrial digital transformation, bridging the gap between heavy industry and modern Web3D architectures.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="glass-card p-10 flex flex-col h-full border-t-4 border-t-brand-cyan"
          >
            <Target className="h-10 w-10 text-brand-cyan mb-6" />
            <h4 className="text-2xl font-bold text-white mb-4">Our Mission</h4>
            <p className="text-gray-400 font-light leading-relaxed flex-grow">
              To empower industrial enterprises by providing scalable, high-performance software solutions that bridge the gap between physical operations and digital intelligence.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="glass-card p-10 flex flex-col h-full border-t-4 border-t-brand-indigo"
          >
            <Lightbulb className="h-10 w-10 text-brand-indigo mb-6" />
            <h4 className="text-2xl font-bold text-white mb-4">Our Vision</h4>
            <p className="text-gray-400 font-light leading-relaxed flex-grow">
              To become the global standard for industrial spatial computing, where every complex product can be instantly visualized, analyzed, and integrated through a web browser.
            </p>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default About;
