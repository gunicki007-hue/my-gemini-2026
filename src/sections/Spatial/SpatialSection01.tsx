import React from 'react';
import { motion } from 'motion/react';
import { useDictionary } from '../../hooks/useDictionary';

export const SpatialSection01 = () => {
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
              <h4 className="text-[#A66B4E] tracking-[0.2em] text-[12px] md:text-[14px] uppercase font-sans font-bold whitespace-nowrap">
                {isEn ? 'CASE 01 · PHYSICAL LANDING · SPATIAL PROJECT' : 'CASE 01 · 物理着陆 · 空间全案'}
              </h4>
            </div>
            
            <h3 className="text-white text-[40px] md:text-[50px] xl:text-[56px] font-black leading-[1.1] mb-8 md:mb-10 tracking-tight font-sans uppercase">
              {isEn ? (
                <>FULL-CYCLE<br />HARDCORE DELIVERY</>
              ) : (
                <>全链路<br />硬核交付</>
              )}
            </h3>

            <div className="space-y-6">
              <p className={`text-white/90 font-medium ${isEn ? 'text-[16px] md:text-[18px] leading-[1.8]' : 'text-[16px] md:text-[18px] leading-[36px] tracking-wider'}`}>
                {isEn ? (
                  <>Stripped of screen protection, offline space is the ultimate defense line testing design orchestration. I treat every Campaign as a precision battle against physical variables.</>
                ) : (
                  <>脱离屏幕的庇护，线下空间是检验设计统筹力的最终防线，<br className="hidden xl:block" />我将每一次 Campaign 视为对抗物理变量的精准战役。</>
                )}
              </p>
              
              <div className={`pt-4 ${isEn ? 'text-white/60 text-[16px] md:text-[18px] leading-[1.8]' : 'text-white/60 text-[16px] md:text-[18px] leading-[32px] md:leading-[36px] tracking-widest text-justify'}`}>
                {isEn ? (
                  "From irregular mega-structures for 10,000 attendees to highly constrained international agile booths. Through strict supply chain scheduling and audio-visual control, we break the industry barrier of 'renders for reference only', ensuring 100% absolute landing of the brand visual strategy."
                ) : (
                  "从万人规模的异形空间巨构，到极度受限的国际敏捷展台。通过严苛的供应链调度与声光电管控，跨越“效果图仅供参考”的行业壁垒，确保品牌视觉战略实现 100% 的极值着陆。"
                )}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Right Column (Images) */}
        <div className="w-full lg:w-[60%] flex flex-col relative z-0 lg:pl-10">
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col gap-3 md:gap-4 lg:mt-[72px]"
          >
            {/* Title / Label from Image 1 */}
            <div className="flex flex-col gap-2 mb-2 lg:mb-4">
              <span className="text-[#A66B4E] tracking-[0.2em] text-[12px] font-sans font-bold uppercase flex items-center gap-2">
                <span className="font-mono slashed-zero text-[14px]">01</span>
                {isEn ? '/ VISUAL STRATEGY DEDUCTION · ESTABLISHING CAMPAIGN CORE VISUAL BASE' : '/ 视觉策略推演 · 确立CAMPAIGN 核心视觉基座'}
              </span>
              <p className="text-white/80 text-[14px] md:text-[15px] font-normal tracking-wide">
                {isEn ? 'With minimalist color tension and super symbols, we complete the visual tone-setting of the brand strategy from digital assets to large-scale launch event screens.' : '以极简的色彩张力与超级符号，完成品牌战略从数字资产到大型发布会屏幕的视觉定调。'}
              </p>
            </div>

            {/* Top Large Image (approx 16:9) */}
            <div className="w-full aspect-[16/9] rounded-[16px] md:rounded-[24px] overflow-hidden relative bg-[#111] border border-white/[0.03] flex items-center justify-center group shadow-[0_20px_60px_rgba(0,0,0,0.5)]">
              <img 
                src="https://img.nickiresume.cn/Nimage/04Event/01web3.webp" 
                alt="Visual Strategy Deduction" 
                className="w-full h-full object-cover brightness-[.85]"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-[#A66B4E]/10 to-transparent pointer-events-none"></div>
              <div className="absolute inset-x-0 bottom-0 p-5 md:p-8 bg-gradient-to-t from-black via-black/60 to-transparent z-10">
                <p className="text-white/60 text-[13px] md:text-[15px] font-sans tracking-wider">
                  {isEn ? 'Crydit Strategy Launch / Core Visual Setup' : 'Crydit 战略发布 / 核心视觉定调'}
                </p>
              </div>
            </div>
            
            {/* Title / Label from Image 2 */}
            <div className="flex flex-col gap-2 mt-8 md:mt-12 mb-2 lg:mb-4">
              <span className="text-[#A66B4E] tracking-[0.2em] text-[12px] font-sans font-bold uppercase flex items-center gap-2">
                <span className="font-mono slashed-zero text-[14px]">02</span>
                {isEn ? '/ FULL-DOMAIN LANDING · MACRO COORDINATION & AGILE DEPLOYMENT' : '/ 全域落地 · 巨构统筹与敏捷部署'}
              </span>
              <p className="text-white/80 text-[14px] md:text-[15px] font-normal tracking-wide leading-relaxed">
                {isEn ? 'Transcending spatial scale barriers. From complex irregular structures and AV restoration for massive ceremonies to modular rapid deployment for international summits, overcoming physical constraints to achieve high-precision delivery across all scenarios.' : '跨越空间尺度的壁垒。从万人盛典的复杂异形结构与声光电还原，到国际行业峰会的模块化极速布展，无视物理制约，实现全场景的高精度交付。'}
              </p>
            </div>

            {/* Bottom Two Images */}
            <div className="flex flex-row gap-3 md:gap-4 w-full h-[180px] sm:h-[220px] lg:h-[260px] xl:h-[300px]">
               {/* Bottom Left Image */}
               <div className="flex-[1.8] xl:flex-[2.2] h-full rounded-[16px] md:rounded-[24px] overflow-hidden relative bg-[#111] border border-white/[0.03] flex items-center justify-center group shadow-[0_20px_60px_rgba(0,0,0,0.5)]">
                 <img 
                   src="https://img.nickiresume.cn/Nimage/04Event/02insurance.webp" 
                   alt="Event visual 2" 
                   className="w-full h-full object-cover brightness-[.85]"
                 />
                 <div className="absolute inset-0 bg-gradient-to-tr from-[#A66B4E]/10 to-transparent pointer-events-none"></div>
                 <div className="absolute inset-x-0 bottom-0 p-4 md:p-6 bg-gradient-to-t from-black via-black/60 to-transparent z-10">
                   <p className="text-white/60 text-[12px] md:text-[14px] font-sans tracking-wider">
                     {isEn ? '10th Anniversary / Massive Spatial & Structural Restoration' : '十周年盛典 / 超大体量空间与结构还原'}
                   </p>
                 </div>
               </div>
               {/* Bottom Right Image */}
               <div className="flex-1 h-full rounded-[16px] md:rounded-[24px] overflow-hidden relative bg-[#111] border border-white/[0.03] flex items-center justify-center group shadow-[0_20px_60px_rgba(0,0,0,0.5)]">
                 <img 
                   src="https://img.nickiresume.cn/Nimage/04Event/03token.webp" 
                   alt="Event visual 3" 
                   className="w-full h-full object-cover brightness-[.85]"
                 />
                 <div className="absolute inset-0 bg-gradient-to-bl from-[#A66B4E]/10 to-transparent pointer-events-none"></div>
                 <div className="absolute inset-x-0 bottom-0 p-4 md:p-6 bg-gradient-to-t from-black via-black/60 to-transparent z-10">
                   <p className="text-white/60 text-[12px] md:text-[14px] font-sans tracking-wider">
                     {isEn ? 'Token 2049 / Agile Deployment' : 'Token 2049 / 受限空间敏捷部署'}
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
