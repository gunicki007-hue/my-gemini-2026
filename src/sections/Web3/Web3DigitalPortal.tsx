import React from 'react';
import { motion } from 'motion/react';
import { useDictionary } from '../../hooks/useDictionary';

export const Web3DigitalPortal = () => {
  const { language } = useDictionary();
  const isEn = language === 'en';

  return (
    <section className="relative w-full min-h-[90vh] flex flex-col xl:flex-row items-center justify-start px-6 md:px-[60px] lg:px-[80px] py-16 xl:py-24 gap-[60px] xl:gap-[100px] overflow-hidden bg-[#0a0a0a]">
      
      {/* Left Text Content Area */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="flex flex-col z-10 relative w-full xl:w-[460px] shrink-0"
      >
         {/* Tag matching Screen 1 & 2 styles */}
         <div className="flex items-center gap-4 mb-8">
            <div className="w-16 h-[1px] bg-white/30" />
            <h4 className="text-white/70 tracking-tighter text-[12px] md:text-[14px] uppercase font-sans font-bold">
              {isEn ? '02 / BRAND STRATEGY' : '02 / 品牌策略'}
            </h4>
         </div>
         
         {/* Title built using exact Screen 1 Typography principles */}
         <h2 
           className={`uppercase w-full ${isEn ? 'text-[clamp(26px,5vw,66px)] font-extrabold font-sans tracking-tighter leading-[1.05]' : 'text-[clamp(26px,5vw,72px)] font-bold font-puhuiti tracking-tighter leading-[1.1] [-webkit-text-stroke:2px_currentColor]'}`}
         >
           {isEn ? (
             <>
               Architecting<br />
               Trust
               
             </>
           ) : (
             <>转译<br />信任架构</>
           )}
         </h2>
         
         {/* Secondary paragraph */}
         <p className={`mt-8 md:mt-12 w-full max-w-[500px] text-white/70 ${isEn ? 'font-sans font-light tracking-[0.015em] leading-[1.5] text-[16px] xl:text-[16px]' : 'font-sans font-light tracking-[0.03em] leading-[1.6] text-[16px] xl:text-[16px] text-justify'}`}>
           {isEn 
             ? "Refusing to let users guess in an information maze. Translating obscure tech logic into intuitive visuals. Lowering cognitive barriers to deliver business trust through absolute clarity and transparency."
             : "拒绝让用户在信息迷宫中猜测。将晦涩技术逻辑转译为直白视觉。降低认知门槛，以清晰兑现商业信任。"}
         </p>
      </motion.div>

      {/* Right Content Area: Large Image/Grid (Flush Right) */}
      <motion.div 
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        className="w-full flex-1 relative z-10 flex items-center justify-center"
      >
         {/* Container set 80px from the right edge, rounded all corners */}
         <div className="w-full h-full relative aspect-[1.8/1] sm:aspect-[2/1] xl:aspect-[16/9] bg-transparent overflow-hidden rounded-[12px] sm:rounded-[24px]">
             {/* == 🚨 右侧图 替换处 / REPLACE WITH RIGHT IMAGE == */}
             <img 
               src="https://img.nickiresume.cn/Nimage/01web3/04-3.webp" 
               className="absolute inset-0 w-full h-full object-cover object-left z-0 scale-[1.04]" 
               alt="Digital Portal Architecture"
             />
         </div>
      </motion.div>

    </section>
  );
};
