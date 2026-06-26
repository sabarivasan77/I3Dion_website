import { motion } from 'framer-motion';
import { Activity, Layers, ShieldCheck, Zap, Database, TrendingUp } from 'lucide-react';

const WhyChoose = () => {
  const values = [
    { icon: Zap, title: "Faster Visualization", desc: "Instantly render complex industrial CAD data directly in the browser without plugins." },
    { icon: TrendingUp, title: "Business Efficiency", desc: "Reduce prototype physical costs and accelerate B2B sales cycles." },
    { icon: ShieldCheck, title: "Long-Term Scalability", desc: "Enterprise-grade cloud infrastructure designed to grow with your data." },
    { icon: Database, title: "Modern Architecture", desc: "Seamless integration into existing CRM and ERP backend systems." }
  ];

  return (
    <section id="why-choose" className="py-24 bg-bg-base relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Why Choose I3DION?</h2>
          <p className="text-xl text-gray-400 font-light max-w-2xl mx-auto">
            We deliver measurable business value through applied spatial intelligence.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {values.map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex gap-6 p-6 rounded-2xl hover:bg-white/[0.02] transition-colors"
            >
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-xl bg-brand-cyan/10 flex items-center justify-center border border-brand-cyan/20">
                  <item.icon className="w-6 h-6 text-brand-cyan" />
                </div>
              </div>
              <div>
                <h4 className="text-xl font-bold text-white mb-2">{item.title}</h4>
                <p className="text-gray-400 font-light leading-relaxed">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
