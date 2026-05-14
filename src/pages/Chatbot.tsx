import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Send, 
  Plus, 
  Settings, 
  User, 
  Copy, 
  ThumbsUp, 
  ThumbsDown, 
  Activity,
  Globe,
  Brain,
  History,
  Menu,
  X
} from 'lucide-react';

// Import types from separate file
import { Message, ChatResponse, Language, ChatHistoryItem } from '../types/api';

// Component-specific interface (only used in this file)
interface SidebarContentProps {
  isMemoryOn: boolean;
  setIsMemoryOn: (value: boolean) => void;
  chatHistory: ChatHistoryItem[];
  onClose?: () => void;
}

const Chatbot: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      type: 'bot',
      content: "Hello! I'm Cura, your AI healthcare assistant. Feel free to ask about your symptoms, conditions, medications, or any health-related questions. How can I help you today?",
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState<string>('');
  const [isMemoryOn, setIsMemoryOn] = useState<boolean>(true);
  const [selectedLanguage, setSelectedLanguage] = useState<string>('EN');
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const languages: Language[] = [
    { code: 'EN', name: 'English' },
    { code: 'ES', name: 'Español' }
  ];

  const chatHistory: ChatHistoryItem[] = [
    { id: 1, title: 'Chest pain symptoms', time: '2 hours ago' },
    { id: 2, title: 'Diabetes management', time: '1 day ago' },
    { id: 3, title: 'Medication interactions', time: '3 days ago' },
    { id: 4, title: 'Blood pressure readings', time: '1 week ago' },
    { id: 5, title: 'Exercise recommendations', time: '2 weeks ago' }
  ];

  const handleSendMessage = async (): Promise<void> => {
    if (!inputMessage.trim()) return;

    const newUserMessage: Message = {
      id: messages.length + 1,
      type: 'user',
      content: inputMessage,
      timestamp: new Date()
    };

    setMessages([...messages, newUserMessage]);
    const currentInput = inputMessage;
    setInputMessage('');
    setIsLoading(true);

    try {
      // Use relative path - Vite will proxy to http://localhost:5000/api/chat
      const response = await fetch('/ai/chat', {  // Changed from /api/chat
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    message: currentInput,
    language: selectedLanguage,
    memory: isMemoryOn
  })
});


      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data: ChatResponse = await response.json();
      
      const botResponse: Message = {
        id: messages.length + 2,
        type: 'bot',
        content: data.reply || "I apologize, but I couldn't generate a response. Please try again.",
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, botResponse]);

    } catch (error) {
      console.error('Error sending message:', error);
      
      const errorMessage: Message = {
        id: messages.length + 2,
        type: 'bot',
        content: "I'm sorry, I'm having trouble connecting to the AI service. Please make sure the server is running and try again.",
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLTextAreaElement>): void => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const copyMessage = (content: string): void => {
    navigator.clipboard.writeText(content);
  };

  return (
    <div className="min-h-screen bg-slate-900 flex">
      {/* Mobile Sidebar Overlay */}
      {isSidebarOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div 
            className="fixed inset-0 bg-black bg-opacity-50" 
            onClick={() => setIsSidebarOpen(false)} 
          />
          <div className="fixed left-0 top-0 bottom-0 w-80 bg-slate-800 border-r border-slate-700 z-50">
            <SidebarContent 
              isMemoryOn={isMemoryOn}
              setIsMemoryOn={setIsMemoryOn}
              chatHistory={chatHistory}
              onClose={() => setIsSidebarOpen(false)}
            />
          </div>
        </div>
      )}

      {/* Desktop Sidebar */}
      <div className="hidden lg:block w-80 bg-slate-800 border-r border-slate-700">
        <SidebarContent 
          isMemoryOn={isMemoryOn}
          setIsMemoryOn={setIsMemoryOn}
          chatHistory={chatHistory}
        />
      </div>

      {/* Main Chat Area */}
      <div className="flex-1 flex flex-col">
        {/* Top Bar */}
        <div className="bg-slate-800 border-b border-slate-700 px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setIsSidebarOpen(true)}
                className="lg:hidden p-2 text-gray-400 hover:text-white transition-colors"
              >
                <Menu className="w-5 h-5" />
              </button>
              <Link to="/" className="flex items-center space-x-2 group">
                <div className="bg-violet-600 p-2 rounded-lg group-hover:bg-violet-500 transition-colors">
                  <Activity className="h-6 w-6 text-white" />
                </div>
                <span className="text-xl font-bold text-white hidden sm:block">Cura Chat</span>
              </Link>
            </div>

            <div className="flex items-center space-x-4">
              {/* Language Selector */}
              <select
                value={selectedLanguage}
                onChange={(e) => setSelectedLanguage(e.target.value)}
                className="bg-slate-700 border border-slate-600 text-white rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-violet-500 focus:border-violet-500"
              >
                {languages.map((lang) => (
                  <option key={lang.code} value={lang.code}>
                    {lang.name}
                  </option>
                ))}
              </select>

              {/* Profile */}
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-violet-600 rounded-full flex items-center justify-center">
                  <User className="w-4 h-4 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-6">
          {messages.map((message) => (
            <div key={message.id} className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-3xl ${message.type === 'user' ? 'order-2' : 'order-1'}`}>
                <div className={`flex items-start space-x-3 ${message.type === 'user' ? 'flex-row-reverse space-x-reverse' : ''}`}>
                  {/* Avatar */}
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                    message.type === 'user' ? 'bg-gray-600' : 'bg-violet-600'
                  }`}>
                    {message.type === 'user' ? (
                      <User className="w-4 h-4 text-white" />
                    ) : (
                      <Activity className="w-4 h-4 text-white" />
                    )}
                  </div>

                  {/* Message Content */}
                  <div className={`rounded-2xl px-4 py-3 ${
                    message.type === 'user' 
                      ? 'bg-violet-600 text-white' 
                      : 'bg-slate-700 text-gray-100'
                  }`}>
                    <p className="leading-relaxed">{message.content}</p>
                    
                    {message.type === 'bot' && (
                      <div className="flex items-center justify-between mt-3 pt-3 border-t border-slate-600">
                        <div className="flex items-center space-x-2">
                          <button
                            onClick={() => copyMessage(message.content)}
                            className="p-1 text-gray-400 hover:text-white transition-colors"
                            title="Copy message"
                          >
                            <Copy className="w-4 h-4" />
                          </button>
                          <button className="p-1 text-gray-400 hover:text-green-400 transition-colors" title="Good response">
                            <ThumbsUp className="w-4 h-4" />
                          </button>
                          <button className="p-1 text-gray-400 hover:text-red-400 transition-colors" title="Poor response">
                            <ThumbsDown className="w-4 h-4" />
                          </button>
                        </div>
                        <span className="text-xs text-gray-500">
                          {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
          
          {/* Loading Indicator */}
          {isLoading && (
            <div className="flex justify-start">
              <div className="max-w-3xl">
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 bg-violet-600">
                    <Activity className="w-4 h-4 text-white" />
                  </div>
                  <div className="rounded-2xl px-4 py-3 bg-slate-700 text-gray-100">
                    <div className="flex items-center space-x-2">
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-violet-500"></div>
                      <span className="text-sm">Thinking...</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Input Area */}
        <div className="border-t border-slate-700 bg-slate-800 p-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-end space-x-4">
              <div className="flex-1">
                <textarea
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Describe your symptoms or ask a health question..."
                  className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:ring-2 focus:ring-violet-500 focus:border-violet-500 resize-none"
                  rows={1}
                  style={{ minHeight: '44px', maxHeight: '120px' }}
                  disabled={isLoading}
                />
              </div>
              <button
                onClick={handleSendMessage}
                disabled={!inputMessage.trim() || isLoading}
                className="bg-violet-600 hover:bg-violet-700 disabled:bg-slate-600 disabled:cursor-not-allowed text-white p-3 rounded-lg transition-colors"
              >
                <Send className="w-5 h-5" />
              </button>
            </div>
            <div className="mt-2 text-xs text-gray-500 text-center">
              CURA AI can make mistakes. Please consult healthcare professionals for medical advice.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const SidebarContent: React.FC<SidebarContentProps> = ({ 
  isMemoryOn, 
  setIsMemoryOn, 
  chatHistory, 
  onClose 
}) => {
  return (
    <div className="flex flex-col h-full">
      {/* Header */}
      <div className="p-4 border-b border-slate-700">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold text-white">Chat History</h2>
          {onClose && (
            <button
              onClick={onClose}
              className="p-1 text-gray-400 hover:text-white transition-colors lg:hidden"
            >
              <X className="w-5 h-5" />
            </button>
          )}
        </div>
        
        <button className="w-full bg-violet-600 hover:bg-violet-700 text-white py-3 px-4 rounded-lg font-medium transition-colors flex items-center justify-center space-x-2">
          <Plus className="w-4 h-4" />
          <span>New Chat</span>
        </button>
      </div>

      {/* Memory Toggle */}
      <div className="p-4 border-b border-slate-700">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Brain className="w-5 h-5 text-violet-400" />
            <span className="text-white font-medium">Memory</span>
          </div>
          <button
            onClick={() => setIsMemoryOn(!isMemoryOn)}
            className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
              isMemoryOn ? 'bg-violet-600' : 'bg-slate-600'
            }`}
          >
            <span
              className={`inline-block h-4 w-4 transform rounded-full bg-white transition ${
                isMemoryOn ? 'translate-x-6' : 'translate-x-1'
              }`}
            />
          </button>
        </div>
        <p className="text-xs text-gray-400 mt-1">
          {isMemoryOn ? 'Cura remembers your conversations' : 'Each chat starts fresh'}
        </p>
      </div>

      {/* Chat History */}
      <div className="flex-1 overflow-y-auto p-4">
        <div className="space-y-2">
          {chatHistory.map((chat) => (
            <button
              key={chat.id}
              className="w-full text-left p-3 rounded-lg bg-slate-700/50 hover:bg-slate-700 transition-colors border border-transparent hover:border-slate-600 group"
            >
              <div className="flex items-start justify-between">
                <div className="flex-1 min-w-0">
                  <p className="text-white font-medium truncate group-hover:text-violet-300 transition-colors">
                    {chat.title}
                  </p>
                  <p className="text-xs text-gray-400 mt-1">{chat.time}</p>
                </div>
                <History className="w-4 h-4 text-gray-500 ml-2 flex-shrink-0" />
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Settings */}
      <div className="p-4 border-t border-slate-700">
        <button className="w-full flex items-center space-x-2 text-gray-400 hover:text-white transition-colors p-2 rounded-lg hover:bg-slate-700">
          <Settings className="w-5 h-5" />
          <span>Settings</span>
        </button>
      </div>
    </div>
  );
};

export default Chatbot;
