import React from 'react';
import { SHOE_DATA } from '../types';
import { DynamicCard } from './DynamicCard';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

export const DynamicSide: React.FC = () => {
  // Hero Animation
  const { elementRef: heroRef, isVisible: heroVisible } = useIntersectionObserver();
  const { elementRef: titleRef, isVisible: titleVisible } = useIntersectionObserver();

  return (
    <div className="w-full min-h-full bg-stone-50 text-gray-800">
      
      {/* Hero Section */}
      <div ref={heroRef} className="relative h-[80vh] w-full overflow-hidden flex items-center justify-center">
        <img 
            src="https://picsum.photos/seed/elegance/800/1200" 
            alt="Hero Background" 
            className={`absolute inset-0 w-full h-full object-cover transition-transform duration-[2s] ease-out ${heroVisible ? 'scale-100' : 'scale-125'}`}
        />
        <div className={`absolute inset-0 bg-black/30 transition-opacity duration-1000 ${heroVisible ? 'opacity-100' : 'opacity-0'}`}></div>
        
        <div ref={titleRef} className="relative z-10 text-center text-white p-8">
            <h1 className={`font-serif text-5xl md:text-7xl mb-4 transform transition-all duration-1000 delay-300 ${titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                Movimiento &<br/>Gracia
            </h1>
            <p className={`font-sans text-lg md:text-xl tracking-widest uppercase transform transition-all duration-1000 delay-500 ${titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                Colección Dinámica 2024
            </p>
        </div>
      </div>

      {/* Intro Text */}
      <div className="py-24 px-8 max-w-2xl mx-auto text-center">
        <FadeInText>
             <h2 className="font-serif text-3xl mb-6 text-gray-900">La Experiencia Inmersiva</h2>
        </FadeInText>
        <FadeInText delay={200}>
            <p className="text-gray-600 leading-relaxed text-lg font-light">
            Note cómo los elementos cobran vida a medida que explora. 
            Cada zapato se presenta con una entrada teatral, enfatizando la calidad y la exclusividad. 
            Esta aproximación evoca sentimientos de lujo y atención al detalle.
            </p>
        </FadeInText>
      </div>

      {/* Product Grid */}
      <div className="px-6 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SHOE_DATA.map((product, index) => (
            <DynamicCard key={product.id} product={product} index={index} />
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-6 text-center">
         <FadeInText>
            <p className="font-serif italic text-2xl mb-4">"El estilo es eterno"</p>
            <button className="text-xs uppercase tracking-widest border-b border-white/50 pb-1 hover:text-gold-300 hover:border-gold-300 transition-colors">
                Suscribirse al Boletín
            </button>
         </FadeInText>
      </footer>
    </div>
  );
};

// Helper for simple text fade ins
const FadeInText: React.FC<{ children: React.ReactNode; delay?: number }> = ({ children, delay = 0 }) => {
    const { elementRef, isVisible } = useIntersectionObserver(0.1);
    return (
        <div 
            ref={elementRef}
            style={{ transitionDelay: `${delay}ms` }}
            className={`transform transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
            {children}
        </div>
    )
}