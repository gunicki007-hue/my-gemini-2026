import React from 'react';
import { motion } from 'motion/react';
import { useDictionary } from '../../hooks/useDictionary';

export const AIGCWorkflow = () => {
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
            <div className="text-white/60 text-[12px] md:text-[14px] font-sans font-bold tracking-[0.3em] uppercase mb-4">
              {isEn ? 'HUMAN-MACHINE COLLABORATION' : '人机协作工作流'}
            </div>
            
            <h2 className="text-white text-[32px] md:text-[40px] xl:text-[48px] font-black leading-[1.1] mb-10 tracking-tight font-sans uppercase">
              {isEn ? (
                <>WORKFLOW DEMO<br/>HYBRID PRODUCTION<br/>LINE</>
              ) : (
                <>工作流演示<br/>混合编排生产线</>
              )}
            </h2>

            <div className={`space-y-6 w-full max-w-[500px] ${isEn ? 'text-white/60 text-[14px] md:text-[15px] font-sans font-light tracking-wide leading-[1.8]' : 'text-white/50 text-[17px] text-justify tracking-widest leading-[38.6px]'}`}>
              <div className="py-2">
                <p className={`text-white/80 ${isEn ? 'font-medium leading-[1.6]' : 'font-medium tracking-wide leading-[1.8]'}`}>
                  {isEn 
                    ? "Reconstructing the \"design black box\" that highly relied on personal experience into a standardized industrial-grade assembly line." 
                    : "将过去高度依赖个人经验的“设计黑盒”，重构成标准化的工业级流水线。"}
                </p>
              </div>
              <p>
                {isEn
                  ? 'Handing over the dirty and exhausting work of early exploration to computing power, using AI for massive trial and error; thoroughly liberating the team\'s human brains, focusing all core energy on business decisions and final aesthetic control.'
                  : '把前期探索的脏活累活全部交给算力，用 AI 进行海量试错；让团队的人类大脑彻底解放出来，将核心精力全部聚焦于商业决策与最终的审美把控。'}
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
            className="w-full aspect-video bg-black rounded-[24px] overflow-hidden relative group shadow-[0_20px_60px_rgba(0,0,0,0.5)] border border-white/[0.03]"
          >
             <img src="https://img.nickiresume.cn/Nimage/03AIGC/workflow2.webp" alt="Workflow" className="w-full h-full object-cover" />
             <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-700"></div>
          </motion.div>
        </div>

      </div>
    </section>
  );
};
