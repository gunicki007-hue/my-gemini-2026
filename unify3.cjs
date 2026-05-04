const fs = require('fs');
const path = require('path');

const newTargetEn = "text-[44px] sm:text-[60px] md:text-[76px] xl:text-[94px] font-black font-sans tracking-tight leading-[1.1]";
const newTargetZh = "text-[40px] sm:text-[56px] md:text-[70px] xl:text-[90px] font-black font-puhuiti tracking-tighter leading-[1.1] [-webkit-text-stroke:2px_currentColor]";

function walk(dir) {
  for (const item of fs.readdirSync(dir)) {
    const p = path.join(dir, item);
    if (fs.statSync(p).isDirectory()) {
      walk(p);
    } else if (p.endsWith('.tsx')) {
      let content = fs.readFileSync(p, 'utf-8');
      const orig = content;

      // Replace generic targets found in the code
      content = content.replace(/text-\[[0-9]+px\] sm:text-\[[0-9]+px\] md:text-\[[0-9]+px\] xl:text-\[[0-9]+px\] font-black font-sans tracking-[a-zA-Z0-9\-\.\[\]]+ leading-\[1\.1\]/g, newTargetEn);
      
      // Also catch previous old styles we had
      content = content.replace(/text-\[[0-9]+px\] sm:text-\[[0-9]+px\] md:text-\[[0-9]+px\] xl:text-\[[0-9]+px\] font-black font-sans tracking-\[-[0-9\.]+em\] leading-\[0\.95\]/g, newTargetEn);

      // Chinese targets
      content = content.replace(/text-\[[0-9]+px\] sm:text-\[[0-9]+px\] md:text-\[[0-9]+px\] xl:text-\[[0-9]+px\] font-black font-puhuiti tracking-[a-zA-Z0-9\-\.\[\]]+ leading-\[1\.1\](\s*\[-webkit-text-stroke:[^\]]+\])?/g, newTargetZh);
      

      if (content !== orig) {
        fs.writeFileSync(p, content);
        console.log('Unified titles in', p);
      }
    }
  }
}
walk(path.join(process.cwd(), 'src/sections'));
