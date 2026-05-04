import React from 'react';
import { useDictionary } from '../../hooks/useDictionary';
import { Link, useLocation, useNavigate } from 'react-router-dom';

export const Navbar = () => {
  const { language, toggleLanguage, nav } = useDictionary();
  const location = useLocation();
  const navigate = useNavigate();
  const isHomePage = location.pathname === '/';

  const [isHoveringLogo, setIsHoveringLogo] = React.useState(false);

  const projectCategories = {
    en: ['Web3 Financial Ecosystem', 'InsurTech Branding', 'AI-Driven Strategy & Creation', 'Brand Space & Experience'],
    zh: ['Web3 金融生态', '数字保险品牌', 'AI 驱动战略与创作', '品牌空间与体验设计']
  };

  const projectLinks = [
    '/case-study/web3-financial',
    '/case-study/insurtech',
    '/case-study/ai-strategy',
    '/case-study/spatial-experience'
  ];

  // Expo.easeOut: "弹性滑入"缓动曲线 - 取消了漫长的前摇，直接高速起步然后缓慢刹停
  const easeOutExpo = (x: number): number => {
    return x === 1 ? 1 : 1 - Math.pow(2, -10 * x);
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, key: string) => {
    e.preventDefault();
    
    const targetId = `#${key}`;

    if (!isHomePage) {
      // If not on homepage, navigate to home via state to avoid native browser hash jump fighting lenis
      navigate('/', { state: { scrollTo: key } });
      return;
    }

    const lenis = (window as any).lenis;
    
    if (lenis) {
      if (key === 'contact') {
        lenis.scrollTo(targetId, {
          duration: 1.5,
          easing: easeOutExpo,
          offset: 0
        });
      } else {
        // 启用弹性降落，前摇极短，并附带 -150px 的安全区以防导航挡住标题
        lenis.scrollTo(targetId, {
          duration: 1.5,
          easing: easeOutExpo,
          offset: -150
        });
      }
    } else {
      const element = document.querySelector(targetId);
      // Native fallback unfortunately doesn't support offset easily without custom math, 
      // but scroll-margin-top takes care of it if configured in CSS.
      if (element) element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Calculate Text Stroke for Logo based on Language and Hover state
  const getLogoStroke = () => {
    const baseStroke = language === 'zh' ? 0.6 : 0;
    const hoverAddition = isHoveringLogo ? 0.6 : 0;
    return `${baseStroke + hoverAddition}px currentColor`;
  };

  // Sub-page Specific Navigation Data
  const subNavTabs = location.pathname.includes('/insurtech') 
    ? {
        en: ['01 · BRAND VISUAL UPGRADE', '02 · PRODUCT EXPERIENCE REDESIGN', '03 · AI-DRIVEN CONVERSION', '04 · OMNICHANNEL MARKETING VISUALS'],
        zh: ['01 · 品牌视觉升维', '02 · 产品体验重构', '03 · AI 驱动转化', '04 · 全域营销视觉']
      }
    : location.pathname.includes('/aigc') || location.pathname.includes('/ai-strategy')
    ? {
        en: ['01 · Depth: Logic Orchestration', '02 · Height: Aesthetic Ceiling', '03 · Breadth: Agile Scaling'],
        zh: ['01 · 深度：逻辑中枢与决策编排', '02 · 高度：审美极值与光学解算', '03 · 广度：品牌敏捷与指数裂变']
      }
    : location.pathname.includes('/spatial-experience')
    ? {
        en: ['01 · SPATIAL COORDINATION', '02 · REAL-WORLD EXECUTION', '03 · HUMANISTIC NARRATIVE'],
        zh: ['01 · 空间统筹', '02 · 实境执行', '03 · 人文叙事']
      }
    : {
        en: ['01 · VISUAL IDENTITY', '02 · BRAND STRATEGY', '03 · DIGITAL PORTAL', '04 · UI/UX DESIGN', '05 · COMMUNITY & IP', '06 · PR & GLOBALIZATION'],
        zh: ['01 · 视觉识别', '02 · 品牌策略', '03 · 数字门户', '04 · UI/UX 设计', '05 · 社区生态与 IP', '06 · 公关与全球化']
      };

  // Active section tracking for sub-pages. Default to -1 so nothing is active if above section 0
  const [activeSection, setActiveSection] = React.useState(-1);

  React.useEffect(() => {
    if (isHomePage) return;

    const handleScroll = () => {
      let currentIdx = -1;
      const sections = Array.from(document.querySelectorAll('[id^="section-"]'));

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        const rect = section.getBoundingClientRect();
        
        // The header height is ~80px. So top <= 150px means it's scrolled well into the viewport
        if (rect.top <= 150) {
          const sectionId = section.id;
          
          // If we've completely scrolled past the last section, disable highlight
          if (i === sections.length - 1 && rect.bottom < 80) {
            currentIdx = -1;
          } else {
            if (location.pathname.includes('/insurtech')) {
              // Custom section-to-nav mapping for Insurtech
              if (sectionId === 'section-0') currentIdx = -1; // Hero
              else if (sectionId === 'section-1' || sectionId === 'section-2' || sectionId === 'section-3') {
                currentIdx = 0; // Nav 0: 01 BRAND VISUAL UPGRADE
              }
              else if (sectionId === 'section-4' || sectionId === 'section-5' || sectionId === 'section-6') {
                currentIdx = 1; // Nav 1: 02 PRODUCT EXPERIENCE REDESIGN
              }
              else if (sectionId === 'section-7') {
                currentIdx = 2; // Nav 2: 03 AI-DRIVEN CONVERSION
              }
              else if (sectionId === 'section-8') {
                currentIdx = 3; // Nav 3: 04 OMNICHANNEL MARKETING VISUALS
              }
              else currentIdx = parseInt(sectionId.replace('section-', ''));
            } else {
              currentIdx = parseInt(sectionId.replace('section-', ''));
            }
          }
          break;
        }
      }
      setActiveSection(currentIdx);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // Trigger once on mount
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [isHomePage, location.pathname]);

  const handleSubNavClick = (e: React.MouseEvent<HTMLAnchorElement>, idx: number) => {
    e.preventDefault();
    let targetId = `#section-${idx}`;
    
    if (location.pathname.includes('/insurtech')) {
      if (idx === 0) targetId = '#section-1';
      else if (idx === 1) targetId = '#section-4'; 
      else if (idx === 2) targetId = '#section-7'; // Nav 03: AI-Driven Conversion
      else if (idx === 3) targetId = '#section-8'; // Wait, let's assume section-8 next
    }

    const lenis = (window as any).lenis;
    if (lenis) {
      lenis.scrollTo(targetId, {
        duration: 1.5,
        easing: easeOutExpo,
        offset: -80 // Offset by header height to prevent overlapping
      });
    } else {
      const element = document.querySelector(targetId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  // Determine theme color based on route
  let themeColor = '#B5914A'; // Default gold
  if (location.pathname.includes('/web3-financial')) {
    themeColor = '#BEF63B'; // Web3 Neon Green
  } else if (location.pathname.includes('/insurtech')) {
    themeColor = '#4DB0FF'; // Insurtech Blue
  } else if (location.pathname.includes('/ai-strategy')) {
    themeColor = '#D5B667'; // AIGC Gold
  } else if (location.pathname.includes('/spatial-experience')) {
    themeColor = '#A66B4E'; // Spatial Brown/Copper
  }

  // Render Sub-Page Navigation (Case Study Nav)
  // Needs to be full width edge-to-edge
  if (!isHomePage) {
    return (
      <header className="fixed top-0 left-0 right-0 h-[80px] z-50 flex justify-between items-center bg-[#0a0a0c]/80 backdrop-blur-2xl border-b border-white/5 px-6 md:px-[60px] lg:px-[80px] transition-all">
        <div className="flex items-center h-full max-w-none w-full justify-between">
          
          {/* Left Area: Back Button + Nav Link Divider */}
          <div className="flex items-center gap-4 xl:gap-8 flex-1 min-w-0 mr-4">
            {/* Glassy Back Button */}
            <button 
              onClick={() => {
                let pId = 'web3';
                if (location.pathname.includes('insurtech')) {
                  pId = 'insurtech';
                } else if (location.pathname.includes('ai-strategy')) {
                  pId = 'aigc';
                } else if (location.pathname.includes('spatial-experience')) {
                  pId = 'spatial';
                }
                
                navigate('/', { state: { scrollTo: 'projects', projectId: pId } });
              }} 
              className="flex items-center justify-center h-[44px] gap-3 px-6 rounded-[22px] bg-[#1c1c1e]/60 backdrop-blur-2xl shadow-[0_10px_30px_rgba(0,0,0,0.6),inset_0_1px_1.5px_rgba(255,255,255,0.15)] transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] hover:scale-105 hover:bg-[#2c2c2e]/70 group border border-white/5 flex-shrink-0"
            >
              <svg 
                className="w-3.5 h-3.5 text-white transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-x-1.5" 
                viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"
              >
                <polyline points="15 18 9 12 15 6"></polyline>
              </svg>
              <span className="text-[14px] font-bold tracking-[0.2em] text-white uppercase mt-[2px]">{language === 'en' ? 'BACK' : '返回'}</span>
            </button>
            
            <div className="hidden lg:flex items-center gap-4 xl:gap-8 overflow-x-auto whitespace-nowrap pl-4 border-l border-white/10 h-10 flex-1 min-w-0 hide-scrollbar">
              {subNavTabs[language as 'en' | 'zh'].map((tab, idx) => {
                const isActive = activeSection === idx;
                return (
                  <a 
                    key={idx}
                    href={`#section-${idx}`}
                    onClick={(e) => handleSubNavClick(e, idx)}
                    className="uppercase text-[11px] xl:text-[13px] font-bold tracking-[0.05em] xl:tracking-[0.1em] transition-all duration-500 hover:opacity-100 flex-shrink-0"
                    style={{ color: isActive ? themeColor : 'rgba(255,255,255,0.4)' }}
                  >
                    {tab}
                  </a>
                );
              })}
            </div>
          </div>

          {/* Right side Lang toggle */}
          <div className="h-[44px] rounded-[22px] bg-[#1c1c1e]/60 backdrop-blur-2xl shadow-[0_10px_30px_rgba(0,0,0,0.6),inset_0_1px_1.5px_rgba(255,255,255,0.15)] px-6 flex items-center justify-center border border-white/5 flex-shrink-0 whitespace-nowrap">
            <button 
              onClick={toggleLanguage}
              className="flex gap-2 font-bold uppercase items-center group cursor-pointer text-[14px] tracking-[0.2em] relative"
            >
              <span className={`${language === 'en' ? 'text-white opacity-100' : 'text-white/40 group-hover:opacity-100'} transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] mt-[2px]`}>EN</span>
              <span className="text-white/30 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:opacity-100 mt-[2px]">/</span>
              <span className={`${language === 'zh' ? 'text-white opacity-100' : 'text-white/40 group-hover:opacity-100'} transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] mt-[2px]`}>中文</span>
            </button>
          </div>
        </div>
      </header>
    );
  }

  return (
    <header className="fixed top-6 md:top-10 left-6 md:left-[50px] right-6 md:right-[50px] h-[100px] z-50 px-6 md:px-[74px] flex justify-between items-center bg-[#1C1C1E]/80 backdrop-blur-[32px] saturate-150 border md:border-x border-white/10 rounded-[50px] md:rounded-[50px] shadow-[0_4px_30px_rgba(0,0,0,0.4)] transition-all">
      {/* Brand / Logo (Part 1 Anchor) */}
      <button 
        onClick={() => {
          if (!isHomePage) {
            navigate('/');
            return;
          }
          const lenis = (window as any).lenis;
          if (lenis) {
            lenis.scrollTo(0, { duration: 1.5, easing: easeOutExpo });
          } else {
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }
        }}
        onMouseEnter={() => setIsHoveringLogo(true)}
        onMouseLeave={() => setIsHoveringLogo(false)}
        className={`flex items-center tracking-[-0.02em] text-[18px] text-white cursor-pointer group flex-shrink-0 ${language === 'zh' ? 'font-["PingFang_SC","Microsoft_YaHei",sans-serif]' : 'font-sans'}`}
        style={{ WebkitTextStroke: getLogoStroke() }}
      >
        <span className="font-extrabold transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-skew-x-[10deg] group-hover:scale-[1.02] origin-bottom-left">NICKI</span>
        <span className={`text-white/60 font-light tracking-normal hidden sm:inline ml-2 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-skew-x-[10deg] group-hover:scale-[1.02] group-hover:text-white origin-bottom-left ${language === 'zh' ? 'text-[19px]' : 'text-[18px]'}`}>
          / {language === 'zh' ? 'AI赋能设计' : 'DESIGN × AI'}
        </span>
      </button>

      {/* Nav Links */}
      <div className="hidden md:flex gap-[62px] items-center h-full relative">
        {Object.entries(nav).map(([key, value]) => {
          const isProjects = key === 'projects';
          const isContact = key === 'contact';
          // 纯粹的 Hover 态，祛除点击后的顽固胶囊常驻
          const textClass = `relative z-10 flex items-center uppercase transition-all duration-300 ${language === 'en' ? 'text-[15px] tracking-[0.1em]' : 'text-[16px] tracking-wider'} ${isContact ? 'text-[#E3E3E3] hover:text-[#E3E3E3] hover:text-[1.02em]' : 'text-white/60 hover:text-white hover:text-[1.02em]'}`;

          return (
            <div key={key} className="relative group flex items-center h-full cursor-pointer">
              <a 
                href={`#${key}`} 
                onClick={(e) => {
                  handleNavClick(e, key); // Removed the block so clicking the main folder scrolls to it
                }}
                className={textClass}
              >
                {value}
                {isProjects && (
                  <svg className="w-3.5 h-3.5 ml-1.5 opacity-60 group-hover:rotate-180 transition-transform duration-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                )}
              </a>
              
              {/* Dropdown Menu */}
              {isProjects && (
                <div className="absolute top-10 left-1/2 -translate-x-1/2 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                  <div className="flex flex-col w-max min-w-[240px] bg-[#0A0A0A]/80 backdrop-blur-3xl border border-white/10 rounded-2xl p-2 shadow-[0_20px_40px_rgba(0,0,0,0.7)]">
                    {projectCategories[language as 'en' | 'zh'].map((cat, idx) => (
                      <Link 
                        key={idx} 
                        to={projectLinks[idx]} 
                        className={`block px-4 py-3 text-white/60 hover:text-white hover:bg-[#2A2A2E]/50 rounded-xl transition-colors text-center ${language === 'en' ? 'text-[12px] tracking-wide' : 'text-[13px] tracking-wider'}`}
                      >
                        {cat}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* i18n Toggle */}
      <button 
        onClick={toggleLanguage}
        className="flex gap-2 font-bold uppercase items-center group cursor-pointer text-[14px] tracking-[0.2em] relative flex-shrink-0 whitespace-nowrap"
      >
        <span className={`${language === 'en' ? 'text-white opacity-100' : 'text-white/40 group-hover:opacity-100'} transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] mt-[2px]`}>EN</span>
        <span className="text-white/30 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:opacity-100 mt-[2px]">/</span>
        <span className={`${language === 'zh' ? 'text-white opacity-100' : 'text-white/40 group-hover:opacity-100'} transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] mt-[2px]`}>中文</span>
      </button>
    </header>
  );
};

