import React from 'react';
import { motion } from 'motion/react';
import { useDictionary } from '../../hooks/useDictionary';

export const Web3DigitalPortalSecondary = () => {
  const { language } = useDictionary();
  const isEn = language === 'en';

  return (
    <section className="relative w-full min-h-[90vh] flex flex-col xl:flex-row items-center justify-between pl-4 pr-6 md:pl-[40px] md:pr-[60px] lg:pl-[80px] lg:pr-[80px] py-16 xl:py-24 gap-12 lg:gap-16 overflow-hidden bg-[#050505]">
      
      {/* Left Content Area: Large Image (Flush Left) */}
      <motion.div 
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="w-full xl:w-[60%] flex-1 relative z-10 flex items-center justify-start"
      >
         {/* Container set 80px from left edge, rounded right corners */}
         <div className="w-full relative aspect-video bg-transparent overflow-hidden rounded-[12px] sm:rounded-r-[24px] flex items-center justify-center">
             {/* == 🚨 左侧展示图替换处 / REPLACE WITH LEFT IMAGE == */}
             <img 
               src="https://img.nickiresume.cn/Nimage/01web3/crydit-website-design.webp" 
               className="w-full h-full object-contain object-left z-0" 
               alt="Digital Portal Detailed UI"
             /> 
         </div>
      </motion.div>

      {/* Right Text Content Area */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        className="flex flex-col z-10 relative w-full lg:w-[35%] xl:w-[35%] shrink-0 pl-6 lg:pl-0"
      >
         {/* Tag */}
         <div className="flex items-center gap-4 mb-8">
            <h4 className="text-white/70 tracking-tighter text-[12px] md:text-[14px] uppercase font-sans font-bold">
              {isEn ? '03 / DIGITAL PORTAL' : '03 / 数字门户'}
            </h4>
            <div className="w-16 h-[1px] bg-white/30" />
         </div>
         
         {/* Title built using exact Typography principles */}
         <h2 
           className={`uppercase w-full ${isEn ? 'text-[clamp(26px,5vw,66px)] font-extrabold font-sans tracking-tighter leading-[1.05]' : 'text-[clamp(26px,5vw,72px)] font-bold font-puhuiti tracking-tighter leading-[1.1] [-webkit-text-stroke:2px_currentColor]'}`}
         >
           {isEn ? (
             <>
               Website Interface Layout<br />
               Interface Layoute
               
             </>
           ) : (
             <>官网<br />界面布局</>
           )}
         </h2>
         
         {/* Secondary paragraph */}
         <p className={`mt-8 md:mt-12 w-full max-w-[500px] text-white/70 ${isEn ? 'font-sans font-light tracking-[0.015em] leading-[1.5] text-[16px] xl:text-[16px]' : 'font-sans font-light tracking-[0.03em] leading-[1.6] text-[16px] xl:text-[16px] text-justify'}`}>
           {isEn 
             ? "To comply with NDA requirements, core commercial data in this project has been replaced with dummy content."
             : "为遵守保密协议（NDA），本作品涉及的核心商业数据均已替换为虚拟信息。"}
         </p>
      </motion.div>

    </section>
  );
};
