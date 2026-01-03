
import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, Anchor, Heart, Radio, Users, MessageSquare, Ship, ChevronLeft } from 'lucide-react';
import { HARBOR_LOGO } from '../constants';

const NavLink: React.FC<{ to: string; label: string; icon: React.ReactNode; onClick?: () => void }> = ({ to, label, icon, onClick }) => {
  const location = useLocation();
  const isActive = location.pathname === to;
  
  return (
    <Link
      to={to}
      onClick={onClick}
      className={`flex items-center space-x-2 px-4 py-2 rounded-full transition-all duration-300 ${
        isActive 
          ? 'bg-blue-900 text-white shadow-lg' 
          : 'text-slate-600 hover:bg-slate-100 hover:text-blue-900'
      }`}
    >
      <span className={isActive ? 'text-sky-300' : 'text-slate-400'}>{icon}</span>
      <span className="font-semibold text-sm tracking-wide">{label}</span>
    </Link>
  );
};

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  
  // Touch handling for swipe-to-close
  const touchStart = useRef<number | null>(null);
  const touchEnd = useRef<number | null>(null);
  const minSwipeDistance = 50;

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMenuOpen]);

  const onTouchStart = (e: React.TouchEvent) => {
    touchEnd.current = null;
    touchStart.current = e.targetTouches[0].clientX;
  };

  const onTouchMove = (e: React.TouchEvent) => {
    touchEnd.current = e.targetTouches[0].clientX;
  };

  const onTouchEnd = () => {
    if (!touchStart.current || !touchEnd.current) return;
    const distance = touchStart.current - touchEnd.current;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isMenuOpen && (isLeftSwipe || isRightSwipe)) {
      // Swipe detected while menu open, close it
      setIsMenuOpen(false);
    }
  };

  const isHome = location.pathname === '/';
  // Navigation stays fixed and visible
  const navClass = scrolled || !isHome 
    ? 'nav-blur shadow-sm py-3' 
    : 'bg-transparent py-6';
  
  const textClass = (scrolled || !isHome) && !isMenuOpen ? 'text-blue-950' : (isMenuOpen ? 'text-blue-900' : 'text-white');

  const navItems = [
    { to: '/', label: 'HOME', icon: <Anchor size={18} /> },
    { to: '/messages', label: 'MESSAGES', icon: <Radio size={18} /> },
    { to: '/team', label: 'OUR TEAM', icon: <Users size={18} /> },
    { to: '/connect', label: 'CONNECT', icon: <MessageSquare size={18} /> },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <nav className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${navClass}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <Link to="/" onClick={() => setIsMenuOpen(false)} className="flex items-center space-x-3 group relative z-[110]">
              <div className={`w-8 h-8 md:w-10 md:h-10 transition-colors duration-500 ${scrolled || !isHome || isMenuOpen ? 'text-blue-900' : 'text-sky-400'} group-hover:scale-110 transform transition-transform`}>
                {HARBOR_LOGO}
              </div>
              <span className={`text-xl md:text-2xl font-black tracking-tighter transition-colors duration-500 ${isMenuOpen ? 'text-blue-900' : textClass}`}>
                HARBOR<span className="font-light opacity-70">CHURCH</span>
              </span>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-2">
              {navItems.map((item) => (
                <NavLink key={item.to} {...item} />
              ))}
              <Link to="/give" className="ml-6 bg-sky-500 text-white px-6 py-2.5 rounded-full font-extrabold text-sm hover:bg-sky-400 transition-all shadow-md hover:shadow-xl active:scale-95">
                GIVE
              </Link>
            </div>

            {/* Mobile menu button - Fixed position ensured */}
            <div className="md:hidden flex items-center relative z-[110]">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className={`p-2.5 rounded-full transition-all duration-300 ${isMenuOpen ? 'bg-blue-50 text-blue-900' : textClass}`}
                aria-label="Toggle Menu"
              >
                {isMenuOpen ? <X size={24} strokeWidth={2.5} /> : <Menu size={24} strokeWidth={2.5} />}
              </button>
            </div>
          </div>
        </div>

        {/* Swipe-enabled Full Screen Menu Overlay */}
        {isMenuOpen && (
          <div 
            className="md:hidden fixed inset-0 z-[90] flex flex-col items-center justify-center"
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
          >
            {/* Full-screen background */}
            <div 
              className="absolute inset-0 bg-white/95 backdrop-blur-2xl animate-in fade-in duration-500"
              onClick={() => setIsMenuOpen(false)}
            ></div>
            
            <div className="relative z-10 w-full max-w-xs px-6 space-y-4">
              {navItems.map((item, idx) => (
                <Link
                  key={item.to}
                  to={item.to}
                  onClick={() => setIsMenuOpen(false)}
                  style={{ animationDelay: `${idx * 80}ms` }}
                  className="flex items-center space-x-6 p-5 rounded-[2rem] bg-slate-50 text-blue-950 font-black text-xl shadow-sm border border-slate-100 opacity-0 animate-menu-item"
                >
                  <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-sky-600 shadow-sm">
                    {item.icon}
                  </div>
                  <span>{item.label}</span>
                </Link>
              ))}
              
              <Link 
                to="/give" 
                onClick={() => setIsMenuOpen(false)}
                style={{ animationDelay: `${navItems.length * 80}ms` }}
                className="w-full bg-blue-900 text-white p-6 rounded-[2rem] font-black text-xl text-center shadow-xl flex items-center justify-center gap-3 mt-6 opacity-0 animate-menu-item"
              >
                <Heart size={24} fill="currentColor" /> GIVE NOW
              </Link>

              {/* Swipe/Back Hint */}
              <div 
                className="pt-12 flex flex-col items-center gap-4 opacity-0 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-500 fill-mode-both"
              >
                <div className="flex gap-6">
                  <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-400"><Radio size={18} /></div>
                  <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-400"><Ship size={18} /></div>
                  <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-400"><Anchor size={18} /></div>
                </div>
                <button 
                  onClick={() => { navigate(-1); setIsMenuOpen(false); }}
                  className="flex items-center gap-2 text-slate-400 font-bold text-xs uppercase tracking-[0.2em] mt-4"
                >
                  <ChevronLeft size={14} /> Swipe to Go Back
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>

      <main className="flex-grow pt-0 page-enter">
        {children}
      </main>

      <footer className="bg-[#0a0f1d] text-white pt-24 pb-12 overflow-hidden relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-12 relative z-10">
          <div className="md:col-span-1 text-center md:text-left">
            <div className="w-16 h-16 text-sky-400 mb-6 mx-auto md:mx-0">
              {HARBOR_LOGO}
            </div>
            <h3 className="text-2xl font-bold mb-4 font-serif">Harbor Church</h3>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              Providing a safe harbor for the broken and a navigation point for the wandering since 2012.
            </p>
          </div>
          
          <div className="text-center md:text-left">
            <h4 className="font-bold text-sky-400 mb-6 uppercase tracking-widest text-xs">Resources</h4>
            <ul className="space-y-4 text-slate-300 text-sm">
              <li><Link to="/messages" className="hover:text-white transition-colors">Watch Messages</Link></li>
              <li><Link to="/connect" className="hover:text-white transition-colors">Small Groups</Link></li>
              <li><Link to="/give" className="hover:text-white transition-colors">Giving FAQ</Link></li>
              <li><Link to="/team" className="hover:text-white transition-colors">Meet the Team</Link></li>
            </ul>
          </div>
          
          <div className="text-center md:text-left">
            <h4 className="font-bold text-sky-400 mb-6 uppercase tracking-widest text-xs">Visit</h4>
            <p className="text-slate-300 text-sm leading-relaxed">
              123 Coastal Way<br />
              Harbor City, CA 90210<br /><br />
              Sunday Gathering:<br />
              10:00 AM
            </p>
          </div>
          
          <div className="text-center md:text-left">
            <h4 className="font-bold text-sky-400 mb-6 uppercase tracking-widest text-xs">Connect</h4>
            <p className="text-slate-300 text-sm mb-6">hello@harborchurch.com</p>
            <div className="flex justify-center md:justify-start space-x-4">
              {[Radio, Heart, Anchor, Users].map((Icon, i) => (
                <div key={i} className="w-10 h-10 rounded-xl bg-blue-900/50 flex items-center justify-center hover:bg-sky-500 transition-all cursor-pointer group">
                  <Icon size={18} className="group-hover:scale-110 transition-transform" />
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 mt-20 pt-8 border-t border-white/5 text-center text-xs text-slate-500 tracking-widest">
          &copy; {new Date().getFullYear()} HARBOR CHURCH • ANCHORED IN FAITH • BUILT FOR COMMUNITY
        </div>
      </footer>
    </div>
  );
};

export default Layout;
