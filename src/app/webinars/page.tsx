'use client';

import { useState } from 'react';
import { 
  Play, Calendar, Clock, Users, Star, 
  Video, Download, Award, BookOpen
} from 'lucide-react';

export default function WebinarsPage() {
  const [activeTab, setActiveTab] = useState('upcoming');

  const upcomingWebinars = [
    {
      id: 1,
      title: 'VC Fundamentals for Beginners',
      presenter: 'Dr. Adebayo Ogundimu',
      date: 'Jan 25, 2024',
      time: '2:00 PM WAT',
      duration: '60 minutes',
      attendees: 245,
      price: 'Free',
      description: 'Learn the basics of venture capital and how to get started in the industry.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop'
    },
    {
      id: 2,
      title: 'Startup Valuation Masterclass',
      presenter: 'Chinedu Okwu',
      date: 'Feb 1, 2024',
      time: '6:00 PM WAT',
      duration: '90 minutes',
      attendees: 189,
      price: '₦5,000',
      description: 'Deep dive into startup valuation methods and financial modeling.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop'
    }
  ];

  const pastWebinars = [
    {
      id: 3,
      title: 'Due Diligence Best Practices',
      presenter: 'Fatima Al-Hassan',
      date: 'Jan 15, 2024',
      duration: '75 minutes',
      views: 1247,
      rating: 4.9,
      price: '₦8,000',
      description: 'Comprehensive guide to conducting thorough due diligence.',
      image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=400&h=250&fit=crop'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-dark-950 to-leather-950">
      <section className="pt-32 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center space-x-2 bg-leather-600/20 px-4 py-2 rounded-full mb-6">
              <Video className="w-4 h-4 text-leather-400" />
              <span className="text-leather-300 text-sm font-medium">Live Learning</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6">
              Expert
              <span className="block bg-gradient-to-r from-leather-400 to-leather-600 bg-clip-text text-transparent">
                Webinars
              </span>
            </h1>
            
            <p className="text-xl text-leather-200 mb-12">
              Join live sessions with industry experts. Learn from the best, 
              ask questions, and network with fellow professionals.
            </p>

            <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-leather-400 mb-2">47+</div>
                <div className="text-leather-300 text-sm">Webinars</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-leather-400 mb-2">5,000+</div>
                <div className="text-leather-300 text-sm">Attendees</div>
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
          <div className="flex justify-center">
            <div className="bg-leather-900/40 backdrop-blur-sm rounded-2xl p-2 border border-leather-700/30">
              {[
                { id: 'upcoming', label: 'Upcoming', count: upcomingWebinars.length },
                { id: 'past', label: 'Past Webinars', count: pastWebinars.length }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                    activeTab === tab.id
                      ? 'bg-leather-600 text-white'
                      : 'text-leather-300 hover:text-white hover:bg-leather-700/20'
                  }`}
                >
                  {tab.label} ({tab.count})
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {activeTab === 'upcoming' && (
              <div className="grid lg:grid-cols-2 gap-8">
                {upcomingWebinars.map((webinar) => (
                  <div key={webinar.id} className="bg-gradient-to-br from-leather-900/40 to-dark-900/40 backdrop-blur-xl rounded-2xl overflow-hidden border border-leather-700/30">
                    <div className="relative">
                      <img
                        src={webinar.image}
                        alt={webinar.title}
                        className="w-full h-48 object-cover"
                      />
                      <div className="absolute top-4 left-4">
                        <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                          webinar.price === 'Free' 
                            ? 'bg-green-500/20 text-green-300' 
                            : 'bg-leather-600/20 text-leather-300'
                        }`}>
                          {webinar.price}
                        </span>
                      </div>
                      <div className="absolute top-4 right-4">
                        <span className="bg-red-500/20 text-red-300 px-3 py-1 rounded-full text-xs font-bold">
                          LIVE
                        </span>
                      </div>
                    </div>

                    <div className="p-6">
                      <h3 className="text-xl font-bold text-white mb-2">{webinar.title}</h3>
                      <p className="text-leather-300 text-sm mb-4">{webinar.description}</p>
                      
                      <div className="flex items-center space-x-4 mb-4 text-sm text-leather-400">
                        <div className="flex items-center space-x-1">
                          <Calendar className="w-4 h-4" />
                          <span>{webinar.date}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Clock className="w-4 h-4" />
                          <span>{webinar.time}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Users className="w-4 h-4" />
                          <span>{webinar.attendees} registered</span>
                        </div>
                      </div>

                      <div className="flex items-center justify-between mb-4">
                        <span className="text-leather-300 text-sm">by {webinar.presenter}</span>
                        <span className="text-leather-400 text-sm">{webinar.duration}</span>
                      </div>

                      <button className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-xl font-semibold transition-colors">
                        Register Now
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'past' && (
              <div className="grid lg:grid-cols-3 gap-8">
                {pastWebinars.map((webinar) => (
                  <div key={webinar.id} className="bg-gradient-to-br from-leather-900/40 to-dark-900/40 backdrop-blur-xl rounded-2xl overflow-hidden border border-leather-700/30">
                    <div className="relative">
                      <img
                        src={webinar.image}
                        alt={webinar.title}
                        className="w-full h-48 object-cover"
                      />
                      <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                        <button className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                          <Play className="w-6 h-6 text-white ml-1" />
                        </button>
                      </div>
                    </div>

                    <div className="p-6">
                      <h3 className="text-lg font-bold text-white mb-2">{webinar.title}</h3>
                      <p className="text-leather-300 text-sm mb-4">{webinar.description}</p>
                      
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center space-x-1">
                          <Star className="w-4 h-4 text-yellow-400 fill-current" />
                          <span className="text-white font-semibold">{webinar.rating}</span>
                        </div>
                        <span className="text-leather-400 text-sm">{webinar.views} views</span>
                      </div>

                      <div className="flex space-x-2">
                        <button className="flex-1 bg-leather-600 hover:bg-leather-700 text-white py-2 rounded-lg transition-colors flex items-center justify-center space-x-2">
                          <Play className="w-4 h-4" />
                          <span>Watch</span>
                        </button>
                        <button className="bg-leather-700/30 hover:bg-leather-700/50 text-leather-200 px-4 py-2 rounded-lg transition-colors">
                          <Download className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}