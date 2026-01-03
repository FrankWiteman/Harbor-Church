
import React, { useState } from 'react';
import { Play, Search, MessageSquare, Send, X } from 'lucide-react';
import { SERMONS } from '../constants';
import { askSermonAssistant } from '../services/geminiService';

const Messages: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [aiQuestion, setAiQuestion] = useState('');
  const [aiAnswer, setAiAnswer] = useState('');
  const [isAsking, setIsAsking] = useState(false);
  const [isAiLoading, setIsAiLoading] = useState(false);

  const filteredSermons = SERMONS.filter(s => 
    s.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    s.speaker.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleAskAi = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!aiQuestion.trim()) return;
    
    setIsAiLoading(true);
    setAiAnswer('');
    const answer = await askSermonAssistant(aiQuestion);
    setAiAnswer(answer);
    setIsAiLoading(false);
  };

  return (
    <div className="min-h-screen pb-20 bg-slate-50">
      {/* Header */}
      <div className="bg-white border-b border-slate-200 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold text-blue-950 mb-4 font-serif">Messages</h1>
          <p className="text-slate-600 max-w-2xl">
            Watch or listen to our latest teaching series. Find encouragement for your journey through the Word.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 mt-8">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Main Content */}
          <div className="flex-grow">
            {/* Search */}
            <div className="relative mb-8">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" size={20} />
              <input 
                type="text" 
                placeholder="Search series, topics, or speakers..."
                className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white shadow-sm"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            {/* Latest Sermon Highlight */}
            {!searchTerm && (
              <div className="mb-12">
                <h2 className="text-xl font-bold mb-6 text-blue-950 flex items-center gap-2">
                  <Play size={20} className="text-sky-500" /> Latest Message
                </h2>
                <div className="group relative overflow-hidden rounded-3xl bg-blue-900 text-white shadow-2xl">
                  <img 
                    src={SERMONS[0].thumbnail} 
                    alt={SERMONS[0].title}
                    className="w-full h-[400px] object-cover opacity-60 group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-950 via-transparent to-transparent flex flex-col justify-end p-8">
                    <span className="bg-sky-500 text-white text-xs font-bold px-3 py-1 rounded-full w-fit mb-4">NEW</span>
                    <h3 className="text-3xl font-bold mb-2">{SERMONS[0].title}</h3>
                    <p className="text-blue-100 mb-6">{SERMONS[0].series} • {SERMONS[0].speaker} • {SERMONS[0].date}</p>
                    <button className="bg-white text-blue-900 px-8 py-3 rounded-full font-bold w-fit hover:bg-blue-50 transition-colors flex items-center gap-2">
                      <Play size={18} fill="currentColor" /> Watch Now
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* Archive List */}
            <h2 className="text-xl font-bold mb-6 text-blue-950">Recent Messages</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredSermons.map(sermon => (
                <div key={sermon.id} className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                  <div className="flex gap-4">
                    <img src={sermon.thumbnail} className="w-32 h-20 object-cover rounded-lg" alt={sermon.title} />
                    <div>
                      <h4 className="font-bold text-blue-950 line-clamp-1">{sermon.title}</h4>
                      <p className="text-xs text-slate-500 mb-1">{sermon.series} • {sermon.speaker}</p>
                      <p className="text-xs text-slate-400">{sermon.date}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* AI Sermon Assistant Sidebar */}
          <div className="w-full md:w-80 shrink-0">
            <div className="bg-blue-50 rounded-3xl p-6 sticky top-24 border border-blue-100 shadow-sm">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-blue-900 rounded-lg flex items-center justify-center text-white">
                  <MessageSquare size={16} />
                </div>
                <h3 className="font-bold text-blue-950">Sermon Assistant</h3>
              </div>
              <p className="text-sm text-slate-600 mb-6 leading-relaxed">
                Have a question about a series or need a spiritual reflection? Ask our AI assistant.
              </p>
              
              <form onSubmit={handleAskAi} className="space-y-4">
                <textarea 
                  className="w-full rounded-xl border-slate-200 text-sm p-3 focus:ring-2 focus:ring-blue-500 resize-none h-24"
                  placeholder="e.g. How can I stay anchored in hard times?"
                  value={aiQuestion}
                  onChange={(e) => setAiQuestion(e.target.value)}
                  disabled={isAiLoading}
                />
                <button 
                  type="submit"
                  disabled={isAiLoading}
                  className="w-full bg-blue-900 text-white py-3 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-blue-800 disabled:opacity-50 transition-all shadow-lg"
                >
                  {isAiLoading ? 'Seeking...' : <><Send size={16} /> Get Insights</>}
                </button>
              </form>

              {aiAnswer && (
                <div className="mt-6 p-4 bg-white rounded-xl text-sm text-slate-700 leading-relaxed border border-blue-100 animate-in slide-in-from-bottom-2">
                  <p className="font-serif italic">{aiAnswer}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Messages;
