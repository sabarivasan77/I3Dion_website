import { useState } from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', company: '', email: '', phone: '', subject: '', message: '' });
  const [status, setStatus] = useState('idle');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', company: '', email: '', phone: '', subject: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 border-t border-border-subtle">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-6xl mx-auto w-full">
        
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-gray-500 tracking-[0.2em] uppercase mb-4">Get In Touch</h2>
          <h3 className="text-4xl md:text-5xl font-bold mb-6">Contact I3DION</h3>
          <p className="text-xl text-gray-400 font-light max-w-2xl mx-auto">
            Connect with our technology integration officers for enterprise solutions and consulting.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          <div className="lg:col-span-1 space-y-8">
            <div className="glass-card p-8">
              <h3 className="text-lg font-bold text-white mb-2">Email</h3>
              <a href="mailto:i3diontech@gmail.com" className="text-brand-cyan hover:text-brand-cyan/80 transition-colors">i3diontech@gmail.com</a>
            </div>
            <div className="glass-card p-8">
              <h3 className="text-lg font-bold text-white mb-2">Phone & WhatsApp</h3>
              <p className="text-gray-300">+91 9080701426</p>
            </div>
            <div className="glass-card p-8">
              <h3 className="text-lg font-bold text-white mb-2">Location</h3>
              <p className="text-gray-300">Remote – Coimbatore, India</p>
            </div>
          </div>

          <div className="lg:col-span-2">
            {status === 'success' ? (
              <div className="glass-card p-12 text-center border-brand-cyan">
                <div className="w-16 h-16 bg-brand-cyan/20 text-brand-cyan rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                </div>
                <h2 className="text-2xl font-bold text-white mb-4">Transmission Successful</h2>
                <p className="text-gray-400 font-light mb-8">Your enquiry has been securely logged in our system. A confirmation email has been sent to your address.</p>
                <button onClick={() => setStatus('idle')} className="px-6 py-2 border border-gray-600 rounded-full hover:bg-white/5 transition">Send Another Message</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="glass-card p-8 md:p-10 space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">Full Name</label>
                    <input required type="text" className="w-full bg-bg-base border border-border-subtle rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-cyan transition-colors" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">Company Name</label>
                    <input required type="text" className="w-full bg-bg-base border border-border-subtle rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-cyan transition-colors" value={formData.company} onChange={e => setFormData({...formData, company: e.target.value})} />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">Email Address</label>
                    <input required type="email" className="w-full bg-bg-base border border-border-subtle rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-cyan transition-colors" value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">Phone Number</label>
                    <input type="tel" className="w-full bg-bg-base border border-border-subtle rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-cyan transition-colors" value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})} />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">Subject</label>
                  <input required type="text" className="w-full bg-bg-base border border-border-subtle rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-cyan transition-colors" value={formData.subject} onChange={e => setFormData({...formData, subject: e.target.value})} />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">Message</label>
                  <textarea required rows="4" className="w-full bg-bg-base border border-border-subtle rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-cyan transition-colors" value={formData.message} onChange={e => setFormData({...formData, message: e.target.value})}></textarea>
                </div>
                {status === 'error' && (
                  <p className="text-red-400 text-sm font-medium">Transmission failed. Please check your connection and try again.</p>
                )}
                <button type="submit" disabled={status === 'submitting'} className="w-full py-4 rounded-lg bg-brand-indigo hover:bg-brand-indigo/90 text-white font-bold transition-all disabled:opacity-50">
                  {status === 'submitting' ? 'Transmitting...' : 'Submit Enquiry'}
                </button>
              </form>
            )}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
