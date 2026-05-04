import React from 'react';
import { motion } from 'motion/react';
import { useDictionary } from '../../hooks/useDictionary';

export const Web3UIUXDesign = () => {
  const { language } = useDictionary();
  const isEn = language === 'en';

  return (
    <section className="relative w-full min-h-[90vh] flex flex-col lg:flex-row items-center justify-between pl-6 pr-0 md:pl-[60px] md:pr-0 lg:pl-[80px] lg:pr-0 py-16 xl:py-24 gap-12 lg:gap-[80px] overflow-hidden bg-[#0a0a0a]">
      
      {/* Left Text Content */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="flex flex-col z-10 relative w-full lg:w-[35%] xl:w-[35%] shrink-0 pr-6 lg:pr-0"
      >
        <div className="flex items-center gap-4 mb-8">
          <div className="w-16 h-[1px] bg-white/30" />
          <h4 className="text-white/50 tracking-tighter text-[14px] md:text-[16px] uppercase font-sans font-bold">
            {isEn ? '04 / UI/UX DESIGN' : '04 / UI/UX 设计'}
          </h4>
        </div>

        <h2
          className={`uppercase w-full ${isEn ? 'text-[clamp(28px,5vw,68px)] font-black font-sans tracking-tighter leading-[1.05]' : 'text-[clamp(28px,5vw,74px)] font-black font-puhuiti tracking-tighter leading-[1.1] [-webkit-text-stroke:2px_currentColor]'}`}
        >
          {isEn ? (
            <>
              Core Mobile<br />
              UI/UX
            </>
          ) : (
            <>移动端核心 <br />UI/UX</>
          )}
        </h2>

        <p className={`mt-8 md:mt-12 w-full text-white/50 ${isEn ? 'font-sans font-light tracking-[0.015em] leading-[1.7] text-[15px] xl:text-[17px]' : 'font-sans font-light tracking-[0.03em] leading-[1.8] text-[15px] xl:text-[17px] text-justify'}`}>
          {isEn
            ? "Nailing decentralized asset experiences. Using interface noise reduction to deliver seamless user flows while satisfying strict compliance and business logic."
            : "打造去中心化资管体验。在兼顾严苛合规与业务逻辑的前提下，通过界面级降噪，兑现极致流畅的交互流转。"}
        </p>
      </motion.div>

      {/* Right Image Container - Flush to Right Edge */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        className="w-full lg:flex-1 relative z-10 rounded-l-[12px] sm:rounded-l-[24px] rounded-r-none overflow-hidden bg-transparent shadow-[0_20px_50px_rgba(0,0,0,0.5)] aspect-[16/9]"
      >
        <img
          src="https://img.nickiresume.cn/Nimage/01web3/06-UI3.webp" /* You can replace this later */
          className="absolute inset-0 w-full h-full object-cover"
          alt="UI/UX Design Showcase"
        />
      </motion.div>

    </section>
  );
};
