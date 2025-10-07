'use client';

import { useState } from 'react';
import Link from 'next/link';
import { 
  BarChart3, TrendingUp, Users, DollarSign, Clock, 
  BookOpen, MessageSquare, Calendar, Award, Target,
  Play, CheckCircle, AlertCircle, Zap, Brain, Star
} from 'lucide-react';

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState('overview');

  const stats = {
    coursesCompleted: 12,
    totalCourses: 47,
    consultationsBooked: 8,
    hoursLearned: 156,
    certificatesEarned: 3,
    currentStreak: 15,
    totalSpent: 450000,
    nextGoal: 'VC Fundamentals Certificate'
  };

  const recentActivity = [
    {
      type: 'course',
      title: 'Completed: Advanced Due Diligence',
      time: '2 hours ago',
      icon: CheckCircle,
      color: 'green'
    },
    {
      type: 'consultation',
      title: 'Consultation with Adebayo Ogundimu',
      time: '1 day ago',
      icon: MessageSquare,
      color: 'blue'
    },
    {
      type: 'achievement',
      title: 'Earned VC Fundamentals Certificate',
      time: '3 days ago',
      icon: Award,
      color: 'yellow'
    }
  ];

  const currentCourses = [
    {
      id: 1,
      title: 'Startup Valuation Mastery',
      instructor: 'Chinedu Okwu',
      progress: 65,
      nextLesson: 'DCF Modeling Techniques',
      timeLeft: '2h 30m',
      thumbnail: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=300&h=200&fit=crop'
    },
    {
      id: 2,
      title: 'Portfolio Management Strategies',
      instructor: 'Fatima Al-Hassan',
      progress: 30,
      nextLesson: 'Risk Assessment Framework',
      timeLeft: '4h 15m',
      thumbnail: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=300&h=200&fit=crop'
    }
  ];

  const upcomingConsultations = [
    {
      id: 1,
      consultant: 'Adebayo Ogundimu',
      topic: 'Series A Preparation',
      date: 'Today, 2:00 PM',
      duration: '60 minutes',
      type: 'Video Call',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=60&h=60&fit=crop&crop=face'
    },
    {
      id: 2,
      consultant: 'Chinedu Okwu',
      topic: 'Market Analysis Review',
      date: 'Tomorrow, 10:00 AM',
      duration: '45 minutes',
      type: 'Phone Call',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=60&h=60&fit=crop&crop=face'
    }
  ];

  const learningPath = {
    name: 'VC Professional Track',
    totalCourses: 8,
    completedCourses: 3,
    estimatedCompletion: '6 weeks',
    nextMilestone: 'Due Diligence Certification'
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-dark-950 to-leather-950">
      {/* Header */}
      <section className="pt-32 pb-8">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-4xl font-bold text-white mb-2">Welcome back, John!</h1>
              <p className="text-leather-200">Continue your journey to VC mastery</p>
            </div>
            <div className="flex items-center space-x-4">
              <div className="bg-leather-600/20 px-4 py-2 rounded-full">
                <span className="text-leather-300 text-sm">🔥 {stats.currentStreak} day streak</span>
              </div>
              <button className="bg-leather-600 hover:bg-leather-700 text-white px-6 py-3 rounded-xl font-semibold transition-colors">
                Continue Learning
              </button>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div className="bg-gradient-to-br from-leather-900/40 to-dark-900/40 backdrop-blur-xl rounded-2xl p-6 border border-leather-700/30">
              <div className="flex items-center justify-between mb-4">
                <BookOpen className="w-8 h-8 text-leather-400" />
                <span className="text-2xl font-bold text-white">{stats.coursesCompleted}/{stats.totalCourses}</span>
              </div>
              <h3 className="text-leather-200 font-semibold">Courses Completed</h3>
              <div className="w-full bg-leather-800 rounded-full h-2 mt-2">
                <div 
                  className="bg-leather-500 h-2 rounded-full" 
                  style={{ width: `${(stats.coursesCompleted / stats.totalCourses) * 100}%` }}
                ></div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-leather-900/40 to-dark-900/40 backdrop-blur-xl rounded-2xl p-6 border border-leather-700/30">
              <div className="flex items-center justify-between mb-4">
                <Clock className="w-8 h-8 text-leather-400" />
                <span className="text-2xl font-bold text-white">{stats.hoursLearned}h</span>
              </div>
              <h3 className="text-leather-200 font-semibold">Hours Learned</h3>
              <p className="text-leather-400 text-sm mt-1">+12h this week</p>
            </div>

            <div className="bg-gradient-to-br from-leather-900/40 to-dark-900/40 backdrop-blur-xl rounded-2xl p-6 border border-leather-700/30">
              <div className="flex items-center justify-between mb-4">
                <MessageSquare className="w-8 h-8 text-leather-400" />
                <span className="text-2xl font-bold text-white">{stats.consultationsBooked}</span>
              </div>
              <h3 className="text-leather-200 font-semibold">Consultations</h3>
              <p className="text-leather-400 text-sm mt-1">2 upcoming</p>
            </div>

            <div className="bg-gradient-to-br from-leather-900/40 to-dark-900/40 backdrop-blur-xl rounded-2xl p-6 border border-leather-700/30">
              <div className="flex items-center justify-between mb-4">
                <Award className="w-8 h-8 text-leather-400" />
                <span className="text-2xl font-bold text-white">{stats.certificatesEarned}</span>
              </div>
              <h3 className="text-leather-200 font-semibold">Certificates</h3>
              <p className="text-leather-400 text-sm mt-1">Next: {stats.nextGoal}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Left Column */}
            <div className="lg:col-span-2 space-y-8">
              {/* Current Courses */}
              <div className="bg-gradient-to-br from-leather-900/40 to-dark-900/40 backdrop-blur-xl rounded-2xl p-6 border border-leather-700/30">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold text-white">Continue Learning</h2>
                  <Link href="/dashboard/courses" className="text-leather-400 hover:text-white transition-colors">View All</Link>
                </div>

                <div className="space-y-4">
                  {currentCourses.map((course) => (
                    <div key={course.id} className="flex items-center space-x-4 p-4 bg-leather-800/20 rounded-xl hover:bg-leather-800/30 transition-colors">
                      <img
                        src={course.thumbnail}
                        alt={course.title}
                        className="w-16 h-16 rounded-lg object-cover"
                      />
                      <div className="flex-1">
                        <h3 className="text-white font-semibold mb-1">{course.title}</h3>
                        <p className="text-leather-300 text-sm mb-2">by {course.instructor}</p>
                        <div className="flex items-center space-x-4">
                          <div className="flex-1">
                            <div className="flex justify-between text-sm mb-1">
                              <span className="text-leather-300">Progress</span>
                              <span className="text-white">{course.progress}%</span>
                            </div>
                            <div className="w-full bg-leather-800 rounded-full h-2">
                              <div 
                                className="bg-leather-500 h-2 rounded-full" 
                                style={{ width: `${course.progress}%` }}
                              ></div>
                            </div>
                          </div>
                          <Link href={`/course/${course.id}`} className="bg-leather-600 hover:bg-leather-700 text-white px-4 py-2 rounded-lg transition-colors flex items-center space-x-2">
                            <Play className="w-4 h-4" />
                            <span>Continue</span>
                          </Link>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Learning Path Progress */}
              <div className="bg-gradient-to-br from-leather-900/40 to-dark-900/40 backdrop-blur-xl rounded-2xl p-6 border border-leather-700/30">
                <h2 className="text-2xl font-bold text-white mb-6">Learning Path Progress</h2>
                
                <div className="bg-leather-800/20 rounded-xl p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold text-white">{learningPath.name}</h3>
                    <span className="bg-leather-600/20 text-leather-300 px-3 py-1 rounded-full text-sm">
                      {learningPath.completedCourses}/{learningPath.totalCourses} completed
                    </span>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-leather-400 mb-1">{learningPath.completedCourses}</div>
                      <div className="text-leather-300 text-sm">Completed</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-leather-400 mb-1">{learningPath.estimatedCompletion}</div>
                      <div className="text-leather-300 text-sm">Est. Completion</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-leather-400 mb-1">85%</div>
                      <div className="text-leather-300 text-sm">Overall Progress</div>
                    </div>
                  </div>

                  <div className="mb-4">
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-leather-300">Path Progress</span>
                      <span className="text-white">85%</span>
                    </div>
                    <div className="w-full bg-leather-800 rounded-full h-3">
                      <div className="bg-gradient-to-r from-leather-500 to-leather-600 h-3 rounded-full" style={{ width: '85%' }}></div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-leather-300 text-sm">Next Milestone</div>
                      <div className="text-white font-semibold">{learningPath.nextMilestone}</div>
                    </div>
                    <Link href="/dashboard/learning-path" className="bg-leather-600 hover:bg-leather-700 text-white px-4 py-2 rounded-lg transition-colors">
                      View Path
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-8">
              {/* Upcoming Consultations */}
              <div className="bg-gradient-to-br from-leather-900/40 to-dark-900/40 backdrop-blur-xl rounded-2xl p-6 border border-leather-700/30">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-bold text-white">Upcoming Sessions</h2>
                  <Calendar className="w-5 h-5 text-leather-400" />
                </div>

                <div className="space-y-4">
                  {upcomingConsultations.map((consultation) => (
                    <div key={consultation.id} className="p-4 bg-leather-800/20 rounded-xl">
                      <div className="flex items-center space-x-3 mb-3">
                        <img
                          src={consultation.avatar}
                          alt={consultation.consultant}
                          className="w-10 h-10 rounded-full"
                        />
                        <div>
                          <h3 className="text-white font-semibold">{consultation.consultant}</h3>
                          <p className="text-leather-300 text-sm">{consultation.topic}</p>
                        </div>
                      </div>
                      <div className="text-leather-400 text-sm mb-2">{consultation.date}</div>
                      <div className="flex items-center justify-between">
                        <span className="text-leather-300 text-sm">{consultation.duration} • {consultation.type}</span>
                        <button className="bg-green-600 hover:bg-green-700 text-white px-3 py-1 rounded text-sm transition-colors">
                          Join
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

                <Link href="/dashboard/consultations" className="w-full mt-4 bg-leather-600 hover:bg-leather-700 text-white py-2 rounded-lg transition-colors block text-center">
                  View All Sessions
                </Link>
              </div>

              {/* Recent Activity */}
              <div className="bg-gradient-to-br from-leather-900/40 to-dark-900/40 backdrop-blur-xl rounded-2xl p-6 border border-leather-700/30">
                <h2 className="text-xl font-bold text-white mb-6">Recent Activity</h2>
                
                <div className="space-y-4">
                  {recentActivity.map((activity, index) => {
                    const Icon = activity.icon;
                    return (
                      <div key={index} className="flex items-center space-x-3">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                          activity.color === 'green' ? 'bg-green-500/20' :
                          activity.color === 'blue' ? 'bg-blue-500/20' :
                          'bg-yellow-500/20'
                        }`}>
                          <Icon className={`w-4 h-4 ${
                            activity.color === 'green' ? 'text-green-400' :
                            activity.color === 'blue' ? 'text-blue-400' :
                            'text-yellow-400'
                          }`} />
                        </div>
                        <div className="flex-1">
                          <p className="text-white text-sm">{activity.title}</p>
                          <p className="text-leather-400 text-xs">{activity.time}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Quick Actions */}
              <div className="bg-gradient-to-br from-leather-900/40 to-dark-900/40 backdrop-blur-xl rounded-2xl p-6 border border-leather-700/30">
                <h2 className="text-xl font-bold text-white mb-6">Quick Actions</h2>
                
                <div className="space-y-3">
                  <Link href="/training" className="w-full bg-leather-600 hover:bg-leather-700 text-white py-3 rounded-lg transition-colors flex items-center justify-center space-x-2">
                    <BookOpen className="w-4 h-4" />
                    <span>Browse Courses</span>
                  </Link>
                  <Link href="/consultants" className="w-full bg-leather-700/30 hover:bg-leather-700/50 text-leather-200 py-3 rounded-lg transition-colors flex items-center justify-center space-x-2">
                    <Users className="w-4 h-4" />
                    <span>Find Consultant</span>
                  </Link>
                  <Link href="/pitch" className="w-full bg-leather-700/30 hover:bg-leather-700/50 text-leather-200 py-3 rounded-lg transition-colors flex items-center justify-center space-x-2">
                    <Target className="w-4 h-4" />
                    <span>Analyze Pitch</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}