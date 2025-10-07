'use client';

import { useState } from 'react';
import { ChevronLeft, ChevronRight, Star, TrendingUp, Users, Award, Play } from 'lucide-react';

export default function SuccessStories() {
  const [activeStory, setActiveStory] = useState(0);
  const [activeTab, setActiveTab] = useState('consultants');

  const consultantStories = [
    {
      name: 'Adebayo Ogundimu',
      role: 'Senior VC Consultant',
      location: 'Lagos, Nigeria',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face',
      beforeSalary: '₦2.5M',
      afterSalary: '₦8.2M',
      timeframe: '6 months',
      story: 'From banking analyst to certified VC consultant. Now I help 15+ startups monthly secure funding.',
      achievements: ['Certified in 90 days', 'Helped raise ₦2.8B', '4.9/5 rating', '150+ consultations'],
      videoUrl: '#'
    },
    {
      name: 'Fatima Al-Hassan',
      role: 'Investment Advisor',
      location: 'Abuja, Nigeria',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=80&h=80&fit=crop&crop=face',
      beforeSalary: '₦1.8M',
      afterSalary: '₦6.5M',
      timeframe: '4 months',
      story: 'Transitioned from corporate finance to VC consulting. The training was comprehensive and practical.',
      achievements: ['Top 5% graduate', 'Specialized in fintech', '4.8/5 rating', '200+ hours consulting'],
      videoUrl: '#'
    },
    {
      name: 'Chinedu Okwu',
      role: 'Startup Advisor',
      location: 'Port Harcourt, Nigeria',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face',
      beforeSalary: '₦3.2M',
      afterSalary: '₦12.5M',
      timeframe: '8 months',
      story: 'Built my consulting practice from zero. Now I work with international VCs and local startups.',
      achievements: ['Expert certification', '₦5B+ deals advised', '5.0/5 rating', 'International clients'],
      videoUrl: '#'
    }
  ];

  const startupStories = [
    {
      name: 'TechPay Solutions',
      founder: 'Sarah Adebisi',
      sector: 'Fintech',
      location: 'Lagos, Nigeria',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=80&h=80&fit=crop&crop=face',
      fundingRaised: '₦450M',
      timeframe: '3 months',
      story: 'Found the perfect VC consultant who understood our market. Secured Series A in record time.',
      achievements: ['Series A funded', '50K+ users', 'Regulatory approval', 'Team of 25'],
      consultantMatch: 'Adebayo Ogundimu'
    },
    {
      name: 'AgriConnect',
      founder: 'Ibrahim Musa',
      sector: 'AgTech',
      location: 'Kano, Nigeria',
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=80&h=80&fit=crop&crop=face',
      fundingRaised: '₦280M',
      timeframe: '5 months',
      story: 'Our consultant helped us refine our pitch and connect with the right investors for agriculture.',
      achievements: ['Seed funded', '1000+ farmers', 'B2B partnerships', 'Revenue positive'],
      consultantMatch: 'Fatima Al-Hassan'
    },
    {
      name: 'EduTech Nigeria',
      founder: 'Kemi Oladele',
      sector: 'EdTech',
      location: 'Ibadan, Nigeria',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=80&h=80&fit=crop&crop=face',
      fundingRaised: '₦320M',
      timeframe: '4 months',
      story: 'The platform matched us with a consultant who had deep EdTech experience. Game changer!',
      achievements: ['Pre-Series A', '10K+ students', 'School partnerships', 'International expansion'],
      consultantMatch: 'Chinedu Okwu'
    }
  ];

  const trainerStories = [
    {
      name: 'Dr. Olumide Soyinka',
      role: 'VC Training Expert',
      location: 'Lagos, Nigeria',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=80&h=80&fit=crop&crop=face',
      monthlyEarnings: '₦3.2M',
      studentsImpacted: '500+',
      timeframe: '1 year',
      story: 'Monetized 20 years of VC experience. My courses are now the most popular on the platform.',
      achievements: ['Top trainer', '4.9/5 rating', '12 courses', '₦38M earned'],
      courseCompletions: '95%'
    }
  ];

  const currentStories = activeTab === 'consultants' ? consultantStories : 
                       activeTab === 'startups' ? startupStories : trainerStories;

  const nextStory = () => {
    setActiveStory((prev) => (prev + 1) % currentStories.length);
  };

  const prevStory = () => {
    setActiveStory((prev) => (prev - 1 + currentStories.length) % currentStories.length);
  };

  return (
    <section className="py-20 bg-gradient-to-b from-dark-950 to-leather-950">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-leather-800/20 px-4 py-2 rounded-full mb-6">
            <Award className="w-4 h-4 text-leather-400" />
            <span className="text-leather-300 text-sm font-medium">Success Stories</span>
          </div>
          
          <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6">
            Real People,
            <span className="block bg-gradient-to-r from-leather-400 to-leather-600 bg-clip-text text-transparent">
              Real Results
            </span>
          </h2>
          
          <p className="text-xl text-leather-200 max-w-3xl mx-auto mb-8">
            Discover how our platform has transformed careers, funded startups, 
            and created new income streams for VC experts across Nigeria.
          </p>

          {/* Tab Navigation */}
          <div className="flex justify-center">
            <div className="bg-leather-900/40 backdrop-blur-sm rounded-2xl p-2 border border-leather-700/30">
              {[
                { id: 'consultants', label: 'Consultants', icon: Users },
                { id: 'startups', label: 'Startups', icon: TrendingUp },
                { id: 'trainers', label: 'Trainers', icon: Award }
              ].map((tab) => {
                const Icon = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => {
                      setActiveTab(tab.id);
                      setActiveStory(0);
                    }}
                    className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center space-x-2 ${
                      activeTab === tab.id
                        ? 'bg-leather-600 text-white shadow-lg'
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

        {/* Story Showcase */}
        <div className="max-w-6xl mx-auto">
          <div className="bg-gradient-to-br from-leather-900/40 to-dark-900/40 backdrop-blur-xl rounded-3xl p-8 lg:p-12 border border-leather-700/30">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Story Content */}
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <img
                    src={currentStories[activeStory].image}
                    alt={currentStories[activeStory].name}
                    className="w-16 h-16 rounded-full border-2 border-leather-600"
                  />
                  <div>
                    <h3 className="text-2xl font-bold text-white">{currentStories[activeStory].name}</h3>
                    <p className="text-leather-300">
                      {(currentStories[activeStory] as any).role || (currentStories[activeStory] as any).founder || `Founder of ${currentStories[activeStory].name}`}
                    </p>
                    <p className="text-leather-400 text-sm">{currentStories[activeStory].location}</p>
                  </div>
                </div>

                {/* Key Metrics */}
                <div className="grid grid-cols-2 gap-4">
                  {activeTab === 'consultants' && (
                    <>
                      <div className="bg-leather-800/20 rounded-xl p-4">
                        <div className="text-leather-400 text-sm mb-1">Salary Increase</div>
                        <div className="text-white font-bold">
                          {(currentStories[activeStory] as any).beforeSalary || (currentStories[activeStory] as any).fundingRaised} → {(currentStories[activeStory] as any).afterSalary || 'Success'}
                        </div>
                      </div>
                      <div className="bg-leather-800/20 rounded-xl p-4">
                        <div className="text-leather-400 text-sm mb-1">Timeframe</div>
                        <div className="text-white font-bold">{currentStories[activeStory].timeframe}</div>
                      </div>
                    </>
                  )}
                  
                  {activeTab === 'startups' && (
                    <>
                      <div className="bg-leather-800/20 rounded-xl p-4">
                        <div className="text-leather-400 text-sm mb-1">Funding Raised</div>
                        <div className="text-white font-bold">{(currentStories[activeStory] as any).fundingRaised || 'N/A'}</div>
                      </div>
                      <div className="bg-leather-800/20 rounded-xl p-4">
                        <div className="text-leather-400 text-sm mb-1">Time to Fund</div>
                        <div className="text-white font-bold">{currentStories[activeStory].timeframe}</div>
                      </div>
                    </>
                  )}

                  {activeTab === 'trainers' && (
                    <>
                      <div className="bg-leather-800/20 rounded-xl p-4">
                        <div className="text-leather-400 text-sm mb-1">Monthly Earnings</div>
                        <div className="text-white font-bold">{(currentStories[activeStory] as any).monthlyEarnings || 'N/A'}</div>
                      </div>
                      <div className="bg-leather-800/20 rounded-xl p-4">
                        <div className="text-leather-400 text-sm mb-1">Students Impacted</div>
                        <div className="text-white font-bold">{(currentStories[activeStory] as any).studentsImpacted || 'N/A'}</div>
                      </div>
                    </>
                  )}
                </div>

                {/* Story Quote */}
                <blockquote className="text-lg text-leather-200 italic leading-relaxed border-l-4 border-leather-600 pl-6">
                  "{currentStories[activeStory].story}"
                </blockquote>

                {/* Achievements */}
                <div className="space-y-3">
                  <h4 className="text-white font-semibold">Key Achievements:</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {currentStories[activeStory].achievements.map((achievement, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <Star className="w-4 h-4 text-leather-500" />
                        <span className="text-leather-200 text-sm">{achievement}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Video CTA */}
                <button className="flex items-center space-x-3 bg-leather-600/20 hover:bg-leather-600/30 px-6 py-4 rounded-xl transition-colors group">
                  <div className="w-12 h-12 bg-leather-600 rounded-full flex items-center justify-center group-hover:bg-leather-700 transition-colors">
                    <Play className="w-5 h-5 text-white ml-1" />
                  </div>
                  <div className="text-left">
                    <div className="text-white font-semibold">Watch Full Story</div>
                    <div className="text-leather-300 text-sm">3 min video interview</div>
                  </div>
                </button>
              </div>

              {/* Visual Stats */}
              <div className="space-y-6">
                <div className="bg-gradient-to-br from-leather-800/30 to-dark-800/30 rounded-2xl p-8">
                  <h4 className="text-white font-bold text-xl mb-6">Impact Metrics</h4>
                  
                  {activeTab === 'consultants' && (
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span className="text-leather-300">Client Satisfaction</span>
                        <span className="text-white font-bold">4.9/5</span>
                      </div>
                      <div className="w-full bg-leather-900 rounded-full h-2">
                        <div className="bg-gradient-to-r from-leather-500 to-leather-600 h-2 rounded-full" style={{ width: '98%' }}></div>
                      </div>
                      
                      <div className="flex justify-between items-center">
                        <span className="text-leather-300">Success Rate</span>
                        <span className="text-white font-bold">94%</span>
                      </div>
                      <div className="w-full bg-leather-900 rounded-full h-2">
                        <div className="bg-gradient-to-r from-leather-500 to-leather-600 h-2 rounded-full" style={{ width: '94%' }}></div>
                      </div>
                    </div>
                  )}

                  {activeTab === 'startups' && (
                    <div className="space-y-4">
                      <div className="text-center">
                        <div className="text-4xl font-bold text-white mb-2">₦1.05B</div>
                        <div className="text-leather-300">Total Funding Raised</div>
                      </div>
                      <div className="grid grid-cols-3 gap-4 text-center">
                        <div>
                          <div className="text-2xl font-bold text-leather-400">3</div>
                          <div className="text-leather-300 text-sm">Startups</div>
                        </div>
                        <div>
                          <div className="text-2xl font-bold text-leather-400">4.2</div>
                          <div className="text-leather-300 text-sm">Avg Months</div>
                        </div>
                        <div>
                          <div className="text-2xl font-bold text-leather-400">100%</div>
                          <div className="text-leather-300 text-sm">Success Rate</div>
                        </div>
                      </div>
                    </div>
                  )}

                  {activeTab === 'trainers' && (
                    <div className="space-y-4">
                      <div className="text-center">
                        <div className="text-4xl font-bold text-white mb-2">₦38M</div>
                        <div className="text-leather-300">Total Earnings</div>
                      </div>
                      <div className="space-y-3">
                        <div className="flex justify-between">
                          <span className="text-leather-300">Course Rating</span>
                          <span className="text-white">4.9/5</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-leather-300">Completion Rate</span>
                          <span className="text-white">95%</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-leather-300">Student Satisfaction</span>
                          <span className="text-white">98%</span>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-between mt-8 pt-8 border-t border-leather-800">
              <button
                onClick={prevStory}
                className="flex items-center space-x-2 px-6 py-3 rounded-xl bg-leather-700/20 hover:bg-leather-700/30 transition-colors"
              >
                <ChevronLeft className="w-5 h-5 text-leather-300" />
                <span className="text-leather-300">Previous</span>
              </button>

              <div className="flex space-x-2">
                {currentStories.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveStory(index)}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      index === activeStory ? 'bg-leather-500' : 'bg-leather-800'
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={nextStory}
                className="flex items-center space-x-2 px-6 py-3 rounded-xl bg-leather-700/20 hover:bg-leather-700/30 transition-colors"
              >
                <span className="text-leather-300">Next</span>
                <ChevronRight className="w-5 h-5 text-leather-300" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}