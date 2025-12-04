import React from 'react';
import { Product } from '../types';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

interface Props {
  product: Product;
  index: number;
}

export const DynamicCard: React.FC<Props> = ({ product, index }) => {
  const { elementRef, isVisible } = useIntersectionObserver(0.2);

  // Stagger effect based on index (even/odd) or just pure delay
  const delayClass = index % 2 === 0 ? 'delay-0' : 'delay-150';

  return (
    <div
      ref={elementRef}
      className={`
        transform transition-all duration-1000 ease-out
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'}
        ${delayClass}
        bg-white shadow-xl overflow-hidden group
      `}
    >
      <div className="relative h-80 overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className={`
            w-full h-full object-cover transition-transform duration-1000 ease-in-out
            ${isVisible ? 'scale-100' : 'scale-110'}
            group-hover:scale-105
          `}
        />
        <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-500" />
      </div>
      <div className="p-6 text-center">
        <p className="text-xs uppercase tracking-[0.2em] text-gold-600 mb-2 font-bold">
            {product.category}
        </p>
        <h3 className="font-serif text-2xl text-gray-900 mb-2">{product.name}</h3>
        <p className="text-sm text-gray-500 mb-4 font-light italic">{product.description}</p>
        <p className="text-lg font-bold text-gray-900">{product.price}</p>
        
        <button className="mt-4 px-6 py-2 border border-gray-900 text-gray-900 uppercase text-xs tracking-widest hover:bg-gray-900 hover:text-white transition-colors duration-300">
          Ver Detalles
        </button>
      </div>
    </div>
  );
};