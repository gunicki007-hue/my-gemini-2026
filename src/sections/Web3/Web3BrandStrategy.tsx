import React from 'react';
import { motion } from 'motion/react';
import { useDictionary } from '../../hooks/useDictionary';

export const Web3BrandStrategy = () => {
  const { language } = useDictionary();
  const isEn = language === 'en';

  return (
    <section className="relative w-full min-h-[90vh] flex flex-col xl:flex-row items-center justify-between pl-6 pr-0 md:pl-[60px] lg:pl-[80px] py-16 xl:py-24 gap-12 lg:gap-16 overflow-hidden bg-[#0a0a0a]">
      
      {/* Left Text Content Area */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="flex flex-col z-10 relative w-full lg:w-[35%] xl:w-[35%] shrink-0 lg:pr-0 pr-6"
      >
         {/* Tag matching Screen 1 styles */}
         <div className="flex items-center gap-4 mb-8">
            <div className="w-16 h-[1px] bg-white/30" />
            <h4 className="text-white/50 tracking-tighter text-[14px] md:text-[16px] uppercase font-sans font-bold">
              {isEn ? '02 / BRAND STRATEGY' : '02 / 品牌策略'}
            </h4>
         </div>
         
         {/* Title built using exact Screen 1 Typography principles */}
         <h2 
           className={`uppercase w-full ${isEn ? 'text-[clamp(40px,7vw,90px)] font-black font-sans tracking-tighter leading-[1.05]' : 'text-[clamp(36px,6vw,84px)] font-black font-puhuiti tracking-tighter leading-[1.1] [-webkit-text-stroke:2px_currentColor]'}`}
         >
           {isEn ? (
             <>
               Strategic Positioning<br />
               & Narrative 
            
             </>
           ) : (
             <>战略定位<br />与叙事推演</>
           )}
         </h2>
         
         {/* Secondary paragraph */}
         <p className={`mt-8 md:mt-12 w-full max-w-[500px] text-white/50 ${isEn ? 'font-sans font-light tracking-[0.015em] leading-[1.7] text-[15px] xl:text-[17px]' : 'font-sans font-light tracking-[0.03em] leading-[1.8] text-[15px] xl:text-[17px] text-justify'}`}>
           {isEn 
             ? "Translating competitor benchmarking and core business logic into a cohesive commercial narrative, cementing a global fintech brand's distinct identity and trust."
             : "从竞品对标到底层业务推演，搭建了完整的商业叙事逻辑，确立国际化金融科技品牌的独特辨识度与信任感。"}
         </p>
      </motion.div>

      {/* Right Content Area: Large Image/Grid (Flush Right) */}
      <motion.div 
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        className="w-full xl:w-[60%] flex-1 relative z-10 flex items-center justify-end"
      >
         {/* Container pushing all the way to the right edge */}
         <div className="w-full h-full relative aspect-[1.8/1] sm:aspect-[2/1] xl:aspect-[16/9] bg-transparent overflow-hidden rounded-l-[12px] sm:rounded-l-[24px]">
             {/* == 🚨 右侧大瀑布流/排版图 替换处 / REPLACE WITH RIGHT GRID IMAGE == */}
             {/* 把下方的 src="..." 替换变成您实际的带瀑布流排版的图片链接即可 */}
             <img 
               src="https://img.nickiresume.cn/Nimage/01web3/03crydit-strategy.webp" 
               className="absolute inset-0 w-full h-full object-cover object-left z-0" 
               alt="Brand Strategy Grid"
             />
         </div>
      </motion.div>

    </section>
  );
};
