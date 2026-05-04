import React from 'react';
import { motion } from 'motion/react';
import { useDictionary } from '../../hooks/useDictionary';

export const AIGCSection03 = () => {
  const { language } = useDictionary();
  const isEn = language === 'en';

  return (
    <section className="relative w-full py-24 md:py-32 px-6 lg:px-[80px] bg-[#0a0a0a] overflow-visible">
      <div className="w-full flex flex-col lg:flex-row justify-between items-center mx-auto gap-12 lg:gap-0">
        
        {/* Left Column */}
        <div className="w-full lg:w-[35%] flex flex-col z-10 lg:pr-8 xl:pr-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="text-[#D5B667] text-[12px] md:text-[14px] font-sans font-bold tracking-[0.3em] uppercase mb-4">
              {isEn ? 'CASE 01 · EASPAY' : 'CASE 01 · EASPAY'}
            </div>
            
            <h2 className={`mb-10 xl:mb-12 text-white font-sans font-black uppercase tracking-tighter leading-[1.1] tracking-tighter ${isEn ? 'text-[30px] md:text-[38px] xl:text-[46px]' : 'text-[30px] md:text-[38px] xl:text-[46px]'}`}>
              {isEn ? (
                <>CLARIFY LOGIC<br/>BEFORE UI</>
              ) : (
                <>先理清业务逻辑<br/>再动手画界面</>
              )}
            </h2>

            <div className={`flex flex-col gap-8 w-full max-w-[500px] ${isEn ? 'text-white/70 font-sans font-light tracking-[0.015em] leading-[1.5] text-[12px] md:text-[11px]' : 'text-white/70 font-sans font-light tracking-[0.03em] leading-[1.6] text-[11px] xl:text-[13px] text-justify'}`}>
              <p>
                {isEn 
                  ? 'Web3 payments are intricately complex, involving cross-chain fund flows and extremely high compliance thresholds. If designers only step in at the very end to "beautify the pages", they often become detached from the actual business, resulting in repeated teardowns and rebuilds during the development phase.' 
                  : 'Web3 支付非常复杂，牵扯到跨链资金流转和极高的合规门槛。如果设计师只在最后一步才介入去“美化页面”，往往会脱离实际业务，导致开发阶段反复推翻重来。'}
              </p>
              <p>
                {isEn
                  ? 'Therefore, in this project, I deliberately delayed jumping into visual drafts. Instead, I leveraged AI to map out the obscure underlying fund routing and payment state machines, translating them into an experience workflow that the entire team could easily comprehend.'
                  : '因此，在这个项目中我没有急着出视觉稿。而是先用 AI 辅助，把底层晦涩的资金流向、支付状态机全部梳理了一遍，将其转化为团队都能看懂的体验流程。'}
              </p>
              <p>
                {isEn
                  ? 'Intentionally preserving the "unfinished feel" of these wireframes forces the team to center discussions around "whether the system logic is correct" rather than "whether the colors look good". This significantly reduces the massive upfront trial-and-error costs for complex projects.'
                  : '刻意保留这些线框图的“半成品感”，是为了强制团队把讨论重点放在“系统逻辑对不对”上，而不是“颜色好不好看”。这为复杂项目省下了巨大的前期试错成本。'}
              </p>
            </div>
          </motion.div>
        </div>

        {/* Right Column (Images) */}
        <div className="w-full lg:w-[58%] flex flex-col items-center">
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="w-full aspect-video bg-[#111] rounded-[24px] overflow-hidden relative group shadow-[0_20px_60px_rgba(0,0,0,0.5)]"
          >
             <img src="https://img.nickiresume.cn/Nimage/03AIGC/01-1.webp" alt="Creative Engine 1" className="w-full h-full object-cover" />
             <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-700"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="w-full mt-12 lg:mt-[80px] aspect-video bg-[#111] rounded-[24px] overflow-hidden relative group shadow-[0_20px_60px_rgba(0,0,0,0.5)]"
          >
             <img src="https://img.nickiresume.cn/Nimage/03AIGC/02-2.webp" alt="Creative Engine 2" className="w-full h-full object-cover" />
             <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-700"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
