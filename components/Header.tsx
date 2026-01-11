
import React from 'react';
import { Wrench } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-slate-900 border-b border-slate-700">
      <div className="max-w-4xl mx-auto px-4 py-4 flex items-center justify-center gap-3">
        <Wrench className="text-red-500 w-6 h-6" />
        <h1 className="font-bold text-2xl tracking-tight">I-Flat-Dimax <span className="text-red-500">Only</span></h1>
      </div>
    </header>
  );
};

export default Header;
