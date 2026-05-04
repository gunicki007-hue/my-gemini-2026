import React from 'react';
import { motion } from 'motion/react';
import { useDictionary } from '../../hooks/useDictionary';

export const AIGCSection01 = () => {
  const { language } = useDictionary();
  const isEn = language === 'en';

  return (
    <section className="relative w-full py-24 md:py-32 px-6 md:px-[80px] bg-[#050505] overflow-hidden flex flex-col">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="w-full"
      >
        <div className="flex items-center gap-4 mb-8 md:mb-12">
          <div className="w-16 h-[1px] bg-[#D5B667]/50" />
          <h4 className="text-[#D5B667] tracking-tighter text-[12px] md:text-[14px] uppercase font-sans font-bold">
            {isEn ? 'CASE 01 · DEPTH' : '案例 01 · 深度'}
          </h4>
        </div>

        <h2 className={`uppercase w-full ${isEn ? 'text-[clamp(26px,5vw,66px)] font-black font-sans tracking-tighter leading-[1.05]' : 'text-[clamp(26px,5vw,72px)] font-black font-puhuiti tracking-tighter leading-[1.1] [-webkit-text-stroke:2px_currentColor]'} mb-6`}>
          {isEn ? (
            <>LOGIC HUB &<br />ARCHITECTURE RECONSTRUCTION</>
          ) : (
            '逻辑中枢与架构重构'
          )}
        </h2>

        <div className="flex items-center gap-4 mb-24 md:mb-40">
          <div className="w-16 h-[1px] bg-white/30" />
          <span className={`text-white/70 text-[14px] md:text-[18px] italic font-normal ${isEn ? 'tracking-normal uppercase' : 'tracking-wide'}`}>
            {isEn ? 'A hybrid intelligent workflow expanding decision boundaries' : '扩展决策边界的混合智能工作流'}
          </span>
        </div>

        <h3 className={`w-full max-w-[1200px] mb-8 md:mb-12 ${isEn ? 'text-[26px] font-light tracking-wide leading-[48px] font-sans text-white/90' : 'text-[26px] font-extrabold tracking-tighter font-puhuiti leading-[48px]'}`}>
          {isEn ? (
            <>I am no longer confined to the stacking of pixels,<br className="hidden md:block"/>but rather designing a system where business logic precipitates visual form.</>
          ) : (
            <>我不再局限于像素的堆砌，<br/>而是在设计一套系统，让业务逻辑先于视觉成形。</>
          )}
        </h3>

        <p className={`w-full max-w-[900px] text-left ${isEn ? 'text-white/70 font-sans font-light tracking-[0.015em] leading-[1.5] text-[11px] xl:text-[13px]' : 'text-white/70 font-sans font-light tracking-[0.03em] leading-[1.6] text-[11px] xl:text-[13px] text-justify'}`}>
          {isEn ? (
            "While most teams still rely on manual labor for periodic market research and data organization, I have built a hybrid intelligent agent architecture. It is used to accelerate brand judgment, structure core assets, and establish a continuous information first-mover advantage, all while ensuring security and control."
          ) : (
            "当多数团队仍依赖人工进行周期性的市场调研与资料整理时，我构建了一套混合智能体架构，用于加速品牌判断、结构化核心资产，并在确保安全与控制权的前提下，建立持续的信息先发优势。"
          )}
        </p>

      </motion.div>
    </section>
  );
};
