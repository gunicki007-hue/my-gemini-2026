import React from 'react';
import { motion } from 'motion/react';
import { useDictionary } from '../../hooks/useDictionary';

export const Web3VisualIdentity = () => {
  const { language } = useDictionary();
  const isEn = language === 'en';

  return (
    <section id="visual-identity" className="relative w-full flex flex-col items-center justify-start pt-32 pb-20 overflow-hidden bg-[#0a0a0a]">
      {/* Centered Headers */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="flex flex-col items-center text-center z-10 relative mb-16 px-6 max-w-5xl mx-auto w-full"
      >
        {/* Large Centered Title */}
        <h2
          className={`uppercase w-full ${isEn ? 'text-[clamp(26px,5vw,56px)] font-semibold font-sans tracking-tighter leading-[1.05]' : 'text-[clamp(26px,5vw,64px)] font-semibold font-puhuiti tracking-tighter leading-[1.1] [-webkit-text-stroke:1px_currentColor]'}`}
        >
          {isEn ? (
            <>
              Challenge & Pipeline<br />
              Stripping the Underlying Logic, Seeing the Trust Crisis
            </>
          ) : (
            <>挑战与链路<br />剥离底层逻辑，看见信任危机</>
          )}
        </h2>

        {/* Subtitle */}
        <h3 className={`mt-10 w-full text-white font-bold ${isEn ? 'text-[16px] xl:text-[18px] tracking-tight uppercase' : 'text-[16px] xl:text-[18px] tracking-widest'}`}>
          {isEn 
            ? 'Deconstructing the full circulation from Web3 to Traditional Finance'
            : '解构从 Web3 到传统金融的流转全链路'}
        </h3>

        {/* Description */}
        <div className={`mt-6 flex flex-col gap-4 w-full max-w-4xl px-[20px] md:px-[20px] text-white/70 text-center ${isEn ? 'font-sans font-light tracking-[0.015em] leading-[1.6] text-[16px] xl:text-[16px]' : 'font-sans font-light tracking-[0.03em] leading-[1.7] text-[16px] xl:text-[16px]'}`}>
          {isEn ? (
            <>
              <p>Targeting the core business flow of Crypto-to-Fiat, I first intervened in the complex architectural deduction from asset custody to Visa settlement. By deconstructing this process, I extracted <span className="font-bold text-white">two fatal pain points</span> affecting business growth:</p>
              <p>
                <span className="font-bold text-white">Trust Fault Line:</span> The inherent "insecurity" of the Web3 industry leads to extremely high barriers to user entry.<br/>
                <span className="font-bold text-white">Interaction Maze:</span> The extreme cognitive burden and high churn rate caused by multi-node chains (KYC, Authorization, Hash).
              </p>
            </>
          ) : (
            <>
              <p>针对 U 转法币的核心业务流，我首先介入了从资产托管到 Visa 清算的庞杂架构推演。通过解构这套流程，我提炼出影响商业增长的<span className="font-bold text-white">两大致命痛点</span>：</p>
              <p>
                <span className="font-bold text-white">信任断层：</span> Web3 行业自带的“不安全感”导致用户准入门槛极高。<br/>
                <span className="font-bold text-white">交互迷宫：</span> 多节点链路（KYC、授权、哈希）导致的极度认知负担与高流失率。
              </p>
            </>
          )}
        </div>
      </motion.div>

      {/* 16:9 Image Area with 160px horizontal padding on desktop */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1.2, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        className="w-full px-6 md:px-[60px] xl:px-[160px] mx-auto z-10"
      >
        <div className="w-[90%] aspect-video relative overflow-hidden mx-auto">
          {/* == 🚨 图片链接替换处 / REPLACE YOUR IMAGE LINK HERE 🚨 == */}
          <img
            src="https://img.nickiresume.cn/0507/flow.webp"
            alt="Web3 to Traditional Finance Pipeline"
            className="w-full h-full object-contain scale-[0.85]"
          />
          {/* Overlay gradient for aesthetics */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/40 to-transparent pointer-events-none" />
        </div>
      </motion.div>
    </section>
  );
};
