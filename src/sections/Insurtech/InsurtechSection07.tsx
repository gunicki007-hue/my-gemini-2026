import React from 'react';
import { motion } from 'motion/react';
import { useDictionary } from '../../hooks/useDictionary';

export const InsurtechSection07 = () => {
  const { language } = useDictionary();
  const isEn = language === 'en';

  return (
    <section className="relative w-full py-16 xl:py-24 px-6 md:px-[60px] lg:px-[80px] bg-[#0a0a0a] flex flex-col items-center justify-center">
      
      {/* Centered Text Content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="flex flex-col items-center text-center w-full max-w-[800px] z-10 mb-12 md:mb-16"
      >
         {/* Tag */}
         <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-[1px] bg-white/30" />
            <h4 className="text-white/60 tracking-[0.2em] text-[12px] md:text-[14px] uppercase font-sans font-bold">
              {isEn ? '03 / AI-DRIVEN CONVERSION' : '03 / AI 驱动转化'}
            </h4>
            <div className="w-12 h-[1px] bg-white/30" />
         </div>
         
         {/* Title */}
         <h2 
           className={`uppercase leading-none tracking-tighter w-full ${isEn ? 'text-[50px] sm:text-[70px] md:text-[80px] xl:text-[90px] font-black font-sans' : 'text-[40px] sm:text-[60px] md:text-[70px] xl:text-[80px] font-extrabold font-["PingFang_SC","Microsoft_YaHei"]'}`}
         >
           {isEn ? (
             <>
               AI Campaign<span className="text-transparent" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.4)' }}> Flow </span>
             </>
           ) : (
             <>AI 驱动周年转化</>
           )}
         </h2>
         
         {/* Description */}
         <p className={`mt-8 w-full max-w-[600px] text-white/50 text-pretty ${isEn ? 'text-[15px] xl:text-[17px] tracking-normal leading-[1.8]' : 'text-[15px] xl:text-[17px] tracking-widest sm:tracking-wider xl:tracking-widest leading-[2]'}`}>
           {isEn 
             ? "Anniversary campaign. Integrating AI into core KV creation to empower operations and deliver high conversion."
             : "以周年庆大促为例。将 AI 深度融入核心 KV 创制，全面赋能运营执行，兑现业务高转化。"}
         </p>
      </motion.div>

      {/* 16:9 Image Area */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
        className="w-full aspect-[16/4.5] relative rounded-[20px] md:rounded-[40px] overflow-hidden bg-[#111]"
      >
        <img 
          src="https://img.nickiresume.cn/Nimage/02iyunbao/01kvbanana.webp" 
          alt="AI Driven Conversion" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 border border-white/10 rounded-[20px] md:rounded-[40px] pointer-events-none" />
      </motion.div>
      
      {/* Split Content Area: Left Image (16:9), Right Text */}
      <div className="w-full mt-16 md:mt-24 xl:mt-32 flex flex-col xl:flex-row gap-12 xl:gap-20 items-center">
        {/* Left Image */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="w-full xl:w-[60%] aspect-[16/9] relative rounded-[20px] md:rounded-[40px] overflow-hidden bg-[#111]"
        >
          <img 
            src="https://img.nickiresume.cn/Nimage/02iyunbao/draft.webp" 
            alt="AI Integration Example" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 border border-white/10 rounded-[20px] md:rounded-[40px] pointer-events-none" />
        </motion.div>

        {/* Right Text */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          className="w-full xl:w-[40%] flex flex-col justify-center max-w-[500px] xl:max-w-none mx-auto xl:mx-0"
        >
          {/* Section Marker */}
          <div className="flex items-center gap-4 mb-6 md:mb-8">
            <h4 className="text-white/60 tracking-[0.2em] text-[12px] md:text-[14px] uppercase font-sans font-bold">
              {isEn ? '03 / AI GENERATION' : '03 / AI 赋能生成'}
            </h4>
            <div className="flex-1 max-w-[48px] h-[1px] bg-white/30" />
          </div>

          {/* Title */}
          <h3 
             className={`uppercase leading-none tracking-tighter w-full mb-6 md:mb-8 ${isEn ? 'text-[50px] sm:text-[70px] md:text-[80px] xl:text-[90px] font-black font-sans' : 'text-[40px] sm:text-[60px] md:text-[70px] xl:text-[80px] font-extrabold font-["PingFang_SC","Microsoft_YaHei"]'}`}
          >
            {isEn ? (
              <>Rapid Prototyping</>
            ) : (
              <>高效内容创制</>
            )}
          </h3>
          
          {/* Description */}
          <p className={`w-full text-white/50 text-pretty ${isEn ? 'text-[15px] xl:text-[17px] tracking-normal leading-[1.8]' : 'text-[15px] xl:text-[17px] tracking-widest sm:tracking-wider xl:tracking-widest leading-[2]'}`}>
            {isEn 
              ? "Bridging design and technology to accelerate creative output without sacrificing quality. AI acts as a creative multiplier, transforming campaign ideas into highly polished visual assets efficiently."
              : "将 AI 算法深度融入大促的链路设计，通过智能化生成，大幅缩短核心视觉及运营物料的制图周期，释放创意产能与业务效能。"}
          </p>
        </motion.div>
      </div>

      {/* Marquee Section */}
      <div className="w-full mt-24 md:mt-32 xl:mt-40 flex flex-col items-center overflow-hidden">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true, margin: "-100px" }}
           transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
           className="flex flex-col items-center text-center w-full z-10 mb-10 md:mb-16"
        >
          {/* Section Marker */}
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-[1px] bg-white/30" />
            <h4 className="text-white/60 tracking-[0.2em] text-[12px] md:text-[14px] uppercase font-sans font-bold">
              {isEn ? '03 / AI GENERATED KV' : '03 / AI 生成 KV'}
            </h4>
            <div className="w-12 h-[1px] bg-white/30" />
          </div>

          <h3 
             className={`text-center uppercase leading-none tracking-tighter w-full ${isEn ? 'text-[50px] sm:text-[70px] md:text-[80px] xl:text-[90px] font-black font-sans' : 'text-[40px] sm:text-[60px] md:text-[70px] xl:text-[80px] font-extrabold font-["PingFang_SC","Microsoft_YaHei"]'}`}
          >
            {isEn ? (
              <>Campaign <span className="text-transparent" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.4)' }}>KV</span></>
            ) : (
              <>大促核心 KV</>
            )}
          </h3>
        </motion.div>

        {/* Carousel / Marquee */}
        <div className="w-full relative flex overflow-hidden group">
          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{ repeat: Infinity, ease: "linear", duration: 30 }}
            className="flex w-max"
          >
            {[...Array(2)].map((_, groupIndex) => (
              <React.Fragment key={groupIndex}>
                {[1, 2, 3, 4].map((item, idx) => {
                  const imgSrc = item === 2 
                    ? "https://img.nickiresume.cn/Nimage/04Event/0504-02.webp" 
                    : `https://img.nickiresume.cn/Nimage/02iyunbao/kv0${item}.webp`;
                  return (
                  <div key={idx} className="w-[300px] sm:w-[400px] md:w-[500px] xl:w-[600px] aspect-[16/9] flex-shrink-0 relative rounded-[16px] md:rounded-[24px] overflow-hidden bg-[#111] mx-2 md:mx-4">
                    <img 
                      src={imgSrc} 
                      alt={`Campaign KV ${item}`} 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 border border-white/10 rounded-[16px] md:rounded-[24px] pointer-events-none" />
                  </div>
                  );
                })}
              </React.Fragment>
            ))}
          </motion.div>
        </div>
      </div>

    </section>
  );
};
