
import React from 'react';
import Header from './components/Header';
import CodeSimulator from './components/CodeSimulator';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col">
      <Header />

      <main className="flex-1 flex flex-col items-center justify-center p-4 md:p-6">
        <div className="w-full max-w-2xl animate-in fade-in zoom-in duration-500">
          <CodeSimulator />
        </div>
      </main>

      <footer className="py-6 text-center text-slate-600 text-xs border-t border-slate-900 px-4">
        <p>&copy; 2024 I-Flat-Dimax Only. Simulator version.</p>
      </footer>
    </div>
  );
};

export default App;
