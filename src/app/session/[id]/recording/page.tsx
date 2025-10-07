'use client';

import { useState } from 'react';
import { useParams } from 'next/navigation';
import { Play, Pause, Volume2, Download, Share, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function RecordingPage() {
  const params = useParams();
  const sessionId = params.id;
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);

  const recording = {
    id: sessionId,
    title: 'Series A Preparation Strategy Session',
    consultant: 'Adebayo Ogundimu',
    date: '2024-02-10',
    duration: '01:32:45',
    thumbnail: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=450&fit=crop'
  };

  const notes = [
    { time: '00:05:30', note: 'Discussion on market positioning strategy' },
    { time: '00:15:20', note: 'Key metrics for Series A readiness' },
    { time: '00:28:45', note: 'Investor deck optimization tips' },
    { time: '00:45:10', note: 'Due diligence preparation checklist' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-dark-950 to-leather-950">
      <section className="pt-32 pb-8">
        <div className="container mx-auto px-4">
          <Link 
            href="/dashboard/consultations"
            className="inline-flex items-center space-x-2 text-leather-300 hover:text-white mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Consultations</span>
          </Link>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Video Player */}
            <div className="lg:col-span-2">
              <div className="bg-gradient-to-br from-leather-900/40 to-dark-900/40 backdrop-blur-xl rounded-2xl overflow-hidden border border-leather-700/30">
                <div className="relative aspect-video bg-black">
                  <img
                    src={recording.thumbnail}
                    alt={recording.title}
                    className="w-full h-full object-cover"
                  />
                  
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

                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                    <div className="flex items-center justify-between text-white mb-2">
                      <div className="flex items-center space-x-4">
                        <button onClick={() => setIsPlaying(!isPlaying)}>
                          {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
                        </button>
                        <Volume2 className="w-5 h-5" />
                        <span className="text-sm">00:15:30 / {recording.duration}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <button className="p-2 hover:bg-white/20 rounded">
                          <Download className="w-4 h-4" />
                        </button>
                        <button className="p-2 hover:bg-white/20 rounded">
                          <Share className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                    
                    <div className="w-full bg-white/20 rounded-full h-1">
                      <div className="bg-leather-500 h-1 rounded-full" style={{ width: '25%' }}></div>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <h1 className="text-2xl font-bold text-white mb-2">{recording.title}</h1>
                  <div className="flex items-center space-x-4 text-leather-300 mb-4">
                    <span>with {recording.consultant}</span>
                    <span>•</span>
                    <span>{recording.date}</span>
                    <span>•</span>
                    <span>{recording.duration}</span>
                  </div>
                  
                  <div className="flex space-x-4">
                    <button className="bg-leather-600 hover:bg-leather-700 text-white px-4 py-2 rounded-lg transition-colors flex items-center space-x-2">
                      <Download className="w-4 h-4" />
                      <span>Download</span>
                    </button>
                    <button className="border border-leather-600 text-leather-300 hover:bg-leather-600/10 px-4 py-2 rounded-lg transition-colors flex items-center space-x-2">
                      <Share className="w-4 h-4" />
                      <span>Share</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Session Notes & Timeline */}
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-leather-900/40 to-dark-900/40 backdrop-blur-xl rounded-2xl p-6 border border-leather-700/30">
                <h3 className="text-xl font-bold text-white mb-4">Session Notes</h3>
                
                <div className="space-y-4">
                  {notes.map((note, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <button 
                        className="text-leather-400 hover:text-leather-300 text-sm font-mono"
                        onClick={() => console.log('Jump to', note.time)}
                      >
                        {note.time}
                      </button>
                      <p className="text-leather-200 text-sm flex-1">{note.note}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-br from-leather-900/40 to-dark-900/40 backdrop-blur-xl rounded-2xl p-6 border border-leather-700/30">
                <h3 className="text-xl font-bold text-white mb-4">Session Details</h3>
                
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-leather-300">Consultant</span>
                    <span className="text-white">{recording.consultant}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-leather-300">Date</span>
                    <span className="text-white">{recording.date}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-leather-300">Duration</span>
                    <span className="text-white">{recording.duration}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-leather-300">Type</span>
                    <span className="text-white">Video Call</span>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-leather-900/40 to-dark-900/40 backdrop-blur-xl rounded-2xl p-6 border border-leather-700/30">
                <h3 className="text-xl font-bold text-white mb-4">Actions</h3>
                
                <div className="space-y-3">
                  <button className="w-full bg-leather-600 hover:bg-leather-700 text-white py-2 rounded-lg transition-colors">
                    Book Follow-up Session
                  </button>
                  <button className="w-full border border-leather-600 text-leather-300 hover:bg-leather-600/10 py-2 rounded-lg transition-colors">
                    Send Feedback
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}