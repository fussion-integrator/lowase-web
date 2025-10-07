'use client';

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import { 
  Video, VideoOff, Mic, MicOff, Phone, PhoneOff, 
  MessageSquare, Share, Settings, Users, Clock 
} from 'lucide-react';

export default function SessionPage() {
  const params = useParams();
  const sessionId = params.id;
  const [isVideoOn, setIsVideoOn] = useState(true);
  const [isAudioOn, setIsAudioOn] = useState(true);
  const [isConnected, setIsConnected] = useState(false);
  const [sessionTime, setSessionTime] = useState(0);
  const [messages, setMessages] = useState([
    { id: 1, sender: 'Adebayo Ogundimu', message: 'Hello! Ready to discuss your Series A preparation?', time: '2:00 PM' },
    { id: 2, sender: 'You', message: 'Yes, excited to get started!', time: '2:01 PM' }
  ]);
  const [newMessage, setNewMessage] = useState('');

  const session = {
    id: sessionId,
    consultant: {
      name: 'Adebayo Ogundimu',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=60&h=60&fit=crop&crop=face',
      expertise: 'Series A & B Funding'
    },
    topic: 'Series A Preparation Strategy',
    duration: '60 minutes',
    type: 'video'
  };

  useEffect(() => {
    // Simulate connection
    const timer = setTimeout(() => setIsConnected(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Session timer
    if (isConnected) {
      const timer = setInterval(() => {
        setSessionTime(prev => prev + 1);
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [isConnected]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const sendMessage = () => {
    if (newMessage.trim()) {
      setMessages([...messages, {
        id: messages.length + 1,
        sender: 'You',
        message: newMessage,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      }]);
      setNewMessage('');
    }
  };

  const endSession = () => {
    if (confirm('Are you sure you want to end this session?')) {
      window.location.href = '/dashboard/consultations';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-dark-950 to-leather-950">
      <div className="container mx-auto px-4 py-8">
        {/* Session Header */}
        <div className="bg-gradient-to-br from-leather-900/40 to-dark-900/40 backdrop-blur-xl rounded-2xl p-6 border border-leather-700/30 mb-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <img
                src={session.consultant.avatar}
                alt={session.consultant.name}
                className="w-12 h-12 rounded-full"
              />
              <div>
                <h1 className="text-xl font-bold text-white">{session.topic}</h1>
                <p className="text-leather-300">with {session.consultant.name}</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4 text-leather-400" />
                <span className="text-leather-200">{formatTime(sessionTime)}</span>
              </div>
              <div className={`px-3 py-1 rounded-full text-sm ${
                isConnected ? 'bg-green-500/20 text-green-400' : 'bg-yellow-500/20 text-yellow-400'
              }`}>
                {isConnected ? 'Connected' : 'Connecting...'}
              </div>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-4 gap-6">
          {/* Main Video Area */}
          <div className="lg:col-span-3">
            <div className="bg-gradient-to-br from-leather-900/40 to-dark-900/40 backdrop-blur-xl rounded-2xl overflow-hidden border border-leather-700/30">
              {/* Video Display */}
              <div className="relative aspect-video bg-black">
                {session.type === 'video' ? (
                  <>
                    {/* Consultant Video (Main) */}
                    <div className="w-full h-full bg-gradient-to-br from-leather-800 to-dark-800 flex items-center justify-center">
                      <div className="text-center">
                        <img
                          src={session.consultant.avatar}
                          alt={session.consultant.name}
                          className="w-24 h-24 rounded-full mx-auto mb-4"
                        />
                        <p className="text-white font-semibold">{session.consultant.name}</p>
                        <p className="text-leather-300 text-sm">{isConnected ? 'Video Active' : 'Connecting...'}</p>
                      </div>
                    </div>

                    {/* Your Video (Picture-in-Picture) */}
                    <div className="absolute bottom-4 right-4 w-48 h-36 bg-dark-800 rounded-xl border-2 border-leather-600 overflow-hidden">
                      <div className="w-full h-full bg-gradient-to-br from-leather-700 to-dark-700 flex items-center justify-center">
                        {isVideoOn ? (
                          <div className="text-center">
                            <div className="w-12 h-12 bg-leather-600 rounded-full mx-auto mb-2 flex items-center justify-center">
                              <span className="text-white font-bold">You</span>
                            </div>
                            <p className="text-white text-xs">Your Video</p>
                          </div>
                        ) : (
                          <div className="text-center">
                            <VideoOff className="w-8 h-8 text-leather-400 mx-auto mb-2" />
                            <p className="text-leather-400 text-xs">Video Off</p>
                          </div>
                        )}
                      </div>
                    </div>
                  </>
                ) : (
                  /* Audio Call Interface */
                  <div className="w-full h-full bg-gradient-to-br from-leather-800 to-dark-800 flex items-center justify-center">
                    <div className="text-center">
                      <img
                        src={session.consultant.avatar}
                        alt={session.consultant.name}
                        className="w-32 h-32 rounded-full mx-auto mb-6"
                      />
                      <h2 className="text-2xl font-bold text-white mb-2">{session.consultant.name}</h2>
                      <p className="text-leather-300 mb-4">Audio Call in Progress</p>
                      <div className="flex items-center justify-center space-x-2">
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                        <span className="text-green-400 text-sm">Connected</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Controls */}
              <div className="p-6 bg-dark-900/50">
                <div className="flex items-center justify-center space-x-4">
                  {session.type === 'video' && (
                    <button
                      onClick={() => setIsVideoOn(!isVideoOn)}
                      className={`p-3 rounded-full transition-colors ${
                        isVideoOn ? 'bg-leather-600 hover:bg-leather-700' : 'bg-red-600 hover:bg-red-700'
                      }`}
                    >
                      {isVideoOn ? (
                        <Video className="w-5 h-5 text-white" />
                      ) : (
                        <VideoOff className="w-5 h-5 text-white" />
                      )}
                    </button>
                  )}
                  
                  <button
                    onClick={() => setIsAudioOn(!isAudioOn)}
                    className={`p-3 rounded-full transition-colors ${
                      isAudioOn ? 'bg-leather-600 hover:bg-leather-700' : 'bg-red-600 hover:bg-red-700'
                    }`}
                  >
                    {isAudioOn ? (
                      <Mic className="w-5 h-5 text-white" />
                    ) : (
                      <MicOff className="w-5 h-5 text-white" />
                    )}
                  </button>

                  <button className="p-3 rounded-full bg-leather-700 hover:bg-leather-800 transition-colors">
                    <Share className="w-5 h-5 text-white" />
                  </button>

                  <button className="p-3 rounded-full bg-leather-700 hover:bg-leather-800 transition-colors">
                    <Settings className="w-5 h-5 text-white" />
                  </button>

                  <button
                    onClick={endSession}
                    className="p-3 rounded-full bg-red-600 hover:bg-red-700 transition-colors"
                  >
                    {session.type === 'video' ? (
                      <PhoneOff className="w-5 h-5 text-white" />
                    ) : (
                      <PhoneOff className="w-5 h-5 text-white" />
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Chat Sidebar */}
          <div className="bg-gradient-to-br from-leather-900/40 to-dark-900/40 backdrop-blur-xl rounded-2xl border border-leather-700/30 flex flex-col h-[600px]">
            <div className="p-4 border-b border-leather-700/30">
              <h3 className="text-white font-semibold flex items-center space-x-2">
                <MessageSquare className="w-4 h-4" />
                <span>Session Chat</span>
              </h3>
            </div>

            {/* Messages */}
            <div className="flex-1 p-4 overflow-y-auto space-y-3">
              {messages.map((msg) => (
                <div key={msg.id} className={`${
                  msg.sender === 'You' ? 'text-right' : 'text-left'
                }`}>
                  <div className={`inline-block max-w-[80%] p-3 rounded-lg ${
                    msg.sender === 'You' 
                      ? 'bg-leather-600 text-white' 
                      : 'bg-leather-800/50 text-leather-200'
                  }`}>
                    <p className="text-sm">{msg.message}</p>
                    <p className="text-xs opacity-70 mt-1">{msg.time}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Message Input */}
            <div className="p-4 border-t border-leather-700/30">
              <div className="flex space-x-2">
                <input
                  type="text"
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
                  placeholder="Type a message..."
                  className="flex-1 bg-leather-800/30 border border-leather-700 rounded-lg px-3 py-2 text-white placeholder-leather-400 focus:outline-none focus:border-leather-500"
                />
                <button
                  onClick={sendMessage}
                  className="bg-leather-600 hover:bg-leather-700 text-white px-4 py-2 rounded-lg transition-colors"
                >
                  Send
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}