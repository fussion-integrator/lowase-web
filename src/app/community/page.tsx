'use client';

import { useState } from 'react';
import { 
  Users, MessageSquare, Calendar, TrendingUp, 
  Award, Star, MapPin, Clock, ArrowRight
} from 'lucide-react';

export default function CommunityPage() {
  const [activeTab, setActiveTab] = useState('discussions');

  const stats = [
    { label: 'Active Members', value: '2,847', icon: Users },
    { label: 'Discussions', value: '1,234', icon: MessageSquare },
    { label: 'Events This Month', value: '12', icon: Calendar },
    { label: 'Success Stories', value: '156', icon: Award }
  ];

  const discussions = [
    {
      id: 1,
      title: 'Best practices for Series A fundraising in Nigeria',
      author: 'Sarah Adebisi',
      replies: 23,
      lastActivity: '2 hours ago',
      category: 'Fundraising',
      pinned: true
    },
    {
      id: 2,
      title: 'How to evaluate fintech startups in emerging markets',
      author: 'Dr. Adebayo Ogundimu',
      replies: 18,
      lastActivity: '4 hours ago',
      category: 'Due Diligence'
    },
    {
      id: 3,
      title: 'Networking tips for new VC professionals',
      author: 'Fatima Al-Hassan',
      replies: 31,
      lastActivity: '6 hours ago',
      category: 'Career'
    }
  ];

  const events = [
    {
      id: 1,
      title: 'VC Fundamentals Workshop',
      date: 'Jan 25, 2024',
      time: '2:00 PM WAT',
      attendees: 45,
      type: 'Workshop'
    },
    {
      id: 2,
      title: 'Startup Pitch Competition',
      date: 'Jan 30, 2024',
      time: '6:00 PM WAT',
      attendees: 120,
      type: 'Competition'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-dark-950 to-leather-950">
      <section className="pt-32 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center space-x-2 bg-leather-600/20 px-4 py-2 rounded-full mb-6">
              <Users className="w-4 h-4 text-leather-400" />
              <span className="text-leather-300 text-sm font-medium">Community</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6">
              Join the
              <span className="block bg-gradient-to-r from-leather-400 to-leather-600 bg-clip-text text-transparent">
                VC Community
              </span>
            </h1>
            
            <p className="text-xl text-leather-200 mb-12">
              Connect with fellow VC professionals, share insights, and grow together in Nigeria's largest VC community.
            </p>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div key={index} className="bg-gradient-to-br from-leather-900/40 to-dark-900/40 backdrop-blur-xl rounded-2xl p-6 border border-leather-700/30 text-center">
                    <Icon className="w-8 h-8 text-leather-400 mx-auto mb-3" />
                    <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                    <div className="text-leather-300 text-sm">{stat.label}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="py-8 border-t border-leather-800/30">
        <div className="container mx-auto px-4">
          <div className="flex justify-center">
            <div className="bg-leather-900/40 backdrop-blur-sm rounded-2xl p-2 border border-leather-700/30">
              {[
                { id: 'discussions', label: 'Discussions', icon: MessageSquare },
                { id: 'events', label: 'Events', icon: Calendar },
                { id: 'members', label: 'Members', icon: Users }
              ].map((tab) => {
                const Icon = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center space-x-2 ${
                      activeTab === tab.id
                        ? 'bg-leather-600 text-white'
                        : 'text-leather-300 hover:text-white hover:bg-leather-700/20'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    <span>{tab.label}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {activeTab === 'discussions' && (
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <h2 className="text-2xl font-bold text-white">Recent Discussions</h2>
                  <button className="bg-leather-600 hover:bg-leather-700 text-white px-6 py-3 rounded-xl font-semibold transition-colors">
                    Start Discussion
                  </button>
                </div>
                
                {discussions.map((discussion) => (
                  <div key={discussion.id} className="bg-gradient-to-br from-leather-900/40 to-dark-900/40 backdrop-blur-xl rounded-2xl p-6 border border-leather-700/30">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-2">
                          {discussion.pinned && (
                            <span className="bg-green-500/20 text-green-300 px-2 py-1 rounded-full text-xs font-semibold">
                              PINNED
                            </span>
                          )}
                          <span className="bg-leather-700/30 text-leather-200 px-2 py-1 rounded text-xs">
                            {discussion.category}
                          </span>
                        </div>
                        <h3 className="text-lg font-bold text-white mb-2">{discussion.title}</h3>
                        <div className="flex items-center space-x-4 text-sm text-leather-400">
                          <span>by {discussion.author}</span>
                          <span>{discussion.replies} replies</span>
                          <span>{discussion.lastActivity}</span>
                        </div>
                      </div>
                      <button className="text-leather-400 hover:text-white transition-colors">
                        <ArrowRight className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'events' && (
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <h2 className="text-2xl font-bold text-white">Upcoming Events</h2>
                  <button className="bg-leather-600 hover:bg-leather-700 text-white px-6 py-3 rounded-xl font-semibold transition-colors">
                    Create Event
                  </button>
                </div>
                
                {events.map((event) => (
                  <div key={event.id} className="bg-gradient-to-br from-leather-900/40 to-dark-900/40 backdrop-blur-xl rounded-2xl p-6 border border-leather-700/30">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="flex items-center space-x-3 mb-2">
                          <span className="bg-leather-600/20 text-leather-300 px-3 py-1 rounded-full text-sm font-semibold">
                            {event.type}
                          </span>
                        </div>
                        <h3 className="text-lg font-bold text-white mb-2">{event.title}</h3>
                        <div className="flex items-center space-x-4 text-sm text-leather-400">
                          <div className="flex items-center space-x-1">
                            <Calendar className="w-4 h-4" />
                            <span>{event.date}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Clock className="w-4 h-4" />
                            <span>{event.time}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Users className="w-4 h-4" />
                            <span>{event.attendees} attending</span>
                          </div>
                        </div>
                      </div>
                      <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl font-semibold transition-colors">
                        Join Event
                      </button>
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