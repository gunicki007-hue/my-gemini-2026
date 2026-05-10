import React from 'react';
import { useDictionary } from '../../hooks/useDictionary';

export const About = () => {
  const { language } = useDictionary();
  const isEn = language === 'en';

  return (
    <section id="about" className="w-full bg-[#050505] text-white px-6 md:px-[80px] pt-[8vh] pb-[calc(6vh+20px)] lg:pb-[calc(2vh+20px)] flex flex-col">
      <div className="w-full flex flex-col -translate-y-[30px]">
        
        {/* 1. About Header & Intro (Left Aligned Block) */}
        <div className="space-y-10 max-w-[1000px]">
          <h3 
            className={`mb-4 md:mb-6 uppercase ${isEn ? 'text-[46px] font-extrabold font-sans tracking-tighter leading-[1.05]' : 'text-[46px] font-bold font-puhuiti tracking-tighter leading-[1.1]'}`}
          >
             {isEn ? 'NICKI / BIO' : 'Nicki / 个人简介'}
          </h3>
           <div className="flex flex-col">
             <h2 className={`text-[28px] md:text-[40px] leading-[1.25] tracking-tight ${isEn ? 'font-extrabold font-sans uppercase' : 'font-bold font-puhuiti'} mb-6`}>
               {isEn ? "Visual Strategist × UX Architect — Not just beautiful visuals, but a highly usable soul." : "视觉操盘手 × UX体验师——既有好看的视觉，更有好用的灵魂。"}
             </h2>
             <div className="flex items-center gap-4">
                <div className="w-16 h-[1px] bg-white/30" />
                <h4 className={`text-white/70 text-[16px] md:text-[18px] font-normal ${isEn ? 'tracking-normal' : 'tracking-wide'}`}>
                  {isEn ? "Let's skip the fluff and look at the final launched visual conversion and interactive experience" : "设计不聊虚的，咱们看最终上线的视觉转化和交互体验"}
                </h4>
             </div>
           </div>

           <div className={`text-[16px] md:text-[18px] text-white/70 font-normal pt-2 ${isEn ? 'tracking-normal space-y-6 leading-[1.7]' : 'tracking-wide space-y-5 leading-[1.8]'}`}>
               <p>
                 <span className="text-white font-bold">{isEn ? "Marketing Visuals, I am responsible for 'Beautiful': " : "营销视觉，我负责“好看”："}</span>
                 {isEn ? "Say goodbye to mediocre asset patchwork. I embed AI into the marketing production line, outputting explosive operational visuals with ultra-high efficiency. Whether online or offline, it not only catches the eye immediately but tangibly boosts conversion rates." : "告别平庸的素材拼凑。我把 AI 嵌进营销生产线，用极高的效率输出有爆发力的运营视觉。不管线上还是线下，不仅要第一时间吸睛，更要实打实地拉升转化率。"}
               </p>
               <p>
                 <span className="text-white font-bold">{isEn ? "UX Experience, I am responsible for 'Usable': " : "UX体验，我负责“好用”："}</span>
                 {isEn ? "No matter how convoluted the business logic, I can map out the smoothest user path. As an architect deeply rooted in UX, I'm accustomed to applying 'information noise reduction' to complex systems. Coupled with my understanding of frontend code logic, the delivered solutions are not only a joy for users but also frictionless for development." : "业务逻辑再绕，我也能理出最顺畅的用户路径。作为深耕 UX 方向的架构师，我习惯给复杂的系统做“信息降噪”。加上我懂前端代码逻辑，交付的方案不仅用户用着爽，开发落地也毫无阻力。"}
               </p>
           </div>
        </div>

        {/* 2. Core Capabilities (Pills) */}
        <div className="space-y-12 mt-[110px] md:mt-[130px]">
          {/* Row 1 */}
          <div className="space-y-5">
            <h3 className={`text-[18px] md:text-[20px] font-bold text-white ${isEn ? 'font-sans uppercase tracking-tight' : 'font-puhuiti tracking-wide'}`}>
              {isEn ? 'Marketing Visuals & AI Productivity' : '营销视觉与 AI 生产力'}
            </h3>
            <div className="flex flex-wrap gap-3 md:gap-4">
              {[
                { en: 'AI-Native Workflow', zh: 'AI 原生工作流' },
                { en: 'Midjourney / ComfyUI', zh: 'Midjourney / ComfyUI' },
                { en: 'Brand 0-1 Visual Strategy', zh: '品牌 0-1 视觉全案' },
                { en: 'AI Visual Asset Accumulation', zh: 'AI 视觉资产沉淀' }
              ].map((pill, idx) => (
                <div key={idx} className="bg-[#1A1A1A] hover:bg-[#2A2A2A] transition-colors duration-300 px-5 md:px-6 py-2.5 md:py-3 rounded-md text-[14px] md:text-[15px] font-medium text-white/80 border border-white/5">
                  {isEn ? pill.en : pill.zh}
                </div>
              ))}
            </div>
          </div>
          
          {/* Row 2 */}
          <div className="space-y-5">
            <h3 className={`text-[18px] md:text-[20px] font-bold text-white ${isEn ? 'font-sans uppercase tracking-tight' : 'font-puhuiti tracking-wide'}`}>
              {isEn ? 'UX Architecture & Design Engineering' : 'UX 架构与设计工程化'}
            </h3>
            <div className="flex flex-wrap gap-3 md:gap-4">
              {[
                { en: 'Complex System Noise Reduction', zh: '复杂系统降噪' },
                { en: 'Figma Industrial Standards', zh: 'Figma 工业级规范' },
                { en: 'Full-Chain Logic Deduction', zh: '全链路逻辑推演' },
                { en: 'Pixel-Perfect Lossless Delivery', zh: '像素级研发无损交付' }
              ].map((pill, idx) => (
                <div key={idx} className="bg-[#1A1A1A] hover:bg-[#2A2A2A] transition-colors duration-300 px-5 md:px-6 py-2.5 md:py-3 rounded-md text-[14px] md:text-[15px] font-medium text-white/80 border border-white/5">
                  {isEn ? pill.en : pill.zh}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
