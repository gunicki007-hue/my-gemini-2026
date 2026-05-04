async function test() {
  const res = await fetch("https://img.nickiresume.cn/Nimage/01-1.webp", { method: "HEAD", mode: "cors" });
  console.log("Headers:");
  res.headers.forEach((v, k) => console.log(k, v));
}
test();
