import { motion } from 'framer-motion';
import { Layers, Database, Lock, Globe } from 'lucide-react';

const Product = () => {
  return (
    <div className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-screen">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <div className="flex items-center gap-4 mb-6">
          <h1 className="text-4xl md:text-6xl font-bold text-gradient-brand">I3DION Spatial</h1>
          <span className="px-3 py-1 rounded-full bg-brand-cyan/20 border border-brand-cyan/40 text-brand-cyan text-xs font-bold uppercase tracking-wider">Coming Soon</span>
        </div>
        
        <p className="text-xl text-gray-400 max-w-3xl mb-12 leading-relaxed">
          The ultimate enterprise platform for spatial computing and industrial 3D visualization. Designed for seamless integration into existing digital architectures.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div className="glass-card p-8">
            <h2 className="text-2xl font-bold text-white mb-4">The Problem</h2>
            <p className="text-gray-400">
              Industrial enterprises struggle to visualize complex spatial data and seamlessly integrate 3D environments into their existing web infrastructure without severe performance bottlenecks.
            </p>
          </div>
          <div className="glass-card p-8">
            <h2 className="text-2xl font-bold text-white mb-4">The Solution</h2>
            <p className="text-gray-400">
              I3DION Spatial provides a highly-optimized, WebXR-ready engine that renders complex industrial geometry directly in the browser, connected securely to enterprise backend systems.
            </p>
          </div>
        </div>

        <h2 className="text-3xl font-bold text-white mb-8">Core Capabilities</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {[
            { icon: Layers, title: "Spatial Rendering", desc: "High-performance WebGL processing." },
            { icon: Database, title: "Data Integration", desc: "Real-time sync with internal databases." },
            { icon: Lock, title: "Enterprise Security", desc: "End-to-end encrypted pipelines." },
            { icon: Globe, title: "Cloud Architecture", desc: "Deployable across global edge networks." }
          ].map((feat, i) => (
            <div key={i} className="glass-card p-6 border-t-4 border-t-brand-indigo">
              <feat.icon className="h-8 w-8 text-brand-cyan mb-4" />
              <h3 className="font-bold text-white mb-2">{feat.title}</h3>
              <p className="text-sm text-gray-400">{feat.desc}</p>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap gap-4">
          <button disabled className="px-8 py-3 rounded-full bg-brand-indigo/50 text-white cursor-not-allowed font-medium">
            Request Demo (Waitlist)
          </button>
          <a href="#" className="px-8 py-3 rounded-full border border-gray-600 text-gray-400 hover:text-white hover:border-gray-400 transition-colors font-medium">
            Documentation (Soon)
          </a>
        </div>
      </motion.div>
    </div>
  );
};

export default Product;
