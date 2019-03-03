const express = require('express');
const fs = require('fs');

var app = express();

app.get('/',function(req,res){
    res.sendFile(__dirname + '/index.html')
});

app.get('/:webnumber',function(req,res){
    // console.log(req.params.webnumber);
    jsonlist = ['web13','web14','web15','web16','web17','web18','web19','web20']
        if(jsonlist.includes(req.params.webnumber)){
            var li = '';
            var data = fs.readFileSync(__dirname+'/data/'+ req.params.webnumber +'.json','utf-8');
            var list = JSON.parse(data);
            for(i = 0; i < list.length; i ++){
                li = li + '<li>'+ list[i] + '</li>'
            }
        }
    res.send('<ul>'+li+'</ul>');
});


app.listen(3000, function(err){
    if(err) console.log(err);
    else console.log('Server start succesfully!');
});