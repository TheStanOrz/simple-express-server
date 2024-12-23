const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("歡迎來到簡易 Express 伺服器！");
});

app.get("/api/example", (req, res) => {
  res.json({ message: "這是範例 API 資料", success: true });
});

app.post("/api/data", (req, res) => {
  const receivedData = req.body;
  res.json({
    message: "成功接收到資料！",
    data: receivedData,
  });
});

app.listen(port, () => {
  console.log(`伺服器正在 http://localhost:${port} 運行中`);
});
