'use client';

import { useState } from 'react';
import { 
  Play, Clock, Users, Star, BookOpen, CheckCircle, 
  Lock, Download, Award, Target, Brain, TrendingUp
} from 'lucide-react';

export default function FundamentalsPage() {
  const [activeModule, setActiveModule] = useState(0);
  const [enrollmentStep, setEnrollmentStep] = useState(0);

  const courseInfo = {
    title: 'VC Fundamentals Masterclass',
    instructor: 'Dr. Adebayo Ogundimu',
    rating: 4.9,
    reviews: 342,
    students: 2847,
    duration: '12 hours',
    lessons: 24,
    level: 'Beginner',
    price: 89000,
    originalPrice: 120000,
    thumbnail: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop'
  };

  const modules = [
    {
      title: 'Introduction to Venture Capital',
      lessons: 4,
      duration: '2h 30m',
      completed: true,
      lessons_list: [
        { title: 'What is Venture Capital?', duration: '25m', completed: true },
        { title: 'VC Ecosystem Overview', duration: '35m', completed: true },
        { title: 'Types of VC Firms', duration: '40m', completed: true },
        { title: 'VC vs Other Funding', duration: '50m', completed: true }
      ]
    },
    {
      title: 'Investment Process & Strategy',
      lessons: 6,
      duration: '3h 15m',
      completed: false,
      current: true,
      lessons_list: [
        { title: 'Deal Sourcing', duration: '45m', completed: true },
        { title: 'Initial Screening', duration: '30m', completed: true },
        { title: 'Due Diligence Process', duration: '55m', completed: false, current: true },
        { title: 'Investment Committee', duration: '40m', completed: false },
        { title: 'Term Sheet Negotiation', duration: '50m', completed: false },
        { title: 'Portfolio Construction', duration: '35m', completed: false }
      ]
    },
    {
      title: 'Startup Evaluation Framework',
      lessons: 5,
      duration: '2h 45m',
      completed: false,
      lessons_list: [
        { title: 'Market Analysis', duration: '40m', completed: false },
        { title: 'Team Assessment', duration: '35m', completed: false },
        { title: 'Product Evaluation', duration: '45m', completed: false },
        { title: 'Business Model Review', duration: '30m', completed: false },
        { title: 'Competitive Landscape', duration: '35m', completed: false }
      ]
    },
    {
      title: 'Financial Modeling & Valuation',
      lessons: 5,
      duration: '2h 20m',
      completed: false,
      lessons_list: [
        { title: 'Financial Statement Analysis', duration: '35m', completed: false },
        { title: 'Revenue Projections', duration: '40m', completed: false },
        { title: 'Valuation Methods', duration: '45m', completed: false },
        { title: 'Cap Table Modeling', duration: '25m', completed: false },
        { title: 'Exit Scenarios', duration: '35m', completed: false }
      ]
    },
    {
      title: 'Portfolio Management',
      lessons: 4,
      duration: '1h 50m',
      completed: false,
      lessons_list: [
        { title: 'Board Governance', duration: '30m', completed: false },
        { title: 'Value Creation', duration: '35m', completed: false },
        { title: 'Follow-on Investments', duration: '25m', completed: false },
        { title: 'Exit Planning', duration: '20m', completed: false }
      ]
    }
  ];

  const features = [
    'HD video lessons with downloadable resources',
    'Real Nigerian case studies and examples',
    'Interactive financial modeling exercises',
    'Live Q&A sessions with instructor',
    'Certificate of completion',
    'Lifetime access to course materials',
    'Mobile app access for learning on-the-go',
    'Community forum access'
  ];

  const learningOutcomes = [
    'Understand the VC ecosystem and key players',
    'Master the investment evaluation process',
    'Build financial models for startup valuation',
    'Develop portfolio management skills',
    'Navigate term sheets and negotiations',
    'Apply frameworks to real-world scenarios'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-dark-950 to-leather-950">
      {/* Hero Section */}
      <section className="pt-32 pb-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Course Info */}
            <div>
              <div className="inline-flex items-center space-x-2 bg-leather-600/20 px-4 py-2 rounded-full mb-6">
                <BookOpen className="w-4 h-4 text-leather-400" />
                <span className="text-leather-300 text-sm font-medium">{courseInfo.level} Course</span>
              </div>
              
              <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">
                {courseInfo.title}
              </h1>
              
              <p className="text-xl text-leather-200 mb-6">
                Master the fundamentals of venture capital with comprehensive training covering 
                investment processes, startup evaluation, and portfolio management.
              </p>

              {/* Course Stats */}
              <div className="flex flex-wrap gap-6 mb-8">
                <div className="flex items-center space-x-2">
                  <Star className="w-5 h-5 text-yellow-400 fill-current" />
                  <span className="text-white font-semibold">{courseInfo.rating}</span>
                  <span className="text-leather-400">({courseInfo.reviews} reviews)</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Users className="w-5 h-5 text-leather-400" />
                  <span className="text-leather-200">{courseInfo.students.toLocaleString()} students</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="w-5 h-5 text-leather-400" />
                  <span className="text-leather-200">{courseInfo.duration}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <BookOpen className="w-5 h-5 text-leather-400" />
                  <span className="text-leather-200">{courseInfo.lessons} lessons</span>
                </div>
              </div>

              {/* Instructor */}
              <div className="flex items-center space-x-4 mb-8">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=60&h=60&fit=crop&crop=face"
                  alt={courseInfo.instructor}
                  className="w-12 h-12 rounded-full border-2 border-leather-600"
                />
                <div>
                  <div className="text-white font-semibold">Instructor: {courseInfo.instructor}</div>
                  <div className="text-leather-300 text-sm">Former Goldman Sachs VP, 12+ years VC experience</div>
                </div>
              </div>

              {/* Pricing */}
              <div className="bg-gradient-to-br from-leather-900/40 to-dark-900/40 backdrop-blur-xl rounded-2xl p-6 border border-leather-700/30">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <div className="text-3xl font-bold text-white">₦{courseInfo.price.toLocaleString()}</div>
                    <div className="text-leather-400 line-through">₦{courseInfo.originalPrice.toLocaleString()}</div>
                  </div>
                  <div className="bg-green-500/20 text-green-300 px-3 py-1 rounded-full text-sm font-semibold">
                    25% OFF
                  </div>
                </div>
                
                <button className="w-full bg-gradient-to-r from-leather-600 to-leather-700 text-white py-4 rounded-xl font-semibold hover:from-leather-700 hover:to-leather-800 transition-all duration-300 mb-4">
                  Enroll Now
                </button>
                
                <div className="text-center text-leather-300 text-sm">
                  30-day money-back guarantee
                </div>
              </div>
            </div>

            {/* Course Preview */}
            <div>
              <div className="relative rounded-2xl overflow-hidden mb-6">
                <img
                  src={courseInfo.thumbnail}
                  alt="Course preview"
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                  <button className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors">
                    <Play className="w-8 h-8 text-white ml-1" />
                  </button>
                </div>
              </div>

              {/* What You'll Learn */}
              <div className="bg-gradient-to-br from-leather-900/40 to-dark-900/40 backdrop-blur-xl rounded-2xl p-6 border border-leather-700/30">
                <h3 className="text-xl font-bold text-white mb-4">What You'll Learn</h3>
                <div className="space-y-3">
                  {learningOutcomes.map((outcome, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                      <span className="text-leather-200">{outcome}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Course Content */}
      <section className="py-16 border-t border-leather-800/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Course Content</h2>
            
            <div className="space-y-4">
              {modules.map((module, index) => (
                <div key={index} className="bg-gradient-to-br from-leather-900/40 to-dark-900/40 backdrop-blur-xl rounded-2xl border border-leather-700/30 overflow-hidden">
                  <button
                    onClick={() => setActiveModule(activeModule === index ? -1 : index)}
                    className="w-full p-6 text-left hover:bg-leather-800/20 transition-colors"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                          module.completed ? 'bg-green-500' : 
                          module.current ? 'bg-leather-500' : 'bg-leather-800'
                        }`}>
                          {module.completed ? (
                            <CheckCircle className="w-5 h-5 text-white" />
                          ) : (
                            <span className="text-white font-semibold">{index + 1}</span>
                          )}
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-white">{module.title}</h3>
                          <div className="flex items-center space-x-4 text-sm text-leather-400">
                            <span>{module.lessons} lessons</span>
                            <span>{module.duration}</span>
                          </div>
                        </div>
                      </div>
                      <div className="text-leather-400">
                        {activeModule === index ? '−' : '+'}
                      </div>
                    </div>
                  </button>

                  {activeModule === index && (
                    <div className="px-6 pb-6">
                      <div className="space-y-3">
                        {module.lessons_list.map((lesson, lessonIndex) => (
                          <div key={lessonIndex} className="flex items-center justify-between p-3 bg-leather-800/20 rounded-lg">
                            <div className="flex items-center space-x-3">
                              <div className={`w-6 h-6 rounded-full flex items-center justify-center ${
                                lesson.completed ? 'bg-green-500' : 
                                (lesson as any).current ? 'bg-leather-500' : 'bg-leather-700'
                              }`}>
                                {lesson.completed ? (
                                  <CheckCircle className="w-4 h-4 text-white" />
                                ) : (lesson as any).current ? (
                                  <Play className="w-3 h-3 text-white" />
                                ) : (
                                  <Lock className="w-3 h-3 text-leather-400" />
                                )}
                              </div>
                              <span className="text-leather-200">{lesson.title}</span>
                            </div>
                            <span className="text-leather-400 text-sm">{lesson.duration}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 border-t border-leather-800/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Course Features</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span className="text-leather-200">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}