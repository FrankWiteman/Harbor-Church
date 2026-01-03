
import React, { useState } from 'react';
import { CONNECT_EVENTS } from '../constants';
import { Calendar, MapPin, Users, Heart, ArrowRight, CheckCircle2 } from 'lucide-react';

const Connect: React.FC = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => setFormSubmitted(false), 5000);
  };

  return (
    <div className="min-h-screen bg-slate-50 pb-20">
      <div className="bg-sky-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-serif">Join the Community</h1>
          <p className="text-xl text-sky-50 max-w-2xl font-light">
            Don't walk the shoreline alone. Find a group, join a team, or simply say hello.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Upcoming Events */}
          <div>
            <h2 className="text-2xl font-bold text-blue-950 mb-8 flex items-center gap-2">
              <Calendar className="text-sky-500" /> Upcoming at Harbor
            </h2>
            <div className="space-y-4">
              {CONNECT_EVENTS.map(event => (
                <div key={event.id} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:border-sky-300 transition-colors cursor-pointer group">
                  <div className="flex justify-between items-start">
                    <div>
                      <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full mb-2 inline-block uppercase tracking-wider ${
                        event.type === 'Group' ? 'bg-green-100 text-green-700' : 
                        event.type === 'Volunteer' ? 'bg-orange-100 text-orange-700' : 
                        'bg-blue-100 text-blue-700'
                      }`}>
                        {event.type}
                      </span>
                      <h3 className="text-lg font-bold text-blue-950 group-hover:text-sky-600 transition-colors">{event.title}</h3>
                      <div className="flex items-center gap-4 mt-2 text-sm text-slate-500">
                        <span className="flex items-center gap-1"><Calendar size={14} /> {event.date}</span>
                        <span className="flex items-center gap-1"><MapPin size={14} /> {event.location}</span>
                      </div>
                    </div>
                    <ArrowRight className="text-slate-300 group-hover:text-sky-500 group-hover:translate-x-1 transition-all" size={20} />
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-12 bg-blue-900 rounded-3xl p-8 text-white relative overflow-hidden">
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-4">Start a Small Group</h3>
                <p className="text-blue-100 mb-6 font-light">
                  Passion for people? We're looking for new leaders to open their homes and hearts.
                </p>
                <button className="bg-sky-500 px-6 py-2 rounded-full font-bold hover:bg-sky-400 transition-colors">Apply to Lead</button>
              </div>
              <Users size={120} className="absolute -right-4 -bottom-4 text-blue-800/50" />
            </div>
          </div>

          {/* Connection Form */}
          <div className="bg-white rounded-[2.5rem] shadow-sm p-8 md:p-12 border border-slate-200 h-fit">
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-blue-950 mb-2">I'm New Here</h2>
              <p className="text-slate-500">Fill this out and we'll reach out to grab coffee or answer any questions you have!</p>
            </div>

            {formSubmitted ? (
              <div className="text-center py-12 animate-in zoom-in-95">
                <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 size={32} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Message Received!</h3>
                <p className="text-slate-500">Someone from the Harbor team will reach out soon. Welcome home!</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">First Name</label>
                    <input required type="text" className="w-full px-4 py-3 rounded-xl bg-slate-50 border-none focus:ring-2 focus:ring-sky-500" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">Last Name</label>
                    <input required type="text" className="w-full px-4 py-3 rounded-xl bg-slate-50 border-none focus:ring-2 focus:ring-sky-500" />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">Email Address</label>
                  <input required type="email" className="w-full px-4 py-3 rounded-xl bg-slate-50 border-none focus:ring-2 focus:ring-sky-500" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">What are you interested in?</label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-2">
                    {['Small Groups', 'Volunteering', 'Youth Ministry', 'Just Saying Hi'].map(item => (
                      <label key={item} className="flex items-center gap-3 p-3 rounded-xl border border-slate-100 hover:bg-slate-50 cursor-pointer transition-colors">
                        <input type="checkbox" className="rounded text-sky-500 focus:ring-sky-500" />
                        <span className="text-sm text-slate-700">{item}</span>
                      </label>
                    ))}
                  </div>
                </div>
                <button type="submit" className="w-full bg-sky-600 text-white py-4 rounded-xl font-bold hover:bg-sky-500 shadow-lg transition-all">
                  Send Connection Request
                </button>
              </form>
            )}

            <div className="mt-12 pt-8 border-t border-slate-100">
              <div className="flex gap-4 p-4 rounded-2xl bg-sky-50 border border-sky-100">
                <div className="text-sky-600 shrink-0"><Heart size={24} /></div>
                <div>
                  <h4 className="font-bold text-sky-950 text-sm">Prayer Requests</h4>
                  <p className="text-xs text-sky-800">Need prayer? Our elders and team pray over every request we receive.</p>
                  <button className="text-sky-600 font-bold text-xs mt-2 uppercase tracking-widest">Submit a Request &rarr;</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Connect;
