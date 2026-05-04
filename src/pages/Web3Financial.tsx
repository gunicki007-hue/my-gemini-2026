import React, { useEffect } from 'react';
import { Web3Hero } from '../sections/Web3/Web3Hero';
import { Web3VisualIdentity } from '../sections/Web3/Web3VisualIdentity';
import { Web3DesignLanguage } from '../sections/Web3/Web3DesignLanguage';
import { Web3BrandStrategy } from '../sections/Web3/Web3BrandStrategy';
import { Web3DigitalPortal } from '../sections/Web3/Web3DigitalPortal';
import { Web3PortalUI } from '../sections/Web3/Web3PortalUI';
import { Web3DigitalPortalSecondary } from '../sections/Web3/Web3DigitalPortalSecondary';
import { Web3UIUXDesign } from '../sections/Web3/Web3UIUXDesign';
import { Web3CommunityIP } from '../sections/Web3/Web3CommunityIP';
import { Web3CommunityIPSecondary } from '../sections/Web3/Web3CommunityIPSecondary';
import { Web3Section06 } from '../sections/Web3/Web3Section06';
import { Web3Outro } from '../sections/Web3/Web3Outro';
import { useDictionary } from '../hooks/useDictionary';

export const Web3Financial = () => {
  const { language } = useDictionary();
  const isEn = language === 'en';
  
  useEffect(() => {
    // Scroll management is entirely handled globally by RouteChangeHandler in App.tsx now
    // to prevent cross-component hook fighting. 
  }, []);

  return (
    <main className="flex-1 bg-[#050505] min-h-screen text-white pt-[140px]">
       
       <Web3Hero />

       {/* SECTION 0: VISUAL IDENTITY */}
       <div id="section-0">
         <Web3VisualIdentity />
         <Web3DesignLanguage />
       </div>

       {/* SECTION 1: BRAND STRATEGY */}
       <div id="section-1">
         <Web3BrandStrategy />
         <Web3DigitalPortal />
       </div>

       {/* SECTION 2: DIGITAL PORTAL UI */}
       <div id="section-2">
         <Web3PortalUI />
         <Web3DigitalPortalSecondary />
       </div>

       {/* SECTION 3: UI/UX DESIGN */}
       <div id="section-3">
         <Web3UIUXDesign />
       </div>

       {/* SECTION 4: COMMUNITY & IP */}
       <div id="section-4">
         <Web3CommunityIP />
         <Web3CommunityIPSecondary />
       </div>

       {/* SECTION 5: MARKETING (OR OTHER 06) */}
       <div id="section-5">
         <Web3Section06 />
       </div>

       {/* Outro (Half screen text + back button), outside section-5 to disable nav highlight */}
       <div className="-mb-8">
         <Web3Outro />
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
                <span className="text-[13px] md:text-[14px] font-bold tracking-[0.15em] text-[#BEF63B] group-hover/btn:text-white transition-colors duration-500 uppercase">
                  {isEn ? 'CONTACT ME' : '联系我'}
                </span>
                <span className="text-[#BEF63B] text-[10px] transform scale-x-[1.2] group-hover/btn:translate-x-2 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover/btn:text-white">▶</span>
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
