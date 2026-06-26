import { motion } from 'framer-motion';

const techStack = [
  { name: 'React', category: 'Frontend', desc: 'Component-driven UI architecture.' },
  { name: 'Vite', category: 'Build Tool', desc: 'Lightning-fast HMR and optimized builds.' },
  { name: 'Three.js', category: 'Graphics Engine', desc: 'WebGL 3D rendering.' },
  { name: 'WebXR', category: 'Spatial Computing', desc: 'Browser-based VR/AR experiences.' },
  { name: 'Node.js & Express', category: 'Backend', desc: 'Scalable serverless API routes.' },
  { name: 'PostgreSQL', category: 'Database', desc: 'Relational data integrity.' },
  { name: 'Tailwind CSS', category: 'Styling', desc: 'Utility-first design system.' },
  { name: 'Vercel Cloud', category: 'Infrastructure', desc: 'Global edge network deployment.' }
];

const Technology = () => {
  return (
    <div className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-screen">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Technology Stack</h1>
        <p className="text-xl text-gray-400 max-w-3xl mb-16">
          I3DION is built on a modern, highly-scalable enterprise architecture designed for maximum performance, security, and developer velocity.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {techStack.map((tech, i) => (
            <motion.div 
              key={tech.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card p-6 flex flex-col h-full"
            >
              <span className="text-xs font-bold uppercase tracking-wider text-brand-cyan mb-2">{tech.category}</span>
              <h3 className="text-xl font-bold text-white mb-3">{tech.name}</h3>
              <p className="text-sm text-gray-400 flex-grow">{tech.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Technology;
