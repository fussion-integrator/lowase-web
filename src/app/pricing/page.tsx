'use client';

import { useState } from 'react';
import { 
  Check, X, Star, Zap, Crown, Shield, Users, 
  BookOpen, MessageSquare, Award, TrendingUp, Target
} from 'lucide-react';

export default function PricingPage() {
  const [billingCycle, setBillingCycle] = useState('monthly');
  const [selectedPlan, setSelectedPlan] = useState('professional');

  const plans = [
    {
      id: 'starter',
      name: 'Starter',
      description: 'Perfect for beginners exploring VC',
      icon: BookOpen,
      price: { monthly: 29000, yearly: 290000 },
      originalPrice: { monthly: 39000, yearly: 390000 },
      features: [
        '5 courses access',
        '2 consultations/month',
        'Basic pitch analyzer',
        'Community access',
        'Mobile app',
        'Email support'
      ],
      limitations: [
        'No advanced courses',
        'No 1-on-1 mentoring',
        'No certificate downloads'
      ],
      popular: false,
      color: 'leather'
    },
    {
      id: 'professional',
      name: 'Professional',
      description: 'Most popular for serious learners',
      icon: Star,
      price: { monthly: 89000, yearly: 890000 },
      originalPrice: { monthly: 120000, yearly: 1200000 },
      features: [
        'All 47+ courses',
        '8 consultations/month',
        'Advanced pitch analyzer',
        'AI matching system',
        'Priority support',
        'Certificates',
        'Networking events',
        'Templates library',
        'Progress tracking'
      ],
      limitations: [],
      popular: true,
      color: 'green'
    },
    {
      id: 'enterprise',
      name: 'Enterprise',
      description: 'For teams and organizations',
      icon: Crown,
      price: { monthly: 250000, yearly: 2500000 },
      originalPrice: { monthly: 350000, yearly: 3500000 },
      features: [
        'Everything in Professional',
        'Unlimited consultations',
        'Custom training programs',
        'Dedicated account manager',
        'Team analytics',
        'White-label options',
        'API access',
        'Custom integrations',
        'On-site training'
      ],
      limitations: [],
      popular: false,
      color: 'purple'
    }
  ];

  const addOns = [
    {
      name: '1-on-1 Mentoring',
      description: 'Monthly mentoring sessions with VC experts',
      price: 45000,
      icon: Users
    },
    {
      name: 'Pitch Deck Review',
      description: 'Professional review of your pitch deck',
      price: 25000,
      icon: Target
    },
    {
      name: 'Fast-Track Certification',
      description: 'Accelerated certification program',
      price: 75000,
      icon: Award
    }
  ];

  const faqs = [
    {
      question: 'Can I switch plans anytime?',
      answer: 'Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately.'
    },
    {
      question: 'Is there a free trial?',
      answer: 'We offer a 7-day free trial for all plans. No credit card required to start.'
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept all major credit cards, bank transfers, and mobile money payments.'
    },
    {
      question: 'Do you offer refunds?',
      answer: 'Yes, we offer a 30-day money-back guarantee if you\'re not satisfied.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-dark-950 to-leather-950">
      {/* Hero Section */}
      <section className="pt-32 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center space-x-2 bg-leather-600/20 px-4 py-2 rounded-full mb-6">
              <TrendingUp className="w-4 h-4 text-leather-400" />
              <span className="text-leather-300 text-sm font-medium">Flexible Pricing</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6">
              Invest in Your
              <span className="block bg-gradient-to-r from-leather-400 to-leather-600 bg-clip-text text-transparent">
                VC Future
              </span>
            </h1>
            
            <p className="text-xl text-leather-200 mb-8 max-w-2xl mx-auto">
              Choose the perfect plan to accelerate your venture capital career. 
              All plans include access to our expert network and certification programs.
            </p>

            {/* Billing Toggle */}
            <div className="flex items-center justify-center space-x-4 mb-12">
              <span className={`text-sm ${billingCycle === 'monthly' ? 'text-white' : 'text-leather-400'}`}>
                Monthly
              </span>
              <button
                onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'yearly' : 'monthly')}
                className="relative w-14 h-7 bg-leather-800 rounded-full transition-colors focus:outline-none"
              >
                <div className={`absolute top-1 w-5 h-5 bg-leather-500 rounded-full transition-transform ${
                  billingCycle === 'yearly' ? 'translate-x-7' : 'translate-x-1'
                }`}></div>
              </button>
              <span className={`text-sm ${billingCycle === 'yearly' ? 'text-white' : 'text-leather-400'}`}>
                Yearly
              </span>
              <span className="bg-green-500/20 text-green-300 px-2 py-1 rounded-full text-xs font-semibold">
                Save 25%
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan) => {
              const Icon = plan.icon;
              return (
                <div
                  key={plan.id}
                  className={`relative bg-gradient-to-br from-leather-900/40 to-dark-900/40 backdrop-blur-xl rounded-2xl p-8 border transition-all duration-300 ${
                    plan.popular 
                      ? 'border-green-500/50 shadow-2xl scale-105' 
                      : 'border-leather-700/30 hover:border-leather-500/50'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-green-500 to-green-600 text-white px-6 py-2 rounded-full text-sm font-bold">
                        MOST POPULAR
                      </span>
                    </div>
                  )}

                  <div className="text-center mb-8">
                    <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl flex items-center justify-center ${
                      plan.color === 'green' ? 'bg-green-500/20' :
                      plan.color === 'purple' ? 'bg-purple-500/20' :
                      'bg-leather-500/20'
                    }`}>
                      <Icon className={`w-8 h-8 ${
                        plan.color === 'green' ? 'text-green-400' :
                        plan.color === 'purple' ? 'text-purple-400' :
                        'text-leather-400'
                      }`} />
                    </div>
                    
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-leather-300 mb-6">{plan.description}</p>
                    
                    <div className="mb-6">
                      <div className="text-4xl font-bold text-white mb-2">
                        ₦{(plan.price as any)[billingCycle].toLocaleString()}
                        <span className="text-lg text-leather-400 font-normal">
                          /{billingCycle === 'monthly' ? 'month' : 'year'}
                        </span>
                      </div>
                      {(plan.originalPrice as any)[billingCycle] > (plan.price as any)[billingCycle] && (
                        <div className="text-leather-400 line-through">
                          ₦{(plan.originalPrice as any)[billingCycle].toLocaleString()}
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="space-y-4 mb-8">
                    {plan.features.map((feature, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <Check className="w-5 h-5 text-green-400 flex-shrink-0" />
                        <span className="text-leather-200">{feature}</span>
                      </div>
                    ))}
                    
                    {plan.limitations.map((limitation, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <X className="w-5 h-5 text-red-400 flex-shrink-0" />
                        <span className="text-leather-400">{limitation}</span>
                      </div>
                    ))}
                  </div>

                  <button
                    onClick={() => setSelectedPlan(plan.id)}
                    className={`w-full py-4 rounded-xl font-semibold transition-all duration-300 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-green-500 to-green-600 text-white hover:from-green-600 hover:to-green-700'
                        : 'bg-leather-600 hover:bg-leather-700 text-white'
                    }`}
                  >
                    {selectedPlan === plan.id ? 'Selected Plan' : 'Choose Plan'}
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Add-ons */}
      <section className="py-16 border-t border-leather-800/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Enhance Your Experience</h2>
              <p className="text-leather-200">Optional add-ons to supercharge your learning journey</p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {addOns.map((addon, index) => {
                const Icon = addon.icon;
                return (
                  <div key={index} className="bg-gradient-to-br from-leather-900/40 to-dark-900/40 backdrop-blur-xl rounded-2xl p-6 border border-leather-700/30">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="w-12 h-12 bg-leather-500/20 rounded-xl flex items-center justify-center">
                        <Icon className="w-6 h-6 text-leather-400" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-white">{addon.name}</h3>
                        <p className="text-leather-300 text-sm">{addon.description}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold text-white">₦{addon.price.toLocaleString()}</span>
                      <button className="bg-leather-600 hover:bg-leather-700 text-white px-4 py-2 rounded-lg transition-colors">
                        Add
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 border-t border-leather-800/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Frequently Asked Questions</h2>
            </div>

            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-gradient-to-br from-leather-900/40 to-dark-900/40 backdrop-blur-xl rounded-2xl p-6 border border-leather-700/30">
                  <h3 className="text-lg font-bold text-white mb-3">{faq.question}</h3>
                  <p className="text-leather-200">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-r from-leather-900/20 to-dark-900/20 backdrop-blur-xl rounded-2xl p-12 border border-leather-700/30">
              <h2 className="text-3xl font-bold text-white mb-4">Ready to Start Your VC Journey?</h2>
              <p className="text-leather-200 mb-8">Join 2,847+ professionals who've transformed their careers with Lowase</p>
              <button className="bg-gradient-to-r from-leather-600 to-leather-700 text-white px-8 py-4 rounded-xl font-semibold hover:from-leather-700 hover:to-leather-800 transition-all duration-300">
                Start Free Trial
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}