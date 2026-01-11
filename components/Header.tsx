
import React from 'react';
import { Wrench, Youtube, Facebook, Music2, MapPin } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-slate-900 border-b border-slate-700 shadow-2xl sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-3">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="bg-red-600 p-2 rounded-lg shadow-lg shadow-red-900/40">
              <Wrench className="text-white w-6 h-6" />
            </div>
            <div className="text-center md:text-left">
              <h1 className="font-bold text-xl md:text-2xl tracking-tight leading-none text-white">
                Flashing Mode <span className="text-red-500 underline decoration-red-900 decoration-4 underline-offset-4">D-max DTC</span>
              </h1>
              <p className="text-[10px] text-slate-500 uppercase tracking-widest mt-1">By JS Buriram Auto Shop</p>
            </div>
          </div>

          <div className="flex flex-col items-center md:items-end gap-2">
            <div className="flex items-center gap-2 text-[11px] font-bold text-slate-300 uppercase tracking-wider">
              <MapPin size={12} className="text-red-500" />
              JS Buriram Auto Shop <span className="text-slate-500">#JsautomotivesTh</span>
            </div>
            <div className="flex items-center gap-5">
              <a href="https://www.youtube.com/@JsautomotivesTh" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-red-500 transition-all transform hover:scale-110" title="YouTube">
                <Youtube size={20} />
              </a>
              <a href="https://www.facebook.com/JS.Automotive.thailand.Shop" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-blue-500 transition-all transform hover:scale-110" title="Facebook">
                <Facebook size={20} />
              </a>
              <a href="https://www.tiktok.com/@JsautomotivesTh1999" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-all transform hover:scale-110" title="TikTok">
                <Music2 size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;