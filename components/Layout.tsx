
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { X, Anchor, Heart, Radio, Users, MessageSquare, Compass, Clock, MapPin } from 'lucide-react';
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
  
  const navItems = [
    { to: '/', label: 'HOME', icon: <Anchor size={24} /> },
    { to: '/messages', label: 'MESSAGES', icon: <Radio size={24} /> },
    { to: '/team', label: 'OUR TEAM', icon: <Users size={24} /> },
    { to: '/connect', label: 'CONNECT', icon: <MessageSquare size={24} /> },
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
  }, [isMenuOpen]);

  // Auto-close menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  const isHome = location.pathname === '/';
  const navClass = scrolled || !isHome 
    ? 'nav-blur shadow-sm py-3' 
    : 'bg-transparent py-6';
  
  const textClass = (scrolled || !isHome) ? 'text-blue-950' : 'text-white';

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar Branding */}
      <nav className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${navClass}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <Link to="/" className="flex items-center space-x-3 group relative z-[110]">
              <div className={`w-8 h-8 md:w-10 md:h-10 transition-colors duration-500 ${scrolled || !isHome ? 'text-blue-900' : 'text-sky-400'} group-hover:scale-110 transform transition-transform`}>
                {HARBOR_LOGO}
              </div>
              <span className={`text-xl md:text-2xl font-black tracking-tighter transition-colors duration-500 ${textClass}`}>
                HARBOR<span className="font-light opacity-70">CHURCH</span>
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-2">
              {navItems.map((item) => (
                <NavLink key={item.to} {...item} icon={React.cloneElement(item.icon as React.ReactElement<any>, { size: 18 })} />
              ))}
              <Link to="/give" className="ml-6 bg-sky-500 text-white px-6 py-2.5 rounded-full font-extrabold text-sm hover:bg-sky-400 transition-all shadow-md active:scale-95">
                GIVE
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Floating Compass Button (Mobile) */}
      <div className="md:hidden fixed bottom-6 right-6 z-[200]">
         <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`w-16 h-16 rounded-full flex items-center justify-center shadow-[0_12px_40px_rgba(0,0,0,0.4)] border-2 transition-all duration-500 active:scale-90 ${
              isMenuOpen 
                ? 'bg-white text-blue-950 border-blue-900 rotate-90 scale-110' 
                : 'bg-blue-950 text-sky-400 border-white/20'
            }`}
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? <X size={32} /> : <Compass size={32} className="animate-pulse" />}
            {!isMenuOpen && (
              <span className="absolute -top-1 -right-1 flex h-4 w-4">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-4 w-4 bg-sky-500"></span>
              </span>
            )}
          </button>
      </div>

      {/* Mobile Drawer Overlay */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 z-[190] flex flex-col justify-end">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-blue-950/70 backdrop-blur-md animate-fade"
            onClick={() => setIsMenuOpen(false)}
          ></div>
          
          {/* Menu Drawer */}
          <div className="relative z-10 w-full bg-white rounded-t-[3rem] px-6 pt-6 pb-12 shadow-[0_-10px_40px_rgba(0,0,0,0.5)] animate-drawer max-h-[85vh] overflow-y-auto">
            {/* Grab Handle */}
            <div className="w-12 h-1.5 bg-slate-200 rounded-full mx-auto mb-8"></div>
            
            <div className="mb-8 px-2">
              <h2 className="text-2xl font-black text-blue-950 tracking-tight">Harbor Hub</h2>
              <p className="text-slate-400 text-xs font-bold uppercase tracking-widest mt-1">Navigate your journey</p>
            </div>

            {/* Main Grid */}
            <div className="grid grid-cols-2 gap-4">
              {navItems.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  className={`flex flex-col items-start gap-4 p-6 rounded-[2rem] border transition-all active:scale-95 ${
                    location.pathname === item.to 
                      ? 'bg-blue-950 text-white border-blue-900 shadow-xl' 
                      : 'bg-slate-50 text-blue-950 border-slate-100 hover:bg-sky-50'
                  }`}
                >
                  <div className={`${location.pathname === item.to ? 'text-sky-400' : 'text-sky-600'}`}>
                    {item.icon}
                  </div>
                  <span className="text-xs font-black tracking-widest uppercase">{item.label}</span>
                </Link>
              ))}
            </div>
            
            {/* Primary Action */}
            <Link 
              to="/give" 
              className="w-full bg-sky-500 text-white p-6 rounded-[2.5rem] font-black text-xl text-center shadow-lg flex items-center justify-center gap-3 mt-4 active:scale-95 transition-all"
            >
              <Heart size={24} fill="white" /> GIVE GENEROUSLY
            </Link>

            {/* Quick Info Footer */}
            <div className="mt-8 pt-8 border-t border-slate-100 flex flex-col gap-4">
              <div className="flex items-center gap-4 text-slate-500">
                <Clock size={18} className="text-sky-500" />
                <span className="text-sm font-semibold italic">Sundays at 10:00 AM</span>
              </div>
              <div className="flex items-center gap-4 text-slate-500">
                <MapPin size={18} className="text-sky-500" />
                <span className="text-sm font-semibold italic">123 Coastal Way, Harbor City</span>
              </div>
            </div>
          </div>
        </div>
      )}

      <main className="flex-grow pt-0 page-enter">
        {children}
      </main>

      {/* Footer stays unchanged */}
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
