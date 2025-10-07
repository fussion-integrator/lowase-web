'use client';

import { useState } from 'react';
import { 
  Download, Star, Search, Filter, FileText, 
  TrendingUp, Users, Award, Play
} from 'lucide-react';

export default function TemplatesPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Templates', count: 47 },
    { id: 'pitch-decks', name: 'Pitch Decks', count: 18 },
    { id: 'financial-models', name: 'Financial Models', count: 12 },
    { id: 'due-diligence', name: 'Due Diligence', count: 8 },
    { id: 'legal-docs', name: 'Legal Documents', count: 9 }
  ];

  const templates = [
    {
      id: 1,
      name: 'Fintech Pitch Deck Template',
      description: 'Professional pitch deck template specifically designed for fintech startups seeking Series A funding.',
      category: 'pitch-decks',
      downloads: 1247,
      rating: 4.9,
      price: 'Free',
      preview: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=300&h=200&fit=crop',
      format: 'PowerPoint',
      slides: 15
    },
    {
      id: 2,
      name: 'Startup Financial Model',
      description: 'Comprehensive Excel model for 5-year financial projections including revenue, costs, and funding requirements.',
      category: 'financial-models',
      downloads: 892,
      rating: 4.8,
      price: '₦15,000',
      preview: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=300&h=200&fit=crop',
      format: 'Excel',
      sheets: 12
    },
    {
      id: 3,
      name: 'Due Diligence Checklist',
      description: 'Complete checklist covering all aspects of startup due diligence from market analysis to legal review.',
      category: 'due-diligence',
      downloads: 654,
      rating: 4.9,
      price: 'Free',
      preview: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=300&h=200&fit=crop',
      format: 'PDF',
      pages: 8
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-dark-950 to-leather-950">
      <section className="pt-32 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center space-x-2 bg-leather-600/20 px-4 py-2 rounded-full mb-6">
              <FileText className="w-4 h-4 text-leather-400" />
              <span className="text-leather-300 text-sm font-medium">Professional Templates</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6">
              VC Templates
              <span className="block bg-gradient-to-r from-leather-400 to-leather-600 bg-clip-text text-transparent">
                Library
              </span>
            </h1>
            
            <p className="text-xl text-leather-200 mb-8">
              Professional templates, models, and documents used by top VC firms and successful startups.
            </p>

            <div className="relative max-w-md mx-auto mb-8">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-leather-400" />
              <input
                type="text"
                placeholder="Search templates..."
                className="w-full bg-leather-800/30 border border-leather-700 rounded-xl pl-10 pr-4 py-3 text-white placeholder-leather-400 focus:outline-none focus:border-leather-500"
              />
            </div>

            <div className="grid grid-cols-3 gap-6 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-leather-400 mb-2">47+</div>
                <div className="text-leather-300 text-sm">Templates</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-leather-400 mb-2">15K+</div>
                <div className="text-leather-300 text-sm">Downloads</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-leather-400 mb-2">4.8★</div>
                <div className="text-leather-300 text-sm">Avg Rating</div>
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
          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {templates.map((template) => (
              <div key={template.id} className="bg-gradient-to-br from-leather-900/40 to-dark-900/40 backdrop-blur-xl rounded-2xl overflow-hidden border border-leather-700/30 hover:border-leather-500/50 transition-all duration-300">
                <div className="relative">
                  <img
                    src={template.preview}
                    alt={template.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                      template.price === 'Free' 
                        ? 'bg-green-500/20 text-green-300' 
                        : 'bg-leather-600/20 text-leather-300'
                    }`}>
                      {template.price}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <button className="bg-black/50 backdrop-blur-sm p-2 rounded-full text-white hover:bg-black/70 transition-colors">
                      <Play className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">{template.name}</h3>
                  <p className="text-leather-300 text-sm mb-4 line-clamp-2">{template.description}</p>
                  
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-white font-semibold">{template.rating}</span>
                    </div>
                    <span className="text-leather-400 text-sm">{template.downloads} downloads</span>
                  </div>

                  <div className="flex items-center justify-between mb-4 text-sm text-leather-400">
                    <span>{template.format}</span>
                    <span>
                      {template.slides && `${template.slides} slides`}
                      {template.sheets && `${template.sheets} sheets`}
                      {template.pages && `${template.pages} pages`}
                    </span>
                  </div>

                  <button className="w-full bg-leather-600 hover:bg-leather-700 text-white py-3 rounded-xl font-semibold transition-colors flex items-center justify-center space-x-2">
                    <Download className="w-4 h-4" />
                    <span>Download</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}