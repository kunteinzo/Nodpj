const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const port = 3000;

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

app.listen(port, ()=> {
  console.log(`Server http://localhost:${port}`);
});