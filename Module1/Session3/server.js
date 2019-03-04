const express =require('express');
const path = require('path');

const app = express();

app.use(express.static('public'));

app.get('/', function(req, res){
    console.log(__dirname);
    // console.log(req);
    // res.send('<h1>Hello world</h1>');
    res.sendFile(path.resolve(__dirname, '../Session2/index1.html'));
});

//param
// //http://localhost:6969/nothuman
// app.get('/:name', function(req,res){
//     console.log(req.params.name);
// });

//query
//http://localhost:6969/query?name=nothuman&age=24
app.get('/query', function(req,res){
    console.log(req.query);
    res.send('<h1>'+ req.query.name + '</h1>');
});

// app.get('/style1.css',function(req,res){
//     res.sendFile(__dirname + '/Session2/style1.css')
// });

app.listen(6969, function(err){
if(err) console.log(err)
else console.log('Server start success!!');
});

// http://localhost:6969
