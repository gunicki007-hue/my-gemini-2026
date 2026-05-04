import React from 'react';
import { useDictionary } from '../../hooks/useDictionary';

export const Contact = () => {
  const { language } = useDictionary();
  const isEn = language === 'en';

  return (
    <section id="contact" className="w-full relative min-h-screen bg-[#050505] flex flex-col items-center justify-center text-white px-6 overflow-hidden">
      
      {/* 银灰色流动氛围光 (Silver-gray shimmering light) */}
      <div className="absolute inset-0 pointer-events-none z-0 mix-blend-screen opacity-50">
        <div className="absolute top-0 left-1/4 w-[50vw] h-[50vh] bg-[#8a8d91]/20 blur-[120px] rounded-full animate-pulse" style={{ animationDuration: '7s' }} />
        <div className="absolute bottom-1/4 right-1/4 w-[60vw] h-[60vh] bg-[#d1d5db]/10 blur-[150px] rounded-full animate-pulse" style={{ animationDuration: '10s', animationDelay: '2s' }} />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[100vw] h-[30vh] bg-white/5 blur-[100px] rounded-[100%] animate-pulse" style={{ animationDuration: '5s', animationDelay: '1s' }} />
      </div>

      {/* 噪点质感层 (Noise Texture Overlay) */}
      <div className="absolute inset-0 pointer-events-none z-0 opacity-[0.12] mix-blend-overlay" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }} />

      {/* Central Block (Shifted up 130px) */}
      <div className="w-full max-w-[620px] flex flex-col items-center z-10 -translate-y-[130px]">
        <h2 
          className={`uppercase ${isEn ? 'text-[46px] font-black font-sans tracking-tighter leading-[1.05]' : 'text-[46px] font-extrabold font-puhuiti tracking-tighter leading-[1.1] [-webkit-text-stroke:1px_currentColor]'} mb-12`}
        >
          {isEn ? 'CONTACT' : '联系我'}
        </h2>

        {/* Separator */}
        <div className="w-full border-b border-white/[0.08] mb-12" />

        {/* Info Grid */}
        <div className="w-full flex flex-col md:flex-row items-center justify-between gap-12 md:gap-0 px-2 md:px-0">
          
          {/* Left Text Detail List */}
          <ul className="flex flex-col space-y-5 text-[12px] md:text-[14px] font-normal tracking-wide w-full md:w-auto items-center md:items-start">
            <li className="flex items-center w-full justify-between md:justify-start">
              <span className="w-20 md:w-24 text-white/70 font-light">{isEn ? 'Email' : '邮箱'}</span>
              <a href="mailto:gunicki007@gmail.com" className="font-bold text-white hover:text-white/70 transition-colors tracking-tight">
                gunicki007@gmail.com
              </a>
            </li>
            <li className="flex items-center w-full justify-between md:justify-start">
              <span className="w-20 md:w-24 text-white/70 font-light">{isEn ? 'Phone' : '电话'}</span>
              <span className="font-bold text-white tracking-tight">+86 15801905482</span>
            </li>
            <li className="flex items-center w-full justify-between md:justify-start pt-1">
              <span className="w-20 md:w-24 text-white/70 font-light">{isEn ? 'WeChat' : '微信'}</span>
              <div className="flex flex-1 justify-between items-center md:gap-14">
                  <span className="font-bold text-white tracking-tight">
                    {isEn ? 'Scan QR to add' : '扫二维码添加'}
                  </span>
                  <span className="text-white/30 text-[10px] transform scale-x-[1.2]">▶</span>
              </div>
            </li>
          </ul>

          {/* Right QR Code block */}
          <div className="w-[130px] h-[130px] shrink-0 rounded-[16px] bg-white p-[6px] shadow-[0_10px_40px_rgba(0,0,0,0.8)] ml-0 md:ml-10">
             <img 
               src="https://img.nickiresume.cn/images/01profile/QRcode.webp" 
               alt="Contact QR Code" 
               className="w-full h-full object-cover rounded-[10px]" 
               onError={(e) => {
                 e.currentTarget.style.display = 'none';
               }} 
             />
             {/* Inner placeholder visual if image is missing */}
             <div className="absolute inset-[6px] flex items-center justify-center -z-10 border border-black/10 border-dashed rounded-[10px]">
               <span className="text-[10px] text-black/30 tracking-[0.15em] uppercase font-bold">QR</span>
             </div>
          </div>

        </div>
      </div>

      {/* Copyright */}
      <div className="absolute bottom-[150px] left-0 w-full flex justify-center text-white/70 text-[11px] md:text-[13px] tracking-widest font-normal font-sans z-10">
        © 2026 NICKI GU
      </div>

    </section>
  );
};
