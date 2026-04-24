import React from 'react';
import { ALBUMS } from '../data';

export const AlbumLayer = ({ mounted }) => {
  // Duplicate for seamless infinite marquee loop
  const row1 = [...ALBUMS, ...ALBUMS, ...ALBUMS];
  const row2 = [...ALBUMS].reverse();
  const row2Full = [...row2, ...row2, ...row2];
  const row3 = [...ALBUMS, ...ALBUMS, ...ALBUMS];

  return (
    <div className="absolute inset-0 z-[1] pointer-events-none overflow-hidden flex flex-col justify-center gap-6"
         style={{
           opacity: mounted ? 1 : 0,
           transition: 'opacity 1.5s ease-out',
           transform: 'rotate(-8deg) scale(1.4)'
         }}>
         
      {/* Heavy radial mask so the center is dark/clean for the main UI, and albums only show vividly on the periphery */}
      <div className="absolute inset-0 z-10" style={{
        background: 'radial-gradient(ellipse at center, oklch(0.08 0.025 275 / 1) 25%, oklch(0.08 0.025 275 / 0.8) 45%, transparent 80%)'
      }} />

      <div className="album-row row-left">
        {row1.map((a, i) => (
          <img key={`r1-${i}`} src={a.inner.props.src} className="w-[180px] h-[180px] rounded-2xl object-cover shadow-[0_16px_40px_rgba(0,0,0,0.8)] opacity-[0.65]" alt="album" />
        ))}
      </div>
      
      <div className="album-row row-right">
        {row2Full.map((a, i) => (
          <img key={`r2-${i}`} src={a.inner.props.src} className="w-[220px] h-[220px] rounded-2xl object-cover shadow-[0_24px_50px_rgba(0,0,0,0.9)] opacity-[0.85]" alt="album" />
        ))}
      </div>
      
      <div className="album-row row-left">
        {row3.map((a, i) => (
          <img key={`r3-${i}`} src={a.inner.props.src} className="w-[180px] h-[180px] rounded-2xl object-cover shadow-[0_16px_40px_rgba(0,0,0,0.8)] opacity-[0.65]" alt="album" />
        ))}
      </div>
    </div>
  );
};
