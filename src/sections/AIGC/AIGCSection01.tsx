import React from 'react';
import { motion } from 'motion/react';
import { useDictionary } from '../../hooks/useDictionary';

export const AIGCSection01 = () => {
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
    <section className="sticky top-0 w-full h-screen bg-[#050505] overflow-hidden z-10 mb-[100px]">
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
              <h4 className="text-[#D5B667] tracking-tighter text-[12px] md:text-[14px] uppercase font-sans font-bold">
                {isEn ? 'CASE 01 · AI NATIVE' : '案例 01 · AI Native'}
              </h4>
            </motion.div>
            <motion.h2 
              variants={itemVariants}
              className={`uppercase w-full mb-6 lg:mb-8 text-white text-[28px] md:text-[36px] xl:text-[44px] font-extrabold tracking-tighter leading-[1.1] ${isEn ? 'font-sans' : 'font-puhuiti'}`}
            >
              {isEn ? (
                <>On-chain Payment<br />AI Native Upgrade</>
              ) : (
                <>链上支付卡产品<br />AI Native体验升级</>
              )}
            </motion.h2>

            <motion.div variants={itemVariants} className={`space-y-6 text-white/70 ${isEn ? 'font-sans font-light tracking-[0.015em] leading-[1.6] text-[14px]' : 'font-sans font-light tracking-[0.03em] leading-[1.8] text-[13px] xl:text-[14px]'}`}>
              <p className="font-bold text-white text-[14px] xl:text-[16px]">
                {isEn ? (
                  "This is an independent AI Native upgrade for a launched PC-based on-chain crypto-to-fiat card payment product."
                ) : (
                  "这是我对已落地的PC端链上U转卡支付产品做的AI Native独立升级。"
                )}
              </p>
              <p>
                {isEn ? (
                  <>Previously, I completed visual noise reduction, streamlined the information hierarchy, and optimized the overall interaction flow. The basic experience was solid, but during long-term user observation, I found these <span className="text-white font-bold">hidden experience pain points</span>:</>
                ) : (
                  <>此前我已完成产品视觉降噪、信息层级梳理和全流程交互优化，基础体验无硬伤，但在长期用户观察中，我发现了这些<span className="text-white font-bold">隐性体验痛点</span>：</>
                )}
              </p>
              
              <ul className="space-y-4">
                <li>
                  <strong className="font-bold">
                    {isEn ? '• Tedious & Repetitive Operations' : '• 操作重复繁琐'}
                  </strong><br />
                  {isEn ? 'Users had to manually input amounts and select paths for every crypto-to-card transfer, making high-frequency operations time-consuming.' : '用户每次U转卡都要手动输入金额、选择路径，高频操作耗时久'}
                </li>
                <li>
                  <strong className="font-bold">
                    {isEn ? '• High Decision-making Costs' : '• 决策成本高'}
                  </strong><br />
                  {isEn ? 'Professional data such as on-chain gas fees and network status made it difficult for ordinary users to quickly judge the optimal timing.' : '链上手续费、网络状态等专业数据，普通用户难以快速判断最优操作时机'}
                </li>
                <li>
                  <strong className="font-bold">
                    {isEn ? '• Weak Risk Perception' : '• 风险感知弱'}
                  </strong><br />
                  {isEn ? "Large/abnormal transactions relied only on standard prompts, making users' perception of fund risks untimely." : '大额/异常交易仅靠普通提示，用户对资金风险的感知不及时'}
                </li>
                <li>
                  <strong className="font-bold">
                    {isEn ? '• Difficult Information Comprehension' : '• 信息理解难'}
                  </strong><br />
                  {isEn ? 'Asset flows and consumption bills were presented purely as data, resulting in high interpretation costs for users.' : '资产流水、消费账单以纯数据呈现，用户解读成本高'}
                </li>
              </ul>

              <p>
                {isEn ? (
                  "Coinciding with the maturity of AIGC tools, I proposed a hypothesis: Using AI as an experience assistant, solving these pain points without changing the core product framework, and verifying the feasibility of designers using AI to independently complete full-link design."
                ) : (
                  "恰逢AIGC工具成熟，我提出假设：用AI做体验辅助，在不改变产品核心框架的前提下，解决这些痛点，同时验证设计师用AI独立完成全链路设计的可行性。"
                )}
              </p>
            </motion.div>
          </div>

          {/* Right Content - Image */}
          <motion.div
             variants={itemVariants}
             className="col-span-1 lg:col-span-6 w-full flex flex-col gap-3 md:gap-4"
          >
              <div className="w-full text-white/60 text-[8px] md:text-[10px] font-medium tracking-widest text-center">
                {isEn ? 'Original Flow → AI Assisted Ops → AI Optimized Trade' : '「原流程页」→「AI辅助操作页」→「AI优化交易页」'}
              </div>
              <div className="w-full aspect-video bg-[#1a1a1a] rounded-xl overflow-hidden">
                <img 
                  src="https://img.nickiresume.cn/0507/AI Native01.webp" 
                  alt="AI Native Upgrade" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
