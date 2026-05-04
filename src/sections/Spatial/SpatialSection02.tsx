import React from 'react';
import { motion } from 'motion/react';
import { useDictionary } from '../../hooks/useDictionary';

export const SpatialSection02 = () => {
  const { language } = useDictionary();
  const isEn = language === 'en';

  return (
    <section className="relative w-full py-24 md:py-32 px-6 lg:px-[80px] bg-[#0a0a0a] overflow-visible border-t border-white/[0.02]">
      <div className="w-full flex flex-col lg:flex-row justify-between items-start mx-auto gap-12 lg:gap-0">
        
        {/* Left Column (Sticky Text) */}
        <div className="w-full lg:w-[35%] lg:sticky lg:top-[12vh] flex flex-col z-10 lg:pr-8 xl:pr-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex items-center gap-4 mb-8 md:mb-12">
              <div className="w-16 h-[1px] bg-[#A66B4E]/50" />
              <h4 className="text-[#A66B4E] tracking-tighter text-[16px] md:text-[16px] uppercase font-sans font-bold">
                {isEn ? 'CASE 02 · OUTDOOR EXPERIENCE · BRAND CHARITY' : 'CASE 02 · 户外体验 · 品牌公益'}
              </h4>
            </div>
            
            <h3 className="text-white text-[30px] md:text-[38px] xl:text-[46px] font-extrabold leading-[1.1] mb-6 tracking-tighter font-sans uppercase">
              {isEn ? (
                <>OPEN-FIELD DOMAIN<br />FULL-LINK EXPERIENCE</>
              ) : (
                <>开放式场域 <br />全链路体验</>
              )}
            </h3>

            <div className="space-y-8">
              <p className={`w-full ${isEn ? 'text-white/90 font-sans font-light tracking-[0.015em] leading-[1.5] text-[16px] xl:text-[16px]' : 'text-white/90 font-sans font-light tracking-[0.03em] leading-[1.6] text-[16px] xl:text-[16px] text-justify'}`}>
                {isEn ? (
                  <>Indoor spaces pursue pixel-level absolute control,<br />while the outdoor wilderness tests systemic resilience against natural variables.</>
                ) : (
                  <>室内空间追求像素级的绝对控制，<br />而户外旷野考验的，是对抗自然变量的系统弹性。</>
                )}
              </p>
              
              <p className={`w-full ${isEn ? 'text-white/90 font-sans font-light tracking-[0.015em] leading-[1.5] text-[16px] xl:text-[16px]' : 'text-white/90 font-sans font-light tracking-[0.03em] leading-[1.6] text-[16px] xl:text-[16px] text-justify'}`}>
                {isEn ? (
                  "In the \"Sunflowers Bloom\" Danxia Charity Run, I coordinated a multi-kilometer full-scenario visual coverage."
                ) : (
                  "在“向阳有花开”丹霞公益跑项目中，我统筹了长达数公里的全场景视觉覆盖。"
                )}
              </p>

              <p className={`w-full ${isEn ? 'text-white/90 font-sans font-light tracking-[0.015em] leading-[1.5] text-[16px] xl:text-[16px]' : 'text-white/90 font-sans font-light tracking-[0.03em] leading-[1.6] text-[16px] xl:text-[16px] text-justify'}`}>
                {isEn ? (
                  "Focusing on high-intensity sunlight and wind pressure environments, I deeply intervened in the weather-resistance testing and material selection of outdoor materials. Through an extremely rigorous full-track wayfinding system and emotional node design, we connected scattered natural landscapes into a complete brand narrative trajectory, ensuring thousands of runners still feel solid brand warmth in extreme environments."
                ) : (
                  "针对高强度日照与风压环境，我深度介入户外物料的耐候性测试与材质选型。通过极其严密的全赛道导视系统（Wayfinding）与情绪节点设计，将零散的自然地貌串联为完整的品牌叙事轨迹，确保数千名跑者在极限环境下依然能感知到坚实的品牌温度。"
                )}
              </p>
            </div>
          </motion.div>
        </div>

        {/* Right Column (Images) */}
        <div className="w-full lg:w-[60%] flex flex-col gap-16 md:gap-24 relative z-0 lg:pl-10">
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col gap-4"
          >
            <div className="flex flex-col gap-3 md:gap-4 lg:mt-[72px]">
              {/* Title / Label from Image 1 */}
              <div className="flex flex-col gap-2 mb-2 lg:mb-4">
                <span className="text-[#A66B4E] tracking-tighter text-[16px] font-sans font-bold uppercase flex items-center gap-2">
                  <span className="font-mono slashed-zero text-[16px]">01</span>
                  {isEn ? '/ OUTDOOR REAL-WORLD COORDINATION · BUILDING FULL-LINK CSR EXPERIENCE' : '/ 户外实境统筹 · 构建全链路 CSR 体验'}
                </span>
                <p className={`w-full ${isEn ? 'text-white/90 font-sans font-light tracking-[0.015em] leading-[1.5] text-[16px] xl:text-[16px]' : 'text-white/90 font-sans font-light tracking-[0.03em] leading-[1.6] text-[16px] xl:text-[16px] text-justify'}`}>
                  {isEn ? 'Breaking through constraints of natural variables, deeply controlling the full-domain visual wayfinding from the main venue macro-structure and sponsor matrix to the multi-kilometer track. Transforming the brand\'s charity concept into a highly cohesive physical immersive experience.' : '突破自然变量限制，深度管控从主会场巨构、赞助商矩阵到数公里赛道的全域视觉导视。将品牌公益理念转化为高凝聚力的实体沉浸体验。'}
                </p>
              </div>

              {/* Top Large Image (16:9) */}
              <div className="w-full aspect-[16/9] rounded-[16px] md:rounded-[24px] overflow-hidden relative bg-[#111] flex items-center justify-center group shadow-[0_20px_60px_rgba(0,0,0,0.5)]">
                <img 
                  src="https://img.nickiresume.cn/Nimage/04Event/01.webp" 
                  alt="Outdoor Event 1" 
                  className="w-full h-full object-cover brightness-[.85]"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-[#A66B4E]/10 to-transparent pointer-events-none"></div>
                <div className="absolute inset-x-0 bottom-0 p-5 md:p-8 bg-gradient-to-t from-black via-black/60 to-transparent z-10">
                  <p className="text-white/70 text-[16px] md:text-[16px] font-sans tracking-wider">
                    {isEn ? 'Danxia Charity · FlourishRace Scene' : '丹霞公益 · 向阳花开FlourshiRace 现场'}
                  </p>
                </div>
              </div>
              
              {/* Bottom Two Images (16:9) */}
              <div className="grid grid-cols-2 gap-3 md:gap-4">
                <div className="w-full aspect-[16/9] rounded-[12px] md:rounded-[16px] overflow-hidden relative bg-[#111] flex items-center justify-center group shadow-[0_20px_60px_rgba(0,0,0,0.5)]">
                   <img 
                     src="https://img.nickiresume.cn/Nimage/04Event/02.webp" 
                     alt="Outdoor Event 2" 
                     className="w-full h-full object-cover brightness-[.85]"
                   />
                   <div className="absolute inset-0 bg-gradient-to-tr from-[#A66B4E]/10 to-transparent pointer-events-none"></div>
                </div>
                <div className="w-full aspect-[16/9] rounded-[12px] md:rounded-[16px] overflow-hidden relative bg-[#111] flex items-center justify-center group shadow-[0_20px_60px_rgba(0,0,0,0.5)]">
                   <img 
                     src="https://img.nickiresume.cn/Nimage/04Event/03.webp" 
                     alt="Outdoor Event 3" 
                     className="w-full h-full object-cover brightness-[.85]"
                   />
                   <div className="absolute inset-0 bg-gradient-to-bl from-[#A66B4E]/10 to-transparent pointer-events-none"></div>
                </div>
              </div>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
};

