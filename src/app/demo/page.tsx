'use client';

import { useState } from 'react';
import { Play, Pause, Volume2, Maximize, ArrowRight, CheckCircle } from 'lucide-react';

export default function DemoPage() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentVideo, setCurrentVideo] = useState(0);

  const demoVideos = [
    {
      title: 'Platform Overview',
      duration: '3:45',
      thumbnail: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=600&h=400&fit=crop',
      description: 'Get a complete walkthrough of the Lowase platform and its key features.'
    },
    {
      title: 'Training Experience',
      duration: '5:20',
      thumbnail: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&h=400&fit=crop',
      description: 'See how our comprehensive VC training program works in action.'
    },
    {
      title: 'Consultant Marketplace',
      duration: '4:15',
      thumbnail: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop',
      description: 'Discover how startups connect with expert VC consultants.'
    },
    {
      title: 'Success Stories',
      duration: '6:30',
      thumbnail: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop',
      description: 'Real stories from successful consultants and funded startups.'
    }
  ];

  const features = [
    'Interactive VC training modules',
    'Real-time consultant matching',
    'AI-powered pitch optimization',
    'Secure payment processing',
    'Multi-language support',
    'Mobile-first design'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-dark-950 to-leather-950">
      <section className="pt-32 pb-8">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
              See Lowase in
              <span className="block bg-gradient-to-r from-leather-400 to-leather-600 bg-clip-text text-transparent">
                Action
              </span>
            </h1>
            <p className="text-xl text-leather-200 max-w-3xl mx-auto">
              Watch our interactive demo to see how Lowase is transforming VC education 
              and startup funding across Nigeria.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Video Player */}
            <div className="lg:col-span-2">
              <div className="bg-gradient-to-br from-leather-900/40 to-dark-900/40 backdrop-blur-xl rounded-2xl overflow-hidden border border-leather-700/30">
                <div className="relative aspect-video bg-black">
                  <img
                    src={demoVideos[currentVideo].thumbnail}
                    alt={demoVideos[currentVideo].title}
                    className="w-full h-full object-cover"
                  />
                  
                  {/* Video Controls Overlay */}
                  <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                    <button
                      onClick={() => setIsPlaying(!isPlaying)}
                      className="w-20 h-20 bg-leather-600 hover:bg-leather-700 rounded-full flex items-center justify-center transition-colors"
                    >
                      {isPlaying ? (
                        <Pause className="w-8 h-8 text-white" />
                      ) : (
                        <Play className="w-8 h-8 text-white ml-1" />
                      )}
                    </button>
                  </div>

                  {/* Video Controls Bar */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                    <div className="flex items-center justify-between text-white">
                      <div className="flex items-center space-x-4">
                        <button onClick={() => setIsPlaying(!isPlaying)}>
                          {isPlaying ? (
                            <Pause className="w-5 h-5" />
                          ) : (
                            <Play className="w-5 h-5" />
                          )}
                        </button>
                        <Volume2 className="w-5 h-5" />
                        <span className="text-sm">0:00 / {demoVideos[currentVideo].duration}</span>
                      </div>
                      <Maximize className="w-5 h-5" />
                    </div>
                    
                    {/* Progress Bar */}
                    <div className="w-full bg-white/20 rounded-full h-1 mt-2">
                      <div className="bg-leather-500 h-1 rounded-full" style={{ width: '25%' }}></div>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {demoVideos[currentVideo].title}
                  </h3>
                  <p className="text-leather-200 mb-4">
                    {demoVideos[currentVideo].description}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-leather-400">Duration: {demoVideos[currentVideo].duration}</span>
                    <button className="bg-leather-600 hover:bg-leather-700 text-white px-4 py-2 rounded-lg transition-colors">
                      Watch Full Demo
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Video Playlist & Features */}
            <div className="space-y-6">
              {/* Video Playlist */}
              <div className="bg-gradient-to-br from-leather-900/40 to-dark-900/40 backdrop-blur-xl rounded-2xl p-6 border border-leather-700/30">
                <h3 className="text-xl font-bold text-white mb-4">Demo Playlist</h3>
                
                <div className="space-y-3">
                  {demoVideos.map((video, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentVideo(index)}
                      className={`w-full text-left p-3 rounded-xl transition-colors ${
                        currentVideo === index
                          ? 'bg-leather-600/20 border border-leather-500'
                          : 'hover:bg-leather-800/20'
                      }`}
                    >
                      <div className="flex items-center space-x-3">
                        <img
                          src={video.thumbnail}
                          alt={video.title}
                          className="w-12 h-8 rounded object-cover"
                        />
                        <div className="flex-1">
                          <h4 className="text-white font-medium text-sm">{video.title}</h4>
                          <p className="text-leather-400 text-xs">{video.duration}</p>
                        </div>
                        {currentVideo === index && (
                          <Play className="w-4 h-4 text-leather-400" />
                        )}
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Key Features */}
              <div className="bg-gradient-to-br from-leather-900/40 to-dark-900/40 backdrop-blur-xl rounded-2xl p-6 border border-leather-700/30">
                <h3 className="text-xl font-bold text-white mb-4">What You'll See</h3>
                
                <div className="space-y-3">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-leather-400 flex-shrink-0" />
                      <span className="text-leather-200 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                <button className="w-full mt-6 bg-leather-600 hover:bg-leather-700 text-white py-3 rounded-xl font-semibold transition-colors flex items-center justify-center space-x-2">
                  <span>Start Free Trial</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              {/* Stats */}
              <div className="bg-gradient-to-br from-leather-900/40 to-dark-900/40 backdrop-blur-xl rounded-2xl p-6 border border-leather-700/30">
                <h3 className="text-xl font-bold text-white mb-4">Platform Stats</h3>
                
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-leather-300">Active Users</span>
                    <span className="text-white font-semibold">2,847</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-leather-300">Funding Raised</span>
                    <span className="text-white font-semibold">₦45.2B</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-leather-300">Success Rate</span>
                    <span className="text-white font-semibold">89%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-leather-300">Avg. Time to Fund</span>
                    <span className="text-white font-semibold">6 weeks</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-16 text-center">
            <div className="bg-gradient-to-br from-leather-900/40 to-dark-900/40 backdrop-blur-xl rounded-2xl p-8 border border-leather-700/30 max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-white mb-4">
                Ready to Get Started?
              </h2>
              <p className="text-leather-200 mb-6">
                Join thousands of Nigerians transforming their careers and businesses with Lowase.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-leather-600 to-leather-700 text-white px-8 py-4 rounded-xl font-semibold hover:from-leather-700 hover:to-leather-800 transition-all duration-300 flex items-center justify-center space-x-2">
                  <span>Start Your Journey</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
                
                <button className="border-2 border-leather-600 text-leather-300 px-8 py-4 rounded-xl font-semibold hover:bg-leather-600/10 transition-all duration-300">
                  Schedule a Call
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}