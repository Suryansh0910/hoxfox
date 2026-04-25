import React from 'react';
import { FadeIn } from './FadeIn';

export const HowItWorks = () => {
  const tracks = [
    { name: "SICKO MODE", artist: "Travis Scott", genre: "Hip-Hop", color: "rgba(120,60,255,1)", img: "https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?q=80&w=200&auto=format&fit=crop" },
    { name: "Bad Guy", artist: "Billie Eilish", genre: "Pop", color: "rgba(255,200,60,1)", dim: true, img: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=200&auto=format&fit=crop" },
    { name: "Bohemian Rhapsody", artist: "Queen", genre: "Rock", color: "rgba(255,100,60,1)", dim: true, img: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=200&auto=format&fit=crop" },
    { name: "HUMBLE.", artist: "Kendrick Lamar", genre: "Hip-Hop", color: "rgba(120,60,255,1)", img: "https://images.unsplash.com/photo-1550184658-ff6132a71714?q=80&w=200&auto=format&fit=crop" },
    { name: "Take Five", artist: "Dave Brubeck", genre: "Jazz", color: "rgba(60,220,160,1)", dim: true, img: "https://images.unsplash.com/photo-1511192336575-5a79af67a629?q=80&w=200&auto=format&fit=crop" },
    { name: "God's Plan", artist: "Drake", genre: "Hip-Hop", color: "rgba(120,60,255,1)", img: "https://images.unsplash.com/photo-1493225457124-a1a2a5956093?q=80&w=200&auto=format&fit=crop" }
  ];

  return (
    <div id="how-it-works" className="min-h-screen w-full relative z-[5] flex items-center justify-center py-24 px-6">
      
      <div className="max-w-[1100px] w-full relative z-[2] flex flex-col md:flex-row gap-12 items-center">
        
        {/* Left text column */}
        <div className="flex-1 relative">
          <FadeIn direction="up" delay={100}>
            <div className="inline-block font-display text-[11px] font-bold tracking-[0.14em] uppercase bg-[oklch(0.82_0.22_145/0.12)] text-lime py-1.5 px-3 rounded-full border border-[oklch(0.82_0.22_145/0.2)] shadow-[0_0_16px_rgba(160,255,100,0.3)] mb-6">
              The Process
            </div>
            <h2 className="font-display font-bold text-[56px] md:text-[72px] tracking-tight leading-[1.0] mb-6">
              From chaos to <br/><span className="bg-gradient-to-r from-lime via-sky to-violet bg-clip-text text-transparent drop-shadow-[0_0_32px_rgba(160,255,100,0.4)]">clarity.</span>
            </h2>
            <p className="text-text2 text-[18px] leading-relaxed mb-10 max-w-[420px] font-medium">
              Many users save all their favourite songs in a single, massive playlist. HoxFox filters out the noise, extracting only the specific genres and moods you crave into a brand new playlist.
            </p>
          </FadeIn>
          
          <div className="flex flex-col gap-2 relative">
            <FadeIn delay={200}><Step number="01" title="Connect" desc="Securely link your Spotify account." /></FadeIn>
            <FadeIn delay={300}><Step number="02" title="Select" desc="Pick your messiest, most chaotic playlist." /></FadeIn>
            <FadeIn delay={400}><Step number="03" title="Filter & Vibe" desc="Choose a genre and let HoxFox do the magic." isLast={true} /></FadeIn>
          </div>
        </div>

        {/* Right visual column */}
        <div className="flex-1 w-full h-[500px] relative">
          <FadeIn direction="left" delay={300} className="h-full">
            <div className="absolute top-0 right-0 w-full md:w-[440px] h-[480px] bg-[oklch(0.08_0.025_275)] border border-[oklch(0.20_0.04_275)] rounded-[24px] overflow-hidden shadow-[0_32px_80px_rgba(0,0,0,0.8),inset_0_1px_1px_rgba(255,255,255,0.05)] p-6 flex flex-col">
               <div className="flex justify-between items-center mb-6">
                  <span className="font-display font-bold text-white text-[18px]">Filter Pipeline</span>
                  <span className="text-lime text-[10px] font-display font-bold uppercase tracking-[0.14em] bg-[oklch(0.82_0.22_145/0.12)] py-1 px-2.5 rounded-full border border-[oklch(0.82_0.22_145/0.2)]">Active</span>
               </div>
               
               {/* Fake tracklist moving */}
               <div className="flex-1 relative overflow-hidden">
                  <div className="pipeline-scroll flex flex-col gap-3 pb-3">
                    {/* Duplicate tracks to loop */}
                    {[...tracks, ...tracks].map((t, i) => (
                      <Track key={i} {...t} />
                    ))}
                  </div>
                  
                  {/* Overlay gradient to hide bottom */}
                  <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-[oklch(0.08_0.025_275)] to-transparent pointer-events-none" />
               </div>
               
               <div className="h-[70px] border-t border-[oklch(0.18_0.04_275)] mt-auto pt-3 pb-2 flex flex-col justify-center gap-2">
                  <div className="flex items-center justify-between w-full">
                    <div className="text-text3 text-[12px] font-display uppercase tracking-wider">
                      Target: <span className="text-[rgba(120,60,255,1)] font-bold drop-shadow-[0_0_8px_rgba(120,60,255,0.5)]">Hip-Hop</span>
                    </div>
                    
                    {/* Full Music Controls */}
                    <div className="flex items-center gap-4">
                      {/* Shuffle */}
                      <button className="text-text3 hover:text-white transition-colors">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M10.59 9.17L5.41 4 4 5.41l5.17 5.17 1.42-1.41zM14.5 4l2.04 2.04L4 18.59 5.41 20 17.96 7.46 20 9.5V4h-5.5zm.33 9.41l-1.41 1.41 3.13 3.13L14.5 20H20v-5.5l-2.04 2.04-3.13-3.13z"/></svg>
                      </button>
                      {/* Previous */}
                      <button className="text-text2 hover:text-white transition-colors">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M6 6h2v12H6zm3.5 6l8.5 6V6z" /></svg>
                      </button>
                      {/* Play */}
                      <button className="w-[36px] h-[36px] rounded-full bg-white text-black flex items-center justify-center hover:scale-105 transition-transform shadow-[0_0_16px_rgba(255,255,255,0.4)]">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z" /></svg>
                      </button>
                      {/* Next */}
                      <button className="text-text2 hover:text-white transition-colors">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M6 18l8.5-6L6 6v12zM16 6v12h2V6h-2z" /></svg>
                      </button>
                      {/* Repeat */}
                      <button className="text-text3 hover:text-white transition-colors">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M7 7h10v3l4-4-4-4v3H5v6h2V7zm10 10H7v-3l-4 4 4 4v-3h12v-6h-2v4z"/></svg>
                      </button>
                    </div>
                  </div>
                  
                  {/* Progress Bar */}
                  <div className="w-full flex items-center gap-3">
                    <span className="text-[10px] text-text3 font-medium">1:24</span>
                    <div className="flex-1 h-1 bg-white/10 rounded-full overflow-hidden">
                      <div className="h-full w-[40%] bg-white rounded-full" />
                    </div>
                    <span className="text-[10px] text-text3 font-medium">3:42</span>
                  </div>
               </div>
            </div>
          </FadeIn>
        </div>

      </div>
    </div>
  );
};

const Track = ({ name, artist, genre, color, dim, img }) => (
  <div className={`flex items-center justify-between p-3 rounded-[12px] transition-all duration-500 ${dim ? 'opacity-30 grayscale' : 'bg-white/[0.03] border border-white/[0.05] shadow-[0_4px_16px_rgba(0,0,0,0.4)]'}`}>
    <div className="flex items-center gap-3">
      <img src={img} alt={name} className="w-10 h-10 rounded-[6px] object-cover bg-[oklch(0.15_0.03_275)] flex-shrink-0" />
      <div>
        <div className={`font-medium text-[14px] ${dim ? 'text-text3' : 'text-white'}`}>{name}</div>
        <div className="text-[12px] text-text3">{artist}</div>
      </div>
    </div>
    <div className="font-display text-[10px] uppercase font-bold tracking-widest px-2 py-1 rounded-[4px]" style={{ color: color, background: dim ? 'transparent' : color.replace('1)', '0.1)') }}>
      {genre}
    </div>
  </div>
);

const Step = ({ number, title, desc, isLast }) => (
  <div className="relative flex items-start gap-5 p-2 group">
    {/* Connecting line */}
    {!isLast && <div className="absolute left-[28px] top-[46px] bottom-[-16px] w-[2px] bg-gradient-to-b from-lime/40 to-transparent" />}
    
    <div className="relative z-10 w-11 h-11 rounded-full border border-lime/30 bg-[oklch(0.06_0.02_275)] flex items-center justify-center font-display font-bold text-[15px] text-lime shadow-[0_0_16px_rgba(160,255,100,0.2)] shrink-0 group-hover:scale-110 group-hover:shadow-[0_0_24px_rgba(160,255,100,0.5)] group-hover:bg-lime/10 transition-all duration-300">
      {number}
    </div>
    <div className="pb-6 pt-1">
      <h4 className="font-display font-bold text-[20px] text-white mb-2 group-hover:text-lime transition-colors duration-300">{title}</h4>
      <p className="text-text2 text-[15px] leading-relaxed max-w-[320px]">{desc}</p>
    </div>
  </div>
);
