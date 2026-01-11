
import React, { useState, useRef } from 'react';
import { Play, RotateCcw, Info } from 'lucide-react';
import { FLASH_CODES } from '../constants';

const CodeSimulator: React.FC = () => {
  const [selectedCode, setSelectedCode] = useState<number>(12);
  const [isAnimating, setIsAnimating] = useState(false);
  const [lightState, setLightState] = useState(false);
  const [statusMessage, setStatusMessage] = useState("พร้อมจำลองรหัส");
  const animationRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

  const runAnimation = async () => {
    if (isAnimating) return;
    setIsAnimating(true);
    
    // Support 2 and 3 digit codes
    const hundreds = Math.floor(selectedCode / 100);
    const tens = Math.floor((selectedCode % 100) / 10);
    const units = selectedCode % 10;

    setStatusMessage(`กำลังอ่านรหัส ${selectedCode}...`);

    // Part 1: Hundreds (Extra Slow/Long blinks if exists)
    if (hundreds > 0) {
      for (let i = 0; i < hundreds; i++) {
        setLightState(true);
        await sleep(1500); // Very long for 100s
        setLightState(false);
        await sleep(600);
      }
      await sleep(1000); // Pause before next digit
    }

    // Part 2: Tens (Slow blinks)
    if (tens > 0 || hundreds > 0) { // Keep zero-tens if hundreds exist for 10X codes
        for (let i = 0; i < (tens || 0); i++) {
          setLightState(true);
          await sleep(800);
          setLightState(false);
          await sleep(400);
        }
    }

    // Gap between digits
    await sleep(800);

    // Part 3: Units (Fast blinks)
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
    <div id="simulator" className="flex flex-col gap-6 p-6 bg-slate-800 rounded-2xl border border-slate-700 shadow-xl scroll-mt-20">
      <div className="text-center">
        <h3 className="text-lg font-bold text-slate-100 uppercase tracking-wide">Flash Code Simulator</h3>
        <p className="text-sm text-slate-400 italic">"ทดสอบจังหวะไฟเพื่อการเรียนรู้"</p>
      </div>

      <div className="flex flex-col items-center justify-center p-8 md:p-12 bg-black rounded-xl border-2 border-slate-700 relative overflow-hidden">
        <div className={`w-24 h-24 md:w-32 md:h-32 rounded-full flex items-center justify-center transition-all duration-100 ${lightState ? 'bg-orange-500 shadow-[0_0_60px_#f97316]' : 'bg-slate-900'}`}>
          <svg 
            viewBox="0 0 24 24" 
            className={`w-12 h-12 md:w-16 md:h-16 ${lightState ? 'text-black fill-black' : 'text-slate-700 fill-slate-800'}`}
          >
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/>
          </svg>
        </div>
        
        <div className="mt-8 text-xs md:text-sm font-mono text-orange-400 uppercase tracking-[0.2em]">
          {statusMessage}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="flex flex-col gap-2">
          <label className="text-xs font-bold text-slate-400 uppercase">เลือกรหัสที่ต้องการทดสอบ:</label>
          <select 
            value={selectedCode}
            onChange={(e) => setSelectedCode(Number(e.target.value))}
            disabled={isAnimating}
            className="bg-slate-900 border border-slate-700 rounded-lg py-3 px-3 text-slate-100 outline-none focus:ring-2 focus:ring-red-500 appearance-none cursor-pointer"
          >
            {FLASH_CODES.map(fc => (
              <option key={fc.code} value={fc.code}>
                CODE {fc.code} - {fc.description}
              </option>
            ))}
          </select>
        </div>

        <div className="flex items-end gap-2">
          <button 
            onClick={runAnimation}
            disabled={isAnimating}
            className="flex-1 bg-red-600 hover:bg-red-500 disabled:bg-slate-700 text-white font-bold py-3 px-4 rounded-lg flex items-center justify-center gap-2 transition-all active:scale-95 shadow-lg shadow-red-900/20"
          >
            <Play size={18} />
            เริ่มทดสอบ
          </button>
          <button 
            onClick={reset}
            className="bg-slate-700 hover:bg-slate-600 text-white font-bold py-3 px-4 rounded-lg flex items-center justify-center transition-all active:scale-95"
          >
            <RotateCcw size={18} />
          </button>
        </div>
      </div>

      <div className="bg-slate-900/50 p-4 rounded-lg border border-slate-700/50 flex gap-3">
        <Info className="text-blue-400 shrink-0" size={18} />
        <div className="text-[11px] text-slate-400 leading-relaxed">
          <strong className="text-slate-200 block mb-1">จังหวะการอ่านรหัส:</strong>
          {selectedCode >= 100 && (
            <div className="mb-1"><span className="text-orange-400 font-bold">ยาวมาก:</span> หลักร้อย (เช่น ยาวมาก 1 ครั้ง = 100)</div>
          )}
          <div className="mb-1"><span className="text-orange-400 font-bold">ยาวปกติ:</span> หลักสิบ (เช่น ยาว 2 ครั้ง = 20)</div>
          <div><span className="text-orange-400 font-bold">เร็วสั้น:</span> หลักหน่วย (เช่น เร็ว 4 ครั้ง = 4)</div>
        </div>
      </div>
    </div>
  );
};

export default CodeSimulator;
