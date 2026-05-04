import React from 'react';
import { motion } from 'motion/react';
import { useDictionary } from '../../hooks/useDictionary';
import { useNavigate } from 'react-router-dom';

export const SpatialOutro = () => {
  const { language } = useDictionary();
  const isEn = language === 'en';
  const navigate = useNavigate();

  return (
    <section className="relative w-full min-h-[50vh] flex flex-col items-center justify-center p-6 bg-[#050505] overflow-hidden">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="flex flex-col items-center text-center z-10 -mt-28"
      >
        <h2 className={`leading-tight bg-clip-text text-transparent bg-gradient-to-b from-white to-[#a3a3a3] mb-12 max-w-[800px] text-balance ${isEn ? 'uppercase tracking-tighter text-[18px] md:text-[28px] font-sans font-extrabold' : 'tracking-tighter text-[22px] md:text-[28px] font-puhuiti font-extrabold'}`}>
          {isEn ? "Delivering · Resonant spatial experiences" : "交付 · 更具共鸣的空间体验"}
        </h2>
        
        {/* Back Button */}
        <button 
          onClick={() => {
            navigate('/', { state: { scrollTo: 'projects', projectId: 'spatial' } });
          }}
          className="flex items-center justify-center gap-4 px-10 py-4 rounded-full bg-[#111] border border-white/5 hover:bg-[#1a1a1a] hover:border-white/10 text-white/80 hover:text-white transition-all duration-300 shadow-[inset_0_1px_1px_rgba(255,255,255,0.05),0_4px_20px_rgba(0,0,0,0.5)] group"
        >
          <svg 
            className="w-4 h-4 transition-transform duration-300 group-hover:-translate-x-1" 
            viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
          >
            <polyline points="15 18 9 12 15 6"></polyline>
          </svg>
          <span className="text-[16px] md:text-[16px] font-bold tracking-tighter uppercase mt-[1px]">
            {isEn ? 'BACK' : '返回项目列表'}
          </span>
        </button>
      </motion.div>
    </section>
  );
};
