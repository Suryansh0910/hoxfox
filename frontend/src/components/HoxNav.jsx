import React from 'react';

export const HoxNav = ({ mounted, onNext }) => (
  <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-5 bg-[oklch(0.04_0.02_275/0.7)] backdrop-blur-xl border-b border-[oklch(0.15_0.03_275)] transition-opacity duration-700" style={{ opacity: mounted ? 1 : 0 }}>
    <div className="flex items-center gap-2">
      <div className="w-[26px] h-[26px] rounded-[7px] shrink-0 bg-gradient-to-br from-violet to-lime flex items-center justify-center text-[13px] font-bold text-[#12061c] font-display">
        h
      </div>
      <span className="font-display font-bold text-[15px] tracking-[-0.02em]">hoxfox</span>
    </div>
    <div className="flex items-center gap-7">
      {['How it works', 'Features'].map(l => (
        <a key={l} href={`#${l.toLowerCase().replace(/ /g, '-')}`} className="text-[14px] font-medium text-text2 cursor-pointer font-sans transition-colors duration-150 hover:text-white">
          {l}
        </a>
      ))}
    </div>
    <div className="flex items-center gap-2.5">
      <button className="btn-primary py-2 px-[18px] text-xs" onClick={onNext}>Get started</button>
    </div>
  </nav>
);
