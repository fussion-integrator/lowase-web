'use client';

import { useState, useEffect } from 'react';
import { 
  BookOpen, Play, Clock, Users, Star, Filter, Search, 
  TrendingUp, Award, CheckCircle, Lock, Zap, Target,
  Brain, Trophy, Globe, Headphones, Download, Share2
} from 'lucide-react';

export default function TrainingPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedLevel, setSelectedLevel] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [viewMode, setViewMode] = useState('grid');
  const [sortBy, setSortBy] = useState('popular');

  const categories = [
    { id: 'all', name: 'All Courses', count: 47, icon: BookOpen },
    { id: 'fundamentals', name: 'VC Fundamentals', count: 12, icon: Brain },
    { id: 'due-diligence', name: 'Due Diligence', count: 8, icon: Target },
    { id: 'valuation', name: 'Valuation', count: 9, icon: TrendingUp },
    { id: 'portfolio', name: 'Portfolio Mgmt', count: 7, icon: Trophy },
    { id: 'legal', name: 'Legal & Compliance', count: 6, icon: Award },
    { id: 'market', name: 'Market Analysis', count: 5, icon: Globe }
  ];

  const courses = [
    {
      id: 1,
      title: 'Complete VC Fundamentals Masterclass',
      instructor: 'Dr. Adebayo Ogundimu',
      category: 'fundamentals',
      level: 'beginner',
      duration: '12 hours',
      lessons: 24,
      students: 2847,
      rating: 4.9,
      reviews: 342,
      price: '₦89,000',
      originalPrice: '₦120,000',
      thumbnail: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop',
      progress: 0,
      isEnrolled: false,
      isPremium: true,
      tags: ['Certificate', 'Live Sessions', 'Case Studies'],
      description: 'Master the fundamentals of venture capital with real Nigerian case studies and international best practices.',
      features: ['24 HD Video Lessons', 'Downloadable Resources', 'Live Q&A Sessions', 'Certificate of Completion'],
      lastUpdated: '2024-01-15'
    },
    {
      id: 2,
      title: 'Advanced Due Diligence Framework',
      instructor: 'Fatima Al-Hassan',
      category: 'due-diligence',
      level: 'advanced',
      duration: '8 hours',
      lessons: 16,
      students: 1234,
      rating: 4.8,
      reviews: 189,
      price: '₦125,000',
      originalPrice: '₦180,000',
      thumbnail: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop',
      progress: 45,
      isEnrolled: true,
      isPremium: true,
      tags: ['Advanced', 'Templates', 'Real Cases'],
      description: 'Deep dive into professional due diligence processes used by top-tier VC firms.',
      features: ['DD Checklists', 'Excel Templates', 'Case Study Analysis', 'Peer Reviews'],
      lastUpdated: '2024-01-10'
    },
    {
      id: 3,
      title: 'Startup Valuation Mastery',
      instructor: 'Chinedu Okwu',
      category: 'valuation',
      level: 'intermediate',
      duration: '10 hours',
      lessons: 20,
      students: 1876,
      rating: 4.9,
      reviews: 267,
      price: '₦95,000',
      originalPrice: '₦140,000',
      thumbnail: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=400&h=250&fit=crop',
      progress: 0,
      isEnrolled: false,
      isPremium: false,
      tags: ['Financial Models', 'DCF', 'Comparables'],
      description: 'Learn multiple valuation methodologies with hands-on financial modeling exercises.',
      features: ['Excel Models', 'Valuation Calculator', 'Industry Benchmarks', 'Practice Exercises'],
      lastUpdated: '2024-01-08'
    }
  ];

  const learningPaths = [
    {
      name: 'VC Analyst Track',
      courses: 6,
      duration: '45 hours',
      level: 'Beginner to Intermediate',
      completion: 0,
      description: 'Complete pathway from VC basics to analyst-level competency'
    },
    {
      name: 'Investment Professional',
      courses: 8,
      duration: '60 hours', 
      level: 'Intermediate to Advanced',
      completion: 25,
      description: 'Advanced track for experienced professionals seeking VC expertise'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-dark-950 to-leather-950">
      {/* Hero Section */}
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center space-x-2 bg-leather-600/20 px-4 py-2 rounded-full mb-6">
              <BookOpen className="w-4 h-4 text-leather-400" />
              <span className="text-leather-300 text-sm font-medium">World-Class Training</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6">
              Master
              <span className="block bg-gradient-to-r from-leather-400 to-leather-600 bg-clip-text text-transparent">
                Venture Capital
              </span>
            </h1>
            
            <p className="text-xl text-leather-200 mb-8 max-w-2xl mx-auto">
              Learn from Nigeria's top VC professionals. Get certified, build expertise, 
              and unlock high-paying opportunities in venture capital.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto mb-12">
              <div className="text-center">
                <div className="text-3xl font-bold text-leather-400 mb-2">47+</div>
                <div className="text-leather-300 text-sm">Expert Courses</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-leather-400 mb-2">5,000+</div>
                <div className="text-leather-300 text-sm">Active Learners</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-leather-400 mb-2">94%</div>
                <div className="text-leather-300 text-sm">Success Rate</div>
              </div>
            </div>

            {/* Search Bar */}
            <div className="relative max-w-2xl mx-auto">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-leather-400" />
              <input
                type="text"
                placeholder="Search courses, instructors, or topics..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-leather-800/30 border border-leather-700 rounded-2xl pl-12 pr-4 py-4 text-white placeholder-leather-400 focus:outline-none focus:border-leather-500 focus:ring-2 focus:ring-leather-500/20"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Learning Paths */}
      <section className="py-16 border-t border-leather-800/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Structured Learning Paths</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {learningPaths.map((path, index) => (
              <div key={index} className="bg-gradient-to-br from-leather-900/40 to-dark-900/40 backdrop-blur-xl rounded-2xl p-6 border border-leather-700/30">
                <h3 className="text-xl font-bold text-white mb-3">{path.name}</h3>
                <p className="text-leather-300 text-sm mb-4">{path.description}</p>
                <div className="grid grid-cols-3 gap-4 mb-4 text-sm">
                  <div>
                    <div className="text-leather-400">Courses</div>
                    <div className="text-white font-semibold">{path.courses}</div>
                  </div>
                  <div>
                    <div className="text-leather-400">Duration</div>
                    <div className="text-white font-semibold">{path.duration}</div>
                  </div>
                  <div>
                    <div className="text-leather-400">Level</div>
                    <div className="text-white font-semibold">{path.level}</div>
                  </div>
                </div>
                {path.completion > 0 && (
                  <div className="mb-4">
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-leather-300">Progress</span>
                      <span className="text-white">{path.completion}%</span>
                    </div>
                    <div className="w-full bg-leather-800 rounded-full h-2">
                      <div className="bg-leather-500 h-2 rounded-full" style={{ width: `${path.completion}%` }}></div>
                    </div>
                  </div>
                )}
                <button className="w-full bg-leather-600 hover:bg-leather-700 text-white py-3 rounded-xl font-semibold transition-colors">
                  {path.completion > 0 ? 'Continue Learning' : 'Start Path'}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Filters & Course Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {/* Category Filters */}
          <div className="flex flex-wrap gap-3 justify-center mb-8">
            {categories.map((category) => {
              const Icon = category.icon;
              return (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-full font-medium transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-leather-600 text-white shadow-lg'
                      : 'bg-leather-800/30 text-leather-300 hover:bg-leather-700/30 hover:text-white'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{category.name}</span>
                  <span className="bg-leather-700/50 px-2 py-0.5 rounded-full text-xs">{category.count}</span>
                </button>
              );
            })}
          </div>

          {/* Course Grid */}
          <div className="grid lg:grid-cols-3 gap-8">
            {courses.map((course) => (
              <div key={course.id} className="bg-gradient-to-br from-leather-900/40 to-dark-900/40 backdrop-blur-xl rounded-2xl overflow-hidden border border-leather-700/30 hover:border-leather-500/50 transition-all duration-300 group">
                <div className="relative">
                  <img
                    src={course.thumbnail}
                    alt={course.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    {course.isPremium && (
                      <span className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-black px-3 py-1 rounded-full text-xs font-bold">
                        PREMIUM
                      </span>
                    )}
                  </div>
                  <div className="absolute top-4 right-4">
                    <button className="bg-black/50 backdrop-blur-sm p-2 rounded-full text-white hover:bg-black/70 transition-colors">
                      <Play className="w-4 h-4" />
                    </button>
                  </div>
                  {course.isEnrolled && (
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-white">Progress</span>
                        <span className="text-white">{course.progress}%</span>
                      </div>
                      <div className="w-full bg-leather-800 rounded-full h-1">
                        <div className="bg-leather-500 h-1 rounded-full" style={{ width: `${course.progress}%` }}></div>
                      </div>
                    </div>
                  )}
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="bg-leather-700/30 text-leather-200 px-3 py-1 rounded-full text-xs font-semibold capitalize">
                      {course.level}
                    </span>
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-white font-semibold">{course.rating}</span>
                      <span className="text-leather-400 text-sm">({course.reviews})</span>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2 line-clamp-2">{course.title}</h3>
                  <p className="text-leather-300 text-sm mb-4 line-clamp-2">{course.description}</p>

                  <div className="flex items-center space-x-4 mb-4 text-sm text-leather-400">
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>{course.duration}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <BookOpen className="w-4 h-4" />
                      <span>{course.lessons} lessons</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Users className="w-4 h-4" />
                      <span>{course.students.toLocaleString()}</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {course.tags.map((tag, index) => (
                      <span key={index} className="bg-leather-800/30 text-leather-300 px-2 py-1 rounded text-xs">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-2xl font-bold text-white">{course.price}</div>
                      {course.originalPrice && (
                        <div className="text-leather-400 text-sm line-through">{course.originalPrice}</div>
                      )}
                    </div>
                    <button className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                      course.isEnrolled
                        ? 'bg-green-600 hover:bg-green-700 text-white'
                        : 'bg-leather-600 hover:bg-leather-700 text-white'
                    }`}>
                      {course.isEnrolled ? 'Continue' : 'Enroll Now'}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}