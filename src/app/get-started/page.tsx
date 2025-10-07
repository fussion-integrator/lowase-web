'use client';

import { useState } from 'react';
import Link from 'next/link';
import { 
  ArrowRight, CheckCircle, Users, GraduationCap, 
  Target, Clock, Award, Star 
} from 'lucide-react';

export default function GetStartedPage() {
  const [selectedPath, setSelectedPath] = useState('consultant');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    experience: '',
    goals: ''
  });

  const paths = [
    {
      id: 'consultant',
      title: 'Become a VC Consultant',
      subtitle: 'Transform your career in 90 days',
      icon: GraduationCap,
      price: '₦75,000',
      originalPrice: '₦150,000',
      duration: '90 days',
      features: [
        'Comprehensive VC training program',
        'Real-world case studies and projects',
        'Expert instructor guidance',
        'Industry certification',
        'Job placement assistance',
        'Lifetime community access'
      ],
      outcomes: [
        '₦8M+ average annual salary',
        'Remote work opportunities',
        'Global career prospects',
        'Expert recognition'
      ],
      nextStep: '/training'
    },
    {
      id: 'startup',
      title: 'Find Expert Guidance',
      subtitle: 'Connect with vetted consultants',
      icon: Users,
      price: 'From ₦60,000',
      originalPrice: null,
      duration: 'Per session',
      features: [
        'Access to 247+ verified consultants',
        'Personalized consultant matching',
        'Flexible session scheduling',
        'Multiple communication options',
        'Success rate tracking',
        'Money-back guarantee'
      ],
      outcomes: [
        '89% funding success rate',
        '6 weeks average time to fund',
        'Expert pitch optimization',
        'Investor network access'
      ],
      nextStep: '/consultants'
    },
    {
      id: 'trainer',
      title: 'Monetize Your Expertise',
      subtitle: 'Create and sell VC courses',
      icon: Target,
      price: 'Free to start',
      originalPrice: null,
      duration: 'Ongoing',
      features: [
        'Course creation tools',
        'Student management system',
        'Payment processing',
        'Marketing support',
        'Analytics dashboard',
        'Revenue sharing program'
      ],
      outcomes: [
        '₦3M+ monthly potential',
        'Global student reach',
        'Passive income streams',
        'Expert brand building'
      ],
      nextStep: '/auth/signup'
    }
  ];

  const selectedPathData = paths.find(p => p.id === selectedPath);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    window.location.href = selectedPathData?.nextStep || '/';
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-dark-950 to-leather-950">
      <section className="pt-32 pb-8">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
              Start Your
              <span className="block bg-gradient-to-r from-leather-400 to-leather-600 bg-clip-text text-transparent">
                Journey Today
              </span>
            </h1>
            <p className="text-xl text-leather-200 max-w-3xl mx-auto">
              Choose your path and join thousands of Nigerians transforming their careers 
              and businesses with Lowase.
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Left Column - Path Selection */}
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-white mb-6">Choose Your Path</h2>
                
                {paths.map((path) => {
                  const Icon = path.icon;
                  return (
                    <div
                      key={path.id}
                      onClick={() => setSelectedPath(path.id)}
                      className={`p-6 rounded-2xl border-2 cursor-pointer transition-all duration-300 ${
                        selectedPath === path.id
                          ? 'border-leather-500 bg-leather-500/10 shadow-2xl'
                          : 'border-leather-800 bg-leather-900/20 hover:border-leather-700'
                      }`}
                    >
                      <div className="flex items-start space-x-4">
                        <div className={`p-3 rounded-xl ${
                          selectedPath === path.id ? 'bg-leather-600/20' : 'bg-leather-800/20'
                        }`}>
                          <Icon className={`w-6 h-6 ${
                            selectedPath === path.id ? 'text-leather-400' : 'text-leather-500'
                          }`} />
                        </div>
                        
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-2">
                            <h3 className="text-xl font-bold text-white">{path.title}</h3>
                            <div className="text-right">
                              <div className="text-leather-200 font-semibold">{path.price}</div>
                              {path.originalPrice && (
                                <div className="text-leather-500 text-sm line-through">{path.originalPrice}</div>
                              )}
                            </div>
                          </div>
                          
                          <p className="text-leather-300 mb-3">{path.subtitle}</p>
                          
                          <div className="flex items-center space-x-4 text-sm text-leather-400">
                            <div className="flex items-center space-x-1">
                              <Clock className="w-4 h-4" />
                              <span>{path.duration}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <Star className="w-4 h-4" />
                              <span>4.9/5 rating</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}

                {/* Social Proof */}
                <div className="bg-gradient-to-br from-leather-900/40 to-dark-900/40 backdrop-blur-xl rounded-2xl p-6 border border-leather-700/30">
                  <h3 className="text-white font-semibold mb-4">Join Our Community</h3>
                  
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-leather-400">2,847</div>
                      <div className="text-leather-300 text-sm">Active Users</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-leather-400">₦45B</div>
                      <div className="text-leather-300 text-sm">Funding Raised</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-leather-400">89%</div>
                      <div className="text-leather-300 text-sm">Success Rate</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column - Selected Path Details & Form */}
              <div className="bg-gradient-to-br from-leather-900/40 to-dark-900/40 backdrop-blur-xl rounded-2xl p-8 border border-leather-700/30">
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {selectedPathData?.title}
                  </h3>
                  <p className="text-leather-300 mb-6">{selectedPathData?.subtitle}</p>

                  {/* Features */}
                  <div className="mb-6">
                    <h4 className="text-white font-semibold mb-3">What's Included:</h4>
                    <div className="space-y-2">
                      {selectedPathData?.features.map((feature, index) => (
                        <div key={index} className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-leather-400 flex-shrink-0" />
                          <span className="text-leather-200 text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Outcomes */}
                  <div className="mb-6">
                    <h4 className="text-white font-semibold mb-3">Expected Outcomes:</h4>
                    <div className="space-y-2">
                      {selectedPathData?.outcomes.map((outcome, index) => (
                        <div key={index} className="flex items-center space-x-2">
                          <Award className="w-4 h-4 text-green-400 flex-shrink-0" />
                          <span className="text-leather-200 text-sm">{outcome}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Registration Form */}
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-leather-300 text-sm font-medium mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="w-full bg-leather-800/30 border border-leather-700 rounded-xl px-4 py-3 text-white placeholder-leather-400 focus:outline-none focus:border-leather-500"
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div>
                    <label className="block text-leather-300 text-sm font-medium mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="w-full bg-leather-800/30 border border-leather-700 rounded-xl px-4 py-3 text-white placeholder-leather-400 focus:outline-none focus:border-leather-500"
                      placeholder="Enter your email"
                    />
                  </div>

                  <div>
                    <label className="block text-leather-300 text-sm font-medium mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      className="w-full bg-leather-800/30 border border-leather-700 rounded-xl px-4 py-3 text-white placeholder-leather-400 focus:outline-none focus:border-leather-500"
                      placeholder="+234 xxx xxx xxxx"
                    />
                  </div>

                  <div>
                    <label className="block text-leather-300 text-sm font-medium mb-2">
                      Experience Level
                    </label>
                    <select
                      value={formData.experience}
                      onChange={(e) => setFormData({...formData, experience: e.target.value})}
                      className="w-full bg-leather-800/30 border border-leather-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-leather-500"
                    >
                      <option value="">Select your experience</option>
                      <option value="beginner">Complete Beginner</option>
                      <option value="some">Some Knowledge</option>
                      <option value="intermediate">Intermediate</option>
                      <option value="advanced">Advanced</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-leather-300 text-sm font-medium mb-2">
                      Your Goals
                    </label>
                    <textarea
                      value={formData.goals}
                      onChange={(e) => setFormData({...formData, goals: e.target.value})}
                      rows={3}
                      className="w-full bg-leather-800/30 border border-leather-700 rounded-xl px-4 py-3 text-white placeholder-leather-400 focus:outline-none focus:border-leather-500"
                      placeholder="Tell us about your goals..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-leather-600 to-leather-700 text-white py-4 rounded-xl font-semibold hover:from-leather-700 hover:to-leather-800 transition-all duration-300 flex items-center justify-center space-x-2"
                  >
                    <span>Get Started Now</span>
                    <ArrowRight className="w-5 h-5" />
                  </button>

                  <p className="text-leather-400 text-xs text-center">
                    By clicking "Get Started", you agree to our Terms of Service and Privacy Policy.
                  </p>
                </form>

                {/* Guarantee */}
                <div className="mt-6 p-4 bg-green-500/10 border border-green-500/30 rounded-xl">
                  <div className="flex items-center space-x-2 mb-2">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span className="text-green-400 font-semibold">30-Day Money-Back Guarantee</span>
                  </div>
                  <p className="text-green-300 text-sm">
                    Not satisfied? Get a full refund within 30 days, no questions asked.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}