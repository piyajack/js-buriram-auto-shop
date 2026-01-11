
import React, { useState } from 'react';
import { FLASH_CODES } from '../constants';
import { Search, AlertCircle, CheckCircle } from 'lucide-react';

const CodeTable: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredCodes = FLASH_CODES.filter(c => 
    c.code.toString().includes(searchTerm) || 
    c.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex flex-col gap-4">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" size={20} />
        <input 
          type="text"
          placeholder="ค้นหารหัส หรือ อาการ... (เช่น 24 หรือ คันเร่ง)"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full bg-slate-800 border border-slate-700 rounded-xl py-3 pl-10 pr-4 text-slate-100 focus:ring-2 focus:ring-red-500 outline-none transition-all"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredCodes.map((fc) => (
          <div key={fc.code} className="bg-slate-800 border border-slate-700 rounded-xl overflow-hidden hover:border-red-500/50 transition-all group">
            <div className="p-4 bg-slate-900 flex justify-between items-center border-b border-slate-700">
              <span className="text-2xl font-black text-red-500 tracking-tighter">CODE {fc.code}</span>
              {fc.code === 12 ? (
                <CheckCircle className="text-green-500" size={24} />
              ) : (
                <AlertCircle className="text-orange-500" size={24} />
              )}
            </div>
            <div className="p-4 space-y-3">
              <div>
                <h4 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">ความหมาย</h4>
                <p className="text-slate-100 font-semibold">{fc.description}</p>
              </div>
              <div>
                <h4 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">อาการที่พบ</h4>
                <p className="text-slate-400 text-sm">{fc.symptoms}</p>
              </div>
              <div className="pt-2">
                <h4 className="text-xs font-bold text-red-500/70 uppercase tracking-widest mb-1">แนวทางแก้ไข</h4>
                <p className="text-slate-300 text-sm bg-red-500/5 border border-red-500/10 p-2 rounded">{fc.solution}</p>
              </div>
            </div>
          </div>
        ))}
        {filteredCodes.length === 0 && (
          <div className="col-span-full py-12 text-center text-slate-500">
            ไม่พบรหัสที่ตรงกับการค้นหา
          </div>
        )}
      </div>
    </div>
  );
};

export default CodeTable;
