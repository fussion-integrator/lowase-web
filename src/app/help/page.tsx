'use client';

import { useState } from 'react';
import { 
  Search, HelpCircle, MessageSquare, Book, 
  Phone, Mail, ChevronDown, CheckCircle
} from 'lucide-react';

export default function HelpPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('getting-started');

  const categories = [
    { id: 'getting-started', name: 'Getting Started', icon: Book },
    { id: 'courses', name: 'Courses & Learning', icon: Book },
    { id: 'consultations', name: 'Consultations', icon: MessageSquare },
    { id: 'billing', name: 'Billing & Payments', icon: CheckCircle },
    { id: 'technical', name: 'Technical Support', icon: HelpCircle }
  ];

  const faqs = {
    'getting-started': [
      {
        question: 'How do I create an account?',
        answer: 'Click "Get Started" and choose your role (learner, entrepreneur, consultant, or investor). Fill in your details and verify your email to activate your account.'
      },
      {
        question: 'What\'s included in the free trial?',
        answer: 'The 7-day free trial includes access to 5 courses, 2 consultant sessions, and all platform features. No credit card required.'
      }
    ],
    courses: [
      {
        question: 'How do I enroll in a course?',
        answer: 'Browse our course catalog, select a course, and click "Enroll Now". You\'ll have lifetime access to course materials.'
      },
      {
        question: 'Can I download course materials?',
        answer: 'Yes, all course materials including videos, PDFs, and templates can be downloaded for offline access.'
      }
    ],
    consultations: [
      {
        question: 'How do I book a consultation?',
        answer: 'Browse consultants, select one that matches your needs, and book an available time slot. You\'ll receive a confirmation email with meeting details.'
      }
    ],
    billing: [
      {
        question: 'What payment methods do you accept?',
        answer: 'We accept all major credit cards, bank transfers, and mobile money payments including Paystack and Flutterwave.'
      }
    ],
    technical: [
      {
        question: 'I\'m having trouble accessing my account',
        answer: 'Try resetting your password first. If the issue persists, contact our support team at support@lowase.ng'
      }
    ]
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-dark-950 to-leather-950">
      <section className="pt-32 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center space-x-2 bg-leather-600/20 px-4 py-2 rounded-full mb-6">
              <HelpCircle className="w-4 h-4 text-leather-400" />
              <span className="text-leather-300 text-sm font-medium">Help Center</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6">
              How Can We
              <span className="block bg-gradient-to-r from-leather-400 to-leather-600 bg-clip-text text-transparent">
                Help You?
              </span>
            </h1>
            
            <p className="text-xl text-leather-200 mb-8">
              Find answers to common questions or get in touch with our support team.
            </p>

            <div className="relative max-w-2xl mx-auto mb-12">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-leather-400" />
              <input
                type="text"
                placeholder="Search for help articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-leather-800/30 border border-leather-700 rounded-2xl pl-12 pr-4 py-4 text-white placeholder-leather-400 focus:outline-none focus:border-leather-500"
              />
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-leather-900/40 to-dark-900/40 backdrop-blur-xl rounded-2xl p-6 border border-leather-700/30">
                <MessageSquare className="w-12 h-12 text-leather-400 mx-auto mb-4" />
                <h3 className="text-lg font-bold text-white mb-2">Live Chat</h3>
                <p className="text-leather-300 text-sm mb-4">Get instant help from our support team</p>
                <button className="w-full bg-leather-600 hover:bg-leather-700 text-white py-2 rounded-lg transition-colors">
                  Start Chat
                </button>
              </div>
              
              <div className="bg-gradient-to-br from-leather-900/40 to-dark-900/40 backdrop-blur-xl rounded-2xl p-6 border border-leather-700/30">
                <Mail className="w-12 h-12 text-leather-400 mx-auto mb-4" />
                <h3 className="text-lg font-bold text-white mb-2">Email Support</h3>
                <p className="text-leather-300 text-sm mb-4">Send us a detailed message</p>
                <button className="w-full bg-leather-600 hover:bg-leather-700 text-white py-2 rounded-lg transition-colors">
                  Send Email
                </button>
              </div>
              
              <div className="bg-gradient-to-br from-leather-900/40 to-dark-900/40 backdrop-blur-xl rounded-2xl p-6 border border-leather-700/30">
                <Phone className="w-12 h-12 text-leather-400 mx-auto mb-4" />
                <h3 className="text-lg font-bold text-white mb-2">Phone Support</h3>
                <p className="text-leather-300 text-sm mb-4">Call us during business hours</p>
                <button className="w-full bg-leather-600 hover:bg-leather-700 text-white py-2 rounded-lg transition-colors">
                  Call Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 border-t border-leather-800/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Frequently Asked Questions</h2>
            
            <div className="grid lg:grid-cols-4 gap-8">
              <div className="space-y-2">
                {categories.map((category) => {
                  const Icon = category.icon;
                  return (
                    <button
                      key={category.id}
                      onClick={() => setActiveCategory(category.id)}
                      className={`w-full flex items-center space-x-3 p-4 rounded-xl transition-colors text-left ${
                        activeCategory === category.id
                          ? 'bg-leather-600 text-white'
                          : 'bg-leather-800/30 text-leather-300 hover:bg-leather-700/30'
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                      <span>{category.name}</span>
                    </button>
                  );
                })}
              </div>

              <div className="lg:col-span-3 space-y-4">
                {(faqs as any)[activeCategory]?.map((faq: any, index: number) => (
                  <div key={index} className="bg-gradient-to-br from-leather-900/40 to-dark-900/40 backdrop-blur-xl rounded-2xl p-6 border border-leather-700/30">
                    <h3 className="text-lg font-bold text-white mb-3">{faq.question}</h3>
                    <p className="text-leather-200">{faq.answer}</p>
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