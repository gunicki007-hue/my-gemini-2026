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
  // Clean up conflicting classes
  'uppercase leading-none tracking-tighter w-full': 'uppercase w-full',
  'text-5xl md:text-\\[72px\\] font-semibold tracking-tight leading-none mb-6 font-sans uppercase': 'text-5xl md:text-[72px] font-semibold tracking-tight leading-[1.1] mb-6 font-sans uppercase'
};

processDir(path.join(__dirname, 'src'), replacements);
