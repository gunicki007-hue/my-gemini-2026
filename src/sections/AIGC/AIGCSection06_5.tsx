import React from 'react';
import { motion } from 'motion/react';
import { useDictionary } from '../../hooks/useDictionary';
import { GitBranch, Image as ImageIcon, LayoutGrid, Users, Database, XCircle, CheckCircle2 } from 'lucide-react';
import { 
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer
} from 'recharts';

const chartData = [
  { name: '0', ai: 0, trad: 2 },
  { name: '10', ai: 6, trad: 6 },
  { name: '50', ai: 8, trad: 12 },
  { name: '100', ai: 9.5, trad: 18 },
  { name: '200', ai: 10, trad: 28 },
  { name: '500', ai: 10.5, trad: 36 },
  { name: '1000', ai: 10.8, trad: 42 },
  { name: '2000', ai: 11, trad: 50 },
  { name: '5000', ai: 11.2, trad: 58 },
];

const CustomTooltip = ({ active, payload, label, isEn }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-[#111111] border border-white/10 rounded-lg p-3 text-xs shadow-xl backdrop-blur-md">
        <p className="text-white/70 mb-2">{isEn ? 'Output:' : '产出数量:'} {label} {isEn ? 'Sets' : '组'}</p>
        <div className="flex flex-col gap-1.5">
          {payload.map((entry: any, index: number) => (
            <div key={`item-${index}`} style={{ color: entry.color }} className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: entry.color }} />
                <span>{entry.dataKey === 'ai' ? (isEn ? 'AI Workflow' : 'AI工作流') : (isEn ? 'Traditional' : '传统模式')}</span>
              </div>
              <span className="font-medium text-white">{entry.value} {isEn ? 'Days' : '天'}</span>
            </div>
          ))}
        </div>
      </div>
    );
  }
  return null;
};

export const AIGCSection06_5 = () => {
  const { language } = useDictionary();
  const isEn = language === 'en';

  return (
    <section className="relative w-full py-24 md:py-32 px-6 md:px-[80px] bg-[#050505] overflow-hidden flex flex-col justify-center border-t border-white/[0.02]">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="w-full flex flex-col items-center mx-auto"
      >
        <div className="flex flex-col items-center text-center mb-16 md:mb-24">
          <h2 className={`text-white text-[28px] md:text-[36px] xl:text-[44px] font-extrabold tracking-tighter leading-[1.2] mb-6 ${isEn ? 'font-sans' : 'font-puhuiti'}`}>
            {isEn ? (
              <>AI Visual Workflow<br/>Traditional vs Intelligent Production Efficiency Summary</>
            ) : (
              <>AI视觉工作流<br/>传统制作与智能化产出效率总结</>
            )}
          </h2>
          <p className={`w-full max-w-[800px] text-white/70 ${isEn ? 'font-sans font-light tracking-[0.015em] leading-[1.6] text-[16px]' : 'font-sans font-light tracking-[0.03em] leading-[1.8] text-[15px] xl:text-[16px]'}`}>
            {isEn 
              ? 'We achieved the implementation of AI workflows from two major visual directions: extracting visual tone through brand-specific Lora training, paired with standardized ComfyUI processes, to achieve full-funnel visual consistency from brand posters to TVCs, shortening long-term production cycles. Simultaneously, relying on mature AI processes, we realized rapid response and batch production of e-commerce matrix materials, solving the traditional model\'s issues of high time consumption and limited production capacity.' 
              : '本次从两大视觉方向完成AI工作流落地：通过品牌专属Lora训练萃取视觉调性，搭配ComfyUI标准化流程，实现从品牌海报到TVC的全链路视觉统一，压缩长线制作周期；同时依托成熟AI流程，实现电商矩阵物料极速响应与批量产出，解决传统模式耗时久、产能受限的问题。'}
          </p>
        </div>

        <div className="w-full grid grid-cols-1 lg:grid-cols-5 gap-8 md:gap-12 lg:gap-8 items-stretch">
          {/* Image 1 (2 Columns) */}
          <div className="w-full lg:col-span-2 h-full min-h-[400px] bg-[#111111] rounded-[24px] overflow-hidden relative border border-white/[0.05] p-6 flex flex-col justify-between">
            <div className="mb-6">
              <h3 className="text-white text-[16px] md:text-[18px] font-bold tracking-tight mb-2">
                {isEn ? 'Visual Production Time Cost Comparison' : '视觉生产投入 时长对比'}
              </h3>
              <div className="flex flex-col gap-2 mt-4 text-[11px] md:text-[12px]">
                <div className="flex items-center gap-2">
                  <div className="w-4 h-px bg-white/40 border-t border-dashed border-white/40" />
                  <span className="text-white/50">{isEn ? 'Traditional Workflow' : '传统视觉制作工作流'}</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-0.5 bg-[#E5B979]" />
                  <span className="text-[#E5B979]/80">{isEn ? 'AI Workflow (LoRA + ComfyUI)' : 'AI工作流（LoRA调性训练+ComfyUI固化流程）'}</span>
                </div>
              </div>
            </div>

            <div className="flex-1 w-full relative min-h-[250px] mt-6">
              {/* Overlay Annotations */}
              <div className="absolute top-[28%] md:top-[38%] left-[12%] text-[9px] md:text-[10px] text-[#E5B979] pointer-events-none z-10 flex flex-col items-center">
                <div className="whitespace-nowrap text-center mb-1">
                  {isEn ? <>High initial input,<br/>for model training</> : <>前期投入较高，<br/>用于模型训练与流程搭建</>}
                </div>
                <div className="w-px h-8 md:h-12 border-l border-dashed border-[#E5B979]/50 relative">
                  <div className="absolute -bottom-1 left-[-3px] w-0 h-0 border-l-[3px] border-l-transparent border-r-[3px] border-r-transparent border-t-[4px] border-t-[#E5B979]/40" />
                </div>
              </div>

              <div className="absolute top-2 bottom-8 right-0 w-[115px] flex flex-col justify-between pointer-events-none z-10">
                <div className="text-[9px] md:text-[10px] text-white/50 text-left leading-snug">
                  {isEn ? <>Traditional:<br/>More output = more time<br/>Time cost stacks up continuously</> : <>传统模式：<br/>产出越多，耗时越久<br/>时间成本持续叠加</>}
                </div>

                <div className="flex flex-col items-center justify-center flex-1 py-3 text-[9px] md:text-[10px] text-[#E5B979]/80">
                  <div className="h-full min-h-[20px] max-h-[40px] w-px border-l border-dashed border-[#E5B979]/40 relative mb-1">
                    <div className="absolute -top-[3px] left-[-3px] w-0 h-0 border-l-[3px] border-l-transparent border-r-[3px] border-r-transparent border-b-[4px] border-b-[#E5B979]/40" />
                    <div className="absolute -bottom-[3px] left-[-3px] w-0 h-0 border-l-[3px] border-l-transparent border-r-[3px] border-r-transparent border-t-[4px] border-t-[#E5B979]/40" />
                  </div>
                  <span className="text-left w-full leading-tight">{isEn ? 'Long-term reuse, time saved' : '长期复用，时间成本大幅节约'}</span>
                </div>

                <div className="text-[9px] md:text-[10px] text-[#E5B979]/80 text-left leading-snug">
                  {isEn ? <>AI Mode:<br/>Setup once, reuse forever<br/>Mass production barely adds time</> : <>AI模式：<br/>前期沉淀，后期复用<br/>量产后时间几乎不增加</>}
                </div>
              </div>

              <div className="absolute top-0 left-0 text-white/30 text-[9px] md:text-[10px] transform -translate-y-4">
                {isEn ? 'Time (Days)' : '整体工作时长投入 (天)'}
              </div>
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={chartData} margin={{ top: 20, right: 125, left: -20, bottom: 20 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" vertical={false} />
                  <XAxis 
                    dataKey="name" 
                    stroke="rgba(255,255,255,0.2)" 
                    tick={{ fill: 'rgba(255,255,255,0.4)', fontSize: 10 }}
                    tickLine={false}
                    axisLine={{ stroke: 'rgba(255,255,255,0.2)' }}
                    dy={10}
                  />
                  <YAxis 
                    stroke="rgba(255,255,255,0.2)" 
                    tick={{ fill: 'rgba(255,255,255,0.4)', fontSize: 10 }}
                    tickLine={false}
                    axisLine={{ stroke: 'rgba(255,255,255,0.2)' }}
                    dx={-10}
                  />
                  <Tooltip content={<CustomTooltip isEn={isEn} />} cursor={{ stroke: 'rgba(255,255,255,0.1)' }} />
                  <Line 
                    type="monotone" 
                    dataKey="trad" 
                    stroke="rgba(255,255,255,0.3)" 
                    strokeWidth={1.5} 
                    strokeDasharray="4 4" 
                    dot={(props: any) => {
                      const { cx, cy, payload } = props;
                      if (payload.name === '5000') {
                         return <circle key="dot-trad" cx={cx} cy={cy} r={3} fill="#111" stroke="rgba(255,255,255,0.4)" strokeWidth={1.5} />;
                      }
                      return <svg key={`none-trad-${payload.name}`} />;
                    }}
                    activeDot={{ r: 4, fill: '#fff' }}
                  />
                  <Line 
                    type="monotone" 
                    dataKey="ai" 
                    stroke="#E5B979" 
                    strokeWidth={2}
                    dot={(props: any) => {
                      const { cx, cy, payload } = props;
                      if (payload.name === '10' || payload.name === '5000') {
                         return <circle key={`dot-ai-${payload.name}`} cx={cx} cy={cy} r={3.5} fill="#E5B979" stroke="#111" strokeWidth={1.5} />;
                      }
                      return <svg key={`none-ai-${payload.name}`} />;
                    }}
                    activeDot={{ r: 5, fill: '#E5B979', stroke: '#111', strokeWidth: 2 }}
                  />
                </LineChart>
              </ResponsiveContainer>
              <div className="absolute bottom-0 right-0 text-white/30 text-[10px] transform translate-y-6">
                {isEn ? 'Output Quantity' : '视觉物料产出数量 (组)'}
              </div>
            </div>
          </div>
          
          {/* Table (3 Columns)  */}
          <div className="w-full lg:col-span-3 h-full bg-[#111111] rounded-[24px] overflow-x-auto relative border border-white/[0.05] p-6 lg:p-8 flex items-center">
             <table className="w-full text-left border-collapse min-w-[600px] md:min-w-0">
               <thead>
                 <tr className="border-b border-white/[0.05]">
                    <th className="pb-4 font-sans font-medium text-white/50 w-[20%] text-[13px] md:text-[14px]">
                      {isEn ? 'Dimension' : '对比维度'}
                    </th>
                    <th className="pb-4 font-sans font-medium text-white/50 w-[40%] pl-2 md:pl-4 text-[13px] md:text-[14px]">
                      <div className="flex items-center gap-2">
                        <XCircle className="w-4 h-4 md:w-5 md:h-5 text-white/30 shrink-0" />
                        {isEn ? 'Traditional Workflow' : '传统视觉工作流'}
                      </div>
                    </th>
                    <th className="pb-4 font-sans font-medium text-[#E5B979] w-[40%] pl-2 md:pl-4 text-[13px] md:text-[14px]">
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 md:w-5 md:h-5 text-[#E5B979] shrink-0" />
                        {isEn ? 'AI Lora+ComfyUI' : 'AI Lora+ComfyUI 工作流'}
                      </div>
                    </th>
                 </tr>
               </thead>
               <tbody className="divide-y divide-white/[0.05] text-[12px] md:text-[13px] font-light">
                 {/* Row 1 */}
                 <tr>
                   <td className="py-4 md:py-6 pr-2 md:pr-4 text-white/80">
                     <div className="flex items-center gap-2 md:gap-3">
                       <GitBranch className="w-4 h-4 md:w-5 md:h-5 text-white/30 shrink-0" />
                       <span className="whitespace-nowrap">{isEn ? 'Prod Logic' : '生产逻辑'}</span>
                     </div>
                   </td>
                   <td className="py-4 md:py-6 px-2 md:px-4 text-white/50 border-l border-white/[0.05]">
                     {isEn ? 'Built from scratch, relies on real shooting & manual post' : '单次从零制作，依赖实拍+人工后期'}
                   </td>
                   <td className="py-4 md:py-6 pl-2 md:pl-4 text-white/80 border-l border-white/[0.05]">
                     {isEn ? (
                       <>One-time setup: train brand Lora & workflow, <span className="text-[#E5B979]">infinitely reusable</span> later</>
                     ) : (
                       <>前期一次性沉淀：训练品牌Lora+固化工作流，后期可<span className="text-[#E5B979]">无限复用</span></>
                     )}
                   </td>
                 </tr>
                 {/* Row 2 */}
                 <tr>
                   <td className="py-4 md:py-6 pr-2 md:pr-4 text-white/80">
                     <div className="flex flex-col xl:flex-row xl:items-center gap-2 md:gap-3">
                       <span className="flex items-center gap-2 md:gap-3 shrink-0"><ImageIcon className="w-4 h-4 md:w-5 md:h-5 text-white/30" />{isEn ? 'Brand Proj.' : '品牌项目'}</span>
                       <span className="whitespace-nowrap xl:ml-0 text-white/50 text-[11px] md:text-[12px]">{isEn ? 'Poster→TVC' : '海报→TVC'}</span>
                     </div>
                   </td>
                   <td className="py-4 md:py-6 px-2 md:px-4 text-white/50 border-l border-white/[0.05]">
                     {isEn ? '3-5 days; real shooting refinement, disjointed styles; revision time multiplies' : '全周期3–5天；多环节实拍打磨，跨物料风格易割裂；改稿耗时成倍增加'}
                   </td>
                   <td className="py-4 md:py-6 pl-2 md:pl-4 text-white/80 border-l border-white/[0.05]">
                      {isEn ? (
                        <>Setup 1 day; iterates in hours; unified visual, revision time <span className="text-[#E5B979]">greatly reduced</span></>
                      ) : (
                        <>前期搭建1天；复用后几小时完成迭代；固定品牌调性，海报到TVC视觉统一，改稿耗时<span className="text-[#E5B979]">大幅缩减</span></>
                      )}
                   </td>
                 </tr>
                 {/* Row 3 */}
                 <tr>
                   <td className="py-4 md:py-6 pr-2 md:pr-4 text-white/80">
                     <div className="flex items-center gap-2 md:gap-3">
                       <LayoutGrid className="w-4 h-4 md:w-5 md:h-5 text-white/30 shrink-0" />
                       <span className="whitespace-nowrap">{isEn ? 'E-commerce' : '电商矩阵出图'}</span>
                     </div>
                   </td>
                   <td className="py-4 md:py-6 px-2 md:px-4 text-white/50 border-l border-white/[0.05]">
                     {isEn ? '2-3 days; tasks increase hours linearly, hard to handle urgent needs' : '交付周期2–3天；产出越多工时线性叠加，紧急需求难以承接'}
                   </td>
                   <td className="py-4 md:py-6 pl-2 md:pl-4 text-white/80 border-l border-white/[0.05]">
                      {isEn ? (
                        <><span className="text-[#E5B979]">1-2 hr batch output</span>; extra output without extra time, perfect for frequent promos</>
                      ) : (
                        <>流程成熟后<span className="text-[#E5B979]">1–2小时批量出图</span>；增量产出几乎不额外增加工时，适配高频上新&大促急单</>
                      )}
                   </td>
                 </tr>
                 {/* Row 4 */}
                 <tr>
                   <td className="py-4 md:py-6 pr-2 md:pr-4 text-white/80">
                     <div className="flex items-center gap-2 md:gap-3">
                       <Users className="w-4 h-4 md:w-5 md:h-5 text-white/30 shrink-0" />
                       <span className="whitespace-nowrap">{isEn ? 'Manpower' : '人力工时'}</span>
                     </div>
                   </td>
                   <td className="py-4 md:py-6 px-2 md:px-4 text-white/50 border-l border-white/[0.05]">
                     {isEn ? 'Multi-role collab, huge overall hour consumption' : '多岗位协作，整体工时消耗大'}
                   </td>
                   <td className="py-4 md:py-6 pl-2 md:pl-4 text-white/80 border-l border-white/[0.05]">
                      {isEn ? (
                        <>Small initial time cost, <span className="text-[#E5B979]">drastically cuts repetitive manual labor</span> later</>
                      ) : (
                        <>前期少量工时搭建体系，后期<span className="text-[#E5B979]">大量削减重复人工耗时</span></>
                      )}
                   </td>
                 </tr>
                 {/* Row 5 */}
                 <tr>
                   <td className="py-4 md:py-6 pr-2 md:pr-4 text-white/80">
                     <div className="flex items-center gap-2 md:gap-3">
                       <Database className="w-4 h-4 md:w-5 md:h-5 text-white/30 shrink-0" />
                       <span className="whitespace-nowrap">{isEn ? 'Asset Accum.' : '资产沉淀'}</span>
                     </div>
                   </td>
                   <td className="py-4 md:py-6 px-2 md:px-4 text-white/50 border-l border-white/[0.05]">
                     {isEn ? 'No asset creation, every new request costs full time again' : '单次产出无沉淀，每次需求重新消耗时间'}
                   </td>
                   <td className="py-4 md:py-6 pl-2 md:pl-4 text-white/80 border-l border-white/[0.05]">
                      {isEn ? (
                        <>Model+workflow act as long-term assets, reuse means <span className="text-[#E5B979]">saving time over and over</span></>
                      ) : (
                        <>Lora模型+工作流成为长期视觉资产，反复<span className="text-[#E5B979]">复用持续省时</span></>
                      )}
                   </td>
                 </tr>
               </tbody>
             </table>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
