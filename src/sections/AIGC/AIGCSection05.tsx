import React from 'react';
import { motion } from 'motion/react';
import { useDictionary } from '../../hooks/useDictionary';

export const AIGCSection05 = () => {
  const { language } = useDictionary();
  const isEn = language === 'en';

  return (
    <section className="relative w-full py-24 md:py-32 px-6 lg:px-[80px] bg-[#0a0a0a] overflow-visible">
      <div className="w-full grid grid-cols-1 lg:grid-cols-10 items-start gap-12 lg:gap-20">
        
        {/* Left Column (Sticky Text) */}
        <div className="col-span-1 lg:col-span-4 flex flex-col lg:sticky lg:top-[12vh] z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex items-center gap-4 mb-8 md:mb-12">
              <div className="w-16 h-[1px] bg-[#D5B667]/50" />
              <h4 className="text-[#D5B667] tracking-tighter text-[16px] md:text-[16px] uppercase font-sans font-bold">
                {isEn ? 'CASE 02 · ABSOLUTE CONTROL · TASAKI' : 'CASE 02 · 绝对控制 · TASAKI'}
              </h4>
            </div>
            <h3 className="text-white text-[30px] md:text-[38px] xl:text-[46px] font-extrabold leading-[1.1] mb-6 tracking-tighter font-sans uppercase">
              {isEn ? (
                <>HIGH LUXURY EXTREMES <br />PIXEL-LEVEL PARANOID CONTROL</>
              ) : (
                <>高奢极值 <br />像素级的偏执控制</>
              )}
            </h3>

            <div className={`space-y-6 ${isEn ? 'text-white/70 font-sans font-light tracking-[0.015em] leading-[1.5] text-[16px] md:text-[16px]' : 'text-white/70 font-sans font-light tracking-[0.03em] leading-[1.6] text-[16px] xl:text-[16px] text-justify'}`}>
              <p className="text-white/70 font-medium">
                {isEn ? (
                  <>I no longer view AI as a tool for early inspiration brainstorming,<br />but have reshaped it into a production engine for precisely resolving high-luxury textures.</>
                ) : (
                  <>我不再将 AI 视为前期的灵感发散工具，<br />而是将其重塑为精准解算高奢质感的生产引擎。</>
                )}
              </p>
              
              <p>
                {isEn ? (
                  "The demanding requirements of luxury goods for light and shadow (such as metallic paint surfaces and jewelry refraction) are the ultimate test for verifying the upper limit of AI vision."
                ) : (
                  "奢侈品对光影（如金属漆面、珠宝折射）的苛刻要求，是检验 AI 视觉上限的终极测试。"
                )}
              </p>
              
              <div className="pt-[30px] space-y-6">
                <div>
                  <p className="text-white/70 font-bold">{isEn ? "Technology Path" : "技术路径"}</p>
                  <p>
                    {isEn ? (
                      "By encapsulating a private Lora asset library and combining it with the Seedance 2 dynamic workflow, I have tamed AI hallucinations to industrial-grade precision."
                    ) : (
                      "封装私有 Lora 资产库，配合 Seedance 2 动态工作流，我将 AI 幻觉驯化为工业级精度。"
                    )}
                  </p>
                </div>

                <div>
                  <p className="text-white/70 font-bold">{isEn ? "Generational Gap Comparison" : "代差对比"}</p>
                  <p>
                    {isEn ? (
                      "The traditional model is \"stacking pixels\", while my workflow is \"choreographing logic\". I skipped all the sketching stages and directly completed the physical material resolution and dynamic generation on the computing power side."
                    ) : (
                      "传统模式是“像素的堆砌”，而我的工作流是“逻辑的编排”。我跳过了所有的草图环节，直接在算力端完成物理材质解算与动态生成。"
                    )}
                  </p>
                </div>

                <div>
                  <p className="text-white/70 font-bold">{isEn ? "Delivery Absolute Values" : "交付极值"}</p>
                  <p>
                    {isEn ? (
                      "This model turns the production cost of high-luxury projects from linear growth to zero marginal cost. What I deliver is not just posters, but dynamic visual sovereignty that can be directly put into ad flows with pixel-level control."
                    ) : (
                      "这种模式让高奢项目的生产成本从线性增长变为零边际成本。我交付的不止是海报，而是能直接投流、像素级可控的动态视觉主权。"
                    )}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Right Column (Images) */}
        <div className="col-span-1 lg:col-span-6 flex flex-col gap-16 md:gap-32 relative z-0">
          
          {/* Module 1 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col gap-4"
          >
            <div className="flex flex-col gap-2 mb-2">
              <span className="text-[#D5B667] tracking-tighter text-[16px] font-sans font-bold uppercase flex items-center gap-2">
                <span className="font-mono slashed-zero text-[16px]">01</span>
                {isEn ? 'EXTREME LIGHT & SHADOW ATMOSPHERE' : '极致光影氛围图'}
              </span>
              <p className="text-white text-[16px] md:text-[15px] font-normal tracking-wide">
                {isEn ? 'Subverting traditional material rendering bottlenecks, pushing the limit of restoring the warm iridescent feel of South Sea pearls and the physical refraction of precious metals.' : '颠覆传统材质渲染瓶颈，极限还原澳白级珍珠虹彩温润感与贵金属的物理级折射。'}
              </p>
            </div>
            <div className="w-full aspect-video rounded-[24px] overflow-hidden relative">
              <video 
                src="https://img.nickiresume.cn/Nimage/03AIGC/01pearl%20full.mp4" 
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none"></div>
              <div className="absolute bottom-6 left-8 z-10">
                <span className="text-white/70 text-[16px] md:text-[16px] font-medium tracking-tighter">
                  {isEn ? 'Optical Calculation' : '物理级光学解算'}
                </span>
              </div>
            </div>
            
            <div className="w-full aspect-[1920/440] rounded-[24px] overflow-hidden relative">
              <video 
                src="https://img.nickiresume.cn/Nimage/03AIGC/02pearl%203f.mp4" 
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          {/* Module 2 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col gap-4"
          >
            <div className="flex flex-col gap-2 mb-2">
              <span className="text-[#D5B667] tracking-tighter text-[16px] font-sans font-bold uppercase flex items-center gap-2">
                <span className="font-mono slashed-zero text-[16px]">02</span>
                {isEn ? 'CORE PRODUCT COMMERCIAL POSTER' : '核心单品出街海报'}
              </span>
              <p className="text-white text-[16px] md:text-[15px] font-normal tracking-wide">
                {isEn ? 'Millimeter-level locking of product industrial structure, rejecting AI random hallucinations, 100% meeting the commercial standards for high jewelry.' : '毫米级锁定产品工业结构，拒绝 AI 随机幻觉，100% 达成高定珠宝商业出街标准。'}
              </p>
            </div>
            <div className="w-full aspect-video rounded-[24px] overflow-hidden relative">
              <img 
                src="https://img.nickiresume.cn/Nimage/03AIGC/03layout.webp" 
                alt="Step 02" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none"></div>
              <div className="absolute bottom-6 left-8 z-10">
                <span className="text-white/70 text-[16px] md:text-[16px] font-medium tracking-tighter">
                  {isEn ? 'Commercial Asset' : '商业级高精度资产'}
                </span>
              </div>
            </div>
            
            <div className="w-full aspect-video rounded-[24px] overflow-hidden relative">
              <img 
                src="https://img.nickiresume.cn/Nimage/03AIGC/04layout.webp" 
                alt="Step 02 - Poster 2" 
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          {/* Module 3 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col gap-4"
          >
            <div className="flex flex-col gap-2 mb-2">
              <span className="text-[#D5B667] tracking-tighter text-[16px] font-sans font-bold uppercase flex items-center gap-2">
                <span className="font-mono slashed-zero text-[16px]">03</span>
                {isEn ? 'VIRTUAL TALENT INTERPRETATION' : '虚拟模特演绎'}
              </span>
              <p className="text-white text-[16px] md:text-[15px] font-normal tracking-wide">
                {isEn ? 'Deeply resolving real human skin textures and jewelry wearing shadows, perfectly replacing the expensive and inefficient traditional live-action shooting process.' : '深度解算真人肤质纹理与珠宝佩戴阴影，完美替代高昂且低效的传统实拍流程。'}
              </p>
            </div>
            <div className="w-full aspect-video rounded-[24px] overflow-hidden relative">
              <img 
                src="https://img.nickiresume.cn/Nimage/03AIGC/05layout.webp" 
                alt="Step 03" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none"></div>
              <div className="absolute bottom-6 left-8 z-10">
                <span className="text-white/70 text-[16px] md:text-[16px] font-medium tracking-tighter">
                  {isEn ? 'Virtual Talent' : '真实交互与场景解算'}
                </span>
              </div>
            </div>

            <div className="w-full aspect-video rounded-[24px] overflow-hidden relative">
              <img 
                src="https://img.nickiresume.cn/Nimage/03AIGC/06layout.webp" 
                alt="Step 03 - Layout 2" 
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          {/* Module 4 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col gap-4"
          >
            <div className="flex flex-col gap-2 mb-2">
              <span className="text-[#D5B667] tracking-tighter text-[16px] font-sans font-bold uppercase flex items-center gap-2">
                <span className="font-mono slashed-zero text-[16px]">04</span>
                {isEn ? 'DYNAMIC TVC SLICES' : '动态 TVC 切片'}
              </span>
              <p className="text-white text-[16px] md:text-[15px] font-normal tracking-wide">
                {isEn ? 'Transcending the limitations of static assets, achieving zero marginal cost global distribution of high-quality dynamic video slices.' : '跨越静态资产局限，实现高质感动态视频切片的零边际成本全域分发'}
              </p>
            </div>
            <div className="w-full aspect-video rounded-[24px] overflow-hidden relative">
              <video 
                src="https://img.nickiresume.cn/Nimage/03AIGC/07tvc.mp4" 
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none"></div>
              <div className="absolute bottom-6 left-8 z-10">
                <span className="text-white/70 text-[16px] md:text-[16px] font-medium tracking-tighter">
                  {isEn ? 'Temporal Consistency' : '连续性动态影像'}
                </span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
