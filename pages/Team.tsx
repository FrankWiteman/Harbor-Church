
import React from 'react';
import { TEAM } from '../constants';
import { Mail, Github, Instagram, Twitter } from 'lucide-react';

const Team: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <div className="bg-blue-950 text-white py-24 px-4 overflow-hidden relative">
        <div className="absolute top-0 right-0 w-64 h-64 bg-sky-500/10 rounded-full blur-3xl -mr-32 -mt-32"></div>
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 font-serif tracking-tight">Meet the Crew</h1>
          <p className="text-xl text-blue-200 max-w-2xl mx-auto font-light">
            The heart of Harbor Church is the people who serve it. Meet the team dedicated to your spiritual journey.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {TEAM.map((member) => (
            <div key={member.id} className="bg-white rounded-[2rem] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 group border border-slate-100">
              <div className="relative h-80 overflow-hidden">
                <img 
                  src={member.imageUrl} 
                  alt={member.name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-8 gap-4">
                  <button className="bg-white text-blue-900 p-3 rounded-full hover:bg-sky-400 hover:text-white transition-colors"><Mail size={20} /></button>
                  <button className="bg-white text-blue-900 p-3 rounded-full hover:bg-sky-400 hover:text-white transition-colors"><Instagram size={20} /></button>
                  <button className="bg-white text-blue-900 p-3 rounded-full hover:bg-sky-400 hover:text-white transition-colors"><Twitter size={20} /></button>
                </div>
              </div>
              <div className="p-8">
                <span className="text-sky-600 font-bold tracking-widest text-xs uppercase mb-1 block">{member.role}</span>
                <h3 className="text-2xl font-bold text-blue-950 mb-4">{member.name}</h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-6 italic">
                  "{member.bio}"
                </p>
                <div className="h-1 w-12 bg-blue-100 rounded-full group-hover:w-full transition-all duration-700"></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <section className="bg-blue-100/50 py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-blue-950 mb-8 font-serif">Want to join the team?</h2>
          <p className="text-slate-700 mb-10 text-lg">
            We are always looking for passionate people to serve in worship, kids ministry, and community outreach.
          </p>
          <button className="bg-blue-900 text-white px-10 py-4 rounded-full font-bold shadow-lg hover:shadow-xl hover:translate-y-[-2px] transition-all">
            Volunteer Opportunities
          </button>
        </div>
      </section>
    </div>
  );
};

export default Team;
