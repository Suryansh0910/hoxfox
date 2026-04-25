import React, { useState } from 'react';
import { AlbumLayer } from '../components/AlbumLayer';
import { WaveCanvas } from '../components/WaveCanvas';

export const HeroScreen = ({ onNext }) => {
  const [hoveredGenre, setHoveredGenre] = useState(null);

  const genres = [
    { label: 'Hip-Hop', color: 'rgba(120,60,255,0.9)' },
    { label: 'Pop', color: 'rgba(255,200,60,0.9)' },
    { label: 'Rock', color: 'rgba(255,100,60,0.9)' },
    { label: 'Jazz', color: 'rgba(60,220,160,0.9)' },
    { label: 'Electronic', color: 'rgba(60,180,255,0.9)' },
    { label: 'R&B', color: 'rgba(200,80,200,0.9)' },
  ];

  return (
    <div className="w-full min-h-screen relative flex items-center justify-center pointer-events-none pt-20 overflow-hidden">
      
      <div className="absolute inset-0 z-[1]">
        <AlbumLayer mounted={true} />
      </div>
      <div className="absolute inset-0 z-[2] pointer-events-none">
        <WaveCanvas />
      </div>

      {/* Gradient masks to prevent hard edges on the rotated AlbumLayer */}
      <div className="absolute bottom-0 left-0 w-full h-[250px] bg-gradient-to-t from-[oklch(0.08_0.025_275)] via-[oklch(0.08_0.025_275)/0.8] to-transparent pointer-events-none z-[3]" />
      <div className="absolute top-0 left-0 w-full h-[150px] bg-gradient-to-b from-[oklch(0.08_0.025_275)] via-[oklch(0.08_0.025_275)/0.8] to-transparent pointer-events-none z-[3]" />

      {/* Genre dots on the left */}
      <div className="absolute left-0 top-0 w-full h-full pointer-events-none z-10">
        {[
          { label: 'Hip-Hop', color: 'rgba(120,60,255,0.85)', top: '25%' },
          { label: 'Rock', color: 'rgba(255,100,60,0.85)', top: '38%' },
          { label: 'Electronic', color: 'rgba(60,180,255,0.85)', top: '55%' },
          { label: 'Jazz', color: 'rgba(60,220,160,0.85)', top: '68%' },
          { label: 'Pop', color: 'rgba(255,200,60,0.85)', top: '80%' },
        ].map(g => (
          <div key={g.label} className="absolute left-0 flex items-center gap-2 pl-5 -translate-y-1/2" style={{ top: g.top }}>
            <div className="w-1.5 h-1.5 rounded-full shrink-0"
              style={{ background: g.color, boxShadow: `0 0 8px ${g.color}` }} />
            <span className="font-display font-bold text-[10px] tracking-[0.1em] uppercase" style={{ color: g.color }}>
              {g.label}
            </span>
          </div>
        ))}
      </div>

      {/* Filtered text on the right */}
      <div className="absolute right-8 top-1/2 -translate-y-1/2 text-right pointer-events-none z-10">
        <div className="font-display text-[10px] font-bold tracking-[0.12em] uppercase text-[rgba(160,255,100,0.8)] mb-1.5">filtered</div>
        <div className="w-px h-10 bg-[rgba(160,255,100,0.3)] ml-auto" />
      </div>

      {/* Main Central Box */}
      <div className="relative z-10 w-[440px] pointer-events-auto bg-[oklch(0.08_0.025_275)] border border-[oklch(0.20_0.04_275)] rounded-[24px] overflow-hidden shadow-[0_32px_80px_rgba(0,0,0,0.8),inset_0_1px_1px_rgba(255,255,255,0.05)]">
        <div className="flex items-center justify-between py-4 px-6 border-b border-[oklch(0.16_0.03_275)]">
          <div className="flex items-center gap-2.5">
            <div className="w-[30px] h-[30px] rounded-[8px] shrink-0 bg-gradient-to-br from-violet to-lime flex items-center justify-center text-[15px] font-bold text-[#12061c] font-display">h</div>
            <span className="font-display font-bold text-[17px] tracking-[-0.02em]">hoxfox</span>
          </div>
          <span className="font-display text-[10px] font-bold tracking-[0.14em] uppercase bg-[oklch(0.82_0.22_145/0.12)] text-lime py-1 px-2.5 rounded-full border border-[oklch(0.82_0.22_145/0.2)]">BETA</span>
        </div>
        <div className="pt-[28px] px-6 pb-5">
          <div className="font-display font-light text-[12px] tracking-[0.14em] uppercase text-text3 mb-2.5">playlist filter</div>
          <h1 className="font-display font-bold text-[34px] leading-[1.05] tracking-[-0.03em] mb-0">
            Turn your chaos<br />into a <span className="bg-gradient-to-r from-lime to-sky bg-clip-text text-transparent">vibe.</span>
          </h1>
        </div>
        <div className="mx-6 mb-5 bg-white/[0.03] border border-white/[0.08] rounded-[16px] flex items-center py-4 px-5">
          <div className="flex-1 text-center">
            <div className="font-display font-bold text-[28px] tracking-[-0.04em] text-text3">847</div>
            <div className="text-[10px] text-text3 tracking-[0.1em] uppercase mt-1">songs in</div>
          </div>
          <div className="px-4 flex flex-col items-center gap-1.5">
            <div className="text-lg text-lime">→</div>
            <div className="w-px h-5 bg-[oklch(0.22_0.03_275)]" />
          </div>
          <div className="flex-1 text-center">
            <div className="font-display font-bold text-[28px] tracking-[-0.04em] text-lime">23</div>
            <div className="text-[10px] text-lime opacity-70 tracking-[0.1em] uppercase mt-1">filtered</div>
          </div>
        </div>
        <div className="px-6 pb-[24px] flex flex-wrap gap-2">
          {genres.map(g => (
            <div key={g.label}
              onMouseEnter={() => setHoveredGenre(g.label)}
              onMouseLeave={() => setHoveredGenre(null)}
              className="font-display text-[13px] font-semibold tracking-[0.04em] py-2 px-3.5 rounded-full transition-all duration-200 cursor-default"
              style={{
                border: `1.5px solid ${g.color.replace('0.9', '0.3')}`,
                color: hoveredGenre === g.label ? 'oklch(0.07 0.025 275)' : g.color,
                background: hoveredGenre === g.label ? g.color : g.color.replace('0.9', '0.08'),
              }}>{g.label}</div>
          ))}
        </div>
        <div className="h-px bg-[oklch(0.16_0.03_275)] mb-5" />
        <div className="px-6 pb-6 flex flex-col gap-3">
          <button className="btn-primary w-full justify-center text-[15px] py-3.5 px-6 hover:scale-[1.02] transition-transform" onClick={onNext}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
            </svg>
            Connect Spotify
          </button>
        </div>
      </div>
    </div>
  );
};
