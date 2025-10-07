'use client';

import { useState, useEffect } from 'react';
import { ArrowRight, Play, Users, TrendingUp, Award, Globe } from 'lucide-react';

export default function HeroSection() {
  const [metrics, setMetrics] = useState({
    consultants: 0,
    startups: 0,
    funding: 0,
    success: 0,
  });

  const [currentPath, setCurrentPath] = useState('consultant');
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  const animatedTexts = [
    {
      title: 'VC Expert',
      subtitle: 'in 90 Days',
      description: 'Nigeria\'s premier platform where aspiring professionals become certified VC consultants, startups find expert guidance, and trainers monetize their expertise.'
    },
    {
      title: 'VC Consultant',
      subtitle: 'After Training',
      description: 'Get certified and start earning ₦8M+ annually as a professional VC consultant helping startups secure funding across Nigeria.'
    },
    {
      title: 'Expert Trainer',
      subtitle: 'On Lowase',
      description: 'Join our platform as a trainer and monetize your VC expertise by creating courses and mentoring the next generation of consultants.'
    },
    {
      title: 'Startup Success',
      subtitle: 'Raise Capital',
      description: 'Connect with expert VC consultants who will help you perfect your pitch, find the right investors, and secure funding for your business.'
    }
  ];

  useEffect(() => {
    const textInterval = setInterval(() => {
      setCurrentTextIndex((prev) => (prev + 1) % animatedTexts.length);
    }, 4000);

    return () => clearInterval(textInterval);
  }, []);

  useEffect(() => {
    // Animate counters
    const timer = setTimeout(() => {
      setMetrics({
        consultants: 247,
        startups: 1834,
        funding: 45.2,
        success: 89,
      });
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const paths = [
    { id: 'consultant', label: 'Become a VC Consultant', color: 'leather-600' },
    { id: 'startup', label: 'Find Expert Guidance', color: 'leather-700' },
    { id: 'trainer', label: 'Monetize Your Expertise', color: 'leather-800' },
    { id: 'investor', label: 'Access Talent Pipeline', color: 'dark-700' },
  ];

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-dark-950 via-dark-900 to-leather-900 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-leather-600/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-leather-500/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-leather-600/5 to-transparent rounded-full"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left Column - Main Content */}
          <div className="space-y-8 animate-fade-in">
            {/* Live Metrics Bar */}
            <div className="flex items-center space-x-6 text-sm text-leather-300">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span>Live Platform Activity</span>
              </div>
              <div className="text-leather-400">
                {metrics.consultants} consultants online
              </div>
            </div>

            {/* Main Headline */}
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight">
                Transform Into a
                <span key={`title-${currentTextIndex}`} className="block bg-gradient-to-r from-leather-400 to-leather-600 bg-clip-text text-transparent animate-fade-in">
                  {animatedTexts[currentTextIndex].title}
                </span>
                <span key={`subtitle-${currentTextIndex}`} className="block text-4xl lg:text-5xl text-leather-300 animate-fade-in">
                  {animatedTexts[currentTextIndex].subtitle}
                </span>
              </h1>
              
              <p key={`desc-${currentTextIndex}`} className="text-xl text-leather-200 max-w-2xl leading-relaxed animate-fade-in">
                {animatedTexts[currentTextIndex].description}
              </p>
            </div>

            {/* Path Selection */}
            <div className="space-y-4">
              <p className="text-leather-300 font-medium">Choose your journey:</p>
              <div className="grid grid-cols-2 gap-3">
                {paths.map((path) => (
                  <button
                    key={path.id}
                    onClick={() => setCurrentPath(path.id)}
                    className={`p-4 rounded-xl border-2 transition-all duration-300 text-left ${
                      currentPath === path.id
                        ? `border-${path.color} bg-${path.color}/10 text-white`
                        : 'border-leather-800 bg-leather-900/20 text-leather-300 hover:border-leather-700'
                    }`}
                  >
                    <div className="font-semibold text-sm">{path.label}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="/get-started" className="group bg-gradient-to-r from-leather-600 to-leather-700 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-leather-700 hover:to-leather-800 transition-all duration-300 animate-pulse-glow flex items-center justify-center space-x-2">
                <span>Start Your Journey</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              
              <a href="/demo" className="group border-2 border-leather-600 text-leather-300 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-leather-600/10 transition-all duration-300 flex items-center justify-center space-x-2">
                <Play className="w-5 h-5" />
                <span>Watch Demo</span>
              </a>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center space-x-8 pt-8 border-t border-leather-800">
              <div className="flex items-center space-x-2">
                <Award className="w-5 h-5 text-leather-500" />
                <span className="text-leather-400 text-sm">CBN Compliant</span>
              </div>
              <div className="flex items-center space-x-2">
                <Globe className="w-5 h-5 text-leather-500" />
                <span className="text-leather-400 text-sm">Nigeria Focused</span>
              </div>
            </div>
          </div>

          {/* Right Column - Interactive Dashboard Preview */}
          <div className="relative animate-slide-up">
            {/* Floating Metrics Cards */}
            <div className="relative bg-gradient-to-br from-leather-900/40 to-dark-900/40 backdrop-blur-xl rounded-2xl p-8 border border-leather-700/30">
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-leather-800/30 rounded-xl p-6 animate-counter">
                  <div className="flex items-center space-x-3 mb-2">
                    <Users className="w-6 h-6 text-leather-400" />
                    <span className="text-leather-300 text-sm font-medium">Consultants Trained</span>
                  </div>
                  <div className="text-3xl font-bold text-white">{metrics.consultants.toLocaleString()}</div>
                  <div className="text-green-400 text-sm">+23% this month</div>
                </div>

                <div className="bg-leather-800/30 rounded-xl p-6 animate-counter" style={{ animationDelay: '0.2s' }}>
                  <div className="flex items-center space-x-3 mb-2">
                    <TrendingUp className="w-6 h-6 text-leather-400" />
                    <span className="text-leather-300 text-sm font-medium">Startups Funded</span>
                  </div>
                  <div className="text-3xl font-bold text-white">{metrics.startups.toLocaleString()}</div>
                  <div className="text-green-400 text-sm">₦{metrics.funding}B raised</div>
                </div>

                <div className="bg-leather-800/30 rounded-xl p-6 col-span-2 animate-counter" style={{ animationDelay: '0.4s' }}>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-leather-300 text-sm font-medium">Success Rate</span>
                    <span className="text-2xl font-bold text-white">{metrics.success}%</span>
                  </div>
                  <div className="w-full bg-leather-900 rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-leather-500 to-leather-600 h-2 rounded-full transition-all duration-2000 ease-out"
                      style={{ width: `${metrics.success}%` }}
                    ></div>
                  </div>
                </div>
              </div>

              {/* Live Activity Feed */}
              <div className="mt-6 space-y-3">
                <div className="text-leather-300 text-sm font-medium mb-3">Live Activity</div>
                {[
                  { name: 'Adebayo O.', action: 'completed VC Fundamentals', time: '2m ago' },
                  { name: 'TechStart Lagos', action: 'booked consultation', time: '5m ago' },
                  { name: 'Sarah M.', action: 'earned certification', time: '8m ago' },
                ].map((activity, index) => (
                  <div key={index} className="flex items-center space-x-3 text-sm animate-fade-in" style={{ animationDelay: `${index * 0.3}s` }}>
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span className="text-white font-medium">{activity.name}</span>
                    <span className="text-leather-400">{activity.action}</span>
                    <span className="text-leather-500 ml-auto">{activity.time}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-6 -right-6 bg-leather-600 text-white px-4 py-2 rounded-full text-sm font-semibold animate-float">
              🔥 Trending
            </div>
            <div className="absolute -bottom-4 -left-4 bg-green-500 text-white px-4 py-2 rounded-full text-sm font-semibold animate-float" style={{ animationDelay: '1.5s' }}>
              ✓ Verified
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-leather-500 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-leather-500 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}