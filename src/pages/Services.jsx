import { motion } from 'framer-motion';
import { View, Cuboid, MonitorPlay, Box, LineChart, Code2, Factory, Briefcase } from 'lucide-react';

const Services = () => {
  const services = [
    { icon: View, title: "Augmented Reality (AR)", desc: "Overlay digital intelligence onto physical workspaces." },
    { icon: MonitorPlay, title: "Virtual Reality (VR)", desc: "Immersive industrial training and simulation environments." },
    { icon: Cuboid, title: "3D Modeling", desc: "High-precision visualization of complex components." },
    { icon: Box, title: "Web 3D Experiences", desc: "Interactive product catalogs directly in the browser." },
    { icon: LineChart, title: "Business Analytics", desc: "Data-driven insights for operational efficiency." },
    { icon: Code2, title: "Custom Software", desc: "Tailored enterprise architectures and API integrations." },
    { icon: Factory, title: "Industrial Digital Solutions", desc: "End-to-end digital transformation pipelines." },
    { icon: Briefcase, title: "B2B Product Development", desc: "Scalable SaaS platforms for enterprise clients." }
  ];

  return (
    <section id="services" className="py-24 bg-bg-elevated border-t border-border-subtle relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Our Expertise</h2>
          <p className="text-xl text-gray-400 font-light max-w-2xl mx-auto">
            Comprehensive technological solutions engineered for modern industry.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((svc, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card p-8 group hover:-translate-y-2 transition-all duration-300 border-t-2 border-t-transparent hover:border-t-brand-cyan"
            >
              <svc.icon className="w-8 h-8 text-brand-cyan mb-6 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-lg font-bold text-white mb-3">{svc.title}</h3>
              <p className="text-sm text-gray-400 font-light leading-relaxed">{svc.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
