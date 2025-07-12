//const https = require('https');
const express = require('express');
const path = require('path');
const app = express();
const port = 8000;

app.use('/static', express.static('./public'));

app.set('view engine', 'pug');

app.set('views', path.join(__dirname, 'views'));

app.get('/', (req, res)=> {
  const data = {
    message: 'Hello from GeeksForGeeks!',
    courses: ['Web Development', 'DSA', 'Java']
  };
  res.render('index', data);
});

app.get('/signup', (req, res) => {
  res.render('signup');
});

app.get('/login', (req, res) => {
  res.render('login');
});

app.get('/dice-game', (req, res) => {
  res.render('dice-game');
});

app.get('/api', (req, res) => {
  res.setHeader('content-type', 'application/json');
  fetch('https://mocki.io/v1/65dd5a2c-3400-440e-bae1-d6e35a1573d3', {method: 'GET', headers: {'Content-Type': 'application/json'}})
  .then(((response) => response.json()))
  .then(((text) => res.send(text)));
});

/*
// Create HTTPS server
const httpsServer = https.createServer({
  key: fs.readFileSync('/etc/ssl/certs/flashapp99.run.place.key'),
  cert: fs.readFileSync('/etc/ssl/certs/flashapp99.run.place.cer')
}, app);

// Start the server
httpsServer.listen(443, () => {
  console.log('HTTPS server running on port 443');
});
*/

app.listen(port, ()=> {
  console.log(`Server http://localhost:${port}`);
});