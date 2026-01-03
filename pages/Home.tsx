
import React, { useEffect, useState } from 'react';
import { ArrowRight, Play, Compass, Ship, Anchor, Waves, Clock, MapPin, Sparkles, Megaphone, Calendar, Users, Smartphone, MessageCircle, HeartHandshake, Globe, Quote } from 'lucide-react';
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

        {/* Refined Discover More - Better mobile spacing and minimalist line */}
        <div className="absolute bottom-10 left-0 right-0 z-20 flex flex-col items-center gap-3 pointer-events-none">
          <span className="text-[10px] md:text-xs uppercase tracking-[0.4em] font-bold text-white/60 animate-pulse">Explore</span>
          <div className="w-px h-8 md:h-12 bg-gradient-to-b from-white/60 to-transparent animate-bounce"></div>
        </div>
      </section>

      {/* Floating Info Card */}
      <div className="relative z-30 max-w-6xl mx-auto -mt-16 px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 rounded-[3rem] overflow-hidden shadow-2xl bg-white border border-slate-100">
          <div className="p-8 md:p-10 flex items-start gap-6 border-b md:border-b-0 md:border-r border-slate-100 hover:bg-slate-50 transition-colors">
            <div className="bg-sky-100 p-4 rounded-2xl text-sky-600">
              <Clock size={28} />
            </div>
            <div>
              <h3 className="text-blue-950 font-bold text-lg mb-1">Sunday Service</h3>
              <p className="text-slate-500 text-sm">Join us at 10:00 AM</p>
              <p className="text-slate-400 text-xs mt-1">In-person & Online</p>
            </div>
          </div>
          
          <div className="p-8 md:p-10 flex items-start gap-6 border-b md:border-b-0 md:border-r border-slate-100 hover:bg-slate-50 transition-colors">
            <div className="bg-blue-100 p-4 rounded-2xl text-blue-600">
              <MapPin size={28} />
            </div>
            <div>
              <h3 className="text-blue-950 font-bold text-lg mb-1">Our Location</h3>
              <p className="text-slate-500 text-sm">123 Coastal Way</p>
              <p className="text-slate-400 text-xs mt-1">Harbor City, CA 90210</p>
            </div>
          </div>
          
          <div className="p-8 md:p-10 flex items-start gap-6 hover:bg-slate-50 transition-colors">
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

      {/* The Great Commission Section - Matt 28:19-20 */}
      <section className="py-24 px-4 bg-slate-50 relative overflow-hidden">
        <div className="absolute top-0 right-0 opacity-5 -mr-20 -mt-20">
          <Globe size={400} />
        </div>
        <div className="max-w-5xl mx-auto relative z-10">
          <div className="flex flex-col items-center text-center">
            <div className="w-12 h-12 bg-blue-900 text-white rounded-full flex items-center justify-center mb-10 shadow-xl">
              <Quote size={20} fill="white" />
            </div>
            <h2 className="text-3xl md:text-5xl font-serif text-blue-950 italic leading-snug mb-8 px-4">
              "Therefore go and make disciples of all nations, baptizing them in the name of the Father and of the Son and of the Holy Spirit... And surely I am with you always, to the very end of the age."
            </h2>
            <div className="flex items-center gap-4">
              <div className="h-px w-12 bg-sky-500"></div>
              <span className="text-sky-600 font-black tracking-[0.3em] uppercase text-sm">Matthew 28:19-20</span>
              <div className="h-px w-12 bg-sky-500"></div>
            </div>
            <p className="mt-12 text-slate-500 max-w-xl text-lg font-light">
              This is our mandate. We are not just a building; we are a people sent on a mission to bring the peace of the Harbor to the ends of the earth.
            </p>
          </div>
        </div>
      </section>

      {/* NEW: Announcements Section */}
      <section className="py-32 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="text-left">
              <div className="flex items-center gap-2 text-sky-500 mb-4">
                <Megaphone size={20} className="animate-bounce" />
                <span className="text-sm font-black tracking-[0.3em] uppercase">What's New</span>
              </div>
              <h2 className="text-4xl md:text-6xl font-bold text-blue-950 font-serif">News from the Port</h2>
            </div>
            <Link to="/connect" className="group text-blue-900 font-bold flex items-center gap-2 hover:gap-4 transition-all pb-2 border-b-2 border-transparent hover:border-sky-500">
              All Events <ArrowRight size={20} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Announcement Card 1 */}
            <div className="group bg-blue-50 rounded-[2.5rem] p-10 border border-blue-100 hover:bg-blue-900 transition-all duration-500 hover:shadow-2xl flex flex-col">
              <div className="bg-white w-14 h-14 rounded-2xl flex items-center justify-center text-blue-900 mb-8 shadow-sm group-hover:scale-110 transition-transform">
                <Calendar size={28} />
              </div>
              <h3 className="text-2xl font-bold text-blue-950 mb-4 group-hover:text-white transition-colors">Vision Night 2025</h3>
              <p className="text-slate-600 group-hover:text-blue-100 leading-relaxed mb-8 flex-grow">
                Join us for an evening of worship and a special reveal of where Harbor Church is heading in the new year. Dinner provided.
              </p>
              <div className="pt-6 border-t border-blue-200 group-hover:border-blue-700 flex justify-between items-center">
                <span className="text-xs font-black text-sky-600 uppercase tracking-widest group-hover:text-sky-300">Dec 12 • 6 PM</span>
                <span className="text-blue-900 font-bold text-sm group-hover:text-white">RSVP &rarr;</span>
              </div>
            </div>

            {/* Announcement Card 2 (Prominent) */}
            <div className="group bg-blue-950 rounded-[2.5rem] p-10 border border-blue-900 relative overflow-hidden shadow-xl hover:scale-105 transition-all duration-500">
              <div className="absolute top-0 right-0 p-8 opacity-10">
                <Waves size={120} className="text-sky-400 rotate-12" />
              </div>
              <div className="relative z-10">
                <div className="bg-sky-500 w-14 h-14 rounded-2xl flex items-center justify-center text-white mb-8 shadow-lg">
                  <HeartHandshake size={28} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Baptism Sunday</h3>
                <p className="text-blue-100 leading-relaxed mb-8">
                  Publicly declaring your faith is a powerful milestone. If you're ready to take the plunge, sign up for our upcoming celebration.
                </p>
                <div className="pt-6 border-t border-blue-800 flex justify-between items-center">
                  <span className="text-xs font-black text-sky-400 uppercase tracking-widest">Next Sunday</span>
                  <button className="bg-white text-blue-950 px-4 py-2 rounded-full font-bold text-xs hover:bg-sky-50 transition-colors">Register Now</button>
                </div>
              </div>
            </div>

            {/* Announcement Card 3 */}
            <div className="group bg-slate-50 rounded-[2.5rem] p-10 border border-slate-200 hover:bg-sky-500 transition-all duration-500 hover:shadow-2xl flex flex-col">
              <div className="bg-white w-14 h-14 rounded-2xl flex items-center justify-center text-sky-600 mb-8 shadow-sm group-hover:scale-110 transition-transform">
                <Smartphone size={28} />
              </div>
              <h3 className="text-2xl font-bold text-blue-950 mb-4 group-hover:text-white transition-colors">Harbor Mobile App</h3>
              <p className="text-slate-600 group-hover:text-sky-50 leading-relaxed mb-8 flex-grow">
                Stay connected 24/7. Access sermons, giving, and community chats directly from your phone.
              </p>
              <div className="pt-6 border-t border-slate-200 group-hover:border-sky-400 flex justify-between items-center">
                <span className="text-xs font-black text-sky-600 uppercase tracking-widest group-hover:text-white">Available Now</span>
                <span className="text-blue-900 font-bold text-sm group-hover:text-white">Get it &rarr;</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-32 px-4 bg-slate-50">
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
              <div key={i} className="group p-10 rounded-[2.5rem] bg-white hover:bg-blue-900 transition-all duration-500 hover:scale-105 hover:shadow-2xl border border-slate-100">
                <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center text-sky-500 mb-8 shadow-sm group-hover:bg-sky-500 group-hover:text-white transition-colors">
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

export default Home;
