import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useDictionary } from '../../hooks/useDictionary';

// ==========================================
// 🚨 奖项数据与图片素材替换区
// ==========================================
const AWARDS_DATA = [
  {
    id: "01",
    en: { awardTitle: "New York Product Design Awards" },
    cn: { awardTitle: "纽约产品设计奖" },
    levelType: "silver"
  },
  {
    id: "02",
    en: { awardTitle: "London Design Awards" },
    cn: { awardTitle: "伦敦设计奖" },
    levelType: "gold"
  },
  {
    id: "03",
    en: { awardTitle: "French Design Awards" },
    cn: { awardTitle: "法国设计奖" },
    levelType: "gold"
  },
  {
    id: "04",
    en: { awardTitle: "MUSE Design Awards (USA)" },
    cn: { awardTitle: "美国 MUSE 设计奖" },
    levelType: "gold"
  },
  {
    id: "05",
    en: { awardTitle: "European Design Awards" },
    cn: { awardTitle: "欧洲设计奖" },
    levelType: "gold"
  },
  {
    id: "06",
    en: { awardTitle: "ida Design Award (Italy)" },
    cn: { awardTitle: "意大利 ida 设计奖" },
    levelType: "finalist"
  },
  {
    id: "07",
    en: { awardTitle: "iF Design Award" },
    cn: { awardTitle: "iF 设计奖" },
    levelType: "finalist"
  }
];

// 核心极致缓动曲线 (对应 cubic-bezier(0.23, 1, 0.32, 1))
const EASE_CURVE = [0.23, 1, 0.32, 1];

export const Awards = () => {
  const { language } = useDictionary();
  const [activeIdx, setActiveIdx] = useState<number | null>(0);

  return (
    <section id="awards" className="relative w-full min-h-[100vh] bg-black text-white flex flex-col overflow-visible">
      {/* 1. Base Black Background Layer to ensure solid color */}
      <div className="absolute inset-0 z-0 pointer-events-none bg-black" />

      <div className="relative z-10 w-full px-6 md:px-[80px] pt-[calc(20vh-100px)] pb-[calc(20vh-100px)]">
        {/* Core wrapper to ensure top alignment of both columns while vertically centering the whole block */}
        <div className="w-full h-full flex items-start justify-between">
          
          {/* 2. Left 30% Anchor Area (Sticky Aligned) */}
          <div className="w-[30%] flex flex-col pr-10 sticky top-[25vh]">
            <motion.div 
              className="w-full"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 1, ease: EASE_CURVE }}
            >
              <div className="pointer-events-none">
                <h2 
                  className={`uppercase ${language === 'en' ? 'text-[46px] font-black font-sans tracking-tighter leading-[1.05]' : 'text-[46px] font-extrabold font-puhuiti tracking-tighter leading-[1.1] [-webkit-text-stroke:1px_currentColor]'} mb-6`}
                >
                  {language === 'en' ? 'AWARDS' : '国际荣誉'}
                </h2>
                
                <div className="flex items-center gap-4 mb-20">
                  <div className="h-[1px] w-12 bg-white/30" />
                  <h4 className={`text-white/70 text-[12px] md:text-[16px] italic font-normal ${language === 'en' ? 'tracking-normal' : 'tracking-wide'}`}>
                    {language === 'en' ? 'Not trophies. Global business validations.' : '不是奖杯，是全球商业验证。'}
                  </h4>
                </div>

                <div className="transition-opacity duration-500 ease-[cubic-bezier(0.25,1,0.5,1)]" style={{ opacity: activeIdx !== null ? 0.15 : 1 }}>
                  <h3 className="text-xl md:text-[18px] font-extrabold mb-6 text-white tracking-tight">
                    {language === 'en' ? 'GLOBAL Validation | Crydit (0-1)' : '包揽国际设计奖项 | Crydit（0-1阶段）'}
                  </h3>
                  <p className="text-white/70 text-[12px] md:text-[16px] leading-[1.6] max-w-[90%] font-normal tracking-wide">
                    {language === 'en' 
                      ? 'Multiple international design awards validate the maturity and viability of the project\'s strategy and execution within real-world business contexts.' 
                      : '多个国际设计奖项验证了该项目构想与其在真实商业环境中的落地执行的成熟度。'}
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* 3. Right 70% Kinetic List Area (Top Aligned, Edge Snapped) */}
          <div className="w-[calc(70%-100px)] relative" onMouseLeave={() => setActiveIdx(null)}>
            <div className="w-full flex flex-col border-t border-white/10">
              {AWARDS_DATA.map((item, idx) => {
              const isActive = activeIdx === idx;
              const isAnyActive = activeIdx !== null;
              
              // Determine opacity state for the row
              let rowOpacity = "opacity-40";
              if (isAnyActive) {
                rowOpacity = isActive ? "opacity-100" : "opacity-15";
              }

              // Metallic Sweep CSS Class Logic
              let metallicClass = "";
              if (isActive) {
                if (item.levelType === 'gold') metallicClass = "animate-metallic-gold";
                else if (item.levelType === 'silver') metallicClass = "animate-metallic-silver";
                else if (item.levelType === 'finalist') metallicClass = "text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]";
              }

              return (
                  <div
                  key={item.id}
                  onMouseEnter={() => setActiveIdx(idx)}
                  className={`border-b border-white/10 overflow-hidden flex flex-col cursor-pointer transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] py-[22px] ${rowOpacity}`}
                >
                  <div className="flex items-center w-full min-h-[48px]">
                    {/* Number using space-grotesk */}
                    <span className="text-white/30 font-space-grotesk text-[12px] md:text-[14px] font-bold tracking-widest w-16 shrink-0 transition-colors duration-500">
                      {item.id}
                    </span>
                    
                    {/* Title block with X-axis translation */}
                    <div className={`flex flex-col flex-1 transform transition-transform duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] ${isActive ? 'translate-x-[20px]' : 'translate-x-[0px]'}`}>
                      <span className={`transition-colors duration-500 ${
                        language === 'en' 
                          ? 'text-[11px] md:text-[16px] tracking-[0.15em] uppercase font-bold font-space-grotesk text-white' 
                          : 'text-[12px] md:text-[18px] tracking-tighter font-black font-puhuiti text-white leading-none'
                      }`}>
                        {language === 'en' ? item.en.awardTitle : item.cn.awardTitle}
                      </span>
                    </div>

                    {/* Level Text (Right Aligned) */}
                    <span 
                      className={`text-[10px] md:text-[10px] font-black tracking-tighter shrink-0 uppercase transition-all duration-500 ${isActive ? '' : 'text-white/70'} ${metallicClass}`}
                      style={isActive && item.levelType !== 'finalist' ? {
                        backgroundImage: item.levelType === 'gold' 
                          ? 'linear-gradient(90deg, #666 0%, #D4AF37 50%, #666 100%)'
                          : 'linear-gradient(90deg, #666 0%, #FFFFFF 50%, #666 100%)',
                        backgroundSize: '200% auto',
                        color: 'transparent',
                        backgroundClip: 'text',
                        WebkitBackgroundClip: 'text',
                      } : {}}
                    >
                      {language === 'en' ? (
                        item.levelType === 'gold' ? 'GOLD WINNER' :
                        item.levelType === 'silver' ? 'SILVER WINNER' :
                        'FINALIST'
                      ) : (
                        item.levelType === 'gold' ? '金奖' :
                        item.levelType === 'silver' ? '银奖' :
                        '入围'
                      )}
                    </span>
                  </div>
                </div>
              );
            })}
            </div>
            
            {/* Bottom Display Image Block */}
            <div className="w-full mt-[30px] relative rounded-[12px] md:rounded-[20px] overflow-hidden group bg-[#0a0a0a] shadow-[0_20px_60px_rgba(0,0,0,0.6)]">
              {/* iOS Glass Texture Layers for Card Edges */}
              <div className="absolute inset-0 z-30 pointer-events-none rounded-[12px] md:rounded-[20px] shadow-[inset_0_3px_15px_rgba(255,255,255,0.15),inset_0_0_0_1px_rgba(255,255,255,0.03),inset_0_-2px_10px_rgba(0,0,0,0.6)] mix-blend-screen" />
              <div className="absolute inset-0 z-30 pointer-events-none rounded-[12px] md:rounded-[20px] bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-40 mix-blend-overlay" />
              
              <div className="w-full aspect-[16/9] md:aspect-[21/9] relative">
                <img 
                  src="https://img.nickiresume.cn/images/0418resume/06.webp" 
                  alt="Exhibition Reference"
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-[1.02] transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] transform origin-center"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
