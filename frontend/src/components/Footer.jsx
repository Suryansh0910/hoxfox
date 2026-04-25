import React from 'react';

export const Footer = () => {
  return (
    <footer className="w-full border-t border-[oklch(0.15_0.03_275)] bg-[oklch(0.06_0.02_275)] py-8 relative z-[5]">
      <div className="max-w-[1200px] mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2.5">
          <div className="w-[24px] h-[24px] rounded-[6px] shrink-0 bg-gradient-to-br from-violet to-lime flex items-center justify-center text-[12px] font-bold text-[#12061c] font-display">h</div>
          <span className="font-display font-bold text-[15px] tracking-tight text-white">hoxfox</span>
        </div>
        
        <div className="text-text3 text-[13px]">
          © {new Date().getFullYear()} HoxFox. All rights reserved.
        </div>
        
        <div className="flex items-center gap-6 text-[13px] font-medium text-text2">
          <a href="#" className="hover:text-lime transition-colors">Twitter</a>
          <a href="#" className="hover:text-lime transition-colors">GitHub</a>
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
};
