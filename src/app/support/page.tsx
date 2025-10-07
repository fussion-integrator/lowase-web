'use client';

import { useState } from 'react';
import { 
  MessageSquare, Phone, Calendar, Clock, 
  ArrowRight, CheckCircle, Users, Zap 
} from 'lucide-react';

export default function SupportPage() {
  const [selectedOption, setSelectedOption] = useState('chat');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    topic: '',
    message: '',
    urgency: 'normal'
  });

  const supportOptions = [
    {
      id: 'chat',
      title: 'Live Chat',
      subtitle: 'Get instant help',
      icon: MessageSquare,
      availability: 'Available now',
      responseTime: 'Immediate',
      description: 'Chat with our support team for quick answers to your questions.',
      color: 'green'
    },
    {
      id: 'call',
      title: 'Schedule a Call',
      subtitle: '15-minute consultation',
      icon: Phone,
      availability: 'Next available: Today 2:00 PM',
      responseTime: 'Same day',
      description: 'Book a free consultation call with our experts.',
      color: 'leather'
    },
    {
      id: 'callback',
      title: 'Request Callback',
      subtitle: 'We\'ll call you back',
      icon: Calendar,
      availability: 'Within 2 hours',
      responseTime: '< 2 hours',
      description: 'Leave your details and we\'ll call you at your preferred time.',
      color: 'blue'
    }
  ];

  const topics = [
    'General Inquiry',
    'Training Program Questions',
    'Consultant Booking',
    'Technical Support',
    'Billing & Payments',
    'Partnership Opportunities',
    'Other'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission based on selected option
    if (selectedOption === 'chat') {
      // Open live chat
      alert('Opening live chat...');
    } else if (selectedOption === 'call') {
      // Redirect to calendar booking
      alert('Redirecting to calendar...');
    } else {
      // Submit callback request
      alert('Callback request submitted!');
    }
  };

  const selectedOptionData = supportOptions.find(opt => opt.id === selectedOption);

  return (
    <div className="min-h-screen bg-gradient-to-b from-dark-950 to-leather-950">
      <section className="pt-32 pb-8">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
              Get Expert
              <span className="block bg-gradient-to-r from-leather-400 to-leather-600 bg-clip-text text-transparent">
                Support
              </span>
            </h1>
            <p className="text-xl text-leather-200 max-w-3xl mx-auto">
              Our team of experts is here to help you succeed. Choose how you'd like to connect with us.
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Left Column - Support Options */}
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-white mb-6">How can we help you?</h2>
                
                {supportOptions.map((option) => {
                  const Icon = option.icon;
                  return (
                    <div
                      key={option.id}
                      onClick={() => setSelectedOption(option.id)}
                      className={`p-6 rounded-2xl border-2 cursor-pointer transition-all duration-300 ${
                        selectedOption === option.id
                          ? 'border-leather-500 bg-leather-500/10 shadow-2xl'
                          : 'border-leather-800 bg-leather-900/20 hover:border-leather-700'
                      }`}
                    >
                      <div className="flex items-start space-x-4">
                        <div className={`p-3 rounded-xl ${
                          selectedOption === option.id ? 'bg-leather-600/20' : 'bg-leather-800/20'
                        }`}>
                          <Icon className={`w-6 h-6 ${
                            selectedOption === option.id ? 'text-leather-400' : 'text-leather-500'
                          }`} />
                        </div>
                        
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-2">
                            <h3 className="text-xl font-bold text-white">{option.title}</h3>
                            <div className={`px-3 py-1 rounded-full text-xs font-medium ${
                              option.color === 'green' ? 'bg-green-500/20 text-green-400' :
                              option.color === 'leather' ? 'bg-leather-500/20 text-leather-400' :
                              'bg-blue-500/20 text-blue-400'
                            }`}>
                              {option.responseTime}
                            </div>
                          </div>
                          
                          <p className="text-leather-300 mb-3">{option.subtitle}</p>
                          <p className="text-leather-400 text-sm mb-3">{option.description}</p>
                          
                          <div className="flex items-center space-x-2 text-sm">
                            <Clock className="w-4 h-4 text-leather-500" />
                            <span className="text-leather-400">{option.availability}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}

                {/* FAQ Quick Links */}
                <div className="bg-gradient-to-br from-leather-900/40 to-dark-900/40 backdrop-blur-xl rounded-2xl p-6 border border-leather-700/30">
                  <h3 className="text-white font-semibold mb-4">Quick Help</h3>
                  
                  <div className="space-y-3">
                    {[
                      'How do I start the training program?',
                      'How to book a consultation?',
                      'Payment and billing questions',
                      'Technical troubleshooting'
                    ].map((question, index) => (
                      <button
                        key={index}
                        className="w-full text-left text-leather-300 hover:text-white transition-colors text-sm"
                      >
                        {question}
                      </button>
                    ))}
                  </div>

                  <button className="w-full mt-4 bg-leather-700/30 hover:bg-leather-700/50 text-leather-200 py-2 rounded-lg transition-colors text-sm">
                    View All FAQs
                  </button>
                </div>

                {/* Team Stats */}
                <div className="bg-gradient-to-br from-leather-900/40 to-dark-900/40 backdrop-blur-xl rounded-2xl p-6 border border-leather-700/30">
                  <h3 className="text-white font-semibold mb-4">Our Support Team</h3>
                  
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-leather-400">&lt; 2min</div>
                      <div className="text-leather-300 text-sm">Avg Response</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-leather-400">98%</div>
                      <div className="text-leather-300 text-sm">Satisfaction</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column - Contact Form */}
              <div className="bg-gradient-to-br from-leather-900/40 to-dark-900/40 backdrop-blur-xl rounded-2xl p-8 border border-leather-700/30">
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {selectedOptionData?.title}
                  </h3>
                  <p className="text-leather-300">{selectedOptionData?.description}</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-leather-300 text-sm font-medium mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        className="w-full bg-leather-800/30 border border-leather-700 rounded-xl px-4 py-3 text-white placeholder-leather-400 focus:outline-none focus:border-leather-500"
                        placeholder="Your name"
                      />
                    </div>

                    <div>
                      <label className="block text-leather-300 text-sm font-medium mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        className="w-full bg-leather-800/30 border border-leather-700 rounded-xl px-4 py-3 text-white placeholder-leather-400 focus:outline-none focus:border-leather-500"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-leather-300 text-sm font-medium mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      className="w-full bg-leather-800/30 border border-leather-700 rounded-xl px-4 py-3 text-white placeholder-leather-400 focus:outline-none focus:border-leather-500"
                      placeholder="+234 xxx xxx xxxx"
                    />
                  </div>

                  <div>
                    <label className="block text-leather-300 text-sm font-medium mb-2">
                      Topic *
                    </label>
                    <select
                      required
                      value={formData.topic}
                      onChange={(e) => setFormData({...formData, topic: e.target.value})}
                      className="w-full bg-leather-800/30 border border-leather-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-leather-500"
                    >
                      <option value="">Select a topic</option>
                      {topics.map((topic) => (
                        <option key={topic} value={topic}>{topic}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-leather-300 text-sm font-medium mb-2">
                      Urgency Level
                    </label>
                    <div className="flex space-x-3">
                      {[
                        { id: 'low', label: 'Low', color: 'green' },
                        { id: 'normal', label: 'Normal', color: 'leather' },
                        { id: 'high', label: 'High', color: 'red' }
                      ].map((urgency) => (
                        <button
                          key={urgency.id}
                          type="button"
                          onClick={() => setFormData({...formData, urgency: urgency.id})}
                          className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                            formData.urgency === urgency.id
                              ? `bg-${urgency.color}-500/20 text-${urgency.color}-400 border border-${urgency.color}-500/50`
                              : 'bg-leather-800/20 text-leather-400 border border-leather-700/30 hover:bg-leather-700/20'
                          }`}
                        >
                          {urgency.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-leather-300 text-sm font-medium mb-2">
                      Message *
                    </label>
                    <textarea
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      rows={4}
                      className="w-full bg-leather-800/30 border border-leather-700 rounded-xl px-4 py-3 text-white placeholder-leather-400 focus:outline-none focus:border-leather-500"
                      placeholder="How can we help you?"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-leather-600 to-leather-700 text-white py-4 rounded-xl font-semibold hover:from-leather-700 hover:to-leather-800 transition-all duration-300 flex items-center justify-center space-x-2"
                  >
                    <span>
                      {selectedOption === 'chat' ? 'Start Live Chat' :
                       selectedOption === 'call' ? 'Schedule Call' : 'Request Callback'}
                    </span>
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </form>

                {/* Response Time Info */}
                <div className="mt-6 p-4 bg-leather-800/20 rounded-xl">
                  <div className="flex items-center space-x-2 mb-2">
                    <Zap className="w-5 h-5 text-leather-400" />
                    <span className="text-leather-300 font-semibold">Expected Response Time</span>
                  </div>
                  <p className="text-leather-400 text-sm">
                    {selectedOptionData?.responseTime} - We'll get back to you as soon as possible.
                  </p>
                </div>

                {/* Alternative Contact */}
                <div className="mt-6 pt-6 border-t border-leather-800">
                  <h4 className="text-white font-semibold mb-3">Other Ways to Reach Us</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center space-x-2">
                      <MessageSquare className="w-4 h-4 text-leather-400" />
                      <span className="text-leather-300">WhatsApp: +234 xxx xxx xxxx</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Users className="w-4 h-4 text-leather-400" />
                      <span className="text-leather-300">Community Forum: forum.lowase.com</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}