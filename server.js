// 引入必要模組
const express = require("express");
const app = express();
const port = 3000; // 設定伺服器運行的埠號

// 設定中介軟體解析 JSON 請求
app.use(express.json());

// 設定一個簡單的首頁路由
app.get("/", (req, res) => {
  res.send("歡迎來到簡易 Express 伺服器！");
});

// 設定一個範例 API 路由
app.get("/api/example", (req, res) => {
  res.json({ message: "這是範例 API 資料", success: true });
});

// 設定一個 POST API 範例
app.post("/api/data", (req, res) => {
  const receivedData = req.body;
  res.json({
    message: "成功接收到資料！",
    data: receivedData,
  });
});

// 啟動伺服器
app.listen(port, () => {
  console.log(`伺服器正在 http://localhost:${port} 運行中`);
});
