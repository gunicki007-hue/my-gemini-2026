import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { motion } from "motion/react";
import { useDictionary } from "../../hooks/useDictionary";
const AIGCSection03 = () => {
  const { language } = useDictionary();
  const isEn = language === "en";
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } }
  };
  return /* @__PURE__ */ jsxs("section", { className: "relative w-full bg-[#050505] z-30", children: [
    /* @__PURE__ */ jsxs("div", { className: "w-full grid grid-cols-1 lg:grid-cols-10 items-start px-6 md:px-[60px] lg:px-[80px] gap-12 lg:gap-20", children: [
      /* @__PURE__ */ jsx("div", { className: "col-span-1 lg:col-span-4 flex flex-col justify-center h-screen sticky top-0 shrink-0 z-10", children: /* @__PURE__ */ jsxs(
        motion.div,
        {
          variants: containerVariants,
          initial: "hidden",
          whileInView: "visible",
          viewport: { once: true, margin: "-100px" },
          className: "w-full flex flex-col pt-24 lg:pt-0",
          children: [
            /* @__PURE__ */ jsxs(motion.div, { variants: itemVariants, className: "flex items-center gap-4 mb-6 lg:mb-8 self-start", children: [
              /* @__PURE__ */ jsx("div", { className: "w-12 md:w-16 h-[1px] bg-[#D5B667]/50" }),
              /* @__PURE__ */ jsx("h4", { className: "text-[#D5B667] tracking-tighter text-[14px] md:text-[16px] uppercase font-sans font-bold", children: isEn ? "CASE 01 \xB7 DESIGN EXECUTION" : "\u6848\u4F8B 01 \xB7 AI\u8BBE\u8BA1\u6267\u884C" })
            ] }),
            /* @__PURE__ */ jsx(
              motion.h2,
              {
                variants: itemVariants,
                className: `uppercase w-full mb-6 lg:mb-8 text-white text-[30px] md:text-[38px] xl:text-[46px] font-extrabold tracking-tighter leading-[1.1] ${isEn ? "font-sans" : "font-puhuiti"}`,
                children: isEn ? /* @__PURE__ */ jsxs(Fragment, { children: [
                  "AI Full-Link",
                  /* @__PURE__ */ jsx("br", {}),
                  "Design Execution"
                ] }) : /* @__PURE__ */ jsx(Fragment, { children: "AI \u5168\u94FE\u8DEF\u8BBE\u8BA1\u6267\u884C" })
              }
            ),
            /* @__PURE__ */ jsxs(motion.div, { variants: itemVariants, className: `space-y-6 text-white/70 ${isEn ? "font-sans font-light tracking-[0.015em] leading-[1.6] text-[16px]" : "font-sans font-light tracking-[0.03em] leading-[1.8] text-[15px] xl:text-[16px]"}`, children: [
              /* @__PURE__ */ jsx("p", { className: "font-bold text-white/80", children: isEn ? "I used AI as a design assistant throughout the whole process to build an efficient personal design workflow." : "\u6211\u5168\u7A0B\u4EE5 AI \u4F5C\u4E3A\u8BBE\u8BA1\u52A9\u7406\uFF0C\u642D\u5EFA\u9AD8\u6548\u4E2A\u4EBA\u8BBE\u8BA1\u5DE5\u4F5C\u6D41\u3002" }),
              /* @__PURE__ */ jsxs("ol", { className: "space-y-4 list-decimal list-inside pl-1", children: [
                /* @__PURE__ */ jsx("li", { className: "pl-1", children: isEn ? "First, I sorted out the pain points of the original product, finalized the AI upgrade direction and interaction logic;" : "\u6211\u5148\u68B3\u7406\u539F\u6709\u4EA7\u54C1\u75DB\u70B9\u3001\u6572\u5B9A AI \u5347\u7EA7\u65B9\u5411\u4E0E\u4EA4\u4E92\u903B\u8F91\uFF1B" }),
                /* @__PURE__ */ jsx("li", { className: "pl-1", children: isEn ? "Then with the help of AI tools, I completed the optimization idea sorting and interaction path reconstruction. Relying on Figma+AI design plugins, inputting the original visual specifications and functional requirements, AI generated the first drafts of PC UI interfaces, tiered reminder pop-ups, intelligent shortcut modules, etc;" : "\u518D\u501F\u52A9 AI \u5DE5\u5177\u5B8C\u6210\u4F18\u5316\u601D\u8DEF\u68B3\u7406\u3001\u4EA4\u4E92\u8DEF\u5F84\u91CD\u6784\uFF0C\u4F9D\u6258 Figma+AI \u8BBE\u8BA1\u63D2\u4EF6\uFF0C\u8F93\u5165\u539F\u6709\u89C6\u89C9\u89C4\u8303\u4E0E\u529F\u80FD\u9700\u6C42\uFF0C\u7531 AI \u751F\u6210 PC \u7AEF UI \u754C\u9762\u3001\u5206\u7EA7\u63D0\u9192\u5F39\u7A97\u3001\u667A\u80FD\u5FEB\u6377\u6A21\u5757\u7B49\u8BBE\u8BA1\u521D\u7A3F\uFF1B" }),
                /* @__PURE__ */ jsx("li", { className: "pl-1", children: isEn ? "Finally, I controlled the rationality of interaction logic, the unity of visual hierarchy, and the visual expression of financial security, fine-tuned the AI output content to ensure the overall style perfectly matched the original product, and independently completed all design work from conception to visual implementation." : "\u6700\u7EC8\u7531\u6211\u628A\u63A7\u4EA4\u4E92\u903B\u8F91\u5408\u7406\u6027\u3001\u89C6\u89C9\u5C42\u7EA7\u7EDF\u4E00\u6027\u3001\u91D1\u878D\u5B89\u5168\u89C6\u89C9\u8868\u8FBE\uFF0C\u7CBE\u7EC6\u5316\u8C03\u6574 AI \u4EA7\u51FA\u5185\u5BB9\uFF0C\u786E\u4FDD\u6574\u4F53\u98CE\u683C\u4E0E\u539F\u4EA7\u54C1\u5B8C\u5168\u5951\u5408\uFF0C\u72EC\u7ACB\u5B8C\u6210\u4ECE\u6784\u601D\u5230\u89C6\u89C9\u843D\u5730\u7684\u5168\u90E8\u8BBE\u8BA1\u5DE5\u4F5C\u3002" })
              ] })
            ] })
          ]
        }
      ) }),
      /* @__PURE__ */ jsxs("div", { className: "col-span-1 lg:col-span-6 w-full flex flex-col py-12 lg:py-[15vh] gap-12 lg:gap-[calc(30vh-80px)]", children: [
        /* @__PURE__ */ jsx(
          motion.div,
          {
            initial: { opacity: 0, y: 30 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true, margin: "-100px" },
            transition: { duration: 1, ease: [0.16, 1, 0.3, 1] },
            className: "w-full bg-[#111111] rounded-xl overflow-hidden border border-white/5",
            children: /* @__PURE__ */ jsxs("div", { className: "w-full flex flex-col p-6 md:p-8 lg:p-10 text-sm", children: [
              /* @__PURE__ */ jsx("div", { className: "text-center mb-8 md:mb-10", children: /* @__PURE__ */ jsx("h3", { className: "text-white text-lg md:text-2xl font-bold tracking-widest", children: isEn ? "5-Step SOP Workflow" : "5\u6B65\u8DD1\u901ASOP \u5DE5\u4F5C\u6D41" }) }),
              /* @__PURE__ */ jsxs("div", { className: "hidden md:grid grid-cols-4 gap-4 mb-4 text-white/50 text-xs font-medium tracking-wide", children: [
                /* @__PURE__ */ jsx("div", {}),
                /* @__PURE__ */ jsx("div", { children: "SKILLS/MODEL" }),
                /* @__PURE__ */ jsx("div", { children: isEn ? "OUTPUT" : "\u4EA7\u51FA" }),
                /* @__PURE__ */ jsx("div", { children: isEn ? "PURPOSE" : "\u76EE\u7684" })
              ] }),
              /* @__PURE__ */ jsx("div", { className: "flex flex-col gap-6 md:gap-4", children: [
                {
                  step: "01",
                  title: "\u9700\u6C42\u5206\u6790",
                  enTitle: "Requirement Analysis",
                  skillType: "PM-Skills",
                  skills: ["Opportunity Solution Tree"],
                  output: ["\u601D\u7EF4\u5BFC\u56FE"],
                  enOutput: ["Mind Map"],
                  purpose: ["\u7CBE\u51C6\u5B9A\u4F4D\u7528\u6237\u75DB\u70B9", "\u786E\u8BA4\u6838\u5FC3\u529F\u80FD"],
                  enPurpose: ["Pinpoint user pain points", "Confirm core features"]
                },
                {
                  step: "02",
                  title: "MVP \u529F\u80FD\u89C4\u5212",
                  enTitle: "MVP Planning",
                  skillType: "PM-Skills",
                  skills: ["Kano Model"],
                  output: ["\u529F\u80FD\u8BC4\u4F30\u8868"],
                  enOutput: ["Feature Eval Table"],
                  purpose: ["\u4E8C\u6B21\u786E\u8BA4\u6838\u5FC3\u529F\u80FD", "\u6E05\u6670\u89C4\u5212\u7B2C\u4E00\u6B21\u5F00\u53D1\u8FB9\u754C"],
                  enPurpose: ["Re-confirm core features", "Define dev boundaries"]
                },
                {
                  step: "03",
                  title: "\u903B\u8F91\u5F02\u5E38\u68B3\u7406",
                  enTitle: "Logic & Exceptions",
                  skillType: "PM-Skills",
                  skills: ["System Design", "User Journey"],
                  output: ["\u4EA4\u4E92\u6D41\u7A0B\u56FE"],
                  enOutput: ["Interaction Flow"],
                  purpose: ["\u628A\u65AD\u7F51\u62A5\u9519\u7B49\u6781\u7AEF\u60C5\u51B5\u68B3\u7406\u6E05\u695A", "\u8BA9\u4EA7\u54C1\u7B49\u5E95\u5C42\u903B\u8F91\u66F4\u52A0\u4E25\u5BC6"],
                  enPurpose: ["Clarify edge cases like errors", "Make underlying logic solid"]
                },
                {
                  step: "04",
                  title: "\u4F4E\u4FDD\u771F\u539F\u578B\u642D\u5EFA",
                  enTitle: "Lo-Fi Prototyping",
                  skillType: "PM-Skills",
                  skills: ["User Story"],
                  output: ["\u5DE5\u5177\u81EA\u52A8\u8DD1\u901A", "\u80FD\u70B9\u51FB\u4EA4\u4E92\u7684\u4F4E\u4FDD\u771F\u539F\u578B"],
                  enOutput: ["Auto-run via tools", "Clickable lo-fi prototype"],
                  purpose: ["\u5FEB\u901F\u8DD1\u901A\u9875\u9762\u7684\u7248\u9762\u5E03\u5C40", "\u5927\u5E45\u63D0\u5347\u7ED8\u5236\u539F\u578B\u7684\u6548\u7387"],
                  enPurpose: ["Quickly test layouts", "Improve prototyping efficiency"]
                },
                {
                  step: "05",
                  title: "\u9AD8\u4FDD\u771F\u89C6\u89C9\u8F93\u51FA",
                  enTitle: "Hi-Fi Visuals",
                  skillType: "UI-Skills",
                  skills: ["shadcn-ui skills", "Apple HIG skills"],
                  output: ["IOS\u8D28\u611F\u9AD8\u4FDD\u771F\u754C\u9762"],
                  enOutput: ["iOS-style Hi-Fi UI"],
                  purpose: ["\u4EA4\u4ED8\u843D\u5730"],
                  enPurpose: ["Final Delivery"]
                }
              ].map((row, index) => /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-4 items-center border-b border-white/5 pb-6 md:pb-4 last:border-0 last:pb-0", children: [
                /* @__PURE__ */ jsxs("div", { className: "flex flex-row md:flex-col gap-4 md:gap-1 items-baseline md:items-start", children: [
                  /* @__PURE__ */ jsx("div", { className: "text-3xl md:text-4xl font-black text-white/20 italic font-sans", children: row.step }),
                  /* @__PURE__ */ jsx("div", { className: "text-white font-medium text-[13px] md:text-sm", children: isEn ? row.enTitle : row.title })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-1", children: [
                  /* @__PURE__ */ jsx("div", { className: "md:hidden text-white/50 text-[10px] mb-1", children: "SKILLS/MODEL" }),
                  /* @__PURE__ */ jsx("div", { className: "text-[#D5B667] text-[13px] font-semibold", children: row.skillType }),
                  row.skills.map((s) => /* @__PURE__ */ jsx("div", { className: "text-white/80 text-[13px]", children: s }, s))
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-1", children: [
                  /* @__PURE__ */ jsx("div", { className: "md:hidden text-white/50 text-[10px] mb-1", children: isEn ? "OUTPUT" : "\u4EA7\u51FA" }),
                  row.output.map((o, i) => /* @__PURE__ */ jsx("div", { className: "text-white/80 text-[13px]", children: isEn ? row.enOutput[i] : o }, i))
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-1", children: [
                  /* @__PURE__ */ jsx("div", { className: "md:hidden text-white/50 text-[10px] mb-1", children: isEn ? "PURPOSE" : "\u76EE\u7684" }),
                  row.purpose.map((p, i) => /* @__PURE__ */ jsx("div", { className: "text-white/80 text-[13px]", children: isEn ? row.enPurpose[i] : p }, i))
                ] })
              ] }, index)) })
            ] })
          }
        ),
        /* @__PURE__ */ jsxs(
          motion.div,
          {
            initial: { opacity: 0, scale: 0.95 },
            whileInView: { opacity: 1, scale: 1 },
            viewport: { once: true, margin: "-100px" },
            transition: { duration: 1, ease: [0.16, 1, 0.3, 1] },
            className: "w-full flex flex-col gap-3 md:gap-4",
            children: [
              /* @__PURE__ */ jsx("div", { className: "w-full text-white/60 text-xs md:text-sm font-medium tracking-widest text-center", children: isEn ? "Mind Map & Pain Points Analysis" : "\u601D\u7EF4\u5BFC\u56FE\u4E0E\u75DB\u70B9\u5206\u6790" }),
              /* @__PURE__ */ jsx("div", { className: "w-full aspect-video bg-[#1a1a1a] rounded-xl overflow-hidden border border-white/5 flex items-center justify-center shadow-2xl", children: /* @__PURE__ */ jsx("img", { src: "https://img.nickiresume.cn/0507/01.webp", alt: "Design Execution 1", className: "w-full h-full object-cover", referrerPolicy: "no-referrer" }) })
            ]
          }
        ),
        /* @__PURE__ */ jsxs(
          motion.div,
          {
            initial: { opacity: 0, scale: 0.95 },
            whileInView: { opacity: 1, scale: 1 },
            viewport: { once: true, margin: "-100px" },
            transition: { duration: 1, ease: [0.16, 1, 0.3, 1] },
            className: "w-full flex flex-col gap-3 md:gap-4",
            children: [
              /* @__PURE__ */ jsx("div", { className: "w-full text-white/60 text-xs md:text-sm font-medium tracking-widest text-center", children: isEn ? "Feature Evaluation & Core Features" : "\u529F\u80FD\u8BC4\u4F30\u5708\u5B9A\u6838\u5FC3\u529F\u80FD\u793A\u4F8B" }),
              /* @__PURE__ */ jsx("div", { className: "w-full aspect-video bg-[#1a1a1a] rounded-xl overflow-hidden border border-white/5 flex items-center justify-center shadow-2xl", children: /* @__PURE__ */ jsx("img", { src: "https://img.nickiresume.cn/0507/02.webp", alt: "Design Execution 2", className: "w-full h-full object-cover", referrerPolicy: "no-referrer" }) })
            ]
          }
        ),
        /* @__PURE__ */ jsxs(
          motion.div,
          {
            initial: { opacity: 0, scale: 0.95 },
            whileInView: { opacity: 1, scale: 1 },
            viewport: { once: true, margin: "-100px" },
            transition: { duration: 1, ease: [0.16, 1, 0.3, 1] },
            className: "w-full flex flex-col gap-3 md:gap-4",
            children: [
              /* @__PURE__ */ jsx("div", { className: "w-full text-white/60 text-xs md:text-sm font-medium tracking-widest text-center", children: isEn ? "Interaction Flow & Edge Cases" : "\u4EA4\u4E92\u6D41\u7A0B\u4E0E\u6781\u7AEF\u60C5\u51B5\u62C6\u89E3" }),
              /* @__PURE__ */ jsx("div", { className: "w-full aspect-video bg-[#1a1a1a] rounded-xl overflow-hidden border border-white/5 flex items-center justify-center shadow-2xl", children: /* @__PURE__ */ jsx("img", { src: "https://img.nickiresume.cn/0507/03.webp", alt: "Design Execution 3", className: "w-full h-full object-cover", referrerPolicy: "no-referrer" }) })
            ]
          }
        ),
        /* @__PURE__ */ jsxs(
          motion.div,
          {
            initial: { opacity: 0, scale: 0.95 },
            whileInView: { opacity: 1, scale: 1 },
            viewport: { once: true, margin: "-100px" },
            transition: { duration: 1, ease: [0.16, 1, 0.3, 1] },
            className: "w-full flex flex-col gap-3 md:gap-4",
            children: [
              /* @__PURE__ */ jsx("div", { className: "w-full text-white/60 text-xs md:text-sm font-medium tracking-widest text-center", children: isEn ? "Lo-Fi & Interaction Bubbles" : "\u4F4E\u4FDD\u771F\u4E0E\u4EA4\u4E92\u6C14\u6CE1" }),
              /* @__PURE__ */ jsx("div", { className: "w-full aspect-video bg-[#1a1a1a] rounded-xl overflow-hidden border border-white/5 flex items-center justify-center shadow-2xl", children: /* @__PURE__ */ jsx("img", { src: "https://img.nickiresume.cn/0507/04.webp", alt: "Design Execution 4", className: "w-full h-full object-cover", referrerPolicy: "no-referrer" }) })
            ]
          }
        ),
        /* @__PURE__ */ jsxs(
          motion.div,
          {
            initial: { opacity: 0, scale: 0.95 },
            whileInView: { opacity: 1, scale: 1 },
            viewport: { once: true, margin: "-100px" },
            transition: { duration: 1, ease: [0.16, 1, 0.3, 1] },
            className: "w-full flex flex-col gap-3 md:gap-4",
            children: [
              /* @__PURE__ */ jsx("div", { className: "w-full text-white/60 text-xs md:text-sm font-medium tracking-widest text-center", children: isEn ? "Hi-Fi Visual Mockup" : "\u9AD8\u4FDD\u771F\u6548\u679C\u56FE\u793A\u4F8B" }),
              /* @__PURE__ */ jsx("div", { className: "w-full aspect-video bg-[#1a1a1a] rounded-xl overflow-hidden border border-white/5 flex items-center justify-center shadow-2xl", children: /* @__PURE__ */ jsx("img", { src: "https://img.nickiresume.cn/0507/05.webp", alt: "Design Execution 5", className: "w-full h-full object-cover", referrerPolicy: "no-referrer" }) })
            ]
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "w-full relative px-6 md:px-[60px] lg:px-[80px] pb-24 md:pb-32 pt-12 md:pt-24 mt-12 md:mt-0", children: /* @__PURE__ */ jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 30 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, margin: "-100px" },
        transition: { duration: 1, ease: [0.16, 1, 0.3, 1] },
        className: "w-full flex flex-col items-center gap-[78px]",
        children: [
          /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center gap-6", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4", children: [
              /* @__PURE__ */ jsx("div", { className: "w-12 md:w-16 h-[1px] bg-[#D5B667]/50" }),
              /* @__PURE__ */ jsx("h4", { className: "text-[#D5B667] tracking-tighter text-[14px] md:text-[16px] uppercase font-sans font-bold", children: isEn ? "CASE 01 \xB7 REVIEW & SUMMARY" : "\u6848\u4F8B 01 \xB7 \u590D\u76D8\u603B\u7ED3" }),
              /* @__PURE__ */ jsx("div", { className: "w-12 md:w-16 h-[1px] bg-[#D5B667]/50" })
            ] }),
            /* @__PURE__ */ jsx("div", { className: "text-center mb-[30px]", children: /* @__PURE__ */ jsx("h2", { className: "text-white text-2xl md:text-3xl lg:text-4xl font-bold tracking-widest font-sans", children: isEn ? "Traditional Payment VS AI Native Payment Comparison" : "\u4F20\u7EDF\u652F\u4ED8\u9879\u76EE VS AI Native \u652F\u4ED8\u9879\u76EE\u5BF9\u6BD4" }) })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "w-full grid grid-cols-1 xl:grid-cols-2 gap-8 md:gap-12", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-4", children: [
              /* @__PURE__ */ jsx("div", { className: "w-full text-white/60 text-xs md:text-sm font-medium tracking-widest text-center", children: isEn ? "Product Experience Comparison" : "\u4EA7\u54C1\u4F53\u9A8C\u5BF9\u6BD4" }),
              /* @__PURE__ */ jsxs("div", { className: "w-full bg-white/[0.02] backdrop-blur-3xl border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] rounded-[32px] p-6 lg:p-8 relative overflow-x-auto h-full flex flex-col justify-center", children: [
                /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-b from-white/[0.02] to-transparent pointer-events-none" }),
                /* @__PURE__ */ jsxs("table", { className: "w-full h-full text-left border-collapse min-w-[500px] relative z-10", children: [
                  /* @__PURE__ */ jsx("thead", { children: /* @__PURE__ */ jsxs("tr", { className: "border-b border-white/10 text-white/40 text-[12px] md:text-[13px] tracking-widest uppercase font-medium", children: [
                    /* @__PURE__ */ jsx("th", { className: "py-4 md:py-6 pl-2 pr-4 font-sans font-medium w-[20%]", children: isEn ? "Pain Point" : "\u75DB\u70B9" }),
                    /* @__PURE__ */ jsx("th", { className: "py-4 md:py-6 px-4 font-sans font-medium w-[30%] text-white/60", children: isEn ? "Old Experience" : "\u65E7\u7248\u4F53\u9A8C" }),
                    /* @__PURE__ */ jsx("th", { className: "py-4 md:py-6 pl-4 pr-2 font-sans font-medium w-[50%]", children: isEn ? "AI Upgraded Experience" : "AI\u5347\u7EA7\u540E\u4F53\u9A8C" })
                  ] }) }),
                  /* @__PURE__ */ jsxs("tbody", { className: "divide-y divide-white/5 text-white/90", children: [
                    /* @__PURE__ */ jsxs("tr", { className: "hover:bg-white/[0.03] transition-colors duration-500 group", children: [
                      /* @__PURE__ */ jsx("td", { className: "py-6 md:py-8 pl-2 pr-4 text-[14px] md:text-[15px] font-bold tracking-wide group-hover:text-white transition-colors", children: isEn ? "Tedious ops" : "\u64CD\u4F5C\u7E41\u7410" }),
                      /* @__PURE__ */ jsx("td", { className: "py-6 md:py-8 px-4 text-[14px] md:text-[15px] font-light text-white/60 leading-relaxed", children: isEn ? "Manual input & path selection" : "\u624B\u52A8\u8F93\u5165\u91D1\u989D\u3001\u9009\u8DEF\u5F84" }),
                      /* @__PURE__ */ jsx("td", { className: "py-6 md:py-8 pl-4 pr-2 text-[14px] md:text-[15px] font-normal tracking-wide text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]", children: isEn ? "AI remembers amounts, generates shortcuts, reduces steps by 50%" : "AI\u8BB0\u5FC6\u5E38\u7528\u91D1\u989D\uFF0C\u751F\u6210\u5FEB\u6377\u9009\u9879\uFF0C\u6B65\u9AA4\u51CF\u5C1150%" })
                    ] }),
                    /* @__PURE__ */ jsxs("tr", { className: "hover:bg-white/[0.03] transition-colors duration-500 group", children: [
                      /* @__PURE__ */ jsx("td", { className: "py-6 md:py-8 pl-2 pr-4 text-[14px] md:text-[15px] font-bold tracking-wide group-hover:text-white transition-colors", children: isEn ? "High decision cost" : "\u51B3\u7B56\u6210\u672C\u9AD8" }),
                      /* @__PURE__ */ jsx("td", { className: "py-6 md:py-8 px-4 text-[14px] md:text-[15px] font-light text-white/60 leading-relaxed", children: isEn ? "Manual judgment of fee/network" : "\u624B\u52A8\u5224\u65AD\u624B\u7EED\u8D39/\u7F51\u7EDC" }),
                      /* @__PURE__ */ jsx("td", { className: "py-6 md:py-8 pl-4 pr-2 text-[14px] md:text-[15px] font-normal tracking-wide text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]", children: isEn ? "AI proactively suggests optimal timing" : "AI\u4E3B\u52A8\u63D0\u793A\u6700\u4F18\u64CD\u4F5C\u65F6\u673A" })
                    ] }),
                    /* @__PURE__ */ jsxs("tr", { className: "hover:bg-white/[0.03] transition-colors duration-500 group", children: [
                      /* @__PURE__ */ jsx("td", { className: "py-6 md:py-8 pl-2 pr-4 text-[14px] md:text-[15px] font-bold tracking-wide group-hover:text-white transition-colors", children: isEn ? "Weak risk perception" : "\u98CE\u9669\u611F\u77E5\u5F31" }),
                      /* @__PURE__ */ jsx("td", { className: "py-6 md:py-8 px-4 text-[14px] md:text-[15px] font-light text-white/60 leading-relaxed", children: isEn ? "Normal text warning" : "\u666E\u901A\u6587\u5B57\u63D0\u9192" }),
                      /* @__PURE__ */ jsx("td", { className: "py-6 md:py-8 pl-4 pr-2 text-[14px] md:text-[15px] font-normal tracking-wide text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]", children: isEn ? "Full-screen strong warning + 2FA for large/abnormal tx" : "\u5927\u989D/\u5F02\u5E38\u4EA4\u6613\u89E6\u53D1\u5168\u5C4F\u5F3A\u63D0\u9192+\u4E8C\u6B21\u9A8C\u8BC1" })
                    ] }),
                    /* @__PURE__ */ jsxs("tr", { className: "hover:bg-white/[0.03] transition-colors duration-500 group", children: [
                      /* @__PURE__ */ jsx("td", { className: "py-6 md:py-8 pl-2 pr-4 text-[14px] md:text-[15px] font-bold tracking-wide group-hover:text-white transition-colors", children: isEn ? "Hard to understand info" : "\u4FE1\u606F\u7406\u89E3\u96BE" }),
                      /* @__PURE__ */ jsx("td", { className: "py-6 md:py-8 px-4 text-[14px] md:text-[15px] font-light text-white/60 leading-relaxed", children: isEn ? "Pure data bills" : "\u7EAF\u6570\u636E\u8D26\u5355" }),
                      /* @__PURE__ */ jsx("td", { className: "py-6 md:py-8 pl-4 pr-2 text-[14px] md:text-[15px] font-normal tracking-wide text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]", children: isEn ? "AI translates to plain interpretation, reducing cost" : "AI\u8F6C\u5316\u4E3A\u901A\u4FD7\u89E3\u8BFB\uFF0C\u964D\u4F4E\u7406\u89E3\u6210\u672C" })
                    ] })
                  ] })
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-4", children: [
              /* @__PURE__ */ jsx("div", { className: "w-full text-white/60 text-xs md:text-sm font-medium tracking-widest text-center", children: isEn ? "Product Global Comparison" : "\u4EA7\u54C1\u5168\u5C40\u5BF9\u6BD4" }),
              /* @__PURE__ */ jsxs("div", { className: "w-full bg-white/[0.02] backdrop-blur-3xl border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] rounded-[32px] p-6 lg:p-8 relative overflow-x-auto h-full flex flex-col justify-center", children: [
                /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-b from-white/[0.02] to-transparent pointer-events-none" }),
                /* @__PURE__ */ jsxs("table", { className: "w-full h-full text-left border-collapse min-w-[500px] relative z-10", children: [
                  /* @__PURE__ */ jsx("thead", { children: /* @__PURE__ */ jsxs("tr", { className: "border-b border-white/10 text-white/40 text-[12px] md:text-[13px] tracking-widest uppercase font-medium", children: [
                    /* @__PURE__ */ jsx("th", { className: "py-4 md:py-6 pl-2 pr-4 font-sans font-medium w-[20%]", children: isEn ? "Dimension" : "\u7EF4\u5EA6" }),
                    /* @__PURE__ */ jsx("th", { className: "py-4 md:py-6 px-4 font-sans font-medium w-[40%] text-white/60", children: isEn ? "Traditional Payment" : "\u4F20\u7EDF\u652F\u4ED8\u9879\u76EE" }),
                    /* @__PURE__ */ jsx("th", { className: "py-4 md:py-6 pl-4 pr-2 font-sans font-medium w-[40%]", children: isEn ? "AI Native Payment" : "AI Native \u652F\u4ED8\u9879\u76EE" })
                  ] }) }),
                  /* @__PURE__ */ jsxs("tbody", { className: "divide-y divide-white/5 text-white/90", children: [
                    /* @__PURE__ */ jsxs("tr", { className: "hover:bg-white/[0.03] transition-colors duration-500 group", children: [
                      /* @__PURE__ */ jsx("td", { className: "py-6 md:py-8 pl-2 pr-4 text-[14px] md:text-[15px] font-bold tracking-wide group-hover:text-white transition-colors", children: isEn ? "Product Arch" : "\u4EA7\u54C1\u67B6\u6784" }),
                      /* @__PURE__ */ jsx("td", { className: "py-6 md:py-8 px-4 text-[14px] md:text-[15px] font-light text-white/60 leading-relaxed", children: isEn ? "Rigid structure, fragmented modules, traditional stacking" : "\u7ED3\u6784\u56FA\u5316\uFF0C\u6A21\u5757\u5272\u88C2\uFF0C\u6574\u4F53\u504F\u5411\u4F20\u7EDF\u529F\u80FD\u5806\u53E0" }),
                      /* @__PURE__ */ jsx("td", { className: "py-6 md:py-8 pl-4 pr-2 text-[14px] md:text-[15px] font-normal tracking-wide text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]", children: isEn ? "AI as native foundation, integrated full-link connection" : "AI\u4F5C\u4E3A\u5E95\u5C42\u539F\u751F\u67B6\u6784\uFF0C\u6574\u4F53\u94FE\u8DEF\u4E00\u4F53\u5316\u8054\u52A8" })
                    ] }),
                    /* @__PURE__ */ jsxs("tr", { className: "hover:bg-white/[0.03] transition-colors duration-500 group", children: [
                      /* @__PURE__ */ jsx("td", { className: "py-6 md:py-8 pl-2 pr-4 text-[14px] md:text-[15px] font-bold tracking-wide group-hover:text-white transition-colors", children: isEn ? "Iteration Mode" : "\u8FED\u4EE3\u6A21\u5F0F" }),
                      /* @__PURE__ */ jsx("td", { className: "py-6 md:py-8 px-4 text-[14px] md:text-[15px] font-light text-white/60 leading-relaxed", children: isEn ? "Long cycles, fully manual requirement sorting" : "\u8FED\u4EE3\u5468\u671F\u957F\uFF0C\u9700\u6C42\u68B3\u7406\u5168\u9760\u4EBA\u5DE5\uFF0C\u4F18\u5316\u6EDE\u540E" }),
                      /* @__PURE__ */ jsx("td", { className: "py-6 md:py-8 pl-4 pr-2 text-[14px] md:text-[15px] font-normal tracking-wide text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]", children: isEn ? "Flexible & efficient, fast iteration via AI assistance" : "\u8FED\u4EE3\u7075\u6D3B\u9AD8\u6548\uFF0C\u4F9D\u6258\u667A\u80FD\u8F85\u52A9\u5FEB\u901F\u68B3\u7406\u9700\u6C42\u3001\u8FED\u4EE3\u65B9\u6848" })
                    ] }),
                    /* @__PURE__ */ jsxs("tr", { className: "hover:bg-white/[0.03] transition-colors duration-500 group", children: [
                      /* @__PURE__ */ jsx("td", { className: "py-6 md:py-8 pl-2 pr-4 text-[14px] md:text-[15px] font-bold tracking-wide group-hover:text-white transition-colors", children: isEn ? "Risk Handling" : "\u98CE\u9669\u5904\u7406" }),
                      /* @__PURE__ */ jsx("td", { className: "py-6 md:py-8 px-4 text-[14px] md:text-[15px] font-light text-white/60 leading-relaxed", children: isEn ? "Passive control, post-event review, lacks preview" : "\u88AB\u52A8\u5F0F\u98CE\u63A7\uFF0C\u4E8B\u540E\u95EE\u9898\u590D\u76D8\uFF0C\u7F3A\u5C11\u524D\u7F6E\u9884\u5224" }),
                      /* @__PURE__ */ jsx("td", { className: "py-6 md:py-8 pl-4 pr-2 text-[14px] md:text-[15px] font-normal tracking-wide text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]", children: isEn ? "Proactive smart risk control, early identification" : "\u5168\u94FE\u8DEF\u524D\u7F6E\u667A\u80FD\u98CE\u63A7\uFF0C\u63D0\u524D\u8BC6\u522B\u89C4\u907F\u4E1A\u52A1\u9690\u60A3" })
                    ] }),
                    /* @__PURE__ */ jsxs("tr", { className: "hover:bg-white/[0.03] transition-colors duration-500 group", children: [
                      /* @__PURE__ */ jsx("td", { className: "py-6 md:py-8 pl-2 pr-4 text-[14px] md:text-[15px] font-bold tracking-wide group-hover:text-white transition-colors", children: isEn ? "Expansion Cap." : "\u62D3\u5C55\u80FD\u529B" }),
                      /* @__PURE__ */ jsx("td", { className: "py-6 md:py-8 px-4 text-[14px] md:text-[15px] font-light text-white/60 leading-relaxed", children: isEn ? "Weak adaptation, limited personalization" : "\u573A\u666F\u9002\u914D\u5F31\uFF0C\u4E2A\u6027\u5316\u8C03\u6574\u7A7A\u95F4\u5C0F\uFF0C\u6269\u5C55\u6027\u6709\u9650" }),
                      /* @__PURE__ */ jsx("td", { className: "py-6 md:py-8 pl-4 pr-2 text-[14px] md:text-[15px] font-normal tracking-wide text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]", children: isEn ? "High compatibility, on-demand personalization" : "\u573A\u666F\u517C\u5BB9\u5EA6\u9AD8\uFF0C\u53EF\u6309\u9700\u505A\u4E2A\u6027\u5316\u9002\u914D\uFF0C\u5EF6\u5C55\u6027\u5F3A" })
                    ] }),
                    /* @__PURE__ */ jsxs("tr", { className: "hover:bg-white/[0.03] transition-colors duration-500 group", children: [
                      /* @__PURE__ */ jsx("td", { className: "py-6 md:py-8 pl-2 pr-4 text-[14px] md:text-[15px] font-bold tracking-wide group-hover:text-white transition-colors", children: isEn ? "Design Logic" : "\u8BBE\u8BA1\u903B\u8F91" }),
                      /* @__PURE__ */ jsx("td", { className: "py-6 md:py-8 px-4 text-[14px] md:text-[15px] font-light text-white/60 leading-relaxed", children: isEn ? "Business-centric, lacks global experience control" : "\u4EE5\u4E1A\u52A1\u529F\u80FD\u4E3A\u6838\u5FC3\uFF0C\u7F3A\u5C11\u5168\u5C40\u4F53\u9A8C\u7EDF\u7B79" }),
                      /* @__PURE__ */ jsx("td", { className: "py-6 md:py-8 pl-4 pr-2 text-[14px] md:text-[15px] font-normal tracking-wide text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]", children: isEn ? "Dual dimension: full-link experience + business value" : "\u4EE5\u7528\u6237\u5168\u94FE\u8DEF\u4F53\u9A8C+\u4E1A\u52A1\u4EF7\u503C\u53CC\u91CD\u7EF4\u5EA6\u505A\u7EDF\u7B79" })
                    ] })
                  ] })
                ] })
              ] })
            ] })
          ] })
        ]
      }
    ) }),
    /* @__PURE__ */ jsx("div", { className: "w-full relative px-6 md:px-[60px] lg:px-[80px] pb-24 md:pb-32", children: /* @__PURE__ */ jsxs("div", { className: "w-full grid grid-cols-1 lg:grid-cols-10 items-start gap-12 lg:gap-20", children: [
      /* @__PURE__ */ jsxs("div", { className: "col-span-1 lg:col-span-4 flex flex-col z-10 w-full shrink-0", children: [
        /* @__PURE__ */ jsxs(
          motion.div,
          {
            initial: { opacity: 0, y: 30 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true, margin: "-100px" },
            transition: { duration: 1, ease: [0.16, 1, 0.3, 1] },
            className: "flex items-center gap-4 mb-6 lg:mb-8 self-start",
            children: [
              /* @__PURE__ */ jsx("div", { className: "w-12 md:w-16 h-[1px] bg-[#D5B667]/50" }),
              /* @__PURE__ */ jsx("h4", { className: "text-[#D5B667] tracking-tighter text-[14px] md:text-[16px] uppercase font-sans font-bold", children: isEn ? "CASE 01 \xB7 REVIEW & SUMMARY" : "01\xB7\u5FC3\u5F97\u6C89\u6DC0" })
            ]
          }
        ),
        /* @__PURE__ */ jsx(
          motion.h2,
          {
            initial: { opacity: 0, y: 30 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true, margin: "-100px" },
            transition: { duration: 1, ease: [0.16, 1, 0.3, 1] },
            className: `w-full mb-6 lg:mb-8 text-white ${isEn ? "text-[28px] md:text-[34px] xl:text-[40px] font-sans font-bold" : "text-[28px] md:text-[34px] xl:text-[40px] font-puhuiti font-extrabold tracking-tighter leading-[1.2]"}`,
            children: isEn ? "Traditional Workflow vs Code Agent Workflow" : "\u4F20\u7EDF\u5DE5\u4F5C\u6D41 vs Code Agent \u5DE5\u4F5C\u6D41"
          }
        ),
        /* @__PURE__ */ jsxs(
          motion.div,
          {
            initial: { opacity: 0, y: 30 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true, margin: "-100px" },
            transition: { duration: 1, ease: [0.16, 1, 0.3, 1] },
            className: `text-white/70 ${isEn ? "font-sans font-light tracking-[0.015em] leading-[1.6]" : "font-sans font-light tracking-[0.03em] leading-[1.8] text-justify"} text-[14px] md:text-[15px] xl:text-[16px] space-y-4`,
            children: [
              /* @__PURE__ */ jsx("p", { children: isEn ? "Through this personal simulation project, after comparing two product plans and two workflows, the efficiency advantage of AI Code Agent tools on execution-level work is obvious." : "\u901A\u8FC7\u672C\u6B21\u4E2A\u4EBA\u6A21\u62DF\u9879\u76EE\uFF0C\u5BF9\u6BD4\u8DD1\u5B8C\u4E24\u5957\u4EA7\u54C1\u65B9\u6848\u4E0E\u4E24\u79CD\u5DE5\u4F5C\u6D41\u4E4B\u540E\uFF0C\u80FD\u660E\u663E\u611F\u53D7\u5230AI Code Agent\u7C7B\u5DE5\u5177\u5BF9\u6267\u884C\u5C42\u5DE5\u4F5C\u7684\u63D0\u6548\u4F18\u52BF\u3002" }),
              /* @__PURE__ */ jsx("p", { children: isEn ? "It's also clearer: AI is an efficient auxiliary carrier that can highly improve execution efficiency, but in overall project business judgement, direction control, risk detection, and plan trade-offs, how to control decisions is the core key. In my practice, I have also developed a rhythm for human-machine collaboration, summarized reusable standard workflow methods, and upgraded my experience transfer capabilities." : "\u540C\u65F6\u4E5F\u66F4\u52A0\u6E05\u6670\uFF1AAI\u662F\u9AD8\u6548\u7684\u8F85\u52A9\u8F7D\u4F53\uFF0C\u80FD\u9AD8\u901F\u63D0\u5347\u6267\u884C\u6548\u7387\uFF0C\u4F46\u5728\u9879\u76EE\u6574\u4F53\u7684\u4E1A\u52A1\u5224\u65AD\u3001\u65B9\u5411\u628A\u63A7\u3001\u98CE\u9669\u7504\u522B\u3001\u65B9\u6848\u53D6\u820D\uFF0C\u5982\u4F55\u628A\u63A7\u51B3\u7B56\u624D\u662F\u6838\u5FC3\u5173\u952E\u3002\u6211\u5728\u5B9E\u64CD\u4E2D\u540C\u65F6\u78E8\u5408\u51FA\u4E86\u4EBA\u673A\u534F\u4F5C\u7684\u8282\u594F\uFF0C\u4E5F\u6C89\u6DC0\u51FA\u53EF\u4EE5\u590D\u7528\u7684\u6807\u51C6\u5316\u5DE5\u4F5C\u6D41\u65B9\u6CD5\uFF0C\u5347\u7EA7\u4E86\u7ECF\u9A8C\u8FC1\u79FB\u7684\u80FD\u529B\u3002" })
            ]
          }
        )
      ] }),
      /* @__PURE__ */ jsx("div", { className: "col-span-1 lg:col-span-6 flex flex-col relative z-0", children: /* @__PURE__ */ jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 30 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true, margin: "-100px" },
          transition: { duration: 1, ease: [0.16, 1, 0.3, 1] },
          className: "w-full flex flex-col gap-3 md:gap-4",
          children: [
            /* @__PURE__ */ jsx("div", { className: "flex justify-center w-full lg:justify-start", children: /* @__PURE__ */ jsx("div", { className: "inline-block bg-white/5 border border-white/10 px-4 py-1.5 rounded-full text-white/50 text-[12px] md:text-[13px] font-medium tracking-widest text-center mb-6 uppercase", children: isEn ? "Workflow Comparison" : "\u5DE5\u4F5C\u6D41\u6A2A\u5411\u5BF9\u6BD4" }) }),
            /* @__PURE__ */ jsxs("div", { className: "w-full bg-white/[0.02] backdrop-blur-3xl border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] rounded-[32px] p-6 lg:p-8 xl:p-10 relative overflow-x-auto flex flex-col justify-center", children: [
              /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-b from-white/[0.02] to-transparent pointer-events-none" }),
              /* @__PURE__ */ jsxs("table", { className: "w-full text-left border-collapse min-w-[600px] relative z-10", children: [
                /* @__PURE__ */ jsx("thead", { children: /* @__PURE__ */ jsxs("tr", { className: "border-b border-white/10 text-white/40 text-[12px] md:text-[14px] tracking-widest uppercase font-medium", children: [
                  /* @__PURE__ */ jsx("th", { className: "py-4 md:py-6 pl-4 pr-4 font-sans font-medium w-[20%]", children: isEn ? "Dimension" : "\u5BF9\u6BD4\u7EF4\u5EA6" }),
                  /* @__PURE__ */ jsx("th", { className: "py-4 md:py-6 px-4 font-sans font-medium w-[40%] text-white/60", children: isEn ? "Traditional Manual Workflow" : "\u4F20\u7EDF\u4EBA\u5DE5\u5DE5\u4F5C\u6D41" }),
                  /* @__PURE__ */ jsx("th", { className: "py-4 md:py-6 pl-4 pr-4 font-sans font-medium w-[40%]", children: isEn ? "AI Code Agent Workflow" : "AI Code Agent \u667A\u80FD\u5DE5\u4F5C\u6D41" })
                ] }) }),
                /* @__PURE__ */ jsxs("tbody", { className: "divide-y divide-white/5 text-white/90", children: [
                  /* @__PURE__ */ jsxs("tr", { className: "hover:bg-white/[0.03] transition-colors duration-500 group", children: [
                    /* @__PURE__ */ jsx("td", { className: "py-6 md:py-8 pl-4 pr-4 text-[14px] md:text-[15px] font-bold tracking-wide group-hover:text-white transition-colors", children: isEn ? "Basic Work" : "\u57FA\u7840\u5DE5\u4F5C" }),
                    /* @__PURE__ */ jsx("td", { className: "py-6 md:py-8 px-4 text-[13px] md:text-[14px] font-light text-white/60 leading-relaxed", children: isEn ? "All done manually, repetitive tasks take long" : "\u5168\u90E8\u4EBA\u5DE5\u624B\u52A8\u5B8C\u6210\uFF0C\u91CD\u590D\u4E8B\u52A1\u8017\u65F6\u957F" }),
                    /* @__PURE__ */ jsx("td", { className: "py-6 md:py-8 pl-4 pr-4 text-[13px] md:text-[14px] font-normal tracking-wide text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]", children: isEn ? "AI takes over repetitive writing, screening, sorting work" : "AI\u627F\u63A5\u57FA\u7840\u7F16\u5199\u3001\u7B5B\u67E5\u3001\u6574\u7406\u7C7B\u91CD\u590D\u5DE5\u4F5C" })
                  ] }),
                  /* @__PURE__ */ jsxs("tr", { className: "hover:bg-white/[0.03] transition-colors duration-500 group", children: [
                    /* @__PURE__ */ jsx("td", { className: "py-6 md:py-8 pl-4 pr-4 text-[14px] md:text-[15px] font-bold tracking-wide group-hover:text-white transition-colors", children: isEn ? "Imp. Efficiency" : "\u843D\u5730\u6548\u7387" }),
                    /* @__PURE__ */ jsx("td", { className: "py-6 md:py-8 px-4 text-[13px] md:text-[14px] font-light text-white/60 leading-relaxed", children: isEn ? "Tedious process, high trial error cost, long cycle" : "\u6D41\u7A0B\u7E41\u7410\uFF0C\u8BD5\u9519\u6210\u672C\u9AD8\uFF0C\u6574\u4F53\u5468\u671F\u5197\u957F" }),
                    /* @__PURE__ */ jsx("td", { className: "py-6 md:py-8 pl-4 pr-4 text-[13px] md:text-[14px] font-normal tracking-wide text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]", children: isEn ? "Significantly reduces time in basic links, overall efficiency improved" : "\u5927\u5E45\u538B\u7F29\u57FA\u7840\u73AF\u8282\u8017\u65F6\uFF0C\u6574\u4F53\u6548\u7387\u663E\u8457\u63D0\u5347" })
                  ] }),
                  /* @__PURE__ */ jsxs("tr", { className: "hover:bg-white/[0.03] transition-colors duration-500 group", children: [
                    /* @__PURE__ */ jsx("td", { className: "py-6 md:py-8 pl-4 pr-4 text-[14px] md:text-[15px] font-bold tracking-wide group-hover:text-white transition-colors", children: isEn ? "Adjustment" : "\u8C03\u6574\u4F18\u5316" }),
                    /* @__PURE__ */ jsx("td", { className: "py-6 md:py-8 px-4 text-[13px] md:text-[14px] font-light text-white/60 leading-relaxed", children: isEn ? "High modification cost, iteration takes a lot of effort" : "\u4FEE\u6539\u6210\u672C\u9AD8\uFF0C\u8FED\u4EE3\u8C03\u6574\u8017\u8D39\u5927\u91CF\u7CBE\u529B" }),
                    /* @__PURE__ */ jsx("td", { className: "py-6 md:py-8 pl-4 pr-4 text-[13px] md:text-[14px] font-normal tracking-wide text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]", children: isEn ? "Quickly generate drafts, easier modification and iteration" : "\u5FEB\u901F\u751F\u6210\u521D\u7A3F\uFF0C\u4FEE\u6539\u8FED\u4EE3\u66F4\u8F7B\u4FBF" })
                  ] }),
                  /* @__PURE__ */ jsxs("tr", { className: "hover:bg-white/[0.03] transition-colors duration-500 group", children: [
                    /* @__PURE__ */ jsx("td", { className: "py-6 md:py-8 pl-4 pr-4 text-[14px] md:text-[15px] font-bold tracking-wide group-hover:text-white transition-colors", children: isEn ? "Core Driven" : "\u6838\u5FC3\u4E3B\u5BFC" }),
                    /* @__PURE__ */ jsx("td", { className: "py-6 md:py-8 px-4 text-[13px] md:text-[14px] font-light text-white/60 leading-relaxed", children: isEn ? "Full process manned by humans, energy distracted by trivial work" : "\u5168\u6D41\u7A0B\u4EBA\u529B\u5305\u63FD\uFF0C\u7CBE\u529B\u88AB\u7410\u788E\u5DE5\u4F5C\u5206\u6563" }),
                    /* @__PURE__ */ jsx("td", { className: "py-6 md:py-8 pl-4 pr-4 text-[13px] md:text-[14px] font-normal tracking-wide text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]", children: isEn ? "AI handles execution, humans focus on direction, decision, quality control" : "AI\u8D1F\u8D23\u6267\u884C\u843D\u5730\uFF0C\u4EBA\u4E13\u6CE8\u65B9\u5411\u3001\u51B3\u7B56\u3001\u8D28\u91CF\u628A\u63A7" })
                  ] })
                ] })
              ] })
            ] })
          ]
        }
      ) })
    ] }) })
  ] });
};
export {
  AIGCSection03
};
