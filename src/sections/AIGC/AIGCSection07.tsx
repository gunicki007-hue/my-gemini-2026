import React from 'react';
import { motion } from 'motion/react';
import { useDictionary } from '../../hooks/useDictionary';

export const AIGCSection07 = () => {
  const { language } = useDictionary();
  const isEn = language === 'en';

  return (
    <section className="relative w-full py-24 md:py-32 px-6 lg:px-[80px] bg-[#0a0a0a] overflow-visible">
      <div className="w-full flex flex-col lg:flex-row justify-between items-start mx-auto gap-12 lg:gap-0">
        
        {/* Left Column (Sticky Text) */}
        <div className="w-full lg:w-[35%] lg:sticky lg:top-[12vh] flex flex-col z-10 lg:pr-8 xl:pr-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex items-center gap-4 mb-8 md:mb-12">
              <div className="w-16 h-[1px] bg-[#D5B667]/50" />
              <h4 className="text-[#D5B667] tracking-tighter text-[12px] md:text-[14px] uppercase font-sans font-bold">
                {isEn ? 'CASE 03 · AGILITY & HIGH CONCURRENCY · TEA' : 'CASE 03 · 敏捷与高并发 · 茶颜悦色'}
              </h4>
            </div>
            <h3 className="text-white text-[30px] md:text-[38px] xl:text-[46px] font-black leading-[1.1] mb-6 tracking-tighter font-sans uppercase">
              {isEn ? (
                <>BUILDING A HIGH-CONCURRENCY<br />CONTENT ENGINE</>
              ) : (
                <>构建高并发内容引擎</>
              )}
            </h3>

            <div className={`space-y-6 ${isEn ? 'text-white/50 font-sans font-light tracking-[0.015em] leading-[1.5] text-[12px] md:text-[11px]' : 'text-white/50 font-sans font-light tracking-[0.03em] leading-[1.6] text-[11px] xl:text-[13px] text-justify'}`}>
              <p className="text-white font-medium">
                {isEn ? (
                  "The essence of the FMCG industry is racing against volatile market sentiments."
                ) : (
                  "快消行业的本质，是与多变的市场情绪赛跑。"
                )}
              </p>
              
              <p>
                {isEn ? (
                  <>Facing Sexy Tea's high-frequency new product seasons and regional marketing, I abandoned the extremely fragile \"human wave tactic\". By training a brand-exclusive visual foundation model (Style Lora), I completely digitized the core national trend DNA.</>
                ) : (
                  <>面对茶颜悦色高频的新品季与区域化营销，我抛弃了极其脆弱的“人海战术”。通过训练品牌专属的视觉基座模型（Style Lora），我将核心国潮 DNA <span className="whitespace-nowrap">彻底数据化。</span></>
                )}
              </p>
              
              <div className="pt-[10px]">
                <p>
                  {isEn ? (
                    "Displayed on the right is the true throughput of this computing engine. Simply by inputting flavor variables or regional tags, the system can complete an exponential explosion from a single product poster to a matrix of hundreds of SKUs within minutes. This is true equality of productivity."
                  ) : (
                    <>右侧展示的，是这台算力引擎的真实吞吐量。只需输入口味变量或地域标签，系统便能在数分钟内完成从单品海报到百款 SKU 矩阵的指数级爆发。这是真正的<span className="whitespace-nowrap">生产力平权。</span></>
                  )}
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Right Column (Images) */}
        <div className="w-full lg:w-[60%] flex flex-col gap-16 md:gap-32 relative z-0 lg:pl-10 mt-[30px]">
          
          {/* Module 1 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col gap-4"
          >
            <div className="flex flex-col gap-2 mb-2">
              <span className="text-[#D5B667] tracking-tighter text-[12px] font-sans font-bold uppercase flex items-center gap-2">
                <span className="font-mono slashed-zero text-[12px]">01</span>
                {isEn ? 'BRAND VISUAL FOUNDATION' : '品牌视觉基座'}
              </span>
              <p className="text-white text-[13px] md:text-[15px] font-normal tracking-wide">
                {isEn ? 'Extract and train an exclusive Style Lora, fundamentally locking the brand\'s iconic "New Chinese National Trend" style at the algorithm level.' : '提炼并训练专属 Style Lora，将品牌标志性的“新中式国潮”风格彻底锁定在算法底层。'}
              </p>
            </div>
            <div className="w-full aspect-video rounded-[24px] overflow-hidden relative flex items-center justify-center">
              <img src="https://img.nickiresume.cn/Nimage/03AIGC/Tea01-1.webp" alt="Brand DNA Enclosing" className="absolute inset-0 w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none"></div>
              <div className="absolute bottom-6 left-8 z-10">
                <span className="text-white/50 text-[13px] md:text-[13px] font-medium tracking-tighter">
                  {isEn ? 'Brand DNA Enclosing' : '视觉基因数据化封装'}
                </span>
              </div>
            </div>
            
            <div className="flex flex-col gap-2 mt-2">
              <h5 className="text-white text-[14px] md:text-[13px] font-medium tracking-wide">
                {isEn ? 'Training Set Tagging Example' : '训练集打标示例'}
              </h5>
              <p className="text-white/50 text-[9px] md:text-[10px] font-light leading-relaxed text-justify break-words w-full">
                {isEn 
                  ? 'The prompt structure of a classic Sexy Tea style layout I trained, combined with the Danbooru tagging system: Tag combination: chyys_style, 1girl, solo, classical chinese woman, profile, closed eyes, traditional chinese clothes, hanfu, holding round fan, plum blossom, traditional chinese painting, ink wash painting, fine lineart, rice paper texture, muted color, negative space, minimalism, calligraphy background, cinnabar red accents, zen, elegant.' 
                  : '我训练的一张经典的茶颜风 layout 在结合 Danbooru 标签体系下的 prompt 结构：Tag 组合: chyys_style, 1girl, solo, classical chinese woman, profile, closed eyes, traditional chinese clothes, hanfu, holding round fan, plum blossom, traditional chinese painting, ink wash painting, fine lineart, rice paper texture, muted color, negative space, minimalism, calligraphy background, cinnabar red accents, zen, elegant.'}
              </p>
            </div>

            <div className="w-full aspect-[16/9] rounded-[24px] overflow-hidden relative flex items-center justify-center mt-2">
              <img src="https://img.nickiresume.cn/Nimage/03AIGC/Tea02.webp" alt="Training Set Tagging Example" className="absolute inset-0 w-full h-full object-cover" />
            </div>
          </motion.div>

          {/* Module 2 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col gap-4"
          >
            <div className="flex flex-col gap-2 mb-2">
              <span className="text-[#D5B667] tracking-tighter text-[12px] font-sans font-bold uppercase flex items-center gap-2">
                <span className="font-mono slashed-zero text-[12px]">02</span>
                {isEn ? 'SKU EXPONENTIAL FISSION' : 'SKU 指数裂变'}
              </span>
              <p className="text-white text-[13px] md:text-[15px] font-normal tracking-wide">
                {isEn ? 'Transcendent of linear diagramming bottlenecks, merely by modifying Prompt variables, instantly and concurrently generate promotional matrix images for dozens of flavors.' : '跨越线性作图瓶颈，只需修改 Prompt 变量，即刻并发生成数十种口味的宣发矩阵图。'}
              </p>
            </div>
            <div className="w-full aspect-video rounded-[24px] overflow-hidden relative flex items-center justify-center">
              <img src="https://img.nickiresume.cn/Nimage/03AIGC/SKU.webp" alt="Matrix Generation" className="absolute inset-0 w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none"></div>
              <div className="absolute bottom-6 left-8 z-10">
                <span className="text-white/50 text-[13px] md:text-[13px] font-medium tracking-tighter">
                  {isEn ? 'Matrix Generation' : 'SKU 无级扩展与裂变'}
                </span>
              </div>
            </div>
          </motion.div>

          {/* Module 3 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col gap-4 mt-[30px]"
          >
            <div className="flex flex-col gap-2 mb-2">
              <span className="text-[#D5B667] tracking-tighter text-[12px] font-sans font-bold uppercase flex items-center gap-2">
                <span className="font-mono slashed-zero text-[12px]">03</span>
                {isEn ? 'AGILE LOCALIZED MARKETING' : '区域化敏捷营销'}
              </span>
              <p className="text-white text-[13px] md:text-[15px] font-normal tracking-wide">
                {isEn ? 'Stripping away traditional scene building costs, rapidly combining city landmarks with product assets to achieve regional marketing blitzes within 24 hours.' : '剥离传统场景搭建成本，极速组合城市地标与产品资产，实现 24 小时内的区域营销闪电战。'}
              </p>
            </div>
            <div className="w-full aspect-video rounded-[24px] overflow-hidden relative flex items-center justify-center">
              <img src="https://img.nickiresume.cn/Nimage/03AIGC/4city.webp" alt="Agile Localization" className="absolute inset-0 w-full h-full object-cover object-center" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none"></div>
              <div className="absolute bottom-6 left-8 z-10">
                <span className="text-white/50 text-[13px] md:text-[13px] font-medium tracking-tighter">
                  {isEn ? 'Agile Localization' : '区域化场景敏捷响应'}
                </span>
              </div>
            </div>
          </motion.div>

          {/* Module 4 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col gap-4"
          >
            <div className="flex flex-col gap-2 mb-2">
              <span className="text-[#D5B667] tracking-tighter text-[12px] font-sans font-bold uppercase flex items-center gap-2">
                <span className="font-mono slashed-zero text-[12px]">04</span>
                {isEn ? 'A/B TESTING & E-COMMERCE HIGH CONCURRENCY' : 'A/B 测试与电商高并发'}
              </span>
              <p className="text-white text-[13px] md:text-[15px] font-normal tracking-wide">
                {isEn ? 'Generating massive marketing materials at zero marginal cost, providing ample A/B testing ammunition for e-commerce advertising, completely freeing the team\'s hands.' : '零边际成本生成海量营销物料，为电商投放提供充足的 A/B 测试弹药，彻底解放团队双手。'}
              </p>
            </div>
            <div className="w-full aspect-video rounded-[24px] overflow-hidden relative flex items-center justify-center">
              <img src="https://img.nickiresume.cn/Nimage/03AIGC/Test%20A.webp" alt="A/B Testing A" className="absolute inset-0 w-full h-full object-cover object-center" />
            </div>
            <div className="w-full aspect-video rounded-[24px] overflow-hidden relative flex items-center justify-center">
              <img src="https://img.nickiresume.cn/Nimage/03AIGC/Test%20B.webp" alt="A/B Testing B" className="absolute inset-0 w-full h-full object-cover object-center" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none"></div>
              <div className="absolute bottom-6 left-8 z-10">
                <span className="text-white/50 text-[13px] md:text-[13px] font-medium tracking-tighter">
                  {isEn ? 'High Throughput' : '极速全域并发与分发'}
                </span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
