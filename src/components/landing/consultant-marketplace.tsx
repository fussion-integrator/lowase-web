'use client';

import { useState } from 'react';
import { 
  Star, 
  MapPin, 
  Clock, 
  DollarSign, 
  Users, 
  Award, 
  Filter,
  Search,
  Video,
  MessageSquare,
  Calendar,
  TrendingUp
} from 'lucide-react';

export default function ConsultantMarketplace() {
  const [selectedSpecialty, setSelectedSpecialty] = useState('all');
  const [selectedConsultant, setSelectedConsultant] = useState(0);

  const specialties = [
    { id: 'all', name: 'All Specialties', count: 247 },
    { id: 'fintech', name: 'Fintech', count: 89 },
    { id: 'healthtech', name: 'HealthTech', count: 45 },
    { id: 'edtech', name: 'EdTech', count: 38 },
    { id: 'agtech', name: 'AgTech', count: 32 },
    { id: 'ecommerce', name: 'E-commerce', count: 43 },
  ];

  const consultants = [
    {
      id: 1,
      name: 'Adebayo Ogundimu',
      title: 'Senior VC Consultant',
      location: 'Lagos, Nigeria',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=60&h=60&fit=crop&crop=face',
      rating: 4.9,
      reviews: 127,
      hourlyRate: '₦25,000',
      specialties: ['Fintech', 'Series A', 'Due Diligence'],
      experience: '8 years',
      dealsCompleted: 45,
      totalRaised: '₦2.8B',
      availability: 'Available now',
      languages: ['English', 'Yoruba'],
      bio: 'Former Goldman Sachs analyst with 8+ years in VC. Specialized in fintech startups and Series A rounds.',
      recentSuccess: 'Helped TechPay raise ₦450M Series A',
      nextAvailable: 'Today 2:00 PM',
      responseTime: '< 2 hours'
    },
    {
      id: 2,
      name: 'Fatima Al-Hassan',
      title: 'Investment Advisor',
      location: 'Abuja, Nigeria',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=60&h=60&fit=crop&crop=face',
      rating: 4.8,
      reviews: 89,
      hourlyRate: '₦20,000',
      specialties: ['AgTech', 'Seed', 'Market Analysis'],
      experience: '6 years',
      dealsCompleted: 32,
      totalRaised: '₦1.2B',
      availability: 'Available tomorrow',
      languages: ['English', 'Hausa'],
      bio: 'Agricultural investment specialist with deep knowledge of Nigerian farming ecosystem.',
      recentSuccess: 'Helped AgriConnect secure ₦280M seed funding',
      nextAvailable: 'Tomorrow 10:00 AM',
      responseTime: '< 4 hours'
    },
    {
      id: 3,
      name: 'Chinedu Okwu',
      title: 'Startup Advisor',
      location: 'Port Harcourt, Nigeria',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=60&h=60&fit=crop&crop=face',
      rating: 5.0,
      reviews: 156,
      hourlyRate: '₦35,000',
      specialties: ['EdTech', 'Series B+', 'International'],
      experience: '12 years',
      dealsCompleted: 67,
      totalRaised: '₦5.1B',
      availability: 'Busy until next week',
      languages: ['English', 'Igbo'],
      bio: 'International VC expert with experience in Silicon Valley and African markets.',
      recentSuccess: 'Led EduTech Nigeria to ₦320M Pre-Series A',
      nextAvailable: 'Next Monday 9:00 AM',
      responseTime: '< 1 hour'
    }
  ];

  const selectedConsultantData = consultants[selectedConsultant];

  return (
    <section className="py-20 bg-gradient-to-b from-leather-950 to-dark-950">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-leather-600/20 px-4 py-2 rounded-full mb-6">
            <Users className="w-4 h-4 text-leather-400" />
            <span className="text-leather-300 text-sm font-medium">Expert Consultants</span>
          </div>
          
          <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6">
            Find Your Perfect
            <span className="block bg-gradient-to-r from-leather-400 to-leather-600 bg-clip-text text-transparent">
              VC Consultant
            </span>
          </h2>
          
          <p className="text-xl text-leather-200 max-w-3xl mx-auto mb-8">
            Browse 247+ vetted VC consultants with proven track records. 
            Get matched with experts who understand your industry and funding stage.
          </p>

          {/* Search and Filter */}
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-4 mb-8">
              <div className="flex-1 relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-leather-400" />
                <input
                  type="text"
                  placeholder="Search by name, specialty, or location..."
                  className="w-full bg-leather-800/30 border border-leather-700 rounded-xl pl-12 pr-4 py-4 text-white placeholder-leather-400 focus:outline-none focus:border-leather-500 focus:ring-2 focus:ring-leather-500/20"
                />
              </div>
              <button className="flex items-center space-x-2 bg-leather-700/30 hover:bg-leather-700/50 px-6 py-4 rounded-xl transition-colors">
                <Filter className="w-5 h-5 text-leather-300" />
                <span className="text-leather-200">Filters</span>
              </button>
            </div>

            {/* Specialty Filters */}
            <div className="flex flex-wrap gap-3 justify-center">
              {specialties.map((specialty) => (
                <button
                  key={specialty.id}
                  onClick={() => setSelectedSpecialty(specialty.id)}
                  className={`px-4 py-2 rounded-full font-medium transition-all duration-300 ${
                    selectedSpecialty === specialty.id
                      ? 'bg-green-500 text-white shadow-lg'
                      : 'bg-leather-800/30 text-leather-300 hover:bg-leather-700/30 hover:text-white'
                  }`}
                >
                  {specialty.name} ({specialty.count})
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Consultant Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {/* Consultant Cards */}
          <div className="lg:col-span-2 space-y-6">
            {consultants.map((consultant, index) => (
              <div
                key={consultant.id}
                onClick={() => setSelectedConsultant(index)}
                className={`bg-gradient-to-br from-leather-900/40 to-dark-900/40 backdrop-blur-xl rounded-2xl p-6 border cursor-pointer transition-all duration-300 ${
                  selectedConsultant === index
                    ? 'border-green-500/50 shadow-2xl'
                    : 'border-leather-700/30 hover:border-leather-600/50'
                }`}
              >
                <div className="flex items-start space-x-4">
                  <img
                    src={consultant.avatar}
                    alt={consultant.name}
                    className="w-16 h-16 rounded-full border-2 border-leather-600"
                  />
                  
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h3 className="text-xl font-bold text-white">{consultant.name}</h3>
                        <p className="text-leather-300">{consultant.title}</p>
                        <div className="flex items-center space-x-2 text-sm text-leather-400 mt-1">
                          <MapPin className="w-4 h-4" />
                          <span>{consultant.location}</span>
                        </div>
                      </div>
                      
                      <div className="text-right">
                        <div className="flex items-center space-x-1 mb-1">
                          <Star className="w-4 h-4 text-yellow-400 fill-current" />
                          <span className="text-white font-semibold">{consultant.rating}</span>
                          <span className="text-leather-400 text-sm">({consultant.reviews})</span>
                        </div>
                        <div className="text-green-400 font-bold">{consultant.hourlyRate}/hr</div>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {consultant.specialties.map((specialty, idx) => (
                        <span
                          key={idx}
                          className="bg-leather-700/30 text-leather-200 px-3 py-1 rounded-full text-sm"
                        >
                          {specialty}
                        </span>
                      ))}
                    </div>

                    <div className="grid grid-cols-3 gap-4 mb-4 text-center">
                      <div>
                        <div className="text-white font-bold">{consultant.dealsCompleted}</div>
                        <div className="text-leather-400 text-xs">Deals</div>
                      </div>
                      <div>
                        <div className="text-white font-bold">{consultant.totalRaised}</div>
                        <div className="text-leather-400 text-xs">Raised</div>
                      </div>
                      <div>
                        <div className="text-white font-bold">{consultant.experience}</div>
                        <div className="text-leather-400 text-xs">Experience</div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <div className={`w-2 h-2 rounded-full ${
                          consultant.availability === 'Available now' ? 'bg-green-400' : 
                          consultant.availability === 'Available tomorrow' ? 'bg-yellow-400' : 'bg-red-400'
                        }`}></div>
                        <span className="text-leather-300 text-sm">{consultant.availability}</span>
                      </div>
                      
                      <div className="flex space-x-2">
                        <button className="bg-green-500/20 hover:bg-green-500/30 text-green-300 px-4 py-2 rounded-lg transition-colors">
                          View Profile
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Selected Consultant Details */}
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-leather-900/40 to-dark-900/40 backdrop-blur-xl rounded-2xl p-6 border border-leather-700/30 sticky top-8">
              <div className="text-center mb-6">
                <img
                  src={selectedConsultantData.avatar}
                  alt={selectedConsultantData.name}
                  className="w-20 h-20 rounded-full border-2 border-green-500 mx-auto mb-4"
                />
                <h3 className="text-xl font-bold text-white mb-1">{selectedConsultantData.name}</h3>
                <p className="text-leather-300 mb-2">{selectedConsultantData.title}</p>
                <div className="flex items-center justify-center space-x-1 mb-4">
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <span className="text-white font-semibold">{selectedConsultantData.rating}</span>
                  <span className="text-leather-400">({selectedConsultantData.reviews} reviews)</span>
                </div>
              </div>

              <div className="space-y-4 mb-6">
                <div className="bg-leather-800/20 rounded-xl p-4">
                  <div className="text-leather-400 text-sm mb-1">Recent Success</div>
                  <div className="text-white font-semibold text-sm">{selectedConsultantData.recentSuccess}</div>
                </div>

                <div className="grid grid-cols-2 gap-3 text-sm">
                  <div className="text-center">
                    <div className="text-white font-bold">{selectedConsultantData.responseTime}</div>
                    <div className="text-leather-400">Response Time</div>
                  </div>
                  <div className="text-center">
                    <div className="text-white font-bold">{selectedConsultantData.nextAvailable}</div>
                    <div className="text-leather-400">Next Available</div>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <button className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white py-3 rounded-xl font-semibold hover:from-green-600 hover:to-green-700 transition-all duration-300 flex items-center justify-center space-x-2">
                  <Calendar className="w-4 h-4" />
                  <span>Book Consultation</span>
                </button>
                
                <div className="grid grid-cols-2 gap-2">
                  <button className="flex items-center justify-center space-x-2 bg-leather-700/30 hover:bg-leather-700/50 text-leather-200 py-2 rounded-lg transition-colors">
                    <MessageSquare className="w-4 h-4" />
                    <span>Message</span>
                  </button>
                  <button className="flex items-center justify-center space-x-2 bg-leather-700/30 hover:bg-leather-700/50 text-leather-200 py-2 rounded-lg transition-colors">
                    <Video className="w-4 h-4" />
                    <span>Video Call</span>
                  </button>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-leather-800">
                <div className="text-leather-400 text-sm mb-2">Languages</div>
                <div className="flex space-x-2">
                  {selectedConsultantData.languages.map((lang, idx) => (
                    <span key={idx} className="bg-leather-700/30 text-leather-200 px-2 py-1 rounded text-xs">
                      {lang}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-green-900/20 to-leather-900/20 backdrop-blur-xl rounded-2xl p-8 border border-green-700/30 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Can't Find the Right Consultant?
            </h3>
            <p className="text-leather-200 mb-6">
              Let our AI matching system find the perfect consultant for your specific needs and industry.
            </p>
            <button className="bg-gradient-to-r from-green-500 to-green-600 text-white px-8 py-3 rounded-xl font-semibold hover:from-green-600 hover:to-green-700 transition-all duration-300">
              Get AI-Matched Consultant
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}