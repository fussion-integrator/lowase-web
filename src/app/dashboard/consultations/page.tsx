'use client';

import { useState } from 'react';
import Link from 'next/link';
import { 
  Calendar, Clock, Video, Phone, MessageSquare, 
  Star, ArrowLeft, Filter, Search, Plus 
} from 'lucide-react';

export default function ConsultationsPage() {
  const [filter, setFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const consultations = [
    {
      id: 1,
      consultant: {
        name: 'Adebayo Ogundimu',
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=60&h=60&fit=crop&crop=face',
        rating: 4.9,
        expertise: 'Series A & B Funding'
      },
      topic: 'Series A Preparation Strategy',
      date: '2024-02-15',
      time: '2:00 PM',
      duration: '60 minutes',
      type: 'video',
      status: 'upcoming',
      price: 75000,
      notes: 'Discuss market positioning and investor deck optimization'
    },
    {
      id: 2,
      consultant: {
        name: 'Chinedu Okwu',
        avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=60&h=60&fit=crop&crop=face',
        rating: 4.8,
        expertise: 'Valuation & Due Diligence'
      },
      topic: 'Market Analysis Review',
      date: '2024-02-16',
      time: '10:00 AM',
      duration: '45 minutes',
      type: 'phone',
      status: 'upcoming',
      price: 60000,
      notes: 'Review competitive landscape analysis and market sizing'
    },
    {
      id: 3,
      consultant: {
        name: 'Fatima Al-Hassan',
        avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=60&h=60&fit=crop&crop=face',
        rating: 4.9,
        expertise: 'Portfolio Management'
      },
      topic: 'Portfolio Diversification Strategy',
      date: '2024-02-10',
      time: '3:30 PM',
      duration: '90 minutes',
      type: 'video',
      status: 'completed',
      price: 90000,
      rating: 5,
      feedback: 'Excellent insights on risk management and portfolio allocation strategies.'
    },
    {
      id: 4,
      consultant: {
        name: 'Kemi Adeyemi',
        avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=60&h=60&fit=crop&crop=face',
        rating: 4.7,
        expertise: 'Legal & Compliance'
      },
      topic: 'Term Sheet Negotiation',
      date: '2024-02-05',
      time: '11:00 AM',
      duration: '75 minutes',
      type: 'video',
      status: 'completed',
      price: 80000,
      rating: 4,
      feedback: 'Very helpful in understanding key terms and negotiation tactics.'
    },
    {
      id: 5,
      consultant: {
        name: 'Adebayo Ogundimu',
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=60&h=60&fit=crop&crop=face',
        rating: 4.9,
        expertise: 'Series A & B Funding'
      },
      topic: 'Due Diligence Preparation',
      date: '2024-01-28',
      time: '1:00 PM',
      duration: '60 minutes',
      type: 'phone',
      status: 'cancelled',
      price: 75000,
      reason: 'Consultant unavailable - rescheduled'
    }
  ];

  const filteredConsultations = consultations.filter(consultation => {
    const matchesFilter = filter === 'all' || consultation.status === filter;
    const matchesSearch = consultation.consultant.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         consultation.topic.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'upcoming': return 'bg-blue-500/20 text-blue-400';
      case 'completed': return 'bg-green-500/20 text-green-400';
      case 'cancelled': return 'bg-red-500/20 text-red-400';
      default: return 'bg-leather-600/20 text-leather-300';
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'video': return Video;
      case 'phone': return Phone;
      default: return MessageSquare;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-dark-950 to-leather-950">
      <section className="pt-32 pb-8">
        <div className="container mx-auto px-4">
          <Link 
            href="/dashboard"
            className="inline-flex items-center space-x-2 text-leather-300 hover:text-white mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Dashboard</span>
          </Link>

          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-4xl font-bold text-white mb-2">My Consultations</h1>
              <p className="text-leather-200">Manage your expert sessions</p>
            </div>
            <Link 
              href="/consultation/book"
              className="bg-leather-600 hover:bg-leather-700 text-white px-6 py-3 rounded-xl font-semibold transition-colors flex items-center space-x-2"
            >
              <Plus className="w-4 h-4" />
              <span>Book New Session</span>
            </Link>
          </div>

          {/* Filters */}
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-leather-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search consultations..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-leather-900/40 border border-leather-700/30 rounded-xl text-white placeholder-leather-400 focus:outline-none focus:border-leather-500"
              />
            </div>
            <div className="flex space-x-2">
              {['all', 'upcoming', 'completed', 'cancelled'].map((status) => (
                <button
                  key={status}
                  onClick={() => setFilter(status)}
                  className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                    filter === status
                      ? 'bg-leather-600 text-white'
                      : 'bg-leather-900/40 text-leather-300 hover:bg-leather-800/40'
                  }`}
                >
                  {status.charAt(0).toUpperCase() + status.slice(1)}
                </button>
              ))}
            </div>
          </div>

          {/* Consultations List */}
          <div className="space-y-4">
            {filteredConsultations.map((consultation) => {
              const TypeIcon = getTypeIcon(consultation.type);
              
              return (
                <div key={consultation.id} className="bg-gradient-to-br from-leather-900/40 to-dark-900/40 backdrop-blur-xl rounded-2xl p-6 border border-leather-700/30">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-start space-x-4">
                      <img
                        src={consultation.consultant.avatar}
                        alt={consultation.consultant.name}
                        className="w-16 h-16 rounded-full"
                      />
                      <div>
                        <h3 className="text-xl font-bold text-white mb-1">{consultation.topic}</h3>
                        <div className="flex items-center space-x-2 mb-2">
                          <span className="text-leather-200 font-medium">{consultation.consultant.name}</span>
                          <div className="flex items-center space-x-1">
                            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                            <span className="text-leather-300 text-sm">{consultation.consultant.rating}</span>
                          </div>
                        </div>
                        <p className="text-leather-400 text-sm">{consultation.consultant.expertise}</p>
                      </div>
                    </div>

                    <div className="text-right">
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(consultation.status)}`}>
                        {consultation.status.charAt(0).toUpperCase() + consultation.status.slice(1)}
                      </span>
                      <div className="text-leather-300 text-sm mt-2">
                        ₦{consultation.price.toLocaleString()}
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                    <div className="flex items-center space-x-2 text-leather-300">
                      <Calendar className="w-4 h-4" />
                      <span className="text-sm">{consultation.date}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-leather-300">
                      <Clock className="w-4 h-4" />
                      <span className="text-sm">{consultation.time}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-leather-300">
                      <TypeIcon className="w-4 h-4" />
                      <span className="text-sm">{consultation.duration}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-leather-300">
                      <span className="text-sm capitalize">{consultation.type} call</span>
                    </div>
                  </div>

                  {consultation.notes && (
                    <div className="mb-4">
                      <h4 className="text-leather-200 font-medium mb-2">Session Notes:</h4>
                      <p className="text-leather-300 text-sm">{consultation.notes}</p>
                    </div>
                  )}

                  {consultation.feedback && (
                    <div className="mb-4">
                      <h4 className="text-leather-200 font-medium mb-2">Your Feedback:</h4>
                      <div className="flex items-start space-x-2">
                        <div className="flex items-center space-x-1">
                          {[...Array(5)].map((_, i) => (
                            <Star 
                              key={i} 
                              className={`w-4 h-4 ${i < consultation.rating! ? 'fill-yellow-400 text-yellow-400' : 'text-leather-600'}`} 
                            />
                          ))}
                        </div>
                        <p className="text-leather-300 text-sm">{consultation.feedback}</p>
                      </div>
                    </div>
                  )}

                  {consultation.reason && (
                    <div className="mb-4">
                      <h4 className="text-leather-200 font-medium mb-2">Cancellation Reason:</h4>
                      <p className="text-leather-300 text-sm">{consultation.reason}</p>
                    </div>
                  )}

                  <div className="flex items-center justify-between pt-4 border-t border-leather-700/30">
                    <div className="flex space-x-3">
                      {consultation.status === 'upcoming' && (
                        <>
                          <a href={`/session/${consultation.id}`} className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition-colors flex items-center space-x-2">
                            <TypeIcon className="w-4 h-4" />
                            <span>Join Session</span>
                          </a>
                          <button className="bg-leather-700/30 hover:bg-leather-700/50 text-leather-200 px-4 py-2 rounded-lg transition-colors">
                            Reschedule
                          </button>
                        </>
                      )}
                      {consultation.status === 'completed' && (
                        <a href={`/session/${consultation.id}/recording`} className="bg-leather-600 hover:bg-leather-700 text-white px-4 py-2 rounded-lg transition-colors">
                          View Recording
                        </a>
                      )}
                      {consultation.status === 'cancelled' && (
                        <Link
                          href="/consultation/book"
                          className="bg-leather-600 hover:bg-leather-700 text-white px-4 py-2 rounded-lg transition-colors"
                        >
                          Book Again
                        </Link>
                      )}
                    </div>

                    <a href="/messages" className="text-leather-400 hover:text-white transition-colors">
                      <MessageSquare className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>

          {filteredConsultations.length === 0 && (
            <div className="text-center py-12">
              <Calendar className="w-16 h-16 text-leather-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">No consultations found</h3>
              <p className="text-leather-300 mb-6">
                {filter === 'all' 
                  ? "You haven't booked any consultations yet." 
                  : `No ${filter} consultations found.`}
              </p>
              <Link
                href="/consultation/book"
                className="bg-leather-600 hover:bg-leather-700 text-white px-6 py-3 rounded-xl font-semibold transition-colors inline-flex items-center space-x-2"
              >
                <Plus className="w-4 h-4" />
                <span>Book Your First Session</span>
              </Link>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}