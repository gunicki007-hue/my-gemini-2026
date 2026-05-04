import React from 'react';
import { motion } from 'motion/react';
import { useDictionary } from '../../hooks/useDictionary';

export const Web3DesignLanguage = () => {
  const { language } = useDictionary();
  const isEn = language === 'en';

  return (
    <section className="relative w-full min-h-screen flex flex-col lg:flex-row items-center justify-between pl-0 pr-6 md:pl-0 md:pr-[60px] lg:pl-0 lg:pr-[80px] py-32 gap-12 lg:gap-16 overflow-hidden bg-[#050505]">
      
      {/* Left Image Full-Bleed Area - Flush to Left Edge */}
      <motion.div 
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="w-full lg:w-[60%] flex-1 aspect-[4/3] relative z-10 flex items-center justify-center bg-transparent lg:rounded-r-[24px] overflow-hidden"
      >
        {/* == 🚨 左侧海报全屏背景替换处 / REPLACE WITH LEFT POSTER IMAGE == */}
        {/* 把下方的 src="..." 替换变成您实际的图片链接即可 */}
        <img 
          src="https://img.nickiresume.cn/Nimage/01web3/cryditvi.webp" 
          className="absolute inset-0 w-full h-full object-cover z-0" 
          alt="Design Language Background"
        />
      </motion.div>

      {/* Right Text Content */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        className="flex flex-col z-10 relative w-full lg:w-[35%] xl:w-[35%] shrink-0 pl-6 lg:pl-0"
      >
         {/* Tag matching Screen 1 & 2 styles */}
         <div className="flex items-center gap-4 mb-8">
            <div className="w-16 h-[1px] bg-white/30" />
            <h4 className="text-white/60 tracking-[0.2em] text-[12px] md:text-[14px] uppercase font-sans font-bold">
              {isEn ? '01 / Customised Font & Icon' : '01 / 视觉识别系统'}
            </h4>
         </div>
         
         {/* Title built using exact Screen 1 Typography principles */}
         <h2 
           className={`uppercase leading-none tracking-tighter w-full ${isEn ? 'text-[50px] sm:text-[70px] md:text-[80px] xl:text-[90px] font-black font-sans' : 'text-[40px] sm:text-[60px] md:text-[70px] xl:text-[80px] font-extrabold font-["PingFang_SC","Microsoft_YaHei"]'}`}
         >
           {isEn ? (
             <>
               Brand Visual<br/>
               <span className="text-transparent" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.4)' }}>baseline</span><br />
               
             </>
           ) : (
             <>品牌视觉<br />基本盘</>
           )}
         </h2>
         
         {/* Secondary paragraph placeholder */}
         <p className={`mt-8 md:mt-12 w-full max-w-[500px] text-white/50 ${isEn ? 'text-[15px] xl:text-[17px] tracking-normal leading-[1.8]' : 'text-[15px] xl:text-[17px] tracking-widest leading-[2]'}`}>
           {isEn 
             ? "Establishing Crydit’s foundational DNA: utilizing a standardized geometric symbol system to translate abstract financial concepts into tangible visual outcomes."
             : "确立 Crydit 底层视觉基因，通过规范的几何符号体系，将抽象的金融业务具象化落地。"}
         </p>
      </motion.div>

    </section>
  );
};
