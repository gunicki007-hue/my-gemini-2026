import React from 'react';
import { useDictionary } from '../../hooks/useDictionary';

export const Footer = () => {
  const { language } = useDictionary();
  const isEn = language === 'en';

  return (
    <footer className="w-full bg-[#141416] border-t border-white/5 text-white px-6 md:px-[80px] py-10 md:py-14">
      <div className="w-full flex flex-col md:flex-row items-start md:items-center justify-between gap-12 md:gap-0">
        
        {/* Left Block: Logo & Experience Tag */}
        <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-8">
          <span className="text-[22px] md:text-[24px] font-bold tracking-tighter leading-none font-sans">NICKI</span>
          <span className="hidden md:block w-[1px] h-[18px] bg-white/20"></span>
          <span className="text-[13px] md:text-[14px] text-white/90 font-normal tracking-wide">
            {isEn ? '12 Years Product & Brand System Design Experience' : '12 年产品与品牌系统设计经验'}
          </span>
        </div>

        {/* Right Block: Contact Actions & Info */}
        <div className="flex flex-col md:flex-row items-start md:items-center gap-10 md:gap-16">
          
          {/* Contact Group Wrapper (Moves everything inside 50px to the left relative to QR) */}
          <div className="flex flex-col md:flex-row items-start md:items-center gap-10 md:gap-16 md:mr-[50px]">
            {/* Contact Label (Arrow) */}
            <div className="hidden md:flex items-center gap-8">
              <span className="text-[14px] text-white font-bold tracking-widest uppercase">
                {isEn ? 'CONTACT' : '联系我'}
              </span>
              <span className="text-white/40 text-[10px]">▶</span>
            </div>

            {/* Contact Information List */}
            <ul className="flex flex-col space-y-3.5 text-[13px] md:text-[14px] font-normal tracking-wide">
              <li className="flex items-center">
                <span className="w-16 md:w-20 text-white/70">{isEn ? 'Email' : '邮箱'}</span>
                <a href="mailto:gunicki007@gmail.com" className="font-bold text-white hover:text-white/70 transition-colors">
                  gunicki007@gmail.com
                </a>
              </li>
              <li className="flex items-center">
                <span className="w-16 md:w-20 text-white/70">{isEn ? 'Phone' : '电话'}</span>
                <span className="font-bold text-white">+86 15801905482</span>
              </li>
              <li className="flex items-center">
                <span className="w-16 md:w-20 text-white/70">{isEn ? 'WeChat' : '微信'}</span>
                <span className="font-bold text-white">{isEn ? 'Scan QR to add' : '扫二维码添加'}</span>
              </li>
            </ul>
          </div>

          {/* QR Code Container */}
          <div className="w-[100px] h-[100px] shrink-0 rounded-[12px] bg-white p-[4px] relative shadow-[0_4px_20px_rgba(0,0,0,0.5)]">
             <img 
               src="https://img.nickiresume.cn/images/01profile/QRcode.webp" 
               alt="Contact QR Code" 
               className="w-full h-full object-cover rounded-[8px]" 
               onError={(e) => {
                 e.currentTarget.style.display = 'none';
               }} 
             />
             {/* Inner placeholder visual if image is missing */}
             <div className="absolute inset-[4px] flex items-center justify-center -z-10 border border-black/10 border-dashed rounded-[8px]">
               <span className="text-[10px] text-black/30 tracking-[0.15em] uppercase font-bold">QR</span>
             </div>
          </div>

        </div>

      </div>
    </footer>
  );
};
