import React from 'react';
import { motion } from 'motion/react';
import { useDictionary } from '../../hooks/useDictionary';

export const Web3PortalUI = () => {
  const { language } = useDictionary();
  const isEn = language === 'en';

  return (
    <section className="relative w-full min-h-screen flex flex-col items-center justify-start py-24 md:py-32 overflow-hidden bg-[#050505]">
      
      {/* 居中标题区域 / Centered Headers */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="flex flex-col items-center z-10 relative mb-12 md:mb-20 px-6 w-full text-center"
      >
        {/* 顶部标签 / Top Tag */}
        <div className="flex items-center justify-center gap-4 mb-6">
          <div className="w-16 h-[1px] bg-white/30" />
          <h4 className="text-white/70 tracking-tighter text-[16px] md:text-[16px] uppercase font-sans font-bold">
            {isEn ? '03 / DIGITAL PORTAL' : '03 / 数字门户'}
          </h4>
          <div className="w-16 h-[1px] bg-white/30" />
        </div>

        {/* 主标题 / Main Title */}
        {/* == 🚨 标题文字替换处 / REPLACE TITLE HERE 🚨 == */}
        <h2
          className={`uppercase w-full ${isEn ? 'text-[clamp(26px,5vw,66px)] font-extrabold font-sans tracking-tighter leading-[1.05]' : 'text-[clamp(26px,5vw,72px)] font-bold font-puhuiti tracking-tighter leading-[1.1] [-webkit-text-stroke:2px_currentColor]'}`}
        >
          {isEn ? (
            <>
              Global <br />
              Digital Portal
            </>
          ) : (
            <>全局数字门户</>
          )}
        </h2>

        {/* 副标题叙事 / Narrative Description */}
        <p className={`mt-8 md:mt-12 mx-auto w-full max-w-[650px] text-white/70 ${isEn ? 'font-sans font-light tracking-[0.015em] leading-[1.5] text-[16px] xl:text-[16px]' : 'font-sans font-light tracking-[0.03em] leading-[1.6] text-[16px] xl:text-[16px] text-center'}`}>
          {isEn 
            ? "Breaking through information barriers with minimalist Web3 interactions. Ensuring efficient hierarchical flow to build unshakable trust in asset management for crypto users."
            : "以极简 Web3 交互打透信息壁垒。确保层级高效流转，为加密用户构筑不可动摇的资产管理信任感。"}
        </p>
      </motion.div>

      {/* 16:9 展示图区域 / 16:9 Image Area */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        className="w-full px-6 md:px-[60px] lg:px-[80px] relative z-10 flex flex-col items-center justify-center"
      >
        {/* 16:9 比例锁定容器 / 16:9 Ratio Container */}
        <div className="w-full aspect-[16/9] relative z-20 rounded-[12px] sm:rounded-[24px] overflow-hidden bg-[#111] shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
          {/* == 🚨 占位图替换处 / REPLACE IMAGE SOURCE HERE 🚨 == */}
          <img
            src="https://img.nickiresume.cn/Nimage/01web3/05web.webp"
            className="absolute inset-0 w-full h-full object-cover"
            alt="03 UI Framework Representation"
          />
        </div>
      </motion.div>

    </section>
  );
};
