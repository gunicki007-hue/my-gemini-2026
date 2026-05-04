import React from 'react';
import { motion } from 'motion/react';
import { useDictionary } from '../../hooks/useDictionary';

export const InsurtechSection04 = () => {
  const { language } = useDictionary();
  const isEn = language === 'en';

  return (
    <section className="relative w-full min-h-[90vh] flex flex-col xl:flex-row items-center justify-between px-6 md:px-[60px] lg:px-[80px] py-16 xl:py-24 gap-12 lg:gap-16 overflow-hidden bg-[#0a0a0a]">
      
      {/* Left Content Area: Large Image */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
        className="w-full xl:w-[55%] 2xl:w-[60%] aspect-[4/3] xl:aspect-[16/9] relative rounded-[20px] md:rounded-[40px] overflow-hidden bg-[#111]"
      >
        <img 
          src="https://img.nickiresume.cn/Nimage/02iyunbao/asset.webp" 
          alt="Core IP Assets" 
          className="w-full h-full object-cover"
          onError={(e) => {
             (e.target as HTMLImageElement).src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 9' fill='%23111'%3E%3Crect width='16' height='9'/%3E%3C/svg%3E";
          }}
        />
        <div className="absolute inset-0 border border-white/10 rounded-[20px] md:rounded-[40px] pointer-events-none" />
      </motion.div>
      
      {/* Right Text Content Area */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="flex flex-col items-start text-left w-full xl:w-[40%] 2xl:w-[35%] z-10"
      >
         {/* Tag */}
         <div className="flex items-center gap-4 mb-8">
            <h4 className="text-white/60 tracking-[0.2em] text-[12px] md:text-[14px] uppercase font-sans font-bold">
              {isEn ? '01 / BRAND VISUAL UPGRADE' : '01 / 品牌视觉升维'}
            </h4>
            <div className="w-16 h-[1px] bg-white/30" />
         </div>
         
         {/* Title */}
         <h2 
           className={`uppercase leading-none tracking-tighter w-full ${isEn ? 'text-[50px] sm:text-[70px] md:text-[70px] xl:text-[80px] font-black font-sans' : 'text-[40px] sm:text-[60px] md:text-[60px] xl:text-[70px] font-extrabold font-["PingFang_SC","Microsoft_YaHei"]'}`}
         >
           {isEn ? (
             <>
               Illustration <br/> Asset Library 
             </>
           ) : (
             <>
               构建插画<br/>资产库
             </>
           )}
         </h2>
         
         {/* Description */}
         <p className={`mt-6 md:mt-8 w-full text-white/50 text-pretty ${isEn ? 'text-[15px] xl:text-[17px] tracking-normal leading-[1.8]' : 'text-[15px] xl:text-[17px] tracking-widest sm:tracking-wider xl:tracking-widest leading-[2]'}`}>
           {isEn ? (
             <>
               Building global insurance visual resources. Standardizing assets for high-frequency reuse to effectively <span className="text-white font-bold">boost daily team output by 50%</span>.
             </>
           ) : (
             <>
               建立全局保险配图资源。规范视觉标准并实现资产高频复用，有效将团队日常输出<span className="text-white font-bold">增幅50%</span>。
             </>
           )}
         </p>
      </motion.div>

    </section>
  );
};
