import React from 'react';
import { motion } from 'motion/react';
import { useDictionary } from '../../hooks/useDictionary';

export const AIGCSection06 = () => {
  const { language } = useDictionary();
  const isEn = language === 'en';

  return (
    <section className="relative w-full h-screen py-24 md:py-32 px-6 md:px-[80px] bg-[#050505] overflow-hidden flex flex-col justify-center border-t border-white/[0.02]">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="w-full"
      >
        <div className="flex items-center gap-4 mb-8 md:mb-12">
          <div className="w-16 h-[1px] bg-[#D5B667]/50" />
          <h4 className="text-[#D5B667] tracking-tighter text-[14px] md:text-[16px] uppercase font-sans font-bold">
            {isEn ? 'CASE 03 · BREADTH' : '案例 03 · 广度'}
          </h4>
        </div>

        <h2 className={`uppercase w-full ${isEn ? 'text-[50px] sm:text-[70px] md:text-[90px] xl:text-[100px] font-black font-sans tracking-tighter leading-[0.95]' : 'text-[90px] font-black font-puhuiti tracking-tighter leading-[1.1] [-webkit-text-stroke:2px_currentColor]'} mb-24 md:mb-40`}>
          {isEn ? (
             <>AGILE RESPONSE &<br />EXPONENTIAL FISSION</>
          ) : (
             '敏捷响应与指数裂变'
          )}
        </h2>

        <h3 className={`w-full max-w-[1200px] mb-16 md:mb-24 ${isEn ? 'text-[28px] font-light tracking-wide leading-[48px] font-sans text-white/90' : 'text-[28px] font-extrabold tracking-tighter font-puhuiti leading-[48px]'}`}>
          {isEn ? (
            <>While traditional teams are still burning the midnight oil stacking headcount for product launches,<br className="hidden md:block"/>I have deployed computing power to build a high-speed concurrent brand visual engine.</>
          ) : (
            <>当传统团队还在为单品上新熬夜堆人力时，<br className="hidden md:block"/>我已用算力构建了极速并发的品牌视觉引擎。</>
          )}
        </h3>

        <p className={`w-full max-w-[900px] text-left ${isEn ? 'text-white/50 font-sans font-light tracking-[0.015em] leading-[1.7] text-[15px] xl:text-[17px]' : 'text-white/50 font-sans font-light tracking-[0.03em] leading-[1.8] text-[15px] xl:text-[17px] text-justify'}`}>
          {isEn ? (
            "In the Fast-Moving Consumer Goods (FMCG) sector, speed dictates survival. Taking Sexy Tea as a benchmark, I reconstructed the traditional linear design workflow into a concurrent grid of 'underlying assets + variable control'. This is not merely a replacement of tools, but achieving stepless fission of the entire category and omni-channel SKU matrix with near-zero marginal cost."
          ) : (
            "在快消品（FMCG）赛道，速度即生死。以茶颜悦色为例，我将传统的线性设计流程重构为“底层资产+变量控制”的并发网格。这不是工具的更替，而是用极近于零的边际成本，实现全品类、全渠道 SKU 矩阵的无级裂变。"
          )}
        </p>

      </motion.div>
    </section>
  );
};
