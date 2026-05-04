import fs from 'fs';
import https from 'https';
import path from 'path';

const url = "https://img.nickiresume.cn/images/0418resume/01-1.webp";
const dest = path.resolve("./public/assets/01-1.webp");

// Ensure directory exists
const dir = path.dirname(dest);
if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir, { recursive: true });
}

https.get(url, (res) => {
  if (res.statusCode !== 200) {
    console.error("Failed to download with status code:", res.statusCode);
    process.exit(1);
  }
  const file = fs.createWriteStream(dest);
  res.pipe(file);
  file.on('finish', () => {
    file.close();
    console.log("Download complete");
  });
}).on("error", (err) => {
  console.error("Error: ", err.message);
  process.exit(1);
});
