
import React from 'react';

const OBDVisualizer: React.FC = () => {
  const pins = Array.from({ length: 16 }, (_, i) => i + 1);
  
  const isTarget = (pin: number) => pin === 4 || pin === 6;

  return (
    <div className="flex flex-col items-center p-6 bg-slate-800 rounded-2xl border border-slate-700 shadow-xl overflow-hidden">
      <h3 className="text-lg font-bold mb-4 text-slate-100 uppercase tracking-widest">OBD2 16-PIN CONNECTOR</h3>
      
      <div className="relative w-full max-w-sm">
        <svg viewBox="0 0 400 150" className="w-full drop-shadow-2xl">
          {/* Main Connector Body */}
          <path 
            d="M 20 20 L 380 20 L 350 130 L 50 130 Z" 
            fill="#1e293b" 
            stroke="#475569" 
            strokeWidth="4"
          />
          
          {/* Pins Top Row (1-8) */}
          {pins.slice(0, 8).map((pin, idx) => {
            const x = 60 + idx * 40;
            const y = 50;
            return (
              <g key={pin}>
                <rect 
                  x={x - 12} y={y - 12} width="24" height="24" rx="4"
                  fill={isTarget(pin) ? "#ef4444" : "#334155"}
                  className={isTarget(pin) ? "animate-pulse" : ""}
                />
                <text x={x} y={y + 35} textAnchor="middle" fill="#94a3b8" fontSize="12" fontWeight="bold">{pin}</text>
                {isTarget(pin) && (
                  <circle cx={x} cy={y} r="4" fill="white" />
                )}
              </g>
            );
          })}

          {/* Pins Bottom Row (9-16) */}
          {pins.slice(8, 16).map((pin, idx) => {
            const x = 70 + idx * 37;
            const y = 100;
            return (
              <g key={pin}>
                <rect 
                  x={x - 12} y={y - 12} width="24" height="24" rx="4"
                  fill="#334155"
                />
                <text x={x} y={y - 25} textAnchor="middle" fill="#94a3b8" fontSize="12" fontWeight="bold">{pin}</text>
              </g>
            );
          })}

          {/* Jumper Wire Line */}
          <path 
            d="M 180 50 Q 220 0 260 50" 
            fill="none" 
            stroke="#ef4444" 
            strokeWidth="4" 
            strokeLinecap="round"
            strokeDasharray="8 4"
            className="animate-[dash_2s_linear_infinite]"
          />
        </svg>
      </div>

      <div className="mt-8 flex gap-4 text-sm font-medium">
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-red-500 rounded animate-pulse"></div>
          <span>PIN 4 (GND)</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-red-500 rounded animate-pulse"></div>
          <span>PIN 6 (Diagnosis)</span>
        </div>
      </div>
      
      <p className="mt-4 text-xs text-slate-400 text-center italic">
        * หงายด้านกว้างขึ้น (เหมือนในรูป) นับจากซ้ายไปขวา รูที่ 4 และ 6 แถวบน
      </p>
    </div>
  );
};

export default OBDVisualizer;
