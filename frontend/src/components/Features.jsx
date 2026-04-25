import React from 'react';
import { FadeIn } from './FadeIn';

export const Features = () => {
  return (
    <div id="features" className="min-h-screen w-full relative z-[5] flex items-center justify-center py-32 px-6">
      
      <div className="max-w-[1200px] w-full relative z-[2] flex flex-col items-center">
        
        <FadeIn direction="up" delay={100} className="w-full flex flex-col items-center">
          <div className="inline-block font-display text-[11px] font-bold tracking-[0.14em] uppercase bg-[oklch(0.82_0.22_145/0.12)] text-lime py-1.5 px-3 rounded-full border border-[oklch(0.82_0.22_145/0.2)] mb-6">
            Everything You Need
          </div>
          
          <h2 className="font-display font-bold text-[56px] md:text-[72px] tracking-tight mb-4 text-center leading-[1.05]">
            Supercharge your <span className="bg-gradient-to-r from-lime to-sky bg-clip-text text-transparent">Spotify.</span>
          </h2>
          <p className="text-text2 text-center text-[18px] max-w-[600px] mx-auto mb-20 leading-relaxed">
            We built the ultimate toolset to turn your messy library into a perfectly curated, data-driven vibe.
          </p>
        </FadeIn>

        {/* Bento Box Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-6 w-full auto-rows-[280px]">
          
          {/* Smart Filtering - Large horizontal */}
          <FadeIn delay={200} direction="up" className="md:col-span-2 md:row-span-1 h-full">
            <BentoCard 
              title="Smart Filtering"
              desc="Extract tracks by specific genres, moods, or BPM instantly."
              highlight="rgba(60,180,255,1)"
              className="bg-[oklch(0.06_0.02_275)] bg-[radial-gradient(ellipse_at_top_right,rgba(60,180,255,0.08),transparent_60%)]"
            >
              {/* Mock UI: Genre Tags */}
              <div className="absolute bottom-8 right-8 flex flex-wrap gap-3 justify-end w-[60%] opacity-90">
                <span className="px-4 py-2 bg-[rgba(60,180,255,0.15)] border border-[rgba(60,180,255,0.4)] text-[rgba(60,180,255,1)] text-xs font-bold rounded-full font-display uppercase tracking-widest shadow-[0_0_24px_rgba(60,180,255,0.3)]">Hip-Hop</span>
                <span className="px-4 py-2 bg-white/5 border border-white/10 text-text2 text-xs font-bold rounded-full font-display uppercase tracking-widest backdrop-blur-md">Pop</span>
                <span className="px-4 py-2 bg-white/5 border border-white/10 text-text2 text-xs font-bold rounded-full font-display uppercase tracking-widest backdrop-blur-md">Rock</span>
                <span className="px-4 py-2 bg-[rgba(60,180,255,0.15)] border border-[rgba(60,180,255,0.4)] text-[rgba(60,180,255,1)] text-xs font-bold rounded-full font-display uppercase tracking-widest shadow-[0_0_24px_rgba(60,180,255,0.3)]">R&B</span>
              </div>
              <FilterIcon className="absolute top-8 right-8 text-sky opacity-[0.15] w-20 h-20" />
            </BentoCard>
          </FadeIn>

          {/* Dashboard Analytics - Tall Vertical */}
          <FadeIn delay={300} direction="up" className="md:col-span-1 md:row-span-2 h-full">
            <BentoCard 
              title="Dashboard Analytics"
              desc="Deep insights into your listening habits. Track your true musical evolution."
              highlight="rgba(160,255,100,1)"
              className="bg-[oklch(0.09_0.03_275)] border-[oklch(0.25_0.05_275)] shadow-[0_32px_80px_rgba(0,0,0,0.6),inset_0_1px_1px_rgba(255,255,255,0.1)] md:scale-[1.02] z-10 bg-[radial-gradient(ellipse_at_top,rgba(160,255,100,0.1),transparent_60%)]"
            >
              {/* Mock UI: Bar Chart */}
              <div className="absolute bottom-10 left-8 right-8 h-40 flex items-end justify-between gap-3">
                {[40, 70, 45, 90, 60, 100, 30].map((h, i) => (
                  <div key={i} className="w-full bg-[rgba(160,255,100,0.1)] border border-[rgba(160,255,100,0.2)] rounded-t-[4px] relative group overflow-hidden">
                    <div className="absolute bottom-0 w-full bg-gradient-to-t from-lime to-transparent transition-all duration-700 ease-out" style={{ height: `${h}%` }} />
                    <div className="absolute bottom-0 w-full h-1 bg-lime shadow-[0_0_12px_rgba(160,255,100,1)]" style={{ bottom: `${h}%` }} />
                  </div>
                ))}
              </div>
            </BentoCard>
          </FadeIn>

          {/* Playlist Roasting - Large horizontal */}
          <FadeIn delay={400} direction="up" className="md:col-span-2 md:row-span-1 h-full">
            <BentoCard 
              title="Playlist Roasting"
              desc="Let our AI analyze your guilty pleasures and give you a brutally honest roast."
              highlight="rgba(255,100,60,1)"
              className="bg-[oklch(0.06_0.02_275)] bg-[radial-gradient(ellipse_at_bottom_right,rgba(255,100,60,0.1),transparent_60%)]"
            >
              {/* Mock UI: Chat Bubble */}
              <div className="absolute bottom-8 right-8 bg-[rgba(255,100,60,0.15)] border border-[rgba(255,100,60,0.3)] p-5 rounded-[24px] rounded-br-[4px] max-w-[300px] shadow-[0_16px_40px_rgba(255,100,60,0.15)] backdrop-blur-xl">
                <p className="text-[15px] font-medium text-white leading-relaxed">
                  "3 hours of sad indie folk followed by 2000s club anthems? Who hurt you?"
                </p>
              </div>
              <FireIcon className="absolute top-8 right-8 text-[rgba(255,100,60,1)] opacity-[0.15] w-20 h-20" />
            </BentoCard>
          </FadeIn>

        </div>
      </div>
    </div>
  );
};

const BentoCard = ({ title, desc, highlight, className, children }) => (
  <div className={`relative overflow-hidden rounded-[32px] p-10 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_24px_60px_rgba(0,0,0,0.6)] flex flex-col h-full border border-[oklch(0.18_0.03_275)] ${className}`}>
    <div className="absolute top-0 left-0 w-full h-1.5" style={{ background: highlight, boxShadow: `0 0 24px ${highlight}` }} />
    <h3 className="font-display font-bold text-[32px] mb-4 text-white max-w-[80%] leading-tight">{title}</h3>
    <p className="text-text2 text-[17px] leading-relaxed max-w-[70%] font-medium">{desc}</p>
    {children}
  </div>
);

const FilterIcon = ({className}) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon></svg>
);
const FireIcon = ({className}) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"></path></svg>
);

