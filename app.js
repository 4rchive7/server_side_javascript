const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res)=>{
    res.send("welcome to home~");
});

app.get('/test', (req, res)=>{
    res.send("<h1>.get is router and making router is routing~</h1>");
})

app.listen(port, ()=>{
    console.log(`http://localhost:${port}`);
})