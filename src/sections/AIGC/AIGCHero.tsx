import React from 'react';
import { motion } from 'motion/react';
import { useDictionary } from '../../hooks/useDictionary';

export const AIGCHero = () => {
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
          <h4 className="text-white/70 tracking-tighter text-[12px] md:text-[14px] uppercase font-sans font-bold">
            {isEn ? 'AI DRIVEN VISUAL OS' : 'AIGC 战略与全域制作'}
          </h4>
        </div>

        <h1
          className={`uppercase w-full ${isEn ? 'text-[clamp(26px,5vw,66px)] font-black font-sans tracking-tighter leading-[1.05]' : 'text-[clamp(26px,5vw,72px)] font-black font-puhuiti tracking-tighter leading-[1.1] [-webkit-text-stroke:2px_currentColor]'}`}
        >
          {isEn ? (
            <>
              SYSTEMIC<br />
              CREATIVE<br />
              ENGINE
            </>
          ) : (
            <>系统级<br />创意引擎</>
          )}
        </h1>

        <p className={`mt-8 md:mt-12 w-full text-white/70 ${isEn ? 'font-sans font-light tracking-[0.015em] leading-[1.5] text-[11px] xl:text-[13px]' : 'font-sans font-light tracking-[0.03em] leading-[1.6] text-[11px] xl:text-[13px] text-justify'}`}>
          {isEn
            ? <>The surreal visual tone on the right is merely the tip of the iceberg of the system's output.<br /> Beyond simple pixel generation, spanning from deep business logic deduction to the ultimate cross-over of aesthetics and production capacity, we are building a 100% deterministic digital creative operating system.</>
            : <>右侧的超现实视觉定调，只是系统输出的冰山一角。<br />跨越单纯的像素生成，从深层的业务逻辑推演，到极致的审美与产能跨界，构建 100% 确定性的数字创意操作系统。</>}
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
          src="https://img.nickiresume.cn/images/0418resume/04-4.webp"
          alt="AIGC Hero"
          className="w-full h-auto z-0 block"
        />
      </motion.div>

      {/* Subtle Parallax Background Glow */}
      <div className="absolute top-1/2 left-2/3 -translate-y-1/2 -translate-x-1/2 w-[80vw] h-[80vw] max-w-[800px] max-h-[800px] bg-purple-500/5 blur-[120px] rounded-full pointer-events-none mix-blend-screen animate-pulse" style={{ animationDuration: '8s' }} />
    </section>
  );
};
