import React from 'react';
import { motion } from 'motion/react';
import { useDictionary } from '../../hooks/useDictionary';

export const AIGCSection02 = () => {
  const { language } = useDictionary();
  const isEn = language === 'en';

  return (
    <section className="relative w-full py-24 md:py-32 px-6 md:px-[80px] bg-[#050505] overflow-hidden flex flex-col items-center border-t border-white/[0.02]">
      <div className="w-full flex flex-col max-w-[1920px]">
        {/* Top Text Blocks */}
        <div className="flex flex-col gap-20 md:gap-32 mb-16 md:mb-24">
          
          {/* Problem Solving block */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col gap-6"
          >
            <div className="text-white/60 font-sans font-bold tracking-[0.3em] uppercase text-[12px] md:text-[14px] mb-4">
              {isEn ? '01 / PROBLEM SOLVING' : '01 / 核心问题解决'}
            </div>
            <h3 className={`w-full max-w-[1200px] ${isEn ? 'text-[28px] font-light tracking-wide leading-[48px] font-sans text-white/90' : 'text-[28px] font-extrabold tracking-tight font-["PingFang_SC","Microsoft_YaHei"] leading-[48px]'}`}>
              {isEn ? (
                <>
                  Within this system, by restructuring the design pipeline, I am dedicated to solving the core pain points in complex business environments: <br className="hidden md:block"/><span className="text-[#D5B667] font-normal italic tracking-normal">How to escape premature visual traps and translate complex business logic into deterministic decisions.</span>
                </>
              ) : (
                <>在该体系中，我通过重构设计管线，致力于解决复杂业务环境下的核心痛点：<br className="hidden md:block"/><span className="text-[#D5B667] font-bold">如何跳出过早的视觉陷阱，将庞杂的商业逻辑转化为确定的决策。</span></>
              )}
            </h3>
          </motion.div>

          {/* System Structure block */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col gap-6"
          >
            <div className="text-white/60 font-sans font-bold tracking-[0.3em] uppercase text-[12px] md:text-[14px] mb-4">
              {isEn ? '02 / AI HYBRID WORKFLOW' : '02 / AI 混合工作流'}
            </div>
            <h2 className={`text-white leading-[1.1] ${isEn ? 'text-[32px] md:text-[40px] xl:text-[48px] font-black font-sans uppercase tracking-tight' : 'text-[32px] md:text-[40px] xl:text-[48px] font-black font-sans tracking-tight uppercase'}`}>
              {isEn ? 'Hybrid Agent Architecture Design' : '混合智能体架构设计'}
            </h2>
            <p className={`text-white/50 w-full max-w-[800px] ${isEn ? 'text-[18px] tracking-normal leading-[30px]' : 'text-[18px] text-justify tracking-widest leading-[30px]'}`}>
              {isEn ? 'Dual AI engines power this workflow, aligning business logic with visual production to transform complex strategies into definitive design decisions.' : '该架构将「业务逻辑推演」与「视觉资产合成」共同驱动。通过部署双层 AI 引擎，跳出过早的视觉陷阱，让庞杂的商业逻辑转化为确定的设计决策。'}
            </p>
          </motion.div>
        </div>

        {/* The Cards */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 md:gap-8 lg:gap-12 w-full">
          {/* Card 1: Cloud Auditor */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col w-full bg-[#111111] border border-white/[0.03] rounded-[32px] md:rounded-[40px] p-10 md:p-12 xl:p-16 relative overflow-hidden group hover:border-[#D5B667]/20 transition-all duration-700 shadow-[0_20px_60px_rgba(0,0,0,0.5)] hover:shadow-[0_20px_80px_rgba(213,182,103,0.05)]"
          >
            {/* Header row */}
            <div className="flex items-center justify-between mb-12 w-full">
              <div className="flex items-center gap-3 text-white/50 group-hover:text-[#D5B667] transition-colors duration-500">
                <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 7v.01M16 16v.01M12 12v.01M16 8v.01M8 16v.01M8 8v.01"/>
                  <path d="M3 12h5m3-4 3-4m0 0 3 3m-3-3v5m-3 7 3 3m0 0 3-3m-3 3v-5M8 12a4 4 0 0 0 4 4"/>
                </svg>
                <span className="text-[15px] md:text-[17px] font-bold tracking-[0.2em] font-sans uppercase text-white/50 group-hover:text-[#D5B667] transition-colors duration-500">AURA</span>
              </div>

              <div className="flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/[0.02] border border-white/[0.04]">
                <div className="w-1.5 h-1.5 rounded-full bg-white/20 group-hover:bg-[#D5B667] transition-colors duration-500"></div>
                <span className="text-[11px] md:text-[12px] text-white/40 uppercase font-bold tracking-wider font-sans group-hover:text-white/80 transition-colors duration-500 mt-[1px]">
                  {isEn ? 'LLM AGENT / Logic Solver' : 'LLM AGENT / 逻辑引擎'}
                </span>
              </div>
            </div>

            {/* Title */}
            <h3 className={`text-white mb-8 ${isEn ? 'text-[32px] md:text-[44px] font-black font-sans tracking-tight uppercase group-hover:text-white transition-colors duration-500' : 'text-[36px] md:text-[48px] font-bold font-["PingFang_SC","Microsoft_YaHei"] tracking-wide group-hover:text-white transition-colors duration-500'}`}>
              {isEn ? 'Strategic Brain' : '策略脑'}
            </h3>

            {/* Line */}
            <div className="w-full h-[1px] bg-gradient-to-r from-white/[0.06] to-transparent mb-10 group-hover:from-[#D5B667]/30 transition-colors duration-500"></div>

            {/* Subtitle */}
            <h4 className={`text-white/80 mb-12 ${isEn ? 'text-[16px] md:text-[18px] font-sans tracking-wide group-hover:text-white transition-colors duration-500' : 'text-[17px] md:text-[20px] font-medium font-["PingFang_SC","Microsoft_YaHei"] tracking-[0.05em] group-hover:text-white transition-colors duration-500'}`}>
              {isEn ? 'AURA Strategy Hub · Complex Business Logic Inference' : 'AURA 策略中枢 · 复杂业务逻辑推演'}
            </h4>

            {/* Bullets */}
            <ul className="flex flex-col gap-6 flex-1 mb-16">
              {[
                { en: 'Formulate logic before interface', cn: '先理清业务，再动手画图。避免团队一上来就陷入“界面好不好看”的无效讨论。' },
                { en: 'Conversational whiteboard inference', cn: '用大模型做外脑。提前梳理复杂的资金流和产品逻辑，把隐患解决在设计之前。' },
                { en: 'Business experience direction establishment', cn: '降低试错成本。让复杂项目在冷启动阶段少走弯路，大幅节省前期的人力和时间。' },
              ].map((item, idx) => (
                <li key={`card1-${idx}`} className="flex items-start gap-5">
                  <div className="w-1.5 h-1.5 rounded-full bg-white/20 group-hover:bg-[#D5B667] transition-colors duration-500 mt-2.5 flex-shrink-0" />
                  <p className={`text-white/50 group-hover:text-white/90 transition-colors duration-500 leading-[1.8] ${isEn ? 'text-[15px] md:text-[16px] tracking-wide' : 'text-[15px] md:text-[16px] tracking-widest'}`}>
                    {isEn ? item.en : item.cn}
                  </p>
                </li>
              ))}
            </ul>

            {/* Bottom Pill */}
            <div className="mt-auto inline-flex self-start items-center gap-2.5 px-5 py-2.5 rounded-full bg-white/[0.02] border border-white/[0.04]">
              <div className="w-1.5 h-1.5 rounded-full bg-white/20 group-hover:bg-[#D5B667] transition-colors duration-500"></div>
              <span className="text-[12px] md:text-[13px] text-white/40 group-hover:text-white/90 uppercase font-bold tracking-[0.15em] font-sans transition-colors duration-500 mt-[1px]">
                {isEn ? 'STATUS: Strategy inferring...' : 'STATUS: 策略推演中'}
              </span>
            </div>
          </motion.div>

          {/* Card 2: Local Architect */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col w-full bg-[#111111] border border-white/[0.03] rounded-[32px] md:rounded-[40px] p-10 md:p-12 xl:p-16 relative overflow-hidden group hover:border-[#D5B667]/20 transition-all duration-700 shadow-[0_20px_60px_rgba(0,0,0,0.5)] hover:shadow-[0_20px_80px_rgba(213,182,103,0.05)]"
          >
            {/* Header row */}
            <div className="flex items-center justify-between mb-12 w-full">
              <div className="flex items-center gap-3 text-white/50 group-hover:text-[#D5B667] transition-colors duration-500">
                <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                  <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
                  <line x1="12" y1="22.08" x2="12" y2="12"></line>
                </svg>
                <span className="text-[15px] md:text-[17px] font-bold tracking-[0.2em] font-sans uppercase text-white/50 group-hover:text-[#D5B667] transition-colors duration-500">SYNTHESIS</span>
              </div>

              <div className="flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/[0.02] border border-white/[0.04]">
                <div className="w-1.5 h-1.5 rounded-full bg-white/20 group-hover:bg-[#D5B667] transition-colors duration-500"></div>
                <span className="text-[11px] md:text-[12px] text-white/40 uppercase font-bold tracking-wider font-sans group-hover:text-white/80 transition-colors duration-500 mt-[1px]">
                  {isEn ? 'COMFYUI / Compute Deployment' : 'COMFYUI / 算力部署'}
                </span>
              </div>
            </div>

            {/* Title */}
            <h3 className={`text-white mb-8 ${isEn ? 'text-[32px] md:text-[44px] font-black font-sans tracking-tight uppercase group-hover:text-white transition-colors duration-500' : 'text-[36px] md:text-[48px] font-bold font-["PingFang_SC","Microsoft_YaHei"] tracking-wide group-hover:text-white transition-colors duration-500'}`}>
              {isEn ? 'Visual Brain' : '视觉脑'}
            </h3>

            {/* Line */}
            <div className="w-full h-[1px] bg-gradient-to-r from-white/[0.06] to-transparent mb-10 group-hover:from-[#D5B667]/30 transition-colors duration-500"></div>

            {/* Subtitle */}
            <h4 className={`text-white/80 mb-12 ${isEn ? 'text-[16px] md:text-[18px] font-sans tracking-wide group-hover:text-white transition-colors duration-500' : 'text-[17px] md:text-[20px] font-medium font-["PingFang_SC","Microsoft_YaHei"] tracking-[0.05em] group-hover:text-white transition-colors duration-500'}`}>
              {isEn ? 'SYNTHESIS Visual Workshop · Brand DNA Encapsulation' : 'SYNTHESIS 视觉工坊 · 品牌资产生成'}
            </h4>

            {/* Bullets */}
            <ul className="flex flex-col gap-6 flex-1 mb-16">
              {[
                { en: 'Omnichannel proliferation from a single idea', cn: '锁定品牌风格。把设计规范变成专属 AI 模型，保证团队每次生成的图都不跑偏。' },
                { en: '0.1% optical detail control', cn: '死磕画面质感。精准控制光影和材质细节，直接输出能满足高奢标准的商用视觉。' },
                { en: 'FMCG agile proliferation factory', cn: '一键批量延展。只要敲定一张主图，就能让 AI 瞬间生成适配所有渠道的海报矩阵。' },
              ].map((item, idx) => (
                <li key={`local-${idx}`} className="flex items-start gap-5">
                  <div className="w-1.5 h-1.5 rounded-full bg-white/20 group-hover:bg-[#D5B667] transition-colors duration-500 mt-2.5 flex-shrink-0" />
                  <p className={`text-white/50 group-hover:text-white/90 transition-colors duration-500 leading-[1.8] ${isEn ? 'text-[15px] md:text-[16px] tracking-wide' : 'text-[15px] md:text-[16px] tracking-widest'}`}>
                    {isEn ? item.en : item.cn}
                  </p>
                </li>
              ))}
            </ul>

            {/* Bottom Pill */}
            <div className="mt-auto inline-flex self-start items-center gap-2.5 px-5 py-2.5 rounded-full bg-white/[0.02] border border-white/[0.04]">
              <div className="w-1.5 h-1.5 rounded-full bg-white/20 group-hover:bg-[#D5B667] transition-colors duration-500"></div>
              <span className="text-[12px] md:text-[13px] text-white/40 group-hover:text-white/90 uppercase font-bold tracking-[0.15em] font-sans transition-colors duration-500 mt-[1px]">
                {isEn ? 'STATUS: Assets generating...' : 'STATUS: 视觉资产生成中'}
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
