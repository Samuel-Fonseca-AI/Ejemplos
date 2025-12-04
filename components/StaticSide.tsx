import React from 'react';
import { SHOE_DATA } from '../types';
import { StaticCard } from './StaticCard';

export const StaticSide: React.FC = () => {
  return (
    <div className="w-full min-h-full bg-white text-gray-900">
      
      {/* Hero Section - Static */}
      <div className="relative h-[50vh] w-full bg-gray-200">
        <img 
            src="https://picsum.photos/seed/static/800/600" 
            alt="Static Hero" 
            className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <div className="text-center text-white px-4">
                <h1 className="font-bold text-4xl md:text-5xl mb-2 font-sans tracking-tight">
                    VELOCIDAD PURA
                </h1>
                <p className="text-sm md:text-base font-bold uppercase bg-white text-black inline-block px-3 py-1">
                    Colección Estática
                </p>
            </div>
        </div>
      </div>

      {/* Intro Text - Static */}
      <div className="py-12 px-6 max-w-xl mx-auto text-left border-b border-gray-200 mb-12">
        <h2 className="font-bold text-2xl mb-3 text-gray-900 uppercase tracking-tighter">La Experiencia Directa</h2>
        <p className="text-gray-800 leading-normal text-base">
          Aquí todo es instantáneo. Sin esperas, sin desvanecimientos. 
          El usuario ve la información de inmediato. Ideal para compradores decididos que valoran su tiempo 
          y navegan rápidamente buscando el botón de compra.
        </p>
      </div>

      {/* Product List - Static layout often differs, maybe distinct rows or dense grid */}
      <div className="px-4 pb-24 max-w-3xl mx-auto">
        <h3 className="font-bold text-xl mb-6 border-l-4 border-black pl-3">CATÁLOGO DISPONIBLE</h3>
        <div className="grid grid-cols-1 gap-6">
          {SHOE_DATA.map((product) => (
            <StaticCard key={product.id} product={product} />
          ))}
        </div>
      </div>

       {/* Footer - Simple, Contrast */}
       <footer className="bg-gray-100 text-gray-900 py-8 px-6 border-t border-gray-300">
         <div className="flex flex-col md:flex-row justify-between items-center max-w-4xl mx-auto">
            <p className="font-bold text-sm mb-4 md:mb-0">© 2024 ZAPATOS RÁPIDOS INC.</p>
            <div className="space-x-4 text-sm font-semibold underline">
                <a href="#">Ayuda</a>
                <a href="#">Devoluciones</a>
                <a href="#">Contacto</a>
            </div>
         </div>
      </footer>
    </div>
  );
};