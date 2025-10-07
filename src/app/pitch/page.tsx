'use client';

import { useState, useRef } from 'react';
import { 
  Upload, FileText, Play, Download, Star, TrendingUp, 
  CheckCircle, AlertCircle, Zap, Target, Brain, Award,
  BarChart3, PieChart, LineChart, Users, DollarSign
} from 'lucide-react';

export default function PitchPage() {
  const [activeTab, setActiveTab] = useState('analyzer');
  const [uploadProgress, setUploadProgress] = useState(0);
  const [analysisComplete, setAnalysisComplete] = useState(false);
  const [dragActive, setDragActive] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

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
    }
  ];

  const templates = [
    {
      name: 'Fintech Seed Pitch',
      description: 'Perfect for financial technology startups seeking seed funding',
      downloads: 1247,
      rating: 4.9,
      preview: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=300&h=200&fit=crop',
      slides: 12,
      category: 'fintech'
    },
    {
      name: 'AgTech Series A',
      description: 'Tailored for agricultural technology companies',
      downloads: 892,
      rating: 4.8,
      preview: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=300&h=200&fit=crop',
      slides: 15,
      category: 'agtech'
    },
    {
      name: 'EdTech Pitch Deck',
      description: 'Educational technology startup template',
      downloads: 1156,
      rating: 4.9,
      preview: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=300&h=200&fit=crop',
      slides: 14,
      category: 'edtech'
    }
  ];

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFile(e.dataTransfer.files[0]);
    }
  };

  const handleFile = (file: File) => {
    // Simulate upload progress
    let progress = 0;
    const interval = setInterval(() => {
      progress += 10;
      setUploadProgress(progress);
      if (progress >= 100) {
        clearInterval(interval);
        setTimeout(() => setAnalysisComplete(true), 1000);
      }
    }, 200);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-dark-950 to-leather-950">
      {/* Hero Section */}
      <section className="pt-32 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center space-x-2 bg-leather-600/20 px-4 py-2 rounded-full mb-6">
              <FileText className="w-4 h-4 text-leather-400" />
              <span className="text-leather-300 text-sm font-medium">Pitch Optimization</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6">
              Perfect Your
              <span className="block bg-gradient-to-r from-leather-400 to-leather-600 bg-clip-text text-transparent">
                Investor Pitch
              </span>
            </h1>
            
            <p className="text-xl text-leather-200 mb-8 max-w-2xl mx-auto">
              AI-powered pitch analysis, professional templates, and expert feedback 
              to maximize your funding success. Get investor-ready in days, not months.
            </p>

            {/* Quick Stats */}
            <div className="grid grid-cols-4 gap-6 max-w-3xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-leather-400 mb-2">1,834+</div>
                <div className="text-leather-300 text-sm">Pitches Analyzed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-leather-400 mb-2">340%</div>
                <div className="text-leather-300 text-sm">Avg Improvement</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-leather-400 mb-2">₦15B+</div>
                <div className="text-leather-300 text-sm">Funds Raised</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-leather-400 mb-2">92%</div>
                <div className="text-leather-300 text-sm">Success Rate</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tab Navigation */}
      <section className="py-8 border-t border-leather-800/30">
        <div className="container mx-auto px-4">
          <div className="flex justify-center">
            <div className="bg-leather-900/40 backdrop-blur-sm rounded-2xl p-2 border border-leather-700/30">
              {[
                { id: 'analyzer', label: 'AI Analyzer', icon: Brain },
                { id: 'templates', label: 'Templates', icon: FileText },
                { id: 'builder', label: 'Pitch Builder', icon: Zap }
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
        </div>
      </section>

      {/* AI Analyzer Tab */}
      {activeTab === 'analyzer' && (
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12">
                {/* Upload Section */}
                <div className="space-y-6">
                  <div className="bg-gradient-to-br from-leather-900/40 to-dark-900/40 backdrop-blur-xl rounded-2xl p-8 border border-leather-700/30">
                    <h3 className="text-2xl font-bold text-white mb-6">Upload Your Pitch Deck</h3>
                    
                    <div 
                      className={`border-2 border-dashed rounded-xl p-8 text-center transition-all duration-300 cursor-pointer ${
                        dragActive 
                          ? 'border-leather-500 bg-leather-600/10' 
                          : 'border-leather-600 hover:border-leather-500'
                      }`}
                      onDragEnter={handleDrag}
                      onDragLeave={handleDrag}
                      onDragOver={handleDrag}
                      onDrop={handleDrop}
                      onClick={() => fileInputRef.current?.click()}
                    >
                      <Upload className="w-12 h-12 text-leather-400 mx-auto mb-4" />
                      <p className="text-white font-semibold mb-2">Drop your pitch deck here</p>
                      <p className="text-leather-300 text-sm mb-4">Supports PDF, PPT, PPTX up to 50MB</p>
                      <button className="bg-leather-600 hover:bg-leather-700 text-white px-6 py-2 rounded-lg transition-colors">
                        Choose File
                      </button>
                      <input
                        ref={fileInputRef}
                        type="file"
                        className="hidden"
                        accept=".pdf,.ppt,.pptx"
                        onChange={(e) => e.target.files?.[0] && handleFile(e.target.files[0])}
                      />
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

                  {/* Analysis Features */}
                  <div className="bg-gradient-to-br from-leather-900/20 to-dark-900/20 backdrop-blur-xl rounded-2xl p-6 border border-leather-700/30">
                    <h4 className="text-lg font-bold text-white mb-4">AI Analysis Features</h4>
                    <div className="space-y-3">
                      {[
                        'Content structure analysis',
                        'Investor readiness score',
                        'Market size validation',
                        'Financial model review',
                        'Competitive positioning',
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
                  {analysisComplete ? (
                    <>
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

                      <div className="bg-gradient-to-br from-leather-900/40 to-dark-900/40 backdrop-blur-xl rounded-2xl p-6 border border-leather-700/30">
                        <h4 className="text-lg font-bold text-white mb-4">Key Improvements</h4>
                        <div className="space-y-4">
                          {improvements.map((improvement, index) => (
                            <div key={index} className="border border-leather-700/30 rounded-xl p-4">
                              <div className="flex items-center justify-between mb-2">
                                <span className="text-white font-semibold">{improvement.section}</span>
                                <span className={`px-2 py-1 rounded text-xs font-semibold ${
                                  improvement.priority === 'High' ? 'bg-red-500/20 text-red-300' :
                                  'bg-yellow-500/20 text-yellow-300'
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
                    </>
                  ) : (
                    <div className="bg-gradient-to-br from-leather-900/40 to-dark-900/40 backdrop-blur-xl rounded-2xl p-8 border border-leather-700/30 text-center">
                      <Brain className="w-16 h-16 text-leather-400 mx-auto mb-4" />
                      <h3 className="text-xl font-bold text-white mb-2">Ready to Analyze</h3>
                      <p className="text-leather-300">Upload your pitch deck to get instant AI-powered feedback and recommendations.</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Templates Tab */}
      {activeTab === 'templates' && (
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-white mb-4">Professional Pitch Templates</h2>
                <p className="text-leather-200 max-w-2xl mx-auto">
                  Choose from industry-specific templates designed by top VC professionals and proven to raise funding.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                {templates.map((template, index) => (
                  <div key={index} className="bg-gradient-to-br from-leather-900/40 to-dark-900/40 backdrop-blur-xl rounded-2xl overflow-hidden border border-leather-700/30 hover:border-leather-500/50 transition-all duration-300 group">
                    <div className="relative">
                      <img
                        src={template.preview}
                        alt={template.name}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-4 right-4">
                        <button className="bg-black/50 backdrop-blur-sm p-2 rounded-full text-white hover:bg-black/70 transition-colors">
                          <Play className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-white mb-2">{template.name}</h3>
                      <p className="text-leather-300 text-sm mb-4">{template.description}</p>
                      
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center space-x-1">
                          <Star className="w-4 h-4 text-yellow-400 fill-current" />
                          <span className="text-white font-semibold">{template.rating}</span>
                        </div>
                        <span className="text-leather-400 text-sm">{template.slides} slides</span>
                      </div>
                      
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-leather-400 text-sm">{template.downloads} downloads</span>
                        <span className="bg-leather-700/30 text-leather-200 px-2 py-1 rounded text-xs capitalize">
                          {template.category}
                        </span>
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
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Pitch Builder Tab */}
      {activeTab === 'builder' && (
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="bg-gradient-to-br from-leather-900/40 to-dark-900/40 backdrop-blur-xl rounded-2xl p-12 border border-leather-700/30">
                <Zap className="w-16 h-16 text-leather-400 mx-auto mb-6" />
                <h2 className="text-3xl font-bold text-white mb-4">Interactive Pitch Builder</h2>
                <p className="text-leather-200 mb-8 max-w-2xl mx-auto">
                  Build your pitch deck step-by-step with our guided builder. Get real-time feedback 
                  and suggestions as you create each slide.
                </p>
                <button className="bg-gradient-to-r from-leather-600 to-leather-700 text-white px-8 py-4 rounded-xl font-semibold hover:from-leather-700 hover:to-leather-800 transition-all duration-300">
                  Start Building Your Pitch
                </button>
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}