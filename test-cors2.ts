async function test() {
  const res = await fetch("https://api.allorigins.win/raw?url=https://img.nickiresume.cn/Nimage/01-1.webp", { method: "HEAD" });
  console.log("Headers:");
  res.headers.forEach((v, k) => console.log(k, v));
}
test();
