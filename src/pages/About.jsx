import { motion } from 'framer-motion';
import { Target, Globe2 } from 'lucide-react';

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
            <h3 className="text-3xl md:text-5xl font-bold mb-6">Built for the Digital Future.</h3>
            <p className="text-gray-400 text-lg font-light leading-relaxed mb-6">
              I3DION is a premium technology company dedicated to accelerating global digital transformation. We bridge the gap between complex business requirements and modern software architecture.
            </p>
            <p className="text-gray-400 text-lg font-light leading-relaxed">
              We engineer scalable enterprise solutions, ranging from comprehensive business analytics platforms to immersive spatial environments, empowering organizations to seamlessly integrate their operations into intelligent digital ecosystems.
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
            <div className="glass-card p-10 relative z-10 border-brand-cyan/20 group hover:border-brand-cyan/40 transition-colors duration-500">
              <h4 className="text-2xl font-bold text-white mb-4">Leadership</h4>
              <h5 className="text-lg text-brand-cyan mb-1">Sabarivasan G</h5>
              <p className="text-xs text-gray-400 uppercase tracking-widest font-semibold mb-6">Founder & Technology Entrepreneur</p>
              <p className="text-gray-300 font-light leading-relaxed">
                Focused on enterprise digital transformation, engineering scalable architectures, and developing next-generation technology platforms for modern industry.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 h-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="group relative p-[1px] rounded-2xl bg-gradient-to-b from-brand-cyan/40 to-transparent hover:from-brand-cyan hover:to-brand-cyan/20 transition-colors duration-500 h-full flex"
          >
            <div className="absolute inset-0 bg-brand-cyan/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>
            <div className="bg-bg-base p-10 rounded-2xl flex flex-col h-full w-full relative z-10">
              <div className="w-16 h-16 rounded-xl bg-brand-cyan/10 flex items-center justify-center mb-8 border border-brand-cyan/20 group-hover:border-brand-cyan/40 transition-colors">
                <Target className="h-8 w-8 text-brand-cyan" />
              </div>
              <h4 className="text-3xl font-bold text-white mb-6">Our Mission</h4>
              <p className="text-gray-400 font-light leading-relaxed flex-grow">
                I3DION exists to help businesses embrace digital transformation by creating innovative software, immersive technologies, intelligent visualization systems, and scalable digital solutions that solve real-world industrial and business challenges.
              </p>
              <div className="mt-8 pt-8 border-t border-border-subtle">
                <p className="text-sm font-semibold text-brand-cyan mb-4 uppercase tracking-wider">Core Focus Areas</p>
                <div className="flex flex-wrap gap-2">
                  {['Custom Software', 'Digital Transformation', 'AR & VR', '3D Visualization', 'Interactive Web', 'Industrial Solutions', 'Business Analytics', 'Enterprise Dev'].map(skill => (
                    <span key={skill} className="text-xs text-gray-400 bg-white/5 border border-white/10 px-3 py-1 rounded-full">{skill}</span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="group relative p-[1px] rounded-2xl bg-gradient-to-b from-brand-indigo/40 to-transparent hover:from-brand-indigo hover:to-brand-indigo/20 transition-colors duration-500 h-full flex"
          >
            <div className="absolute inset-0 bg-brand-indigo/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>
            <div className="bg-bg-base p-10 rounded-2xl flex flex-col h-full w-full relative z-10">
              <div className="w-16 h-16 rounded-xl bg-brand-indigo/10 flex items-center justify-center mb-8 border border-brand-indigo/20 group-hover:border-brand-indigo/40 transition-colors">
                <Globe2 className="h-8 w-8 text-brand-indigo" />
              </div>
              <h4 className="text-3xl font-bold text-white mb-6">Our Vision</h4>
              <p className="text-gray-400 font-light leading-relaxed flex-grow">
                To become a globally recognized technology company that develops intelligent digital products, immersive experiences, enterprise software, and next-generation industrial solutions, driving the future of technological innovation.
              </p>
              <div className="mt-8 pt-8 border-t border-border-subtle">
                <p className="text-sm font-semibold text-brand-indigo mb-4 uppercase tracking-wider">Strategic Pillars</p>
                <div className="flex flex-wrap gap-2">
                  {['Innovation', 'Scalability', 'Global Impact', 'Emerging Technologies', 'Sustainable Growth', 'Customer-Centric'].map(pillar => (
                    <span key={pillar} className="text-xs text-gray-400 bg-white/5 border border-white/10 px-3 py-1 rounded-full">{pillar}</span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default About;
