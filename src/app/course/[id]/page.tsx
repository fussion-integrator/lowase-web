'use client';

import { useState } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { 
  Play, CheckCircle, Clock, BookOpen, 
  Star, Users, Award, ArrowLeft, Lock 
} from 'lucide-react';

export default function CourseDetailPage() {
  const params = useParams();
  const courseId = params.id;

  const course = {
    id: courseId,
    title: 'Startup Valuation Mastery',
    instructor: {
      name: 'Chinedu Okwu',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=60&h=60&fit=crop&crop=face',
      bio: 'Senior Partner at Lagos Ventures with 15+ years in VC',
      rating: 4.9
    },
    progress: 65,
    duration: '8h 30m',
    lessons: 24,
    completedLessons: 16,
    students: 1247,
    rating: 4.8,
    thumbnail: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&h=400&fit=crop',
    description: 'Master the art and science of startup valuation with comprehensive frameworks used by top-tier VC firms.',
    learningOutcomes: [
      'Apply DCF models to early-stage startups',
      'Use comparable company analysis effectively',
      'Understand risk-adjusted valuation methods',
      'Navigate pre-money and post-money calculations'
    ],
    modules: [
      {
        id: 1,
        title: 'Valuation Fundamentals',
        lessons: 6,
        duration: '2h 15m',
        completed: true,
        lessons_detail: [
          { id: 1, title: 'Introduction to Startup Valuation', duration: '15m', completed: true, current: false },
          { id: 2, title: 'Key Valuation Concepts', duration: '25m', completed: true, current: false },
          { id: 3, title: 'Discount Rate Calculation', duration: '25m', completed: false, current: true }
        ]
      },
      {
        id: 2,
        title: 'DCF Modeling Techniques',
        lessons: 8,
        duration: '3h 10m',
        completed: false,
        current: true,
        lessons_detail: [
          { id: 4, title: 'DCF Model Overview', duration: '20m', completed: false, current: false },
          { id: 5, title: 'Building Financial Projections', duration: '35m', completed: false, current: false }
        ]
      }
    ]
  };

  const currentLesson = course.modules
    .flatMap(module => module.lessons_detail)
    .find(lesson => lesson.current);

  return (
    <div className="min-h-screen bg-gradient-to-b from-dark-950 to-leather-950">
      <section className="pt-32 pb-8">
        <div className="container mx-auto px-4">
          <Link 
            href="/dashboard/courses"
            className="inline-flex items-center space-x-2 text-leather-300 hover:text-white mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to My Courses</span>
          </Link>

          <div className="grid lg:grid-cols-3 gap-8 mb-8">
            <div className="lg:col-span-2">
              <div className="relative rounded-2xl overflow-hidden mb-6">
                <img
                  src={course.thumbnail}
                  alt={course.title}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-6 left-6">
                  <h1 className="text-3xl font-bold text-white mb-2">{course.title}</h1>
                  <div className="flex items-center space-x-4 text-white/80">
                    <span>by {course.instructor.name}</span>
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span>{course.rating}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-leather-900/40 to-dark-900/40 backdrop-blur-xl rounded-2xl p-6 border border-leather-700/30">
                <div className="flex items-center space-x-6 mb-6">
                  <div className="flex items-center space-x-2">
                    <Clock className="w-5 h-5 text-leather-400" />
                    <span className="text-leather-200">{course.duration}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <BookOpen className="w-5 h-5 text-leather-400" />
                    <span className="text-leather-200">{course.lessons} lessons</span>
                  </div>
                </div>

                <p className="text-leather-200 mb-6">{course.description}</p>

                <div>
                  <h3 className="text-white font-semibold mb-3">What you'll learn:</h3>
                  <ul className="space-y-2">
                    {course.learningOutcomes.map((outcome, index) => (
                      <li key={index} className="flex items-start space-x-2">
                        <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                        <span className="text-leather-200">{outcome}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-gradient-to-br from-leather-900/40 to-dark-900/40 backdrop-blur-xl rounded-2xl p-6 border border-leather-700/30">
                <h3 className="text-white font-semibold mb-4">Your Progress</h3>
                
                <div className="mb-4">
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-leather-300">Course Progress</span>
                    <span className="text-white">{course.progress}%</span>
                  </div>
                  <div className="w-full bg-leather-800 rounded-full h-3">
                    <div 
                      className="bg-gradient-to-r from-leather-500 to-leather-600 h-3 rounded-full" 
                      style={{ width: `${course.progress}%` }}
                    ></div>
                  </div>
                </div>

                {currentLesson && (
                  <button className="w-full bg-leather-600 hover:bg-leather-700 text-white py-3 rounded-xl font-semibold transition-colors flex items-center justify-center space-x-2">
                    <Play className="w-4 h-4" />
                    <span>Continue: {currentLesson.title}</span>
                  </button>
                )}
              </div>

              <div className="bg-gradient-to-br from-leather-900/40 to-dark-900/40 backdrop-blur-xl rounded-2xl p-6 border border-leather-700/30">
                <h3 className="text-white font-semibold mb-4">Instructor</h3>
                
                <div className="flex items-center space-x-3 mb-4">
                  <img
                    src={course.instructor.avatar}
                    alt={course.instructor.name}
                    className="w-12 h-12 rounded-full"
                  />
                  <div>
                    <h4 className="text-white font-semibold">{course.instructor.name}</h4>
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-leather-300 text-sm">{course.instructor.rating}</span>
                    </div>
                  </div>
                </div>

                <p className="text-leather-200 text-sm">{course.instructor.bio}</p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-leather-900/40 to-dark-900/40 backdrop-blur-xl rounded-2xl border border-leather-700/30">
            <div className="p-6 border-b border-leather-700/30">
              <h2 className="text-2xl font-bold text-white">Course Content</h2>
            </div>

            <div className="p-6">
              <div className="space-y-4">
                {course.modules.map((module) => (
                  <div key={module.id} className="border border-leather-700/30 rounded-xl overflow-hidden">
                    <div className={`p-4 ${module.current ? 'bg-leather-600/20' : 'bg-leather-800/20'}`}>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          {module.completed ? (
                            <CheckCircle className="w-6 h-6 text-green-400" />
                          ) : module.current ? (
                            <Play className="w-6 h-6 text-leather-400" />
                          ) : (
                            <Lock className="w-6 h-6 text-leather-500" />
                          )}
                          <div>
                            <h3 className="text-white font-semibold">{module.title}</h3>
                            <p className="text-leather-300 text-sm">{module.lessons} lessons • {module.duration}</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {(module.completed || module.current) && (
                      <div className="p-4 space-y-2">
                        {module.lessons_detail.map((lesson) => (
                          <div key={lesson.id} className="flex items-center justify-between p-3 hover:bg-leather-800/20 rounded-lg transition-colors">
                            <div className="flex items-center space-x-3">
                              {lesson.completed ? (
                                <CheckCircle className="w-4 h-4 text-green-400" />
                              ) : lesson.current ? (
                                <Play className="w-4 h-4 text-leather-400" />
                              ) : (
                                <div className="w-4 h-4 border border-leather-500 rounded-full"></div>
                              )}
                              <span className={`${lesson.completed ? 'text-leather-200' : lesson.current ? 'text-white font-medium' : 'text-leather-400'}`}>
                                {lesson.title}
                              </span>
                            </div>
                            <span className="text-leather-400 text-sm">{lesson.duration}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}