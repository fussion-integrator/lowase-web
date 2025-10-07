'use client';

import { useState } from 'react';
import { 
  GraduationCap, 
  Users, 
  Video, 
  CreditCard, 
  Shield, 
  Globe,
  BookOpen,
  MessageSquare,
  TrendingUp,
  Award,
  Zap,
  Target
} from 'lucide-react';

export default function FeaturesShowcase() {
  const [activeFeature, setActiveFeature] = useState(0);

  const features = [
    {
      icon: GraduationCap,
      title: 'World-Class Training',
      description: 'Comprehensive VC education with real-world case studies',
      details: [
        '90-day intensive program',
        'Industry expert instructors',
        'Hands-on project work',
        'Peer learning community'
      ],
      color: 'leather-600',
      bgGradient: 'from-leather-600/20 to-leather-700/10'
    },
    {
      icon: Users,
      title: 'Expert Consultants',
      description: 'Connect with vetted VC professionals for personalized guidance',
      details: [
        'Verified consultant profiles',
        'Real-time availability',
        'Specialized expertise matching',
        'Success rate tracking'
      ],
      color: 'leather-700',
      bgGradient: 'from-leather-700/20 to-leather-800/10'
    },
    {
      icon: Video,
      title: 'Seamless Communication',
      description: 'HD video calls, screen sharing, and collaboration tools',
      details: [
        'Agora.io powered video',
        'Recording capabilities',
        'Document collaboration',
        'Mobile optimization'
      ],
      color: 'leather-800',
      bgGradient: 'from-leather-800/20 to-dark-800/10'
    },
    {
      icon: CreditCard,
      title: 'Secure Payments',
      description: 'Paystack & Flutterwave integration for Nigerian market',
      details: [
        'Multiple payment methods',
        'Naira & USD support',
        'Instant payouts',
        'Transaction security'
      ],
      color: 'dark-700',
      bgGradient: 'from-dark-700/20 to-dark-800/10'
    }
  ];

  const stats = [
    { label: 'Course Completion Rate', value: '94%', icon: Target },
    { label: 'Average Salary Increase', value: '340%', icon: TrendingUp },
    { label: 'Consultant Success Rate', value: '89%', icon: Award },
    { label: 'Platform Uptime', value: '99.9%', icon: Zap },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-dark-950 to-leather-950">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center space-x-2 bg-leather-800/20 px-4 py-2 rounded-full mb-6">
            <Zap className="w-4 h-4 text-leather-400" />
            <span className="text-leather-300 text-sm font-medium">Platform Features</span>
          </div>
          
          <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6">
            Everything You Need to
            <span className="block bg-gradient-to-r from-leather-400 to-leather-600 bg-clip-text text-transparent">
              Succeed in VC
            </span>
          </h2>
          
          <p className="text-xl text-leather-200 max-w-3xl mx-auto">
            From comprehensive training to expert consultations, our platform provides 
            all the tools and connections you need to thrive in venture capital.
          </p>
        </div>

        {/* Interactive Feature Grid */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          {/* Feature List */}
          <div className="space-y-4">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  onClick={() => setActiveFeature(index)}
                  className={`p-6 rounded-2xl border-2 cursor-pointer transition-all duration-500 ${
                    activeFeature === index
                      ? `border-${feature.color} bg-gradient-to-r ${feature.bgGradient} shadow-2xl`
                      : 'border-leather-800 bg-leather-900/20 hover:border-leather-700'
                  }`}
                >
                  <div className="flex items-start space-x-4">
                    <div className={`p-3 rounded-xl bg-${feature.color}/20`}>
                      <Icon className={`w-6 h-6 text-${feature.color}`} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                      <p className="text-leather-300 mb-4">{feature.description}</p>
                      
                      {activeFeature === index && (
                        <div className="space-y-2 animate-fade-in">
                          {feature.details.map((detail, idx) => (
                            <div key={idx} className="flex items-center space-x-2">
                              <div className={`w-1.5 h-1.5 bg-${feature.color} rounded-full`}></div>
                              <span className="text-leather-200 text-sm">{detail}</span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Feature Preview */}
          <div className="relative">
            <div className="sticky top-8">
              <div className="bg-gradient-to-br from-leather-900/40 to-dark-900/40 backdrop-blur-xl rounded-2xl p-8 border border-leather-700/30">
                <div className="aspect-video bg-gradient-to-br from-leather-800/30 to-dark-800/30 rounded-xl mb-6 flex items-center justify-center">
                  {(() => {
                    const Icon = features[activeFeature].icon;
                    return <Icon className={`w-16 h-16 text-${features[activeFeature].color}`} />;
                  })()}
                </div>
                
                <h4 className="text-2xl font-bold text-white mb-4">
                  {features[activeFeature].title}
                </h4>
                
                <p className="text-leather-200 mb-6">
                  {features[activeFeature].description}
                </p>

                <a href="/training" className={`w-full bg-gradient-to-r from-${features[activeFeature].color} to-leather-800 text-white py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 block text-center`}>
                  Explore Feature
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="bg-gradient-to-br from-leather-900/40 to-dark-900/40 backdrop-blur-xl rounded-2xl p-6 border border-leather-700/30 text-center animate-counter"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="inline-flex items-center justify-center w-12 h-12 bg-leather-600/20 rounded-xl mb-4">
                  <Icon className="w-6 h-6 text-leather-400" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-leather-300 text-sm">{stat.label}</div>
              </div>
            );
          })}
        </div>

        {/* Additional Features Grid */}
        <div className="mt-20 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: Shield,
              title: 'Bank-Level Security',
              description: 'End-to-end encryption and NDPR compliance for your data protection'
            },
            {
              icon: Globe,
              title: 'Multi-Language Support',
              description: 'Available in English, Hausa, Yoruba, and Igbo for accessibility'
            },
            {
              icon: BookOpen,
              title: 'Comprehensive Library',
              description: 'Access to extensive VC resources, templates, and case studies'
            },
            {
              icon: MessageSquare,
              title: 'Community Forum',
              description: 'Connect with peers, share insights, and build your network'
            },
            {
              icon: Award,
              title: 'Certification Program',
              description: 'Earn recognized credentials that boost your professional profile'
            },
            {
              icon: TrendingUp,
              title: 'Career Tracking',
              description: 'Monitor your progress and showcase achievements to employers'
            }
          ].map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group bg-gradient-to-br from-leather-900/20 to-dark-900/20 backdrop-blur-sm rounded-2xl p-6 border border-leather-800/30 hover:border-leather-600/50 transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="inline-flex items-center justify-center w-12 h-12 bg-leather-600/20 rounded-xl mb-4 group-hover:bg-leather-600/30 transition-colors">
                  <Icon className="w-6 h-6 text-leather-400 group-hover:text-leather-300" />
                </div>
                <h3 className="text-lg font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-leather-300 text-sm leading-relaxed">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}