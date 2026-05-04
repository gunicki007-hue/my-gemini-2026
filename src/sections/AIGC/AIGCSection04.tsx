import React from 'react';
import { motion } from 'motion/react';
import { useDictionary } from '../../hooks/useDictionary';

export const AIGCSection04 = () => {
  const { language } = useDictionary();
  const isEn = language === 'en';

  return (
    <section className="relative w-full h-screen py-24 md:py-32 px-6 md:px-[80px] bg-[#050505] overflow-hidden flex flex-col justify-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="w-full"
      >
        <div className="flex items-center gap-4 mb-8 md:mb-12">
          <div className="w-16 h-[1px] bg-[#D5B667]/50" />
          <h4 className="text-[#D5B667] tracking-[0.2em] text-[12px] md:text-[14px] uppercase font-sans font-bold">
            {isEn ? 'CASE 02 · EXTREME' : '案例 02 · 极值'}
          </h4>
        </div>

        <h2 className={`uppercase leading-none tracking-tighter w-full ${isEn ? 'text-[50px] sm:text-[70px] md:text-[90px] xl:text-[100px] font-black font-sans' : 'text-[40px] sm:text-[60px] md:text-[80px] xl:text-[90px] font-extrabold font-["PingFang_SC","Microsoft_YaHei"]'} mb-24 md:mb-40`}>
          {isEn ? (
             <>AESTHETIC EXTREME &<br />ASSET RECONSTRUCTION</>
          ) : (
             '审美极值与资产重构'
          )}
        </h2>

        <h3 className={`w-full max-w-[1200px] mb-16 md:mb-24 ${isEn ? 'text-[28px] font-light tracking-wide leading-[48px] font-sans text-white/90' : 'text-[28px] font-extrabold tracking-tight font-["PingFang_SC","Microsoft_YaHei"] leading-[48px]'}`}>
          {isEn ? (
            <>While most are still generating concept sketches<br className="hidden md:block"/>I am already delivering high-luxury production assets</>
          ) : (
            <>当多数人还在生成概念草图时<br/>我已开始交付高奢级出街资产</>
          )}
        </h3>

        <p className={`w-full max-w-[900px] ${isEn ? 'text-white/60 text-[16px] xl:text-[18px] font-light tracking-wide leading-[2.2]' : 'text-white/50 text-[17px] text-justify tracking-widest leading-[38.6px]'}`}>
          {isEn ? (
            "Abandoning traditional 3D rendering, through physical-level optical solving, completing a brutal practical proof of 'zero marginal cost production'."
          ) : (
            "放弃传统 3D 渲染，通过物理级光学解算，完成对“零边际成本生产”的暴力实战证明。"
          )}
        </p>

      </motion.div>
    </section>
  );
};
