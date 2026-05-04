import React from 'react';
import { motion } from 'motion/react';
import { useDictionary } from '../../hooks/useDictionary';

export const Web3Hero = () => {
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
          <h4 className="text-white/50 tracking-tighter text-[14px] md:text-[16px] uppercase font-sans font-bold">
            {isEn ? 'Web3 Financial Ecosystem' : 'Web3 金融生态'}
          </h4>
        </div>

        <h1
          className={`uppercase w-full ${isEn ? 'text-[clamp(28px,5vw,68px)] font-black font-sans tracking-tighter leading-[1.05]' : 'text-[clamp(28px,5vw,74px)] font-black font-puhuiti tracking-tighter leading-[1.1] [-webkit-text-stroke:2px_currentColor]'}`}
        >
          {isEn ? (
            <>
              REDEFINING<br />
              DIGITAL<br />
              TRUST
            </>
          ) : (
            <>重塑时代<br />数字金融</>
          )}
        </h1>

        <p className={`mt-8 md:mt-12 w-full text-white/50 ${isEn ? 'font-sans font-light tracking-[0.015em] leading-[1.7] text-[15px] xl:text-[17px]' : 'font-sans font-light tracking-[0.03em] leading-[1.8] text-[15px] xl:text-[17px] text-justify'}`}>
          {isEn
            ? "I led Crydit’s 0-to-1 launch across strategy, visual DNA, and product architecture. By applying hardcore visual noise reduction to strip away Web3 barriers, I engineered a premium, high-trust crypto management experience."
            : "我全链路操盘了 Crydit 从 0-1 的战略推演、视觉基因、产品架构及全球公关叙事。用硬核的视觉降噪剥离行业壁垒，为全球用户重构兼具“信任底座”与“高级感”的加密资管体验。"}
        </p>
      </motion.div>

      {/* Right Video Container - Flush to Right Edge */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        className="w-full lg:flex-1 relative z-10 rounded-l-[8px] md:rounded-l-[12px] rounded-r-none overflow-hidden bg-[#0a0a0a] shadow-[0_30px_80px_rgba(0,0,0,0.8)] flex items-center justify-center group"
      >
        <video
          src="https://img.nickiresume.cn/videos/01-case1%20banner.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-auto z-0 block"
        />
      </motion.div>

      {/* Subtle Parallax Background Glow for Web3 Atmosphere */}
      <div className="absolute top-1/2 left-2/3 -translate-y-1/2 -translate-x-1/2 w-[80vw] h-[80vw] max-w-[800px] max-h-[800px] bg-emerald-500/5 blur-[120px] rounded-full pointer-events-none mix-blend-screen animate-pulse" style={{ animationDuration: '8s' }} />
    </section>
  );
};
