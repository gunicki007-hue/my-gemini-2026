import React from 'react';
import { motion } from 'motion/react';
import { useDictionary } from '../../hooks/useDictionary';

export const Web3CommunityIP = () => {
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
          <h4 className="text-white/60 tracking-[0.2em] text-[12px] md:text-[14px] uppercase font-sans font-bold">
            {isEn ? '05 / COMMUNITY & IP' : '05 / 社区生态与 IP'}
          </h4>
          <div className="w-16 h-[1px] bg-white/30" />
        </div>

        {/* 主标题 / Main Title */}
        {/* == 🚨 标题文字替换处 / REPLACE TITLE HERE 🚨 == */}
        <h2
          className={`uppercase leading-none tracking-tighter w-full max-w-[1200px] ${isEn ? 'text-[50px] sm:text-[70px] md:text-[90px] xl:text-[100px] font-black font-sans' : 'text-[40px] sm:text-[60px] md:text-[80px] xl:text-[90px] font-extrabold font-["PingFang_SC","Microsoft_YaHei"]'}`}
        >
          {isEn ? (
            <>
              IP-Driven <br />
              <span className="text-transparent" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.4)' }}>Consensus</span>
            </>
          ) : (
            <>IP 驱动<br />社区共识</>
          )}
        </h2>

        {/* 副标题叙事 / Narrative Description */}
        <p className={`mt-8 md:mt-12 mx-auto w-full max-w-[650px] text-white/50 ${isEn ? 'text-[15px] xl:text-[17px] tracking-normal leading-[1.8]' : 'text-[15px] xl:text-[17px] tracking-widest leading-[2]'}`}>
          {isEn 
            ? "Rejecting fintech elitism. Weaponizing Meme culture and approachable visuals to transform community sentiment into hard operational assets."
            : "拒绝金融高冷。用 Twitter 与 Meme 文化打透用户心智，以直白亲和的视觉重构沟通语境，将社区情绪精准沉淀为运营资产。"}
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
            src="https://img.nickiresume.cn/Nimage/01web3/07-twitter.webp"
            className="absolute inset-0 w-full h-full object-cover"
            alt="Community & IP Representation"
          />
        </div>
      </motion.div>

    </section>
  );
};
