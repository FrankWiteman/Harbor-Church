
import React, { useEffect, useState } from 'react';
import { ArrowRight, Play, Compass, Ship, Anchor, Waves, Clock, MapPin, Sparkles, Megaphone, Calendar, Users, Smartphone, MessageCircle, HeartHandshake } from 'lucide-react';
import { Link } from 'react-router-dom';
import { generatePrayerPrompt } from '../services/geminiService';

const Home: React.FC = () => {
  const [dailyPrompt, setDailyPrompt] = useState<string>('Finding the light in the harbor...');

  useEffect(() => {
    generatePrayerPrompt().then(setDailyPrompt);
  }, []);

  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0 video-blur"
        >
          <source 
            src="https://assets.mixkit.co/videos/preview/mixkit-aerial-view-of-a-lighthouse-at-sunset-12644-large.mp4" 
            type="video/mp4" 
          />
        </video>
        
        <div className="absolute inset-0 z-10 bg-gradient-to-b from-blue-950/40 via-blue-950/20 to-blue-950/80"></div>
        <div className="absolute inset-0 z-10 bg-black/30"></div>
        
        <div className="relative z-20 text-center px-4 max-w-5xl animate-in fade-in zoom-in duration-1000 pt-8">
          <div className="mb-6 flex justify-center">
            <div className="bg-white/10 backdrop-blur-xl px-5 py-2 rounded-full border border-white/20 text-sky-300 text-xs md:text-sm font-black tracking-[0.3em] uppercase flex items-center gap-3 shadow-lg">
              <Sparkles size={16} className="text-white animate-pulse" /> Anchored in Hope
            </div>
          </div>
          
          <h1 className="text-6xl md:text-9xl font-bold text-white mb-6 font-serif leading-none tracking-tight drop-shadow-2xl">
            The Harbor <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-300 to-blue-400 italic font-medium">Home Port.</span>
          </h1>
          
          <p className="text-lg md:text-2xl text-blue-50/90 mb-10 max-w-2xl mx-auto font-light leading-relaxed drop-shadow-xl px-4">
            A sanctuary for the weary and a compass for the wandering. Discover your purpose at Harbor Church this Sunday.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 px-6">
            <Link to="/messages" className="group w-full sm:w-auto bg-white text-blue-950 px-10 md:px-12 py-4 md:py-5 rounded-full font-black text-lg hover:bg-sky-50 transition-all flex items-center justify-center gap-3 shadow-2xl hover:scale-105 active:scale-95">
              <Play fill="currentColor" size={24} className="group-hover:scale-110 transition-transform" /> Latest Message
            </Link>
            <Link to="/connect" className="w-full sm:w-auto bg-white/10 backdrop-blur-md border-2 border-white/30 text-white px-10 md:px-12 py-4 md:py-5 rounded-full font-bold text-lg hover:bg-white hover:text-blue-950 transition-all flex items-center justify-center gap-2 hover:scale-105 active:scale-95">
              Plan a Visit <ArrowRight size={22} />
            </Link>
          </div>
        </div>

        <div className="absolute bottom-6 md:bottom-12 left-0 right-0 z-20 animate-bounce text-white/40 flex flex-col items-center gap-2 px-4 text-center">
          <span className="text-[9px] uppercase tracking-[0.6em] font-black opacity-60">Discover More</span>
          <div className="w-px h-10 md:h-16 bg-gradient-to-b from-white/40 to-transparent mx-auto"></div>
        </div>
      </section>

      {/* Floating Info Card */}
      <div className="relative z-30 max-w-6xl mx-auto -mt-16 px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 rounded-[3rem] overflow-hidden shadow-2xl bg-white border border-slate-100">
          <div className="p-8 md:p-10 flex items-start gap-6 border-b md:border-b-0 md:border-r border-slate-100">
            <div className="bg-sky-100 p-4 rounded-2xl text-sky-600">
              <Clock size={28} />
            </div>
            <div>
              <h3 className="text-blue-950 font-bold text-lg mb-1">Sunday Service</h3>
              <p className="text-slate-500 text-sm">Join us at 10:00 AM</p>
              <p className="text-slate-400 text-xs mt-1">In-person & Online</p>
            </div>
          </div>
          
          <div className="p-8 md:p-10 flex items-start gap-6 border-b md:border-b-0 md:border-r border-slate-100">
            <div className="bg-blue-100 p-4 rounded-2xl text-blue-600">
              <MapPin size={28} />
            </div>
            <div>
              <h3 className="text-blue-950 font-bold text-lg mb-1">Our Location</h3>
              <p className="text-slate-500 text-sm">123 Coastal Way</p>
              <p className="text-slate-400 text-xs mt-1">Harbor City, CA 90210</p>
            </div>
          </div>
          
          <div className="p-8 md:p-10 flex items-start gap-6">
            <div className="bg-amber-100 p-4 rounded-2xl text-amber-600">
              <Compass size={28} />
            </div>
            <div>
              <h3 className="text-blue-950 font-bold text-lg mb-1">Daily Anchor</h3>
              <p className="text-slate-500 text-sm italic line-clamp-2">"{dailyPrompt}"</p>
              <button onClick={() => generatePrayerPrompt().then(setDailyPrompt)} className="text-sky-600 text-xs font-bold mt-2 uppercase tracking-widest hover:text-sky-700 transition-colors">Refresh Prayer</button>
            </div>
          </div>
        </div>
      </div>

      {/* Philosophy Section */}
      <section className="py-32 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-sm font-black text-sky-500 tracking-[0.4em] uppercase mb-4">Our Values</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-blue-950 font-serif">A Church Built on Deep Waters</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { 
                icon: <Anchor size={32} />, 
                title: "Anchored in Christ", 
                desc: "We believe in a solid foundation that doesn't shift when the storms of life roll in. Our teaching is rooted in Biblical truth." 
              },
              { 
                icon: <Ship size={32} />, 
                title: "Safe Harbor", 
                desc: "Church should be a place where anyone can find rest. We prioritize community and support for every stage of life." 
              },
              { 
                icon: <Compass size={32} />, 
                title: "Navigating Purpose", 
                desc: "Faith isn't just for Sundays. We help you find your unique compass heading to serve the world and love your neighbor." 
              }
            ].map((item, i) => (
              <div key={i} className="group p-10 rounded-[2.5rem] bg-slate-50 hover:bg-blue-900 transition-all duration-500 hover:scale-105 hover:shadow-2xl">
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-sky-500 mb-8 shadow-sm group-hover:bg-sky-500 group-hover:text-white transition-colors">
                  {item.icon}
                </div>
                <h4 className="text-2xl font-bold text-blue-950 mb-4 group-hover:text-white transition-colors">{item.title}</h4>
                <p className="text-slate-600 group-hover:text-blue-100 leading-relaxed transition-colors">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="bg-blue-950 py-24 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <Waves className="absolute -bottom-20 -left-20 w-[600px] h-[600px] text-sky-400" />
        </div>
        
        <div className="max-w-4xl mx-auto text-center px-4 relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 font-serif italic">"May your faith be the anchor that keeps you steady in the rising tide."</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/connect" className="bg-sky-500 text-white px-10 py-4 rounded-full font-bold hover:bg-sky-400 transition-all shadow-xl">
              Get Connected
            </Link>
            <Link to="/team" className="bg-white/10 backdrop-blur-md text-white border border-white/20 px-10 py-4 rounded-full font-bold hover:bg-white/20 transition-all">
              Meet the Pastors
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

// Export the component as default to fix the "no default export" error in App.tsx
export default Home;
