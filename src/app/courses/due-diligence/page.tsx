'use client';

import { useState } from 'react';
import { 
  Play, Clock, Users, Star, BookOpen, CheckCircle, 
  Lock, Download, Award, Target, Brain, Shield
} from 'lucide-react';

export default function DueDiligencePage() {
  const courseInfo = {
    title: 'Advanced Due Diligence Framework',
    instructor: 'Fatima Al-Hassan',
    rating: 4.8,
    reviews: 189,
    students: 1234,
    duration: '8 hours',
    lessons: 16,
    level: 'Advanced',
    price: 125000,
    originalPrice: 180000
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-dark-950 to-leather-950">
      <section className="pt-32 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center space-x-2 bg-leather-600/20 px-4 py-2 rounded-full mb-6">
              <Shield className="w-4 h-4 text-leather-400" />
              <span className="text-leather-300 text-sm font-medium">{courseInfo.level} Course</span>
            </div>
            
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">
              {courseInfo.title}
            </h1>
            
            <p className="text-xl text-leather-200 mb-8">
              Master professional due diligence processes used by top-tier VC firms. 
              Learn to evaluate startups with confidence and precision.
            </p>

            <div className="flex flex-wrap gap-6 justify-center mb-8">
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
            </div>

            <div className="bg-gradient-to-br from-leather-900/40 to-dark-900/40 backdrop-blur-xl rounded-2xl p-8 border border-leather-700/30 max-w-md mx-auto">
              <div className="text-3xl font-bold text-white mb-2">₦{courseInfo.price.toLocaleString()}</div>
              <div className="text-leather-400 line-through mb-4">₦{courseInfo.originalPrice.toLocaleString()}</div>
              <button className="w-full bg-gradient-to-r from-leather-600 to-leather-700 text-white py-4 rounded-xl font-semibold hover:from-leather-700 hover:to-leather-800 transition-all duration-300">
                Enroll Now
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}