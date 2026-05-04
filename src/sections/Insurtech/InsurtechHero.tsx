import React from 'react';
import { motion } from 'motion/react';
import { useDictionary } from '../../hooks/useDictionary';

export const InsurtechHero = () => {
  const { language } = useDictionary();
  const isEn = language === 'en';

  return (
    <section className="relative w-full h-[60vh] md:h-[70vh] flex items-end pb-12 md:pb-24 px-6 md:px-[60px] lg:px-[80px] bg-[#0a0a0a] overflow-hidden">
      
      {/* Background Image - Full Width, starts below navbar (80px) */}
      <div className="absolute top-[80px] left-0 right-0 bottom-0 w-full z-0">
        <img 
          src="https://img.nickiresume.cn/Nimage/02iyunbao/01banner-1.webp" 
          className="w-full h-full object-cover object-top"
          alt="Insurtech Hero"
          onError={(e) => {
             // Fallback if placeholder doesn't exist
             (e.target as HTMLImageElement).src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 9' fill='%23111'%3E%3Crect width='16' height='9'/%3E%3C/svg%3E";
          }}
        />
        {/* Bottom Black Gradient Fade */}
        <div className="absolute inset-x-0 bottom-0 top-[50px] bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/80 to-transparent pointer-events-none" />
      </div>

      {/* Content overlay */}
      <div className="relative z-10 w-full flex flex-col md:flex-row items-start md:items-end justify-between gap-8 md:gap-12 mt-32">
        
        {/* Left Side: Title */}
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
           className="flex flex-col flex-1"
        >
          {/* Tag */}
          <div className="flex items-center gap-4 mb-4 md:mb-6">
            <div className="w-8 h-[1px] bg-white/30" />
            <h4 className="text-white/50 tracking-tighter text-[14px] md:text-[16px] uppercase font-sans font-bold">
              {isEn ? 'Insurtech Brand Narrative' : '数字保险品牌叙事'}
            </h4>
          </div>
          
          {/* Main Title */}
          <h1 
            className={`uppercase leading-none tracking-tighter ${isEn ? 'text-[clamp(26px,4.5vw,62px)] font-black font-sans break-words' : 'text-[clamp(28px,5vw,74px)] font-extrabold font-puhuiti break-words'}`}
          >
            {isEn ? (
              <>Visual<br/>Infrastructure</>
            ) : (
              <>保险视觉基建</>
            )}
          </h1>
        </motion.div>

        {/* Right Side: Description */}
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
           className="flex flex-col w-full md:w-[35%] lg:w-[30%] lg:pl-10 md:border-l border-white/10 md:pb-4"
        >
           <p className={`text-white/50 text-pretty ${isEn ? 'text-[16px] xl:text-[16px] tracking-normal leading-[1.6]' : 'text-[16px] xl:text-[16px] tracking-tighter leading-[1.8]'}`}>
             {isEn 
               ? "Leveraging the ZhongAn ecosystem to reconstruct iYunbao's tech-driven insurance platform."
               : "依托众安生态，重构 iYunbao 科技赋能保险平台。"}
           </p>
        </motion.div>

      </div>
    </section>
  );
};
