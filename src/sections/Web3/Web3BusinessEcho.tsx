import React from 'react';
import { motion } from 'motion/react';
import { useDictionary } from '../../hooks/useDictionary';

export const Web3BusinessEcho = () => {
  const { language } = useDictionary();
  const isEn = language === 'en';

  const data = isEn ? [
    { dim: "Access Conversion", pain: "Long KYC process causes user churn before card issuance", rx: "Psychological noise reduction: Progressive guidance & ritual", res: "+25% KYC Completion Rate" },
    { dim: "Reach Efficiency", pain: "High customer acquisition cost (CAC), lack of viral spots", rx: "Emotional ice-breaking: AIGC dynamic badges & social virality", res: "2X Community Reach Volume" },
    { dim: "Trust Loop", pain: "\"Black box\" of on-chain tx causes fear of large payments", rx: "Full-path transparency: Visual tracking of fund flows", res: "-40% Tx Inquiries" },
    { dim: "Consumption Flow", pain: "Assets idle in wallet, low consumption impulse", rx: "Desire awakening: AI-driven smart consumption recommendations", res: "+15% Payment Frequency" },
    { dim: "Delivery & Ops", pain: "High cross-platform adaptation & collaboration costs", rx: "Semantic standards: Delivery-grade Design System", res: "-30% Development Costs" }
  ] : [
    { dim: "准入转化", pain: "KYC 流程冗长导致用户在开卡前流失", rx: "心理降噪：渐进式引导与仪式感", res: "+25% KYC完成率" },
    { dim: "传播能效", pain: "社交获客成本（CAC）高，缺乏传播点", rx: "情感破冰：AIGC 动态勋章与社交裂变", res: "2X 社区传播声量" },
    { dim: "信任闭环", pain: "链上交易“黑盒感”导致不敢大额支付", rx: "全路径透明：资金流向可视化追踪", res: "-40% 交易咨询量" },
    { dim: "消费流转", pain: "资产沉淀在钱包，缺乏消费冲动", rx: "意愿唤醒：AI 驱动的消费场景智能推荐", res: "+15% 支付频次" },
    { dim: "交付运维", pain: "跨端适配与协同成本高", rx: "语义化标准：交付级 Design System", res: "-30% 开发成本" }
  ];

  const headers = isEn ? ["Growth Dimension", "Business Pain Point", "Design Prescription", "Core Result"] : ["增长维度", "业务痛点", "设计处方", "核心结果"];

  return (
    <section className="relative w-full bg-black flex flex-col pt-16 pb-24 px-[24px] md:px-[60px] lg:px-[80px]">
      
      {/* Title Area */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="w-full flex flex-col items-center text-center mb-16"
      >
        <h2 className={`uppercase w-full ${isEn ? 'text-[clamp(26px,5vw,52px)] font-extrabold font-sans tracking-tighter leading-[1.05]' : 'text-[clamp(26px,4vw,48px)] font-bold font-sans tracking-tighter leading-[1.2]'}`}>
          {isEn ? (
            <>Commercial Resonance<br />Design-Driven Value Loop</>
          ) : (
            <>商业回响<br />设计驱动的价值闭环</>
          )}
        </h2>
        
        <h3 className={`mt-6 text-white/90 ${isEn ? 'text-lg font-medium tracking-tight' : 'text-xl font-medium tracking-wide'}`}>
          {isEn ? "Turning design from \"visual decoration\" into a quantifiable growth engine." : "让设计脱离“视觉装饰”，转化为可量化的增长引擎。"}
        </h3>
        
        <p className={`mt-6 max-w-[820px] px-[20px] md:px-0 text-white/70 text-center ${isEn ? 'font-sans font-light tracking-[0.015em] leading-[1.6] text-[16px]' : 'font-sans font-light tracking-[0.03em] leading-[1.8] text-[16px]'}`}>
          {isEn ? 
            "All brand ice-breaking and interaction noise reduction must ultimately return to commercial value. This dashboard quantifies how design penetrates the business funnel through the logic of \"Motivation—Action—Result\". We build a solid commercial moat for Crydit across core dimensions such as access conversion, communication efficiency, and delivery operations." :
            "所有的品牌破冰与交互降噪，最终都必须回归商业价值。本看板通过“动机—行动—结果”的逻辑，量化呈现了设计如何深入业务漏斗。我们在准入转化、传播能效及交付运维等核心维度，为 Crydit 构建起坚实的商业护城河。"
          }
        </p>
      </motion.div>

      {/* Data Table Area */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        className="w-full lg:w-[calc(100%-400px)] mx-auto rounded-[32px] bg-white/[0.02] backdrop-blur-3xl border border-white/10 overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] p-4 md:p-8 relative"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-white/[0.02] to-transparent pointer-events-none" />
        <div className="w-full overflow-x-auto relative z-10">
          <table className="w-full text-left border-collapse min-w-[900px]">
            <thead>
              <tr className="border-b border-white/10 text-white/40 text-[13px] md:text-[14px] tracking-widest uppercase font-medium">
                <th className="py-8 pl-8 pr-6 font-sans font-medium w-[20%]">{headers[0]}</th>
                <th className="py-8 px-6 font-sans font-medium w-[30%]">{headers[1]}</th>
                <th className="py-8 px-6 font-sans font-medium w-[30%]">{headers[2]}</th>
                <th className="py-8 pr-8 pl-6 font-sans font-medium w-[20%] text-right">{headers[3]}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5 text-white/90">
              {data.map((row, index) => (
                <tr key={index} className="hover:bg-white/[0.03] transition-colors duration-500 group">
                  <td className="py-10 pl-8 pr-6 text-[15px] md:text-[17px] font-bold tracking-wide group-hover:text-white transition-colors">{row.dim}</td>
                  <td className="py-10 px-6 text-[15px] md:text-[16px] font-light text-white/60 leading-relaxed pr-12">{row.pain}</td>
                  <td className="py-10 px-6 text-[15px] md:text-[16px] font-normal tracking-wide pl-2"><span className="text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]">{row.rx.split('：')[0]}{row.rx.includes('：') ? '：' : row.rx.includes(':') ? ':' : ''}</span>{row.rx.includes('：') ? <span className="text-white/50">{row.rx.split('：')[1]}</span> : row.rx.includes(':') ? <span className="text-white/50">{row.rx.split(':')[1]}</span> : null}</td>
                  <td className="py-10 pr-8 pl-6 text-[16px] md:text-[18px] font-bold text-right whitespace-nowrap !text-white">{row.res}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>

    </section>
  );
};
