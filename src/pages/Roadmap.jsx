import { motion } from 'framer-motion';
import { CheckCircle, Circle } from 'lucide-react';

const Roadmap = () => {
  const milestones = [
    { title: "Core Engine Architecture", status: "completed", desc: "WebGL and WebXR integration foundations." },
    { title: "Secure Cloud Deployment", status: "completed", desc: "Vercel infrastructure and enterprise security headers." },
    { title: "I3DION Spatial Beta", status: "active", desc: "Waitlist onboarding and early industrial client testing." },
    { title: "Enterprise API Release", status: "upcoming", desc: "Public documentation and integration hooks for existing CRMs." }
  ];

  return (
    <section id="roadmap" className="py-24 bg-bg-elevated relative z-10 border-t border-border-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-3 py-1 rounded-full border border-brand-cyan/30 bg-brand-cyan/10 text-brand-cyan text-xs font-bold uppercase tracking-wider mb-6">
            Coming Soon
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Development Roadmap</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Strategic milestones toward the public release of I3DION Spatial.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto relative">
          {/* Vertical Line */}
          <div className="absolute left-8 top-4 bottom-4 w-px bg-border-subtle hidden md:block"></div>
          
          <div className="space-y-12">
            {milestones.map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative flex flex-col md:flex-row gap-6 md:gap-12"
              >
                <div className="flex items-center md:items-start md:w-16 flex-shrink-0 z-10">
                  <div className={`bg-bg-base p-1 rounded-full ${item.status === 'completed' ? 'text-brand-cyan' : item.status === 'active' ? 'text-brand-indigo animate-pulse' : 'text-gray-600'}`}>
                    {item.status === 'completed' ? <CheckCircle className="h-8 w-8" /> : <Circle className="h-8 w-8" />}
                  </div>
                </div>
                <div className="glass-card p-6 flex-grow">
                  <h3 className={`text-xl font-bold mb-2 ${item.status === 'completed' ? 'text-white' : item.status === 'active' ? 'text-brand-indigo' : 'text-gray-500'}`}>
                    {item.title}
                  </h3>
                  <p className="text-gray-400">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Roadmap;
