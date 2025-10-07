'use client';

import { useState } from 'react';
import Link from 'next/link';
import { 
  ArrowLeft, Calendar, Clock, Video, Phone, 
  Star, CheckCircle, CreditCard 
} from 'lucide-react';

export default function BookConsultationPage() {
  const [selectedConsultant, setSelectedConsultant] = useState<any>(null);
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [sessionType, setSessionType] = useState('video');
  const [topic, setTopic] = useState('');
  const [step, setStep] = useState(1);

  const consultants = [
    {
      id: 1,
      name: 'Adebayo Ogundimu',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=60&h=60&fit=crop&crop=face',
      rating: 4.9,
      expertise: 'Series A & B Funding',
      price: 75000,
      experience: '15+ years',
      sessions: 247,
      bio: 'Former Managing Partner at Lagos Ventures. Specialized in early-stage funding and investor relations.'
    },
    {
      id: 2,
      name: 'Chinedu Okwu',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=60&h=60&fit=crop&crop=face',
      rating: 4.8,
      expertise: 'Valuation & Due Diligence',
      price: 60000,
      experience: '12+ years',
      sessions: 189,
      bio: 'Senior Investment Analyst with expertise in startup valuation and market analysis.'
    },
    {
      id: 3,
      name: 'Fatima Al-Hassan',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=60&h=60&fit=crop&crop=face',
      rating: 4.9,
      expertise: 'Portfolio Management',
      price: 90000,
      experience: '18+ years',
      sessions: 312,
      bio: 'Portfolio Manager at Sahara Capital with extensive experience in risk management.'
    }
  ];

  const availableTimes = [
    '9:00 AM', '10:00 AM', '11:00 AM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM'
  ];

  const handleBooking = () => {
    // Handle booking logic here
    alert('Consultation booked successfully!');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-dark-950 to-leather-950">
      <section className="pt-32 pb-8">
        <div className="container mx-auto px-4">
          <Link 
            href="/consultants"
            className="inline-flex items-center space-x-2 text-leather-300 hover:text-white mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Consultants</span>
          </Link>

          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-white mb-2">Book a Consultation</h1>
            <p className="text-leather-200 mb-8">Get expert guidance from industry professionals</p>

            {/* Progress Steps */}
            <div className="flex items-center justify-center mb-8">
              <div className="flex items-center space-x-4">
                {[1, 2, 3].map((stepNum) => (
                  <div key={stepNum} className="flex items-center">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                      step >= stepNum ? 'bg-leather-600 text-white' : 'bg-leather-800 text-leather-400'
                    }`}>
                      {step > stepNum ? <CheckCircle className="w-4 h-4" /> : stepNum}
                    </div>
                    {stepNum < 3 && (
                      <div className={`w-16 h-1 mx-2 ${
                        step > stepNum ? 'bg-leather-600' : 'bg-leather-800'
                      }`}></div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Step 1: Select Consultant */}
            {step === 1 && (
              <div className="bg-gradient-to-br from-leather-900/40 to-dark-900/40 backdrop-blur-xl rounded-2xl p-6 border border-leather-700/30">
                <h2 className="text-2xl font-bold text-white mb-6">Choose Your Consultant</h2>
                
                <div className="space-y-4">
                  {consultants.map((consultant) => (
                    <div 
                      key={consultant.id}
                      onClick={() => setSelectedConsultant(consultant)}
                      className={`p-4 rounded-xl border cursor-pointer transition-all ${
                        selectedConsultant?.id === consultant.id
                          ? 'border-leather-500 bg-leather-600/20'
                          : 'border-leather-700/30 hover:border-leather-600/50'
                      }`}
                    >
                      <div className="flex items-start space-x-4">
                        <img
                          src={consultant.avatar}
                          alt={consultant.name}
                          className="w-16 h-16 rounded-full"
                        />
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-2">
                            <h3 className="text-xl font-bold text-white">{consultant.name}</h3>
                            <div className="text-right">
                              <div className="text-leather-200 font-semibold">₦{consultant.price.toLocaleString()}/hour</div>
                              <div className="flex items-center space-x-1">
                                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                                <span className="text-leather-300 text-sm">{consultant.rating}</span>
                              </div>
                            </div>
                          </div>
                          
                          <p className="text-leather-400 mb-2">{consultant.expertise}</p>
                          <p className="text-leather-300 text-sm mb-3">{consultant.bio}</p>
                          
                          <div className="flex items-center space-x-6 text-sm text-leather-400">
                            <span>{consultant.experience} experience</span>
                            <span>{consultant.sessions} sessions completed</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="flex justify-end mt-6">
                  <button
                    onClick={() => selectedConsultant && setStep(2)}
                    disabled={!selectedConsultant}
                    className="bg-leather-600 hover:bg-leather-700 disabled:bg-leather-800 disabled:text-leather-500 text-white px-6 py-3 rounded-xl font-semibold transition-colors"
                  >
                    Continue
                  </button>
                </div>
              </div>
            )}

            {/* Step 2: Select Date & Time */}
            {step === 2 && selectedConsultant && (
              <div className="bg-gradient-to-br from-leather-900/40 to-dark-900/40 backdrop-blur-xl rounded-2xl p-6 border border-leather-700/30">
                <h2 className="text-2xl font-bold text-white mb-6">Schedule Your Session</h2>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-white font-semibold mb-4">Select Date</h3>
                    <input
                      type="date"
                      value={selectedDate}
                      onChange={(e) => setSelectedDate(e.target.value)}
                      min={new Date().toISOString().split('T')[0]}
                      className="w-full p-3 bg-leather-900/40 border border-leather-700/30 rounded-xl text-white focus:outline-none focus:border-leather-500"
                    />
                  </div>

                  <div>
                    <h3 className="text-white font-semibold mb-4">Available Times</h3>
                    <div className="grid grid-cols-2 gap-2">
                      {availableTimes.map((time) => (
                        <button
                          key={time}
                          onClick={() => setSelectedTime(time)}
                          className={`p-2 rounded-lg text-sm transition-colors ${
                            selectedTime === time
                              ? 'bg-leather-600 text-white'
                              : 'bg-leather-800/20 text-leather-300 hover:bg-leather-700/30'
                          }`}
                        >
                          {time}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-6">
                  <h3 className="text-white font-semibold mb-4">Session Type</h3>
                  <div className="flex space-x-4">
                    <button
                      onClick={() => setSessionType('video')}
                      className={`flex items-center space-x-2 px-4 py-3 rounded-xl transition-colors ${
                        sessionType === 'video'
                          ? 'bg-leather-600 text-white'
                          : 'bg-leather-800/20 text-leather-300 hover:bg-leather-700/30'
                      }`}
                    >
                      <Video className="w-4 h-4" />
                      <span>Video Call</span>
                    </button>
                    <button
                      onClick={() => setSessionType('phone')}
                      className={`flex items-center space-x-2 px-4 py-3 rounded-xl transition-colors ${
                        sessionType === 'phone'
                          ? 'bg-leather-600 text-white'
                          : 'bg-leather-800/20 text-leather-300 hover:bg-leather-700/30'
                      }`}
                    >
                      <Phone className="w-4 h-4" />
                      <span>Phone Call</span>
                    </button>
                  </div>
                </div>

                <div className="mt-6">
                  <h3 className="text-white font-semibold mb-4">Session Topic</h3>
                  <textarea
                    value={topic}
                    onChange={(e) => setTopic(e.target.value)}
                    placeholder="Describe what you'd like to discuss..."
                    rows={3}
                    className="w-full p-3 bg-leather-900/40 border border-leather-700/30 rounded-xl text-white placeholder-leather-400 focus:outline-none focus:border-leather-500"
                  />
                </div>

                <div className="flex justify-between mt-6">
                  <button
                    onClick={() => setStep(1)}
                    className="bg-leather-700/30 hover:bg-leather-700/50 text-leather-200 px-6 py-3 rounded-xl font-semibold transition-colors"
                  >
                    Back
                  </button>
                  <button
                    onClick={() => selectedDate && selectedTime && setStep(3)}
                    disabled={!selectedDate || !selectedTime}
                    className="bg-leather-600 hover:bg-leather-700 disabled:bg-leather-800 disabled:text-leather-500 text-white px-6 py-3 rounded-xl font-semibold transition-colors"
                  >
                    Continue
                  </button>
                </div>
              </div>
            )}

            {/* Step 3: Confirm & Pay */}
            {step === 3 && selectedConsultant && (
              <div className="bg-gradient-to-br from-leather-900/40 to-dark-900/40 backdrop-blur-xl rounded-2xl p-6 border border-leather-700/30">
                <h2 className="text-2xl font-bold text-white mb-6">Confirm Your Booking</h2>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-white font-semibold mb-4">Session Details</h3>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-leather-300">Consultant:</span>
                        <span className="text-white">{selectedConsultant.name}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-leather-300">Date:</span>
                        <span className="text-white">{selectedDate}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-leather-300">Time:</span>
                        <span className="text-white">{selectedTime}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-leather-300">Type:</span>
                        <span className="text-white capitalize">{sessionType} Call</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-leather-300">Duration:</span>
                        <span className="text-white">60 minutes</span>
                      </div>
                    </div>

                    {topic && (
                      <div className="mt-4">
                        <h4 className="text-white font-semibold mb-2">Topic:</h4>
                        <p className="text-leather-300 text-sm">{topic}</p>
                      </div>
                    )}
                  </div>

                  <div>
                    <h3 className="text-white font-semibold mb-4">Payment Summary</h3>
                    <div className="bg-leather-800/20 rounded-xl p-4">
                      <div className="flex justify-between mb-2">
                        <span className="text-leather-300">Session Fee:</span>
                        <span className="text-white">₦{selectedConsultant.price.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between mb-2">
                        <span className="text-leather-300">Platform Fee:</span>
                        <span className="text-white">₦{(selectedConsultant.price * 0.05).toLocaleString()}</span>
                      </div>
                      <div className="border-t border-leather-700/30 pt-2 mt-2">
                        <div className="flex justify-between">
                          <span className="text-white font-semibold">Total:</span>
                          <span className="text-white font-semibold">₦{(selectedConsultant.price * 1.05).toLocaleString()}</span>
                        </div>
                      </div>
                    </div>

                    <button
                      onClick={handleBooking}
                      className="w-full mt-4 bg-green-600 hover:bg-green-700 text-white py-3 rounded-xl font-semibold transition-colors flex items-center justify-center space-x-2"
                    >
                      <CreditCard className="w-4 h-4" />
                      <span>Confirm & Pay</span>
                    </button>
                  </div>
                </div>

                <div className="flex justify-between mt-6">
                  <button
                    onClick={() => setStep(2)}
                    className="bg-leather-700/30 hover:bg-leather-700/50 text-leather-200 px-6 py-3 rounded-xl font-semibold transition-colors"
                  >
                    Back
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}