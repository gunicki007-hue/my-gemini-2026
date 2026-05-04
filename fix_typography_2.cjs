const fs = require('fs');
const path = require('path');

function replaceInFile(filePath, replacements) {
  let content = fs.readFileSync(filePath, 'utf-8');
  let original = content;

  for (const [regex, replacement] of Object.entries(replacements)) {
    content = content.replace(new RegExp(regex, 'g'), replacement);
  }

  if (content !== original) {
    fs.writeFileSync(filePath, content, 'utf-8');
    console.log(`Updated ${filePath}`);
  }
}

function processDir(dir, replacements) {
  const items = fs.readdirSync(dir);
  for (const item of items) {
    const fullPath = path.join(dir, item);
    if (fs.statSync(fullPath).isDirectory()) {
      processDir(fullPath, replacements);
    } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.ts')) {
      replaceInFile(fullPath, replacements);
    }
  }
}

const replacements = {
  // NICKI headers
  'text-4xl md:text-\\[40px\\] font-black tracking-widest text-white uppercase font-sans': 'text-4xl md:text-[40px] font-bold tracking-[0.1em] text-white uppercase font-sans',
  'text-\\[24px\\] md:text-\\[26px\\] font-black tracking-widest': 'text-[24px] md:text-[26px] font-bold tracking-[0.1em]',
  
  // AIGC/Web3/Spatial H1
  'font-black font-sans uppercase leading-\\(none|tight\\) tracking-tighter': 'font-semibold font-sans uppercase leading-[1.1] tracking-tight',
  'font-black font-\\["PingFang_SC","Microsoft_YaHei"\\] uppercase leading-none tracking-normal': 'font-medium font-puhuiti uppercase leading-[1.2] tracking-normal',
  'text-\\[60px\\] sm:text-\\[90px\\] md:text-\\[120px\\] xl:text-\\[150px\\] font-black': 'text-[60px] sm:text-[90px] md:text-[120px] xl:text-[140px] font-semibold',
  'text-\\[50px\\] sm:text-\\[70px\\] md:text-\\[100px\\] xl:text-\\[120px\\] font-black': 'text-[50px] sm:text-[70px] md:text-[90px] xl:text-[110px] font-medium',

  // Remaining tracking-widest
  'text-\\[10px\\] text-black\\/30 tracking-widest uppercase': 'text-[10px] text-black/30 tracking-[0.15em] uppercase font-bold',
  'tracking-widest font-black font-puhuiti': 'tracking-[0.05em] font-medium font-puhuiti',
  'tracking-widest sm:tracking-wider': 'tracking-[0.05em]',
  'text-\\[16px\\] md:text-\\[18px\\] font-puhuiti': 'text-[16px] md:text-[18px] font-puhuiti font-medium tracking-[0.05em]',
  'text-white\\/50 group-hover:text-white\\/90 transition-colors duration-500 leading-\\[1.8\\] \\$\\{isEn \\? \'text-\\[15px\\] md:text-\\[16px\\] tracking-wide\' : \'text-\\[15px\\] md:text-\\[16px\\] tracking-widest\'\\}': 'text-white/50 group-hover:text-white/90 transition-colors duration-500 leading-[1.8] ${isEn ? \'text-[15px] md:text-[16px] tracking-[0.015em]\' : \'text-[15px] md:text-[16px] tracking-[0.03em]\'}',
  
  // English titles tracking
  'tracking-widest uppercase font-bold font-space-grotesk': 'tracking-[0.15em] uppercase font-bold font-space-grotesk',
  'text-\\[15px\\] md:text-\\[16px\\] font-bold tracking-widest': 'text-[15px] md:text-[16px] font-bold tracking-[0.15em]'
};

processDir(path.join(__dirname, 'src'), replacements);
