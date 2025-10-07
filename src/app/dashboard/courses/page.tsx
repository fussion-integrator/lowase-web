'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Play, Clock, CheckCircle, BookOpen, Filter, Search } from 'lucide-react';

export default function DashboardCoursesPage() {
  const [filter, setFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const courses = [
    {
      id: 1,
      title: 'Startup Valuation Mastery',
      instructor: 'Chinedu Okwu',
      progress: 65,
      status: 'in-progress',
      duration: '8h 30m',
      lessons: 24,
      completedLessons: 16,
      thumbnail: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=300&h=200&fit=crop',
      category: 'Valuation'
    },
    {
      id: 2,
      title: 'Portfolio Management Strategies',
      instructor: 'Fatima Al-Hassan',
      progress: 30,
      status: 'in-progress',
      duration: '6h 15m',
      lessons: 18,
      completedLessons: 5,
      thumbnail: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=300&h=200&fit=crop',
      category: 'Portfolio'
    },
    {
      id: 3,
      title: 'Advanced Due Diligence',
      instructor: 'Adebayo Ogundimu',
      progress: 100,
      status: 'completed',
      duration: '5h 45m',
      lessons: 15,
      completedLessons: 15,
      thumbnail: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=200&fit=crop',
      category: 'Due Diligence'
    },
    {
      id: 4,
      title: 'VC Fundamentals',
      instructor: 'Kemi Adeyemi',
      progress: 100,
      status: 'completed',
      duration: '4h 20m',
      lessons: 12,
      completedLessons: 12,
      thumbnail: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=300&h=200&fit=crop',
      category: 'Fundamentals'
    }
  ];

  const filteredCourses = courses.filter(course => {
    const matchesFilter = filter === 'all' || course.status === filter;
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         course.instructor.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-dark-950 to-leather-950">
      <section className="pt-32 pb-8">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-4xl font-bold text-white mb-2">My Courses</h1>
              <p className="text-leather-200">Track your learning progress</p>
            </div>
            <Link 
              href="/training"
              className="bg-leather-600 hover:bg-leather-700 text-white px-6 py-3 rounded-xl font-semibold transition-colors"
            >
              Browse All Courses
            </Link>
          </div>

          {/* Filters */}
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-leather-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search courses..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-leather-900/40 border border-leather-700/30 rounded-xl text-white placeholder-leather-400 focus:outline-none focus:border-leather-500"
              />
            </div>
            <div className="flex space-x-2">
              {['all', 'in-progress', 'completed'].map((status) => (
                <button
                  key={status}
                  onClick={() => setFilter(status)}
                  className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                    filter === status
                      ? 'bg-leather-600 text-white'
                      : 'bg-leather-900/40 text-leather-300 hover:bg-leather-800/40'
                  }`}
                >
                  {status === 'all' ? 'All' : status === 'in-progress' ? 'In Progress' : 'Completed'}
                </button>
              ))}
            </div>
          </div>

          {/* Courses Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCourses.map((course) => (
              <div key={course.id} className="bg-gradient-to-br from-leather-900/40 to-dark-900/40 backdrop-blur-xl rounded-2xl overflow-hidden border border-leather-700/30 hover:border-leather-600/50 transition-all">
                <div className="relative">
                  <img
                    src={course.thumbnail}
                    alt={course.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 right-4">
                    {course.status === 'completed' ? (
                      <div className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm flex items-center space-x-1">
                        <CheckCircle className="w-4 h-4" />
                        <span>Completed</span>
                      </div>
                    ) : (
                      <div className="bg-leather-600/20 text-leather-300 px-3 py-1 rounded-full text-sm">
                        {course.progress}% Complete
                      </div>
                    )}
                  </div>
                </div>

                <div className="p-6">
                  <div className="mb-4">
                    <span className="text-leather-400 text-sm">{course.category}</span>
                    <h3 className="text-xl font-bold text-white mb-2">{course.title}</h3>
                    <p className="text-leather-300">by {course.instructor}</p>
                  </div>

                  <div className="flex items-center space-x-4 text-sm text-leather-400 mb-4">
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>{course.duration}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <BookOpen className="w-4 h-4" />
                      <span>{course.completedLessons}/{course.lessons} lessons</span>
                    </div>
                  </div>

                  {course.status === 'in-progress' && (
                    <div className="mb-4">
                      <div className="flex justify-between text-sm mb-2">
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
                  )}

                  <Link
                    href={`/course/${course.id}`}
                    className="w-full bg-leather-600 hover:bg-leather-700 text-white py-3 rounded-xl font-semibold transition-colors flex items-center justify-center space-x-2"
                  >
                    {course.status === 'completed' ? (
                      <>
                        <CheckCircle className="w-4 h-4" />
                        <span>Review Course</span>
                      </>
                    ) : (
                      <>
                        <Play className="w-4 h-4" />
                        <span>Continue Learning</span>
                      </>
                    )}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}