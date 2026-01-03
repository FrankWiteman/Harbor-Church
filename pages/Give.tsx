
import React, { useState } from 'react';
import { Heart, Shield, RefreshCcw, DollarSign, ArrowRight } from 'lucide-react';

const Give: React.FC = () => {
  const [amount, setAmount] = useState<string>('');
  const [frequency, setFrequency] = useState<'One-time' | 'Monthly' | 'Weekly'>('One-time');

  const presetAmounts = ['25', '50', '100', '250', '500'];

  return (
    <div className="min-h-screen bg-slate-50 pb-20">
      <div className="bg-gradient-to-br from-blue-900 to-blue-950 text-white py-24">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <Heart size={48} className="mx-auto text-sky-400 mb-6" />
          <h1 className="text-4xl md:text-6xl font-bold mb-6 font-serif">Investing in Eternity</h1>
          <p className="text-xl text-blue-200 max-w-2xl mx-auto font-light leading-relaxed">
            Your generosity fuels the mission of Harbor Church. Together, we provide a safe harbor for the broken and a compass for the lost.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 -mt-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Giving Form Card */}
          <div className="lg:col-span-2 bg-white rounded-[2.5rem] shadow-2xl p-8 md:p-12 border border-slate-100">
            <h2 className="text-2xl font-bold text-blue-950 mb-8">Set Your Gift</h2>
            
            <div className="space-y-8">
              {/* Frequency Toggle */}
              <div>
                <label className="block text-sm font-bold text-slate-500 uppercase tracking-widest mb-4">Frequency</label>
                <div className="flex p-1 bg-slate-100 rounded-2xl w-fit">
                  {['One-time', 'Monthly', 'Weekly'].map((f) => (
                    <button
                      key={f}
                      onClick={() => setFrequency(f as any)}
                      className={`px-6 py-2 rounded-xl text-sm font-bold transition-all ${
                        frequency === f ? 'bg-white text-blue-900 shadow-sm' : 'text-slate-500 hover:text-slate-700'
                      }`}
                    >
                      {f}
                    </button>
                  ))}
                </div>
              </div>

              {/* Amount Selection */}
              <div>
                <label className="block text-sm font-bold text-slate-500 uppercase tracking-widest mb-4">Amount</label>
                <div className="grid grid-cols-3 sm:grid-cols-5 gap-3 mb-4">
                  {presetAmounts.map((a) => (
                    <button
                      key={a}
                      onClick={() => setAmount(a)}
                      className={`py-4 rounded-xl font-bold border-2 transition-all ${
                        amount === a 
                        ? 'border-blue-900 bg-blue-900 text-white' 
                        : 'border-slate-100 hover:border-blue-200 text-slate-600'
                      }`}
                    >
                      ${a}
                    </button>
                  ))}
                </div>
                <div className="relative">
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 font-bold">$</div>
                  <input 
                    type="number" 
                    placeholder="Other Amount" 
                    className="w-full pl-10 pr-4 py-4 rounded-2xl bg-slate-50 border-none focus:ring-2 focus:ring-blue-500 text-lg font-bold"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                  />
                </div>
              </div>

              <button className="w-full bg-blue-900 text-white py-5 rounded-2xl font-bold text-xl hover:bg-blue-800 shadow-xl flex items-center justify-center gap-3 group">
                Continue to Give <ArrowRight className="group-hover:translate-x-1 transition-transform" />
              </button>
              
              <div className="flex items-center justify-center gap-6 text-xs text-slate-400 uppercase tracking-widest font-bold">
                <span className="flex items-center gap-1"><Shield size={14} /> Secure Encryption</span>
                <span className="flex items-center gap-1"><RefreshCcw size={14} /> Easy Cancellation</span>
              </div>
            </div>
          </div>

          {/* Impact Sidebar */}
          <div className="space-y-8">
            <div className="bg-sky-50 rounded-[2rem] p-8 border border-sky-100">
              <h3 className="text-xl font-bold text-sky-950 mb-4">Where does it go?</h3>
              <ul className="space-y-4">
                <li className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-sky-200 flex shrink-0 items-center justify-center text-sky-700"><DollarSign size={20} /></div>
                  <p className="text-sm text-sky-900 font-medium">Local Outreach (30%): Food banks, housing support, and school programs.</p>
                </li>
                <li className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-sky-200 flex shrink-0 items-center justify-center text-sky-700"><DollarSign size={20} /></div>
                  <p className="text-sm text-sky-900 font-medium">Campus Operations (50%): Building care, staffing, and weekly services.</p>
                </li>
                <li className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-sky-200 flex shrink-0 items-center justify-center text-sky-700"><DollarSign size={20} /></div>
                  <p className="text-sm text-sky-900 font-medium">Global Missions (20%): Planting churches and supporting missionaries abroad.</p>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-[2rem] p-8 border border-slate-100 shadow-sm text-center">
              <h3 className="font-bold text-blue-950 mb-2">Legacy Giving</h3>
              <p className="text-sm text-slate-500 mb-4 leading-relaxed">Interested in non-cash gifts, stocks, or estate planning?</p>
              <button className="text-blue-900 font-bold text-sm hover:underline">Learn More &rarr;</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Give;
