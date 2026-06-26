import { motion } from 'framer-motion';
import { Box, Lock, Layers, Network } from 'lucide-react';

const Features = () => {
  const features = [
    { icon: Box, title: "Industrial Product Visualization", desc: "High-fidelity 3D rendering of complex industrial machinery and parts directly in the browser." },
    { icon: Layers, title: "Interactive 3D Models", desc: "Allow clients to rotate, zoom, and inspect product architecture without plugins." },
    { icon: Network, title: "Digital Product Experiences", desc: "Transform static spec sheets into dynamic, interactive product journeys." },
    { icon: Lock, title: "Secure Cloud Platform", desc: "End-to-end encrypted pipelines ensuring your proprietary CAD data remains protected." }
  ];

  return (
    <section id="features" className="py-24 bg-bg-base relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Key Features</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Genuine capabilities engineered for enterprise-scale industrial applications.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card p-8 border-l-4 border-l-brand-cyan"
            >
              <feature.icon className="h-10 w-10 text-brand-cyan mb-6" />
              <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
              <p className="text-gray-400 leading-relaxed">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
