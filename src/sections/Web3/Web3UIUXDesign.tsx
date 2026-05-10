import React from 'react';
import { motion } from 'motion/react';
import { useDictionary } from '../../hooks/useDictionary';

export const Web3UIUXDesign = () => {
  const { language } = useDictionary();
  const isEn = language === 'en';

  return (
    <section className="relative w-full overflow-hidden bg-[#0a0a0a] flex flex-col">
      {/* Top Row: Text + Placeholder */}
      <div className="w-full min-h-[90vh] flex flex-col lg:flex-row items-center justify-between pl-6 pr-0 md:pl-[60px] md:pr-0 lg:pl-[80px] lg:pr-0 py-16 xl:py-24 gap-12 lg:gap-[80px]">
        {/* Left Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col z-10 relative w-full lg:w-[35%] xl:w-[35%] shrink-0 pr-6 lg:pr-0"
        >
          {/* Main Title */}
          <h2
            className={`uppercase w-full ${isEn ? 'text-[clamp(26px,5vw,66px)] font-extrabold font-sans tracking-tighter leading-[1.05]' : 'text-[clamp(26px,4vw,52px)] font-bold font-sans tracking-tighter leading-[1.2]'}`}
          >
            {isEn ? (
              <>
                Experience Architecture<br />
                Noise Reduction & 
                Payment Intuition
              </>
            ) : (
              <>体验架构<br />极致降噪与支付直觉</>
            )}
          </h2>

          {/* Small Title */}
          <h3 className={`mt-6 text-white/90 ${isEn ? 'text-lg font-medium tracking-tight' : 'text-xl font-medium tracking-wide'}`}>
            {isEn ? "As simple as Apple Pay, as secure as a private bank" : "像使用 Apple Pay 一样简单，像私行一样安全"}
          </h3>

          <div className={`mt-8 md:mt-12 w-full text-white/70 text-left ${isEn ? 'font-sans font-light tracking-[0.015em] leading-[1.6] text-[16px]' : 'font-sans font-light tracking-[0.03em] leading-[1.8] text-[16px]'}`}>
            {isEn ? (
               <div className="flex flex-col gap-4">
                  <p><strong className="text-white">Interaction Noise Reduction: Reshaping Novice Intuition</strong><br/>
                  I led the full-link reconstruction from registration, KYC to consumption, transforming the complex Web3 clearing path into a "one-click" payment experience. The goal is to let crypto payments completely bid farewell to high thresholds, achieving "zero-friction" conversion that anyone can easily get started with.</p>

                  <p><strong className="text-white">Sensory Security: Financial-Grade Professional Endorsement</strong><br/>
                  On the basis of ease of use, de-decorated typography and rigorous semantic components are adopted. Through visual "extreme restraint" to dispel operational anxiety, it provides users with the security hint of top private banks. At the same time, prompts are put forward to not only make it easy to use, but also let users feel the certainty that their assets are tightly protected in every transfer.</p>
               </div>
            ) : (
               <div className="flex flex-col gap-4">
                  <p><strong className="text-white">交互降噪：重塑小白直觉</strong><br/>
                  我主导了从注册、KYC 到消费的全链路重构，将复杂的 Web3 清算路径转化为“一键化”支付体验。目标是让加密支付彻底告别高门槛，实现谁来都能轻松上手的“零摩擦”转化。</p>

                  <p><strong className="text-white">感官安全：金融级专业背书</strong><br/>
                  在易用的基础上，采用去装饰化的排版与严谨的语义化组件。通过视觉上的“极度克制”消解操作焦虑，为用户提供顶级私行的安全暗示。同时增加提示前置，不仅要好用，更要让用户在每一次划转中感受到资产被严密保护的确定性。</p>
               </div>
            )}
          </div>
        </motion.div>

        {/* Right Image Container - Placeholder for now, flush to Right Edge */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="w-full lg:flex-1 relative z-10 rounded-l-[12px] sm:rounded-l-[24px] rounded-r-none overflow-hidden bg-white/5 shadow-[0_20px_50px_rgba(0,0,0,0.5)] aspect-[16/9]"
        >
          <img
            src="https://img.nickiresume.cn/0507/UI01.webp"
            className="absolute inset-0 w-full h-full object-cover"
            alt="UI/UX Detail"
          />
        </motion.div>
      </div>

      {/* Bottom Full-width Image Area (Absolute 80px side padding) */}
      <div className="w-full px-[24px] md:px-[60px] lg:px-[80px] pb-16 xl:pb-24">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="w-full relative aspect-[16/9] rounded-[16px] sm:rounded-[24px] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
        >
          <img
            src="https://img.nickiresume.cn/Nimage/01web3/06-UI3.webp"
            className="absolute inset-0 w-full h-full object-cover"
            alt="UI/UX Design Showcase Bottom"
          />
        </motion.div>
      </div>
    </section>
  );
};
