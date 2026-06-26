import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Shield, Activity, Lock, AlertTriangle, CheckCircle } from 'lucide-react';

const Dashboard = () => {
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [reports, setReports] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const fetchReports = async (token) => {
    setLoading(true);
    try {
      const res = await fetch('/api/reports', {
        headers: { Authorization: `Bearer ${token}` }
      });
      if (!res.ok) throw new Error('Invalid Admin Password');
      const data = await res.json();
      setReports(data);
      setIsAuthenticated(true);
      setError('');
    } catch (err) {
      setError(err.message);
      setIsAuthenticated(false);
    } finally {
      setLoading(false);
    }
  };

  const handleLogin = (e) => {
    e.preventDefault();
    fetchReports(password);
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-20">
        <form onSubmit={handleLogin} className="glass-card p-10 max-w-md w-full">
          <Shield className="h-12 w-12 text-brand-cyan mx-auto mb-6" />
          <h2 className="text-2xl font-bold text-center mb-8">Admin Authentication</h2>
          <input 
            type="password" 
            placeholder="Enter Admin Password"
            className="w-full bg-bg-base border border-border-subtle rounded-lg px-4 py-3 text-white focus:border-brand-cyan mb-4"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {error && <p className="text-red-400 text-sm mb-4">{error}</p>}
          <button disabled={loading} className="w-full bg-brand-indigo py-3 rounded-lg font-bold hover:bg-brand-indigo/90 transition-all">
            {loading ? 'Authenticating...' : 'Access Dashboard'}
          </button>
        </form>
      </div>
    );
  }

  const latest = reports[0];

  return (
    <div className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-screen">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
        <h1 className="text-4xl font-bold mb-8">DevSecOps Monitoring Dashboard</h1>
        
        {latest ? (
          <>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
              <div className="glass-card p-6 border-l-4 border-l-brand-cyan">
                <div className="flex justify-between items-start mb-2">
                  <span className="text-sm text-gray-400 font-bold uppercase tracking-wider">Health Score</span>
                  <Activity className="h-5 w-5 text-brand-cyan" />
                </div>
                <div className="text-4xl font-bold">{latest.healthScore}/100</div>
              </div>
              <div className="glass-card p-6 border-l-4 border-l-brand-indigo">
                <div className="flex justify-between items-start mb-2">
                  <span className="text-sm text-gray-400 font-bold uppercase tracking-wider">Security Score</span>
                  <Shield className="h-5 w-5 text-brand-indigo" />
                </div>
                <div className="text-4xl font-bold">{latest.securityScore}/100</div>
              </div>
              <div className="glass-card p-6 border-l-4 border-l-green-500">
                <div className="flex justify-between items-start mb-2">
                  <span className="text-sm text-gray-400 font-bold uppercase tracking-wider">Performance</span>
                  <Lock className="h-5 w-5 text-green-500" />
                </div>
                <div className="text-4xl font-bold">{latest.performanceScore}/100</div>
              </div>
              <div className="glass-card p-6 border-l-4 border-l-red-500">
                <div className="flex justify-between items-start mb-2">
                  <span className="text-sm text-gray-400 font-bold uppercase tracking-wider">Critical Issues</span>
                  <AlertTriangle className="h-5 w-5 text-red-500" />
                </div>
                <div className="text-4xl font-bold text-red-400">{latest.criticalIssues}</div>
              </div>
            </div>

            <h2 className="text-2xl font-bold mb-6">Historical Scans</h2>
            <div className="glass-card overflow-hidden">
              <table className="w-full text-left">
                <thead className="bg-white/5 border-b border-border-subtle">
                  <tr>
                    <th className="p-4 text-sm font-semibold text-gray-300">Date</th>
                    <th className="p-4 text-sm font-semibold text-gray-300">Status</th>
                    <th className="p-4 text-sm font-semibold text-gray-300">Health</th>
                    <th className="p-4 text-sm font-semibold text-gray-300">Security</th>
                    <th className="p-4 text-sm font-semibold text-gray-300">Errors</th>
                  </tr>
                </thead>
                <tbody>
                  {reports.map((report, i) => (
                    <tr key={i} className="border-b border-white/5 hover:bg-white/5">
                      <td className="p-4 text-gray-400">{new Date(report.executionDate).toLocaleString()}</td>
                      <td className="p-4">
                        <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-bold ${report.status === 'PASS' ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'}`}>
                          {report.status === 'PASS' ? <CheckCircle className="w-3 h-3 mr-1" /> : <AlertTriangle className="w-3 h-3 mr-1" />}
                          {report.status}
                        </span>
                      </td>
                      <td className="p-4 text-gray-300">{report.healthScore}</td>
                      <td className="p-4 text-gray-300">{report.securityScore}</td>
                      <td className="p-4 text-gray-300">{report.criticalIssues}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </>
        ) : (
          <p className="text-gray-400">No automation scans found in database.</p>
        )}
      </motion.div>
    </div>
  );
};

export default Dashboard;
