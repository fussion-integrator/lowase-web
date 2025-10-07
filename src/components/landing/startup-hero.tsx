'use client';

import { useState } from 'react';
import { 
  TrendingUp, 
  Users, 
  DollarSign, 
  Clock, 
  ArrowRight, 
  Play,
  CheckCircle,
  Zap,
  Target,
  Award
} from 'lucide-react';

export default function StartupHero() {
  const [fundingStage, setFundingStage] = useState('seed');

  const fundingStages = [
    { id: 'pre-seed', label: 'Pre-Seed', range: '₦50K - ₦5M', timeline: '2-4 weeks' },
    { id: 'seed', label: 'Seed', range: '₦5M - ₦50M', timeline: '4-8 weeks' },
    { id: 'series-a', label: 'Series A', range: '₦50M - ₦500M', timeline: '8-12 weeks' },
    { id: 'series-b', label: 'Series B+', range: '₦500M+', timeline: '12-16 weeks' },
  ];

  const successMetrics = [
    { label: 'Startups Funded', value: '1,834', icon: TrendingUp },
    { label: 'Total Raised', value: '₦45.2B', icon: DollarSign },
    { label: 'Success Rate', value: '89%', icon: Target },
    { label: 'Avg Time to Fund', value: '6 weeks', icon: Clock },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-dark-950 via-leather-950 to-dark-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-10 w-96 h-96 bg-green-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-72 h-72 bg-leather-600/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 bg-leather-600/20 border border-leather-600/30 px-4 py-2 rounded-full">
              <Zap className="w-4 h-4 text-leather-400" />
              <span className="text-leather-300 text-sm font-medium">For Startups & Founders</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold text-white leading-tight">
                Raise Capital
                <span className="block bg-gradient-to-r from-leather-400 to-leather-600 bg-clip-text text-transparent">
                  Faster & Smarter
                </span>
              </h1>
              
              <p className="text-xl text-leather-200 leading-relaxed">
                Connect with expert VC consultants who have helped 1,834+ Nigerian startups 
                raise over ₦45.2B in funding. Get your pitch investor-ready in weeks, not months.
              </p>
            </div>

            {/* Funding Stage Selector */}
            <div className="space-y-4">
              <p className="text-leather-300 font-medium">What stage are you at?</p>
              <div className="grid grid-cols-2 gap-3">
                {fundingStages.map((stage) => (
                  <button
                    key={stage.id}
                    onClick={() => setFundingStage(stage.id)}
                    className={`p-4 rounded-xl border-2 transition-all duration-300 text-left ${
                      fundingStage === stage.id
                        ? 'border-leather-500 bg-leather-500/10 text-white'
                        : 'border-leather-800 bg-leather-900/20 text-leather-300 hover:border-leather-700'
                    }`}
                  >
                    <div className="font-semibold">{stage.label}</div>
                    <div className="text-sm opacity-80">{stage.range}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Value Props */}
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span className="text-leather-200">Vetted consultants</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span className="text-leather-200">Investor connections</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span className="text-leather-200">Pitch optimization</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span className="text-leather-200">Success guarantee</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="/consultants" className="group bg-gradient-to-r from-leather-600 to-leather-700 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-leather-700 hover:to-leather-800 transition-all duration-300 animate-pulse-glow flex items-center justify-center space-x-2">
                <span>Find Your Consultant</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              
              <a href="/stories" className="group border-2 border-leather-600 text-leather-300 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-leather-600/10 transition-all duration-300 flex items-center justify-center space-x-2">
                <Play className="w-5 h-5" />
                <span>Watch Success Stories</span>
              </a>
            </div>

            {/* Social Proof */}
            <div className="flex items-center space-x-6 pt-6 border-t border-leather-800">
              <div className="flex items-center space-x-2">
                <Award className="w-5 h-5 text-green-500" />
                <span className="text-leather-300 text-sm">89% funding success rate</span>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="w-5 h-5 text-green-500" />
                <span className="text-leather-300 text-sm">247 active consultants</span>
              </div>
            </div>
          </div>

          {/* Right Column - Success Metrics */}
          <div className="space-y-6">
            {/* Main Stats Card */}
            <div className="bg-gradient-to-br from-leather-900/40 to-dark-900/40 backdrop-blur-xl rounded-2xl p-8 border border-leather-700/30">
              <h3 className="text-2xl font-bold text-white mb-6">Platform Impact</h3>
              
              <div className="grid grid-cols-2 gap-6">
                {successMetrics.map((metric, index) => {
                  const Icon = metric.icon;
                  return (
                    <div key={index} className="text-center animate-counter" style={{ animationDelay: `${index * 0.2}s` }}>
                      <div className="inline-flex items-center justify-center w-12 h-12 bg-leather-500/20 rounded-xl mb-3">
                        <Icon className="w-6 h-6 text-leather-400" />
                      </div>
                      <div className="text-2xl font-bold text-white mb-1">{metric.value}</div>
                      <div className="text-leather-300 text-sm">{metric.label}</div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Selected Stage Info */}
            <div className="bg-gradient-to-br from-leather-900/20 to-dark-900/20 backdrop-blur-xl rounded-2xl p-6 border border-leather-700/30">
              <h4 className="text-lg font-bold text-white mb-4">
                {fundingStages.find(s => s.id === fundingStage)?.label} Funding
              </h4>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-leather-300">Typical Range</span>
                  <span className="text-white font-semibold">
                    {fundingStages.find(s => s.id === fundingStage)?.range}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-leather-300">Average Timeline</span>
                  <span className="text-white font-semibold">
                    {fundingStages.find(s => s.id === fundingStage)?.timeline}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-leather-300">Success Rate</span>
                  <span className="text-leather-400 font-semibold">89%</span>
                </div>
              </div>

              <a href="/consultants" className="w-full mt-4 bg-leather-500/20 hover:bg-leather-500/30 text-leather-300 py-3 rounded-xl font-semibold transition-colors block text-center">
                Get Matched with Experts
              </a>
            </div>

            {/* Recent Success */}
            <div className="bg-gradient-to-br from-leather-800/20 to-dark-800/20 backdrop-blur-sm rounded-2xl p-6 border border-leather-700/20">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-leather-300 text-sm font-medium">Recent Success</span>
              </div>
              
              <div className="space-y-2">
                <div className="text-white font-semibold">TechPay Solutions</div>
                <div className="text-leather-400 font-bold">₦450M Series A Raised</div>
                <div className="text-leather-400 text-sm">
                  "Found the perfect consultant who understood our fintech market. 
                  Closed funding in just 3 months!" - Sarah Adebisi, Founder
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}