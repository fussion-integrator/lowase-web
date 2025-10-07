'use client';

import { 
  Target, Users, Award, TrendingUp, Globe, Heart,
  Linkedin, Twitter, Mail, MapPin, Calendar, Star
} from 'lucide-react';

export default function AboutPage() {
  const stats = [
    { label: 'Active Users', value: '2,847+', icon: Users },
    { label: 'Funds Raised', value: '₦50B+', icon: TrendingUp },
    { label: 'Success Rate', value: '94%', icon: Award },
    { label: 'Countries', value: '12+', icon: Globe }
  ];

  const team = [
    {
      name: 'Adebayo Ogundimu',
      role: 'CEO & Co-Founder',
      bio: 'Former Goldman Sachs VP with 12+ years in venture capital and investment banking.',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face',
      linkedin: '#',
      twitter: '#'
    },
    {
      name: 'Fatima Al-Hassan',
      role: 'CTO & Co-Founder',
      bio: 'Ex-Google engineer passionate about democratizing access to venture capital education.',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop&crop=face',
      linkedin: '#',
      twitter: '#'
    },
    {
      name: 'Chinedu Okwu',
      role: 'Head of Education',
      bio: 'Stanford MBA with experience at Andreessen Horowitz and deep African market knowledge.',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face',
      linkedin: '#',
      twitter: '#'
    },
    {
      name: 'Kemi Oladele',
      role: 'Head of Partnerships',
      bio: 'Former McKinsey consultant specializing in African startup ecosystem development.',
      avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=300&h=300&fit=crop&crop=face',
      linkedin: '#',
      twitter: '#'
    }
  ];

  const values = [
    {
      title: 'Excellence',
      description: 'We maintain the highest standards in education and professional development.',
      icon: Award
    },
    {
      title: 'Accessibility',
      description: 'Making world-class VC education accessible to everyone across Africa.',
      icon: Globe
    },
    {
      title: 'Innovation',
      description: 'Leveraging cutting-edge technology to enhance learning experiences.',
      icon: TrendingUp
    },
    {
      title: 'Community',
      description: 'Building a supportive network of VC professionals and entrepreneurs.',
      icon: Users
    }
  ];

  const milestones = [
    {
      year: '2022',
      title: 'Company Founded',
      description: 'Lowase was founded with a mission to democratize VC education in Nigeria.'
    },
    {
      year: '2023',
      title: 'First 1,000 Users',
      description: 'Reached our first milestone of 1,000 active learners on the platform.'
    },
    {
      year: '2023',
      title: 'Series A Funding',
      description: 'Raised ₦2.5B Series A to expand across West Africa.'
    },
    {
      year: '2024',
      title: 'Regional Expansion',
      description: 'Launched in Ghana, Kenya, and South Africa with localized content.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-dark-950 to-leather-950">
      {/* Hero Section */}
      <section className="pt-32 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center space-x-2 bg-leather-600/20 px-4 py-2 rounded-full mb-6">
              <Heart className="w-4 h-4 text-leather-400" />
              <span className="text-leather-300 text-sm font-medium">Our Story</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6">
              Democratizing
              <span className="block bg-gradient-to-r from-leather-400 to-leather-600 bg-clip-text text-transparent">
                VC Education
              </span>
            </h1>
            
            <p className="text-xl text-leather-200 mb-12 max-w-3xl mx-auto">
              We're on a mission to transform Africa's startup ecosystem by providing world-class 
              venture capital education, connecting entrepreneurs with expert consultants, and 
              building the next generation of investment professionals.
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

      {/* Mission & Vision */}
      <section className="py-16 border-t border-leather-800/30">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div className="bg-gradient-to-br from-leather-900/40 to-dark-900/40 backdrop-blur-xl rounded-2xl p-8 border border-leather-700/30">
              <div className="w-16 h-16 bg-leather-500/20 rounded-2xl flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-leather-400" />
              </div>
              <h2 className="text-3xl font-bold text-white mb-4">Our Mission</h2>
              <p className="text-leather-200 leading-relaxed">
                To bridge the knowledge gap in venture capital across Africa by providing accessible, 
                high-quality education and connecting entrepreneurs with experienced professionals. 
                We believe that with the right knowledge and guidance, African startups can compete 
                and succeed on the global stage.
              </p>
            </div>

            <div className="bg-gradient-to-br from-leather-900/40 to-dark-900/40 backdrop-blur-xl rounded-2xl p-8 border border-leather-700/30">
              <div className="w-16 h-16 bg-leather-500/20 rounded-2xl flex items-center justify-center mb-6">
                <Globe className="w-8 h-8 text-leather-400" />
              </div>
              <h2 className="text-3xl font-bold text-white mb-4">Our Vision</h2>
              <p className="text-leather-200 leading-relaxed">
                To become Africa's leading platform for venture capital education and startup 
                development, fostering a thriving ecosystem where entrepreneurs have access to 
                the knowledge, networks, and capital needed to build world-class companies that 
                solve Africa's biggest challenges.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Our Values</h2>
              <p className="text-leather-200 max-w-2xl mx-auto">
                The principles that guide everything we do and shape our culture
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <div key={index} className="text-center">
                    <div className="w-16 h-16 bg-leather-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                      <Icon className="w-8 h-8 text-leather-400" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
                    <p className="text-leather-300">{value.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 border-t border-leather-800/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Meet Our Team</h2>
              <p className="text-leather-200 max-w-2xl mx-auto">
                Experienced professionals from top-tier firms committed to transforming VC education
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {team.map((member, index) => (
                <div key={index} className="bg-gradient-to-br from-leather-900/40 to-dark-900/40 backdrop-blur-xl rounded-2xl p-6 border border-leather-700/30 text-center">
                  <img
                    src={member.avatar}
                    alt={member.name}
                    className="w-24 h-24 rounded-full mx-auto mb-4 border-2 border-leather-600"
                  />
                  <h3 className="text-xl font-bold text-white mb-2">{member.name}</h3>
                  <p className="text-leather-400 mb-3">{member.role}</p>
                  <p className="text-leather-300 text-sm mb-4">{member.bio}</p>
                  
                  <div className="flex justify-center space-x-3">
                    <a href={member.linkedin} className="text-leather-400 hover:text-white transition-colors">
                      <Linkedin className="w-5 h-5" />
                    </a>
                    <a href={member.twitter} className="text-leather-400 hover:text-white transition-colors">
                      <Twitter className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 border-t border-leather-800/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Our Journey</h2>
              <p className="text-leather-200">Key milestones in our mission to transform VC education</p>
            </div>

            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div key={index} className="flex items-start space-x-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-leather-500/20 rounded-full flex items-center justify-center">
                      <Calendar className="w-6 h-6 text-leather-400" />
                    </div>
                  </div>
                  <div className="bg-gradient-to-br from-leather-900/40 to-dark-900/40 backdrop-blur-xl rounded-2xl p-6 border border-leather-700/30 flex-1">
                    <div className="flex items-center space-x-4 mb-3">
                      <span className="bg-leather-600/20 text-leather-300 px-3 py-1 rounded-full text-sm font-semibold">
                        {milestone.year}
                      </span>
                      <h3 className="text-xl font-bold text-white">{milestone.title}</h3>
                    </div>
                    <p className="text-leather-200">{milestone.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-r from-leather-900/20 to-dark-900/20 backdrop-blur-xl rounded-2xl p-12 border border-leather-700/30">
              <h2 className="text-3xl font-bold text-white mb-4">Want to Learn More?</h2>
              <p className="text-leather-200 mb-8 max-w-2xl mx-auto">
                Get in touch with our team to learn more about our mission, partnerships, 
                or career opportunities.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-leather-600 to-leather-700 text-white px-8 py-3 rounded-xl font-semibold hover:from-leather-700 hover:to-leather-800 transition-all duration-300 flex items-center justify-center space-x-2">
                  <Mail className="w-4 h-4" />
                  <span>Contact Us</span>
                </button>
                <button className="border border-leather-600 text-leather-300 px-8 py-3 rounded-xl font-semibold hover:bg-leather-600/10 transition-colors flex items-center justify-center space-x-2">
                  <MapPin className="w-4 h-4" />
                  <span>Visit Our Office</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}