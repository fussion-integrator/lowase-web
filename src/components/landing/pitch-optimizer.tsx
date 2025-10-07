'use client';

import { useState } from 'react';
import { 
  FileText, 
  Upload, 
  CheckCircle, 
  AlertCircle, 
  TrendingUp, 
  Users, 
  DollarSign,
  Clock,
  Play,
  Download,
  Star,
  Zap
} from 'lucide-react';

export default function PitchOptimizer() {
  const [activeTab, setActiveTab] = useState('analyzer');
  const [uploadProgress, setUploadProgress] = useState(0);
  const [analysisComplete, setAnalysisComplete] = useState(false);

  const pitchScores = {
    overall: 87,
    problem: 92,
    solution: 85,
    market: 78,
    business: 89,
    team: 94,
    financials: 82,
    ask: 88
  };

  const improvements = [
    {
      section: 'Market Size',
      priority: 'High',
      issue: 'Market size calculation needs more specific data',
      suggestion: 'Include TAM, SAM, SOM breakdown with Nigerian market focus',
      impact: '+12% funding probability'
    },
    {
      section: 'Financial Projections',
      priority: 'Medium',
      issue: 'Revenue projections seem optimistic',
      suggestion: 'Add conservative scenario and key assumptions',
      impact: '+8% investor confidence'
    },
    {
      section: 'Competition Analysis',
      priority: 'Medium',
      issue: 'Missing key competitors in Nigerian market',
      suggestion: 'Include local and international competitors',
      impact: '+6% credibility score'
    }
  ];

  const templates = [
    {
      name: 'Fintech Seed Pitch',
      description: 'Perfect for financial technology startups seeking seed funding',
      downloads: 1247,
      rating: 4.9,
      preview: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=300&h=200&fit=crop'
    },
    {
      name: 'AgTech Series A',
      description: 'Tailored for agricultural technology companies',
      downloads: 892,
      rating: 4.8,
      preview: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=300&h=200&fit=crop'
    },
    {
      name: 'EdTech Pitch Deck',
      description: 'Educational technology startup template',
      downloads: 1156,
      rating: 4.9,
      preview: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=300&h=200&fit=crop'
    }
  ];

  const successStories = [
    {
      company: 'TechPay Solutions',
      before: 'Rejected by 8 investors',
      after: '₦450M Series A in 3 months',
      improvement: '+340% pitch score'
    },
    {
      company: 'AgriConnect',
      before: 'Unclear value proposition',
      after: '₦280M seed funding',
      improvement: '+280% investor interest'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-dark-950 to-leather-950">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-leather-600/20 px-4 py-2 rounded-full mb-6">
            <FileText className="w-4 h-4 text-leather-400" />
            <span className="text-leather-300 text-sm font-medium">Pitch Optimization</span>
          </div>
          
          <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6">
            Perfect Your
            <span className="block bg-gradient-to-r from-leather-400 to-leather-600 bg-clip-text text-transparent">
              Investor Pitch
            </span>
          </h2>
          
          <p className="text-xl text-leather-200 max-w-3xl mx-auto">
            AI-powered pitch analysis, professional templates, and expert feedback 
            to maximize your funding success. Get investor-ready in days, not months.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="bg-leather-900/40 backdrop-blur-sm rounded-2xl p-2 border border-leather-700/30">
            {[
              { id: 'analyzer', label: 'Pitch Analyzer', icon: TrendingUp },
              { id: 'templates', label: 'Templates', icon: FileText },
              { id: 'success', label: 'Success Stories', icon: Star }
            ].map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center space-x-2 ${
                    activeTab === tab.id
                      ? 'bg-leather-600 text-white shadow-lg'
                      : 'text-leather-300 hover:text-white hover:bg-leather-700/20'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Pitch Analyzer Tab */}
        {activeTab === 'analyzer' && (
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Upload Section */}
              <div className="space-y-6">
                <div className="bg-gradient-to-br from-leather-900/40 to-dark-900/40 backdrop-blur-xl rounded-2xl p-8 border border-leather-700/30">
                  <h3 className="text-2xl font-bold text-white mb-6">Upload Your Pitch Deck</h3>
                  
                  <div className="border-2 border-dashed border-leather-600 rounded-xl p-8 text-center hover:border-leather-500 transition-colors cursor-pointer">
                    <Upload className="w-12 h-12 text-leather-400 mx-auto mb-4" />
                    <p className="text-white font-semibold mb-2">Drop your pitch deck here</p>
                    <p className="text-leather-300 text-sm mb-4">Supports PDF, PPT, PPTX up to 50MB</p>
                    <button className="bg-leather-600 hover:bg-leather-700 text-white px-6 py-2 rounded-lg transition-colors">
                      Choose File
                    </button>
                  </div>

                  {uploadProgress > 0 && (
                    <div className="mt-4">
                      <div className="flex justify-between text-sm mb-2">
                        <span className="text-leather-300">Analyzing...</span>
                        <span className="text-white">{uploadProgress}%</span>
                      </div>
                      <div className="w-full bg-leather-800 rounded-full h-2">
                        <div 
                          className="bg-leather-500 h-2 rounded-full transition-all duration-300"
                          style={{ width: `${uploadProgress}%` }}
                        ></div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Quick Analysis */}
                <div className="bg-gradient-to-br from-leather-900/20 to-dark-900/20 backdrop-blur-xl rounded-2xl p-6 border border-leather-700/30">
                  <h4 className="text-lg font-bold text-white mb-4">Quick Analysis Features</h4>
                  <div className="space-y-3">
                    {[
                      'AI-powered content analysis',
                      'Investor readiness score',
                      'Section-by-section feedback',
                      'Market comparison data',
                      'Funding probability estimate'
                    ].map((feature, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-leather-400" />
                        <span className="text-leather-200">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Analysis Results */}
              <div className="space-y-6">
                <div className="bg-gradient-to-br from-leather-900/40 to-dark-900/40 backdrop-blur-xl rounded-2xl p-8 border border-leather-700/30">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-2xl font-bold text-white">Pitch Score</h3>
                    <div className="text-4xl font-bold text-leather-400">{pitchScores.overall}/100</div>
                  </div>

                  <div className="space-y-4">
                    {Object.entries(pitchScores).filter(([key]) => key !== 'overall').map(([section, score]) => (
                      <div key={section} className="flex items-center justify-between">
                        <span className="text-leather-200 capitalize">{section.replace(/([A-Z])/g, ' $1')}</span>
                        <div className="flex items-center space-x-3">
                          <div className="w-24 bg-leather-800 rounded-full h-2">
                            <div 
                              className={`h-2 rounded-full ${
                                score >= 90 ? 'bg-green-500' : 
                                score >= 80 ? 'bg-leather-500' : 
                                score >= 70 ? 'bg-yellow-500' : 'bg-red-500'
                              }`}
                              style={{ width: `${score}%` }}
                            ></div>
                          </div>
                          <span className="text-white font-semibold w-8">{score}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Improvements */}
                <div className="bg-gradient-to-br from-leather-900/40 to-dark-900/40 backdrop-blur-xl rounded-2xl p-6 border border-leather-700/30">
                  <h4 className="text-lg font-bold text-white mb-4">Key Improvements</h4>
                  <div className="space-y-4">
                    {improvements.map((improvement, index) => (
                      <div key={index} className="border border-leather-700/30 rounded-xl p-4">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-white font-semibold">{improvement.section}</span>
                          <span className={`px-2 py-1 rounded text-xs font-semibold ${
                            improvement.priority === 'High' ? 'bg-red-500/20 text-red-300' :
                            improvement.priority === 'Medium' ? 'bg-yellow-500/20 text-yellow-300' :
                            'bg-green-500/20 text-green-300'
                          }`}>
                            {improvement.priority}
                          </span>
                        </div>
                        <p className="text-leather-300 text-sm mb-2">{improvement.suggestion}</p>
                        <div className="text-leather-400 text-sm font-semibold">{improvement.impact}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Templates Tab */}
        {activeTab === 'templates' && (
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              {templates.map((template, index) => (
                <div key={index} className="bg-gradient-to-br from-leather-900/40 to-dark-900/40 backdrop-blur-xl rounded-2xl p-6 border border-leather-700/30 hover:border-leather-500/50 transition-all duration-300">
                  <img
                    src={template.preview}
                    alt={template.name}
                    className="w-full h-40 object-cover rounded-xl mb-4"
                  />
                  
                  <h3 className="text-xl font-bold text-white mb-2">{template.name}</h3>
                  <p className="text-leather-300 text-sm mb-4">{template.description}</p>
                  
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-white font-semibold">{template.rating}</span>
                    </div>
                    <span className="text-leather-400 text-sm">{template.downloads} downloads</span>
                  </div>
                  
                  <div className="flex space-x-2">
                    <button className="flex-1 bg-leather-600 hover:bg-leather-700 text-white py-2 rounded-lg transition-colors flex items-center justify-center space-x-2">
                      <Download className="w-4 h-4" />
                      <span>Download</span>
                    </button>
                    <button className="bg-leather-700/30 hover:bg-leather-700/50 text-leather-200 px-4 py-2 rounded-lg transition-colors">
                      <Play className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Success Stories Tab */}
        {activeTab === 'success' && (
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {successStories.map((story, index) => (
                <div key={index} className="bg-gradient-to-br from-leather-900/40 to-dark-900/40 backdrop-blur-xl rounded-2xl p-8 border border-leather-700/30">
                  <div className="grid md:grid-cols-3 gap-6 items-center">
                    <div className="text-center">
                      <h3 className="text-xl font-bold text-white mb-2">{story.company}</h3>
                      <div className="text-red-400 font-semibold mb-2">Before</div>
                      <p className="text-leather-300">{story.before}</p>
                    </div>
                    
                    <div className="text-center">
                      <div className="w-16 h-16 bg-leather-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                        <TrendingUp className="w-8 h-8 text-leather-400" />
                      </div>
                      <div className="text-leather-400 font-bold text-lg">{story.improvement}</div>
                    </div>
                    
                    <div className="text-center">
                      <div className="text-green-400 font-semibold mb-2">After</div>
                      <p className="text-white font-bold text-lg">{story.after}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-leather-900/20 to-dark-900/20 backdrop-blur-xl rounded-2xl p-8 border border-leather-700/30 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Perfect Your Pitch?
            </h3>
            <p className="text-leather-200 mb-6">
              Join 1,834+ startups that have successfully raised funding with our platform.
            </p>
            <button className="bg-gradient-to-r from-leather-600 to-leather-700 text-white px-8 py-3 rounded-xl font-semibold hover:from-leather-700 hover:to-leather-800 transition-all duration-300 animate-pulse-glow">
              Start Free Analysis
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}