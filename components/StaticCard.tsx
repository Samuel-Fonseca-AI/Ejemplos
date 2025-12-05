import React from 'react';
import { Product } from '../types';

interface Props {
  product: Product;
  index: number;
}

export const StaticCard: React.FC<Props> = ({ product }) => {
  // No IntersectionObserver, renders immediately
  
  return (
    <div className="bg-white shadow-xl overflow-hidden group">
      <div className="relative h-80 overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover" 
          // Removed hover scale animation to keep it strictly static/fast feeling
        />
        {/* Simple static overlay on hover without transition duration delay if desired, or just keep standard css hover */}
        <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-none" />
      </div>
      <div className="p-6 text-center">
        <p className="text-xs uppercase tracking-[0.2em] text-gold-600 mb-2 font-bold">
            {product.category}
        </p>
        <h3 className="font-serif text-2xl text-gray-900 mb-2">{product.name}</h3>
        <p className="text-sm text-gray-500 mb-4 font-light italic">{product.description}</p>
        <p className="text-lg font-bold text-gray-900">{product.price}</p>
        
        <button className="mt-4 px-6 py-2 border border-gray-900 text-gray-900 uppercase text-xs tracking-widest hover:bg-gray-900 hover:text-white transition-none">
          Ver Detalles
        </button>
      </div>
    </div>
  );
};