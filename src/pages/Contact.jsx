import { useState } from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', company: '', email: '', phone: '', subject: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle, submitting, success, error

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      if (!response.ok) throw new Error('Submission failed');
      setStatus('success');
      setFormData({ name: '', company: '', email: '', phone: '', subject: '', message: '' });
    } catch (err) {
      console.error(err);
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-screen flex flex-col justify-center border-t border-border-subtle">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-6xl mx-auto w-full">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center">Contact I3DION</h2>
        <p className="text-center text-gray-400 mb-12">Reach out to our technology integration officers for enterprise solutions and consulting.</p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          <div className="lg:col-span-1 space-y-8">
            <div className="glass-card p-6">
              <h3 className="text-lg font-bold text-white mb-2">Email</h3>
              <a href="mailto:i3diontech@gmail.com" className="text-brand-cyan hover:text-brand-cyan/80 transition-colors">i3diontech@gmail.com</a>
            </div>
            <div className="glass-card p-6">
              <h3 className="text-lg font-bold text-white mb-2">Phone & WhatsApp</h3>
              <p className="text-gray-300">+91 9080701426</p>
            </div>
            <div className="glass-card p-6">
              <h3 className="text-lg font-bold text-white mb-2">Location</h3>
              <p className="text-gray-300">Remote – Coimbatore, India</p>
            </div>
          </div>

          <div className="lg:col-span-2">
            {status === 'success' ? (
          <div className="glass-card p-12 text-center border-brand-cyan">
            <h2 className="text-3xl font-bold text-brand-cyan mb-4">Transmission Successful</h2>
            <p className="text-gray-300">Your enquiry has been securely logged in our system. A confirmation email has been sent to your address.</p>
            <button onClick={() => setStatus('idle')} className="mt-8 px-6 py-2 border border-gray-600 rounded-full hover:bg-white/5 transition">Send Another Message</button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="glass-card p-8 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Full Name</label>
                <input required type="text" className="w-full bg-bg-base border border-border-subtle rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-cyan" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Company / Organization</label>
                <input required type="text" className="w-full bg-bg-base border border-border-subtle rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-cyan" value={formData.company} onChange={e => setFormData({...formData, company: e.target.value})} />
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Corporate Email</label>
                <input required type="email" className="w-full bg-bg-base border border-border-subtle rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-cyan" value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Phone Number</label>
                <input type="tel" className="w-full bg-bg-base border border-border-subtle rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-cyan" value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})} />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">Subject</label>
              <input required type="text" className="w-full bg-bg-base border border-border-subtle rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-cyan" value={formData.subject} onChange={e => setFormData({...formData, subject: e.target.value})} />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">Message</label>
              <textarea required rows="5" className="w-full bg-bg-base border border-border-subtle rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-cyan" value={formData.message} onChange={e => setFormData({...formData, message: e.target.value})}></textarea>
            </div>

            {status === 'error' && <p className="text-red-400 text-sm">Error transmitting data. Please try again later.</p>}

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
