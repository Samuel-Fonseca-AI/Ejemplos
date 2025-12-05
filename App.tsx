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
        <div className="fixed inset-0 z-50 bg-stone-900/95 flex flex-col items-center justify-center text-white p-8 text-center" onClick={() => setShowIntro(false)}>
           <h1 className="text-4xl md:text-6xl font-serif mb-2 text-gold-200">Elegancia: La Decisión</h1>
           <p className="text-stone-400 mb-10 font-light tracking-wide">¿Emoción o Eficiencia?</p>
           
           <div className="flex flex-col md:flex-row gap-12 items-center justify-center max-w-4xl w-full">
              <div className="flex flex-col items-center gap-4 flex-1 p-6 border border-white/10 rounded-lg hover:bg-white/5 transition-colors cursor-pointer group">
                  <div className="p-4 rounded-full bg-stone-800 border border-gold-500/50 group-hover:border-gold-400 transition-colors animate-pulse">
                     <MousePointer2 size={32} className="text-gold-200" />
                  </div>
                  <h2 className="text-xl font-serif text-gold-100">Narrativa Visual</h2>
                  <p className="text-sm text-gray-400 max-w-xs">Animaciones suaves que evocan lujo y detalle. Ideal para construir marca.</p>
              </div>
              
              <div className="h-px w-24 bg-stone-700 md:w-px md:h-24"></div>
              
              <div className="flex flex-col items-center gap-4 flex-1 p-6 border border-white/10 rounded-lg hover:bg-white/5 transition-colors cursor-pointer group">
                  <div className="p-4 rounded-full bg-white text-black">
                     <Zap size={32} />
                  </div>
                  <h2 className="text-xl font-bold font-sans">Catálogo Directo</h2>
                  <p className="text-sm text-gray-400 max-w-xs">Información estática e instantánea. Ideal para conversión rápida.</p>
              </div>
           </div>
           
           <button className="mt-12 px-10 py-3 bg-gold-600 hover:bg-gold-500 text-white font-serif tracking-widest text-sm uppercase rounded-sm transition-colors shadow-lg shadow-gold-900/50">
             Ver Comparativa
           </button>
        </div>
      )}

      {/* Main Split Layout */}
      <div className="flex flex-1 h-full relative">
        
        {/* Left Side: Dynamic */}
        <div className="w-1/2 h-full overflow-y-auto no-scrollbar relative border-r border-stone-300">
           {/* Sticky Header Label - Only visible if Intro is hidden */}
           {!showIntro && (
             <div className="sticky top-0 z-40 bg-stone-50/90 backdrop-blur-md border-b border-stone-200 py-4 text-center animate-[fadeIn_0.5s_ease-out]">
                <span className="text-[10px] font-sans uppercase tracking-[0.2em] text-gold-600 block mb-1">Experiencia Dinámica</span>
                <p className="text-lg font-serif italic text-gray-900">Lujo & Emoción</p>
             </div>
           )}
           {/* Pass startAnimations prop to trigger the initial title reveal only after intro closes */}
           <DynamicSide startAnimations={!showIntro} />
        </div>

        {/* Right Side: Static */}
        <div className="w-1/2 h-full overflow-y-auto no-scrollbar relative bg-white">
           {/* Sticky Header Label - Only visible if Intro is hidden */}
           {!showIntro && (
             <div className="sticky top-0 z-40 bg-white border-b border-gray-200 py-4 text-center shadow-sm animate-[fadeIn_0.5s_ease-out]">
                <span className="text-[10px] font-sans uppercase tracking-[0.2em] text-gray-400 block mb-1">Experiencia Estática</span>
                <p className="text-lg font-bold text-black uppercase tracking-tight">Venta Directa</p>
             </div>
           )}
           <StaticSide />
        </div>

      </div>
    </div>
  );
}

export default App;