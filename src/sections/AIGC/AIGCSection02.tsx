import React from 'react';
import { motion } from 'motion/react';
import { useDictionary } from '../../hooks/useDictionary';
import { 
  User, UserPlus, BadgeCheck, ShieldCheck, LockKeyhole, Home, PieChart, 
  Network, CreditCard, Wallet, ClipboardList, ArrowRightLeft, Receipt, BarChart3,
  Bot
} from 'lucide-react';

export const AIGCSection02 = () => {
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

  const nodesTop = [
    { id: '01', icon: User, title: isEn ? 'User Entry' : '用户入口' },
    { id: '02', icon: UserPlus, title: isEn ? 'Acc. Reg.' : '账号注册' },
    { id: '03', icon: BadgeCheck, title: isEn ? 'KYC' : 'KYC 实名认证',
      ai: [isEn ? 'AI Portrait Verification' : 'AI智能人像核验', isEn ? 'Data Risk Screening (AI Opt)' : '资料风险筛查（AI优化）'] },
    { id: '04', icon: ShieldCheck, title: isEn ? 'Sec. Audit' : '账号安全审核' },
    { id: '05', icon: LockKeyhole, title: isEn ? 'Acc. Login' : '账号登录',
      ai: [isEn ? 'AI Risk Monitoring' : 'AI风控监测', isEn ? 'Anomaly Recognition (AI Opt)' : '异常登录识别（AI优化）'] },
    { id: '06', icon: Home, title: isEn ? 'Personal Home' : '个人中心主页' },
    { id: '07', icon: PieChart, title: isEn ? 'Credit Limit' : '授信额度开通' },
  ];

  const nodesBottom = [
    { id: '08', icon: Network, title: isEn ? 'Fund Access' : '资金通道接入',
      ai: [isEn ? 'AI Fund Routing' : 'AI智能资金调用', isEn ? 'Link Throttle Opt (AI Opt)' : '链路节流优化（AI优化）'] },
    { id: '09', icon: CreditCard, title: isEn ? 'Card Binding' : '银行卡绑定',
      ai: [isEn ? 'AI Anti-Fraud Alert' : 'AI反诈预警', isEn ? 'Info Security Check (AI Opt)' : '信息安全校验（AI优化）'] },
    { id: '10', icon: Wallet, title: isEn ? 'Asset Mgt' : '个人账户资产管理' },
    { id: '11', icon: ClipboardList, title: isEn ? 'Gen. Order' : '生成消费订单' },
    { id: '12', icon: ArrowRightLeft, title: isEn ? 'Tx. Payment' : '交易支付',
      ai: [isEn ? 'AI Tx Matching' : 'AI智能交易匹配', isEn ? 'Tx Risk Control (AI Opt)' : '交易风险管控（AI优化）'] },
    { id: '13', icon: Receipt, title: isEn ? 'Bill Settlement' : '账单结算' },
    { id: '14', icon: BarChart3, title: isEn ? 'Data Review' : '数据回流复盘' },
  ];

  return (
    <section className="sticky top-0 w-full h-screen bg-[#050505] overflow-hidden z-20">
      <div className="w-full h-full flex items-center justify-center px-6 md:px-[60px] lg:px-[80px]">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="w-full grid grid-cols-1 lg:grid-cols-10 gap-12 lg:gap-20 items-center"
        >
          {/* Left Content */}
          <div className="col-span-1 lg:col-span-4 flex flex-col z-10 w-full shrink-0">
            <motion.div variants={itemVariants} className="flex items-center gap-4 mb-6 lg:mb-8 self-start">
              <div className="w-12 md:w-16 h-[1px] bg-[#D5B667]/50" />
              <h4 className="text-[#D5B667] tracking-tighter text-[14px] md:text-[16px] uppercase font-sans font-bold">
                {isEn ? 'CASE 01 · DESIGN THINKING' : '案例 01 · 设计思考'}
              </h4>
            </motion.div>
            <motion.h2 
              variants={itemVariants}
              className={`uppercase w-full mb-6 lg:mb-8 text-white text-[30px] md:text-[38px] xl:text-[46px] font-extrabold tracking-tighter leading-[1.1] ${isEn ? 'font-sans' : 'font-puhuiti'}`}
            >
              {isEn ? (
                <>Design Definition<br />& Thinking</>
              ) : (
                <>设计定义与思考</>
              )}
            </motion.h2>

            <motion.div variants={itemVariants} className={`space-y-6 text-white/70 ${isEn ? 'font-sans font-light tracking-[0.015em] leading-[1.6] text-[16px]' : 'font-sans font-light tracking-[0.03em] leading-[1.8] text-[15px] xl:text-[16px]'}`}>
              <p>
                {isEn ? (
                  <>For this upgrade, I chose not to overhaul the original product framework, <strong className="text-white font-bold">adhering strictly to the design bottom line: Safety first for financial products:</strong></>
                ) : (
                  <>本次升级我选择不推翻原有产品框架，<strong className="text-white font-bold">坚守资金类产品安全第一的设计底线：</strong></>
                )}
              </p>
              
              <ul className="space-y-4">
                <li>
                  {isEn ? '• All operations involving fund transfers and top-ups are entirely left to users\' independent decision-making. AI NEVER substitutes users in executing any fund-related operations.' : '• 所有涉及资金划转充值的操作，全权交由用户自主决策，AI 绝不替代用户执行任何资金相关操作'}
                </li>
                <li>
                  {isEn ? '• For large transactions, strong reminders + secondary verification are reinforced to comprehensively guarantee users\' sense of fund security.' : '• 大额交易时强化强提醒+二次验证，全方位保障用户资金安全感'}
                </li>
                <li>
                  {isEn ? '• AI only does 3 things: simplifies & assists with repetitive operations, provides tiered risk warnings, and popularizes data interpretation.' : '• AI仅做3件事：简化辅助重复操作、分级风险提示、通俗化数据解读'}
                </li>
                <li>
                  {isEn ? '• Extend and upgrade based on original visual guidelines to ensure the continuity and consistency of product experience.' : '• 基于原有视觉规范延展升级，保证产品体验的连贯性与一致性。'}
                </li>
              </ul>
            </motion.div>
          </div>

          {/* Right Content - Diagram */}
          <motion.div
             variants={itemVariants}
             className="col-span-1 lg:col-span-6 w-full flex flex-col items-center gap-6"
          >
            {/* Title above diagram */}
            <div className="w-full text-center text-white/40 text-[11px] md:text-[12px] tracking-widest font-sans font-medium uppercase">
              {isEn ? 'Business Full-Chain Flow & AI Optimization Nodes' : '商业全链路流程图与 AI 优化节点'}
            </div>
            
            <div className="w-full bg-[#111] rounded-2xl border border-white/5 p-6 xl:p-8 flex flex-col items-center overflow-x-auto shadow-2xl relative">
              {/* Diagram Container */}
              <div className="min-w-[800px] w-full flex flex-col z-10 px-6 relative">
    
                {/* ==== TOP SECTION ==== */}
                <div className="w-full relative">
                  {/* Top Right Connecting Curve */}
                  <div className="absolute top-[49.5px] bottom-0 right-[-24px] w-[24px] border-t border-r border-[#E5B979]/30 rounded-tr-[16px] z-0" />
                  
                  {/* TOP NODES */}
                  <div className="grid grid-cols-7 gap-4 w-full relative z-10 h-[100px]">
                    {nodesTop.map((node, i) => (
                       <div key={node.id} className="flex relative items-center justify-center w-full h-full">
                          <div className="bg-[#1C1C1C] border border-white/5 rounded-xl p-2 w-full h-[100px] flex flex-col items-center justify-center gap-1 relative z-10 hover:bg-white/[0.03] transition-colors">
                             <span className="text-[10px] text-white/30 font-mono">{node.id}</span>
                             <node.icon size={20} className="text-[#E5B979]" strokeWidth={1.5} />
                             <span className="text-[9px] text-white/80 text-center leading-tight mt-1">{node.title}</span>
                             
                             {/* Internal Right Arrow */}
                             {i < 6 && (
                                <div className="absolute top-[49.5px] -right-[16px] w-[16px] flex items-center z-0">
                                   <div className="h-[1px] bg-[#E5B979]/30 flex-1" />
                                   <div className="w-0 h-0 border-y-[3.5px] border-y-transparent border-l-[5px] border-l-[#E5B979]/30" />
                                </div>
                             )}
                          </div>
                       </div>
                    ))}
                  </div>

                  {/* TOP AI BOXES */}
                  <div className="grid grid-cols-7 gap-4 w-full mt-4 relative z-10">
                    {nodesTop.map((node) => (
                       <div key={`ai-${node.id}`} className="flex flex-col items-center">
                          {node.ai ? (
                             <>
                               <div className="w-[1px] h-6 border-l border-dashed border-[#E5B979]/30 relative shrink-0">
                                 <div className="absolute -bottom-[2px] left-[-3px] w-0 h-0 border-x-[2.5px] border-x-transparent border-t-[4px] border-t-[#E5B979]/50" />
                               </div>
                               <div className="bg-[#1C1C1C] border border-[#E5B979]/20 rounded-md p-2 w-[110px] shadow-lg text-left relative z-10 flex flex-col gap-1 mt-1">
                                  <div className="bg-[#E5B979]/20 rounded px-1 py-0.5 w-fit flex items-center justify-center">
                                    <span className="text-[#E5B979] text-[7px] font-bold">AI</span>
                                  </div>
                                  <ul className="flex flex-col gap-0.5 text-[9px] text-white/70 leading-tight">
                                    {node.ai.map((text, idx) => <li key={idx} className="whitespace-normal">• {text}</li>)}
                                  </ul>
                               </div>
                             </>
                          ) : (
                             <div className="w-full h-full" />
                          )}
                       </div>
                    ))}
                  </div>
                </div>

                {/* ==== MIDDLE SPACER ==== */}
                <div className="w-full relative h-[40px] my-[16px]">
                   <div className="absolute top-0 right-[-24px] h-[20.5px] w-[calc(50%+25px)] border-r border-b border-[#E5B979]/30 rounded-br-[16px] z-0" />
                   <div className="absolute top-[19.5px] left-[-24px] h-[20.5px] w-[calc(50%+25px)] border-l border-t border-[#E5B979]/30 rounded-tl-[16px] z-0" />
                </div>

                {/* ==== BOTTOM SECTION ==== */}
                <div className="w-full relative">
                   {/* Bottom Left Connecting Curve */}
                   <div className="absolute top-0 left-[-24px] h-[50px] w-[24px] border-l border-b border-[#E5B979]/30 rounded-bl-[16px] z-0" />

                   {/* BOTTOM NODES */}
                   <div className="grid grid-cols-7 gap-4 w-full relative z-10 h-[100px]">
                    {nodesBottom.map((node, i) => (
                       <div key={node.id} className="flex relative items-center justify-center w-full h-full">
                          <div className="bg-[#1C1C1C] border border-white/5 rounded-xl p-2 w-full h-[100px] flex flex-col items-center justify-center gap-1 relative z-10 hover:bg-white/[0.03] transition-colors">
                             <span className="text-[10px] text-white/30 font-mono">{node.id}</span>
                             <node.icon size={20} className="text-[#E5B979]" strokeWidth={1.5} />
                             <span className="text-[9px] text-white/80 text-center leading-tight mt-1">{node.title}</span>
                             
                             {/* Left incoming Arrow for Node 08 */}
                             {i === 0 && (
                                <div className="absolute top-[46.5px] left-[-5px] w-0 h-0 border-y-[3.5px] border-y-transparent border-l-[5px] border-l-[#E5B979]/50 z-0" />
                             )}

                             {/* Internal Right Arrow */}
                             {i < 6 && (
                                <div className="absolute top-[49.5px] -right-[16px] w-[16px] flex items-center z-0">
                                   <div className="h-[1px] bg-[#E5B979]/30 flex-1" />
                                   <div className="w-0 h-0 border-y-[3.5px] border-y-transparent border-l-[5px] border-l-[#E5B979]/30" />
                                </div>
                             )}
                          </div>
                       </div>
                    ))}
                   </div>

                   {/* BOTTOM AI BOXES */}
                   <div className="grid grid-cols-7 gap-4 w-full mt-4 relative z-10">
                    {nodesBottom.map((node) => (
                       <div key={`ai-${node.id}`} className="flex flex-col items-center">
                          {node.ai ? (
                             <>
                               <div className="w-[1px] h-6 border-l border-dashed border-[#E5B979]/30 relative shrink-0">
                                 <div className="absolute -bottom-[2px] left-[-3px] w-0 h-0 border-x-[2.5px] border-x-transparent border-t-[4px] border-t-[#E5B979]/50" />
                               </div>
                               <div className="bg-[#1C1C1C] border border-[#E5B979]/20 rounded-md p-2 w-[110px] shadow-lg text-left relative z-10 flex flex-col gap-1 mt-1">
                                  <div className="bg-[#E5B979]/20 rounded px-1 py-0.5 w-fit flex items-center justify-center">
                                    <span className="text-[#E5B979] text-[7px] font-bold">AI</span>
                                  </div>
                                  <ul className="flex flex-col gap-0.5 text-[9px] text-white/70 leading-tight">
                                    {node.ai.map((text, idx) => <li key={idx} className="whitespace-normal">• {text}</li>)}
                                  </ul>
                               </div>
                             </>
                          ) : (
                             <div className="w-full h-full" />
                          )}
                       </div>
                    ))}
                   </div>
                </div>

              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
