const fs = require('fs');

function replaceInFile(filePath, replacements) {
    if (!fs.existsSync(filePath)) return;
    let content = fs.readFileSync(filePath, 'utf8');
    let changed = false;
    for (const [search, replace] of replacements) {
        if (content.includes(search)) {
            content = content.replace(new RegExp(search.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g'), replace);
            changed = true;
        }
    }
    if (changed) {
        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`Restored ${filePath}`);
    }
}

// AIGCSection02.tsx
replaceInFile('src/sections/AIGC/AIGCSection02.tsx', [
    ['<ptext-white/50>', '<p className={`text-white/50 group-hover:text-white/90 transition-colors duration-500 leading-[1.8] ${isEn ? \'text-[15px] md:text-[16px] tracking-[0.015em]\' : \'text-[15px] md:text-[16px] tracking-[0.03em]\'}`}>']
]);

// AIGCWorkflow.tsx
replaceInFile('src/sections/AIGC/AIGCWorkflow.tsx', [
    ['<ptext-white/50>', '<p className={`text-white/50 ${isEn ? \'font-medium leading-[1.6]\' : \'font-medium tracking-wide leading-[1.8]\'}`}>']
]);

// AIGCWorkflowLeft.tsx
replaceInFile('src/sections/AIGC/AIGCWorkflowLeft.tsx', [
    ['<ptext-white/50>', '<p className={`text-white/50 ${isEn ? \'font-medium leading-[1.6]\' : \'font-medium tracking-wide leading-[1.8]\'}`}>']
]);

// AIGCSection05.tsx
replaceInFile('src/sections/AIGC/AIGCSection05.tsx', [
    ['<ptext-white/50>\n', '<p className="text-white/50 font-medium">\n'],
    ['<ptext-white/50>{isEn ? "Technology Path" : "技术路径"}</p>', '<p className="text-white/50 font-bold">{isEn ? "Technology Path" : "技术路径"}</p>'],
    ['<ptext-white/50>{isEn ? "Generational Gap Comparison" : "代差对比"}</p>', '<p className="text-white/50 font-bold">{isEn ? "Generational Gap Comparison" : "代差对比"}</p>'],
    ['<ptext-white/50>{isEn ? "Delivery Absolute Values" : "交付极值"}</p>', '<p className="text-white/50 font-bold">{isEn ? "Delivery Absolute Values" : "交付极值"}</p>']
]);

// Spatial files
let s1 = fs.readFileSync('src/sections/Spatial/SpatialSection01.tsx', 'utf8');
s1 = s1.replace(/<ptext-white\/50>/g, '<p className="text-white/50 text-[16px] leading-[1.8]">');
fs.writeFileSync('src/sections/Spatial/SpatialSection01.tsx', s1);

let s2 = fs.readFileSync('src/sections/Spatial/SpatialSection02.tsx', 'utf8');
s2 = s2.replace(/<ptext-white\/50>/g, '<p className="text-white/50 text-[16px] leading-[1.8]">');
fs.writeFileSync('src/sections/Spatial/SpatialSection02.tsx', s2);

let s3 = fs.readFileSync('src/sections/Spatial/SpatialSection03.tsx', 'utf8');
s3 = s3.replace(/<ptext-white\/50>/g, '<p className="text-white/50 text-[16px] leading-[1.8]">');
fs.writeFileSync('src/sections/Spatial/SpatialSection03.tsx', s3);

let in8 = fs.readFileSync('src/sections/Insurtech/InsurtechSection08.tsx', 'utf8');
in8 = in8.replace(/<ptext-white\/50>/g, '<p className="text-white/50 tracking-wide">');
fs.writeFileSync('src/sections/Insurtech/InsurtechSection08.tsx', in8);

