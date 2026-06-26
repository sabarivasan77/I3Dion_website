import { motion } from 'framer-motion';
import { Sparkles, Box, Zap } from 'lucide-react';

const CompanyIdentity = () => {
  const identities = [
    { 
      letter: "I³", 
      title: "Imagination, Innovation, Intelligence", 
      icon: Sparkles,
      desc: "These three core principles define our mindset. They represent how we approach complex problem-solving, intelligent product design, rigorous engineering, and enterprise digital transformation. I³ is the foundation of our forward-thinking strategy." 
    },
    { 
      letter: "3D", 
      title: "3D & Design", 
      icon: Box,
      desc: "We specialize in crafting intelligent digital experiences through 3D visualization, interactive spatial technologies, and human-centered design. Our design philosophy ensures that solutions are not just visually exceptional, but functionally robust and business-oriented." 
    },
    { 
      letter: "ION", 
      title: "Energy & Transformation", 
      icon: Zap,
      desc: "ION symbolizes continuous movement, energy, and technological progress. It represents the driving force that continuously pushes us toward adaptability, ensuring we deliver future-ready digital solutions that transform industries." 
    }
  ];

  return (
    <section id="identity" className="py-24 bg-bg-base relative z-10 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-brand-cyan/5 via-transparent to-transparent pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
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
          {identities.map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.7 }}
              className="group relative p-[1px] rounded-2xl bg-gradient-to-b from-border-subtle to-transparent hover:from-brand-cyan hover:to-brand-indigo transition-colors duration-500 overflow-hidden h-full"
            >
              <div className="absolute inset-0 bg-brand-cyan/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>
              
              <div className="bg-bg-elevated/90 backdrop-blur-sm p-10 rounded-2xl h-full flex flex-col relative z-10">
                <div className="absolute -right-4 -top-10 text-[120px] font-black text-white/[0.02] group-hover:text-brand-cyan/[0.05] transition-colors duration-500 pointer-events-none">
                  {item.letter}
                </div>
                
                <item.icon className="w-10 h-10 text-brand-cyan mb-8 group-hover:scale-110 transition-transform duration-500" />
                
                <h4 className="text-3xl font-black text-white mb-2 relative z-10">{item.letter}</h4>
                <h5 className="text-lg font-bold text-brand-cyan mb-6 relative z-10">{item.title}</h5>
                <p className="text-gray-400 font-light leading-relaxed relative z-10 flex-grow">{item.desc}</p>
              </div>
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
          <h2 className="text-3xl md:text-5xl font-black tracking-tight leading-tight max-w-4xl mx-auto text-gradient-brand">
            Pioneering Intelligent Technology & Enterprise Digital Solutions.
          </h2>
        </motion.div>

      </div>
    </section>
  );
};

export default CompanyIdentity;
