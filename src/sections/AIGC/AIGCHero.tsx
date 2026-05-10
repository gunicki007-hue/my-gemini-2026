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
        <h1
          className={`uppercase w-full ${isEn ? 'text-[clamp(26px,5vw,66px)] font-bold font-sans tracking-tighter leading-[1.05]' : 'text-[clamp(26px,5vw,72px)] font-bold font-puhuiti tracking-tighter leading-[1.1] [-webkit-text-stroke:1px_currentColor]'}`}
        >
          {isEn ? (
            <>
              RESHAPING BOUNDARIES<br />
              FROM EXECUTOR TO AI ARCHITECT
            </>
          ) : (
            <>重塑边界<br />从执行者到智能架构师</>
          )}
        </h1>

        <p className={`mt-8 md:mt-12 w-full text-white/70 ${isEn ? 'font-sans font-light tracking-[0.015em] leading-[1.5] text-[16px] xl:text-[16px]' : 'font-sans font-light tracking-[0.03em] leading-[1.6] text-[16px] xl:text-[16px] text-justify'}`}>
          {isEn
            ? <>In the wave of AIGC, the core value of design is shifting from "moving pixels" to "orchestrating logic". I focus not only on the visual explosive power brought by AI, but also on exploring the AI-Native interaction paradigm.<br />This collection records how I reconstruct complex business using AI workflows, establish brand DNA fingerprints, and hand over tedious repetitive work to "digital twin assistants", thereby freeing up more energy for business decisions and data penetration.</>
            : <>在 AIGC 浪潮中，设计的核心价值正在从“像素的搬运”转向“逻辑的编排”。我不只关注 AI 带来的视觉爆发力，更致力于探索 AI Native（AI 原生） 的交互范式。<br />本专题记录了我如何通过 AI 工作流重构复杂业务、建立品牌 DNA 指纹，并将繁琐的复用性劳动交给“数字孪生助手”，从而释放更多精力用于商业决策与数据穿透。</>}
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
