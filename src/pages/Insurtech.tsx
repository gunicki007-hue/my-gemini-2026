import React, { useEffect } from 'react';
import { InsurtechHero } from '../sections/Insurtech/InsurtechHero';
import { InsurtechSection01 } from '../sections/Insurtech/InsurtechSection01';
import { InsurtechSection02 } from '../sections/Insurtech/InsurtechSection02';
import { InsurtechSection03 } from '../sections/Insurtech/InsurtechSection03';
import { InsurtechSection04 } from '../sections/Insurtech/InsurtechSection04';
import { InsurtechSection05 } from '../sections/Insurtech/InsurtechSection05';
import { InsurtechSection07 } from '../sections/Insurtech/InsurtechSection07';
import { InsurtechSection08 } from '../sections/Insurtech/InsurtechSection08';
import { InsurtechOutro } from '../sections/Insurtech/InsurtechOutro';
import { useDictionary } from '../hooks/useDictionary';

export const Insurtech = () => {
  const { language } = useDictionary();
  const isEn = language === 'en';

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full min-h-screen bg-[#050505] text-white overflow-clip scroll-smooth selection:bg-[#4DB0FF]/30 selection:text-white">
       <div id="section-0">
         <InsurtechHero />
       </div>

       <div id="section-1">
         <InsurtechSection01 />
       </div>
       
       <div id="section-2">
         <InsurtechSection02 />
       </div>
       
       <div id="section-3">
         <InsurtechSection04 />
       </div>
       
       <div id="section-4">
         <InsurtechSection03 />
       </div>
       
       <div id="section-5">
         <InsurtechSection05 />
       </div>

       <div id="section-7">
         <InsurtechSection07 />
       </div>

       <div id="section-8">
         <InsurtechSection08 />
       </div>

       {/* Outro */}
       <div className="-mb-8">
         <InsurtechOutro />
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
              <span className="text-[12px] md:text-[11px] text-white/50 tracking-[0.15em] font-light font-sans whitespace-nowrap">
                {isEn ? '12 Years of Product & Brand System Design' : '12年产品与品牌系统设计经验'}
              </span>
            </div>

            {/* Middle Box (CTA) */}
            <div className="flex xl:flex-1 w-full xl:w-auto justify-start xl:justify-center z-10">
              <a href="mailto:gunicki007@gmail.com" className="flex items-center gap-6 cursor-pointer group/btn">
                <span className="text-[13px] md:text-[14px] font-bold tracking-[0.15em] text-[#4DB0FF] group-hover/btn:text-white transition-colors duration-500 uppercase">
                  {isEn ? 'CONTACT ME' : '联系我'}
                </span>
                <span className="text-[#4DB0FF] text-[10px] transform scale-x-[1.2] group-hover/btn:translate-x-2 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover/btn:text-white">▶</span>
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

    </div>
  );
};

