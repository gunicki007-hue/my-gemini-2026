import React from 'react';
import { motion } from 'motion/react';
import { useDictionary } from '../../hooks/useDictionary';

export const InsurtechSection08 = () => {
  const { language } = useDictionary();
  const isEn = language === 'en';

  return (
    <section className="relative w-full py-16 xl:py-24 px-6 md:px-[60px] lg:px-[80px] bg-[#050505] flex flex-col items-center justify-center">
      
      {/* Centered Text Content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="flex flex-col items-center text-center w-full max-w-[800px] z-10 mb-12 md:mb-16"
      >
         {/* Tag */}
         <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-[1px] bg-white/30" />
            <h4 className="text-white/50 tracking-tighter text-[14px] md:text-[16px] uppercase font-sans font-bold">
              {isEn ? '04 / OMNICHANNEL MARKETING VISUALS' : '04 / 全域营销视觉'}
            </h4>
            <div className="w-12 h-[1px] bg-white/30" />
         </div>
         
         {/* Title */}
         <h2 
           className={`uppercase w-full ${isEn ? 'text-[clamp(32px,6vw,80px)] font-black font-sans tracking-tighter leading-[1.05]' : 'text-[clamp(32px,5.5vw,80px)] font-black font-puhuiti tracking-tighter leading-[1.1] [-webkit-text-stroke:2px_currentColor]'}`}
         >
           {isEn ? "MARKETING ASSET" : "营销视觉资产库"}
         </h2>
         
         {/* Description */}
         <p className={`mt-4 w-full max-w-[600px] text-white/50 text-pretty ${isEn ? 'font-sans font-light tracking-[0.015em] leading-[1.7] text-[15px] xl:text-[17px]' : 'font-sans font-light tracking-[0.03em] leading-[1.8] text-[15px] xl:text-[17px] text-center'}`}>
           {isEn 
             ? "Building an omnichannel visual matrix. Producing diverse, premium KVs to break stylistic limits and comprehensively drive business conversions."
             : "构建全域营销视觉矩阵。产出多风格高质 KV，打破单一视觉局限，全面支撑大盘商业转化。"}
         </p>
      </motion.div>

      {/* 2x2 Cards Grid */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
        className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mt-4 md:mt-6"
      >
        {[
          {
            cn: '产品海报',
            en: 'Product Posters',
            src: 'https://img.nickiresume.cn/Nimage/02iyunbao/poster01.webp'
          },
          {
            cn: '分公司系列海报',
            en: 'Branch Office Posters',
            src: 'https://img.nickiresume.cn/Nimage/02iyunbao/poster02-1.webp'
          },
          {
            cn: '节气海报',
            en: 'Solar Term Posters',
            src: 'https://img.nickiresume.cn/Nimage/02iyunbao/poster03-2.webp'
          },
          {
            cn: '节日海报',
            en: 'Holiday Posters',
            src: 'https://img.nickiresume.cn/Nimage/02iyunbao/poster04-2.webp'
          }
        ].map((item, idx) => (
          <div key={idx} className="w-full aspect-[16/9] relative rounded-[16px] md:rounded-[24px] overflow-hidden bg-[#111] group">
            <img 
              src={item.src}
              alt={isEn ? item.en : item.cn}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out"
              onError={(e) => {
                 (e.target as HTMLImageElement).src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 9' fill='%23111'%3E%3Crect width='16' height='9'/%3E%3C/svg%3E";
              }}
            />
            {/* Gradient Masks */}
            <div className="absolute inset-x-0 top-0 h-[30%] bg-gradient-to-b from-[#050505]/80 to-transparent pointer-events-none z-10" />
            <div className="absolute inset-x-0 bottom-0 h-[30%] bg-gradient-to-t from-[#050505]/80 to-transparent pointer-events-none z-10" />
            
            <div className="absolute top-4 right-4 md:top-6 md:right-6 border border-white/20 bg-black/40 backdrop-blur-md px-3 py-1.5 md:px-4 md:py-2 rounded-full z-20 pointer-events-none">
              <span className={`text-white/50`}>
                {isEn ? item.en : item.cn}
              </span>
            </div>
            
          </div>
        ))}
      </motion.div>
    </section>
  );
};
