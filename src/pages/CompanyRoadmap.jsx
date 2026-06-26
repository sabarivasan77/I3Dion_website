import { motion } from 'framer-motion';
import { Target, Flag, Orbit, Zap, ArrowDownRight, ArrowDownLeft } from 'lucide-react';

const CompanyRoadmap = () => {
  const roadmap = [
    { phase: "Phase 1", icon: Flag, title: "Company Foundation", status: "Completed", desc: "Established core engineering architecture and initial product vision." },
    { phase: "Phase 2", icon: Target, title: "I3DION Spatial MVP", status: "Completed", desc: "First iteration of the spatial visualization engine deployed." },
    { phase: "Phase 3", icon: Orbit, title: "Industrial AR Platform", status: "In Progress", desc: "Augmented overlays specifically tailored for manufacturing shop floors." },
    { phase: "Phase 4", icon: Zap, title: "Advanced Visualization", status: "Planned", desc: "Photorealistic cloud rendering and complex physics simulation." },
    { phase: "Phase 5", icon: Zap, title: "Enterprise Digital Solutions", status: "Future Vision", desc: "Robust APIs for seamless SAP and Salesforce synchronization." }
  ];

  return (
    <section id="roadmap" className="py-32 bg-bg-elevated border-t border-border-subtle relative z-10 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-brand-indigo/5 via-transparent to-transparent"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <h2 className="text-sm font-bold text-gray-500 tracking-[0.2em] uppercase mb-4">Strategic Vision</h2>
          <h3 className="text-4xl md:text-6xl font-bold mb-6">Company Roadmap</h3>
          <p className="text-xl text-gray-400 font-light max-w-2xl mx-auto">
            Our long-term trajectory toward industrial digital leadership.
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto relative">
          {/* Central Animated Line */}
          <motion.div 
            initial={{ height: 0 }}
            whileInView={{ height: '100%' }}
            viewport={{ once: true }}
            transition={{ duration: 2, ease: "easeInOut" }}
            className="absolute left-[28px] md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-brand-cyan via-brand-indigo to-transparent md:-translate-x-1/2"
          ></motion.div>

          {roadmap.map((item, i) => {
            const isEven = i % 2 === 0;
            return (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: isEven ? -50 : 50, y: 50 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className={`relative flex items-center mb-16 last:mb-0 ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} flex-row`}
              >
                {/* Node Icon */}
                <div className="absolute left-0 md:left-1/2 w-14 h-14 rounded-full bg-bg-base border-4 border-bg-elevated flex items-center justify-center z-10 md:-translate-x-1/2 shadow-[0_0_20px_rgba(0,240,255,0.2)]">
                  <item.icon className={`w-5 h-5 ${item.status === 'Completed' ? 'text-brand-cyan' : item.status === 'In Progress' ? 'text-brand-indigo animate-pulse' : 'text-gray-500'}`} />
                </div>

                {/* Content Card */}
                <div className={`w-full md:w-1/2 pl-20 pr-0 ${isEven ? 'md:pr-16 md:pl-0 md:text-right' : 'md:pl-16 md:pr-0 md:text-left'}`}>
                  <div className="glass-card p-8 group hover:-translate-y-1 transition-transform duration-300 relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-cyan to-brand-indigo opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <span className="text-xs font-bold text-gray-500 tracking-widest uppercase block mb-2">{item.phase}</span>
                    <h4 className="text-2xl font-bold text-white mb-3">{item.title}</h4>
                    <span className={`inline-block text-xs font-bold uppercase px-3 py-1 rounded-full mb-4 ${item.status === 'Completed' ? 'bg-brand-cyan/20 text-brand-cyan' : item.status === 'In Progress' ? 'bg-brand-indigo/20 text-brand-indigo' : 'bg-white/5 text-gray-400 border border-border-subtle'}`}>
                      {item.status}
                    </span>
                    <p className="text-gray-400 font-light leading-relaxed">{item.desc}</p>
                  </div>
                </div>

                {/* Curved Connector SVG (Desktop Only) */}
                {i < roadmap.length - 1 && (
                  <div className="hidden md:block absolute top-[50px] left-1/2 w-1/2 h-[calc(100%+64px)] pointer-events-none -translate-x-1/2">
                    {isEven ? (
                      <ArrowDownRight className="absolute -bottom-4 right-[20%] text-brand-cyan/30 w-8 h-8 opacity-0 group-hover:opacity-100 transition-opacity" />
                    ) : (
                      <ArrowDownLeft className="absolute -bottom-4 left-[20%] text-brand-indigo/30 w-8 h-8 opacity-0 group-hover:opacity-100 transition-opacity" />
                    )}
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CompanyRoadmap;
