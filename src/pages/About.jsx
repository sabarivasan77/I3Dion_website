import { motion } from 'framer-motion';

const About = () => {
  return (
    <div className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-screen">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-4xl"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-8">About I3DION</h1>
        
        <div className="prose prose-invert prose-lg text-gray-300">
          <p className="lead text-xl text-gray-200 font-medium mb-8">
            I3DION is a premier industrial technology company dedicated to advancing digital transformation through intelligent software architectures and spatial computing.
          </p>

          <div className="glass-card p-8 mb-12">
            <h2 className="text-2xl font-bold text-white mb-4">Our Mission</h2>
            <p className="mb-0">
              To empower industrial enterprises by providing scalable, high-performance software solutions that bridge the gap between physical operations and digital intelligence.
            </p>
          </div>

          <div className="glass-card p-8 mb-12">
            <h2 className="text-2xl font-bold text-white mb-4">Leadership</h2>
            <h3 className="text-xl text-brand-cyan mb-2">Sabarivasan G</h3>
            <p className="text-sm text-gray-400 uppercase tracking-wider font-semibold mb-4">Founder & Technology Entrepreneur</p>
            <p className="mb-0">
              A technology entrepreneur deeply focused on spatial computing, industrial digital transformation, and 3D visualization. With a strong background in web technologies and enterprise software, Sabarivasan leads I3DION's product innovation, ensuring cutting-edge architectures and scalable infrastructure for modern industries.
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default About;
