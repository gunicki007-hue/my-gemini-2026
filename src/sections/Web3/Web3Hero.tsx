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
        className="flex flex-col z-10 relative w-full lg:w-[40%] xl:w-[40%] shrink-0 lg:pr-0 pr-6"
      >
        <h1
          className={`uppercase w-full ${isEn ? 'text-[clamp(26px,5vw,56px)] font-bold font-sans tracking-tighter leading-[1.05]' : 'text-[clamp(26px,5vw,64px)] font-bold font-puhuiti tracking-tighter leading-[1.1] [-webkit-text-stroke:1px_currentColor]'}`}
        >
          {isEn ? (
            <>
              Crydit<br />
              Redefining Web3<br />
              Global Payment Trust
            </>
          ) : (
            <>Crydit<br />重构 Web3 全球支付的信任底座</>
          )}
        </h1>

        <h3 className={`mt-8 w-full text-white font-bold ${isEn ? 'text-[16px] xl:text-[18px] tracking-tight uppercase' : 'text-[16px] xl:text-[18px] tracking-widest'}`}>
          {isEn 
            ? '0-to-1 Crypto-to-Fiat Ecosystem Architecture & Brand Visual Strategy'
            : '0-1 U转法币生态架构与品牌视觉全案'}
        </h3>

        <p className={`mt-4 w-full text-white/70 text-left md:text-justify ${isEn ? 'font-sans font-light tracking-[0.015em] leading-[1.6] text-[16px] xl:text-[16px]' : 'font-sans font-light tracking-[0.03em] leading-[1.7] text-[16px] xl:text-[16px]'}`}>
          {isEn ? (
            <>
              Addressing the extremely high business barriers of cross-border crypto asset payments (Crypto-to-Fiat), I led the full-stack design remodeling. By using <span className="font-bold text-white">"Visual Ice-Breaking" to dissolve trust anxiety</span> and <span className="font-bold text-white">"UX Noise Reduction" to eliminate interaction barriers</span>, I transformed complex on-chain settlements into an intuitive payment experience.
            </>
          ) : (
            <>
              针对跨国加密资产支付（U转法币）极高的业务壁垒，我主导了全链路的设计重塑。通过<span className="font-bold text-white">“视觉破冰”解决信任焦虑</span>，利用<span className="font-bold text-white">“UX降噪”消解交互门槛</span>，将复杂的链上清算转化为直觉化的支付体验。
            </>
          )}
        </p>
      </motion.div>

      {/* Right Video Container - Flush to Right Edge */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        className="w-full lg:flex-1 relative z-10 rounded-l-[16px] sm:rounded-l-[24px] rounded-r-none overflow-hidden bg-[#0a0a0a] shadow-[0_30px_80px_rgba(0,0,0,0.8)] flex items-center justify-center group"
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
