import React from 'react';
import { motion } from 'motion/react';
import { useDictionary } from '../../hooks/useDictionary';

export const Web3VisualIdentity = () => {
  const { language } = useDictionary();
  const isEn = language === 'en';

  return (
    <section id="visual-identity" className="relative w-full min-h-screen flex flex-col items-center justify-start pt-32 pb-20 overflow-hidden bg-[#050505]">
      {/* Centered Headers */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="flex flex-col items-center z-10 relative mb-20"
      >
        {/* Tag matching Screen 1 */}
        <div className="flex items-center gap-4 mb-6">
          <div className="w-16 h-[1px] bg-white/30" />
          <h4 className="text-white/70 tracking-tighter text-[12px] md:text-[14px] uppercase font-sans font-bold">
            {isEn ? '01 / Visual Identity' : '01 / 视觉识别系统'}
          </h4>
          <div className="w-16 h-[1px] bg-white/30" />
        </div>

        {/* Large Centered Title */}
        <h2
          className={`text-center uppercase w-full ${isEn ? 'text-[clamp(26px,5vw,66px)] font-black font-sans tracking-tighter leading-[1.05]' : 'text-[clamp(26px,5vw,72px)] font-black font-puhuiti tracking-tighter leading-[1.1] [-webkit-text-stroke:2px_currentColor]'}`}
        >
          {isEn ? (
            <>
              EASILY ADAPT<br />
              TO ALL BRAND<br />
              TOUCH POINTS
            </>
          ) : (
            <>全触点适应性<br />品牌视觉架构</>
          )}
        </h2>
      </motion.div>

      {/* Central Grid / Image Placeholder Area */}
      <div className="w-full relative mt-10">
        {/* The Infinite Horizontal Line */}
        <div className="absolute top-1/2 left-0 w-full h-[1px] bg-white/20 -translate-y-1/2 z-0" />

        {/* Container for the central graphic and numbers */}
        <div className="max-w-[1400px] w-full mx-auto relative flex items-center justify-between px-6 md:px-[60px] lg:px-[80px]">
          
          {/* Left Numbers using Space Grotesk */}
          <div className="flex gap-10 md:gap-20 z-10 bg-[#050505] px-4 -ml-4">
            <span className="font-space-grotesk text-[14px] md:text-[18px] font-bold text-white tracking-widest uppercase">01</span>
            <span className="font-space-grotesk text-[14px] md:text-[18px] font-bold text-white tracking-widest uppercase">02</span>
          </div>

          {/* Central Focus Area: Structural Grey Box containing grid + video */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="w-[85%] sm:w-[75%] md:w-[900px] lg:w-[1100px] aspect-[4/3] sm:aspect-[16/9] relative z-10 flex flex-col items-center justify-center -translate-y-4"
          >
            {/* Background Architectural Grey Box with Grid */}
            <div 
              className="absolute inset-0 bg-[#0a0a0a] shadow-2xl z-0 overflow-hidden"
              style={{
                /* Subtle grid pattern on the grey block */
                backgroundImage: `
                  linear-gradient(to right, rgba(255,255,255,0.03) 1px, transparent 1px),
                  linear-gradient(to bottom, rgba(255,255,255,0.03) 1px, transparent 1px)
                `,
                backgroundSize: '40px 40px',
                backgroundPosition: 'center center'
              }}
            >
                {/* Subtle dividing structural lines inside the grey box */}
                <div className="absolute top-0 bottom-0 left-[33.33%] w-[1px] bg-white/[0.04]" />
                <div className="absolute top-0 bottom-0 right-[33.33%] w-[1px] bg-white/[0.04]" />
            </div>

            {/* Architectural Grid Lines extending completely through (Background) */}
            <div className="absolute -top-[100vh] -bottom-[100vh] left-0 w-[1px] bg-white/[0.04] z-0 pointer-events-none" />
            <div className="absolute -top-[100vh] -bottom-[100vh] right-0 w-[1px] bg-white/[0.04] z-0 pointer-events-none" />

            {/* Foreground Video centered inside the Grey Box */}
            <div className="w-[75%] md:w-[70%] aspect-[16/9] relative z-20 shadow-[0_20px_50px_rgba(0,0,0,0.8)]">
              {/* == 🚨 视频链接替换处 / REPLACE YOUR VIDEO LINK HERE 🚨 == */}
              <video
                src="https://img.nickiresume.cn/Nvideo/web-vimp4.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover"
                style={{ background: 'linear-gradient(135deg, #1c1c1c, #0a0a0a)' }}
              />
            </div>
          </motion.div>

          {/* Right Numbers using Space Grotesk */}
          <div className="flex gap-10 md:gap-20 z-10 bg-[#050505] px-4 -mr-4">
            <span className="font-space-grotesk text-[14px] md:text-[18px] font-bold text-white tracking-widest uppercase">03</span>
            <span className="font-space-grotesk text-[14px] md:text-[18px] font-bold text-white tracking-widest uppercase">04</span>
          </div>

        </div>
      </div>
    </section>
  );
};
