import React from 'react';
import { motion } from 'motion/react';
import { useDictionary } from '../../hooks/useDictionary';

export const Web3PortalUI = () => {
  const { language } = useDictionary();
  const isEn = language === 'en';

  return (
    <section className="relative w-full min-h-screen flex flex-col items-center justify-start py-24 md:py-32 overflow-hidden bg-[#0a0a0a]">
      
      {/* 居中标题区域 / Centered Headers */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="flex flex-col items-center z-10 relative mb-12 md:mb-20 px-6 w-full text-center"
      >
        {/* 主标题 / Main Title */}
        <h2
          className={`uppercase w-full ${isEn ? 'text-[clamp(26px,5vw,66px)] font-extrabold font-sans tracking-tighter leading-[1.05]' : 'text-[clamp(26px,4vw,52px)] font-bold font-sans tracking-tighter leading-[1.2]'}`}
        >
          {isEn ? (
            <>
               global reach <br />
               Dual-Version Strategy
            </>
          ) : (
            <>全场景触达<br />用“双版本策略”兼容流量轰炸与商业转化</>
          )}
        </h2>

        {/* 小标题 */}
        <h3 className={`mt-6 text-white/90 ${isEn ? 'text-lg font-medium tracking-tight' : 'text-xl font-medium tracking-wide'}`}>
          {isEn ? "Solving the conversion bottleneck of 'Traffic in, but not retained' in the Web3 industry" : "解决 Web3 行业“流量进来留不住”的转化瓶颈"}
        </h3>

        {/* 副标题叙事 / Narrative Description */}
        <div className={`mt-8 md:mt-12 mx-auto w-full max-w-[820px] px-[20px] md:px-0 text-white/70 text-center ${isEn ? 'font-sans font-light tracking-[0.015em] leading-[1.6] text-[16px]' : 'font-sans font-light tracking-[0.03em] leading-[1.8] text-[16px]'}`}>
          {isEn ? (
             <div className="flex flex-col gap-4">
                <p>Targeting the contradictory nature of Web3 users who "pursue emotional consensus while caring about fund security," I adopted a dual-track parallel strategy of "Meme Marketing Version" and "Calm Product Version" for the PC end:</p>
                <p>Because a single financial page is too cold and hard to attract fans; a single Meme page is too scattered and lacks trust. We needed to solve how to let users feel the brand heat and see product strength the moment they enter the web page after high-frequency social media bombardment.</p>
                <p>Ultimately, we adopted the emotion of the marketing version, using highly explosive visual symbols (like golden Doge) to complete unique positioning and achieve brand ice-breaking; the business module strips away emotional interference, providing the ultimate "trust endorsement" for user deposit through calm typography and clear business dashboards. Achieving two different conversion goals within a single design system ensures Crydit's commercial soft landing in the global ecosystem.</p>
             </div>
          ) : (
             <div className="flex flex-col gap-4">
                <p>针对 Web3 用户群体“既追求情绪共识、又在乎资金安全”的矛盾属性，我采用了PC端 “Meme 营销版” 与 “冷静产品版” 的双轨并行策略：</p>
                <p>因为单一的金融页面太冷，难吸粉；单一的 Meme 页面太散，没信任。要解决的是如何在社交媒体的高频轰炸后，让用户在进入网页的一瞬间，既能感受到品牌热度，又能看到产品实力。</p>
                <p>最终采用了沿用营销版内的情绪，用极具张力的视觉符号（如金色的 Doge）完成独特定位，达成品牌破冰；业务模块则剥离情绪干扰，通过冷静的排版和清晰的业务看板，为用户入金提供最终的“信任背书”。实现在一套design system中两套不同的转化目标，确保了 Crydit 在全球生态中的商业软着陆。</p>
             </div>
          )}
        </div>
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
