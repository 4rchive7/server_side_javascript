const express = require('express');
const app = express();
const PORT = 3000;
//---------------------------------------Express Settings--------


const body_parser = require('body-parser');
app.use(body_parser.urlencoded({ extended : false}));
//-----------------------------Basic Body Parser Settings---------

const fs = require('fs');


app.set('view engine', 'jade'); 
app.set("views", "./views_file"); 
app.locals.pretty = true;
//-------------------------------------------Jade Settings--------

app.get('/topic/new', (req,res)=>{
    
    fs.readdir('data', 'utf8', (err, files)=>{
        if(err){
            res.send("Internal Server Error");
            console.log(err);
        } 
        res.render('new', {topics : files});
    });
})


app.post('/topic', (req,res)=>{
    const title = req.body.title;
    const desc = req.body.description;
    
    fs.writeFile(`data/${title}`, desc, (err)=>{
        if(err){
            console.log(err);
            res.status(500).send(`Something goes wrong... ;(`);
        }
        res.redirect('/topic/'+title);
    })
})

app.get(['/topic','/topic/:id'], (req,res)=>{

    fs.readdir('data', 'utf8', (err, files)=>{
        if(err){
            res.send("Internal Server Error");
            console.log(err);
        } 

        const id = req.params.id;
        if (id) {
            fs.readFile(`data/${id}`, "utf-8", (err, data) => {
                if (err) {
                    res.send('Internal Server Error');
                    console.log(err);
                }
                res.render('view', { title: id, text: data, topics: files });
            })
        }else{
            res.render('view', {title: "Welcome to Server Side Javascript", text: "description... ", topics: files  });
        }    
    });

    
});


app.listen(PORT, () => {
    console.log(`Connected, ${PORT}] now available!!`);
});
