import React from 'react';
import { motion } from 'motion/react';
import { useDictionary } from '../../hooks/useDictionary';

export const Web3Section06 = () => {
  const { language } = useDictionary();
  const isEn = language === 'en';

  return (
    <section className="relative w-full min-h-[90vh] flex flex-col xl:flex-row items-center justify-between pl-6 md:pl-[60px] lg:pl-[80px] pr-4 md:pr-[40px] lg:pr-[80px] py-16 xl:py-24 gap-12 lg:gap-16 overflow-hidden bg-[#0a0a0a]">
      
      {/* Left Text Content Area */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="flex flex-col z-10 relative w-full lg:w-[35%] xl:w-[35%] shrink-0"
      >
         {/* Tag */}
         <div className="flex items-center gap-4 mb-8">
            <h4 className="text-white/50 tracking-tighter text-[14px] md:text-[16px] uppercase font-sans font-bold">
              {isEn ? '06 / PR & GLOBALIZATION' : '06 / 公关与全球化'}
            </h4>
            <div className="w-16 h-[1px] bg-white/30" />
         </div>
         
         {/* Title built using exact Typography principles */}
         <h2 
           className={`uppercase w-full ${isEn ? 'text-[clamp(32px,6vw,80px)] font-black font-sans tracking-tighter leading-[1.05]' : 'text-[clamp(32px,5.5vw,80px)] font-black font-puhuiti tracking-tighter leading-[1.1] [-webkit-text-stroke:2px_currentColor]'}`}
         >
           {isEn ? (
             <>
               Global PR & <br />
               Credibility
               
             </>
           ) : (
             <>国际公关与 <br />行业背书</>
           )}
         </h2>
         
         {/* Secondary paragraph */}
         <p className={`mt-8 md:mt-12 w-full max-w-[500px] text-white/50 ${isEn ? 'font-sans font-light tracking-[0.015em] leading-[1.7] text-[15px] xl:text-[17px]' : 'font-sans font-light tracking-[0.03em] leading-[1.8] text-[15px] xl:text-[17px] text-justify'}`}>
           {isEn 
             ? "Leading global expo and media visuals. Leveraging absolute brand consistency to build a commercial trust moat."
             : "主导海外展会与媒体视觉。用绝对一致的品牌输出，在国际市场构筑商业信任壁垒。"}
         </p>
      </motion.div>

      {/* Right Content Area: Large Image (16:9, Right aligned) */}
      <motion.div 
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        className="w-full xl:w-[60%] flex-1 relative z-10 flex items-center justify-end"
      >
         {/* Container set 80px from right edge (handled by section padding), aspect-video for 16:9 */}
         <div className="w-full relative aspect-video bg-transparent overflow-hidden rounded-[12px] sm:rounded-l-[24px] flex items-center justify-center">
             {/* == 右侧展示图 / RIGHT IMAGE == */}
             <img 
               src="https://img.nickiresume.cn/Nimage/01web3/crydit-global-pr.webp" 
               className="w-full h-full object-cover object-center z-0" 
               alt="Section 06 Image"
             /> 
         </div>
      </motion.div>

    </section>
  );
};
