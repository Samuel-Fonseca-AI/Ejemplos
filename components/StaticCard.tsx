import React from 'react';
import { Product } from '../types';

interface Props {
  product: Product;
}

export const StaticCard: React.FC<Props> = ({ product }) => {
  return (
    <div className="bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-200">
      <div className="h-80 w-full bg-gray-100">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover"
          loading="eager" // Prioritize loading for the "fast" feel
        />
      </div>
      <div className="p-6 text-left">
        <div className="flex justify-between items-baseline mb-1">
             <p className="text-xs font-bold uppercase text-gray-400">
                {product.category}
            </p>
            <p className="text-lg font-semibold text-gray-900">{product.price}</p>
        </div>
       
        <h3 className="font-bold text-xl text-gray-900 mb-1 font-sans">{product.name}</h3>
        <p className="text-sm text-gray-600 mb-4">{product.description}</p>
        
        <button className="w-full py-3 bg-gray-900 text-white font-bold text-sm uppercase hover:bg-gray-800">
          Añadir al Carrito
        </button>
      </div>
    </div>
  );
};