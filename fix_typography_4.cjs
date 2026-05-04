const fs = require('fs');
const path = require('path');

function replaceInFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf-8');
  let original = content;

  // Remove WebkitTextStroke
  content = content.replace(/className="text-transparent" style=\{\{\s*WebkitTextStroke:\s*['"]1px rgba\(255,255,255,0\.4\)['"]\s*\}\}/g, "");
  content = content.replace(/style=\{\{\s*WebkitTextStroke:\s*['"]1px rgba\(255,255,255,0\.4\)['"]\s*\}\}/g, "");
  content = content.replace(/<span \s*>/g, "<span>");
  // Some places might have had className="text-transparent" left if it wasn't caught by the first regex if it was split
  // Let's do a more robust replace for the stroke pattern
  content = content.replace(/<span[^>]*WebkitTextStroke[^>]*>(.*?)<\/span>/g, "<span>$1</span>");

  // Make all H1/H2 fonts bold and tightly paced
  // Change back font-semibold to font-black and tracking-tight to tracking-tighter
  content = content.replace(/font-semibold/g, 'font-black');
  content = content.replace(/font-medium tracking-normal leading-\[1\.2\] font-puhuiti/g, 'font-black tracking-tighter leading-[1.1] font-puhuiti');
  
  // Specific catch for Chinese headers
  content = content.replace(/font-medium font-puhuiti/g, 'font-black font-puhuiti');
  content = content.replace(/tracking-\[0\.05em\]/g, 'tracking-tighter'); // remove the loose tracking from chinese
  
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
