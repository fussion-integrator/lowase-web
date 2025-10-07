'use client';

import { useState, useEffect } from 'react';
import { 
  Search, Filter, MapPin, Star, Clock, DollarSign, Users, 
  Video, MessageSquare, Calendar, Award, TrendingUp, Globe,
  CheckCircle, Zap, Target, Brain, Shield, Headphones
} from 'lucide-react';

export default function ConsultantsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSpecialty, setSelectedSpecialty] = useState('all');
  const [priceRange, setPriceRange] = useState([0, 100000]);
  const [availability, setAvailability] = useState('all');
  const [sortBy, setSortBy] = useState('rating');

  const specialties = [
    { id: 'all', name: 'All Specialties', count: 247 },
    { id: 'fintech', name: 'Fintech', count: 89 },
    { id: 'healthtech', name: 'HealthTech', count: 45 },
    { id: 'edtech', name: 'EdTech', count: 38 },
    { id: 'agtech', name: 'AgTech', count: 32 },
    { id: 'ecommerce', name: 'E-commerce', count: 43 }
  ];

  const consultants = [
    {
      id: 1,
      name: 'Adebayo Ogundimu',
      title: 'Senior VC Consultant',
      location: 'Lagos, Nigeria',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face',
      rating: 4.9,
      reviews: 127,
      hourlyRate: 25000,
      responseTime: '< 2 hours',
      completedConsultations: 245,
      successRate: 94,
      totalRaised: '₦2.8B',
      specialties: ['Fintech', 'Series A', 'Due Diligence'],
      languages: ['English', 'Yoruba'],
      availability: 'available',
      nextSlot: 'Today 2:00 PM',
      verified: true,
      topRated: true,
      bio: 'Former Goldman Sachs analyst with 8+ years in VC. Specialized in fintech startups and Series A rounds.'
    },
    {
      id: 2,
      name: 'Fatima Al-Hassan',
      title: 'Investment Advisor',
      location: 'Abuja, Nigeria',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=80&h=80&fit=crop&crop=face',
      rating: 4.8,
      reviews: 89,
      hourlyRate: 20000,
      responseTime: '< 4 hours',
      completedConsultations: 156,
      successRate: 91,
      totalRaised: '₦1.2B',
      specialties: ['AgTech', 'Seed', 'Market Analysis'],
      languages: ['English', 'Hausa'],
      availability: 'busy',
      nextSlot: 'Tomorrow 10:00 AM',
      verified: true,
      topRated: false,
      bio: 'Agricultural investment specialist with deep knowledge of Nigerian farming ecosystem.'
    },
    {
      id: 3,
      name: 'Chinedu Okwu',
      title: 'Startup Advisor',
      location: 'Port Harcourt, Nigeria',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face',
      rating: 5.0,
      reviews: 156,
      hourlyRate: 35000,
      responseTime: '< 1 hour',
      completedConsultations: 312,
      successRate: 97,
      totalRaised: '₦5.1B',
      specialties: ['EdTech', 'Series B+', 'International'],
      languages: ['English', 'Igbo'],
      availability: 'available',
      nextSlot: 'In 30 minutes',
      verified: true,
      topRated: true,
      bio: 'International VC expert with experience in Silicon Valley and African markets.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-dark-950 to-leather-950">
      {/* Hero Section */}
      <section className="pt-32 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center space-x-2 bg-leather-600/20 px-4 py-2 rounded-full mb-6">
              <Users className="w-4 h-4 text-leather-400" />
              <span className="text-leather-300 text-sm font-medium">Expert Network</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6">
              Find Your Perfect
              <span className="block bg-gradient-to-r from-leather-400 to-leather-600 bg-clip-text text-transparent">
                VC Consultant
              </span>
            </h1>
            
            <p className="text-xl text-leather-200 mb-8 max-w-2xl mx-auto">
              Connect with 247+ vetted VC consultants. Get expert guidance from professionals 
              who've helped raise over ₦50B+ in funding across Nigeria and beyond.
            </p>

            {/* Search Bar */}
            <div className="relative max-w-2xl mx-auto mb-8">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-leather-400" />
              <input
                type="text"
                placeholder="Search by name, specialty, or expertise..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-leather-800/30 border border-leather-700 rounded-2xl pl-12 pr-4 py-4 text-white placeholder-leather-400 focus:outline-none focus:border-leather-500"
              />
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-4 gap-6 max-w-3xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-leather-400 mb-2">247+</div>
                <div className="text-leather-300 text-sm">Expert Consultants</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-leather-400 mb-2">₦50B+</div>
                <div className="text-leather-300 text-sm">Funds Raised</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-leather-400 mb-2">94%</div>
                <div className="text-leather-300 text-sm">Success Rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-leather-400 mb-2">&lt; 2hrs</div>
                <div className="text-leather-300 text-sm">Avg Response</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 border-t border-leather-800/30">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-3 justify-center">
            {specialties.map((specialty) => (
              <button
                key={specialty.id}
                onClick={() => setSelectedSpecialty(specialty.id)}
                className={`px-4 py-2 rounded-full font-medium transition-all duration-300 ${
                  selectedSpecialty === specialty.id
                    ? 'bg-leather-600 text-white shadow-lg'
                    : 'bg-leather-800/30 text-leather-300 hover:bg-leather-700/30 hover:text-white'
                }`}
              >
                {specialty.name} ({specialty.count})
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Consultants Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {consultants.map((consultant) => (
              <div key={consultant.id} className="bg-gradient-to-br from-leather-900/40 to-dark-900/40 backdrop-blur-xl rounded-2xl p-6 border border-leather-700/30 hover:border-leather-500/50 transition-all duration-300">
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-4">
                    <div className="relative">
                      <img
                        src={consultant.avatar}
                        alt={consultant.name}
                        className="w-16 h-16 rounded-full border-2 border-leather-600"
                      />
                      {consultant.verified && (
                        <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                          <CheckCircle className="w-4 h-4 text-white" />
                        </div>
                      )}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">{consultant.name}</h3>
                      <p className="text-leather-300">{consultant.title}</p>
                      <div className="flex items-center space-x-2 text-sm text-leather-400 mt-1">
                        <MapPin className="w-4 h-4" />
                        <span>{consultant.location}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="text-right">
                    <div className="flex items-center space-x-1 mb-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-white font-semibold">{consultant.rating}</span>
                      <span className="text-leather-400 text-sm">({consultant.reviews})</span>
                    </div>
                    {consultant.topRated && (
                      <span className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-black px-2 py-1 rounded-full text-xs font-bold">
                        TOP RATED
                      </span>
                    )}
                  </div>
                </div>

                {/* Specialties */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {consultant.specialties.map((specialty, index) => (
                    <span key={index} className="bg-leather-700/30 text-leather-200 px-3 py-1 rounded-full text-sm">
                      {specialty}
                    </span>
                  ))}
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-3 gap-4 mb-4 text-center">
                  <div>
                    <div className="text-white font-bold">{consultant.completedConsultations}</div>
                    <div className="text-leather-400 text-xs">Consultations</div>
                  </div>
                  <div>
                    <div className="text-white font-bold">{consultant.successRate}%</div>
                    <div className="text-leather-400 text-xs">Success Rate</div>
                  </div>
                  <div>
                    <div className="text-white font-bold">{consultant.totalRaised}</div>
                    <div className="text-leather-400 text-xs">Funds Raised</div>
                  </div>
                </div>

                {/* Bio */}
                <p className="text-leather-300 text-sm mb-4">{consultant.bio}</p>

                {/* Availability & Pricing */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <div className={`w-2 h-2 rounded-full ${
                      consultant.availability === 'available' ? 'bg-green-400' : 'bg-yellow-400'
                    }`}></div>
                    <span className="text-leather-300 text-sm">{consultant.nextSlot}</span>
                  </div>
                  <div className="text-right">
                    <div className="text-white font-bold">₦{consultant.hourlyRate.toLocaleString()}/hr</div>
                    <div className="text-leather-400 text-xs">{consultant.responseTime} response</div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="grid grid-cols-3 gap-2">
                  <button className="bg-green-600 hover:bg-green-700 text-white py-2 rounded-lg transition-colors flex items-center justify-center space-x-1">
                    <Calendar className="w-4 h-4" />
                    <span className="text-sm">Book</span>
                  </button>
                  <button className="bg-leather-700/30 hover:bg-leather-700/50 text-leather-200 py-2 rounded-lg transition-colors flex items-center justify-center space-x-1">
                    <MessageSquare className="w-4 h-4" />
                    <span className="text-sm">Chat</span>
                  </button>
                  <button className="bg-leather-700/30 hover:bg-leather-700/50 text-leather-200 py-2 rounded-lg transition-colors flex items-center justify-center space-x-1">
                    <Video className="w-4 h-4" />
                    <span className="text-sm">Call</span>
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