import React from 'react';
import { useDictionary } from '../../hooks/useDictionary';

export const About = () => {
  const { language } = useDictionary();
  const isEn = language === 'en';

  return (
    <section id="about" className="w-full bg-[#050505] text-white px-6 md:px-[80px] pt-[8vh] pb-[calc(6vh+20px)] lg:pb-[calc(2vh+20px)] flex flex-col">
      <div className="w-full flex flex-col -translate-y-[30px]">
        
        {/* 1. About Header */}
        <div className="w-full mb-12">
          <h3 
            className={`uppercase ${isEn ? 'text-[46px] font-extrabold font-sans tracking-tighter leading-[1.05]' : 'text-[46px] font-bold font-puhuiti tracking-tighter leading-[1.1]'}`}
          >
             {isEn ? 'NICKI / BIO' : 'Nicki / 个人简介'}
          </h3>
        </div>

        {/* Two columns: Intro on left, Tags on right */}
        <div className="w-full flex flex-col xl:flex-row gap-16 xl:gap-24 mb-24">
          
          {/* Left Column: Intro */}
          <div className="xl:w-1/2 flex flex-col">
             <h2 className={`text-[24px] md:text-[32px] lg:text-[40px] leading-[1.25] tracking-tight ${isEn ? 'font-extrabold font-sans uppercase' : 'font-bold font-puhuiti'} mb-6`}>
               {isEn ? "Visual Strategist × UX Architect — Not just beautiful visuals, but a highly usable soul." : "视觉操盘手 × UX体验师——既有好看的视觉，更有好用的灵魂。"}
             </h2>
             <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-[1px] bg-white/30 shrink-0" />
                <h4 className={`text-white/70 text-[12px] md:text-[14px] font-normal ${isEn ? 'tracking-normal' : 'tracking-wide'}`}>
                  {isEn ? "Let's skip the fluff and look at the final launched visual conversion and interactive experience" : "设计不聊虚的，咱们看最终上线的视觉转化和交互体验"}
                </h4>
             </div>
             
             <div className={`text-[11px] md:text-[12px] text-white/70 font-normal ${isEn ? 'tracking-normal space-y-6 leading-[1.7]' : 'tracking-wide space-y-5 leading-[1.8]'}`}>
               <p>
                 <span className="text-white font-bold">{isEn ? "Marketing Visuals, I am responsible for 'Beautiful': " : "营销视觉，我负责“好看”："}</span>
                 {isEn ? "Say goodbye to mediocre asset patchwork. I embed AI into the marketing production line, outputting explosive operational visuals with ultra-high efficiency. Whether online or offline, it not only catches the eye immediately but tangibly boosts conversion rates." : "告别平庸的素材拼凑。我把 AI 嵌进营销生产线，用极高的效率输出有爆发力的运营视觉。不管线上还是线下，不仅要第一时间吸睛，更要实打实地拉升转化率。"}
               </p>
               <p>
                 <span className="text-white font-bold">{isEn ? "UX Experience, I am responsible for 'Usable': " : "UX体验，我负责“好用”："}</span>
                 {isEn ? "No matter how convoluted the business logic, I can map out the smoothest user path. As an architect deeply rooted in UX, I'm accustomed to applying 'information noise reduction' to complex systems. Coupled with my understanding of frontend code logic, the delivered solutions are not only a joy for users but also frictionless for development." : "业务逻辑再绕，我也能理出最顺畅的用户路径。作为深耕 UX 方向的架构师，我习惯给复杂的系统做“信息降噪”。加上我懂前端代码逻辑，交付的方案不仅用户用着爽，开发落地也毫无阻力。"}
               </p>
           </div>
          </div>

          {/* Right Column: Tags */}
          <div className="xl:w-1/2 flex flex-col space-y-12 shrink-0">
            {/* Row 1 */}
            <div className="space-y-5">
              <h3 className={`text-[18px] md:text-[20px] font-bold text-white ${isEn ? 'font-sans uppercase tracking-tight' : 'font-puhuiti tracking-wide'}`}>
                {isEn ? 'Marketing Visuals & AI Productivity' : '营销视觉与 AI 生产力'}
              </h3>
              <div className="flex flex-wrap gap-3 md:gap-4">
                {[
                  { en: 'AI-Native Workflow', zh: 'AI 原生工作流' },
                  { en: 'Midjourney / ComfyUI', zh: 'Midjourney / ComfyUI' },
                  { en: 'Brand 0-1 Visual Strategy', zh: '品牌 0-1 视觉全案' },
                  { en: 'AI Visual Asset Accumulation', zh: 'AI 视觉资产沉淀' }
                ].map((pill, idx) => (
                  <div key={`p1-${idx}`} className="bg-[#1A1A1A] hover:bg-[#2A2A2A] transition-colors duration-300 px-5 md:px-6 py-2.5 md:py-3 rounded-md text-[14px] md:text-[15px] font-medium text-white/80 border border-white/5">
                    {isEn ? pill.en : pill.zh}
                  </div>
                ))}
              </div>
            </div>
            
            {/* Row 2 */}
            <div className="space-y-5">
              <h3 className={`text-[18px] md:text-[20px] font-bold text-white ${isEn ? 'font-sans uppercase tracking-tight' : 'font-puhuiti tracking-wide'}`}>
                {isEn ? 'UX Architecture & Design Engineering' : 'UX 架构与设计工程化'}
              </h3>
              <div className="flex flex-wrap gap-3 md:gap-4">
                {[
                  { en: 'Complex System Noise Reduction', zh: '复杂系统降噪' },
                  { en: 'Figma Industrial Standards', zh: 'Figma 工业级规范' },
                  { en: 'Full-Chain Logic Deduction', zh: '全链路逻辑推演' },
                  { en: 'Pixel-Perfect Lossless Delivery', zh: '像素级研发无损交付' }
                ].map((pill, idx) => (
                  <div key={`p2-${idx}`} className="bg-[#1A1A1A] hover:bg-[#2A2A2A] transition-colors duration-300 px-5 md:px-6 py-2.5 md:py-3 rounded-md text-[14px] md:text-[15px] font-medium text-white/80 border border-white/5">
                    {isEn ? pill.en : pill.zh}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* 3. Core Competencies */}
        <div className="w-full flex flex-col pt-12 border-t border-white/10">
          <h3 className={`mb-12 uppercase ${isEn ? 'text-[28px] md:text-[36px] font-extrabold font-sans tracking-tighter leading-[1.05]' : 'text-[28px] md:text-[36px] font-bold font-puhuiti tracking-tighter leading-[1.1]'}`}>
            {isEn ? 'CORE COMPETENCIES' : '核心竞争力'}
          </h3>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-12">
            {/* Item 1 */}
            <div className="flex flex-col">
              <h4 className={`text-[18px] md:text-[20px] font-bold text-white mb-4 ${isEn ? 'font-sans tracking-tight' : 'font-puhuiti tracking-wide'}`}>
                {isEn ? '01 | Cross-Domain Visual Strategy & Brand Operations' : '01 | 跨域视觉战略与品牌全案操盘'}
              </h4>
              <p className={`text-[#888] text-[11px] md:text-[12px] font-normal ${isEn ? 'leading-[1.7]' : 'leading-[1.8] tracking-wide'}`}>
                {isEn ? '12 years of end-to-end design management experience in finance (insurance, Web3, etc.) and tech. Refusing to be bound by a single industry, equipped with 0-to-1 brand architecture capabilities—from top-level business positioning and visual strategy deduction to final market promotion and communication execution. Understanding business is the prerequisite for design; skilled at using cross-disciplinary thinking to capture the core logic of complex business models and accurately translating it into visual languages and brand assets that users understand instantly.' : '拥有12年深耕金融（保险、Web3等）与科技领域的全链路设计管理经验。拒绝被单一行业绑架，具备从0到1的品牌全案架构能力——从顶层商业定位、视觉策略推演，到最终的市场推广与传播落地。懂业务才能做设计，擅长用跨界思维捕捉复杂商业模式的核心逻辑，将其精准翻译为让用户“秒懂”的视觉语言与品牌资产。'}
              </p>
            </div>
            
            {/* Item 2 */}
            <div className="flex flex-col">
              <h4 className={`text-[18px] md:text-[20px] font-bold text-white mb-4 ${isEn ? 'font-sans tracking-tight' : 'font-puhuiti tracking-wide'}`}>
                {isEn ? '02 | Commercial Conversion-Oriented Full-Stack Product Experience (UI/UX)' : '02 | 商业转化导向的全栈产品体验（UI/UX）'}
              </h4>
              <p className={`text-[#888] text-[11px] md:text-[12px] font-normal ${isEn ? 'leading-[1.7]' : 'leading-[1.8] tracking-wide'}`}>
                {isEn ? 'Designing not for the sake of design, but to serve the ultimate business goals. Possessing strong 0-1 product breakthrough capabilities, fully covering end-to-end UI/UX experience design for APP and Web. Whether it\'s straightforward pain-point targeting or restrained high-end brand positioning, capable of dynamically adjusting product visual and interaction strategies, completing the closed loop from product information architecture and style definition to high-fidelity visuals, hardcore boosting the conversion efficiency of core links.' : '不为了设计而设计，只为最终的商业目标服务。具备极强的0-1产品攻坚能力，全面覆盖APP与Web端的UI/UX全链路体验设计。无论是直白干脆的痛点狙击，还是克制高级的品牌占位，都能动态调整产品视觉与交互策略，完成从产品信息架构、风格定义到高保真视觉的闭环，硬核拉升核心链路的转化效率。'}
              </p>
            </div>

            {/* Item 3 */}
            <div className="flex flex-col">
              <h4 className={`text-[18px] md:text-[20px] font-bold text-white mb-4 ${isEn ? 'font-sans tracking-tight' : 'font-puhuiti tracking-wide'}`}>
                {isEn ? '03 | AI-Native Driven Exclusive Smart Workflow' : '03 | AI原生驱动的独家智能工作流'}
              </h4>
              <p className={`text-[#888] text-[11px] md:text-[12px] font-normal ${isEn ? 'leading-[1.7]' : 'leading-[1.8] tracking-wide'}`}>
                {isEn ? 'No "AI juggling" to cater to trends; focusing only on how computing power translates into real productivity. Proficient in the dual-track workflow of AIGC visual and UI/UX: At the visual level, deeply tuning the SD ecosystem, precisely controlling images via ControlNet, and fully outputting via ComfyUI to solidify "non-standard creativity" into a highly controlled "industrial assembly line." At the product level, relying on Stitch and Cloud Design for tone-setting and initial drafts, and combining Figma MCP, Cursor, Anti-Gravity, Codex, and other full-stack AI toolchains to build efficient design system specifications. Adapted for AI-native and high-end tech projects, using technological leverage to achieve an efficiency leap of "doing more with less."' : '不搞迎合风口的“AI 杂耍”，只关注算力如何转化为真实的生产力。精通AIGC视觉与UIUX双轨工作流：在视觉层，深度调教SD生态，通过ControlNet精准控图与ComfyUI完整产出，将“非标创意”固化为高品控的“工业流水线”；在产品层，依托 Stitch、Cloud Design 定调与初稿生成，并结合 Figma MCP、Cursor、Anti-Gravity、Codex 等全栈AI工具链，构建高效的设计系统规范。适配AI原生与科技类高端项目，用技术杠杆实现“以少打多”的效能跃升。'}
              </p>
            </div>

            {/* Item 4 */}
            <div className="flex flex-col">
              <h4 className={`text-[18px] md:text-[20px] font-bold text-white mb-4 ${isEn ? 'font-sans tracking-tight' : 'font-puhuiti tracking-wide'}`}>
                {isEn ? '04 | Agile Collaboration & Cross-Departmental Leadership' : '04 | 敏捷协同与跨部门统筹领导力'}
              </h4>
              <p className={`text-[#888] text-[11px] md:text-[12px] font-normal ${isEn ? 'leading-[1.7]' : 'leading-[1.8] tracking-wide'}`}>
                {isEn ? 'Resolutely breaking down communication barriers between design, product, and R&D. Possessing excellent multi-department cross-disciplinary communication and project coordination capabilities, preemptively using AI Agents and frontend logic to assist in aligning underlying code. From top-level strategy deduction to pixel-perfect restoration of frontend components, ensuring design specifications and creativity are implemented flawlessly. Balancing design aesthetics and engineering efficiency, minimizing invalid cross-departmental friction, being a pragmatic manager who saves developers\' hairlines.' : '坚决打破设计、产品与研发之间的沟通壁垒。具备优秀的多部门跨界沟通与项目统筹能力，前置利用AI Agent与前端逻辑辅助对齐底层代码。从顶层策略推演到前端组件的像素级还原，确保设计规范与创意无损落地。兼顾设计美学与工程效率，将跨部门的无效内耗降到最低，做拯救开发兄弟发际线的实干派管理者。'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

