import React, { useState, useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValueEvent,
} from "motion/react";
import { useDictionary } from "../../hooks/useDictionary";

const images = [
  "https://img.nickiresume.cn/Nimage/02iyunbao/MPRC01.webp",
  "https://img.nickiresume.cn/Nimage/02iyunbao/MPRC02.webp",
  "https://img.nickiresume.cn/Nimage/02iyunbao/MPRC03.webp",
  "https://img.nickiresume.cn/Nimage/02iyunbao/MPRC04.webp",
  "https://img.nickiresume.cn/Nimage/02iyunbao/MPRC05.webp",
  "https://img.nickiresume.cn/Nimage/02iyunbao/MPRC06.webp",
  "https://img.nickiresume.cn/Nimage/02iyunbao/MPRC07.webp",
  "https://img.nickiresume.cn/Nimage/02iyunbao/MPRC08.webp",
];

export const InsurtechSection05 = () => {
  const { language } = useDictionary();
  const isEn = language === "en";
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef<HTMLElement>(null);

  // Set up scroll tracking for the whole tall container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Calculate the vertical shift for the slider based on scroll progress
  const yPercent = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", `-${(images.length - 1) * 100}%`],
  );

  // Update active index for thumbnails based on scroll progress
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const index = Math.min(
      Math.round(latest * (images.length - 1)),
      images.length - 1,
    );
    setActiveIndex(index);
  });

  return (
    <section
      ref={containerRef}
      className="relative w-full bg-[#050505] min-h-[100vh]"
      style={{ height: `${images.length * 100}vh` }}
    >
      {/* Sticky Inner Container */}
      <div className="sticky top-0 w-full h-screen flex flex-col xl:flex-row items-center justify-between px-6 md:px-[60px] lg:px-[80px] gap-12 lg:gap-16 py-16 xl:py-0 overflow-hidden">
        {/* Left Text Content Area (Sticky) */}
        <div className="w-full xl:w-[35%] 2xl:w-[30%] z-10">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Tag */}
            <div className="flex items-center gap-4 mb-8">
              <h4 className="text-white/70 tracking-tighter text-[12px] md:text-[14px] uppercase font-sans font-bold">
                {isEn
                  ? "02 / PRODUCT EXPERIENCE REDESIGN"
                  : "02 / 产品体验重构"}
              </h4>
              <div className="w-16 h-[1px] bg-white/30" />
            </div>

            {/* Title */}
            <h2
              className={`uppercase w-full ${isEn ? "text-[clamp(26px,5vw,66px)] font-black font-sans tracking-tighter leading-[1.05]" : 'text-[clamp(26px,5vw,72px)] font-black font-puhuiti tracking-tighter leading-[1.1] [-webkit-text-stroke:2px_currentColor]'}`}
            >
              {isEn ? (
                <>
                  MPRC Business Hub
                  <br />
                  Rebuild
                </>
              ) : (
                <>
                  MPRC <br />
                  展业重构
                </>
              )}
            </h2>

            {/* Description */}
            <p
              className={`mt-8 md:mt-12 w-full max-w-[500px] text-white/70 text-pretty ${isEn ? "font-sans font-light tracking-[0.015em] leading-[1.5] text-[11px] xl:text-[13px]" : "font-sans font-light tracking-[0.03em] leading-[1.6] text-[11px] xl:text-[13px] text-justify"}`}
            >
              {isEn
                ? "Targeting the MPRC Business Center. Deconstructing core logic and reshaping interaction flows to precisely support complex demands."
                : "针对平台级 MPRC 展业中心项目。拆解底层业务逻辑，重塑平台交互链路，精准承接庞杂的业务诉求。"}
            </p>
          </motion.div>
        </div>

        {/* Right Content Area: Main Image + Thumbnails */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          className="w-full xl:w-[60%] 2xl:w-[65%] flex gap-4 md:gap-6 xl:gap-8 max-h-[80vh] items-center"
        >
          {/* Main Large Image Slider */}
          <div className="relative flex-1 rounded-[20px] md:rounded-[40px] overflow-hidden bg-[#111] aspect-[16/9]">
            <motion.div
              className="w-full h-full flex flex-col"
              style={{ y: yPercent }}
            >
              {images.map((src, index) => (
                <div
                  key={index}
                  className="w-full h-full shrink-0 relative bg-[#111]"
                >
                  <img
                    src={src}
                    alt={`Main showcase ${index}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </motion.div>
          </div>

          {/* Thumbnails Sidebar */}
          <div className="w-[60px] md:w-[80px] xl:w-[100px] shrink-0 flex flex-col gap-3 md:gap-4">
            {images.map((src, index) => (
              <div
                key={index}
                className={`w-full aspect-[16/9] rounded-[6px] md:rounded-[10px] overflow-hidden border-[2px] transition-all duration-300 ${activeIndex === index ? "border-white" : "border-transparent opacity-40"}`}
              >
                <img
                  src={src}
                  alt={`Thumbnail ${index}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
