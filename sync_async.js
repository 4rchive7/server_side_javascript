const fs = require("fs");

//Sync
console.log(1);
const data = fs.readFileSync('data.txt', {encoding:'utf8'});
console.log(data);

//Async
console.log(2);
fs.readFile('data.txt', {encoding:'utf8'}, function(err, data){
    console.log(3);
    console.log(data);
});
console.log(4);
///Line 14 executed befor inner function called in line 10 because of the execution terms between reaeFile method and inner function in readFile method.
