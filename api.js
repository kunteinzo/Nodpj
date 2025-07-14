const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.send({"success": true});
});

app.post('/new', (req, res)=>{
    res.send({"success": true});
    console.log('There is a request on /new');
    console.log(req.headers);
});

app.listen(8000, ()=>{
    console.log(`API Server at: http://0.0.0.0:8000`);
});