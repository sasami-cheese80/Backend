import app from "./server";

// 起動するだけ
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`server is running. PORT: http://localhost:${PORT}`);
});
