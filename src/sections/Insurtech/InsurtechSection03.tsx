import React from 'react';
import { motion } from 'motion/react';
import { useDictionary } from '../../hooks/useDictionary';

export const InsurtechSection03 = () => {
  const { language } = useDictionary();
  const isEn = language === 'en';

  return (
    <section className="relative w-full min-h-[90vh] flex flex-col xl:flex-row-reverse items-center justify-between pl-4 md:pl-[40px] lg:pl-[80px] pr-6 md:pr-[60px] lg:pr-[80px] py-16 xl:py-24 gap-12 lg:gap-16 overflow-hidden bg-[#050505]">
      
      {/* Right Text Content Area */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="flex flex-col w-full xl:w-[40%] 2xl:w-[35%] z-10"
      >
         {/* Tag */}
         <div className="flex items-center gap-4 mb-8">
            <h4 className="text-white/50 tracking-tighter text-[12px] md:text-[14px] uppercase font-sans font-bold">
              {isEn ? '02 / PRODUCT ECPERIENCE REDESIGN' : '02 / 产品体验重构'}
            </h4>
            <div className="w-16 h-[1px] bg-white/30" />
         </div>
         
         {/* Title */}
         <h2 
           className={`uppercase w-full ${isEn ? 'text-[clamp(26px,5vw,66px)] font-black font-sans tracking-tighter leading-[1.05]' : 'text-[clamp(26px,5vw,72px)] font-black font-puhuiti tracking-tighter leading-[1.1] [-webkit-text-stroke:2px_currentColor]'}`}
         >
           {isEn ? (
             <>
               Systematic Platform<br />
               Buildn
             </>
           ) : (
             <>系统化<br />平台构建</>
           )}
         </h2>
         
         {/* Description */}
         <p className={`mt-8 md:mt-12 w-full max-w-[500px] text-white/50 text-pretty ${isEn ? 'font-sans font-light tracking-[0.015em] leading-[1.5] text-[11px] xl:text-[13px]' : 'font-sans font-light tracking-[0.03em] leading-[1.6] text-[11px] xl:text-[13px] text-justify'}`}>
           {isEn 
             ? "Deconstructing core logic. Reshaping information architecture and workflows to slash cognitive load and elevate the platform experience."
             : "基于底层逻辑拆解。重塑信息架构与业务流程，大幅降低认知成本，实现平台级体验升维。"}
         </p>
      </motion.div>

      {/* Left Content Area: Large Image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="w-full xl:w-[55%] 2xl:w-[60%] aspect-[4/3] xl:aspect-[16/9] relative rounded-[20px] md:rounded-[40px] overflow-hidden bg-[#111]"
      >
        <img 
          src="https://img.nickiresume.cn/Nimage/02iyunbao/05UX.webp" 
          alt="AI-Driven Conversion" 
          className="w-full h-full object-cover"
          onError={(e) => {
             (e.target as HTMLImageElement).src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 9' fill='%23111'%3E%3Crect width='16' height='9'/%3E%3C/svg%3E";
          }}
        />
        
      </motion.div>
      
    </section>
  );
};
