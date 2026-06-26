import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Layers, Database, Lock, Globe, Code2 } from 'lucide-react';

const techStack = [
  { name: 'React & Vite', desc: 'Component architecture and fast HMR.' },
  { name: 'Three.js', desc: 'WebGL 3D rendering engine.' },
  { name: 'WebXR', desc: 'Immersive browser experiences.' },
  { name: 'Node.js', desc: 'Scalable backend API.' },
  { name: 'PostgreSQL', desc: 'Relational data integrity.' },
  { name: 'Tailwind CSS', desc: 'Utility-first styling.' }
];

const Product = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <section id="product" className="py-24 bg-bg-base border-t border-border-subtle relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center px-3 py-1 rounded-full border border-brand-cyan/30 bg-brand-cyan/10 text-brand-cyan text-xs font-bold uppercase tracking-wider mb-6">
            Flagship Project
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-gradient-brand mb-6">I3DION Spatial</h2>
          <span className="px-4 py-2 rounded-full bg-brand-indigo/20 border border-brand-indigo/40 text-brand-indigo text-sm font-bold tracking-wider">STATUS: COMING SOON</span>
        </div>

        <motion.div className="glass-card max-w-4xl mx-auto overflow-hidden">
          <div className="p-8 md:p-12">
            <h3 className="text-2xl font-bold text-white mb-4">Enterprise Spatial Computing</h3>
            <p className="text-gray-400 font-light leading-relaxed mb-8">
              The ultimate platform for industrial 3D visualization. Designed for seamless integration into existing digital architectures, enabling engineers and clients to interact with complex product models securely through the browser.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <button 
                onClick={() => setExpanded(!expanded)}
                className="px-8 py-3 rounded-full bg-brand-cyan text-bg-base font-bold flex items-center hover:bg-brand-cyan/90 transition-colors"
              >
                {expanded ? 'Hide Details' : 'Show More'} <ChevronDown className={`ml-2 w-5 h-5 transition-transform duration-300 ${expanded ? 'rotate-180' : ''}`} />
              </button>
              <button disabled className="px-8 py-3 rounded-full bg-white/5 text-gray-500 cursor-not-allowed border border-border-subtle font-medium">
                Join Waitlist
              </button>
            </div>
          </div>

          <AnimatePresence>
            {expanded && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.5, ease: [0.04, 0.62, 0.23, 0.98] }}
                className="border-t border-border-subtle bg-bg-elevated/50"
              >
                <div className="p-8 md:p-12 space-y-12">
                  
                  {/* Problem & Solution */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="text-lg font-bold text-white mb-3 flex items-center"><Lock className="w-5 h-5 mr-2 text-brand-indigo"/> The Problem</h4>
                      <p className="text-sm text-gray-400 leading-relaxed">Industrial enterprises struggle to visualize complex spatial data and seamlessly integrate heavy 3D environments into web infrastructure without severe performance bottlenecks and security risks.</p>
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-white mb-3 flex items-center"><Globe className="w-5 h-5 mr-2 text-brand-cyan"/> The Solution</h4>
                      <p className="text-sm text-gray-400 leading-relaxed">I3DION Spatial provides a highly-optimized, WebXR-ready engine that renders complex industrial geometry directly in the browser, connected securely to enterprise backend systems via encrypted pipelines.</p>
                    </div>
                  </div>

                  {/* Architecture Features */}
                  <div>
                    <h4 className="text-xl font-bold text-white mb-6">Core Architecture</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      <div className="p-4 bg-bg-base rounded-xl border border-border-subtle">
                        <Layers className="w-6 h-6 text-brand-cyan mb-3" />
                        <h5 className="font-bold text-white text-sm mb-1">Spatial Rendering</h5>
                        <p className="text-xs text-gray-500">High-performance WebGL.</p>
                      </div>
                      <div className="p-4 bg-bg-base rounded-xl border border-border-subtle">
                        <Database className="w-6 h-6 text-brand-indigo mb-3" />
                        <h5 className="font-bold text-white text-sm mb-1">Data Integration</h5>
                        <p className="text-xs text-gray-500">Real-time DB sync.</p>
                      </div>
                      <div className="p-4 bg-bg-base rounded-xl border border-border-subtle">
                        <Code2 className="w-6 h-6 text-gray-300 mb-3" />
                        <h5 className="font-bold text-white text-sm mb-1">Enterprise API</h5>
                        <p className="text-xs text-gray-500">RESTful architecture.</p>
                      </div>
                    </div>
                  </div>

                  {/* Tech Stack */}
                  <div>
                    <h4 className="text-xl font-bold text-white mb-6">Technology Stack</h4>
                    <div className="flex flex-wrap gap-3">
                      {techStack.map(tech => (
                        <div key={tech.name} className="px-4 py-2 bg-brand-cyan/10 border border-brand-cyan/20 rounded-lg">
                          <span className="text-brand-cyan text-sm font-bold">{tech.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Project Roadmap */}
                  <div>
                    <h4 className="text-xl font-bold text-white mb-6">Development Status</h4>
                    <div className="space-y-4 relative before:absolute before:inset-0 before:ml-2 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-brand-cyan before:to-transparent">
                      <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                        <div className="flex items-center justify-center w-5 h-5 rounded-full bg-brand-cyan text-bg-base shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2"></div>
                        <div className="w-[calc(100%-2rem)] md:w-[calc(50%-1.5rem)] p-4 rounded-xl glass-card">
                          <div className="flex items-center justify-between mb-1">
                            <h5 className="font-bold text-white text-sm">Engine Foundations</h5>
                            <span className="text-xs text-brand-cyan font-bold">Completed</span>
                          </div>
                        </div>
                      </div>
                      <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                        <div className="flex items-center justify-center w-5 h-5 rounded-full bg-brand-indigo shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 animate-pulse"></div>
                        <div className="w-[calc(100%-2rem)] md:w-[calc(50%-1.5rem)] p-4 rounded-xl glass-card">
                          <div className="flex items-center justify-between mb-1">
                            <h5 className="font-bold text-white text-sm">Beta Testing</h5>
                            <span className="text-xs text-brand-indigo font-bold">Active</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
};

export default Product;
