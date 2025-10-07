'use client';

import { useState } from 'react';
import { 
  Calendar, User, Clock, ArrowRight, Search, 
  TrendingUp, BookOpen, Target, Award
} from 'lucide-react';

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Posts', count: 47 },
    { id: 'vc-insights', name: 'VC Insights', count: 18 },
    { id: 'startup-tips', name: 'Startup Tips', count: 15 },
    { id: 'market-analysis', name: 'Market Analysis', count: 8 },
    { id: 'success-stories', name: 'Success Stories', count: 6 }
  ];

  const posts = [
    {
      id: 1,
      title: 'The State of VC Funding in Nigeria 2024',
      excerpt: 'Comprehensive analysis of venture capital trends, funding patterns, and emerging opportunities in the Nigerian startup ecosystem.',
      author: 'Dr. Adebayo Ogundimu',
      date: '2024-01-15',
      readTime: '8 min read',
      category: 'market-analysis',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop',
      featured: true
    },
    {
      id: 2,
      title: 'How to Build a Compelling Pitch Deck',
      excerpt: 'Essential elements every startup needs to include in their investor presentation to secure funding.',
      author: 'Fatima Al-Hassan',
      date: '2024-01-12',
      readTime: '6 min read',
      category: 'startup-tips',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop'
    },
    {
      id: 3,
      title: 'Due Diligence Best Practices for VCs',
      excerpt: 'A comprehensive guide to conducting thorough due diligence on potential investment opportunities.',
      author: 'Chinedu Okwu',
      date: '2024-01-10',
      readTime: '12 min read',
      category: 'vc-insights',
      image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=400&h=250&fit=crop'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-dark-950 to-leather-950">
      <section className="pt-32 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center space-x-2 bg-leather-600/20 px-4 py-2 rounded-full mb-6">
              <BookOpen className="w-4 h-4 text-leather-400" />
              <span className="text-leather-300 text-sm font-medium">VC Insights</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6">
              VC Knowledge
              <span className="block bg-gradient-to-r from-leather-400 to-leather-600 bg-clip-text text-transparent">
                Hub
              </span>
            </h1>
            
            <p className="text-xl text-leather-200 mb-8">
              Expert insights, market analysis, and actionable advice from Nigeria's top VC professionals.
            </p>

            <div className="relative max-w-md mx-auto">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-leather-400" />
              <input
                type="text"
                placeholder="Search articles..."
                className="w-full bg-leather-800/30 border border-leather-700 rounded-xl pl-10 pr-4 py-3 text-white placeholder-leather-400 focus:outline-none focus:border-leather-500"
              />
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
            {posts.map((post) => (
              <article key={post.id} className="bg-gradient-to-br from-leather-900/40 to-dark-900/40 backdrop-blur-xl rounded-2xl overflow-hidden border border-leather-700/30 hover:border-leather-500/50 transition-all duration-300">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center space-x-4 mb-4 text-sm text-leather-400">
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>{new Date(post.date).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  
                  <h2 className="text-xl font-bold text-white mb-3 line-clamp-2">{post.title}</h2>
                  <p className="text-leather-200 text-sm mb-4 line-clamp-3">{post.excerpt}</p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <User className="w-4 h-4 text-leather-400" />
                      <span className="text-leather-300 text-sm">{post.author}</span>
                    </div>
                    <button className="flex items-center space-x-2 text-leather-400 hover:text-white transition-colors">
                      <span className="text-sm">Read More</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}