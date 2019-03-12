const fs = require('fs');
const path = require('path');


var data = fs.readFileSync(path.resolve(__dirname,'../questions.json'));
var list = JSON.parse(data);
document.getElementById('question').innerText = list[Math.floor((Math.random() * list.length) + 1)] + ' ';
