import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'motion/react';
import { useDictionary } from '../../hooks/useDictionary';
import { useNavigate, useLocation } from 'react-router-dom';

// ==========================================
// 🚨 网址与内容配置区 (供您后续直接在这里替换)
// 【推荐图片画幅建议】：
// 右侧卡片的最高物理边际为 max-h-[85vh] (占屏幕高度85%)，左右拉伸自适应。
// 建议输出素材比例：长宽比介于 16:9 到 21:9 (宽屏) 之间。
// 标准参考尺寸：1920x1080 (居中裁切安全区) 或 1600x900
// ==========================================
const PROJECTS_DATA = [
  {
    id: "web3",
    en: { title: "WEB3", target: "WEB3 FINANCIAL ECOSYSTEM", desc: "Branding / UI/UX / System" },
    cn: { title: "数字金融", target: "Web3  金融生态", desc: "品牌设计 / UI/UX / 体验系统" },
    image: "https://img.nickiresume.cn/images/0418resume/02-5.webp"
  },
  {
    id: "insurtech",
    en: { title: "INSURTECH", target: "INSURTECH BRAND & IDENTITY", desc: "Brand Refresh / Performance Design / Mascot Identity" },
    cn: { title: "保险科技", target: "数字保险品牌", desc: "品牌升级/ 运营转换 / IP定制" },
    image: "https://img.nickiresume.cn/Nimage/04Event/0504-011.webp"
  },
  {
    id: "aigc",
    en: { title: "AIGC", target: "AIGC FULL-DOMAIN WORKFLOW", desc: "AI Project Experience / Creative Visual Design / AIGC Workflow" },
    cn: { title: "AIGC", target: "AIGC全域工作流", desc: "AI项目体验 / 创意视觉设计 / AIGC工作流" },
    image: "https://img.nickiresume.cn/images/0418resume/04-4.webp"
  },
  {
    id: "spatial",
    en: { title: "SPATIAL", target: "MIXED REALITY SPACE", desc: "Event Visuals / Spatial Design / Experience Delivery" },
    cn: { title: "体验空间", target: "品牌活动与空间", desc: "活动视觉 / 空间设计 / 体验呈现" },
    image: "https://img.nickiresume.cn/images/0418resume/05-1.webp"
  }
];

// 核心风沙 Canvas 引擎
const ParticleSeam = ({ mouseRef, isHoveringCard }: { mouseRef: React.MutableRefObject<{x: number, y: number}>, isHoveringCard: boolean }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    let dpr = window.devicePixelRatio || 1;
    let w = window.innerWidth; 
    let h = window.innerHeight;
    
    canvas.width = w * dpr;
    canvas.height = h * dpr;
    ctx.scale(dpr, dpr);
    canvas.style.width = `${w}px`;
    canvas.style.height = `${h}px`;
    
    // Balanced particles: visible but not blinding
    const pCount = window.innerWidth < 768 ? 25 : 50;
    let particles = Array.from({length: pCount}, () => ({
      x: w * 0.77 + (Math.random() * 80 - 40),
      y: Math.random() * h,
      size: Math.random() * 1.5 + 0.5, 
      speedX: -(Math.random() * 0.3 + 0.1), 
      speedY: -(Math.random() * 0.5 + 0.1), 
      color: Math.random() > 0.85 ? `rgba(211, 47, 47, ${Math.random() * 0.6 + 0.2})` : `rgba(255, 255, 255, ${Math.random() * 0.4 + 0.1})`, 
      assignedEdge: Math.floor(Math.random() * 4),
      edgeProgress: Math.random() 
    }));

    let rafId: number;
    let time = 0;

    const render = () => {
      ctx.clearRect(0, 0, w, h);
      time += 0.01;
      
      const targetY = mouseRef.current.y;
      const targetX = mouseRef.current.x;

      const cardEl = document.getElementById('project-card');
      const rect = cardEl ? cardEl.getBoundingClientRect() : null;

      particles.forEach(p => {
        if (isHoveringCard && rect) {
          const pad = 2; 
          const left = rect.left - pad;
          const right = rect.right + pad;
          const top = rect.top - pad;
          const bottom = rect.bottom + pad;

          let tx=0, ty=0;
          if (p.assignedEdge === 0) {
            tx = left + p.edgeProgress * rect.width;
            ty = top;
          } else if (p.assignedEdge === 1) {
            tx = right;
            ty = top + p.edgeProgress * rect.height;
          } else if (p.assignedEdge === 2) {
            tx = left + (1 - p.edgeProgress) * rect.width; 
            ty = bottom;
          } else if (p.assignedEdge === 3) {
            tx = left;
            ty = top + (1 - p.edgeProgress) * rect.height; 
          }

          p.edgeProgress += 0.0015;
          if (p.edgeProgress > 1) {
            p.edgeProgress = 0;
            p.assignedEdge = (p.assignedEdge + 1) % 4;
          }

          p.x += (tx - p.x) * 0.05;
          p.y += (ty - p.y) * 0.05;

        } else {
          p.x += p.speedX;
          p.y += p.speedY + Math.sin(time + p.x * 0.05) * 0.2;
          
          if (targetX > w * 0.6) {
            const dy = targetY - p.y;
            const dist = Math.abs(dy);
            if (dist < 250) { 
              p.y += (dy / dist) * Math.max(0, 250 - dist) * 0.003;
              p.x += Math.max(0, 250 - dist) * -0.005;
            }
          }
          
          const spawnBaseX = w * 0.77;
          if (p.y < -50 || p.x < spawnBaseX - 250) {
            p.x = spawnBaseX + (Math.random() * 80 - 20);
            p.y = h + 50;
          }
        }

        ctx.fillStyle = p.color;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
      });

      rafId = requestAnimationFrame(render);
    };
    render();

    const resize = () => {
      w = window.innerWidth;
      h = window.innerHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.scale(dpr, dpr);
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
    };
    window.addEventListener('resize', resize);
    
    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener('resize', resize);
    };
  }, [mouseRef, isHoveringCard]);

  return (
    <canvas 
      ref={canvasRef} 
      className="absolute inset-0 pointer-events-none z-20 mix-blend-screen" 
    />
  );
};

export const Projects = () => {
  const { language } = useDictionary();
  const navigate = useNavigate();
  const location = useLocation();
  const [activeIndex, setActiveIndex] = useState(() => {
    // Check if we navigated back with a specific target project
    const locationState = location.state as { projectId?: string };
    if (locationState?.projectId) {
      const idx = PROJECTS_DATA.findIndex(p => p.id === locationState.projectId);
      if (idx !== -1) return idx;
    }
    return 0;
  });
  const [isHoveringCard, setIsHoveringCard] = useState(false);
  const mouseGlobal = useRef({x: window.innerWidth/2, y: window.innerHeight/2});
  const containerRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 85%", "end 15%"]
  });

  // Track absolute scroll for full "react interaction" fade in & out
  const titleOpacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const titleY = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [60, 0, 0, -60]);

  const contentOpacity = useTransform(scrollYProgress, [0.1, 0.3, 0.9, 1], [0, 1, 1, 0]);
  const contentY = useTransform(scrollYProgress, [0.1, 0.3, 0.9, 1], [60, 0, 0, -60]);

  useEffect(() => {
    const handleGlobalMouse = (e: MouseEvent) => {
      mouseGlobal.current = { x: e.clientX, y: e.clientY };
    };
    window.addEventListener('mousemove', handleGlobalMouse);
    return () => window.removeEventListener('mousemove', handleGlobalMouse);
  }, []);

  return (
    <section ref={containerRef} id="projects" className="h-[100vh] w-full relative flex flex-col overflow-hidden bg-black text-white">
      {/* Canvas Particle Seam */}
      <ParticleSeam mouseRef={mouseGlobal} isHoveringCard={isHoveringCard} />

      {/* ========================================================= */}
      {/* Top Title Section (Case Studies)                          */}
      {/* ========================================================= */}
      <motion.div 
        style={{ opacity: titleOpacity, y: titleY }}
        className="w-full pt-20 pb-4 pl-6 md:pl-[80px] relative z-10"
      >
        <h1 
          className={`uppercase ${language === 'en' ? 'text-[46px] font-extrabold font-sans tracking-tighter leading-[1.05]' : 'text-[46px] font-bold font-puhuiti tracking-tighter leading-[1.1]'}`}
        >
          {language === 'en' ? 'CASE STUDIES' : '作品档案'}
        </h1>
      </motion.div>

      {/* ========================================================= */}
      {/* Main Content Split: 30% Nav | 70% Interactive Display     */}
      {/* ========================================================= */}
      <motion.div style={{ opacity: contentOpacity, y: contentY }} className="flex-1 flex w-full relative z-10 min-h-0 pb-10">
        <div className="w-full flex h-full -translate-y-[40px]">
        {/* Left Axis: 75% Display Area (Moved from Right, Increased width) */}
        <div className="w-[75%] h-full relative py-6 md:py-10 pl-6 md:pl-[80px] pr-8 flex items-center justify-start">
          <motion.div 
            id="project-card"
            className="w-[calc(100%+60px)] max-w-[1500px] aspect-[19/10] max-h-[100%] rounded-[32px] overflow-hidden relative cursor-pointer bg-[#0e0e10] shadow-[0_30px_80px_rgba(0,0,0,0.8)] group"
            whileHover={{ scale: 1.015 }} 
            onMouseEnter={() => setIsHoveringCard(true)}
            onMouseLeave={() => setIsHoveringCard(false)}
            transition={{ type: "spring", stiffness: 400, damping: 30 }}
            onClick={() => {
              // Click to navigate/open sub-page logic via id
              if (PROJECTS_DATA[activeIndex].id === 'web3') {
                navigate('/case-study/web3-financial');
              } else if (PROJECTS_DATA[activeIndex].id === 'insurtech') {
                navigate('/case-study/insurtech');
              } else if (PROJECTS_DATA[activeIndex].id === 'aigc') {
                navigate('/case-study/ai-strategy');
              } else if (PROJECTS_DATA[activeIndex].id === 'spatial') {
                navigate('/case-study/spatial-experience');
              } else {
                console.log("Navigating to:", PROJECTS_DATA[activeIndex].id);
              }
            }}
          >
            {/* iOS Glass Texture Layers for Card Edges */}
            <div className="absolute inset-0 z-30 pointer-events-none rounded-[32px] shadow-[inset_0_3px_15px_rgba(255,255,255,0.15),inset_0_0_0_1px_rgba(255,255,255,0.03),inset_0_-2px_10px_rgba(0,0,0,0.6)] mix-blend-screen" />
            <div className="absolute inset-0 z-30 pointer-events-none rounded-[32px] bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-40 mix-blend-overlay" />
            
            <AnimatePresence>
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
              className="absolute inset-0 w-full h-full pointer-events-none"
            >
              {/* Image Layer */}
              <img 
                src={PROJECTS_DATA[activeIndex].image}
                alt={PROJECTS_DATA[activeIndex].en.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover brightness-90 opacity-100 group-hover:scale-[1.15] transition-transform duration-[2000ms] ease-out"
              />
              
              {/* Bottom Gradient for Text Legibility */}
              <div className="absolute inset-x-0 bottom-0 h-[60%] bg-gradient-to-t from-black via-black/40 to-transparent pointer-events-none" />

              {/* Text Meta Data (Staggered Animation) */}
              <div className="absolute bottom-12 left-12 lg:bottom-16 lg:left-16 z-20 flex flex-col items-start">
                <motion.h2 
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.1, duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
                  className={`font-extrabold tracking-tighter text-white mb-3 shadow-black drop-shadow-2xl whitespace-pre-wrap ${language === 'en' ? 'text-[34px] md:text-[50px] leading-[1.1] uppercase font-sans' : 'text-[34px] md:text-[46px] font-puhuiti'}`}
                >
                  {language === 'en' 
                    ? PROJECTS_DATA[activeIndex].en.target 
                    : PROJECTS_DATA[activeIndex].cn.target.split(/([a-zA-Z0-9]+)/g).map((part, i) => 
                        /^[a-zA-Z0-9]+$/.test(part) 
                          ? <span key={i} className="font-sans font-black uppercase tracking-tighter text-[1.15em]">{part}</span>
                          : part
                      )
                  }
                </motion.h2>

                <motion.p 
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
                  className={`text-white/70 tracking-tighter mb-10 ${language === 'en' ? 'font-light text-[16px]' : 'font-bold text-[16px]'}`}
                >
                  {language === 'en' ? PROJECTS_DATA[activeIndex].en.desc : PROJECTS_DATA[activeIndex].cn.desc}
                </motion.p>

                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: isHoveringCard ? 1 : 0 }}
                  transition={{ duration: 0.4, ease: [0.25, 1, 0.5, 1] }}
                  className="pointer-events-none"
                >
                  <div className="flex items-center gap-3 text-white/90">
                    <span className="text-[10px] font-black tracking-tighter uppercase">
                      {language === 'en' ? 'MORE' : '更多'}
                    </span>
                    <span className="text-[10px] leading-none mb-[2px]">→</span>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </AnimatePresence>
          </motion.div>
        </div>

        {/* Right Axis: 25% Navigation Area (Moved from Left) */}
        <div className="w-[25%] h-full flex flex-col justify-center pr-6 md:pr-[80px] pb-10 selection:bg-transparent items-end transform -translate-y-5">
          <div className="flex flex-col items-end gap-6 border-r border-white/20 pr-6 relative w-auto">
            {/* Highlight Locator Line */}
            <motion.div 
              className="absolute right-[-2px] w-[3px] bg-white shadow-[0_0_10px_rgba(255,255,255,0.8)]"
              animate={{ top: `${activeIndex * 48}px` }}
              initial={false}
              transition={{ duration: 0.6, ease: [0.25, 1, 0.5, 1] }}
              style={{ height: '24px' }}
            />
            {PROJECTS_DATA.map((item, idx) => {
              const isActive = activeIndex === idx;
              const uiText = language === 'en' ? item.en.title : item.cn.title;

              return (
                <div 
                  key={item.id}
                  onMouseEnter={() => setActiveIndex(idx)}
                  className="relative flex items-center justify-end h-[24px] cursor-pointer"
                >
                  <span className={`whitespace-nowrap font-black tracking-widest uppercase text-right transition-colors duration-500 ease-out ${isActive ? 'text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.4)]' : 'text-white/30 hover:text-white/70'} ${language === 'en' ? 'text-[16px] md:text-[16px] font-sans' : 'text-[16px] md:text-[16px] font-puhuiti font-black tracking-tighter'}`}>
                    {uiText}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
        </div>
      </motion.div>
    </section>
  );
};
