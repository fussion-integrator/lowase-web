'use client';

import { useState } from 'react';
import { MessageSquare, Search, Phone, Video, MoreVertical } from 'lucide-react';

export default function MessagesPage() {
  const [selectedChat, setSelectedChat] = useState(1);
  const [newMessage, setNewMessage] = useState('');

  const chats = [
    {
      id: 1,
      name: 'Adebayo Ogundimu',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=60&h=60&fit=crop&crop=face',
      lastMessage: 'Great session today! Here are the follow-up resources.',
      time: '2:30 PM',
      unread: 2,
      online: true
    },
    {
      id: 2,
      name: 'Chinedu Okwu',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=60&h=60&fit=crop&crop=face',
      lastMessage: 'Let me know when you\'re ready for the next session.',
      time: '1:15 PM',
      unread: 0,
      online: false
    }
  ];

  const messages = [
    { id: 1, sender: 'Adebayo Ogundimu', message: 'Hello! Ready for our session?', time: '2:00 PM', isOwn: false },
    { id: 2, sender: 'You', message: 'Yes, excited to get started!', time: '2:01 PM', isOwn: true },
    { id: 3, sender: 'Adebayo Ogundimu', message: 'Great session today! Here are the follow-up resources.', time: '2:30 PM', isOwn: false }
  ];

  const sendMessage = () => {
    if (newMessage.trim()) {
      setNewMessage('');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-dark-950 to-leather-950">
      <section className="pt-32 pb-8">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-white mb-8">Messages</h1>
          
          <div className="grid lg:grid-cols-3 gap-6 h-[600px]">
            {/* Chat List */}
            <div className="bg-gradient-to-br from-leather-900/40 to-dark-900/40 backdrop-blur-xl rounded-2xl border border-leather-700/30">
              <div className="p-4 border-b border-leather-700/30">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-leather-400 w-4 h-4" />
                  <input
                    type="text"
                    placeholder="Search conversations..."
                    className="w-full pl-10 pr-4 py-2 bg-leather-800/30 border border-leather-700 rounded-lg text-white placeholder-leather-400 focus:outline-none focus:border-leather-500"
                  />
                </div>
              </div>

              <div className="overflow-y-auto">
                {chats.map((chat) => (
                  <div
                    key={chat.id}
                    onClick={() => setSelectedChat(chat.id)}
                    className={`p-4 border-b border-leather-800/30 cursor-pointer transition-colors ${
                      selectedChat === chat.id ? 'bg-leather-600/20' : 'hover:bg-leather-800/20'
                    }`}
                  >
                    <div className="flex items-center space-x-3">
                      <div className="relative">
                        <img
                          src={chat.avatar}
                          alt={chat.name}
                          className="w-12 h-12 rounded-full"
                        />
                        {chat.online && (
                          <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-400 rounded-full border-2 border-dark-900"></div>
                        )}
                      </div>
                      
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between">
                          <h3 className="text-white font-medium truncate">{chat.name}</h3>
                          <span className="text-leather-400 text-xs">{chat.time}</span>
                        </div>
                        <p className="text-leather-300 text-sm truncate">{chat.lastMessage}</p>
                      </div>
                      
                      {chat.unread > 0 && (
                        <div className="bg-leather-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                          {chat.unread}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Chat Window */}
            <div className="lg:col-span-2 bg-gradient-to-br from-leather-900/40 to-dark-900/40 backdrop-blur-xl rounded-2xl border border-leather-700/30 flex flex-col">
              {/* Chat Header */}
              <div className="p-4 border-b border-leather-700/30 flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <img
                    src={chats.find(c => c.id === selectedChat)?.avatar}
                    alt=""
                    className="w-10 h-10 rounded-full"
                  />
                  <div>
                    <h3 className="text-white font-medium">{chats.find(c => c.id === selectedChat)?.name}</h3>
                    <p className="text-leather-400 text-sm">Online</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-2">
                  <button className="p-2 rounded-lg bg-leather-700/30 hover:bg-leather-700/50 transition-colors">
                    <Phone className="w-4 h-4 text-leather-300" />
                  </button>
                  <button className="p-2 rounded-lg bg-leather-700/30 hover:bg-leather-700/50 transition-colors">
                    <Video className="w-4 h-4 text-leather-300" />
                  </button>
                  <button className="p-2 rounded-lg bg-leather-700/30 hover:bg-leather-700/50 transition-colors">
                    <MoreVertical className="w-4 h-4 text-leather-300" />
                  </button>
                </div>
              </div>

              {/* Messages */}
              <div className="flex-1 p-4 overflow-y-auto space-y-4">
                {messages.map((msg) => (
                  <div key={msg.id} className={`flex ${msg.isOwn ? 'justify-end' : 'justify-start'}`}>
                    <div className={`max-w-[70%] p-3 rounded-lg ${
                      msg.isOwn 
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
                    className="flex-1 bg-leather-800/30 border border-leather-700 rounded-lg px-4 py-2 text-white placeholder-leather-400 focus:outline-none focus:border-leather-500"
                  />
                  <button
                    onClick={sendMessage}
                    className="bg-leather-600 hover:bg-leather-700 text-white px-6 py-2 rounded-lg transition-colors"
                  >
                    Send
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