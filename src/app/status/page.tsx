'use client';

import { 
  CheckCircle, AlertCircle, Clock, 
  Server, Globe, Database, Zap
} from 'lucide-react';

export default function StatusPage() {
  const services = [
    {
      name: 'Platform API',
      status: 'operational',
      uptime: '99.98%',
      responseTime: '145ms'
    },
    {
      name: 'Web Application',
      status: 'operational',
      uptime: '99.95%',
      responseTime: '1.2s'
    },
    {
      name: 'Video Streaming',
      status: 'operational',
      uptime: '99.92%',
      responseTime: '2.1s'
    },
    {
      name: 'Payment Processing',
      status: 'operational',
      uptime: '99.99%',
      responseTime: '890ms'
    },
    {
      name: 'Database',
      status: 'operational',
      uptime: '99.97%',
      responseTime: '45ms'
    },
    {
      name: 'File Storage',
      status: 'operational',
      uptime: '99.94%',
      responseTime: '320ms'
    }
  ];

  const incidents = [
    {
      id: 1,
      title: 'Resolved: Brief API slowdown',
      status: 'resolved',
      date: 'Jan 15, 2024',
      duration: '23 minutes',
      description: 'API response times were elevated due to increased traffic. Issue resolved by scaling infrastructure.'
    },
    {
      id: 2,
      title: 'Scheduled: Database maintenance',
      status: 'scheduled',
      date: 'Jan 20, 2024',
      duration: '2 hours',
      description: 'Scheduled database maintenance to improve performance. No service interruption expected.'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'operational': return 'text-green-400';
      case 'degraded': return 'text-yellow-400';
      case 'outage': return 'text-red-400';
      default: return 'text-leather-400';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'operational': return CheckCircle;
      case 'degraded': return AlertCircle;
      case 'outage': return AlertCircle;
      default: return Clock;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-dark-950 to-leather-950">
      <section className="pt-32 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center space-x-2 bg-green-500/20 px-4 py-2 rounded-full mb-6">
              <CheckCircle className="w-4 h-4 text-green-400" />
              <span className="text-green-300 text-sm font-medium">All Systems Operational</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6">
              System
              <span className="block bg-gradient-to-r from-leather-400 to-leather-600 bg-clip-text text-transparent">
                Status
              </span>
            </h1>
            
            <p className="text-xl text-leather-200 mb-12">
              Real-time status of all Lowase services and infrastructure. 
              Stay informed about any service disruptions or maintenance.
            </p>

            <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">99.96%</div>
                <div className="text-leather-300 text-sm">Overall Uptime</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">6/6</div>
                <div className="text-leather-300 text-sm">Services Online</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">0</div>
                <div className="text-leather-300 text-sm">Active Incidents</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 border-t border-leather-800/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-white mb-8">Service Status</h2>
            
            <div className="space-y-4">
              {services.map((service, index) => {
                const StatusIcon = getStatusIcon(service.status);
                return (
                  <div key={index} className="bg-gradient-to-br from-leather-900/40 to-dark-900/40 backdrop-blur-xl rounded-2xl p-6 border border-leather-700/30">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <StatusIcon className={`w-6 h-6 ${getStatusColor(service.status)}`} />
                        <div>
                          <h3 className="text-lg font-semibold text-white">{service.name}</h3>
                          <span className={`text-sm capitalize ${getStatusColor(service.status)}`}>
                            {service.status}
                          </span>
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-8 text-sm text-leather-300">
                        <div className="text-center">
                          <div className="text-white font-semibold">{service.uptime}</div>
                          <div>Uptime</div>
                        </div>
                        <div className="text-center">
                          <div className="text-white font-semibold">{service.responseTime}</div>
                          <div>Response Time</div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 border-t border-leather-800/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-white mb-8">Recent Incidents</h2>
            
            <div className="space-y-6">
              {incidents.map((incident) => (
                <div key={incident.id} className="bg-gradient-to-br from-leather-900/40 to-dark-900/40 backdrop-blur-xl rounded-2xl p-6 border border-leather-700/30">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                          incident.status === 'resolved' 
                            ? 'bg-green-500/20 text-green-300' 
                            : incident.status === 'scheduled'
                            ? 'bg-blue-500/20 text-blue-300'
                            : 'bg-red-500/20 text-red-300'
                        }`}>
                          {incident.status.toUpperCase()}
                        </span>
                        <span className="text-leather-400 text-sm">{incident.date}</span>
                      </div>
                      <h3 className="text-lg font-semibold text-white mb-2">{incident.title}</h3>
                      <p className="text-leather-200 text-sm">{incident.description}</p>
                    </div>
                    <div className="text-right text-sm text-leather-400">
                      <div>Duration</div>
                      <div className="text-white font-semibold">{incident.duration}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 border-t border-leather-800/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-r from-leather-900/20 to-dark-900/20 backdrop-blur-xl rounded-2xl p-8 border border-leather-700/30">
              <h2 className="text-2xl font-bold text-white mb-4">Stay Updated</h2>
              <p className="text-leather-200 mb-6">
                Subscribe to status updates and get notified about any service disruptions 
                or scheduled maintenance.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 bg-leather-800/30 border border-leather-700 rounded-xl px-4 py-3 text-white placeholder-leather-400 focus:outline-none focus:border-leather-500"
                />
                <button className="bg-leather-600 hover:bg-leather-700 text-white px-6 py-3 rounded-xl font-semibold transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}