import React from 'react';
import { motion } from 'motion/react';
import { useDictionary } from '../../hooks/useDictionary';
import { Web3InteractiveMeme } from './Web3InteractiveMeme';

export const Web3BrandStrategy = () => {
  const { language } = useDictionary();
  const isEn = language === 'en';

  return (
    <section className="relative w-full flex flex-col items-center justify-start px-6 md:px-[60px] lg:px-[80px] py-16 xl:py-24 bg-[#0a0a0a]">
      
      {/* Centered Text Content Area */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="flex flex-col items-center text-center z-10 relative w-full max-w-4xl"
      >
         {/* Title built using exact Screen 1 Typography principles */}
         <h2 
           className={`uppercase w-full ${isEn ? 'text-[clamp(26px,5vw,50px)] font-bold font-sans tracking-tighter leading-[1.05]' : 'text-[clamp(26px,5vw,50px)] font-bold font-puhuiti tracking-tighter leading-[1.1] [-webkit-text-stroke:1px_currentColor]'}`}
         >
           {isEn ? (
             <>
               Meme Consensus & AI Asset Flow:<br />
               Breaking the Coldness of Finance
             </>
           ) : (
             <>Meme 共识与 AI 资产流<br />打破金融高冷感</>
           )}
         </h2>
         
         {/* Secondary paragraph */}
         <p className={`mt-6 w-full max-w-[720px] px-[20px] md:px-0 text-white/70 text-center ${isEn ? 'font-sans font-light tracking-[0.015em] leading-[1.6] text-[15px] xl:text-[16px]' : 'font-sans font-light tracking-[0.03em] leading-[1.7] text-[15px] xl:text-[16px]'}`}>
           {isEn 
             ? "Utilize the contrasting meme-style IP to build community consensus. Deeply embed the AI toolchain into the production line to achieve high-explosive, low-cost marketing asset output. From Twitter campaigns to community marketing conversions, ensure brand DNA penetrates all touchpoints."
             : "利用自带反差感的 meme 风IP 构建社区共识。通过 AI 工具链深度嵌入生产线，实现高爆发、低成本的营销资产输出。从 Twitter 宣发到社区营销转化，确保品牌 DNA 在全触点实现穿透。"}
         </p>
      </motion.div>

      {/* Spacer 80px */}
      <div className="h-[80px]" />

      {/* Media Grid Area */}
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        className="w-full max-w-[1440px] grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-6 z-10 items-stretch"
      >
         {/* Left: Interactive Component, spans 7 columns */}
         <div className="lg:col-span-7 relative">
            <Web3InteractiveMeme />
         </div>

         {/* Right: Two Stacked Media Elements, spans 5 columns */}
         <div className="lg:col-span-5 flex flex-col gap-4 lg:gap-6">
           {/* Top Right Video */}
           <div className="relative rounded-[16px] lg:rounded-[24px] overflow-hidden aspect-video">
             {/* == 🚨 右上视频链接替换处 / REPLACE WITH TOP RIGHT VIDEO URL == */}
             <video 
               autoPlay 
               loop 
               muted 
               playsInline 
               className="absolute inset-0 w-full h-full object-cover"
               src="https://img.nickiresume.cn/0507/dogtve.mp4" 
             />
           </div>
           
           {/* Bottom Right Image */}
           <div className="relative rounded-[16px] lg:rounded-[24px] overflow-hidden aspect-video">
             {/* == 🚨 右下图链接替换处 / REPLACE WITH BOTTOM RIGHT IMAGE URL == */}
             <img 
               src="https://img.nickiresume.cn/0507/meme01.webp" 
               className="absolute inset-0 w-full h-full object-cover" 
               alt="Brand Asset 2"
             />
           </div>
         </div>
      </motion.div>

    </section>
  );
};
