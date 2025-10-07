'use client';

import { useState } from 'react';
import { 
  TrendingUp, Users, DollarSign, Calendar, 
  ArrowRight, Star, Award, Target
} from 'lucide-react';

export default function CaseStudiesPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Cases', count: 24 },
    { id: 'fintech', name: 'Fintech', count: 8 },
    { id: 'healthtech', name: 'HealthTech', count: 6 },
    { id: 'edtech', name: 'EdTech', count: 5 },
    { id: 'agtech', name: 'AgTech', count: 5 }
  ];

  const caseStudies = [
    {
      id: 1,
      title: 'How TechPay Raised ₦450M Series A in 3 Months',
      company: 'TechPay Solutions',
      sector: 'Fintech',
      fundingAmount: '₦450M',
      fundingStage: 'Series A',
      timeline: '3 months',
      consultant: 'Adebayo Ogundimu',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop',
      challenge: 'Multiple VC rejections due to unclear market positioning',
      solution: 'Refined pitch deck and connected with sector-specific investors',
      results: ['₦450M raised', '50K+ users', 'Regulatory approval', '25 team members']
    },
    {
      id: 2,
      title: 'AgriConnect: From Idea to ₦280M Seed Funding',
      company: 'AgriConnect',
      sector: 'AgTech',
      fundingAmount: '₦280M',
      fundingStage: 'Seed',
      timeline: '5 months',
      consultant: 'Fatima Al-Hassan',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop',
      challenge: 'Difficulty explaining agricultural market opportunity to urban VCs',
      solution: 'Developed comprehensive market analysis and farmer testimonials',
      results: ['₦280M seed funding', '1000+ farmers', 'B2B partnerships', 'Revenue positive']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-dark-950 to-leather-950">
      <section className="pt-32 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center space-x-2 bg-leather-600/20 px-4 py-2 rounded-full mb-6">
              <Award className="w-4 h-4 text-leather-400" />
              <span className="text-leather-300 text-sm font-medium">Success Stories</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6">
              Case
              <span className="block bg-gradient-to-r from-leather-400 to-leather-600 bg-clip-text text-transparent">
                Studies
              </span>
            </h1>
            
            <p className="text-xl text-leather-200 mb-12">
              Deep dive into real success stories. Learn how startups overcame challenges 
              and secured funding with expert guidance.
            </p>

            <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-leather-400 mb-2">24</div>
                <div className="text-leather-300 text-sm">Case Studies</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-leather-400 mb-2">₦15B+</div>
                <div className="text-leather-300 text-sm">Total Raised</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-leather-400 mb-2">94%</div>
                <div className="text-leather-300 text-sm">Success Rate</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-8 border-t border-leather-800/30">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 py-2 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-leather-600 text-white'
                    : 'bg-leather-800/30 text-leather-300 hover:bg-leather-700/30'
                }`}
              >
                {category.name} ({category.count})
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="space-y-12 max-w-6xl mx-auto">
            {caseStudies.map((study) => (
              <div key={study.id} className="bg-gradient-to-br from-leather-900/40 to-dark-900/40 backdrop-blur-xl rounded-2xl overflow-hidden border border-leather-700/30">
                <div className="grid lg:grid-cols-2 gap-8">
                  <img
                    src={study.image}
                    alt={study.company}
                    className="w-full h-64 lg:h-full object-cover"
                  />
                  
                  <div className="p-8">
                    <div className="flex items-center space-x-3 mb-4">
                      <span className="bg-leather-600/20 text-leather-300 px-3 py-1 rounded-full text-sm font-semibold">
                        {study.sector}
                      </span>
                      <span className="bg-green-500/20 text-green-300 px-3 py-1 rounded-full text-sm font-semibold">
                        {study.fundingStage}
                      </span>
                    </div>
                    
                    <h2 className="text-2xl font-bold text-white mb-4">{study.title}</h2>
                    
                    <div className="grid grid-cols-3 gap-4 mb-6">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-leather-400">{study.fundingAmount}</div>
                        <div className="text-leather-300 text-sm">Raised</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-leather-400">{study.timeline}</div>
                        <div className="text-leather-300 text-sm">Timeline</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-leather-400">94%</div>
                        <div className="text-leather-300 text-sm">Success Rate</div>
                      </div>
                    </div>

                    <div className="space-y-4 mb-6">
                      <div>
                        <h4 className="text-white font-semibold mb-2">Challenge:</h4>
                        <p className="text-leather-200 text-sm">{study.challenge}</p>
                      </div>
                      <div>
                        <h4 className="text-white font-semibold mb-2">Solution:</h4>
                        <p className="text-leather-200 text-sm">{study.solution}</p>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-2 mb-6">
                      {study.results.map((result, index) => (
                        <div key={index} className="flex items-center space-x-2">
                          <Target className="w-4 h-4 text-green-400" />
                          <span className="text-leather-200 text-sm">{result}</span>
                        </div>
                      ))}
                    </div>

                    <button className="w-full bg-leather-600 hover:bg-leather-700 text-white py-3 rounded-xl font-semibold transition-colors flex items-center justify-center space-x-2">
                      <span>Read Full Case Study</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}