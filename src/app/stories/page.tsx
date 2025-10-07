'use client';

import { useState } from 'react';
import { 
  Play, Star, TrendingUp, Users, Award, Filter,
  MapPin, Calendar, DollarSign, Target, CheckCircle
} from 'lucide-react';

export default function StoriesPage() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedStory, setSelectedStory] = useState<any>(null);

  const categories = [
    { id: 'all', name: 'All Stories', count: 156 },
    { id: 'consultants', name: 'Consultants', count: 67 },
    { id: 'startups', name: 'Startups', count: 45 },
    { id: 'trainers', name: 'Trainers', count: 28 },
    { id: 'investors', name: 'Investors', count: 16 }
  ];

  const stories = [
    {
      id: 1,
      category: 'consultants',
      name: 'Adebayo Ogundimu',
      role: 'Senior VC Consultant',
      company: 'Former Goldman Sachs',
      location: 'Lagos, Nigeria',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face',
      videoThumbnail: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
      beforeMetric: '₦2.5M salary',
      afterMetric: '₦8.2M income',
      timeframe: '6 months',
      improvement: '+228%',
      story: 'From banking analyst to certified VC consultant. Now I help 15+ startups monthly secure funding and have built a thriving consulting practice.',
      achievements: [
        'Certified in 90 days',
        'Helped raise ₦2.8B',
        '4.9/5 rating',
        '150+ consultations'
      ],
      quote: "Lowase transformed my career completely. The structured learning path and expert network gave me everything I needed to become a successful VC consultant.",
      results: {
        clientsHelped: 47,
        fundsRaised: '₦2.8B',
        avgDealSize: '₦180M',
        successRate: '94%'
      }
    },
    {
      id: 2,
      category: 'startups',
      name: 'TechPay Solutions',
      role: 'Fintech Startup',
      company: 'Founded by Sarah Adebisi',
      location: 'Lagos, Nigeria',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&crop=face',
      videoThumbnail: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop',
      beforeMetric: 'Rejected by 8 VCs',
      afterMetric: '₦450M Series A',
      timeframe: '3 months',
      improvement: 'Funded',
      story: 'After multiple rejections, we found the perfect VC consultant through Lowase who understood our market and helped us secure Series A funding.',
      achievements: [
        'Series A funded',
        '50K+ users',
        'Regulatory approval',
        'Team of 25'
      ],
      quote: "The consultant we found through Lowase didn't just help us get funding - they became a strategic partner who understood the Nigerian fintech landscape.",
      results: {
        fundingRaised: '₦450M',
        userGrowth: '400%',
        teamSize: 25,
        marketShare: '12%'
      }
    },
    {
      id: 3,
      category: 'trainers',
      name: 'Dr. Olumide Soyinka',
      role: 'VC Training Expert',
      company: 'Former Managing Partner',
      location: 'Lagos, Nigeria',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop&crop=face',
      videoThumbnail: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=600&h=400&fit=crop',
      beforeMetric: 'Retired from VC',
      afterMetric: '₦3.2M/month',
      timeframe: '1 year',
      improvement: 'New income stream',
      story: 'After 20 years in VC, I monetized my expertise by creating courses on Lowase. Now my knowledge helps hundreds while generating significant income.',
      achievements: [
        'Top trainer',
        '4.9/5 rating',
        '12 courses',
        '₦38M earned'
      ],
      quote: "Lowase gave me a platform to share two decades of VC knowledge while creating a meaningful income stream in retirement.",
      results: {
        studentsImpacted: 500,
        coursesCreated: 12,
        avgRating: 4.9,
        totalEarnings: '₦38M'
      }
    }
  ];

  const stats = [
    { label: 'Success Stories', value: '156+', icon: Award },
    { label: 'Funds Raised', value: '₦50B+', icon: TrendingUp },
    { label: 'Career Changes', value: '89%', icon: Users },
    { label: 'Avg Improvement', value: '340%', icon: Target }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-dark-950 to-leather-950">
      {/* Hero Section */}
      <section className="pt-32 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center space-x-2 bg-leather-600/20 px-4 py-2 rounded-full mb-6">
              <Award className="w-4 h-4 text-leather-400" />
              <span className="text-leather-300 text-sm font-medium">Success Stories</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6">
              Real People,
              <span className="block bg-gradient-to-r from-leather-400 to-leather-600 bg-clip-text text-transparent">
                Real Results
              </span>
            </h1>
            
            <p className="text-xl text-leather-200 mb-12 max-w-3xl mx-auto">
              Discover how our platform has transformed careers, funded startups, and created 
              new income streams for VC professionals across Nigeria and beyond.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div key={index} className="text-center">
                    <div className="w-16 h-16 bg-leather-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-8 h-8 text-leather-400" />
                    </div>
                    <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                    <div className="text-leather-300">{stat.label}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Category Filters */}
      <section className="py-8 border-t border-leather-800/30">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-leather-600 text-white shadow-lg'
                    : 'bg-leather-800/30 text-leather-300 hover:bg-leather-700/30 hover:text-white'
                }`}
              >
                {category.name} ({category.count})
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Stories Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {stories
              .filter(story => activeCategory === 'all' || story.category === activeCategory)
              .map((story) => (
                <div key={story.id} className="bg-gradient-to-br from-leather-900/40 to-dark-900/40 backdrop-blur-xl rounded-2xl overflow-hidden border border-leather-700/30 hover:border-leather-500/50 transition-all duration-300 group">
                  {/* Video Thumbnail */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={story.videoThumbnail}
                      alt={story.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <button className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors">
                        <Play className="w-6 h-6 text-white ml-1" />
                      </button>
                    </div>
                    <div className="absolute top-4 right-4">
                      <span className="bg-black/50 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-semibold capitalize">
                        {story.category.slice(0, -1)}
                      </span>
                    </div>
                  </div>

                  <div className="p-6">
                    {/* Profile */}
                    <div className="flex items-center space-x-4 mb-4">
                      <img
                        src={story.image}
                        alt={story.name}
                        className="w-12 h-12 rounded-full border-2 border-leather-600"
                      />
                      <div>
                        <h3 className="text-lg font-bold text-white">{story.name}</h3>
                        <p className="text-leather-300 text-sm">{story.role}</p>
                        <div className="flex items-center space-x-2 text-xs text-leather-400">
                          <MapPin className="w-3 h-3" />
                          <span>{story.location}</span>
                        </div>
                      </div>
                    </div>

                    {/* Metrics */}
                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div className="bg-leather-800/20 rounded-xl p-3 text-center">
                        <div className="text-red-400 text-sm mb-1">Before</div>
                        <div className="text-white font-semibold text-sm">{story.beforeMetric}</div>
                      </div>
                      <div className="bg-leather-800/20 rounded-xl p-3 text-center">
                        <div className="text-green-400 text-sm mb-1">After</div>
                        <div className="text-white font-semibold text-sm">{story.afterMetric}</div>
                      </div>
                    </div>

                    <div className="text-center mb-4">
                      <div className="text-2xl font-bold text-leather-400 mb-1">{story.improvement}</div>
                      <div className="text-leather-300 text-sm">in {story.timeframe}</div>
                    </div>

                    {/* Story */}
                    <p className="text-leather-200 text-sm mb-4 line-clamp-3">{story.story}</p>

                    {/* Achievements */}
                    <div className="grid grid-cols-2 gap-2 mb-4">
                      {story.achievements.slice(0, 4).map((achievement, index) => (
                        <div key={index} className="flex items-center space-x-2">
                          <CheckCircle className="w-3 h-3 text-green-400 flex-shrink-0" />
                          <span className="text-leather-300 text-xs">{achievement}</span>
                        </div>
                      ))}
                    </div>

                    {/* CTA */}
                    <button 
                      onClick={() => setSelectedStory(story)}
                      className="w-full bg-leather-600 hover:bg-leather-700 text-white py-3 rounded-xl font-semibold transition-colors flex items-center justify-center space-x-2"
                    >
                      <Play className="w-4 h-4" />
                      <span>Watch Full Story</span>
                    </button>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 border-t border-leather-800/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-r from-leather-900/20 to-dark-900/20 backdrop-blur-xl rounded-2xl p-12 border border-leather-700/30">
              <h2 className="text-3xl font-bold text-white mb-4">Ready to Write Your Success Story?</h2>
              <p className="text-leather-200 mb-8 max-w-2xl mx-auto">
                Join thousands of professionals who've transformed their careers and businesses with Lowase. 
                Your success story could be next.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="/auth/signup" className="bg-gradient-to-r from-leather-600 to-leather-700 text-white px-8 py-4 rounded-xl font-semibold hover:from-leather-700 hover:to-leather-800 transition-all duration-300">
                  Start Your Journey
                </a>
                <a href="/consultants" className="border border-leather-600 text-leather-300 px-8 py-4 rounded-xl font-semibold hover:bg-leather-600/10 transition-colors">
                  Find a Consultant
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}