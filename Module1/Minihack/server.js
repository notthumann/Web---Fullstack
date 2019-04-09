const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();
const GameModel = require('./models/game')


mongoose.connect(
    'mongodb://nothuman:abc123@ds215019.mlab.com:15019/minihack-db',
    {userNewUrlParser: true},
    (err) =>{
        if(err) console.log(err);
        else console.log('connect to db success!!!');
    }
);

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.get('/',(req,res) => {
    res.sendFile(__dirname + '/views/create.html')
})

app.post('/addgame', (req,res) =>{
    // console.log(req.body);
    var game = new GameModel({
        p1:req.body.p1,
        p2:req.body.p2,
        p3:req.body.p3,
        p4:req.body.p4,
    })
    // console.log(game);
    game.save();
    // console.log(game._id)
    res.redirect('/game/' + game._id);
})

app.post('/game/:gameId',(req,res) =>{
    
})

app.get('/gameDetail/:gameId', (req,res) =>{
    gameId = req.params.gameId;
    GameModel.findById(gameId, (err,doc) =>{
        if(err) console.log(err);
        else res.send(doc);   
    })
})

app.get('/game/:gameId', (req,res) =>{
    res.sendFile(__dirname + '/views/main.html')
})



app.listen('8080', (err) =>{
    if(err) console.log(err);
    else console.log('Server start'); 
})