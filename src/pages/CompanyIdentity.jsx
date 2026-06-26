import { motion } from 'framer-motion';

const CompanyIdentity = () => {
  const letters = [
    { letter: "I", meaning: "Imagine & Innovate", desc: "The foundation of progress. We conceptualize transformative digital solutions for complex industrial challenges." },
    { letter: "3D", meaning: "Three Dimensional", desc: "Our core expertise. Bridging the physical and digital worlds through advanced spatial computing and visualization." },
    { letter: "ION", meaning: "Integration", desc: "The binding force. Seamlessly connecting high-performance technology with existing enterprise infrastructures." }
  ];

  return (
    <section id="identity" className="py-24 bg-bg-base relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-sm font-bold text-gray-500 tracking-[0.2em] uppercase mb-4">The Identity</h2>
          <h3 className="text-4xl md:text-5xl font-bold">What is I3DION?</h3>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
          {letters.map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.7 }}
              className="glass-card p-10 relative overflow-hidden group"
            >
              <div className="absolute -right-4 -top-10 text-[120px] font-black text-white/[0.03] group-hover:text-brand-cyan/[0.05] transition-colors duration-500">
                {item.letter}
              </div>
              <h4 className="text-4xl font-black text-brand-cyan mb-4 relative z-10">{item.letter}</h4>
              <h5 className="text-xl font-bold text-white mb-4 relative z-10">{item.meaning}</h5>
              <p className="text-gray-400 font-light leading-relaxed relative z-10">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-6xl font-black tracking-tight leading-tight max-w-5xl mx-auto text-gradient-brand">
            Pioneering Spatial Computing & <br className="hidden md:block"/> Industrial Digital Transformation.
          </h2>
        </motion.div>

      </div>
    </section>
  );
};

export default CompanyIdentity;
