
import React, { useState, useEffect, useRef } from 'react';
import { Play, RotateCcw, Info } from 'lucide-react';
import { FLASH_CODES } from '../constants';

const CodeSimulator: React.FC = () => {
  const [selectedCode, setSelectedCode] = useState<number>(12);
  const [isAnimating, setIsAnimating] = useState(false);
  const [lightState, setLightState] = useState(false);
  const [statusMessage, setStatusMessage] = useState("พร้อมจำลองรหัส");
  // Use ReturnType<typeof setTimeout> to avoid NodeJS namespace dependency in the browser
  const animationRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

  const runAnimation = async () => {
    if (isAnimating) return;
    setIsAnimating(true);
    
    const tens = Math.floor(selectedCode / 10);
    const units = selectedCode % 10;

    setStatusMessage(`กำลังอ่านรหัส ${selectedCode}...`);

    // Part 1: Tens (Slow blinks)
    for (let i = 0; i < tens; i++) {
      setLightState(true);
      await sleep(800);
      setLightState(false);
      await sleep(400);
    }

    // Gap between tens and units
    await sleep(800);

    // Part 2: Units (Fast blinks)
    for (let i = 0; i < units; i++) {
      setLightState(true);
      await sleep(300);
      setLightState(false);
      await sleep(300);
    }

    setStatusMessage(`รหัส ${selectedCode} จบแล้ว`);
    setIsAnimating(false);
  };

  const reset = () => {
    if (animationRef.current) clearTimeout(animationRef.current);
    setIsAnimating(false);
    setLightState(false);
    setStatusMessage("พร้อมจำลองรหัส");
  };

  return (
    <div className="flex flex-col gap-6 p-6 bg-slate-800 rounded-2xl border border-slate-700 shadow-xl">
      <div className="text-center">
        <h3 className="text-lg font-bold text-slate-100">Flash Code Simulator</h3>
        <p className="text-sm text-slate-400">ฝึกหัดอ่านจังหวะไฟกระพริบจริง</p>
      </div>

      <div className="flex flex-col items-center justify-center p-12 bg-black rounded-xl border-2 border-slate-700 relative overflow-hidden">
        {/* Dashboard Visual */}
        <div className={`w-32 h-32 rounded-full flex items-center justify-center transition-all duration-100 ${lightState ? 'bg-orange-500 shadow-[0_0_50px_#f97316]' : 'bg-slate-900'}`}>
          <svg 
            viewBox="0 0 24 24" 
            className={`w-16 h-16 ${lightState ? 'text-black fill-black' : 'text-slate-700 fill-slate-800'}`}
          >
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/>
          </svg>
        </div>
        
        <div className="mt-8 text-sm font-mono text-orange-400 uppercase tracking-widest">
          {statusMessage}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium text-slate-300">เลือกรหัสที่ต้องการจำลอง:</label>
          <select 
            value={selectedCode}
            onChange={(e) => setSelectedCode(Number(e.target.value))}
            disabled={isAnimating}
            className="bg-slate-700 border border-slate-600 rounded-lg py-2 px-3 text-slate-100 outline-none focus:ring-2 focus:ring-red-500"
          >
            {FLASH_CODES.map(fc => (
              <option key={fc.code} value={fc.code}>
                Code {fc.code} - {fc.description}
              </option>
            ))}
          </select>
        </div>

        <div className="flex items-end gap-2">
          <button 
            onClick={runAnimation}
            disabled={isAnimating}
            className="flex-1 bg-red-600 hover:bg-red-500 disabled:bg-slate-600 text-white font-bold py-2 px-4 rounded-lg flex items-center justify-center gap-2 transition-all active:scale-95"
          >
            <Play size={20} />
            เริ่มกระพริบ
          </button>
          <button 
            onClick={reset}
            className="bg-slate-700 hover:bg-slate-600 text-white font-bold py-2 px-4 rounded-lg flex items-center justify-center gap-2 transition-all active:scale-95"
          >
            <RotateCcw size={20} />
          </button>
        </div>
      </div>

      <div className="bg-slate-900/50 p-4 rounded-lg border border-slate-700/50 flex gap-3">
        <Info className="text-blue-400 shrink-0" size={20} />
        <div className="text-xs text-slate-400 leading-relaxed">
          <strong className="text-slate-200 block mb-1">เทคนิคการอ่าน:</strong>
          - จังหวะ <span className="text-orange-400">ช้า</span> คือหลักสิบ (เช่น ช้า 2 ครั้ง = 20) <br/>
          - จังหวะ <span className="text-orange-400 font-bold">เร็ว</span> คือหลักหน่วย (เช่น เร็ว 4 ครั้ง = 4) <br/>
          - รวมกันคือ Code 24
        </div>
      </div>
    </div>
  );
};

export default CodeSimulator;
