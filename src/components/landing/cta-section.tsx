'use client';

import { useState } from 'react';
import { ArrowRight, CheckCircle, Zap, Users, TrendingUp, Star } from 'lucide-react';

export default function CTASection() {
  const [email, setEmail] = useState('');
  const [selectedPath, setSelectedPath] = useState('consultant');

  const paths = [
    {
      id: 'consultant',
      title: 'Become a VC Consultant',
      subtitle: 'Transform your career in 90 days',
      benefits: ['₦8M+ average salary', 'Flexible remote work', 'Global opportunities', 'Expert certification'],
      cta: 'Start Training Now',
      color: 'leather-600',
      popular: true
    },
    {
      id: 'startup',
      title: 'Find Expert Guidance',
      subtitle: 'Connect with vetted consultants',
      benefits: ['Faster funding rounds', 'Expert pitch reviews', 'Investor connections', 'Success guarantee'],
      cta: 'Find Consultants',
      color: 'leather-700',
      popular: false
    },
    {
      id: 'trainer',
      title: 'Monetize Your Expertise',
      subtitle: 'Create and sell VC courses',
      benefits: ['₦3M+ monthly potential', 'Global student reach', 'Passive income', 'Expert recognition'],
      cta: 'Become a Trainer',
      color: 'leather-800',
      popular: false
    }
  ];

  const selectedPathData = paths.find(p => p.id === selectedPath);

  return (
    <section className="py-20 bg-gradient-to-b from-leather-950 to-dark-950 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-10 w-96 h-96 bg-leather-600/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-72 h-72 bg-leather-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Urgency Banner */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-leather-600/20 to-leather-700/20 backdrop-blur-sm px-6 py-3 rounded-full border border-leather-600/30 mb-6 animate-pulse-glow">
            <Zap className="w-5 h-5 text-leather-400" />
            <span className="text-leather-200 font-semibold">Limited Time: Early Access Pricing</span>
            <div className="bg-leather-600 text-white px-3 py-1 rounded-full text-sm font-bold">50% OFF</div>
          </div>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Path Selection */}
            <div className="space-y-8">
              <div className="text-center lg:text-left">
                <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                  Ready to Transform
                  <span className="block bg-gradient-to-r from-leather-400 to-leather-600 bg-clip-text text-transparent">
                    Your Future?
                  </span>
                </h2>
                <p className="text-xl text-leather-200 mb-8">
                  Join thousands of Nigerians who have already started their journey. 
                  Choose your path and begin today.
                </p>
              </div>

              {/* Path Selection Cards */}
              <div className="space-y-4">
                {paths.map((path) => (
                  <div
                    key={path.id}
                    onClick={() => setSelectedPath(path.id)}
                    className={`relative p-6 rounded-2xl border-2 cursor-pointer transition-all duration-300 ${
                      selectedPath === path.id
                        ? `border-${path.color} bg-gradient-to-r from-${path.color}/10 to-${path.color}/5 shadow-2xl`
                        : 'border-leather-800 bg-leather-900/20 hover:border-leather-700'
                    }`}
                  >
                    {path.popular && (
                      <div className="absolute -top-3 left-6 bg-gradient-to-r from-leather-500 to-leather-600 text-white px-4 py-1 rounded-full text-sm font-bold">
                        Most Popular
                      </div>
                    )}
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-xl font-bold text-white mb-1">{path.title}</h3>
                        <p className="text-leather-300">{path.subtitle}</p>
                      </div>
                      <div className={`w-6 h-6 rounded-full border-2 ${
                        selectedPath === path.id 
                          ? `border-${path.color} bg-${path.color}` 
                          : 'border-leather-600'
                      } flex items-center justify-center`}>
                        {selectedPath === path.id && (
                          <div className="w-2 h-2 bg-white rounded-full"></div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Social Proof */}
              <div className="flex items-center space-x-6 pt-6 border-t border-leather-800">
                <div className="flex items-center space-x-2">
                  <Users className="w-5 h-5 text-leather-500" />
                  <span className="text-leather-300 text-sm">2,847 people joined this week</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Star className="w-5 h-5 text-leather-500" />
                  <span className="text-leather-300 text-sm">4.9/5 rating</span>
                </div>
              </div>
            </div>

            {/* Right Column - Selected Path Details */}
            <div className="bg-gradient-to-br from-leather-900/40 to-dark-900/40 backdrop-blur-xl rounded-3xl p-8 border border-leather-700/30">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-white mb-2">
                  {selectedPathData?.title}
                </h3>
                <p className="text-leather-300">{selectedPathData?.subtitle}</p>
              </div>

              {/* Benefits List */}
              <div className="space-y-4 mb-8">
                <h4 className="text-white font-semibold mb-4">What you'll get:</h4>
                {selectedPathData?.benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className={`w-5 h-5 text-${selectedPathData.color}`} />
                    <span className="text-leather-200">{benefit}</span>
                  </div>
                ))}
              </div>

              {/* Email Signup */}
              <div className="space-y-4 mb-6">
                <div className="relative">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    className="w-full bg-leather-800/30 border border-leather-700 rounded-xl px-4 py-4 text-white placeholder-leather-400 focus:outline-none focus:border-leather-500 focus:ring-2 focus:ring-leather-500/20"
                  />
                </div>
                
                <a href="/get-started" className={`w-full bg-gradient-to-r from-${selectedPathData?.color} to-leather-800 text-white py-4 rounded-xl font-semibold text-lg hover:shadow-2xl transition-all duration-300 flex items-center justify-center space-x-2 animate-pulse-glow`}>
                  <span>{selectedPathData?.cta}</span>
                  <ArrowRight className="w-5 h-5" />
                </a>
              </div>

              {/* Pricing Info */}
              <div className="text-center space-y-2">
                <div className="flex items-center justify-center space-x-3">
                  <span className="text-leather-400 line-through">₦150,000</span>
                  <span className="text-2xl font-bold text-white">₦75,000</span>
                  <div className="bg-green-500 text-white px-2 py-1 rounded text-sm font-bold">50% OFF</div>
                </div>
                <p className="text-leather-400 text-sm">Early access pricing ends in 7 days</p>
                <p className="text-leather-300 text-xs">No hidden fees • 30-day money-back guarantee</p>
              </div>

              {/* Trust Indicators */}
              <div className="flex items-center justify-center space-x-6 mt-6 pt-6 border-t border-leather-800">
                <div className="text-center">
                  <div className="text-lg font-bold text-white">2,847</div>
                  <div className="text-leather-400 text-xs">Active Users</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-bold text-white">₦45B</div>
                  <div className="text-leather-400 text-xs">Funding Raised</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-bold text-white">94%</div>
                  <div className="text-leather-400 text-xs">Success Rate</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA Bar */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-leather-900/60 to-dark-900/60 backdrop-blur-xl rounded-2xl p-8 border border-leather-700/30 max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
              <div className="text-left">
                <h4 className="text-xl font-bold text-white mb-2">
                  Still have questions?
                </h4>
                <p className="text-leather-300">
                  Book a free 15-minute consultation with our experts
                </p>
              </div>
              <div className="flex space-x-4">
                <a href="/support" className="border-2 border-leather-600 text-leather-300 px-6 py-3 rounded-xl font-semibold hover:bg-leather-600/10 transition-all duration-300">
                  Schedule Call
                </a>
                <a href="/support" className="bg-gradient-to-r from-leather-600 to-leather-700 text-white px-6 py-3 rounded-xl font-semibold hover:from-leather-700 hover:to-leather-800 transition-all duration-300">
                  Live Chat
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}