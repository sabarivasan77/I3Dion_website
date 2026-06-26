import { motion } from 'framer-motion';
import { Target, Flag, Orbit, Zap } from 'lucide-react';

const CompanyRoadmap = () => {
  const roadmap = [
    { icon: Flag, title: "Launch I3DION Spatial", status: "Planned", desc: "Release the flagship enterprise visualization platform to early industrial adopters." },
    { icon: Target, title: "Expand AR Solutions", status: "In Progress", desc: "Develop augmented overlays specifically tailored for manufacturing shop floors." },
    { icon: Orbit, title: "Deliver Enterprise Integrations", status: "Future Vision", desc: "Publish robust APIs for seamless SAP and Salesforce synchronization." },
    { icon: Zap, title: "Scale Global Operations", status: "Future Vision", desc: "Expand technical teams and establish key B2B partnerships." }
  ];

  return (
    <section id="roadmap" className="py-24 bg-bg-elevated border-t border-border-subtle relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-sm font-bold text-gray-500 tracking-[0.2em] uppercase mb-4">Strategic Goals</h2>
          <h3 className="text-3xl md:text-5xl font-bold mb-6">Company Roadmap</h3>
          <p className="text-xl text-gray-400 font-light max-w-2xl mx-auto">
            Our long-term trajectory toward industrial digital leadership.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {roadmap.map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              className="flex gap-6 mb-8 last:mb-0 relative"
            >
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-brand-cyan/10 border border-brand-cyan/30 flex items-center justify-center z-10">
                  <item.icon className="w-5 h-5 text-brand-cyan" />
                </div>
                {i !== roadmap.length - 1 && (
                  <div className="w-px h-full bg-border-subtle absolute top-12 bottom-0 left-6"></div>
                )}
              </div>
              <div className="glass-card p-6 flex-grow border-l-2 border-l-brand-cyan/50 hover:border-l-brand-cyan transition-colors">
                <div className="flex justify-between items-center mb-2">
                  <h4 className="text-xl font-bold text-white">{item.title}</h4>
                  <span className={`text-xs font-bold uppercase px-2 py-1 rounded-full ${item.status === 'Planned' ? 'bg-brand-cyan/20 text-brand-cyan' : item.status === 'In Progress' ? 'bg-brand-indigo/20 text-brand-indigo' : 'bg-gray-800 text-gray-400'}`}>
                    {item.status}
                  </span>
                </div>
                <p className="text-gray-400 font-light leading-relaxed">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CompanyRoadmap;
