import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useDictionary } from '../../hooks/useDictionary';

export const Web3CommunityIPSecondary = () => {
  const { language } = useDictionary();
  const isEn = language === 'en';

  const [activeIndex, setActiveIndex] = useState(0);

  const uiBaseImage = "https://img.nickiresume.cn/Nimage/01web3/mean.webp";
  const ipImages = [
    "https://img.nickiresume.cn/Nimage/01web3/01D.webp",
    "https://img.nickiresume.cn/Nimage/01web3/02D.webp",
    "https://img.nickiresume.cn/Nimage/01web3/03D.webp",
    "https://img.nickiresume.cn/Nimage/01web3/04D.webp",
    "https://img.nickiresume.cn/Nimage/01web3/05D.webp",
    "https://img.nickiresume.cn/Nimage/01web3/06D.webp",
  ];

  return (
    /* Changed padding left to match requested 80px distance instead of pl-0 */
    <section className="relative w-full min-h-[90vh] flex flex-col lg:flex-row items-center justify-between pl-4 pr-6 md:pl-[40px] md:pr-[60px] lg:pl-[80px] lg:pr-[80px] py-16 xl:py-24 gap-12 lg:gap-[80px] overflow-hidden bg-[#050505]">
      
      {/* Left Image Area (Interactive Viewer) - Flush to Left Edge */}
      <motion.div 
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="w-full lg:flex-1 relative z-10 flex flex-row items-center h-full min-h-[600px] xl:min-h-[700px]"
      >
        
        {/* Left Sub-area: The Base Mobile UI Display (Takes ~75-80%) */}
        <div className="relative flex-1 w-full flex flex-col items-center justify-center p-4 lg:p-8">
          {/* TIGHT WRAPPER: Removed explicit heights to allow the image 'h-auto' to dictate the box size. This creates a perfect aspect-ratio locked coordinate system. */}
          <div className="relative w-full max-w-[900px]">
            {/* The base empty card UI */}
            <img 
              src={uiBaseImage} 
              className="w-full h-auto block pointer-events-none drop-shadow-[0_30px_60px_rgba(0,0,0,0.8)]" 
              alt="Community UI Background"
            />
            
            {/* The Dynamic Dog Avatar Overlay. Mapped with strict pure percentages to scale perfectly with the base image. */}
            <AnimatePresence mode="wait">
              <motion.img
                key={activeIndex}
                src={ipImages[activeIndex]}
                initial={{ opacity: 0, scale: 0.95, y: 5 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 1.05, filter: 'blur(3px)', transition: { duration: 0.3 } }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }} 
                /* 
                  Locked Proportions with pure percentages for flawless scaling 
                  across all viewports.
                */
                style={{ 
                  top: "33.2%", 
                  right: "7.6%", 
                  width: "24%" 
                }}
                className="absolute h-auto object-contain pointer-events-none drop-shadow-xl z-20"
                alt="Selected Theme IP"
              />
            </AnimatePresence>
          </div>
        </div>

        {/* Right Sub-area: The Vertical Carousel Thumbnail track (Narrow strip on the right ~20%) */}
        <div className="relative w-[120px] md:w-[150px] shrink-0 h-[700px] flex items-center justify-center pointer-events-auto">
          
          {/* Subtle center highlight indicator */}
          <div className="absolute top-1/2 right-0 w-[2px] h-[40px] -translate-y-1/2 bg-white/70 rounded-l-full z-0 pointer-events-none shadow-[0_0_8px_rgba(255,255,255,0.5)]" />
          
          {/* Absolute wrapper for the carousel items */}
          <div className="relative w-full h-full flex items-center justify-center">
            {ipImages.map((src, index) => {
              const offset = index - activeIndex;
              // Limit rendering extreme elements to save performance
              const isVisible = Math.abs(offset) <= 3;
              if (!isVisible) return null;

              // Spread thumbnails further apart vertically
              const yPos = offset * 130;  
              // Adjusted scales based on feedback: slightly bigger inactive items, less fade, less blur
              const scale = offset === 0 ? 1 : 1 - Math.abs(offset) * 0.2;
              const opacity = offset === 0 ? 1 : Math.max(0, 0.75 - Math.abs(offset) * 0.2);
              const zIndex = 30 - Math.abs(offset);
              const filter = offset === 0 ? 'brightness(1)' : 'brightness(0.6) blur(1px)';

              return (
                <motion.div
                  key={index}
                  onMouseEnter={() => setActiveIndex(index)}
                  animate={{ y: yPos, scale, opacity, zIndex, filter }}
                  /* Much firmer Apple-like resistance: Increased damping and stiffness ratio to feel heavier and less "slippery" */
                  transition={{ type: "spring", stiffness: 120, damping: 45, mass: 1 }}
                  className="absolute w-[80px] h-[80px] md:w-[100px] md:h-[100px] cursor-pointer flex justify-center items-center transition-all duration-300 ease-out"
                >
                  <img 
                    src={src} 
                    className={`w-full h-full object-contain transition-all duration-300 ${offset === 0 ? 'drop-shadow-[0_10px_20px_rgba(255,255,255,0.15)]' : ''}`} 
                    alt={`Thumbnail ${index + 1}`} 
                  />
                </motion.div>
              );
            })}
          </div>
        </div>

      </motion.div>

      {/* Right Text Content */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        className="flex flex-col z-10 relative w-full lg:w-[35%] xl:w-[35%] shrink-0 pl-6 lg:pl-0"
      >
         <div className="flex items-center gap-4 mb-8">
            <div className="w-16 h-[1px] bg-white/30" />
            <h4 className="text-white/50 tracking-tighter text-[14px] md:text-[16px] uppercase font-sans font-bold">
              {isEn ? '05 / COMMUNITY & IP' : '05 / 社区生态与 IP'}
            </h4>
         </div>
         
         <h2 
           className={`uppercase w-full ${isEn ? 'text-[clamp(32px,6vw,80px)] font-black font-sans tracking-tighter leading-[1.05]' : 'text-[clamp(32px,5.5vw,80px)] font-black font-puhuiti tracking-tighter leading-[1.1] [-webkit-text-stroke:2px_currentColor]'}`}
         >
           {isEn ? (
             <>
               Event Engagement<br/>
               Catalyst
             </>
           ) : (
             <>运营情绪<br />催化剂</>
           )}
         </h2>
         
         <p className={`mt-8 md:mt-12 w-full max-w-[500px] text-white/50 ${isEn ? 'font-sans font-light tracking-[0.015em] leading-[1.7] text-[15px] xl:text-[17px]' : 'font-sans font-light tracking-[0.03em] leading-[1.8] text-[15px] xl:text-[17px] text-justify'}`}>
           {isEn 
             ? "Leveraging IP visuals to amplify event emotions. Translating dry operational rules into high-stickiness interactions to aggressively boost user engagement."
             : "在运营活动时，用 IP 视觉渲染活动情绪，将枯燥的运营规则转译为高粘性互动，提升用户的参与活跃度。"}
         </p>
      </motion.div>

    </section>
  );
};
