import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { 
  MessageSquare, 
  Send, 
  Paperclip, 
  Smile, 
  Search,
  Plus,
  Users,
  User,
  MoreVertical,
  Phone,
  Video
} from 'lucide-react';

const Chat: React.FC = () => {
  const { currentUser } = useAuth();
  const [selectedChat, setSelectedChat] = useState('1');
  const [message, setMessage] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  // Mock chat data
  const chats = [
    {
      id: '1',
      name: 'React Study Group',
      type: 'group',
      participants: ['Alice', 'Bob', 'Charlie', 'David'],
      lastMessage: 'Can someone help me with hooks?',
      lastMessageTime: '2 min ago',
      unreadCount: 3,
      avatar: null
    },
    {
      id: '2',
      name: 'Dr. Sarah Wilson',
      type: 'individual',
      participants: ['Dr. Sarah Wilson'],
      lastMessage: 'Your assignment looks great!',
      lastMessageTime: '1 hour ago',
      unreadCount: 0,
      avatar: '/api/placeholder/40/40'
    },
    {
      id: '3',
      name: 'JavaScript Beginners',
      type: 'group',
      participants: ['Emma', 'Frank', 'Grace'],
      lastMessage: 'Meeting tomorrow at 3 PM',
      lastMessageTime: '3 hours ago',
      unreadCount: 1,
      avatar: null
    }
  ];

  const messages = [
    {
      id: '1',
      senderId: 'user1',
      senderName: 'Alice Johnson',
      content: 'Hey everyone! I am having trouble understanding React hooks. Can anyone help?',
      timestamp: new Date(Date.now() - 300000),
      isOwn: false
    },
    {
      id: '2',
      senderId: 'user2',
      senderName: 'Bob Smith',
      content: 'Sure! What specific part are you struggling with?',
      timestamp: new Date(Date.now() - 240000),
      isOwn: false
    },
    {
      id: '3',
      senderId: currentUser?.uid || 'current',
      senderName: currentUser?.displayName || 'You',
      content: 'I can help with useState and useEffect if needed!',
      timestamp: new Date(Date.now() - 180000),
      isOwn: true
    },
    {
      id: '4',
      senderId: 'user1',
      senderName: 'Alice Johnson',
      content: 'That would be amazing! I am particularly confused about when to use useEffect.',
      timestamp: new Date(Date.now() - 120000),
      isOwn: false
    },
    {
      id: '5',
      senderId: currentUser?.uid || 'current',
      senderName: currentUser?.displayName || 'You',
      content: 'useEffect is used for side effects like API calls, subscriptions, or manually changing the DOM. It runs after the component renders.',
      timestamp: new Date(Date.now() - 60000),
      isOwn: true
    }
  ];

  const selectedChatData = chats.find(chat => chat.id === selectedChat);

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;
    
    // Here you would typically send the message to Firebase
    console.log('Sending message:', message);
    setMessage('');
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <div className="h-[calc(100vh-8rem)] flex bg-gray-800 rounded-lg overflow-hidden">
      {/* Sidebar */}
      <div className="w-1/3 border-r border-gray-700 flex flex-col">
        {/* Header */}
        <div className="p-4 border-b border-gray-700">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold text-white">Messages</h2>
            <button className="bg-primary-600 hover:bg-primary-700 text-white p-2 rounded-full">
              <Plus className="h-4 w-4" />
            </button>
          </div>
          
          {/* Search */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search conversations..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-gray-700 border border-gray-600 rounded-lg pl-10 pr-4 py-2 text-sm text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
            />
          </div>
        </div>

        {/* Chat List */}
        <div className="flex-1 overflow-y-auto">
          {chats.map((chat) => (
            <div
              key={chat.id}
              onClick={() => setSelectedChat(chat.id)}
              className={`p-4 border-b border-gray-700 cursor-pointer hover:bg-gray-700 transition-colors ${
                selectedChat === chat.id ? 'bg-gray-700' : ''
              }`}
            >
              <div className="flex items-center space-x-3">
                <div className="relative">
                  <div className="w-12 h-12 bg-primary-500 rounded-full flex items-center justify-center">
                    {chat.type === 'group' ? (
                      <Users className="h-6 w-6 text-white" />
                    ) : (
                      <User className="h-6 w-6 text-white" />
                    )}
                  </div>
                  {chat.unreadCount > 0 && (
                    <div className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                      {chat.unreadCount}
                    </div>
                  )}
                </div>
                
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <h3 className="text-white font-medium truncate">{chat.name}</h3>
                    <span className="text-xs text-gray-400">{chat.lastMessageTime}</span>
                  </div>
                  <p className="text-gray-400 text-sm truncate">{chat.lastMessage}</p>
                  <p className="text-xs text-gray-500 mt-1">
                    {chat.type === 'group' && `${chat.participants.length} members`}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Chat Area */}
      <div className="flex-1 flex flex-col">
        {selectedChatData ? (
          <>
            {/* Chat Header */}
            <div className="p-4 border-b border-gray-700 bg-gray-750">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-primary-500 rounded-full flex items-center justify-center">
                    {selectedChatData.type === 'group' ? (
                      <Users className="h-5 w-5 text-white" />
                    ) : (
                      <User className="h-5 w-5 text-white" />
                    )}
                  </div>
                  <div>
                    <h3 className="text-white font-medium">{selectedChatData.name}</h3>
                    <p className="text-xs text-gray-400">
                      {selectedChatData.type === 'group' 
                        ? `${selectedChatData.participants.length} members`
                        : 'Online'
                      }
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-2">
                  <button className="text-gray-400 hover:text-white p-2 rounded-lg hover:bg-gray-700">
                    <Phone className="h-4 w-4" />
                  </button>
                  <button className="text-gray-400 hover:text-white p-2 rounded-lg hover:bg-gray-700">
                    <Video className="h-4 w-4" />
                  </button>
                  <button className="text-gray-400 hover:text-white p-2 rounded-lg hover:bg-gray-700">
                    <MoreVertical className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex ${msg.isOwn ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                    msg.isOwn 
                      ? 'bg-primary-600 text-white' 
                      : 'bg-gray-700 text-gray-100'
                  }`}>
                    {!msg.isOwn && (
                      <p className="text-xs font-medium mb-1 opacity-70">{msg.senderName}</p>
                    )}
                    <p className="text-sm">{msg.content}</p>
                    <p className={`text-xs mt-1 ${
                      msg.isOwn ? 'text-primary-200' : 'text-gray-400'
                    }`}>
                      {formatTime(msg.timestamp)}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Message Input */}
            <form onSubmit={handleSendMessage} className="p-4 border-t border-gray-700">
              <div className="flex items-center space-x-3">
                <button
                  type="button"
                  className="text-gray-400 hover:text-white p-2 rounded-lg hover:bg-gray-700"
                >
                  <Paperclip className="h-5 w-5" />
                </button>
                
                <div className="flex-1 relative">
                  <input
                    type="text"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Type a message..."
                    className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  />
                  <button
                    type="button"
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white"
                  >
                    <Smile className="h-5 w-5" />
                  </button>
                </div>
                
                <button
                  type="submit"
                  disabled={!message.trim()}
                  className="bg-primary-600 hover:bg-primary-700 disabled:opacity-50 disabled:cursor-not-allowed text-white p-2 rounded-lg transition-colors"
                >
                  <Send className="h-5 w-5" />
                </button>
              </div>
            </form>
          </>
        ) : (
          <div className="flex-1 flex items-center justify-center">
            <div className="text-center">
              <MessageSquare className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-400">Select a conversation to start chatting</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Chat;