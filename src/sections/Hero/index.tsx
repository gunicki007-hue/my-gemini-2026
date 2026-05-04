import React, { useRef } from 'react';
import { useScroll, useTransform, motion } from 'motion/react';
import { useDictionary } from '../../hooks/useDictionary';
import { ParticleText } from './ParticleText';

export const Hero = () => {
  const { hero } = useDictionary();
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0.15, 0]); // Darken video drastically
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);

  const textOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section 
      ref={containerRef} 
      className="relative min-h-[calc(100vh-100px)] w-full overflow-hidden bg-black flex flex-col items-center justify-center pt-20"
    >
      {/* Center Unified Pattern Canvas strictly aligned with Navbar layout */}
      <motion.div 
        style={{ opacity: textOpacity }} 
        className="relative z-10 w-full flex flex-col items-center justify-center mt-[-40px]"
      >
        <ParticleText text="Portfolio" scrollYProgress={scrollYProgress} imageUrl={hero.particleImageUrl} />
      </motion.div>
    </section>
  );
};

