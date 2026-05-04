const fs = require('fs');
const path = require('path');

const exactEn = "text-[94px] font-black font-sans tracking-tight leading-[1.1]";
const exactZh = "text-[90px] font-black font-puhuiti tracking-tighter leading-[1.1] [-webkit-text-stroke:2px_currentColor]";

function walk(dir) {
  for (const item of fs.readdirSync(dir)) {
    const p = path.join(dir, item);
    if (fs.statSync(p).isDirectory()) {
      walk(p);
    } else if (p.endsWith('.tsx')) {
      let content = fs.readFileSync(p, 'utf-8');
      const orig = content;

      // Replace our previous generated targeted classes:
      const prevEnRegex = /text-\[[0-9]+px\] sm:text-\[[0-9]+px\] md:text-\[[0-9]+px\] xl:text-\[[0-9]+px\] font-black font-sans tracking-tight leading-\[1\.1\]/g;
      const prevZhRegex = /text-\[[0-9]+px\] sm:text-\[[0-9]+px\] md:text-\[[0-9]+px\] xl:text-\[[0-9]+px\] font-black font-puhuiti tracking-[a-zA-Z0-9\-\.\[\]]+ leading-\[1\.1\]\s*\[-webkit-text-stroke:[^\]]+\]/g;

      content = content.replace(prevEnRegex, exactEn);
      content = content.replace(prevZhRegex, exactZh);

      // What if some didn't get caught because of spacing or no text-stroke?
      const prevZhFallback = /text-\[[0-9]+px\] sm:text-\[[0-9]+px\] md:text-\[[0-9]+px\] xl:text-\[[0-9]+px\] font-black font-puhuiti tracking-[a-zA-Z0-9\-\.\[\]]+ leading-\[1\.1\]/g;
      content = content.replace(prevZhFallback, exactZh);

      if (content !== orig) {
        fs.writeFileSync(p, content);
        console.log('Fixed exact sizes in', p);
      }
    }
  }
}
walk(path.join(process.cwd(), 'src'));
