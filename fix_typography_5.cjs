const fs = require('fs');
const path = require('path');

function replaceInFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf-8');
  let original = content;

  // Fix InsurtechSection05 orphaned text-transparent
  content = content.replace(/className="text-transparent"/g, 'className="text-white"');
  
  // Now let's fix all H1 and H2 tracking/font-weight.
  // The user wants:
  // - English and Chinese both bold/black
  // - Close letter spacing (tight/tighter)
  
  // We'll just replace 'font-semibold' with 'font-black' everywhere in H1/H2 (though we can just do global safely since we want bold titles).
  content = content.replace(/font-semibold/g, 'font-black');
  
  // Some places might have 'tracking-tight', let's change to 'tracking-tighter' globally as long as it's not a button or something that needs wider tracking.
  // Actually, specifically for the H1/H2 blocks we can find them:
  content = content.replace(/tracking-tight(\s|')/g, 'tracking-tighter$1');
  
  // Let's also do tracking-[...em] for the EN titles to make them tight if they were tracking-[0.1em]
  // Wait, looking at Outro components: "uppercase tracking-[0.1em] text-[20px] md:text-[30px] font-sans font-black"
  // Let's make it tracking-tighter instead of tracking-[0.1em] or tracking-[0.2em] for the headings.
  // The user explicitly wants "字间隔很紧凑" (letter spacing very tight)
  content = content.replace(/tracking-\[0\.[12]em\]/g, 'tracking-tighter');
  
  // Clean up any double tracking-tighter
  content = content.replace(/tracking-tighter tracking-tighter/g, 'tracking-tighter');
  content = content.replace(/font-black font-black/g, 'font-black');
  
  if (content !== original) {
    fs.writeFileSync(filePath, content, 'utf-8');
    console.log(`Updated ${filePath}`);
  }
}

function processDir(dir) {
  const items = fs.readdirSync(dir);
  if (dir.includes('node_modules')) return;
  for (const item of items) {
    const fullPath = path.join(dir, item);
    if (fs.statSync(fullPath).isDirectory()) {
      processDir(fullPath);
    } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.ts')) {
      replaceInFile(fullPath);
    }
  }
}

processDir(path.join(__dirname, 'src'));
