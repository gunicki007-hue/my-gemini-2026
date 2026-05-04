import React from 'react';
import { motion } from 'motion/react';
import { useDictionary } from '../../hooks/useDictionary';

export const SpatialSection03 = () => {
  const { language } = useDictionary();
  const isEn = language === 'en';

  return (
    <section className="relative w-full py-24 md:py-32 px-6 lg:px-[80px] bg-[#050505] overflow-visible border-t border-white/[0.02]">
      <div className="w-full flex flex-col lg:flex-row justify-between items-start mx-auto gap-12 lg:gap-0">
        
        {/* Left Column (Sticky Text) */}
        <div className="w-full lg:w-[35%] lg:sticky lg:top-[12vh] flex flex-col z-10 lg:pr-8 xl:pr-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex items-center gap-4 mb-8 md:mb-12">
              <div className="w-16 h-[1px] bg-[#A66B4E]/50" />
              <h4 className="text-[#A66B4E] tracking-[0.2em] text-[12px] md:text-[14px] uppercase font-sans font-bold">
                {isEn ? 'PHASE 03 · BRAND RESONANCE' : 'PHASE 03 · 认同与共鸣'}
              </h4>
            </div>
            
            <h3 className="text-white text-[32px] md:text-[40px] xl:text-[48px] font-black leading-[1.1] mb-6 tracking-tight font-sans uppercase">
              {isEn ? (
                <>HUMANISTIC<br />NARRATIVE</>
              ) : (
                <>人文叙事 <br />建立具有厚度的品牌内核</>
              )}
            </h3>

            <div className={`space-y-6 ${isEn ? 'text-white/60 text-[16px] md:text-[18px] font-sans font-light tracking-wide leading-[1.8]' : 'text-white/60 text-[16px] md:text-[18px] text-justify tracking-widest leading-[36px]'}`}>
              <p className="text-white/80 font-medium">
                {isEn ? (
                  <>Beyond spatial planning and physical execution lies the ultimate goal: emotional connection.<br />I ensure every spatial project reflects genuine humanistic warmth.</>
                ) : (
                  <>跨越了统筹规划与物理执行，空间体验的终极使命是情感连接。<br />我致力于让每一个空间项目都折射出真实的、属于品牌的人文温度。</>
                )}
              </p>
              
              <p className="leading-[30px] md:leading-[36px]">
                {isEn ? (
                  "Whether through philanthropic insights or cultural integration, weaving a coherent narrative transforms a mere physical location into a living brand sanctuary."
                ) : (
                  "无论是公益人文本质的洞察，还是在地文化的融合，将连贯的生命力叙事注入空间，才能将其从单纯的物理场所，升华为鲜活的品牌阵地。"
                )}
              </p>
            </div>
          </motion.div>
        </div>

        {/* Right Column (Images) */}
        <div className="w-full lg:w-[60%] flex flex-col gap-16 md:gap-32 relative z-0 lg:pl-10">
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col gap-3 md:gap-4 lg:mt-[72px]"
          >
            <div className="flex flex-col gap-2 mb-2 lg:mb-4">
              <span className="text-[#A66B4E] tracking-[0.2em] text-[12px] font-sans font-bold uppercase flex items-center gap-2">
                <span className="font-mono slashed-zero text-[14px]">01</span>
                {isEn ? '/ CULTURAL INTEGRATION & INSIGHT' : '/ 文化融合与情感洞察'}
              </span>
              <p className="text-white/80 text-[14px] md:text-[15px] font-normal tracking-wide">
                {isEn ? 'Weaving a coherent narrative transforms a physical location into a living brand sanctuary.' : '将连贯的生命力叙事注入空间，才能将其从单纯的物理场所，升华为鲜活的品牌阵地。'}
              </p>
            </div>
            
            {/* Top Large Video (16:9) */}
            <div className="w-full aspect-[16/9] rounded-[16px] md:rounded-[24px] overflow-hidden relative bg-[#111] border border-white/[0.03] flex items-center justify-center group shadow-[0_20px_60px_rgba(0,0,0,0.5)]">
               <video 
                 src="https://img.nickiresume.cn/Nimage/04Event/0504-03.mp4" 
                 autoPlay 
                 loop 
                 muted 
                 playsInline 
                 className="w-full h-full object-cover brightness-[.85]"
               />
               <div className="absolute inset-0 bg-gradient-to-br from-[#A66B4E]/10 to-transparent pointer-events-none"></div>
            </div>

            {/* Bottom Two Images (16:9) */}
            <div className="grid grid-cols-2 gap-3 md:gap-4">
               {/* Bottom Left Image */}
               <div className="w-full aspect-[16/9] rounded-[12px] md:rounded-[16px] overflow-hidden relative bg-[#111] border border-white/[0.03] flex items-center justify-center group shadow-[0_20px_60px_rgba(0,0,0,0.5)]">
                 <img 
                   src="https://img.nickiresume.cn/Nimage/04Event/3-02.webp" 
                   alt="Integration 1" 
                   className="w-full h-full object-cover brightness-[.85]"
                 />
                 <div className="absolute inset-0 bg-gradient-to-tr from-[#A66B4E]/10 to-transparent pointer-events-none"></div>
                 <div className="absolute inset-x-0 bottom-0 p-4 md:p-6 bg-gradient-to-t from-black via-black/60 to-transparent z-10">
                   <p className="text-white/60 text-[12px] md:text-[14px] font-sans tracking-wider">
                     {isEn ? 'Crydit · Kenya · Voyage Charity Event' : 'Crydit ·肯尼亚 · 启航公益活动'}
                   </p>
                 </div>
               </div>
               {/* Bottom Right Image */}
               <div className="w-full aspect-[16/9] rounded-[12px] md:rounded-[16px] overflow-hidden relative bg-[#111] border border-white/[0.03] flex items-center justify-center group shadow-[0_20px_60px_rgba(0,0,0,0.5)]">
                 <img 
                   src="https://img.nickiresume.cn/Nimage/04Event/3-03.webp" 
                   alt="Integration 2" 
                   className="w-full h-full object-cover brightness-[.85]"
                 />
                 <div className="absolute inset-0 bg-gradient-to-bl from-[#A66B4E]/10 to-transparent pointer-events-none"></div>
                 <div className="absolute inset-x-0 bottom-0 p-4 md:p-6 bg-gradient-to-t from-black via-black/60 to-transparent z-10">
                   <p className="text-white/60 text-[12px] md:text-[14px] font-sans tracking-wider">
                     {isEn ? 'Crydit · Kenya · Voyage Charity Event' : 'Crydit ·肯尼亚 · 启航公益活动'}
                   </p>
                 </div>
               </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
