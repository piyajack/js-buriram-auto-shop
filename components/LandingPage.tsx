
import React from 'react';
import { Play, ShieldCheck, Activity, Info, Youtube, Facebook, Music2 } from 'lucide-react';

interface LandingPageProps {
  onStart: () => void;
}

const LandingPage: React.FC<LandingPageProps> = ({ onStart }) => {
  return (
    <div className="min-h-[85vh] flex flex-col items-center justify-center p-4 text-center">
      <div className="max-w-4xl space-y-10 animate-in fade-in zoom-in duration-1000">
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-500/10 border border-red-500/20 rounded-full text-red-500 text-xs font-black uppercase tracking-[0.25em] mb-4">
            <span className="w-2 h-2 rounded-full bg-red-500 animate-ping"></span>
            Isuzu D-Max Diagnostic System
          </div>
          
          <h2 className="text-5xl md:text-8xl font-black text-white tracking-tighter leading-none">
            FLASHING MODE <br/> 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-red-500 to-orange-500">
              D-MAX DTC
            </span>
          </h2>
          
          <p className="text-slate-400 text-lg md:text-2xl max-w-3xl mx-auto leading-relaxed font-light">
            เครื่องมือวิเคราะห์รหัสไฟกระพริบ และฐานข้อมูลการซ่อมบำรุง <br/>
            พัฒนาโดย <span className="text-white font-bold underline decoration-red-600">JS Buriram Auto Shop</span>
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4">
           <button 
            onClick={onStart}
            className="group relative bg-red-600 hover:bg-red-500 text-white font-black py-6 px-16 rounded-2xl text-2xl flex items-center gap-4 transition-all active:scale-95 shadow-[0_20px_50px_rgba(220,38,38,0.3)] hover:shadow-[0_20px_70px_rgba(220,38,38,0.5)] border-b-8 border-red-800 hover:translate-y-[-4px] active:translate-y-[2px] active:border-b-0"
          >
            <Play fill="white" size={28} />
            เริ่มใช้งานระบบ
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left pt-10">
          <div className="bg-slate-900/60 backdrop-blur-md p-6 rounded-2xl border border-slate-800 hover:border-red-500/30 transition-all">
            <ShieldCheck className="text-red-500 mb-4" size={32} />
            <h3 className="font-bold text-slate-100 text-lg mb-2">Manual Diagnostic</h3>
            <p className="text-sm text-slate-500 leading-relaxed">ขั้นตอนการจัมพ์สาย OBD2 ขา 4 และ 6 อย่างละเอียด เข้าใจง่าย ปลอดภัยต่อกล่อง ECU</p>
          </div>
          <div className="bg-slate-900/60 backdrop-blur-md p-6 rounded-2xl border border-slate-800 hover:border-red-500/30 transition-all">
            <Activity className="text-red-500 mb-4" size={32} />
            <h3 className="font-bold text-slate-100 text-lg mb-2">Full DTC Database</h3>
            <p className="text-sm text-slate-500 leading-relaxed">รหัสครบถ้วนที่สุดสำหรับ D-Max (02-11) ทั้งรหัส 2 หลัก และ 3 หลัก (OBD-II standard)</p>
          </div>
          <div className="bg-slate-900/60 backdrop-blur-md p-6 rounded-2xl border border-slate-800 hover:border-red-500/30 transition-all">
            <Info className="text-red-500 mb-4" size={32} />
            <h3 className="font-bold text-slate-100 text-lg mb-2">AI Expert Support</h3>
            <p className="text-sm text-slate-500 leading-relaxed">ปรึกษาปัญหาเฉพาะหน้ากับ AI Mechanic ที่ผ่านการเทรนด้วยฐานข้อมูลจาก JS Buriram</p>
          </div>
        </div>

        <div className="flex flex-col items-center gap-4 pt-10 border-t border-slate-900">
           <p className="text-slate-600 text-[10px] uppercase font-bold tracking-[0.3em]">Official Channels</p>
           <div className="flex gap-8">
              <a href="https://www.youtube.com/@JsautomotivesTh" target="_blank" className="flex items-center gap-2 text-slate-500 hover:text-red-600 transition-all font-bold text-sm">
                <Youtube size={18} /> YouTube
              </a>
              <a href="https://www.facebook.com/JS.Automotive.thailand.Shop" target="_blank" className="flex items-center gap-2 text-slate-500 hover:text-blue-600 transition-all font-bold text-sm">
                <Facebook size={18} /> Facebook
              </a>
              <a href="https://www.tiktok.com/@JsautomotivesTh1999" target="_blank" className="flex items-center gap-2 text-slate-500 hover:text-white transition-all font-bold text-sm">
                <Music2 size={18} /> TikTok
              </a>
           </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;