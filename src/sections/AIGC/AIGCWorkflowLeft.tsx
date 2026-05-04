import React from 'react';
import { motion } from 'motion/react';
import { useDictionary } from '../../hooks/useDictionary';

export const AIGCWorkflowLeft = () => {
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
            <div className="text-white/50 text-[14px] md:text-[16px] font-sans font-bold tracking-[0.3em] uppercase mb-4">
              {isEn ? 'ROI PERFORMANCE CLEARANCE' : 'ROI 效能清算'}
            </div>
            
            <h2 className="text-white text-[32px] md:text-[40px] xl:text-[48px] font-black leading-[1.1] mb-10 tracking-tighter font-sans uppercase">
              {isEn ? (
                <>CAPACITY STRUCTURE<br/>RADICAL RESHAPE</>
              ) : (
                <>产能结构<br/>彻底重塑</>
              )}
            </h2>

            <div className={`space-y-6 w-full max-w-[500px] ${isEn ? 'text-white/50 font-sans font-light tracking-[0.015em] leading-[1.7] text-[16px] md:text-[15px]' : 'text-white/50 font-sans font-light tracking-[0.03em] leading-[1.8] text-[15px] xl:text-[17px] text-justify'}`}>
              <div className="py-2">
                <p className={`text-white/50 ${isEn ? 'font-medium leading-[1.6]' : 'font-medium tracking-wide leading-[1.8]'}`}>
                  {isEn
                    ? 'The traditional "human wave tactic" can no longer cope with rapidly expanding business needs. By encapsulating brand standards and underlying logic into AI models, we have compressed the team\'s trial-and-error cycle from "weeks" to "minutes".'
                    : '传统的“人海战术”已无法应对极速扩张的业务需求。通过将品牌标准与底层逻辑封装进 AI 模型，我们将团队的试错周期从“周”级压缩到了“分钟”级。'}
                </p>
              </div>
              <p>
                {isEn
                  ? 'The data on the right proves: this is not just an upgrade of design tools, but a business reconstruction that reduces the marginal cost of single output to infinitely approaching zero.'
                  : '右侧的数据证明：这不仅仅是设计工具的升级，更是将单产边际成本降至无限趋近于零的商业重构。'}
              </p>
            </div>
          </motion.div>
        </div>

        {/* Right Column (Table) */}
        <div className="w-full lg:w-[58%] flex flex-col items-center">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-center justify-center w-full mb-6 md:mb-10"
          >
             <h3 className="text-white text-[28px] font-bold font-sans tracking-wide text-center leading-[1.2]">
               {isEn ? 'Performance Leap | ROI Clearance' : '效能跃迁 | 投资回报率（ROI）清算'}
             </h3>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className={`w-full aspect-video bg-[#0a0a0a] rounded-[24px] overflow-hidden relative group shadow-[0_20px_60px_rgba(0,0,0,0.5)] border border-white/[0.03] p-8 md:p-12 flex flex-col ${isEn ? 'font-sans' : 'font-puhuiti'}`}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent pointer-events-none"></div>

            <div className="w-full flex-1 flex flex-col relative z-10 justify-between">

              <div className="w-full pb-6 md:pb-8 flex items-center border-b border-white/[0.05]">
                <div className="flex-[0.6] text-white/50 text-[14px] md:text-[15px] tracking-tighter">{isEn ? 'DIMENSION' : '维度'}</div>
                <div className="flex-1 text-white/50 text-[14px] md:text-[15px] tracking-tighter pl-4">{isEn ? 'TRADITIONAL MODE' : '传统方式'}</div>
                <div className="flex-1 text-white/50 text-[14px] md:text-[15px] tracking-tighter pl-4">{isEn ? 'HYBRID ORCHESTRATION' : '混合智能体编排'}</div>
              </div>

              <div className="w-full py-6 md:py-8 flex items-center border-b border-white/[0.05]">
                <div className="flex-[0.6] text-white/50 text-[13px] md:text-[14px] font-light">{isEn ? 'Concept Trial Cycle' : '概念试错周期'}</div>
                <div className="flex-1 text-white/80 text-[15px] md:text-[16px] pl-4 font-light tracking-wide">{isEn ? '~2 weeks (Manual)' : '约 2 周（人工推演与绘图）'}</div>
                <div className="flex-1 text-[#D5B667] text-[15px] md:text-[16px] pl-4 font-light tracking-wide opacity-90">{isEn ? 'Overnight (Autonomous computing)' : '隔夜完成（算力自主演算）'}</div>
              </div>

              <div className="w-full py-6 md:py-8 flex items-center border-b border-white/[0.05]">
                <div className="flex-[0.6] text-white/50 text-[13px] md:text-[14px] font-light">{isEn ? 'Brand Guideline Exec.' : '品牌规范执行'}</div>
                <div className="flex-1 text-white/80 text-[15px] md:text-[16px] pl-4 font-light tracking-wide">{isEn ? 'Manual check, error-prone' : '依赖人工检查，易产生视觉偏差'}</div>
                <div className="flex-1 text-[#D5B667] text-[15px] md:text-[16px] pl-4 font-light tracking-wide opacity-90">{isEn ? 'Algorithm locked, 0 deviation' : '模型算法锁死，实现 0 偏差复用'}</div>
              </div>

              <div className="w-full py-6 md:py-8 flex items-center border-b border-white/[0.05]">
                <div className="flex-[0.6] text-white/50 text-[13px] md:text-[14px] font-light">{isEn ? 'Team Capacity Limit' : '团队产能上限'}</div>
                <div className="flex-1 text-white/80 text-[15px] md:text-[16px] pl-4 font-light tracking-wide">{isEn ? 'Limited by team size' : '受限于团队规模与加班时长'}</div>
                <div className="flex-1 text-[#D5B667] text-[15px] md:text-[16px] pl-4 font-light tracking-wide opacity-90">{isEn ? 'Limited by compute (Near infinite)' : '受限于算力配置（近乎无限）'}</div>
              </div>

              <div className="w-full pt-6 md:pt-8 flex items-center">
                <div className="flex-[0.6] text-white/50 text-[13px] md:text-[14px] font-light">{isEn ? 'Marginal Cost' : '单产边际成本'}</div>
                <div className="flex-1 text-white/80 text-[15px] md:text-[16px] pl-4 font-light tracking-wide">{isEn ? 'Linear surge with business' : '随业务需求量呈线性暴增'}</div>
                <div className="flex-1 text-[#D5B667] text-[15px] md:text-[16px] pl-4 font-light tracking-wide opacity-90">{isEn ? 'Zero Marginal Cost' : '趋近于零（Zero Marginal Cost）'}</div>
              </div>
            </div>

          </motion.div>
        </div>

      </div>
    </section>
  );
};

