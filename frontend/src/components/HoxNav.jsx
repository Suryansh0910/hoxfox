import React from 'react';

export const HoxNav = ({ mounted, onNext }) => (
  <nav className="hox-nav" style={{ opacity: mounted ? 1 : 0, transition: 'opacity 0.6s 0.2s' }}>
    <div className="flex items-center gap-2">
      <div className="w-[26px] h-[26px] rounded-[7px] shrink-0 bg-gradient-to-br from-violet to-lime flex items-center justify-center text-[13px] font-bold text-[#12061c] font-display">
        h
      </div>
      <span className="font-display font-bold text-[15px] tracking-[-0.02em]">hoxfox</span>
    </div>
    <div className="flex items-center gap-7">
      {['Features', 'How it works', 'Pricing'].map(l => (
        <span key={l} className="text-[14px] font-medium text-text2 cursor-pointer font-sans transition-colors duration-150 hover:text-white">
          {l}
        </span>
      ))}
    </div>
    <div className="flex items-center gap-2.5">
      <button className="btn-ghost py-[7px] px-4 text-xs" onClick={onNext}>Log in</button>
      <button className="btn-primary py-2 px-[18px] text-xs" onClick={onNext}>Get started</button>
    </div>
  </nav>
);
