'use client';

import { 
  Handshake, Users, TrendingUp, Globe, 
  Award, ArrowRight, CheckCircle, Star
} from 'lucide-react';

export default function PartnersPage() {
  const partnerTypes = [
    {
      title: 'VC Firms',
      description: 'Partner with us to source quality deal flow and provide expert consultation services.',
      benefits: ['Access to vetted startups', 'Co-investment opportunities', 'Market intelligence', 'Brand visibility'],
      icon: TrendingUp
    },
    {
      title: 'Educational Institutions',
      description: 'Integrate our VC curriculum into your programs and offer students real-world experience.',
      benefits: ['Curriculum licensing', 'Student internships', 'Faculty training', 'Research collaboration'],
      icon: Award
    },
    {
      title: 'Corporate Partners',
      description: 'Leverage our platform for innovation scouting and startup engagement programs.',
      benefits: ['Innovation pipeline', 'Startup partnerships', 'Employee training', 'Market insights'],
      icon: Users
    },
    {
      title: 'Technology Partners',
      description: 'Integrate your solutions with our platform to enhance user experience and capabilities.',
      benefits: ['API integration', 'Co-marketing', 'Revenue sharing', 'Joint development'],
      icon: Globe
    }
  ];

  const currentPartners = [
    {
      name: 'Ventures Platform',
      type: 'VC Firm',
      description: 'Leading African VC firm providing deal flow and expertise.',
      logo: 'VP'
    },
    {
      name: 'University of Lagos',
      type: 'Educational',
      description: 'Academic partnership for VC education programs.',
      logo: 'UL'
    },
    {
      name: 'Flutterwave',
      type: 'Corporate',
      description: 'Payment infrastructure and fintech expertise.',
      logo: 'FW'
    },
    {
      name: 'Paystack',
      type: 'Technology',
      description: 'Payment processing and API integration.',
      logo: 'PS'
    }
  ];

  const benefits = [
    'Access to 2,847+ active users',
    'Co-marketing opportunities',
    'Revenue sharing models',
    'Joint product development',
    'Market expansion support',
    'Brand association with leading platform'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-dark-950 to-leather-950">
      <section className="pt-32 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center space-x-2 bg-leather-600/20 px-4 py-2 rounded-full mb-6">
              <Handshake className="w-4 h-4 text-leather-400" />
              <span className="text-leather-300 text-sm font-medium">Strategic Partnerships</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6">
              Partner
              <span className="block bg-gradient-to-r from-leather-400 to-leather-600 bg-clip-text text-transparent">
                With Us
              </span>
            </h1>
            
            <p className="text-xl text-leather-200 mb-12">
              Join forces with Africa's leading VC education platform. Together, we can 
              democratize venture capital knowledge and transform the startup ecosystem.
            </p>

            <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-leather-400 mb-2">25+</div>
                <div className="text-leather-300 text-sm">Partners</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-leather-400 mb-2">12</div>
                <div className="text-leather-300 text-sm">Countries</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-leather-400 mb-2">₦50B+</div>
                <div className="text-leather-300 text-sm">Impact</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 border-t border-leather-800/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Partnership Opportunities</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              {partnerTypes.map((type, index) => {
                const Icon = type.icon;
                return (
                  <div key={index} className="bg-gradient-to-br from-leather-900/40 to-dark-900/40 backdrop-blur-xl rounded-2xl p-8 border border-leather-700/30">
                    <div className="flex items-center space-x-4 mb-6">
                      <div className="w-12 h-12 bg-leather-500/20 rounded-xl flex items-center justify-center">
                        <Icon className="w-6 h-6 text-leather-400" />
                      </div>
                      <h3 className="text-xl font-bold text-white">{type.title}</h3>
                    </div>
                    
                    <p className="text-leather-200 mb-6">{type.description}</p>
                    
                    <div className="space-y-3 mb-6">
                      {type.benefits.map((benefit, idx) => (
                        <div key={idx} className="flex items-center space-x-3">
                          <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                          <span className="text-leather-200 text-sm">{benefit}</span>
                        </div>
                      ))}
                    </div>
                    
                    <button className="w-full bg-leather-600 hover:bg-leather-700 text-white py-3 rounded-xl font-semibold transition-colors flex items-center justify-center space-x-2">
                      <span>Learn More</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 border-t border-leather-800/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Our Partners</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {currentPartners.map((partner, index) => (
                <div key={index} className="bg-gradient-to-br from-leather-900/40 to-dark-900/40 backdrop-blur-xl rounded-2xl p-6 border border-leather-700/30 text-center">
                  <div className="w-16 h-16 bg-leather-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <span className="text-leather-300 font-bold text-lg">{partner.logo}</span>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{partner.name}</h3>
                  <div className="text-leather-400 text-sm mb-3">{partner.type}</div>
                  <p className="text-leather-200 text-sm">{partner.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 border-t border-leather-800/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold text-white mb-6">Why Partner With Lowase?</h2>
                <div className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <Star className="w-5 h-5 text-leather-400 flex-shrink-0" />
                      <span className="text-leather-200">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-br from-leather-900/40 to-dark-900/40 backdrop-blur-xl rounded-2xl p-8 border border-leather-700/30">
                <h3 className="text-2xl font-bold text-white mb-4">Ready to Partner?</h3>
                <p className="text-leather-200 mb-6">
                  Let's discuss how we can work together to transform the African startup ecosystem. 
                  Our partnerships team is ready to explore opportunities.
                </p>
                
                <div className="space-y-4">
                  <button className="w-full bg-gradient-to-r from-leather-600 to-leather-700 text-white py-3 rounded-xl font-semibold hover:from-leather-700 hover:to-leather-800 transition-all duration-300">
                    Schedule Partnership Call
                  </button>
                  <button className="w-full border border-leather-600 text-leather-300 py-3 rounded-xl font-semibold hover:bg-leather-600/10 transition-colors">
                    Download Partnership Deck
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}