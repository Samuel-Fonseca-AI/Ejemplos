import React from 'react';
import { TEAM_MEMBERS, PROCESS_STEPS, HISTORY_MILESTONES } from '../types';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

interface Props {
  startAnimations: boolean;
}

export const DynamicSide: React.FC<Props> = ({ startAnimations }) => {
  // Hero Animation
  const { elementRef: heroRef, isVisible: heroVisibleRaw } = useIntersectionObserver();
  const { elementRef: titleRef, isVisible: titleVisibleRaw } = useIntersectionObserver();

  // Combine observer state with the app-level start trigger
  const heroVisible = startAnimations && heroVisibleRaw;
  const titleVisible = startAnimations && titleVisibleRaw;

  return (
    <div className="w-full min-h-full bg-stone-50 text-gray-800">
      
      {/* Hero Section */}
      <div ref={heroRef} className="relative h-[85vh] w-full overflow-hidden flex items-center justify-center">
        <img 
            src="https://images.unsplash.com/photo-1472591651607-70e2d88ae3c4?auto=format&fit=crop&q=80&w=1200" 
            alt="Hero Background" 
            className={`absolute inset-0 w-full h-full object-cover transition-transform duration-[2.5s] ease-out ${heroVisible ? 'scale-100' : 'scale-110'}`}
        />
        <div className={`absolute inset-0 bg-gradient-to-b from-black/50 to-stone-900/40 transition-opacity duration-1000 ${heroVisible ? 'opacity-100' : 'opacity-0'}`}></div>
        
        <div ref={titleRef} className="relative z-10 text-center text-white p-8">
            <p className={`font-sans text-xs md:text-sm tracking-[0.3em] uppercase text-gold-200 mb-4 transform transition-all duration-1000 ${titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                Maison d'Élégance
            </p>
            <h1 className={`font-serif text-5xl md:text-8xl mb-6 transform transition-all duration-1000 delay-300 ${titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                El Arte de<br/>Caminar
            </h1>
            <div className={`w-24 h-px bg-gold-400 mx-auto transform transition-all duration-1000 delay-500 ${titleVisible ? 'scale-100' : 'scale-0'}`}></div>
        </div>
      </div>

      {/* History Section - Narrative Scroll */}
      <div className="py-32 px-10 max-w-4xl mx-auto">
        <FadeInText>
            <div className="text-center mb-20">
                <h2 className="font-serif text-4xl mb-4 text-gray-900 italic">Nuestro Legado</h2>
                <div className="w-12 h-0.5 bg-gold-500 mx-auto"></div>
            </div>
        </FadeInText>
        
        <div className="space-y-24 relative before:absolute before:inset-0 before:ml-[50%] before:-translate-x-px before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-gold-300 before:to-transparent before:hidden md:before:block">
            {HISTORY_MILESTONES.map((milestone, i) => (
                <HistoryItem key={i} milestone={milestone} index={i} />
            ))}
        </div>
      </div>

      {/* Process Section - ZigZag Layout */}
      <div className="bg-stone-900 text-stone-200 py-32 overflow-hidden">
         <div className="text-center mb-24 px-6">
            <FadeInText>
                <span className="text-gold-400 tracking-[0.2em] text-xs uppercase font-bold">Maestría Artesanal</span>
                <h2 className="font-serif text-4xl md:text-5xl mt-4">El Alma del Zapato</h2>
            </FadeInText>
         </div>

         <div className="max-w-6xl mx-auto px-6 space-y-32">
            {PROCESS_STEPS.map((step, index) => (
                <ProcessItem key={step.id} step={step} index={index} />
            ))}
         </div>
      </div>

      {/* Team Section (Replaces Collection) */}
      <div className="py-32 px-6 bg-stone-100">
        <div className="text-center mb-20">
             <FadeInText>
                <h2 className="font-serif text-4xl text-gray-900">Nuestros Artesanos</h2>
                <p className="text-gray-500 mt-4 font-light italic">Las manos detrás de la obra maestra.</p>
             </FadeInText>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {TEAM_MEMBERS.map((member, index) => (
            <TeamMemberItem key={member.id} member={member} index={index} />
          ))}
        </div>
      </div>

      {/* Footer / Contact */}
      <footer className="bg-stone-900 text-stone-200 py-24 px-6 relative overflow-hidden">
         <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold-500/50 to-transparent"></div>
         <div className="max-w-4xl mx-auto text-center relative z-10">
            <FadeInText>
                <h3 className="font-serif text-3xl mb-8 text-gold-100">Contacto Privado</h3>
                <p className="text-lg font-light mb-12 text-gray-400 leading-relaxed">
                    Para citas privadas en nuestro atelier o consultas sobre<br/>
                    pedidos a medida, por favor contáctenos.
                </p>
                
                <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16 mb-16 text-sm tracking-widest uppercase text-gold-400">
                    <span className="border-b border-transparent hover:border-gold-400 transition-colors cursor-pointer">atelier@maisondelegance.com</span>
                    <span className="border-b border-transparent hover:border-gold-400 transition-colors cursor-pointer">+39 055 123 4567</span>
                    <span className="border-b border-transparent hover:border-gold-400 transition-colors cursor-pointer">Via Roma 12, Firenze</span>
                </div>

                <button className="text-xs uppercase tracking-[0.2em] border border-gold-400/30 px-10 py-4 hover:bg-gold-900/20 hover:border-gold-400 transition-all duration-500">
                    Agendar Visita
                </button>
            </FadeInText>
         </div>
         {/* Decorative faint background text */}
         <div className="absolute bottom-0 left-0 w-full text-center pointer-events-none opacity-[0.03]">
             <span className="text-[12rem] font-serif leading-none">MAISON</span>
         </div>
      </footer>
    </div>
  );
};

// --- Sub-components for Animations ---

const FadeInText: React.FC<{ children: React.ReactNode; delay?: number }> = ({ children, delay = 0 }) => {
    const { elementRef, isVisible } = useIntersectionObserver(0.15);
    return (
        <div 
            ref={elementRef}
            style={{ transitionDelay: `${delay}ms` }}
            className={`transform transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
        >
            {children}
        </div>
    )
}

const HistoryItem: React.FC<{ milestone: any, index: number }> = ({ milestone, index }) => {
    const { elementRef, isVisible } = useIntersectionObserver(0.3);
    const isEven = index % 2 === 0;

    return (
        <div ref={elementRef} className={`flex flex-col md:flex-row items-center justify-between w-full transition-all duration-1000 ${isVisible ? 'opacity-100 blur-0' : 'opacity-0 blur-sm'}`}>
             <div className={`w-full md:w-5/12 ${isEven ? 'md:text-right' : 'md:order-last md:text-left'} mb-4 md:mb-0`}>
                 <span className="text-6xl font-serif text-gold-200/50 block -mb-4 relative z-0">{milestone.year}</span>
                 <h3 className="text-2xl font-serif text-gray-900 relative z-10">{milestone.title}</h3>
             </div>
             
             {/* Dot on timeline */}
             <div className="hidden md:block w-4 h-4 rounded-full bg-gold-400 border-4 border-stone-50 shadow-xl z-10"></div>
             
             <div className={`w-full md:w-5/12 ${isEven ? 'md:text-left pl-0' : 'md:order-first md:text-right pr-0'}`}>
                 <p className="text-gray-600 font-light italic">{milestone.description}</p>
             </div>
        </div>
    )
}

const ProcessItem: React.FC<{ step: any, index: number }> = ({ step, index }) => {
    const { elementRef, isVisible } = useIntersectionObserver(0.2);
    const isEven = index % 2 === 0;

    return (
        <div ref={elementRef} className={`flex flex-col md:flex-row items-center gap-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-24'}`}>
            {/* Image */}
            <div className={`w-full md:w-1/2 ${isEven ? 'md:order-first' : 'md:order-last'}`}>
                <div className="relative overflow-hidden shadow-2xl group">
                    <img 
                        src={step.image} 
                        alt={step.title} 
                        className="w-full h-[400px] object-cover transition-transform duration-1000 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gold-900/10 mix-blend-overlay"></div>
                </div>
            </div>

            {/* Text */}
            <div className={`w-full md:w-1/2 ${isEven ? 'md:pl-10' : 'md:pr-10 text-right'}`}>
                <span className="text-gold-500 font-serif text-lg italic mb-2 block">Paso 0{step.id}</span>
                <h3 className="text-3xl font-serif text-stone-100 mb-6">{step.title}</h3>
                <p className="text-stone-400 leading-loose font-light">{step.description}</p>
            </div>
        </div>
    )
}

const TeamMemberItem: React.FC<{ member: any, index: number }> = ({ member, index }) => {
    const { elementRef, isVisible } = useIntersectionObserver(0.2);
    const delayClass = `delay-${(index % 4) * 200}`; // Stagger effect

    return (
        <div 
            ref={elementRef}
            className={`group text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'} ${delayClass}`}
        >
            <div className="relative mb-6 overflow-hidden rounded-sm mx-auto w-full aspect-[3/4]">
                <img 
                    src={member.image} 
                    alt={member.name} 
                    className={`w-full h-full object-cover transition-transform duration-[1.5s] ${isVisible ? 'scale-100 grayscale-0' : 'scale-110 grayscale'} group-hover:scale-105`}
                />
                <div className="absolute inset-0 bg-gold-500/0 group-hover:bg-gold-500/10 transition-colors duration-500"></div>
            </div>
            <h3 className="font-serif text-xl text-gray-900 mb-1">{member.name}</h3>
            <p className="text-xs uppercase tracking-[0.15em] text-gold-600 mb-3">{member.role}</p>
            <p className="text-sm text-gray-500 font-light italic leading-relaxed px-2">{member.bio}</p>
        </div>
    )
}