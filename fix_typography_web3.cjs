const fs = require('fs');
const path = require('path');

function replaceInFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf-8');
  let original = content;

  // Let's standardise the EN text block:
  
  // EN 1
  content = content.replace(/'text-\[50px\] sm:text-\[70px\] md:text-\[90px\] xl:text-\[100px\].*?'/g, 
                            "'text-[50px] sm:text-[70px] md:text-[90px] xl:text-[100px] font-black font-sans tracking-tighter leading-[0.95]'");
  // EN 2
  content = content.replace(/'text-\[50px\] sm:text-\[70px\] md:text-\[80px\] xl:text-\[90px\].*?'/g, 
                            "'text-[50px] sm:text-[70px] md:text-[80px] xl:text-[90px] font-black font-sans tracking-tighter leading-[0.95]'");

  // ZH 1
  content = content.replace(/'text-\[40px\] sm:text-\[60px\] md:text-\[80px\] xl:text-\[90px\].*?'/g, 
                            "'text-[40px] sm:text-[60px] md:text-[80px] xl:text-[90px] font-black font-puhuiti tracking-[-0.02em] leading-[1.1]'");
  // ZH 2
  content = content.replace(/'text-\[40px\] sm:text-\[60px\] md:text-\[70px\] xl:text-\[80px\].*?'/g, 
                            "'text-[40px] sm:text-[60px] md:text-[70px] xl:text-[80px] font-black font-puhuiti tracking-[-0.02em] leading-[1.1]'");

  if (content !== original) {
    fs.writeFileSync(filePath, content, 'utf-8');
    console.log(`Updated ${filePath}`);
  }
}

function processDir(dir) {
  const items = fs.readdirSync(dir);
  for (const item of items) {
    const fullPath = path.join(dir, item);
    if (fs.statSync(fullPath).isDirectory()) {
      processDir(fullPath);
    } else if (fullPath.endsWith('.tsx')) {
      replaceInFile(fullPath);
    }
  }
}

// We will run this on ALL sections to be safe!
processDir(path.join(__dirname, 'src/sections'));
