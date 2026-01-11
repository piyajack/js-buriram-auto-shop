
import React, { useState } from 'react';
import { STEPS } from '../constants';
import * as Icons from 'lucide-react';
import { ChevronRight, ChevronLeft, Volume2 } from 'lucide-react';

const StepGuide: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const nextStep = () => setCurrentStep(prev => Math.min(prev + 1, STEPS.length - 1));
  const prevStep = () => setCurrentStep(prev => Math.max(prev - 1, 0));

  const step = STEPS[currentStep];
  const IconComponent = (Icons as any)[step.icon] || Icons.HelpCircle;

  return (
    <div className="bg-slate-800 rounded-2xl border border-slate-700 overflow-hidden shadow-2xl flex flex-col h-[500px] md:h-auto">
      {/* Progress Bar */}
      <div className="h-1.5 w-full bg-slate-900 flex">
        {STEPS.map((_, idx) => (
          <div 
            key={idx} 
            className={`h-full flex-1 transition-all duration-500 ${idx <= currentStep ? 'bg-red-500' : 'bg-transparent'}`}
          />
        ))}
      </div>

      <div className="p-6 md:p-8 flex flex-col h-full">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-red-500/20 flex items-center justify-center text-red-500">
              <IconComponent size={24} />
            </div>
            <div>
              <span className="text-xs font-bold text-red-500 uppercase tracking-tighter">Step {step.id} of {STEPS.length}</span>
              <h2 className="text-xl font-bold text-slate-100 leading-tight">{step.title}</h2>
            </div>
          </div>
          <span className="text-xs font-mono text-slate-500 bg-slate-900 px-2 py-1 rounded">{step.time}</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 flex-1">
          {/* Visual Area */}
          <div className="bg-slate-900 rounded-xl border border-slate-700 flex flex-col p-4">
            <div className="text-xs text-slate-500 mb-2 uppercase font-bold flex items-center gap-2">
              <Icons.Eye size={14} /> 
              ภาพประกอบ (Visual)
            </div>
            <div className="flex-1 flex items-center justify-center text-center p-4">
              <p className="text-slate-300 italic text-sm md:text-base">
                "{step.visual}"
              </p>
            </div>
            {/* Mock Visual Placeholder */}
            <div className="h-24 w-full bg-slate-800 rounded-lg mt-4 border border-dashed border-slate-600 flex items-center justify-center overflow-hidden">
               <img src={`https://picsum.photos/seed/${step.id}/400/200`} alt="Scene guide" className="opacity-40 w-full h-full object-cover" />
            </div>
          </div>

          {/* Audio/Content Area */}
          <div className="flex flex-col justify-between">
            <div className="bg-slate-900/40 border-l-4 border-red-500 p-4 rounded-r-lg">
              <div className="text-xs text-red-500 mb-2 uppercase font-bold flex items-center gap-2">
                <Volume2 size={14} />
                บทพูด / ข้อความ (Audio/Text)
              </div>
              <p className="text-slate-200 text-sm md:text-lg leading-relaxed font-medium">
                {step.audioText}
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8 flex items-center justify-between">
          <button 
            onClick={prevStep}
            disabled={currentStep === 0}
            className="flex items-center gap-2 px-4 py-2 text-slate-400 hover:text-white disabled:opacity-30 transition-all font-bold"
          >
            <ChevronLeft size={20} />
            ย้อนกลับ
          </button>
          
          <button 
            onClick={nextStep}
            disabled={currentStep === STEPS.length - 1}
            className="bg-red-600 hover:bg-red-500 text-white font-bold py-3 px-8 rounded-full flex items-center gap-2 transition-all active:scale-95 disabled:bg-slate-700"
          >
            {currentStep === STEPS.length - 1 ? 'จบการแนะนำ' : 'ขั้นตอนถัดไป'}
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default StepGuide;
