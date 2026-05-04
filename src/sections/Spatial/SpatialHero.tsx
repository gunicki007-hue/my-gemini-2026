import React from 'react';
import { motion } from 'motion/react';
import { useDictionary } from '../../hooks/useDictionary';

export const SpatialHero = () => {
  const { language } = useDictionary();
  const isEn = language === 'en';

  return (
    <section className="relative w-full min-h-[70vh] flex flex-col lg:flex-row items-center justify-between pl-6 pr-0 md:pl-[60px] md:pr-0 lg:pl-[80px] lg:pr-0 pb-20 gap-12 lg:gap-16 overflow-hidden">
      {/* Left Text Content - taking roughly 35% of space */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="flex flex-col z-10 relative w-full lg:w-[35%] xl:w-[35%] shrink-0 lg:pr-0 pr-6"
      >
        <div className="flex items-center gap-4 mb-8">
          <div className="w-16 h-[1px] bg-white/30" />
          <h4 className="text-white/70 tracking-tighter text-[16px] md:text-[16px] uppercase font-sans font-bold">
            {isEn ? 'BRAND SPACE & EXPERIENCE DESIGN' : '品牌空间与体验设计'}
          </h4>
        </div>

        <h1
          className={`uppercase w-full ${isEn ? 'text-[clamp(26px,5vw,66px)] font-extrabold font-sans tracking-tighter leading-[1.05]' : 'text-[clamp(26px,5vw,72px)] font-extrabold font-puhuiti tracking-tighter leading-[1.1] [-webkit-text-stroke:2px_currentColor]'}`}
        >
          {isEn ? (
            <>
              DELIVERING<br />
              SPACE &
              RESONANCE
            </>
          ) : (
            <>交付<br />空间与共鸣</>
          )}
        </h1>

        <p className={`mt-8 md:mt-12 w-full text-white/70 ${isEn ? 'font-sans font-light tracking-[0.015em] leading-[1.5] text-[16px] xl:text-[16px]' : 'font-sans font-light tracking-[0.03em] leading-[1.6] text-[16px] xl:text-[16px] text-justify'}`}>
          {isEn
            ? <>An outstanding offline experience is not just the physical realization of spatial design, but the three-dimensional extension of brand values.<br /><br />From the rigorous execution control of massive ceremonies to cross-border philanthropic insights, I deeply coordinate the entire delivery chain. This ensures that the design achieves a 100% hardcore landing amidst complex materials and AV effects, while dedicating to building profound humanistic warmth for the brand through authentic emotional resonance.</>
            : <>优秀的线下体验，不仅是空间设计的物理还原，更是品牌价值观的三维延伸。<br /><br />从万级盛典的严苛落地把控，到跨越国界的公益人文洞察。我深度统筹全案交付链路，不仅确保设计在声光电与复杂材质中实现 100% 的硬核着陆，更致力于用真实的情绪共鸣，为品牌构建具有厚度的人文温度。</>}
        </p>
      </motion.div>

      {/* Right Image/Video Container - Flush to Right Edge */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        className="w-full lg:flex-1 relative z-10 rounded-l-[8px] md:rounded-l-[12px] rounded-r-none overflow-hidden bg-[#0a0a0a] shadow-[0_30px_80px_rgba(0,0,0,0.8)] flex items-center justify-center group"
      >
        <img
          src="https://img.nickiresume.cn/images/0418resume/05-1.webp"
          alt="Spatial Hero"
          className="w-full h-auto z-0 block"
        />
      </motion.div>

      {/* Subtle Parallax Background Glow */}
      <div className="absolute top-1/2 left-2/3 -translate-y-1/2 -translate-x-1/2 w-[80vw] h-[80vw] max-w-[800px] max-h-[800px] bg-[#A66B4E]/5 blur-[120px] rounded-full pointer-events-none mix-blend-screen animate-pulse" style={{ animationDuration: '8s' }} />
    </section>
  );
};
