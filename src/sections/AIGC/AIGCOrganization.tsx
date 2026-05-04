import React from 'react';
import { motion } from 'motion/react';
import { useDictionary } from '../../hooks/useDictionary';

export const AIGCOrganization = () => {
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
            <div className="text-white/70 text-[16px] md:text-[16px] font-sans font-bold tracking-[0.3em] uppercase mb-4">
              {isEn ? 'ORGANIZATIONAL EVOLUTION' : '组织架构进化'}
            </div>
            
            <h2 className="text-white text-[30px] md:text-[38px] xl:text-[46px] font-extrabold leading-[1.1] mb-10 tracking-tighter font-sans uppercase">
              {isEn ? (
                <>FROM MANUAL<br/>TO COMPUTE</>
              ) : (
                <>从人力堆叠<br/>到算力编排</>
              )}
            </h2>

            <div className={`space-y-6 w-full max-w-[500px] ${isEn ? 'text-white/70 font-sans font-light tracking-[0.015em] leading-[1.5] text-[16px] md:text-[16px]' : 'text-white/70 font-sans font-light tracking-[0.03em] leading-[1.6] text-[16px] xl:text-[16px] text-justify'}`}>
              <div className="py-2">
                <p>
                  {isEn 
                    ? "Traditional pyramid teams severely rely on employee hand speed for capacity." 
                    : "传统的金字塔团队，产能严重依赖员工手速。"}
                </p>
              </div>
              <p>
                {isEn
                  ? 'I reorganized the team into a "Star Network Architecture" centered on AI. I no longer lead people to just cut out images, but rather encapsulate business logic and brand specifications into AI models. This empowers every junior employee to invoke director-level experience, achieving an exponential explosion in team capacity.'
                  : '我将团队重组为以 AI 为核心的“星网架构”。我不再带人抠图，而是把业务逻辑和品牌规范封装进 AI 模型。让每一个初级员工都能调用总监级的经验，实现团队产能的指数级爆发。'}
              </p>
            </div>
          </motion.div>
        </div>

        {/* Right Column (Images) */}
        <div className="w-full lg:w-[58%] flex flex-col gap-12 lg:gap-[80px] items-end">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="w-full aspect-video bg-[#111] rounded-[24px] overflow-hidden relative group shadow-[0_20px_60px_rgba(0,0,0,0.5)]"
          >
             <img src="https://img.nickiresume.cn/Nimage/03AIGC/network.webp" alt="Organizational Evolution" className="w-full h-full object-cover" />
             <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-700"></div>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

