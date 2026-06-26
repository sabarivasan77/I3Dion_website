import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import HeroCanvas from '../components/HeroCanvas';
import { ArrowRight, Box, Cpu, Network } from 'lucide-react';

const Home = () => {
  return (
    <div className="relative min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden">
        <HeroCanvas />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center px-3 py-1 rounded-full border border-brand-cyan/30 bg-brand-cyan/10 text-brand-cyan text-sm mb-8">
                <span className="flex h-2 w-2 rounded-full bg-brand-cyan animate-pulse mr-2"></span>
                Pioneering Spatial Computing
              </div>
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
                Transforming Ideas Into <br/>
                <span className="text-gradient-brand">Intelligent Digital Solutions.</span>
              </h1>
              <p className="text-xl text-gray-400 mb-10 max-w-2xl leading-relaxed">
                I3DION engineers premium industrial technology platforms, bridging the gap between spatial visualization and enterprise software architecture.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/product" className="px-8 py-4 rounded-full bg-brand-indigo hover:bg-brand-indigo/90 text-white transition-all font-medium flex items-center justify-center shadow-[0_0_20px_rgba(79,70,229,0.4)]">
                  Explore I3DION Spatial <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link to="/contact" className="px-8 py-4 rounded-full bg-transparent border border-gray-600 hover:border-gray-400 text-white transition-all font-medium flex items-center justify-center">
                  Request Consultation
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
        
        {/* Subtle Bottom Gradient */}
        <div className="absolute bottom-0 w-full h-32 bg-gradient-to-t from-bg-base to-transparent z-10"></div>
      </section>

      {/* Feature Highlights */}
      <section className="py-24 bg-bg-base relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Box, title: "Spatial Visualization", desc: "Advanced 3D integration for industrial planning." },
              { icon: Cpu, title: "Enterprise Architecture", desc: "Scalable backend systems and cloud infrastructure." },
              { icon: Network, title: "Digital Transformation", desc: "Automating workflows with intelligent software." }
            ].map((feature, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="glass-card p-8"
              >
                <feature.icon className="h-10 w-10 text-brand-cyan mb-6" />
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-400 leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
