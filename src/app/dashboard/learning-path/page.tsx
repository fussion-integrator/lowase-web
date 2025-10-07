'use client';

import Link from 'next/link';
import { CheckCircle, Clock, BookOpen, Award, Target, ArrowLeft } from 'lucide-react';

export default function LearningPathPage() {
  const learningPath = {
    name: 'VC Professional Track',
    description: 'Complete certification program for venture capital professionals',
    totalCourses: 8,
    completedCourses: 3,
    estimatedCompletion: '6 weeks',
    nextMilestone: 'Due Diligence Certification',
    overallProgress: 85,
    courses: [
      {
        id: 1,
        title: 'VC Fundamentals',
        status: 'completed',
        progress: 100,
        duration: '4h 20m',
        certificate: true,
        completedDate: '2024-01-15'
      },
      {
        id: 2,
        title: 'Market Analysis & Research',
        status: 'completed',
        progress: 100,
        duration: '5h 15m',
        certificate: true,
        completedDate: '2024-01-22'
      },
      {
        id: 3,
        title: 'Advanced Due Diligence',
        status: 'completed',
        progress: 100,
        duration: '5h 45m',
        certificate: true,
        completedDate: '2024-01-28'
      },
      {
        id: 4,
        title: 'Startup Valuation Mastery',
        status: 'in-progress',
        progress: 65,
        duration: '8h 30m',
        certificate: false,
        estimatedCompletion: '3 days'
      },
      {
        id: 5,
        title: 'Portfolio Management Strategies',
        status: 'in-progress',
        progress: 30,
        duration: '6h 15m',
        certificate: false,
        estimatedCompletion: '1 week'
      },
      {
        id: 6,
        title: 'Legal & Regulatory Framework',
        status: 'locked',
        progress: 0,
        duration: '4h 45m',
        certificate: false,
        prerequisite: 'Complete Valuation Mastery'
      },
      {
        id: 7,
        title: 'Exit Strategies & IPOs',
        status: 'locked',
        progress: 0,
        duration: '6h 30m',
        certificate: false,
        prerequisite: 'Complete Portfolio Management'
      },
      {
        id: 8,
        title: 'Advanced Investment Thesis',
        status: 'locked',
        progress: 0,
        duration: '7h 20m',
        certificate: false,
        prerequisite: 'Complete all previous courses'
      }
    ],
    milestones: [
      {
        name: 'VC Fundamentals Certificate',
        completed: true,
        date: '2024-01-15',
        courses: ['VC Fundamentals']
      },
      {
        name: 'Market Research Specialist',
        completed: true,
        date: '2024-01-22',
        courses: ['Market Analysis & Research']
      },
      {
        name: 'Due Diligence Expert',
        completed: true,
        date: '2024-01-28',
        courses: ['Advanced Due Diligence']
      },
      {
        name: 'Valuation Specialist',
        completed: false,
        courses: ['Startup Valuation Mastery'],
        progress: 65
      },
      {
        name: 'Portfolio Manager',
        completed: false,
        courses: ['Portfolio Management Strategies'],
        progress: 30
      },
      {
        name: 'VC Professional Certification',
        completed: false,
        courses: ['All 8 courses'],
        progress: 37.5
      }
    ]
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-dark-950 to-leather-950">
      <section className="pt-32 pb-8">
        <div className="container mx-auto px-4">
          <Link 
            href="/dashboard"
            className="inline-flex items-center space-x-2 text-leather-300 hover:text-white mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Dashboard</span>
          </Link>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h1 className="text-4xl font-bold text-white mb-2">{learningPath.name}</h1>
                <p className="text-leather-200 mb-6">{learningPath.description}</p>

                <div className="bg-gradient-to-br from-leather-900/40 to-dark-900/40 backdrop-blur-xl rounded-2xl p-6 border border-leather-700/30 mb-8">
                  <div className="grid grid-cols-3 gap-6 mb-6">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-leather-400 mb-1">{learningPath.completedCourses}</div>
                      <div className="text-leather-300">Completed</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-leather-400 mb-1">{learningPath.estimatedCompletion}</div>
                      <div className="text-leather-300">Est. Completion</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-leather-400 mb-1">{learningPath.overallProgress}%</div>
                      <div className="text-leather-300">Overall Progress</div>
                    </div>
                  </div>

                  <div className="mb-4">
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-leather-300">Path Progress</span>
                      <span className="text-white">{learningPath.overallProgress}%</span>
                    </div>
                    <div className="w-full bg-leather-800 rounded-full h-3">
                      <div 
                        className="bg-gradient-to-r from-leather-500 to-leather-600 h-3 rounded-full" 
                        style={{ width: `${learningPath.overallProgress}%` }}
                      ></div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-leather-300 text-sm">Next Milestone</div>
                      <div className="text-white font-semibold">{learningPath.nextMilestone}</div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Target className="w-5 h-5 text-leather-400" />
                      <span className="text-leather-300">Track Progress</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-leather-900/40 to-dark-900/40 backdrop-blur-xl rounded-2xl border border-leather-700/30">
                <div className="p-6 border-b border-leather-700/30">
                  <h2 className="text-2xl font-bold text-white">Course Progression</h2>
                </div>

                <div className="p-6">
                  <div className="space-y-4">
                    {learningPath.courses.map((course, index) => (
                      <div key={course.id} className={`p-4 rounded-xl border transition-all ${
                        course.status === 'completed' ? 'bg-green-500/10 border-green-500/30' :
                        course.status === 'in-progress' ? 'bg-leather-600/20 border-leather-600/50' :
                        'bg-leather-800/20 border-leather-700/30'
                      }`}>
                        <div className="flex items-center justify-between mb-3">
                          <div className="flex items-center space-x-4">
                            <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                              course.status === 'completed' ? 'bg-green-500 text-white' :
                              course.status === 'in-progress' ? 'bg-leather-600 text-white' :
                              'bg-leather-700 text-leather-300'
                            }`}>
                              {course.status === 'completed' ? <CheckCircle className="w-4 h-4" /> : index + 1}
                            </div>
                            <div>
                              <h3 className="text-white font-semibold">{course.title}</h3>
                              <div className="flex items-center space-x-4 text-sm text-leather-300">
                                <div className="flex items-center space-x-1">
                                  <Clock className="w-4 h-4" />
                                  <span>{course.duration}</span>
                                </div>
                                {course.certificate && (
                                  <div className="flex items-center space-x-1">
                                    <Award className="w-4 h-4" />
                                    <span>Certificate</span>
                                  </div>
                                )}
                              </div>
                            </div>
                          </div>

                          <div className="text-right">
                            {course.status === 'completed' && (
                              <div>
                                <span className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm">
                                  Completed
                                </span>
                                <div className="text-leather-400 text-xs mt-1">
                                  {course.completedDate}
                                </div>
                              </div>
                            )}
                            {course.status === 'in-progress' && (
                              <div>
                                <span className="text-white font-semibold">{course.progress}%</span>
                                <div className="text-leather-400 text-xs mt-1">
                                  Est. {course.estimatedCompletion}
                                </div>
                              </div>
                            )}
                            {course.status === 'locked' && (
                              <div>
                                <span className="bg-leather-700/30 text-leather-400 px-3 py-1 rounded-full text-sm">
                                  Locked
                                </span>
                                <div className="text-leather-500 text-xs mt-1">
                                  {course.prerequisite}
                                </div>
                              </div>
                            )}
                          </div>
                        </div>

                        {course.status === 'in-progress' && (
                          <div className="mb-3">
                            <div className="w-full bg-leather-800 rounded-full h-2">
                              <div 
                                className="bg-leather-500 h-2 rounded-full" 
                                style={{ width: `${course.progress}%` }}
                              ></div>
                            </div>
                          </div>
                        )}

                        <div className="flex justify-between items-center">
                          <div className="text-leather-400 text-sm">
                            Course {index + 1} of {learningPath.totalCourses}
                          </div>
                          {course.status !== 'locked' && (
                            <Link
                              href={`/course/${course.id}`}
                              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                                course.status === 'completed' 
                                  ? 'bg-green-600 hover:bg-green-700 text-white'
                                  : 'bg-leather-600 hover:bg-leather-700 text-white'
                              }`}
                            >
                              {course.status === 'completed' ? 'Review' : 'Continue'}
                            </Link>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-gradient-to-br from-leather-900/40 to-dark-900/40 backdrop-blur-xl rounded-2xl p-6 border border-leather-700/30">
                <h3 className="text-xl font-bold text-white mb-6">Milestones</h3>
                
                <div className="space-y-4">
                  {learningPath.milestones.map((milestone, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className={`w-6 h-6 rounded-full flex items-center justify-center mt-1 ${
                        milestone.completed ? 'bg-green-500' : 'bg-leather-700'
                      }`}>
                        {milestone.completed ? (
                          <CheckCircle className="w-4 h-4 text-white" />
                        ) : (
                          <div className="w-2 h-2 bg-leather-400 rounded-full"></div>
                        )}
                      </div>
                      <div className="flex-1">
                        <h4 className={`font-semibold ${milestone.completed ? 'text-green-400' : 'text-white'}`}>
                          {milestone.name}
                        </h4>
                        <p className="text-leather-300 text-sm">
                          {Array.isArray(milestone.courses) ? milestone.courses.join(', ') : milestone.courses}
                        </p>
                        {milestone.completed && milestone.date && (
                          <p className="text-leather-400 text-xs mt-1">Earned {milestone.date}</p>
                        )}
                        {!milestone.completed && milestone.progress && (
                          <div className="mt-2">
                            <div className="w-full bg-leather-800 rounded-full h-1">
                              <div 
                                className="bg-leather-500 h-1 rounded-full" 
                                style={{ width: `${milestone.progress}%` }}
                              ></div>
                            </div>
                            <p className="text-leather-400 text-xs mt-1">{milestone.progress}% complete</p>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-br from-leather-900/40 to-dark-900/40 backdrop-blur-xl rounded-2xl p-6 border border-leather-700/30">
                <h3 className="text-xl font-bold text-white mb-4">Quick Actions</h3>
                
                <div className="space-y-3">
                  <Link
                    href="/dashboard/courses"
                    className="w-full bg-leather-600 hover:bg-leather-700 text-white py-3 rounded-lg transition-colors flex items-center justify-center space-x-2"
                  >
                    <BookOpen className="w-4 h-4" />
                    <span>View All Courses</span>
                  </Link>
                  <Link
                    href="/training"
                    className="w-full bg-leather-700/30 hover:bg-leather-700/50 text-leather-200 py-3 rounded-lg transition-colors flex items-center justify-center space-x-2"
                  >
                    <Target className="w-4 h-4" />
                    <span>Explore Other Paths</span>
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