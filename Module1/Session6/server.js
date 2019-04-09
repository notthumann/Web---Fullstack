const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser')
const app = express();



mongoose.connect(
    'mongodb://nothuman:abc123@ds145178.mlab.com:45178/tk-hg',
    { userNewUrlParser: true},
    (err)=>{
        if(err) console.log(err)
        else console.log("Connect to DB success");
    }
);

app.use(bodyParser.json());

const apiRouter = require("./routers/apiRouters");
app.use("/api", apiRouter);

app.listen(6996, (err) =>{
    if(err) console.log(err)
    else console.log("Server start success");
})