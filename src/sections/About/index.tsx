import React from 'react';
import { useDictionary } from '../../hooks/useDictionary';

export const About = () => {
  const { language } = useDictionary();
  const isEn = language === 'en';

  return (
    <section id="about" className="w-full bg-[#050505] text-white px-6 md:px-[80px] pt-[8vh] pb-[calc(6vh+20px)] lg:pb-[calc(2vh+20px)] flex flex-col">
      <div className="w-full flex flex-col -translate-y-[30px]">
        
        {/* 1. About Header & Intro (Left Aligned Block) */}
        <div className="space-y-12 max-w-[1000px]">
           <div className="flex flex-col">
             <h2 className="text-[46px] font-extrabold font-sans tracking-tight leading-[1.1] uppercase mb-6">
               NICKI
             </h2>
             <div className="flex items-center gap-4">
                <div className="w-16 h-[1px] bg-white/30" />
                <h4 className={`text-white/70 text-[16px] md:text-[16px] italic font-normal ${isEn ? 'tracking-normal' : 'tracking-wide'}`}>
                  {isEn ? "A pragmatic visual problem solver who acts beyond theory." : "一个绝不纸上谈兵的视觉问题解决者。"}
                </h4>
             </div>
           </div>

           <div className={`text-[16px] md:text-[16px] text-white/70 font-normal pt-2 ${isEn ? 'tracking-normal space-y-6 leading-[1.6]' : 'tracking-wide space-y-3 leading-[1.6]'}`}>
               <p>{isEn ? "Accustomed to deconstructing business models with a cross-border perspective, specializing in reconstructing commercial trust through visual \"noise reduction\" within extremely complex business logic." : "习惯用跨界视角拆解商业模式，擅长在极端复杂的业务逻辑中，通过视觉“降噪”重构商业信任。"}</p>
               <p>{isEn ? "I don't blindly believe in self-indulgent \"pure art\"; after all, in the face of cold conversion rates, logic always trumps sentiment." : "我不迷信自嗨式的“纯艺术”，毕竟在冰冷的转化率面前，讲情怀往往不如讲逻辑。"}</p>
               <div>
                  <p>{isEn ? "I firmly believe in one simple truth: " : "我只坚信一个朴素的真理："}</p>
                  <p className="font-bold text-white mt-2">
                     {isEn ? "Good Design = Lowering Cognitive Threshold + Increasing Conversion Efficiency." : "好的设计 = 降低认知门槛 + 提升转化效率。"}
                  </p>
               </div>
           </div>
        </div>

        {/* 2. Core Capabilities (2x2 Grid) */}
        <div className="space-y-10 mt-[130px] md:mt-[150px]">
          <h3 
            className={
              isEn 
                ? "text-[34px] md:text-[52px] font-extrabold tracking-tighter leading-none font-sans uppercase"
                : "text-[34px] md:text-[46px] font-medium tracking-tighter font-['PingFang_SC','Microsoft_YaHei']"
            }
          >
             {isEn ? 'CORE CAPABILITIES' : '核心战斗力'}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 xl:gap-x-32 gap-y-12 w-full">
              {/* Item 1 */}
              <div className="flex flex-col space-y-3">
                <h4 className="text-[16px] md:text-[18px] font-bold leading-snug">01 | {isEn ? 'Cross-Domain Visual Strategy' : '跨域视觉战略'}</h4>
                <p className="text-[16px] md:text-[16px] text-white/70 font-normal tracking-wide leading-relaxed">
                  {isEn 
                    ? "Refusing to be bound by a single industry. Capturing core commonalities across diverse business models with a cross-border mindset. Translating complex business logic and industry barriers into a visual language that users instantly \"get\"."
                    : "拒绝被单一行业绑架。用跨界思维捕捉不同商业形态的核心共性。懂业务才能做设计，把复杂的商业模式和行业壁垒，精准翻译成让用户“秒懂”的视觉语言。"}
                </p>
              </div>
              {/* Item 2 */}
              <div className="flex flex-col space-y-3">
                <h4 className="text-[16px] md:text-[18px] font-bold leading-snug">02 | {isEn ? 'Business Conversion Oriented' : '商业转化导向'}</h4>
                <p className="text-[16px] md:text-[16px] text-white/70 font-normal tracking-wide leading-relaxed">
                  {isEn 
                    ? <>Never designing for design's sake, but solely serving ultimate <span className="text-white font-bold">business objectives</span>. Dynamically adapting visual strategies—from direct pain-point targeting to premium brand positioning—to hardcore boost <span className="text-white font-bold">conversion efficiency</span> across core funnels.</>
                    : <>不为了设计而设计，只为最终的<span className="text-white font-bold">商业目标服务</span>。无论是直白干脆的痛点狙击，还是克制高级的品牌占位，都能动态调整视觉策略，硬核<span className="text-white font-bold">拉升</span>核心链路的<span className="text-white font-bold">转化效率</span>。</>}
                </p>
              </div>
              {/* Item 3 */}
              <div className="flex flex-col space-y-3 mt-[20px]">
                <h4 className="text-[16px] md:text-[18px] font-bold leading-snug">03 | {isEn ? 'Exclusive AI Workflow' : '独家智能工作流'}</h4>
                <p className="text-[16px] md:text-[16px] text-white/70 font-normal tracking-wide leading-relaxed">
                  {isEn 
                    ? <>No pandering to "AI juggling" trends, focusing solely on translating compute into real productivity. Deeply tuning <span className="text-white font-bold">proprietary models and workflows</span>, solidifying metaphysical "non-standard creativity" into high-quality "industrial pipelines." Empowering teams with tech leverage to achieve an <span className="text-white font-bold">efficiency leap</span> with less.</>
                    : <>不搞迎合风口的“AI 杂耍”，只关注算力如何转化为真实的生产力。深度调教<span className="text-white font-bold">专属模型与工作流</span>，把玄学的“非标创意”固化为高品控的“工业流水线”。用技术杠杆赋能团队，实现<span className="text-white font-bold">以少打多的效能跃升</span>。</>}
                </p>
              </div>
              {/* Item 4 */}
              <div className="flex flex-col space-y-3 mt-[20px]">
                <h4 className="text-[16px] md:text-[18px] font-bold leading-snug">04 | {isEn ? 'Agile Collaborative Leadership' : '敏捷协同领导力'}</h4>
                <p className="text-[16px] md:text-[16px] text-white/70 font-normal tracking-wide leading-relaxed">
                  {isEn 
                    ? <>Resolutely shattering communication barriers between design and R&D. Proactively utilizing <span className="text-white font-bold">Agent</span> to align <span className="text-white font-bold">underlying code logic</span>, minimizing friction. From top-level planning to pixel-perfect <span className="text-white font-bold">restoration</span> of components, ensuring lossless execution as a true pragmatist.</>
                    : <>坚决打破设计与研发之间的沟通壁垒。前置<span className="text-white font-bold">利用 Agent</span> 辅助对<span className="text-white font-bold">齐底层代码逻辑</span>，把无效的跨部门内耗降到最低。从顶层推演到前端组件的<span className="text-white font-bold">像素级还原</span>，确保策略无损落地，做拯救开发兄弟发际线的实干派。</>}
                </p>
              </div>
          </div>
        </div>
      </div>
    </section>
  );
};
