const fs = require('fs');
const path = require('path');

function processDir(dir) {
  const items = fs.readdirSync(dir);
  for (const item of items) {
    const fullPath = path.join(dir, item);
    if (fs.statSync(fullPath).isDirectory()) {
      processDir(fullPath);
    } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.ts')) {
      processFile(fullPath);
    }
  }
}

function processFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf-8');
  let originalContent = content;

  // 1. Refine Body Text (EN & ZH)
  // EN Body: font-sans font-light tracking-[0.015em] leading-[1.7]
  // ZH Body: font-sans font-light tracking-[0.03em] leading-[1.8]
  
  content = content.replace(/text-\[16px\] xl:text-\[18px\] font-light tracking-wide leading-\[30px\]/g,
    "font-sans font-light tracking-[0.015em] leading-[1.7] text-[15px] xl:text-[17px]");
  content = content.replace(/text-\[17px\] tracking-widest leading-\[30px\]/g,
    "font-sans font-light tracking-[0.03em] leading-[1.8] text-[15px] xl:text-[17px] text-justify");
    
  content = content.replace(/text-\[15px\] xl:text-\[17px\] tracking-normal leading-\[1\.8\]/g,
    "font-sans font-light tracking-[0.015em] leading-[1.7] text-[15px] xl:text-[17px]");
  content = content.replace(/text-\[17px\] text-justify tracking-widest leading-\[38\.6px\]/g,
    "font-sans font-light tracking-[0.03em] leading-[1.8] text-[15px] xl:text-[17px] text-justify");
    
  content = content.replace(/text-\[15px\] xl:text-\[17px\] tracking-widest leading-\[2\]/g,
    "font-sans font-light tracking-[0.03em] leading-[1.8] text-[15px] xl:text-[17px] text-justify");
  content = content.replace(/text-\[15px\] xl:text-\[17px\] tracking-widest sm:tracking-wider xl:tracking-widest leading-\[2\]/g,
    "font-sans font-light tracking-[0.03em] leading-[1.8] text-[15px] xl:text-[17px] text-justify");

  content = content.replace(/text-\[18px\] tracking-normal leading-\[30px\]/g,
    "font-sans font-light tracking-[0.015em] leading-[1.7] text-[16px] xl:text-[18px]");
  content = content.replace(/text-\[18px\] text-justify tracking-widest leading-\[30px\]/g,
    "font-sans font-light tracking-[0.03em] leading-[1.8] text-[16px] xl:text-[18px] text-justify");
    
  // Sub-body or hints
  content = content.replace(/text-\[14px\] md:text-\[15px\] font-sans font-light tracking-wide leading-\[1\.8\]/g,
    "font-sans font-light tracking-[0.015em] leading-[1.7] text-[14px] md:text-[15px]");
  content = content.replace(/text-\[17px\] text-justify tracking-widest leading-\[38\.6px\]/g, 
    "font-sans font-light tracking-[0.03em] leading-[1.8] text-[15px] xl:text-[17px] text-justify");

  // 2. Headings & Titles
  // Large section headers
  content = content.replace(/text-\[50px\] sm:text-\[70px\] md:text-\[90px\] xl:text-\[100px\] font-black font-sans/g,
    "text-[50px] sm:text-[70px] md:text-[90px] xl:text-[100px] font-semibold font-sans tracking-tight leading-[1.1]");
  content = content.replace(/text-\[40px\] sm:text-\[60px\] md:text-\[80px\] xl:text-\[90px\] font-extrabold/g,
    "text-[40px] sm:text-[60px] md:text-[80px] xl:text-[90px] font-medium tracking-normal leading-[1.2]");

  // Secondary section headers
  content = content.replace(/text-\[32px\] md:text-\[40px\] xl:text-\[48px\] font-black/g,
    "text-[32px] md:text-[40px] xl:text-[48px] font-semibold"); // fallback to semibold
  content = content.replace(/font-black uppercase/g, "font-semibold uppercase tracking-tight");

  // General fixes for font-black
  content = content.replace(/font-black tracking-tighter/g, "font-semibold tracking-tight");
  
  // Font standardization (Chinese)
  content = content.replace(/font-\["PingFang_SC","Microsoft_YaHei"\]/g, "font-puhuiti");

  // Outros (the specific "Let's innovate together" parts)
  content = content.replace(/tracking-\[0\.2em\] text-\[20px\] md:text-\[30px\] font-sans font-bold/g,
    "tracking-[0.1em] text-[20px] md:text-[30px] font-sans font-semibold");
  content = content.replace(/tracking-\[0\.1em\] text-\[24px\] md:text-\[30px\] font-puhuiti font-medium/g,
    "tracking-[0.05em] text-[24px] md:text-[30px] font-puhuiti font-medium");
  content = content.replace(/tracking-\[0\.2em\] text-\[24px\] md:text-\[32px\] font-sans font-bold/g,
    "tracking-[0.1em] text-[24px] md:text-[32px] font-sans font-semibold");

  // 3. Labels and Overheads
  // EN: text-[11px] md:text-[12px] font-bold tracking-wider uppercase -> tracking-[0.15em] 
  // ZH: text-[12px] md:text-[14px] font-medium tracking-widest -> tracking-[0.08em]
  content = content.replace(/text-\[11px\] md:text-\[12px\] font-bold tracking-wider uppercase/g,
    "text-[11px] md:text-[12px] font-semibold tracking-[0.15em] uppercase");
  content = content.replace(/text-\[12px\] md:text-\[14px\] font-medium tracking-widest/g,
    "text-[12px] md:text-[14px] font-medium tracking-[0.08em]");

  if (content !== originalContent) {
    fs.writeFileSync(filePath, content, 'utf-8');
    console.log(`Updated typography in ${filePath}`);
  }
}

processDir(path.join(__dirname, 'src'));
console.log('Typography update complete.');
