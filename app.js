const express = require('express');
const app = express();
const body_parser = require('body-parser');
const port = 3000;
app.use(express.static('public')); // public is directory name!!
app.use(urlencoded({ extended : false})); // can't use body object to get datas duing using post method!!
app.set('view engine', 'jade'); //connext express and jade
app.set("views", "./views"); //can be omitted, basically looking for views dir
app.locals.pretty = true;

app.get('/form', (req, res)=>{
    res.render('form');    
});

app.get('/form_reciever', (req, res)=>{
    const name = req.query.title;
    const des = req.query.description
    res.send(`${name} ${des}`);
});

app.post('/form_reciever', (req,res)=>{
    const name = req.body.title;
    const des = req.body.description;
    res.send("post hello~" + `${name} ${des}`);
})

app.get("/topic", (req,res)=>{
    const id = req.query.id;
    const result = `para : ${id}`;
    const topics = [
        'JavaScript is...',
        'NodeJS is...',
        'Express is...'
    ];
    const output = `
        <a href="/topic?id=0">JavaScript</a><br>
        <a href="/topic?id=1">NodeJs</a><br>
        <a href="/topic?id=2">Express</a><br>
        ${topics[id]}
    `;
    res.send(output);
})

app.get("/semantic/:id/:mode", (req, res)=>{
    res.send(`${req.params.id}, ${req.params.mode}`);
})

app.get("/template", (req, res)=>{
    res.render('temp', {_title:"Jade is Awesome!!", time:Date()});     
})

app.get('/', (req, res)=>{
    res.send("welcome to home~");
});

app.get('/dynamic', (req,res)=>{
    let list = '';
    for(var i =0; i<5;i++){
        list += `<li>list_${i}</li>`;
    }
    const time = Date();
    const output = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
        <h1>hello dynamic <- To check change result, must reload server. this seems statatic is better => but not productive!!(hard to modify)</h1>
        <ul>
        ${list}
        </ul>
        ${time}
    </body>
    </html>`;
     
    res.send(output);
});

app.get('/route', (req, res)=>{
    res.send('Hello route. <img src="/image1.png"/>');
});

app.get('/test', (req, res)=>{
    res.send("<h1>.get is router and making router is routing~</h1>");
})

app.listen(port, ()=>{
    console.log(`http://localhost:${port}`);
})