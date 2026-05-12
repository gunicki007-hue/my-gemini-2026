import React from 'react';
import { motion } from 'motion/react';
import { useDictionary } from '../../hooks/useDictionary';

export const Web3DesignLanguage = () => {
  const { language } = useDictionary();
  const isEn = language === 'en';

  return (
    <section className="relative w-full min-h-[90vh] flex flex-col lg:flex-row items-center justify-between px-6 md:px-[60px] lg:px-[80px] py-16 xl:py-24 gap-12 lg:gap-16 overflow-hidden bg-[#0a0a0a]">
      
      {/* Left Text Content */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1.2, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        className="flex flex-col z-10 relative w-full lg:w-[45%] xl:w-[45%] shrink-0"
      >
         <h2 
           className={`uppercase w-full ${isEn ? 'text-[clamp(26px,5vw,50px)] font-semibold font-sans tracking-tighter leading-[1.05]' : 'text-[clamp(26px,5vw,56px)] font-semibold font-puhuiti tracking-tighter leading-[1.1] [-webkit-text-stroke:1px_currentColor]'}`}
         >
           {isEn ? (
             <>
               I AM RESPONSIBLE FOR "BEAUTIFUL"<br />
               BUILDING A FINANCIAL-GRADE<br/>
               TRUST ANCHOR
             </>
           ) : (
             <>我负责“好看”<br />构建金融级信任锚点</>
           )}
         </h2>

         {/* Subtitle */}
         <h3 className={`mt-8 w-full text-white font-bold ${isEn ? 'text-[16px] xl:text-[18px] tracking-tight uppercase' : 'text-[16px] xl:text-[18px] tracking-widest'}`}>
           {isEn 
             ? 'Visual Translation of Security, Dissipating Web3\'s Uncertainty'
             : '视觉翻译安全性，消解 Web3 的不确定感'}
         </h3>
         
         {/* Paragraph & Highlights */}
         <div className={`mt-6 w-full text-white/70 space-y-4 ${isEn ? 'font-sans font-light tracking-[0.015em] leading-[1.6] text-[15px] xl:text-[16px]' : 'font-sans font-light tracking-[0.03em] leading-[1.7] text-[15px] xl:text-[16px] text-justify'}`}>
           <p>
             {isEn 
               ? "In the Web3 payment sector, the first \"visual impression\" directly determines the user's perception of financial security. For core physical touchpoints, I abandoned ostentatious decoration, and instead reconstructed trust through the following dimensions:"
               : "在 Web3 支付领域，第一眼的“视觉印象”直接决定了用户的资金安全感。针对核心物理触点，我摒弃了浮夸的装饰，转而通过以下维度重塑信任："}
           </p>
           <ul className="space-y-3 mt-4">
             <li>
               <span className="text-white font-bold">{isEn ? 'Financial-Grade Material Modeling: ' : '金融级材质建模： '}</span>
               {isEn ? 'At the intersection of virtual and physical, through refined black-gold materials, matte textures, and rigorous layouts, endowing the product with "traditional bank-grade" professional depth.' : '在虚拟与实体的交界处，通过精细的黑金材质、哑光质感与严谨的版式，赋予产品“传统银行级”的专业深度。'}
             </li>
             <li>
               <span className="text-white font-bold">{isEn ? 'Visual Logic Suture: ' : '视觉逻辑缝合： '}</span>
               {isEn ? 'Visually hedging and integrating avant-garde crypto culture (Meme) with rigorous financial standards, using "familiarity" to offset users\' inherent concerns about the Web3 industry.' : '将前卫的加密文化（Meme）与严密的金融规范进行视觉对冲与融合，利用“熟悉感”对冲用户对 Web3 行业自带的顾虑。'}
             </li>
             <li>
               <span className="text-white font-bold">{isEn ? 'AI Asset Pipeline Empowerment: ' : 'AI 资产管线赋能： '}</span>
               {isEn ? 'Establishing an efficient AI visual output flow to ensure that every visual feedback, from physical cards to online touchpoints, possesses high consistency and brand tension.' : '建立高效的 AI 视觉产出流，确保从实体卡片到线上触点的每一处视觉反馈都具备高度的一致性与品牌张力。'}
             </li>
           </ul>
         </div>

         {/* Tags / Pills */}
         <div className="flex flex-wrap gap-3 md:gap-4 mt-10">
            {[
              { en: 'Brand Trust Modeling', zh: '品牌信任建模' },
              { en: 'Physical Material Rendering', zh: '物理材质渲染' },
              { en: 'AI Visual Production Workflow', zh: 'AI 视觉生产工作流' }
            ].map((pill, idx) => (
              <div key={idx} className="bg-[#1A1A1A] hover:bg-[#2A2A2A] transition-colors duration-300 px-5 md:px-6 py-2.5 md:py-3 rounded-md text-[14px] md:text-[15px] font-medium text-white/80 border border-white/5">
                {isEn ? pill.en : pill.zh}
              </div>
            ))}
         </div>
      </motion.div>

      {/* Right Image 16:9 Area */}
      <motion.div 
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        className="w-full lg:w-[50%] xl:w-[50%] aspect-video relative z-10 flex items-center justify-center bg-transparent group rounded-[16px] sm:rounded-[24px] overflow-hidden"
      >
        {/* == 🚨 右侧海报全屏背景替换处 / REPLACE WITH RIGHT POSTER IMAGE == */}
        <img 
          src="https://img.nickiresume.cn/0507/card.webp" 
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 rounded-[16px] sm:rounded-[24px]" 
          alt="Financial-Grade Trust Anchor Background"
        />
      </motion.div>

    </section>
  );
};

