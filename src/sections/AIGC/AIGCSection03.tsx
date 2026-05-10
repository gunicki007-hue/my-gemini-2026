import React from 'react';
import { motion } from 'motion/react';
import { useDictionary } from '../../hooks/useDictionary';
import { CreditCard, Database, RefreshCcw, Shield, BarChart3, JapaneseYen, Info } from 'lucide-react';

export const AIGCSection03 = () => {
  const { language } = useDictionary();
  const isEn = language === 'en';

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } },
  };

  return (
    <section className="relative w-full bg-[#050505] z-30">
      <div className="w-full grid grid-cols-1 lg:grid-cols-10 items-start px-6 md:px-[60px] lg:px-[80px] gap-12 lg:gap-20">
        
        {/* Left Content - Sticky */}
        <div className="col-span-1 lg:col-span-4 flex flex-col justify-center h-screen sticky top-0 shrink-0 z-10">
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="w-full flex flex-col pt-24 lg:pt-0"
          >
            <motion.div variants={itemVariants} className="flex items-center gap-4 mb-6 lg:mb-8 self-start">
              <div className="w-12 md:w-16 h-[1px] bg-[#D5B667]/50" />
              <h4 className="text-[#D5B667] tracking-tighter text-[12px] md:text-[14px] uppercase font-sans font-bold">
                {isEn ? 'CASE 01 · DESIGN EXECUTION' : '案例 01 · AI设计执行'}
              </h4>
            </motion.div>
            <motion.h2 
              variants={itemVariants}
              className={`uppercase w-full mb-6 lg:mb-8 text-white text-[28px] md:text-[36px] xl:text-[44px] font-extrabold tracking-tighter leading-[1.1] ${isEn ? 'font-sans' : 'font-puhuiti'}`}
            >
              {isEn ? (
                <>AI Full-Link<br />Design Execution</>
              ) : (
                <>AI 全链路设计执行</>
              )}
            </motion.h2>

            <motion.div variants={itemVariants} className={`space-y-6 text-white/70 ${isEn ? 'font-sans font-light tracking-[0.015em] leading-[1.6] text-[14px]' : 'font-sans font-light tracking-[0.03em] leading-[1.8] text-[13px] xl:text-[14px]'}`}>
              <p className="font-bold text-white/80">
                {isEn ? (
                  "I used AI as a design assistant throughout the whole process to build an efficient personal design workflow."
                ) : (
                  "我全程以 AI 作为设计助理，搭建高效个人设计工作流。"
                )}
              </p>
              
              <ol className="space-y-4 list-decimal list-inside pl-1">
                <li className="pl-1">
                  {isEn ? 'First, I sorted out the pain points of the original product, finalized the AI upgrade direction and interaction logic;' : '我先梳理原有产品痛点、敲定 AI 升级方向与交互逻辑；'}
                </li>
                <li className="pl-1">
                  {isEn ? 'Then with the help of AI tools, I completed the optimization idea sorting and interaction path reconstruction. Relying on Figma+AI design plugins, inputting the original visual specifications and functional requirements, AI generated the first drafts of PC UI interfaces, tiered reminder pop-ups, intelligent shortcut modules, etc;' : '再借助 AI 工具完成优化思路梳理、交互路径重构，依托 Figma+AI 设计插件，输入原有视觉规范与功能需求，由 AI 生成 PC 端 UI 界面、分级提醒弹窗、智能快捷模块等设计初稿；'}
                </li>
                <li className="pl-1">
                  {isEn ? 'Finally, I controlled the rationality of interaction logic, the unity of visual hierarchy, and the visual expression of financial security, fine-tuned the AI output content to ensure the overall style perfectly matched the original product, and independently completed all design work from conception to visual implementation.' : '最终由我把控交互逻辑合理性、视觉层级统一性、金融安全视觉表达，精细化调整 AI 产出内容，确保整体风格与原产品完全契合，独立完成从构思到视觉落地的全部设计工作。'}
                </li>
              </ol>
            </motion.div>
          </motion.div>
        </div>

        {/* Right Content - Scrolling list of 6 items */}
        <div className="col-span-1 lg:col-span-6 w-full flex flex-col py-12 lg:py-[15vh] gap-12 lg:gap-[calc(30vh-80px)]">
          {/* Item 1 - Table */}
          <motion.div
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true, margin: "-100px" }}
             transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
             className="w-full bg-[#111111] rounded-xl overflow-hidden border border-white/5"
          >
            <div className="w-full flex flex-col p-6 md:p-8 lg:p-10 text-[10px]">
              {/* Header */}
              <div className="text-center mb-8 md:mb-10">
                <h3 className="text-white text-[8px] md:text-[8px] font-bold tracking-widest">{isEn ? '5-Step SOP Workflow' : '5步跑通SOP 工作流'}</h3>
              </div>
              
              {/* Table Header */}
              <div className="hidden md:grid grid-cols-4 gap-4 mb-4 text-white/50 text-[8px] font-medium tracking-wide">
                <div></div>
                <div>SKILLS/MODEL</div>
                <div>{isEn ? 'OUTPUT' : '产出'}</div>
                <div>{isEn ? 'PURPOSE' : '目的'}</div>
              </div>

              {/* Table Body */}
              <div className="flex flex-col gap-6 md:gap-4">
                {[
                  {
                    step: "01",
                    title: "需求分析",
                    enTitle: "Requirement Analysis",
                    skillType: "PM-Skills",
                    skills: ["Opportunity Solution Tree"],
                    output: ["思维导图"],
                    enOutput: ["Mind Map"],
                    purpose: ["精准定位用户痛点", "确认核心功能"],
                    enPurpose: ["Pinpoint user pain points", "Confirm core features"],
                  },
                  {
                    step: "02",
                    title: "MVP 功能规划",
                    enTitle: "MVP Planning",
                    skillType: "PM-Skills",
                    skills: ["Kano Model"],
                    output: ["功能评估表"],
                    enOutput: ["Feature Eval Table"],
                    purpose: ["二次确认核心功能", "清晰规划第一次开发边界"],
                    enPurpose: ["Re-confirm core features", "Define dev boundaries"],
                  },
                  {
                    step: "03",
                    title: "逻辑异常梳理",
                    enTitle: "Logic & Exceptions",
                    skillType: "PM-Skills",
                    skills: ["System Design", "User Journey"],
                    output: ["交互流程图"],
                    enOutput: ["Interaction Flow"],
                    purpose: ["把断网报错等极端情况梳理清楚", "让产品等底层逻辑更加严密"],
                    enPurpose: ["Clarify edge cases like errors", "Make underlying logic solid"],
                  },
                  {
                    step: "04",
                    title: "低保真原型搭建",
                    enTitle: "Lo-Fi Prototyping",
                    skillType: "PM-Skills",
                    skills: ["User Story"],
                    output: ["工具自动跑通", "能点击交互的低保真原型"],
                    enOutput: ["Auto-run via tools", "Clickable lo-fi prototype"],
                    purpose: ["快速跑通页面的版面布局", "大幅提升绘制原型的效率"],
                    enPurpose: ["Quickly test layouts", "Improve prototyping efficiency"],
                  },
                  {
                    step: "05",
                    title: "高保真视觉输出",
                    enTitle: "Hi-Fi Visuals",
                    skillType: "UI-Skills",
                    skills: ["shadcn-ui skills", "Apple HIG skills"],
                    output: ["IOS质感高保真界面"],
                    enOutput: ["iOS-style Hi-Fi UI"],
                    purpose: ["交付落地"],
                    enPurpose: ["Final Delivery"],
                  }
                ].map((row, index) => (
                  <div key={index} className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-4 items-center border-b border-white/5 pb-6 md:pb-4 last:border-0 last:pb-0">
                    <div className="flex flex-row md:flex-col gap-4 md:gap-1 items-baseline md:items-start">
                      <div className="text-[10px] md:text-[8px] font-black text-white/20 italic font-sans">{row.step}</div>
                      <div className="text-white font-medium text-[11px] md:text-[10px]">{isEn ? row.enTitle : row.title}</div>
                    </div>
                    
                    <div className="flex flex-col gap-1">
                      <div className="md:hidden text-white/50 text-[8px] mb-1">SKILLS/MODEL</div>
                      <div className="text-[#D5B667] text-[11px] font-semibold">{row.skillType}</div>
                      {row.skills.map(s => <div key={s} className="text-white/80 text-[11px]">{s}</div>)}
                    </div>
                    
                    <div className="flex flex-col gap-1">
                      <div className="md:hidden text-white/50 text-[8px] mb-1">{isEn ? 'OUTPUT' : '产出'}</div>
                      {row.output.map((o, i) => <div key={i} className="text-white/80 text-[11px]">{isEn ? row.enOutput[i] : o}</div>)}
                    </div>
                    
                    <div className="flex flex-col gap-1">
                      <div className="md:hidden text-white/50 text-[8px] mb-1">{isEn ? 'PURPOSE' : '目的'}</div>
                      {row.purpose.map((p, i) => <div key={i} className="text-white/80 text-[11px]">{isEn ? row.enPurpose[i] : p}</div>)}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Item 2 */}
          <motion.div
             initial={{ opacity: 0, scale: 0.95 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true, margin: "-100px" }}
             transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
             className="w-full flex flex-col gap-3 md:gap-4"
          >
            <div className="w-full text-white/60 text-[8px] md:text-[10px] font-medium tracking-widest text-center">
              {isEn ? 'Mind Map & Pain Points Analysis' : '思维导图与痛点分析'}
            </div>
            <div className="w-full aspect-video bg-[#1a1a1a] rounded-xl overflow-hidden border border-white/5 flex items-center justify-center shadow-2xl">
              <img src="https://img.nickiresume.cn/0507/01.webp" alt="Design Execution 1" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
            </div>
          </motion.div>

          {/* Item 3 */}
          <motion.div
             initial={{ opacity: 0, scale: 0.95 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true, margin: "-100px" }}
             transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
             className="w-full flex flex-col gap-3 md:gap-4"
          >
            <div className="w-full text-white/60 text-[8px] md:text-[10px] font-medium tracking-widest text-center">
              {isEn ? 'Feature Evaluation & Core Features' : '功能评估圈定核心功能示例'}
            </div>
            <div className="w-full bg-[#111111] rounded-xl overflow-hidden border border-white/5 flex flex-col shadow-2xl">
              <div className="w-full overflow-x-auto">
                <table className="w-full text-left border-collapse min-w-[700px]">
                  <thead>
                    <tr className="border-b border-white/10 text-white/40 text-[10px] md:text-[11px] tracking-widest font-medium">
                      <th className="py-4 md:py-5 px-6 font-sans w-[35%]">{isEn ? 'Opportunity Space' : '机会空间'}</th>
                      <th className="py-4 md:py-5 px-4 font-sans text-center">
                        <div className="flex flex-col items-center">
                          <span>{isEn ? 'Importance (I)' : '重要性 (I)'}</span>
                          <span className="text-[8px] mt-0.5">(1-5)</span>
                        </div>
                      </th>
                      <th className="py-4 md:py-5 px-4 font-sans text-center">
                        <div className="flex flex-col items-center">
                          <span>{isEn ? 'Satisfaction (S)' : '现有满意度 (S)'}</span>
                          <span className="text-[8px] mt-0.5">(1-5)</span>
                        </div>
                      </th>
                      <th className="py-4 md:py-5 px-4 font-sans text-center">
                        <div className="flex flex-col items-center">
                          <span>{isEn ? 'Opp. Score (I×(1-S))' : '机会分 (I×(1-S))'}</span>
                          <span className="text-[8px] mt-0.5">(0-1)</span>
                        </div>
                      </th>
                      <th className="py-4 md:py-5 px-6 font-sans text-center">
                        <div className="flex flex-col items-center">
                          <span>{isEn ? 'Priority' : '优先级'}</span>
                          <span className="text-[8px] mt-0.5">(P)</span>
                        </div>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5 text-white/90">
                    {[
                      { icon: CreditCard, title: isEn ? "Global Card Payment" : "全球卡片支付", desc: isEn ? "Support online/offline spending, covering global merchants & scenarios" : "支持线上线下消费，覆盖全球商户与场景", i: "0.95", s: "0.20", score: "0.76", p: "P0", medal: "🥇", pColor: "text-white" },
                      { icon: Database, title: isEn ? "Fund Security & Compliance" : "资金安全与合规", desc: isEn ? "Protect user asset security, meet global compliance requirements" : "保障用户资产安全，符合全球合规要求", i: "0.90", s: "0.25", score: "0.68", p: "P1", medal: "🥈", pColor: "text-white/80" },
                      { icon: RefreshCcw, title: isEn ? "Crypto Asset Flow" : "加密资产流转", desc: isEn ? "USDT deposit & crypto account transfer, support multi-chain & cross-chain" : "U充值与加密账户互转，支持多链与跨链", i: "0.85", s: "0.30", score: "0.60", p: "P2", medal: "🥉", pColor: "text-white/60" },
                      { icon: Shield, title: isEn ? "Smart Risk Control & Anti-fraud" : "智能风控与反欺诈", desc: isEn ? "AI-driven risk engine, real-time monitoring & anomaly interception" : "AI驱动风控引擎，实时监控与异常拦截", i: "0.80", s: "0.30", score: "0.56", p: "P2", medal: null, pColor: "text-white/60" },
                      { icon: BarChart3, title: isEn ? "Tx Experience & Success Rate" : "交易体验与成功率", desc: isEn ? "High tx success rate, fast response, smooth & stable experience" : "支付成功率高，响应快，体验流畅稳定", i: "0.75", s: "0.35", score: "0.49", p: "P3", medal: null, pColor: "text-white/40" },
                      { icon: JapaneseYen, title: isEn ? "Fee & Exchange Rate Transparency" : "费用与汇率透明", desc: isEn ? "Reasonable & transparent fees, real-time optimal exchange rates" : "手续费合理透明，汇率实时最优", i: "0.65", s: "0.40", score: "0.39", p: "P3", medal: null, pColor: "text-white/40" },
                    ].map((row, idx) => (
                      <tr key={idx} className="hover:bg-white/[0.03] transition-colors duration-300">
                        <td className="py-5 md:py-6 px-6">
                          <div className="flex items-start gap-4">
                            <div className="text-[#E5B979] mt-0.5"><row.icon size={20} strokeWidth={1.5} /></div>
                            <div className="flex flex-col gap-1.5">
                              <span className="text-[12px] md:text-[13px] font-bold tracking-wide">{row.title}</span>
                              <span className="text-[9px] md:text-[10px] text-white/50 leading-snug font-light max-w-[280px]">{row.desc}</span>
                            </div>
                          </div>
                        </td>
                        <td className="py-5 md:py-6 px-4 text-center text-[12px] md:text-[13px] font-medium text-white/90">{row.i}</td>
                        <td className="py-5 md:py-6 px-4 text-center text-[12px] md:text-[13px] font-medium text-white/90">{row.s}</td>
                        <td className="py-5 md:py-6 px-4 text-center text-[13px] md:text-[15px] font-bold text-[#E5B979]">{row.score}</td>
                        <td className="py-5 md:py-6 px-6 text-center">
                          <div className={`flex items-center justify-center gap-1.5 font-bold ${row.pColor}`}>
                            {row.medal && <span className="text-[14px]">{row.medal}</span>}
                            <span>{row.p}</span>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="w-full bg-[#161616] py-3.5 px-6 border-t border-white/5 flex items-center gap-2 text-[9px] md:text-[10px] text-white/40 font-light">
                <Info size={14} className="opacity-70 flex-shrink-0" />
                <span className="truncate">{isEn ? 'Opportunity Score = Importance × (1 - Satisfaction) — Dan Olsen, The Lean Product Playbook' : '机会分公式：Opportunity Score = Importance × (1 - Satisfaction) — Dan Olsen, The Lean Product Playbook'}</span>
              </div>
            </div>
          </motion.div>

          {/* Item 4 */}
          <motion.div
             initial={{ opacity: 0, scale: 0.95 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true, margin: "-100px" }}
             transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
             className="w-full flex flex-col gap-3 md:gap-4"
          >
            <div className="w-full text-white/60 text-[8px] md:text-[10px] font-medium tracking-widest text-center">
              {isEn ? 'Interaction Flow & Edge Cases' : '交互流程与极端情况拆解'}
            </div>
            <div className="w-full aspect-video bg-[#1a1a1a] rounded-xl overflow-hidden border border-white/5 flex items-center justify-center shadow-2xl">
              <img src="https://img.nickiresume.cn/0507/uiwork.webp" alt="Design Execution 3" className="w-full h-full object-cover brightness-[.8]" referrerPolicy="no-referrer" />
            </div>
          </motion.div>

          {/* Item 5 */}
          <motion.div
             initial={{ opacity: 0, scale: 0.95 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true, margin: "-100px" }}
             transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
             className="w-full flex flex-col gap-3 md:gap-4"
          >
            <div className="w-full text-white/60 text-[8px] md:text-[10px] font-medium tracking-widest text-center">
              {isEn ? 'Lo-Fi & Interaction Bubbles' : '低保真与交互气泡'}
            </div>
            <div className="w-full aspect-video bg-[#1a1a1a] rounded-xl overflow-hidden border border-white/5 flex items-center justify-center shadow-2xl">
              <img src="https://img.nickiresume.cn/0507/AIUI.webp" alt="Design Execution 4" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
            </div>
          </motion.div>

          {/* Item 6 */}
          <motion.div
             initial={{ opacity: 0, scale: 0.95 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true, margin: "-100px" }}
             transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
             className="w-full flex flex-col gap-3 md:gap-4"
          >
            <div className="w-full text-white/60 text-[8px] md:text-[10px] font-medium tracking-widest text-center">
              {isEn ? 'Hi-Fi Visual Mockup' : '高保真效果图示例'}
            </div>
            <div className="w-full aspect-video bg-[#1a1a1a] rounded-xl overflow-hidden border border-white/5 flex items-center justify-center shadow-2xl">
              <img src="https://img.nickiresume.cn/0507/05.webp" alt="Design Execution 5" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Comparison Part */}
      <div className="w-full relative px-6 md:px-[60px] lg:px-[80px] pb-24 md:pb-32 pt-12 md:pt-24 mt-12 md:mt-0">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true, margin: "-100px" }}
           transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
           className="w-full flex flex-col items-center gap-[78px]"
        >
          <div className="flex flex-col items-center gap-6">
            {/* Golden Label */}
            <div className="flex items-center gap-4">
              <div className="w-12 md:w-16 h-[1px] bg-[#D5B667]/50" />
              <h4 className="text-[#D5B667] tracking-tighter text-[12px] md:text-[14px] uppercase font-sans font-bold">
                {isEn ? 'CASE 01 · REVIEW & SUMMARY' : '案例 01 · 复盘总结'}
              </h4>
              <div className="w-12 md:w-16 h-[1px] bg-[#D5B667]/50" />
            </div>

            <div className="text-center mb-[30px]">
              <h2 className="text-white text-[8px] md:text-[10px] lg:text-[8px] font-bold tracking-widest font-sans">
                {isEn ? 'Traditional Payment VS AI Native Payment Comparison' : '传统支付项目 VS AI Native 支付项目对比'}
              </h2>
            </div>
          </div>

          <div className="w-full grid grid-cols-1 xl:grid-cols-2 gap-8 md:gap-12">
            {/* Table 1 */}
            <div className="flex flex-col gap-4">
              <div className="w-full text-white/60 text-[8px] md:text-[10px] font-medium tracking-widest text-center">
                {isEn ? 'Product Experience Comparison' : '产品体验对比'}
              </div>
              <div className="w-full bg-white/[0.02] backdrop-blur-3xl border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] rounded-[32px] p-6 lg:p-8 relative overflow-x-auto h-full flex flex-col justify-center">
                <div className="absolute inset-0 bg-gradient-to-b from-white/[0.02] to-transparent pointer-events-none" />
                <table className="w-full h-full text-left border-collapse min-w-[500px] relative z-10">
                  <thead>
                    <tr className="border-b border-white/10 text-white/40 text-[10px] md:text-[11px] tracking-widest uppercase font-medium">
                      <th className="py-4 md:py-6 pl-2 pr-4 font-sans font-medium w-[20%]">{isEn ? 'Pain Point' : '痛点'}</th>
                      <th className="py-4 md:py-6 px-4 font-sans font-medium w-[30%] text-white/60">{isEn ? 'Old Experience' : '旧版体验'}</th>
                      <th className="py-4 md:py-6 pl-4 pr-2 font-sans font-medium w-[50%]">{isEn ? 'AI Upgraded Experience' : 'AI升级后体验'}</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5 text-white/90">
                    <tr className="hover:bg-white/[0.03] transition-colors duration-500 group">
                      <td className="py-6 md:py-8 pl-2 pr-4 text-[12px] md:text-[13px] font-bold tracking-wide group-hover:text-white transition-colors">{isEn ? 'Tedious ops' : '操作繁琐'}</td>
                      <td className="py-6 md:py-8 px-4 text-[12px] md:text-[13px] font-light text-white/60 leading-relaxed">{isEn ? 'Manual input & path selection' : '手动输入金额、选路径'}</td>
                      <td className="py-6 md:py-8 pl-4 pr-2 text-[12px] md:text-[13px] font-normal tracking-wide text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]">{isEn ? 'AI remembers amounts, generates shortcuts, reduces steps by 50%' : 'AI记忆常用金额，生成快捷选项，步骤减少50%'}</td>
                    </tr>
                    <tr className="hover:bg-white/[0.03] transition-colors duration-500 group">
                      <td className="py-6 md:py-8 pl-2 pr-4 text-[12px] md:text-[13px] font-bold tracking-wide group-hover:text-white transition-colors">{isEn ? 'High decision cost' : '决策成本高'}</td>
                      <td className="py-6 md:py-8 px-4 text-[12px] md:text-[13px] font-light text-white/60 leading-relaxed">{isEn ? 'Manual judgment of fee/network' : '手动判断手续费/网络'}</td>
                      <td className="py-6 md:py-8 pl-4 pr-2 text-[12px] md:text-[13px] font-normal tracking-wide text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]">{isEn ? 'AI proactively suggests optimal timing' : 'AI主动提示最优操作时机'}</td>
                    </tr>
                    <tr className="hover:bg-white/[0.03] transition-colors duration-500 group">
                      <td className="py-6 md:py-8 pl-2 pr-4 text-[12px] md:text-[13px] font-bold tracking-wide group-hover:text-white transition-colors">{isEn ? 'Weak risk perception' : '风险感知弱'}</td>
                      <td className="py-6 md:py-8 px-4 text-[12px] md:text-[13px] font-light text-white/60 leading-relaxed">{isEn ? 'Normal text warning' : '普通文字提醒'}</td>
                      <td className="py-6 md:py-8 pl-4 pr-2 text-[12px] md:text-[13px] font-normal tracking-wide text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]">{isEn ? 'Full-screen strong warning + 2FA for large/abnormal tx' : '大额/异常交易触发全屏强提醒+二次验证'}</td>
                    </tr>
                    <tr className="hover:bg-white/[0.03] transition-colors duration-500 group">
                      <td className="py-6 md:py-8 pl-2 pr-4 text-[12px] md:text-[13px] font-bold tracking-wide group-hover:text-white transition-colors">{isEn ? 'Hard to understand info' : '信息理解难'}</td>
                      <td className="py-6 md:py-8 px-4 text-[12px] md:text-[13px] font-light text-white/60 leading-relaxed">{isEn ? 'Pure data bills' : '纯数据账单'}</td>
                      <td className="py-6 md:py-8 pl-4 pr-2 text-[12px] md:text-[13px] font-normal tracking-wide text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]">{isEn ? 'AI translates to plain interpretation, reducing cost' : 'AI转化为通俗解读，降低理解成本'}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Table 2 */}
            <div className="flex flex-col gap-4">
              <div className="w-full text-white/60 text-[8px] md:text-[10px] font-medium tracking-widest text-center">
                {isEn ? 'Product Global Comparison' : '产品全局对比'}
              </div>
              <div className="w-full bg-white/[0.02] backdrop-blur-3xl border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] rounded-[32px] p-6 lg:p-8 relative overflow-x-auto h-full flex flex-col justify-center">
                <div className="absolute inset-0 bg-gradient-to-b from-white/[0.02] to-transparent pointer-events-none" />
                <table className="w-full h-full text-left border-collapse min-w-[500px] relative z-10">
                  <thead>
                    <tr className="border-b border-white/10 text-white/40 text-[10px] md:text-[11px] tracking-widest uppercase font-medium">
                      <th className="py-4 md:py-6 pl-2 pr-4 font-sans font-medium w-[20%]">{isEn ? 'Dimension' : '维度'}</th>
                      <th className="py-4 md:py-6 px-4 font-sans font-medium w-[40%] text-white/60">{isEn ? 'Traditional Payment' : '传统支付项目'}</th>
                      <th className="py-4 md:py-6 pl-4 pr-2 font-sans font-medium w-[40%]">{isEn ? 'AI Native Payment' : 'AI Native 支付项目'}</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5 text-white/90">
                    <tr className="hover:bg-white/[0.03] transition-colors duration-500 group">
                      <td className="py-6 md:py-8 pl-2 pr-4 text-[12px] md:text-[13px] font-bold tracking-wide group-hover:text-white transition-colors">{isEn ? 'Product Arch' : '产品架构'}</td>
                      <td className="py-6 md:py-8 px-4 text-[12px] md:text-[13px] font-light text-white/60 leading-relaxed">{isEn ? 'Rigid structure, fragmented modules, traditional stacking' : '结构固化，模块割裂，整体偏向传统功能堆叠'}</td>
                      <td className="py-6 md:py-8 pl-4 pr-2 text-[12px] md:text-[13px] font-normal tracking-wide text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]">{isEn ? 'AI as native foundation, integrated full-link connection' : 'AI作为底层原生架构，整体链路一体化联动'}</td>
                    </tr>
                    <tr className="hover:bg-white/[0.03] transition-colors duration-500 group">
                      <td className="py-6 md:py-8 pl-2 pr-4 text-[12px] md:text-[13px] font-bold tracking-wide group-hover:text-white transition-colors">{isEn ? 'Iteration Mode' : '迭代模式'}</td>
                      <td className="py-6 md:py-8 px-4 text-[12px] md:text-[13px] font-light text-white/60 leading-relaxed">{isEn ? 'Long cycles, fully manual requirement sorting' : '迭代周期长，需求梳理全靠人工，优化滞后'}</td>
                      <td className="py-6 md:py-8 pl-4 pr-2 text-[12px] md:text-[13px] font-normal tracking-wide text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]">{isEn ? 'Flexible & efficient, fast iteration via AI assistance' : '迭代灵活高效，依托智能辅助快速梳理需求、迭代方案'}</td>
                    </tr>
                    <tr className="hover:bg-white/[0.03] transition-colors duration-500 group">
                      <td className="py-6 md:py-8 pl-2 pr-4 text-[12px] md:text-[13px] font-bold tracking-wide group-hover:text-white transition-colors">{isEn ? 'Risk Handling' : '风险处理'}</td>
                      <td className="py-6 md:py-8 px-4 text-[12px] md:text-[13px] font-light text-white/60 leading-relaxed">{isEn ? 'Passive control, post-event review, lacks preview' : '被动式风控，事后问题复盘，缺少前置预判'}</td>
                      <td className="py-6 md:py-8 pl-4 pr-2 text-[12px] md:text-[13px] font-normal tracking-wide text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]">{isEn ? 'Proactive smart risk control, early identification' : '全链路前置智能风控，提前识别规避业务隐患'}</td>
                    </tr>
                    <tr className="hover:bg-white/[0.03] transition-colors duration-500 group">
                      <td className="py-6 md:py-8 pl-2 pr-4 text-[12px] md:text-[13px] font-bold tracking-wide group-hover:text-white transition-colors">{isEn ? 'Expansion Cap.' : '拓展能力'}</td>
                      <td className="py-6 md:py-8 px-4 text-[12px] md:text-[13px] font-light text-white/60 leading-relaxed">{isEn ? 'Weak adaptation, limited personalization' : '场景适配弱，个性化调整空间小，扩展性有限'}</td>
                      <td className="py-6 md:py-8 pl-4 pr-2 text-[12px] md:text-[13px] font-normal tracking-wide text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]">{isEn ? 'High compatibility, on-demand personalization' : '场景兼容度高，可按需做个性化适配，延展性强'}</td>
                    </tr>
                    <tr className="hover:bg-white/[0.03] transition-colors duration-500 group">
                      <td className="py-6 md:py-8 pl-2 pr-4 text-[12px] md:text-[13px] font-bold tracking-wide group-hover:text-white transition-colors">{isEn ? 'Design Logic' : '设计逻辑'}</td>
                      <td className="py-6 md:py-8 px-4 text-[12px] md:text-[13px] font-light text-white/60 leading-relaxed">{isEn ? 'Business-centric, lacks global experience control' : '以业务功能为核心，缺少全局体验统筹'}</td>
                      <td className="py-6 md:py-8 pl-4 pr-2 text-[12px] md:text-[13px] font-normal tracking-wide text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]">{isEn ? 'Dual dimension: full-link experience + business value' : '以用户全链路体验+业务价值双重维度做统筹'}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
      {/* Review & Summary Part */}
      <div className="w-full relative px-6 md:px-[60px] lg:px-[80px] pt-32 pb-24 md:pt-48 md:pb-32">
        <div className="w-full grid grid-cols-1 lg:grid-cols-10 items-center gap-12 lg:gap-20">
          
          {/* Left Column (Text) */}
          <div className="col-span-1 lg:col-span-4 flex flex-col z-10 w-full shrink-0">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="flex items-center gap-4 mb-6 lg:mb-8 self-start"
            >
              <div className="w-12 md:w-16 h-[1px] bg-[#D5B667]/50" />
              <h4 className="text-[#D5B667] tracking-tighter text-[12px] md:text-[14px] uppercase font-sans font-bold">
                {isEn ? 'CASE 01 · UIUX REVIEW & SUMMARY' : '01 · UIUX 心得沉淀'}
              </h4>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className={`w-full mb-6 lg:mb-8 text-white text-[28px] md:text-[36px] xl:text-[44px] font-extrabold tracking-tighter leading-[1.1] ${isEn ? 'font-sans' : 'font-puhuiti'}`}
            >
              {isEn ? 'Traditional Workflow vs Code Agent Workflow' : '传统工作流 vs Code Agent 工作流'}
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className={`space-y-6 text-white/70 ${isEn ? 'font-sans font-light tracking-[0.015em] leading-[1.6] text-[14px]' : 'font-sans font-light tracking-[0.03em] leading-[1.8] text-[13px] xl:text-[14px] text-justify'}`}
            >
              <p>
                {isEn ? (
                  "Through this personal simulation project, after comparing two product plans and two workflows, the efficiency advantage of AI Code Agent tools on execution-level work is obvious."
                ) : (
                  "通过本次个人模拟项目，对比跑完两套产品方案与两种工作流之后，能明显感受到AI Code Agent类工具对执行层工作的提效优势。"
                )}
              </p>
              <p>
                {isEn ? (
                  "It's also clearer: AI is an efficient auxiliary carrier that can highly improve execution efficiency, but in overall project business judgement, direction control, risk detection, and plan trade-offs, how to control decisions is the core key. In my practice, I have also developed a rhythm for human-machine collaboration, summarized reusable standard workflow methods, and upgraded my experience transfer capabilities."
                ) : (
                  "同时也更加清晰：AI是高效的辅助载体，能高速提升执行效率，但在项目整体的业务判断、方向把控、风险甄别、方案取舍，如何把控决策才是核心关键。我在实操中同时磨合出了人机协作的节奏，也沉淀出可以复用的标准化工作流方法，升级了经验迁移的能力。"
                )}
              </p>
            </motion.div>
          </div>

          {/* Right Column (Table) */}
          <div className="col-span-1 lg:col-span-6 flex flex-col relative z-0">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="w-full flex flex-col gap-3 md:gap-4"
            >
              <div className="w-full text-white/60 text-[8px] md:text-[10px] font-medium tracking-widest text-center">
                {isEn ? 'Workflow Comparison' : '工作流横向对比'}
              </div>
              
              <div className="w-full bg-white/[0.02] backdrop-blur-3xl border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] rounded-[32px] p-6 lg:p-8 xl:p-10 relative overflow-x-auto flex flex-col justify-center">
                <div className="absolute inset-0 bg-gradient-to-b from-white/[0.02] to-transparent pointer-events-none" />
                <table className="w-full text-left border-collapse min-w-[600px] relative z-10">
                  <thead>
                    <tr className="border-b border-white/10 text-white/40 text-[10px] md:text-[12px] tracking-widest uppercase font-medium">
                      <th className="py-4 md:py-6 pl-4 pr-4 font-sans font-medium w-[20%]">{isEn ? 'Dimension' : '对比维度'}</th>
                      <th className="py-4 md:py-6 px-4 font-sans font-medium w-[40%] text-white/60">{isEn ? 'Traditional Manual Workflow' : '传统人工工作流'}</th>
                      <th className="py-4 md:py-6 pl-4 pr-4 font-sans font-medium w-[40%]">{isEn ? 'AI Code Agent Workflow' : 'AI Code Agent 智能工作流'}</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5 text-white/90">
                    <tr className="hover:bg-white/[0.03] transition-colors duration-500 group">
                      <td className="py-6 md:py-8 pl-4 pr-4 text-[12px] md:text-[13px] font-bold tracking-wide group-hover:text-white transition-colors">{isEn ? 'Basic Work' : '基础工作'}</td>
                      <td className="py-6 md:py-8 px-4 text-[11px] md:text-[12px] font-light text-white/60 leading-relaxed">{isEn ? 'All done manually, repetitive tasks take long' : '全部人工手动完成，重复事务耗时长'}</td>
                      <td className="py-6 md:py-8 pl-4 pr-4 text-[11px] md:text-[12px] font-normal tracking-wide text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]">{isEn ? 'AI takes over repetitive writing, screening, sorting work' : 'AI承接基础编写、筛查、整理类重复工作'}</td>
                    </tr>
                    <tr className="hover:bg-white/[0.03] transition-colors duration-500 group">
                      <td className="py-6 md:py-8 pl-4 pr-4 text-[12px] md:text-[13px] font-bold tracking-wide group-hover:text-white transition-colors">{isEn ? 'Imp. Efficiency' : '落地效率'}</td>
                      <td className="py-6 md:py-8 px-4 text-[11px] md:text-[12px] font-light text-white/60 leading-relaxed">{isEn ? 'Tedious process, high trial error cost, long cycle' : '流程繁琐，试错成本高，整体周期冗长'}</td>
                      <td className="py-6 md:py-8 pl-4 pr-4 text-[11px] md:text-[12px] font-normal tracking-wide text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]">{isEn ? 'Significantly reduces time in basic links, overall efficiency improved' : '大幅压缩基础环节耗时，整体效率显著提升'}</td>
                    </tr>
                    <tr className="hover:bg-white/[0.03] transition-colors duration-500 group">
                      <td className="py-6 md:py-8 pl-4 pr-4 text-[12px] md:text-[13px] font-bold tracking-wide group-hover:text-white transition-colors">{isEn ? 'Adjustment' : '调整优化'}</td>
                      <td className="py-6 md:py-8 px-4 text-[11px] md:text-[12px] font-light text-white/60 leading-relaxed">{isEn ? 'High modification cost, iteration takes a lot of effort' : '修改成本高，迭代调整耗费大量精力'}</td>
                      <td className="py-6 md:py-8 pl-4 pr-4 text-[11px] md:text-[12px] font-normal tracking-wide text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]">{isEn ? 'Quickly generate drafts, easier modification and iteration' : '快速生成初稿，修改迭代更轻便'}</td>
                    </tr>
                    <tr className="hover:bg-white/[0.03] transition-colors duration-500 group">
                      <td className="py-6 md:py-8 pl-4 pr-4 text-[12px] md:text-[13px] font-bold tracking-wide group-hover:text-white transition-colors">{isEn ? 'Core Driven' : '核心主导'}</td>
                      <td className="py-6 md:py-8 px-4 text-[11px] md:text-[12px] font-light text-white/60 leading-relaxed">{isEn ? 'Full process manned by humans, energy distracted by trivial work' : '全流程人力包揽，精力被琐碎工作分散'}</td>
                      <td className="py-6 md:py-8 pl-4 pr-4 text-[11px] md:text-[12px] font-normal tracking-wide text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]">{isEn ? 'AI handles execution, humans focus on direction, decision, quality control' : 'AI负责执行落地，人专注方向、决策、质量把控'}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
