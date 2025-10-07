'use client';

import { useState } from 'react';
import { 
  DollarSign, TrendingUp, Users, Target, Zap, 
  CheckCircle, Star, ArrowRight, Play, Award
} from 'lucide-react';

export default function FundingPage() {
  const [activeTab, setActiveTab] = useState('connect');

  const investorTypes = [
    { name: 'Angel Investors', count: 234, minTicket: '₦5M', focus: 'Pre-seed, Seed' },
    { name: 'VC Firms', count: 67, minTicket: '₦50M', focus: 'Series A+' },
    { name: 'Family Offices', count: 45, minTicket: '₦100M', focus: 'Growth Stage' },
    { name: 'Corporate VCs', count: 28, minTicket: '₦25M', focus: 'Strategic' }
  ];

  const successStories = [
    {
      company: 'TechPay Solutions',
      amount: '₦450M',
      stage: 'Series A',
      time: '3 months',
      investors: 'Led by Ventures Platform'
    },
    {
      company: 'AgriConnect',
      amount: '₦280M', 
      stage: 'Seed',
      time: '2 months',
      investors: 'Angel network'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-dark-950 to-leather-950">
      <section className="pt-32 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center space-x-2 bg-leather-600/20 px-4 py-2 rounded-full mb-6">
              <DollarSign className="w-4 h-4 text-leather-400" />
              <span className="text-leather-300 text-sm font-medium">Raise Capital</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6">
              Connect with
              <span className="block bg-gradient-to-r from-leather-400 to-leather-600 bg-clip-text text-transparent">
                Investors
              </span>
            </h1>
            
            <p className="text-xl text-leather-200 mb-12 max-w-3xl mx-auto">
              Access Nigeria's largest network of investors. Get matched with the right 
              investors for your stage, sector, and funding needs.
            </p>

            <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-leather-400 mb-2">374+</div>
                <div className="text-leather-300 text-sm">Active Investors</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-leather-400 mb-2">₦50B+</div>
                <div className="text-leather-300 text-sm">Deployed Capital</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-leather-400 mb-2">89%</div>
                <div className="text-leather-300 text-sm">Match Success</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 border-t border-leather-800/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Investor Network</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {investorTypes.map((type, index) => (
                <div key={index} className="bg-gradient-to-br from-leather-900/40 to-dark-900/40 backdrop-blur-xl rounded-2xl p-6 border border-leather-700/30">
                  <h3 className="text-lg font-bold text-white mb-2">{type.name}</h3>
                  <div className="text-2xl font-bold text-leather-400 mb-2">{type.count}</div>
                  <div className="text-leather-300 text-sm mb-2">Min: {type.minTicket}</div>
                  <div className="text-leather-400 text-xs">{type.focus}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-r from-leather-900/20 to-dark-900/20 backdrop-blur-xl rounded-2xl p-12 border border-leather-700/30">
              <h2 className="text-3xl font-bold text-white mb-4">Ready to Raise Capital?</h2>
              <p className="text-leather-200 mb-8">Get matched with investors who understand your market and stage</p>
              <button className="bg-gradient-to-r from-leather-600 to-leather-700 text-white px-8 py-4 rounded-xl font-semibold hover:from-leather-700 hover:to-leather-800 transition-all duration-300">
                Start Fundraising
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}