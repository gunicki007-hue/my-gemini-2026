import React, { useEffect } from 'react';
import { AIGCHero } from '../sections/AIGC/AIGCHero';
import { AIGCSection01 } from '../sections/AIGC/AIGCSection01';
import { AIGCSection02 } from '../sections/AIGC/AIGCSection02';
import { AIGCSection03 } from '../sections/AIGC/AIGCSection03';
import { AIGCSection04 } from '../sections/AIGC/AIGCSection04';
import { AIGCSection05 } from '../sections/AIGC/AIGCSection05';
import { AIGCSection06 } from '../sections/AIGC/AIGCSection06';
import { AIGCSection06_5 } from '../sections/AIGC/AIGCSection06_5';
import { AIGCSection07 } from '../sections/AIGC/AIGCSection07';
import { AIGCOutro } from '../sections/AIGC/AIGCOutro';
import { useDictionary } from '../hooks/useDictionary';

export const AIGC = () => {
  const { language } = useDictionary();
  const isEn = language === 'en';
  
  useEffect(() => {
    // Scroll management is entirely handled globally by RouteChangeHandler in App.tsx
  }, []);

  return (
    <main className="flex-1 bg-[#050505] min-h-screen text-white pt-[140px]">
       
       <AIGCHero />

       <div id="section-0">
         <AIGCSection01 />
         <AIGCSection02 />
         <AIGCSection03 />
       </div>

       <div id="section-1">
         <AIGCSection04 />
         <AIGCSection05 />
       </div>

       <div id="section-2">
         <AIGCSection06 />
         <AIGCSection07 />
       </div>

       <AIGCSection06_5 />

       {/* Outro (Half screen text + back button) */}
       <div className="-mb-8">
         <AIGCOutro />
       </div>

       {/* Global Sub-page Footer (Horizontal Wide Banner) */}
       <div className="w-full relative">
         <div className="w-full bg-[#111111] py-14 px-6 md:px-[60px] lg:px-[120px] flex flex-col xl:flex-row items-center justify-between gap-10 shadow-[0_-20px_60px_rgba(0,0,0,0.6)] border-t border-white/5 overflow-hidden group">
            {/* Ambient inner glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.02] to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-[2000ms] ease-in-out pointer-events-none" />

            {/* Left Box (Title & Desc) */}
            <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-10 z-10 w-full xl:w-auto">
              <span className="text-4xl md:text-[38px] font-bold tracking-tighter text-white uppercase font-sans">NICKI</span>
              <div className="hidden md:block w-[1px] h-8 bg-white/10"></div>
              <span className="text-[12px] md:text-[11px] text-white/70 tracking-[0.15em] font-light font-sans whitespace-nowrap">
                {isEn ? '12 Years of Product & Brand System Design' : '12年产品与品牌系统设计经验'}
              </span>
            </div>

            {/* Middle Box (CTA) */}
            <div className="flex xl:flex-1 w-full xl:w-auto justify-start xl:justify-center z-10">
              <a href="mailto:gunicki007@gmail.com" className="flex items-center gap-6 cursor-pointer group/btn">
                <span className="text-[13px] md:text-[14px] font-bold tracking-[0.15em] text-[#D5B667] group-hover/btn:text-white transition-colors duration-500 uppercase">
                  {isEn ? 'CONTACT ME' : '联系我'}
                </span>
                <span className="text-[#D5B667] text-[10px] transform scale-x-[1.2] group-hover/btn:translate-x-2 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover/btn:text-white">▶</span>
              </a>
            </div>

            {/* Right Box (Contact Details & QR) */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-12 w-full xl:w-auto justify-start xl:justify-end z-10">
               <div className="flex flex-col gap-3 text-[13px] md:text-[14px] tracking-wider text-white/40 font-light min-w-[260px]">
                  <div className="flex justify-between items-center w-full">
                    <span className="w-16 text-left opacity-70">{isEn ? 'Email' : '邮箱'}</span>
                    <span className="text-white font-medium text-right flex-1 select-all">gunicki007@gmail.com</span>
                  </div>
                  <div className="flex justify-between items-center w-full">
                    <span className="w-16 text-left opacity-70">{isEn ? 'Phone' : '电话'}</span>
                    <span className="text-white font-medium text-right flex-1">+86 15801905482</span>
                  </div>
                  <div className="flex justify-between items-center w-full">
                    <span className="w-16 text-left opacity-70">{isEn ? 'WeChat' : '微信'}</span>
                    <span className="text-white font-medium text-right flex-1">{isEn ? 'Scan QR to add' : '扫二维码添加'}</span>
                  </div>
               </div>
               {/* QR Code Container */}
               <div className="w-[100px] h-[100px] bg-white rounded-[16px] p-[6px] flex-shrink-0 shadow-lg relative transform hover:scale-[1.05] transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]">
                  <img src="https://img.nickiresume.cn/images/01profile/QRcode.webp" alt="QR" className="w-full h-full object-cover rounded-[10px]" />
               </div>
            </div>
         </div>
       </div>
    </main>
  );
};
