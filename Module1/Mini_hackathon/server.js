const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();

mongoose.connect(
    'mongodb://nothuman:minhngoc123@ds129536.mlab.com:29536/score-keeper',
    {userNewUrlParser: true},
    (err)=>{
        if(err) console.log(err)
        else console.log('connect to db success!')
    }
);