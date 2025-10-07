'use client';

import { useState } from 'react';
import { 
  Search, BookOpen, Hash, Filter, 
  TrendingUp, DollarSign, Users, Award
} from 'lucide-react';

export default function GlossaryPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedLetter, setSelectedLetter] = useState('A');

  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

  const terms = {
    A: [
      {
        term: 'Angel Investor',
        definition: 'An individual who provides capital for startups in exchange for ownership equity or convertible debt.',
        category: 'Investor Types'
      },
      {
        term: 'Anti-dilution',
        definition: 'Provisions that protect investors from dilution in subsequent funding rounds.',
        category: 'Legal Terms'
      }
    ],
    B: [
      {
        term: 'Bootstrap',
        definition: 'Building a company using personal finances or operating revenue, without external investment.',
        category: 'Funding'
      },
      {
        term: 'Burn Rate',
        definition: 'The rate at which a company spends its cash reserves, typically measured monthly.',
        category: 'Financial Metrics'
      }
    ],
    C: [
      {
        term: 'Cap Table',
        definition: 'A table showing the ownership percentages of a company\'s equity holders.',
        category: 'Legal Terms'
      },
      {
        term: 'Convertible Note',
        definition: 'A form of short-term debt that converts into equity, typically during a future financing round.',
        category: 'Funding'
      }
    ],
    D: [
      {
        term: 'Due Diligence',
        definition: 'The investigation or exercise of care that a reasonable business or person is expected to take before entering into an agreement or contract.',
        category: 'Investment Process'
      },
      {
        term: 'Down Round',
        definition: 'A financing round where the company\'s valuation is lower than in the previous round.',
        category: 'Funding'
      }
    ],
    E: [
      {
        term: 'Exit Strategy',
        definition: 'A plan for how investors and founders will realize returns on their investment, typically through acquisition or IPO.',
        category: 'Investment Process'
      },
      {
        term: 'Equity',
        definition: 'Ownership interest in a company, typically represented by shares of stock.',
        category: 'Financial Terms'
      }
    ]
  };

  const categories = [
    { name: 'All Terms', icon: BookOpen, count: 156 },
    { name: 'Funding', icon: DollarSign, count: 45 },
    { name: 'Investment Process', icon: TrendingUp, count: 38 },
    { name: 'Legal Terms', icon: Award, count: 32 },
    { name: 'Financial Metrics', icon: Hash, count: 28 },
    { name: 'Investor Types', icon: Users, count: 13 }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-dark-950 to-leather-950">
      <section className="pt-32 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center space-x-2 bg-leather-600/20 px-4 py-2 rounded-full mb-6">
              <BookOpen className="w-4 h-4 text-leather-400" />
              <span className="text-leather-300 text-sm font-medium">VC Dictionary</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6">
              VC
              <span className="block bg-gradient-to-r from-leather-400 to-leather-600 bg-clip-text text-transparent">
                Glossary
              </span>
            </h1>
            
            <p className="text-xl text-leather-200 mb-8">
              Comprehensive dictionary of venture capital terms, definitions, and concepts. 
              Master the language of VC and startup investing.
            </p>

            <div className="relative max-w-2xl mx-auto mb-8">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-leather-400" />
              <input
                type="text"
                placeholder="Search terms..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-leather-800/30 border border-leather-700 rounded-2xl pl-12 pr-4 py-4 text-white placeholder-leather-400 focus:outline-none focus:border-leather-500"
              />
            </div>

            <div className="grid grid-cols-3 gap-6 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-leather-400 mb-2">156+</div>
                <div className="text-leather-300 text-sm">Terms</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-leather-400 mb-2">6</div>
                <div className="text-leather-300 text-sm">Categories</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-leather-400 mb-2">Weekly</div>
                <div className="text-leather-300 text-sm">Updates</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-8 border-t border-leather-800/30">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-2 justify-center mb-8">
            {categories.map((category, index) => {
              const Icon = category.icon;
              return (
                <button
                  key={index}
                  className="flex items-center space-x-2 bg-leather-800/30 hover:bg-leather-700/30 text-leather-300 hover:text-white px-4 py-2 rounded-full transition-colors"
                >
                  <Icon className="w-4 h-4" />
                  <span className="text-sm">{category.name}</span>
                  <span className="bg-leather-700/50 px-2 py-0.5 rounded-full text-xs">{category.count}</span>
                </button>
              );
            })}
          </div>

          <div className="flex flex-wrap gap-2 justify-center">
            {alphabet.map((letter) => (
              <button
                key={letter}
                onClick={() => setSelectedLetter(letter)}
                className={`w-10 h-10 rounded-full font-semibold transition-all duration-300 ${
                  selectedLetter === letter
                    ? 'bg-leather-600 text-white'
                    : 'bg-leather-800/30 text-leather-300 hover:bg-leather-700/30 hover:text-white'
                }`}
              >
                {letter}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-white mb-8">Terms starting with "{selectedLetter}"</h2>
            
            <div className="space-y-6">
              {(terms as any)[selectedLetter]?.map((item: any, index: number) => (
                <div key={index} className="bg-gradient-to-br from-leather-900/40 to-dark-900/40 backdrop-blur-xl rounded-2xl p-6 border border-leather-700/30">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-xl font-bold text-white">{item.term}</h3>
                    <span className="bg-leather-600/20 text-leather-300 px-3 py-1 rounded-full text-sm">
                      {item.category}
                    </span>
                  </div>
                  <p className="text-leather-200 leading-relaxed">{item.definition}</p>
                </div>
              )) || (
                <div className="text-center py-12">
                  <BookOpen className="w-16 h-16 text-leather-400 mx-auto mb-4" />
                  <p className="text-leather-300">No terms found for letter "{selectedLetter}"</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 border-t border-leather-800/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-r from-leather-900/20 to-dark-900/20 backdrop-blur-xl rounded-2xl p-8 border border-leather-700/30">
              <h2 className="text-2xl font-bold text-white mb-4">Suggest a Term</h2>
              <p className="text-leather-200 mb-6">
                Don't see a term you're looking for? Help us expand our glossary by suggesting new terms.
              </p>
              <button className="bg-leather-600 hover:bg-leather-700 text-white px-8 py-3 rounded-xl font-semibold transition-colors">
                Suggest Term
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}