'use client';

import { 
  Briefcase, MapPin, Clock, Users, Award, 
  ArrowRight, Heart, TrendingUp, Globe
} from 'lucide-react';

export default function CareersPage() {
  const jobs = [
    {
      id: 1,
      title: 'Senior VC Consultant',
      department: 'Consulting',
      location: 'Lagos, Nigeria',
      type: 'Full-time',
      experience: '5+ years',
      description: 'Lead consulting engagements with startups and help them secure funding.'
    },
    {
      id: 2,
      title: 'Content Creator - VC Education',
      department: 'Education',
      location: 'Remote',
      type: 'Full-time',
      experience: '3+ years',
      description: 'Create engaging educational content for our VC training programs.'
    },
    {
      id: 3,
      title: 'Product Manager',
      department: 'Product',
      location: 'Lagos, Nigeria',
      type: 'Full-time',
      experience: '4+ years',
      description: 'Drive product strategy and development for our platform features.'
    }
  ];

  const benefits = [
    'Competitive salary and equity',
    'Health insurance coverage',
    'Flexible working hours',
    'Remote work options',
    'Learning & development budget',
    'Annual team retreats'
  ];

  const values = [
    {
      icon: Heart,
      title: 'Impact-Driven',
      description: 'We\'re transforming Africa\'s startup ecosystem'
    },
    {
      icon: Users,
      title: 'Collaborative',
      description: 'We work together to achieve great things'
    },
    {
      icon: TrendingUp,
      title: 'Growth-Focused',
      description: 'We invest in your professional development'
    },
    {
      icon: Globe,
      title: 'Inclusive',
      description: 'We celebrate diversity and different perspectives'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-dark-950 to-leather-950">
      <section className="pt-32 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center space-x-2 bg-leather-600/20 px-4 py-2 rounded-full mb-6">
              <Briefcase className="w-4 h-4 text-leather-400" />
              <span className="text-leather-300 text-sm font-medium">Join Our Team</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6">
              Build the Future of
              <span className="block bg-gradient-to-r from-leather-400 to-leather-600 bg-clip-text text-transparent">
                VC Education
              </span>
            </h1>
            
            <p className="text-xl text-leather-200 mb-12">
              Join our mission to democratize venture capital education across Africa. 
              Work with passionate people building something meaningful.
            </p>

            <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-leather-400 mb-2">25+</div>
                <div className="text-leather-300 text-sm">Team Members</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-leather-400 mb-2">12</div>
                <div className="text-leather-300 text-sm">Countries</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-leather-400 mb-2">₦2.5B</div>
                <div className="text-leather-300 text-sm">Series A Raised</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 border-t border-leather-800/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Our Values</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <div key={index} className="bg-gradient-to-br from-leather-900/40 to-dark-900/40 backdrop-blur-xl rounded-2xl p-6 border border-leather-700/30 text-center">
                    <Icon className="w-8 h-8 text-leather-400 mx-auto mb-4" />
                    <h3 className="text-lg font-bold text-white mb-2">{value.title}</h3>
                    <p className="text-leather-300 text-sm">{value.description}</p>
                  </div>
                );
              })}
            </div>

            <h2 className="text-3xl font-bold text-white mb-8 text-center">Open Positions</h2>
            
            <div className="space-y-6">
              {jobs.map((job) => (
                <div key={job.id} className="bg-gradient-to-br from-leather-900/40 to-dark-900/40 backdrop-blur-xl rounded-2xl p-6 border border-leather-700/30">
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-4 mb-2">
                        <h3 className="text-xl font-bold text-white">{job.title}</h3>
                        <span className="bg-leather-600/20 text-leather-300 px-3 py-1 rounded-full text-sm">
                          {job.department}
                        </span>
                      </div>
                      
                      <p className="text-leather-200 mb-4">{job.description}</p>
                      
                      <div className="flex items-center space-x-6 text-sm text-leather-400">
                        <div className="flex items-center space-x-1">
                          <MapPin className="w-4 h-4" />
                          <span>{job.location}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Clock className="w-4 h-4" />
                          <span>{job.type}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Award className="w-4 h-4" />
                          <span>{job.experience}</span>
                        </div>
                      </div>
                    </div>
                    
                    <button className="bg-leather-600 hover:bg-leather-700 text-white px-6 py-3 rounded-xl font-semibold transition-colors flex items-center space-x-2">
                      <span>Apply</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 border-t border-leather-800/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Why Work With Us?</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-leather-900/40 to-dark-900/40 backdrop-blur-xl rounded-2xl p-8 border border-leather-700/30">
                <h3 className="text-xl font-bold text-white mb-4">Benefits & Perks</h3>
                <div className="space-y-3">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-leather-500 rounded-full"></div>
                      <span className="text-leather-200">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-leather-900/40 to-dark-900/40 backdrop-blur-xl rounded-2xl p-8 border border-leather-700/30">
                <h3 className="text-xl font-bold text-white mb-4">Ready to Join?</h3>
                <p className="text-leather-200 mb-6">
                  Don't see a role that fits? We're always looking for talented people. 
                  Send us your resume and tell us how you'd like to contribute.
                </p>
                <button className="w-full bg-gradient-to-r from-leather-600 to-leather-700 text-white py-3 rounded-xl font-semibold hover:from-leather-700 hover:to-leather-800 transition-all duration-300">
                  Send General Application
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}