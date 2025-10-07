'use client';

import { 
  Shield, Lock, Eye, Server, 
  CheckCircle, Award, Globe, Users
} from 'lucide-react';

export default function SecurityPage() {
  const securityFeatures = [
    {
      icon: Lock,
      title: 'End-to-End Encryption',
      description: 'All data is encrypted in transit and at rest using industry-standard AES-256 encryption.'
    },
    {
      icon: Shield,
      title: 'Multi-Factor Authentication',
      description: 'Secure your account with SMS, email, or authenticator app-based 2FA.'
    },
    {
      icon: Server,
      title: 'Secure Infrastructure',
      description: 'Hosted on AWS with enterprise-grade security controls and monitoring.'
    },
    {
      icon: Eye,
      title: 'Privacy by Design',
      description: 'We collect only necessary data and give you full control over your information.'
    }
  ];

  const certifications = [
    {
      name: 'SOC 2 Type II',
      description: 'Audited security controls for service organizations',
      status: 'Certified'
    },
    {
      name: 'ISO 27001',
      description: 'International standard for information security management',
      status: 'In Progress'
    },
    {
      name: 'GDPR Compliant',
      description: 'European data protection regulation compliance',
      status: 'Certified'
    },
    {
      name: 'NDPR Compliant',
      description: 'Nigeria Data Protection Regulation compliance',
      status: 'Certified'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-dark-950 to-leather-950">
      <section className="pt-32 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center space-x-2 bg-leather-600/20 px-4 py-2 rounded-full mb-6">
              <Shield className="w-4 h-4 text-leather-400" />
              <span className="text-leather-300 text-sm font-medium">Security & Privacy</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6">
              Your Data is
              <span className="block bg-gradient-to-r from-leather-400 to-leather-600 bg-clip-text text-transparent">
                Secure
              </span>
            </h1>
            
            <p className="text-xl text-leather-200 mb-12">
              We take security seriously. Your data is protected with enterprise-grade security 
              measures and industry-leading privacy practices.
            </p>

            <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-leather-400 mb-2">99.9%</div>
                <div className="text-leather-300 text-sm">Uptime</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-leather-400 mb-2">256-bit</div>
                <div className="text-leather-300 text-sm">Encryption</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-leather-400 mb-2">24/7</div>
                <div className="text-leather-300 text-sm">Monitoring</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 border-t border-leather-800/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Security Features</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {securityFeatures.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div key={index} className="bg-gradient-to-br from-leather-900/40 to-dark-900/40 backdrop-blur-xl rounded-2xl p-6 border border-leather-700/30 text-center">
                    <Icon className="w-12 h-12 text-leather-400 mx-auto mb-4" />
                    <h3 className="text-lg font-bold text-white mb-3">{feature.title}</h3>
                    <p className="text-leather-200 text-sm">{feature.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 border-t border-leather-800/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Compliance & Certifications</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {certifications.map((cert, index) => (
                <div key={index} className="bg-gradient-to-br from-leather-900/40 to-dark-900/40 backdrop-blur-xl rounded-2xl p-6 border border-leather-700/30">
                  <div className="flex items-center justify-between mb-4">
                    <Award className="w-8 h-8 text-leather-400" />
                    <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                      cert.status === 'Certified' 
                        ? 'bg-green-500/20 text-green-300' 
                        : 'bg-yellow-500/20 text-yellow-300'
                    }`}>
                      {cert.status}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{cert.name}</h3>
                  <p className="text-leather-200 text-sm">{cert.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}