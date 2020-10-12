const http = require('http'); // To use module, use requires method!

const hostname = "127.0.0.1";
const port = 1337;

// http.createServer((req, res)=>{
//     res.writeHead(200, { 'Content-Type': 'Text/plain' });
//     res.end('Hello World!');
// }).listen(port, hostname, () =>{
//     console.log(`Server running at http://${hostname}:${port}/`);
// });

const server = http.createServer((req, res)=>{
    res.writeHead(200, { 'Content-Type': 'Text/plain' });
    res.end('Hello World!');
});
server.listen(port, hostname, ()=>{
    console.log(`Server running at http://${hostname}:${port}/`);
});
console.log('after server.listen');