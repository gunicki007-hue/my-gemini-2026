const fs = require('fs');
const path = require('path');

const targetEn = "text-[50px] sm:text-[70px] md:text-[90px] xl:text-[100px] font-black font-sans tracking-[-0.04em] leading-[0.95]";
const targetZh = "text-[40px] sm:text-[60px] md:text-[80px] xl:text-[90px] font-black font-puhuiti tracking-[-0.02em] leading-[1.1]";
const unifiedStr = "`uppercase w-full ${isEn ? '" + targetEn + "' : '" + targetZh + "'}`";

function walk(dir) {
  for (const item of fs.readdirSync(dir)) {
    const p = path.join(dir, item);
    if (fs.statSync(p).isDirectory()) {
      walk(p);
    } else if (p.endsWith('.tsx')) {
      let content = fs.readFileSync(p, 'utf-8');
      const orig = content;

      // Replace common big title variations
      content = content.replace(/`uppercase w-full \S*?\s*\$\{isEn \? 'text.*?' : 'text.*?'\}`/g, unifiedStr);
      content = content.replace(/`uppercase w-full max-w-\[1200px\]\s*\$\{isEn \? 'text.*?' : 'text.*?'\}`/g, 
        "`uppercase w-full max-w-[1200px] ${isEn ? '" + targetEn + "' : '" + targetZh + "'}`"
      );
      content = content.replace(/`text-center uppercase w-full max-w-\[1200px\]\s*\$\{isEn \? 'text.*?' : 'text.*?'\}`/g, 
        "`text-center uppercase w-full max-w-[1200px] ${isEn ? '" + targetEn + "' : '" + targetZh + "'}`"
      );
      content = content.replace(/`uppercase w-full mb-6 md:mb-8 break-words hyphens-auto \$\{isEn \? 'text.*?' : 'text.*?'\}`/g, 
        "`uppercase w-full mb-6 md:mb-8 break-words hyphens-auto ${isEn ? '" + targetEn + "' : '" + targetZh + "'}`"
      );

      if (content !== orig) {
        fs.writeFileSync(p, content);
        console.log('Unified titles in', p);
      }
    }
  }
}
walk(path.join(process.cwd(), 'src/sections'));
