import React, { useState } from 'react';
import { DynamicSide } from './components/DynamicSide';
import { StaticSide } from './components/StaticSide';
import { MousePointer2, Zap } from 'lucide-react';

function App() {
  const [showIntro, setShowIntro] = useState(true);

  return (
    <div className="h-screen w-screen flex flex-col overflow-hidden font-sans">
      
      {/* Intro Overlay / Instruction (Optional, renders once) */}
      {showIntro && (
        <div className="fixed inset-0 z-50 bg-black/90 flex flex-col items-center justify-center text-white p-8 text-center" onClick={() => setShowIntro(false)}>
           <h1 className="text-4xl md:text-6xl font-serif mb-6 text-gold-300">Comparativa de Experiencia</h1>
           <div className="flex flex-col md:flex-row gap-12 items-center justify-center max-w-4xl">
              <div className="flex flex-col items-center gap-4">
                  <div className="p-4 rounded-full bg-stone-800 border border-gold-500 animate-pulse">
                     <MousePointer2 size={48} className="text-gold-200" />
                  </div>
                  <h2 className="text-2xl font-serif">Lado Izquierdo: Dinámico</h2>
                  <p className="text-gray-400">Desplace para ver animaciones elegantes y transiciones suaves.</p>
              </div>
              <div className="h-px w-24 bg-gray-700 md:w-px md:h-24"></div>
              <div className="flex flex-col items-center gap-4">
                  <div className="p-4 rounded-full bg-white text-black">
                     <Zap size={48} />
                  </div>
                  <h2 className="text-2xl font-bold font-sans">Lado Derecho: Estático</h2>
                  <p className="text-gray-400">Desplace para ver carga instantánea y estabilidad visual.</p>
              </div>
           </div>
           <button className="mt-16 px-8 py-3 bg-gold-600 hover:bg-gold-500 text-white font-bold rounded transition-colors text-lg">
             Comenzar Comparación
           </button>
           <p className="mt-4 text-xs text-gray-500 uppercase tracking-widest">Haga clic en cualquier lugar para cerrar</p>
        </div>
      )}

      {/* Main Split Layout */}
      <div className="flex flex-1 h-full relative">
        
        {/* Left Side: Dynamic */}
        <div className="w-1/2 h-full overflow-y-auto no-scrollbar relative border-r border-gray-300">
           {/* Sticky Header Label */}
           <div className="sticky top-0 z-40 bg-white/80 backdrop-blur-sm border-b border-stone-200 py-3 text-center">
              <span className="text-xs font-serif italic text-gray-500">Opción A</span>
              <p className="text-sm font-bold text-gray-900 uppercase tracking-widest">Dinámico & Emotivo</p>
           </div>
           <DynamicSide />
        </div>

        {/* Right Side: Static */}
        <div className="w-1/2 h-full overflow-y-auto no-scrollbar relative bg-white">
           {/* Sticky Header Label */}
           <div className="sticky top-0 z-40 bg-gray-100 border-b border-gray-200 py-3 text-center shadow-sm">
              <span className="text-xs font-sans font-bold text-gray-500">Opción B</span>
              <p className="text-sm font-extrabold text-black uppercase tracking-tighter">Estático & Directo</p>
           </div>
           <StaticSide />
        </div>

      </div>
    </div>
  );
}

export default App;