import React from 'react';
import { motion } from 'motion/react';
import { useDictionary } from '../../hooks/useDictionary';

export const Web3DigitalPortal = () => {
  const { language } = useDictionary();
  const isEn = language === 'en';

  return (
    <section className="relative w-full min-h-[90vh] flex flex-col xl:flex-row items-center justify-between px-6 md:px-[60px] lg:px-[80px] py-16 xl:py-24 gap-12 lg:gap-16 overflow-hidden bg-[#0a0a0a]">
      
      {/* Left Text Content Area */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="flex flex-col z-10 relative w-full lg:w-[35%] xl:w-[35%] shrink-0 lg:pr-0 pr-6"
      >
         {/* Tag matching Screen 1 & 2 styles */}
         <div className="flex items-center gap-4 mb-8">
            <div className="w-16 h-[1px] bg-white/30" />
            <h4 className="text-white/60 tracking-[0.2em] text-[12px] md:text-[14px] uppercase font-sans font-bold">
              {isEn ? '02 / BRAND STRATEGY' : '02 / 品牌策略'}
            </h4>
         </div>
         
         {/* Title built using exact Screen 1 Typography principles */}
         <h2 
           className={`uppercase leading-none tracking-tighter w-full ${isEn ? 'text-[50px] sm:text-[70px] md:text-[80px] xl:text-[90px] font-black font-sans' : 'text-[40px] sm:text-[60px] md:text-[70px] xl:text-[80px] font-extrabold font-["PingFang_SC","Microsoft_YaHei"]'}`}
         >
           {isEn ? (
             <>
               Architecting<br />
               <span className="text-transparent" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.4)' }}>Trust</span><br />
               
             </>
           ) : (
             <>转译<br />信任架构</>
           )}
         </h2>
         
         {/* Secondary paragraph */}
         <p className={`mt-8 md:mt-12 w-full max-w-[500px] text-white/50 ${isEn ? 'text-[15px] xl:text-[17px] tracking-normal leading-[1.8]' : 'text-[15px] xl:text-[17px] tracking-widest leading-[2]'}`}>
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
        className="w-full xl:w-[60%] flex-1 relative z-10 flex items-center justify-end"
      >
         {/* Container set 80px from the right edge, rounded all corners */}
         <div className="w-full h-full relative aspect-[1.8/1] sm:aspect-[2/1] xl:aspect-auto xl:h-[800px] bg-transparent overflow-hidden rounded-[12px] sm:rounded-[24px]">
             {/* == 🚨 右侧图 替换处 / REPLACE WITH RIGHT IMAGE == */}
             <img 
               src="https://img.nickiresume.cn/Nimage/01web3/04-3.webp" 
               className="absolute inset-0 w-full h-full object-cover object-left z-0" 
               alt="Digital Portal Architecture"
             />
         </div>
      </motion.div>

    </section>
  );
};
