import React from 'react';
import { motion } from 'motion/react';
import { useDictionary } from '../../hooks/useDictionary';

export const Web3DigitalPortal = () => {
  const { language } = useDictionary();
  const isEn = language === 'en';

  return (
    <section className="relative w-full min-h-[90vh] flex flex-col items-center justify-start py-16 xl:py-24 bg-[#0a0a0a]">
      
      {/* Text Content Area - Center Aligned */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="flex flex-col items-center text-center z-10 relative w-full max-w-4xl px-6"
      >
         {/* Title built using exact Screen 1 Typography principles */}
         <h2 
           className={`uppercase w-full ${isEn ? 'text-[clamp(26px,5vw,50px)] font-bold font-sans tracking-tighter leading-[1.05]' : 'text-[clamp(26px,5vw,50px)] font-bold font-puhuiti tracking-tighter leading-[1.1] [-webkit-text-stroke:1px_currentColor]'}`}
         >
           {isEn ? (
             <>Strategic Control: Brand DNA</>
           ) : (
             <>战略控盘：品牌 DNA</>
           )}
         </h2>

         {/* Subtitle / Minor Title */}
         <h3 className={`mt-4 w-full ${isEn ? 'text-[clamp(16px,2vw,20px)] font-sans font-medium tracking-wide text-white/90' : 'text-[clamp(16px,2vw,20px)] font-puhuiti font-medium tracking-wider text-white/90'}`}>
            {isEn ? "Underlying Anchor: Harnessing the Business Logic of \"Visual Explosion\"" : "底层锚点：驾驭“视觉爆发”的商业逻辑"}
         </h3>
         
         {/* Secondary paragraph */}
         <p className={`mt-6 w-full max-w-[720px] px-[20px] md:px-0 text-white/70 text-center ${isEn ? 'font-sans font-light tracking-[0.015em] leading-[1.6] text-[15px] xl:text-[16px]' : 'font-sans font-light tracking-[0.03em] leading-[1.7] text-[15px] xl:text-[16px]'}`}>
           {isEn 
             ? "Superficially, we are creating an approachable Meme visual carnival, but the unrestrained \"good looks\" must be controlled by rational business logic. This brand pyramid is our logical hub: it carries the business vision upwards and guides visual output and UX noise reduction downwards. It ensures that the explosive power of Meme does not deviate from the business bullseye of Web3 payment, making design truly the underlying architecture driving growth."
             : "表面上看，我们在制造一场带有亲和力的Meme视觉狂欢，但放肆的“好看”，必须被理性的商业逻辑控盘。这座品牌金字塔是我们的逻辑中枢：它向上承载商业愿景，向下指导视觉输出与 UX 降噪。它确保了 Meme 的爆发力不偏离 Web3 支付的商业靶心，让设计真正成为驱动增长的底层架构。"}
         </p>
      </motion.div>

      {/* Spacer */}
      <div className="h-[60px] xl:h-[80px]" />

      {/* Bottom Content Area: Large Image */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        className="w-full z-10 px-[80px]"
      >
         {/* Container set 80px from the left and right edge via padding */}
         <div className="w-full relative aspect-[18/9] bg-transparent overflow-hidden rounded-[16px] sm:rounded-[24px]">
             {/* == 🚨 下侧图 替换处 / REPLACE WITH BOTTOM IMAGE == */}
             <img 
               src="https://img.nickiresume.cn/0507/pyramid.webp" 
               className="absolute inset-0 w-full h-full object-contain z-0 scale-[0.8]" 
               alt="Brand Pyramid Architecture"
             />
         </div>
      </motion.div>

    </section>
  );
};
