
import React, { useState, useRef, useEffect } from 'react';
import { Send, User, Bot, Loader2, Info } from 'lucide-react';
import { getGeminiTroubleshooter } from '../services/geminiService';

const GeminiChat: React.FC = () => {
  const [messages, setMessages] = useState<{ role: 'user' | 'bot'; text: string }[]>([
    { role: 'bot', text: 'สวัสดีครับ ผมคือ AI ช่างเครื่อง Isuzu D-Max ยินดีให้คำปรึกษาเกี่ยวกับอาการรถและการอ่านโค้ดครับ สอบถามผมได้เลย เช่น "รถมีรหัส 24 ต้องแก้ตรงไหน?" หรือ "ทำไมไฟเครื่องโชว์แต่ไม่มีรหัส?"' }
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isLoading]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input;
    setInput("");
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setIsLoading(true);

    const response = await getGeminiTroubleshooter(userMessage);
    setMessages(prev => [...prev, { role: 'bot', text: response || "ไม่สามารถดึงข้อมูลได้" }]);
    setIsLoading(false);
  };

  return (
    <div className="flex flex-col h-[600px] bg-slate-800 rounded-2xl border border-slate-700 shadow-xl overflow-hidden">
      {/* Header */}
      <div className="p-4 bg-slate-900 border-b border-slate-700 flex items-center gap-3">
        <div className="w-8 h-8 rounded-full bg-red-500 flex items-center justify-center">
          <Bot size={18} className="text-white" />
        </div>
        <div>
          <h3 className="text-sm font-bold text-slate-100">AI Mechanics Expert</h3>
          <p className="text-[10px] text-green-500 flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
            Online - Ready to help
          </p>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-hide" ref={scrollRef}>
        {messages.map((m, i) => (
          <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-[85%] flex gap-2 ${m.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
              <div className={`w-8 h-8 shrink-0 rounded-full flex items-center justify-center ${m.role === 'user' ? 'bg-slate-700' : 'bg-red-500/20 text-red-500'}`}>
                {m.role === 'user' ? <User size={16} /> : <Bot size={16} />}
              </div>
              <div className={`p-3 rounded-2xl text-sm leading-relaxed ${m.role === 'user' ? 'bg-red-600 text-white rounded-tr-none' : 'bg-slate-900 text-slate-200 rounded-tl-none'}`}>
                {m.text}
              </div>
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="flex justify-start">
            <div className="bg-slate-900 p-3 rounded-2xl rounded-tl-none flex items-center gap-2">
              <Loader2 className="animate-spin text-red-500" size={16} />
              <span className="text-xs text-slate-400">ช่างกำลังวิเคราะห์...</span>
            </div>
          </div>
        )}
      </div>

      {/* Warning */}
      <div className="px-4 py-2 bg-slate-900/50 flex items-center gap-2 border-t border-slate-700">
        <Info size={14} className="text-slate-500" />
        <p className="text-[10px] text-slate-500 italic">
          คำแนะนำจาก AI เป็นการวินิจฉัยเบื้องต้น ควรตรวจสอบความปลอดภัยก่อนการซ่อมแซมจริง
        </p>
      </div>

      {/* Input */}
      <div className="p-4 bg-slate-900 border-t border-slate-700">
        <div className="flex gap-2">
          <input 
            type="text" 
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            placeholder="พิมพ์ข้อความที่นี่..."
            className="flex-1 bg-slate-800 border border-slate-700 rounded-full py-2 px-4 text-sm text-slate-100 focus:ring-2 focus:ring-red-500 outline-none"
          />
          <button 
            onClick={handleSend}
            className="w-10 h-10 rounded-full bg-red-600 flex items-center justify-center text-white hover:bg-red-500 transition-all active:scale-90 shadow-lg shadow-red-600/20"
          >
            <Send size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default GeminiChat;
