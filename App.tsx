
import React, { useState } from 'react';
import Header from './components/Header';
import OBDVisualizer from './components/OBDVisualizer';
import StepGuide from './components/StepGuide';
import CodeSimulator from './components/CodeSimulator';
import CodeTable from './components/CodeTable';
import GeminiChat from './components/GeminiChat';
import LandingPage from './components/LandingPage';

const App: React.FC = () => {
  const [hasStarted, setHasStarted] = useState(false);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-['Prompt']">
      <Header />

      <main className="flex-1 max-w-6xl mx-auto w-full p-4 md:p-8">
        {!hasStarted ? (
          <LandingPage onStart={() => setHasStarted(true)} />
        ) : (
          <div className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
            {/* Section 1: Guide & Connection */}
            <section className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
              <div className="lg:col-span-4 space-y-6">
                <div className="bg-slate-900/50 p-4 rounded-xl border border-slate-800">
                  <h2 className="text-red-500 font-bold mb-2 uppercase tracking-tighter">01. การเชื่อมต่อ</h2>
                  <p className="text-xs text-slate-400">หงายปลั๊ก OBD2 และจัมพ์สายที่รู 4 และ 6</p>
                </div>
                <OBDVisualizer />
              </div>
              <div className="lg:col-span-8">
                 <div className="bg-slate-900/50 p-4 rounded-xl border border-slate-800 mb-6">
                  <h2 className="text-red-500 font-bold mb-2 uppercase tracking-tighter">02. ขั้นตอนการใช้งาน</h2>
                  <p className="text-xs text-slate-400">ทำตามขั้นตอนอย่างระมัดระวังเพื่อความปลอดภัย</p>
                </div>
                <StepGuide />
              </div>
            </section>

            {/* Section 2: Simulator & Chat */}
            <section className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
              <div className="lg:col-span-7">
                <div className="bg-slate-900/50 p-4 rounded-xl border border-slate-800 mb-6">
                  <h2 className="text-red-500 font-bold mb-2 uppercase tracking-tighter">03. ระบบจำลองการทดสอบ</h2>
                  <p className="text-xs text-slate-400">ฝึกนับจังหวะไฟกระพริบให้แม่นยำก่อนเริ่มงานจริง</p>
                </div>
                <CodeSimulator />
              </div>
              <div className="lg:col-span-5">
                <div className="bg-slate-900/50 p-4 rounded-xl border border-slate-800 mb-6">
                  <h2 className="text-red-500 font-bold mb-2 uppercase tracking-tighter">04. ปรึกษาช่าง AI</h2>
                  <p className="text-xs text-slate-400">สอบถามอาการหรือวิธีซ่อมแซมได้ตลอดเวลา</p>
                </div>
                <GeminiChat />
              </div>
            </section>

            {/* Section 3: Reference Table */}
            <section id="database" className="space-y-6">
              <div className="bg-slate-900/50 p-4 rounded-xl border border-slate-800">
                <h2 className="text-red-500 font-bold mb-2 uppercase tracking-tighter">05. ฐานข้อมูลรหัสปัญหา (Code Database)</h2>
                <p className="text-xs text-slate-400">รวมรหัส Isuzu D-Max (2002-2011) ที่พบบ่อยที่สุด</p>
              </div>
              <CodeTable />
            </section>
          </div>
        )}
      </main>

      <footer className="py-12 text-center text-slate-600 text-xs border-t border-slate-900 px-4 bg-slate-950">
        <div className="max-w-4xl mx-auto space-y-4">
          <p className="font-bold tracking-widest text-slate-500 uppercase">Flashing Mode D-max DTC <span className="text-red-900 mx-2">|</span> DIAGNOSTIC SUITE</p>
          <div className="flex items-center justify-center gap-6 opacity-60 grayscale hover:grayscale-0 transition-all">
             <span className="font-bold">JS Buriram Auto Shop</span>
             <span className="font-bold">YouTube: @JsautomotivesTh</span>
             <span className="font-bold">FB: JS Automotive</span>
          </div>
          <p className="opacity-40">แอปพลิเคชันนี้จัดทำขึ้นเพื่อเป็นวิทยาทานสำหรับการวิเคราะห์เบื้องต้นเท่านั้น <br/> ไม่รับผิดชอบต่อความเสียหายใดๆ ที่อาจเกิดขึ้นจากการซ่อมแซมผิดวิธี</p>
          <p>&copy; 2024 Flashing Mode D-max DTC. Standard Edition.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;