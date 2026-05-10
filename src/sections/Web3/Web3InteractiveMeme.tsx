import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useDictionary } from '../../hooks/useDictionary';

export const Web3InteractiveMeme = () => {
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
    <div className="w-full relative z-10 flex flex-row items-center h-full min-h-[500px] xl:min-h-[600px] bg-transparent rounded-[16px] lg:rounded-[24px]">
      
      {/* Left Sub-area: The Base Mobile UI Display (Takes ~75-80%) */}
      <div className="relative flex-1 w-full flex flex-col items-center justify-center p-2 lg:p-4">
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
      <div className="relative w-[100px] md:w-[120px] shrink-0 h-full min-h-[500px] flex items-center justify-center pointer-events-auto">
        
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
            const yPos = offset * 100;  
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
                className="absolute w-[60px] h-[60px] md:w-[80px] md:h-[80px] cursor-pointer flex justify-center items-center transition-all duration-300 ease-out"
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

    </div>
  );
};
