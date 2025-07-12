const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.send({"success": true});
});

app.listen(8000, ()=>{
    console.log(`API Server at: http://0.0.0.0:8000`);
});