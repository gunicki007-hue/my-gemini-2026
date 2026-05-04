import React from 'react';
import { motion } from 'motion/react';
import { useDictionary } from '../../hooks/useDictionary';

export const InsurtechSection01 = () => {
  const { language } = useDictionary();
  const isEn = language === 'en';

  return (
    <section className="relative w-full flex flex-col xl:flex-row items-start justify-between pl-6 md:pl-[60px] lg:pl-[80px] pr-4 md:pr-[40px] lg:pr-[80px] py-24 xl:py-40 gap-12 lg:gap-16 bg-[#0a0a0a]">
      
      {/* Left Text Content Area (Sticky wrapper) */}
      <div className="flex flex-col w-full xl:w-[40%] 2xl:w-[35%] z-10 xl:sticky xl:top-[150px] 2xl:top-[200px]">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col w-full"
        >
           {/* Tag */}
           <div className="flex items-center gap-4 mb-8">
              <h4 className="text-white/50 tracking-tighter text-[14px] md:text-[16px] uppercase font-sans font-bold">
                {isEn ? '01 / BRAND VISUAL UPGRADE' : '01 / 品牌视觉升维'}
              </h4>
              <div className="w-16 h-[1px] bg-white/30" />
           </div>
           
           {/* Title */}
           <h2 
             className={`uppercase w-full ${isEn ? 'text-[clamp(32px,6vw,80px)] font-black font-sans tracking-tighter leading-[1.05]' : 'text-[clamp(32px,5.5vw,80px)] font-black font-puhuiti tracking-tighter leading-[1.1] [-webkit-text-stroke:2px_currentColor]'}`}
           >
             {isEn ? (
               <>
                 All-New VI <br />
                 Redesign
               </>
             ) : (
               <>全新 VI 视觉<br />重塑</>
             )}
           </h2>
           
           {/* Description */}
           <p className={`mt-8 md:mt-12 w-full max-w-[500px] text-white/50 text-pretty ${isEn ? 'font-sans font-light tracking-[0.015em] leading-[1.7] text-[15px] xl:text-[17px]' : 'font-sans font-light tracking-[0.03em] leading-[1.8] text-[15px] xl:text-[17px] text-justify'}`}>
             {isEn 
               ? "Redefining the legacy VI system. Elevating professional quality while retaining visual affinity."
               : "重新规范旧版 VI 体系。让品牌在保持视觉亲和力的前提下，呈现出更高级的专业质感。"}
           </p>
        </motion.div>
      </div>

      {/* Right Content Area: Scrollable Image List */}
      <div className="w-full xl:w-[55%] 2xl:w-[60%] flex flex-col gap-12 lg:gap-24 relative z-0">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="w-full aspect-[4/3] xl:aspect-[16/9] relative rounded-[20px] md:rounded-[40px] overflow-hidden bg-[#111]"
        >
          <img 
            src="https://img.nickiresume.cn/Nimage/02iyunbao/VIold.webp" 
            alt="Brand Visual Upgrade Legacy" 
            className="w-full h-full object-cover opacity-70"
            onError={(e) => {
               (e.target as HTMLImageElement).src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 9' fill='%23111'%3E%3Crect width='16' height='9'/%3E%3C/svg%3E";
            }}
          />
          
          
          {/* Legacy VI Tag */}
          <div className="absolute top-6 right-6 md:top-8 md:right-8 bg-black/60 backdrop-blur-md border border-white/10 px-5 py-2 rounded-full z-20 flex items-center justify-center">
            <span className="text-white/80 text-[14px] md:text-[15px] tracking-widest font-bold uppercase">
              {isEn ? 'Legacy VI' : '旧版 VI'}
            </span>
          </div>
        </motion.div>

        {/* New Image block */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="w-full relative rounded-[20px] md:rounded-[40px] overflow-hidden bg-[#111]"
        >
          <img 
            src="https://img.nickiresume.cn/Nimage/02iyunbao/VInew1.webp" 
            alt="Brand Visual Upgrade New" 
            className="w-full h-auto object-cover"
            onError={(e) => {
               (e.target as HTMLImageElement).src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 9' fill='%23111'%3E%3Crect width='16' height='9'/%3E%3C/svg%3E";
            }}
          />
          
          
          {/* New VI Tag */}
          <div className="absolute top-6 right-6 md:top-8 md:right-8 bg-[#4DB0FF]/80 backdrop-blur-md border border-[#4DB0FF] px-5 py-2 rounded-full z-20 flex items-center justify-center">
            <span className="text-white text-[14px] md:text-[15px] tracking-widest font-bold uppercase">
              {isEn ? 'New VI System' : '全新 VI'}
            </span>
          </div>
        </motion.div>
      </div>
      
    </section>
  );
};
